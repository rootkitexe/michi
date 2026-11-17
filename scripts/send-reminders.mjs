// Sends each learner one daily reminder at their chosen local time, only if they haven't met their goal yet.
// Runs hourly from GitHub Actions. Needs the FIREBASE_SERVICE_ACCOUNT secret (the service account JSON).
import admin from 'firebase-admin';

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) { console.log('FIREBASE_SERVICE_ACCOUNT secret is not set; skipping.'); process.exit(0); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });
const db = admin.firestore();
const fcm = admin.messaging();
const APP_URL = 'https://rootkitexe.github.io/michi/';

const local = (tz, now) => {
  const hour = +new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', hourCycle: 'h23' }).format(now);
  const day = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
  return { hour, day };
};
const dayDiff = (a, b) => Math.round((new Date(b + 'T00:00Z') - new Date(a + 'T00:00Z')) / 864e5);

function message(S, today, now) {
  const xp = (S.xp || {})[today] || 0, goal = S.goal || 50;
  if (xp >= goal) return null;                       // goal already met today
  const due = Object.values(S.srs || {}).filter(c => c && c.due <= now).length;
  const st = S.streak || {}, gap = st.last ? dayDiff(st.last, today) : 99;
  const alive = st.n > 0 && (gap <= 1 || gap - 1 <= (S.freeze || 0)) ? st.n : 0;
  const keep = alive && st.last !== today ? ` Keep your ${alive}-day streak going.` : '';
  if (xp > 0) return { title: 'Almost there', body: `${xp}/${goal} XP today. A few more minutes to hit your goal.` };
  if (due > 0) return { title: 'Your reviews are ready', body: `${due} review${due === 1 ? '' : 's'} waiting.${keep}` };
  if (alive) return { title: 'Keep your streak alive', body: `You're on a ${alive}-day streak. A few minutes today keeps it going.` };
  return { title: 'A few minutes of Japanese?', body: 'Your next lesson is waiting in Michi.' };
}

const now = new Date(), nowMs = now.getTime();
const snap = await db.collection('reminders').where('on', '==', true).get();
let sent = 0, skipped = 0, removed = 0;
for (const doc of snap.docs) {
  const r = doc.data();
  try {
    if (!r.token) { skipped++; continue; }
    const { hour, day } = local(r.tz || 'UTC', now);
    const h = Number.isInteger(r.hour) ? r.hour : 19;
    // Send in the chosen hour, or up to 2 hours late if GitHub's scheduler was delayed.
    if (hour < h || hour > h + 2 || r.lastSent === day) { skipped++; continue; }
    const u = await db.collection('users').doc(doc.id).get();
    let S = {};
    try { S = u.exists ? JSON.parse(u.data().s || '{}') : {}; } catch { S = {}; }
    const m = message(S, day, nowMs);
    if (m) {
      await fcm.send({ token: r.token, data: { title: m.title, body: m.body, url: APP_URL }, webpush: { headers: { Urgency: 'high', TTL: '21600' } } });
      sent++;
    } else skipped++;
    await doc.ref.update({ lastSent: day });
  } catch (e) {
    const code = e && e.errorInfo && e.errorInfo.code || e.code || '';
    if (/registration-token-not-registered|invalid-registration-token|invalid-argument/.test(code)) {
      await doc.ref.update({ on: false }); removed++;
    } else console.error('Failed for one learner:', code || e.message);
  }
}
console.log(`Reminders: ${sent} sent, ${skipped} skipped, ${removed} turned off (expired).`);
