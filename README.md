# Michi 道 — learn Japanese, step by step

**Live app:** https://rootkitexe.github.io/michi/

Michi is a free, single-page app that teaches Japanese from absolute zero towards JLPT N5, and on to higher levels as new stages are added. Every unit unlocks only when you pass the one before it, so you build a real foundation instead of skipping ahead.

## What's inside

| Stage | Units | What you learn |
|---|---|---|
| Hiragana | 8 | All 46 characters, voiced sounds, combinations, small っ, long vowels + mastery exam |
| Katakana | 6 | The full set, including sounds used for foreign words + mastery exam |
| First steps (N5) | 5 | Greetings, A は B です, questions and negatives, これ/それ/あれ, numbers |
| Verbs and adjectives (N5) | 9 | ます forms, particles, past tense, both adjective types, あります/います, verb groups, て-form + checkpoint |
| Kanji I (N5) | 10 | All 102 N5 kanji with meanings, readings and example words + mastery exam |

## How it teaches

- **Learn → Practice → Test** for every unit. Practice repeats anything you miss; the test needs 90% to unlock the next unit, and a failed test sends you to fix your weak spots first.
- **Spaced reviews** bring items back just before you'd forget them. New lessons stay locked while too many reviews are waiting.
- **Stroke-order animations and handwriting practice** for every kana and kanji. The writing pad checks each stroke's order and direction.
- **Many question types:** multiple choice, typing (romaji converts to kana), listening, sentence building, conjugation drills and writing from memory.
- **Progress tracking:** study time, activity calendar, mastery by stage, review forecast, weakest items, test history and milestones.
- **Accounts and sync:** sign in with Google or email and your progress follows you to any device.
- **Backup and restore** of your progress as a file or code.

## Running it

It's one static `index.html` with no build step. Open it in a browser, or serve the folder with any static host (GitHub Pages, Cloudflare Pages, Firebase Hosting). On phones you can add it to your home screen, and it works offline after the first visit.

Progress is saved in your browser, and you can sign in (Google or email) to sync it across devices. Accounts and sync use Firebase Authentication and Cloud Firestore; each person's data is readable and writable only by them (see `firestore.rules`).

## Credits

- Stroke order data: [KanjiVG](https://kanjivg.tagaini.net/) by Ulrich Apel, licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). See [NOTICE.md](NOTICE.md).
- Fonts: [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New) and [Klee One](https://fonts.google.com/specimen/Klee+One) via Google Fonts (SIL Open Font License).
- Lessons, explanations and exercises were written for Michi.
