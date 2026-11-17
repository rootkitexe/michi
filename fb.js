var qs=()=>{};var $s=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ru=function(t){let e=[],n=0,r=0;for(;n<t.length;){let i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,_=s>>2,w=(s&3)<<4|a>>4,b=(a&15)<<2|h>>6,K=h&63;c||(K=64,o||(b=64)),r.push(n[_],n[w],n[b],n[K])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ru(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){let s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;let h=i<t.length?n[t.charAt(i)]:64;++i;let w=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||w==null)throw new Fr;let b=s<<2|a>>4;if(r.push(b),h!==64){let K=a<<4&240|h>>2;if(r.push(K),w!==64){let M=h<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fr=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Nu=function(t){let e=$s(t);return Hs.encodeByteArray(e,!0)},kt=function(t){return Nu(t).replace(/\./g,"")},fn=function(t){try{return Hs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Pu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ku=()=>Pu().__FIREBASE_DEFAULTS__,Cu=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Du=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&fn(t[1]);return e&&JSON.parse(e)},qr=()=>{try{return qs()||ku()||Cu()||Du()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Br=t=>qr()?.emulatorHosts?.[t],Ws=t=>{let e=Br(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$r=()=>qr()?.config,Hr=t=>qr()?.[`_${t}`];var Xe=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function Gs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[kt(JSON.stringify(n)),kt(JSON.stringify(o)),""].join(".")}function j(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function Ks(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Js(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ys(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qs(){let t=j();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pn(){try{return typeof indexedDB=="object"}catch{return!1}}function mn(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function Xs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var Ou="FirebaseError",G=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ou,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}},Y=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new G(i,a,r)}};function Vu(t,e){try{let n=0,r="";for(;n<t.length;){let i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}let s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}let o=t.substring(i+2,s),a=e[o];r+=t.substring(n,i)+(a!=null?String(a):`<${o}?>`),n=s+1}return r}catch{return t}}function Zs(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function re(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let i of n){if(!r.includes(i))return!1;let s=t[i],o=e[i];if(Bs(s)&&Bs(o)){if(!re(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function Bs(t){return t!==null&&typeof t=="object"}function Ze(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function et(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function tt(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eo(t,e){let n=new jr(t,e);return n.subscribe.bind(n)}var jr=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lu(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ur),i.error===void 0&&(i.error=Ur),i.complete===void 0&&(i.complete=Ur);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Lu(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ur(){}var Jp=4*60*60*1e3;function N(t){return t&&t._delegate?t._delegate:t}function Oe(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gn(t){return(await fetch(t,{credentials:"include"})).ok}var O=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Ve="[DEFAULT]";var Wr=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new Xe;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){let n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mu(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function xu(t){return t===Ve?void 0:t}function Mu(t){return t.instantiationMode==="EAGER"}var _n=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new Wr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var Uu=[],v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));var Fu={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},ju=v.INFO,qu={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},Bu=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),i=qu[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Se=class{constructor(e){this.name=e,this._logLevel=ju,this._logHandler=Bu,this._userLogHandler=null,Uu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}};var $u=(t,e)=>e.some(n=>t instanceof n),to,no;function Hu(){return to||(to=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wu(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ro=new WeakMap,zr=new WeakMap,io=new WeakMap,Gr=new WeakMap,Jr=new WeakMap;function Gu(t){let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ie(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ro.set(n,t)}).catch(()=>{}),Jr.set(e,t),e}function zu(t){if(zr.has(t))return;let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zr.set(t,e)}var Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||io.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function so(t){Kr=t(Kr)}function Ku(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(yn(this),e,...n);return io.set(r,e.sort?e.sort():[e]),ie(r)}:Wu().includes(t)?function(...e){return t.apply(yn(this),e),ie(ro.get(this))}:function(...e){return ie(t.apply(yn(this),e))}}function Ju(t){return typeof t=="function"?Ku(t):(t instanceof IDBTransaction&&zu(t),$u(t,Hu())?new Proxy(t,Kr):t)}function ie(t){if(t instanceof IDBRequest)return Gu(t);if(Gr.has(t))return Gr.get(t);let e=Ju(t);return e!==t&&(Gr.set(t,e),Jr.set(e,t)),e}var yn=t=>Jr.get(t);function Le(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,e),a=ie(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ie(o.result),c.oldVersion,c.newVersion,ie(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}function Ct(t,{blocked:e}={}){let n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}var Yu=["get","getKey","getAll","getAllKeys","count"],Qu=["put","add","delete","clear"],Yr=new Map;function oo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=Qu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yu.includes(n)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),h=c.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&c.done]))[0]};return Yr.set(e,s),s}so(t=>({...t,get:(e,n,r)=>oo(e,n)||t.get(e,n,r),has:(e,n)=>!!oo(e,n)||t.has(e,n)}));var Xr=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xu(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function Xu(t){return t.getComponent()?.type==="VERSION"}var Zr="@firebase/app",ao="0.16.4";var we=new Se("@firebase/app"),Zu="@firebase/app-compat",el="@firebase/analytics-compat",tl="@firebase/analytics",nl="@firebase/app-check-compat",rl="@firebase/app-check",il="@firebase/auth",sl="@firebase/auth-compat",ol="@firebase/database",al="@firebase/data-connect",cl="@firebase/database-compat",ul="@firebase/functions",ll="@firebase/functions-compat",dl="@firebase/installations",hl="@firebase/installations-compat",fl="@firebase/messaging",pl="@firebase/messaging-compat",ml="@firebase/performance",gl="@firebase/performance-compat",_l="@firebase/remote-config",yl="@firebase/remote-config-compat",Il="@firebase/storage",wl="@firebase/storage-compat",El="@firebase/firestore",bl="@firebase/ai",Tl="@firebase/firestore-compat",vl="firebase",Al="13.1.0";var ei="[DEFAULT]",Sl={[Zr]:"fire-core",[Zu]:"fire-core-compat",[tl]:"fire-analytics",[el]:"fire-analytics-compat",[rl]:"fire-app-check",[nl]:"fire-app-check-compat",[il]:"fire-auth",[sl]:"fire-auth-compat",[ol]:"fire-rtdb",[al]:"fire-data-connect",[cl]:"fire-rtdb-compat",[ul]:"fire-fn",[ll]:"fire-fn-compat",[dl]:"fire-iid",[hl]:"fire-iid-compat",[fl]:"fire-fcm",[pl]:"fire-fcm-compat",[ml]:"fire-perf",[gl]:"fire-perf-compat",[_l]:"fire-rc",[yl]:"fire-rc-compat",[Il]:"fire-gcs",[wl]:"fire-gcs-compat",[El]:"fire-fst",[Tl]:"fire-fst-compat",[bl]:"fire-vertex","fire-js":"fire-js",[vl]:"fire-js-all"};var In=new Map,Rl=new Map,ti=new Map;function co(t,e){try{t.container.addComponent(e)}catch(n){we.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function J(t){let e=t.name;if(ti.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,t);for(let n of In.values())co(n,t);for(let n of Rl.values())co(n,t);return!0}function ue(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function q(t){return t==null?!1:t.settings!==void 0}var Nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new Y("app","Firebase",Nl);var ni=class{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new O("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}};var Re=Al;function fo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r={name:ei,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ie.create("bad-app-name",{appName:String(i)});if(n||(n=$r()),!n)throw Ie.create("no-options");let s=In.get(i);if(s)if(re(n,s.options)){if(re(r,s.config))return s;throw Ie.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Ie.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});let o=new _n(i);for(let c of ti.values())o.addComponent(c);let a=new ni(n,r,o);return In.set(i,a),a}function xe(t=ei){let e=In.get(t);if(!e&&t===ei&&$r())return fo();if(!e)throw Ie.create("no-app",{appName:t});return e}function U(t,e,n){let r=Sl[t]??t;n&&(r+=`-${n}`);let i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){let o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(o.join(" "));return}J(new O(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var Pl="firebase-heartbeat-database",kl=1,Dt="firebase-heartbeat-store",Qr=null;function po(){return Qr||(Qr=Le(Pl,kl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ie.create("idb-open",{originalErrorMessage:t.message})})),Qr}async function Cl(t){try{let n=(await po()).transaction(Dt),r=await n.objectStore(Dt).get(mo(t));return await n.done,r}catch(e){if(e instanceof G)we.warn(e.message);else{let n=Ie.create("idb-get",{originalErrorMessage:e?.message});we.warn(n.message)}}}async function uo(t,e){try{let r=(await po()).transaction(Dt,"readwrite");await r.objectStore(Dt).put(e,mo(t)),await r.done}catch(n){if(n instanceof G)we.warn(n.message);else{let r=Ie.create("idb-set",{originalErrorMessage:n?.message});we.warn(r.message)}}}function mo(t){return`${t.name}!${t.options.appId}`}var Dl=1024,Ol=30,ri=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new ii(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ol){let i=Ll(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){we.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=lo(),{heartbeatsToSend:n,unsentEntries:r}=Vl(this._heartbeatsCache.heartbeats),i=kt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return we.warn(e),""}}};function lo(){return new Date().toISOString().substring(0,10)}function Vl(t,e=Dl){let n=[],r=t.slice();for(let i of t){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ho(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ho(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var ii=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pn()?mn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await Cl(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return uo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function ho(t){return kt(JSON.stringify({version:2,heartbeats:t})).length}function Ll(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}function xl(t){J(new O("platform-logger",e=>new Xr(e),"PRIVATE")),J(new O("heartbeat",e=>new ri(e),"PRIVATE")),U(Zr,ao,t),U(Zr,ao,"esm2020"),U("fire-js","")}xl("");var Ml="firebase",Ul="13.1.0";U(Ml,Ul,"app");function Lo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var xo=Lo,Mo=new Y("auth","Firebase",Lo());var Rn=new Se("@firebase/auth");function En(t,...e){Rn.logLevel<=v.WARN&&Rn.warn(`Auth (${Re}): ${t}`,...e)}function bn(t,...e){Rn.logLevel<=v.ERROR&&Rn.error(`Auth (${Re}): ${t}`,...e)}function te(t,...e){throw Ri(t,...e)}function se(t,...e){return Ri(t,...e)}function Yn(t,e,n){let r={...xo(),[e]:n};return new Y("auth","Firebase",r).create(e,{appName:t.name})}function de(t){return Yn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uo(t,e,n){let r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&te(t,"argument-error"),Yn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ri(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mo.create(t,...e)}function y(t,e,...n){if(!t)throw Ri(e,...n)}function le(t){let e="INTERNAL ASSERTION FAILED: "+t;throw bn(e),new Error(e)}function be(t,e){t||le(e)}function li(){return typeof self<"u"&&self.location?.href||""}function Fl(){return go()==="http:"||go()==="https:"}function go(){return typeof self<"u"&&self.location?.protocol||null}function jl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fl()||Js()||"connection"in navigator)?navigator.onLine:!0}function ql(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var Ue=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,be(n>e,"Short delay should be less than long delay!"),this.isMobile=zs()||Ys()}get(){return jl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Ni(t,e){be(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var Nn=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Bl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var $l=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hl=new Ue(3e4,6e4);function k(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function V(t,e,n,r,i={}){return Fo(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let a=Ze({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);let h={method:e,headers:c,...s};return Ks()||(h.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Oe(t.emulatorConfig.host)&&(h.credentials="include"),Nn.fetch()(await jo(t,t.config.apiHost,n,a),h)})}async function Fo(t,e,n){t._canInitEmulator=!1;let r={...Bl,...e};try{let i=new di(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Vt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vt(t,"user-disabled",o);let _=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yn(t,_,h);te(t,_)}}catch(i){if(i instanceof G)throw i;te(t,"network-request-failed",{message:String(i)})}}async function ke(t,e,n,r,i={}){let s=await V(t,e,n,r,i);return"mfaPendingCredential"in s&&te(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function jo(t,e,n,r){let i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ni(t.config,i):`${t.config.apiScheme}://${i}`;return $l.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Wl(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var di=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(se(this.auth,"network-request-failed")),Hl.get())})}};function Vt(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=se(t,e,r);return i.customData._tokenResponse=n,i}function _o(t){return t!==void 0&&t.enterprise!==void 0}var Pn=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wl(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function qo(t,e){return V(t,"GET","/v2/recaptchaConfig",k(t,e))}async function Gl(t,e){return V(t,"POST","/v1/accounts:delete",e)}async function kn(t,e){return V(t,"POST","/v1/accounts:lookup",e)}function Lt(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bo(t,e=!1){let n=N(t),r=await n.getIdToken(e),i=Pi(r);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Lt(si(i.auth_time)),issuedAtTime:Lt(si(i.iat)),expirationTime:Lt(si(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function si(t){return Number(t)*1e3}function Pi(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bn("JWT malformed, contained fewer than 3 sections"),null;try{let i=fn(n);return i?JSON.parse(i):(bn("Failed to decode base64 JWT payload"),null)}catch(i){return bn("Caught error parsing JWT payload as JSON",i?.toString()),null}}function yo(t){let e=Pi(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function rt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw $o(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $o(t){return t instanceof G?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}var hi=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;let r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Ft=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Cn(t){let e=t.auth,n=await t.getIdToken(),r=await rt(t,kn(e,{idToken:n}));y(r?.users.length,e,"internal-error");let i=r.users[0];t._notifyReloadListener(i);let s=i.providerUserInfo?.length?Wo(i.providerUserInfo):[],o=zl(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,h=a?c:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ft(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,_)}async function Ho(t){let e=N(t);await Cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zl(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wo(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function Kl(t,e){let n=await Fo(t,{},async()=>{let r=Ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await jo(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Oe(t.emulatorConfig.host)&&(c.credentials="include"),Nn.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jl(t,e){return V(t,"POST","/v2/accounts:revokeToken",k(t,e))}var xt=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){y(e.length!==0,"internal-error");let n=yo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:i,expiresIn:s}=await Kl(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new t;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return le("not implemented")}};function Ne(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Pe=class t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new hi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ft(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let n=await rt(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bo(this,e)}reload(){return Ho(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(q(this.auth.app))return Promise.reject(de(this.auth));let e=await this.getIdToken();return await rt(this,Gl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){let r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,_=n.lastLoginAt??void 0,{uid:w,emailVerified:b,isAnonymous:K,providerData:M,stsTokenManager:W}=n;y(w&&W,e,"internal-error");let D=xt.fromJSON(this.name,W);y(typeof w=="string",e,"internal-error"),Ne(r,e.name),Ne(i,e.name),y(typeof b=="boolean",e,"internal-error"),y(typeof K=="boolean",e,"internal-error"),Ne(s,e.name),Ne(o,e.name),Ne(a,e.name),Ne(c,e.name),Ne(h,e.name),Ne(_,e.name);let Ae=new t({uid:w,auth:e,email:i,emailVerified:b,displayName:r,isAnonymous:K,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:D,createdAt:h,lastLoginAt:_});return M&&Array.isArray(M)&&(Ae.providerData=M.map(Ye=>({...Ye}))),c&&(Ae._redirectEventId=c),Ae}static async _fromIdTokenResponse(e,n,r=!1){let i=new xt;i.updateFromServerResponse(n);let s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cn(s),s}static async _fromGetAccountInfoResponse(e,n,r){let i=n.users[0];y(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Wo(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new xt;a.updateFromIdToken(r);let c=new t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ft(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(c,h),c}};var Io=new Map;function Ee(t){be(t instanceof Function,"Expected a class definition");let e=Io.get(t);return e?(be(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Io.set(t,e),e)}var Dn=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Dn.type="NONE";var fi=Dn;function Tn(t,e,n){return`firebase:${t}:${e}:${n}`}var Mt=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let n=await kn(this.auth,{idToken:e}).catch(()=>{});return n?Pe._fromGetAccountInfoResponse(this.auth,n,e):null}return Pe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new t(Ee(fi),e,r);let i=(await Promise.all(n.map(async h=>{try{if(await h._isAvailable())return h}catch{return}}))).filter(h=>h),s=i[0]||Ee(fi),o=Tn(r,e.config.apiKey,e.name),a=null;for(let h of n)try{let _=await h._get(o);if(_){let w;if(typeof _=="string"){let b=await kn(e,{idToken:_}).catch(()=>{});if(!b)break;w=await Pe._fromGetAccountInfoResponse(e,b,_)}else w=Pe._fromJSON(e,_);h!==s&&(a=w),s=h;break}}catch{}let c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new t(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new t(s,e,r))}};function wo(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Go(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qo(e))return"Blackberry";if(Xo(e))return"Webos";if(zo(e))return"Safari";if((e.includes("chrome/")||Ko(e))&&!e.includes("edge/"))return"Chrome";if(Yo(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Go(t=j()){return/firefox\//i.test(t)}function zo(t=j()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ko(t=j()){return/crios\//i.test(t)}function Jo(t=j()){return/iemobile/i.test(t)}function Yo(t=j()){return/android/i.test(t)}function Qo(t=j()){return/blackberry/i.test(t)}function Xo(t=j()){return/webos/i.test(t)}function ki(t=j()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yl(t=j()){return ki(t)&&!!window.navigator?.standalone}function Ql(){return Qs()&&document.documentMode===10}function Zo(t=j()){return ki(t)||Yo(t)||Xo(t)||Qo(t)||/windows phone/i.test(t)||Jo(t)}function ea(t,e=[]){let n;switch(t){case"Browser":n=wo(j());break;case"Worker":n=`${wo(j())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Re}/${r}`}var pi=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Xl(t,e={}){return V(t,"GET","/v2/passwordPolicy",k(t,e))}var Zl=6,mi=class{constructor(e){let n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Zl,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var gi=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new On(this),this.idTokenSubscription=new On(this),this.beforeStateQueue=new pi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ee(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Mt.create(this,e)}catch(r){En(`Failed to initialize persistence: ${r}`),this.persistenceManager=await Mt.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(r){En(`Failed to initialize current user: ${r}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let n=await kn(this,{idToken:e}),r=await Pe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(q(this.app)){let s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cn(e)}catch(n){if($o(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ql()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(q(this.app))return Promise.reject(de(this));let n=e?N(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return q(this.app)?Promise.reject(de(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return q(this.app)?Promise.reject(de(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Xl(this),n=new mi(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Y("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jl(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&Ee(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Ee(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};let s=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(r)r(c);else throw c}),typeof n=="function"){let c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{let c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){let r=n?.message||String(n),i=Yn(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ea(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&En(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Q(t){return N(t)}var On=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=eo(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Qn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ed(t){Qn=t}function ta(t){return Qn.loadJS(t)}function td(){return Qn.recaptchaEnterpriseScript}function nd(){return Qn.gapiScript}function na(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var _i=class{constructor(){this.enterprise=new yi}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}},yi=class{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}};var rd="recaptcha-enterprise",Ut="NO_RECAPTCHA",Eo="onFirebaseAuthREInstanceReady",jt=class t{constructor(e){this.type=rd,this.auth=Q(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qo(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let h=new Pn(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){let c=window.grecaptcha;_o(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ut)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _i().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async a=>{if(!n&&_o(window.grecaptcha)&&t.scriptInjectionDeferred)await t.scriptInjectionDeferred.promise,i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=td();c.length!==0&&(c+=a+`&onload=${Eo}`),t.scriptInjectionDeferred=new Xe,window[Eo]=()=>{t.scriptInjectionDeferred?.resolve()},ta(c).then(()=>t.scriptInjectionDeferred?.promise).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}};jt.scriptInjectionDeferred=null;async function Ot(t,e,n,r=!1,i=!1){let s=new jt(t),o;if(i)o=Ut;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}let a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let c=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Me(t,e,n,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await Ot(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await Ot(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let s=await Ot(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);let a=await Ot(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{let s=await Ot(t,e,n,!1,!0);return r(t,s)}else return Promise.reject(i+" provider is not supported.")}async function id(t){let e=Q(t),n=await qo(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Pn(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new jt(e).verify()}function ra(t,e){let n=ue(t,"auth");if(n.isInitialized()){let i=n.getImmediate(),s=n.getOptions();if(re(s,e??{}))return i;te(i,"already-initialized")}return n.initialize({options:e})}function sd(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ee);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function ia(t,e,n){let r=Q(t);y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!n?.disableWarnings,s=sa(e),{host:o,port:a}=od(e),c=a===null?"":`:${a}`,h={url:`${s}//${o}${c}/`},_=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),y(re(h,r.config.emulator)&&re(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Oe(o)?gn(`${s}//${o}${c}`):i||ad()}function sa(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function od(t){let e=sa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:bo(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:bo(o)}}}function bo(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function ad(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var Fe=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,n){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}};async function cd(t,e){return V(t,"POST","/v1/accounts:signUp",e)}async function ud(t,e){return ke(t,"POST","/v1/accounts:signInWithPassword",k(t,e))}async function ld(t,e){return V(t,"POST","/v1/accounts:sendOobCode",k(t,e))}async function dd(t,e){return ld(t,e)}async function hd(t,e){return ke(t,"POST","/v1/accounts:signInWithEmailLink",k(t,e))}async function fd(t,e){return ke(t,"POST","/v1/accounts:signInWithEmailLink",k(t,e))}var qt=class t extends Fe{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Me(e,n,"signInWithPassword",ud,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hd(e,{email:this._email,oobCode:this._password});default:te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Me(e,r,"signUpPassword",cd,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return fd(e,{idToken:n,email:this._email,oobCode:this._password});default:te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function nt(t,e){return ke(t,"POST","/v1/accounts:signInWithIdp",k(t,e))}var pd="http://localhost",je=class t extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;let o=new t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return nt(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,nt(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,nt(e,n)}buildRequest(){let e={requestUri:pd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ze(n)}return e}};async function To(t,e){return V(t,"POST","/v1/accounts:sendVerificationCode",k(t,e))}async function md(t,e){return ke(t,"POST","/v1/accounts:signInWithPhoneNumber",k(t,e))}async function gd(t,e){let n=await ke(t,"POST","/v1/accounts:signInWithPhoneNumber",k(t,e));if(n.temporaryProof)throw Vt(t,"account-exists-with-different-credential",n);return n}var _d={USER_NOT_FOUND:"user-not-found"};async function yd(t,e){let n={...e,operation:"REAUTH"};return ke(t,"POST","/v1/accounts:signInWithPhoneNumber",k(t,n),_d)}var Bt=class t extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return md(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return gd(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return yd(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new t({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Id(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wd(t){let e=et(tt(t)).link,n=e?et(tt(e)).deep_link_id:null,r=et(tt(t)).deep_link_id;return(r?et(tt(r)).link:null)||r||n||e||t}var Vn=class t{constructor(e){let n=et(tt(e)),r=n.apiKey??null,i=n.oobCode??null,s=Id(n.mode??null);y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){let n=wd(e);try{return new t(n)}catch{return null}}};var qe=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return qt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=Vn.parseLink(n);return y(r,"argument-error"),qt._fromEmailAndCode(e,r.code,r.tenantId)}};qe.PROVIDER_ID="password";qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var it=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Be=class extends it{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var $t=class t extends Be{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";var st=class t extends Be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return je._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";var Ht=class t extends Be{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";var Wt=class t extends Be{constructor(){super("twitter.com")}static credential(e,n){return je._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";async function Ed(t,e){return ke(t,"POST","/v1/accounts:signUp",k(t,e))}var ot=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){let s=await Pe._fromIdTokenResponse(e,r,i),o=vo(r);return new t({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let i=vo(r);return new t({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function vo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var Ii=class t extends G{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new t(e,n,r,i)}};function oa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(t,s,e,r):s})}async function bd(t,e,n=!1){let r=await rt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ot._forOperation(t,"link",r)}async function Td(t,e,n=!1){let{auth:r}=t;if(q(r.app))return Promise.reject(de(r));let i="reauthenticate";try{let s=await rt(t,oa(r,i,e,t),n);y(s.idToken,r,"internal-error");let o=Pi(s.idToken);y(o,r,"internal-error");let{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),ot._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&te(r,"user-mismatch"),s}}async function aa(t,e,n=!1){if(q(t.app))return Promise.reject(de(t));let r="signIn",i=await oa(t,r,e),s=await ot._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ca(t,e){return aa(Q(t),e)}function vd(t,e,n){y(n.url?.length>0,t,"invalid-continue-uri"),y(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),y(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function ua(t){let e=Q(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function la(t,e,n){let r=Q(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&vd(r,i,n),await Me(r,i,"getOobCode",dd,"EMAIL_PASSWORD_PROVIDER")}async function da(t,e,n){if(q(t.app))return Promise.reject(de(t));let r=Q(t),o=await Me(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ed,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ua(t),c}),a=await ot._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ha(t,e,n){return q(t.app)?Promise.reject(de(t)):ca(N(t),qe.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ua(t),r})}async function Ad(t,e){return V(t,"POST","/v1/accounts:update",e)}async function fa(t,e){let{displayName:n,photoURL:r}=e;if(n===void 0&&r===void 0)return;let i=N(t),o={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},a=await rt(i,Ad(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;let c=i.providerData.find(({providerId:h})=>h==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function pa(t,e,n,r){return N(t).onIdTokenChanged(e,n,r)}function ma(t,e,n){return N(t).beforeAuthStateChanged(e,n)}function ga(t,e,n,r){return N(t).onAuthStateChanged(e,n,r)}function _a(t){return N(t).signOut()}function Ao(t,e){return V(t,"POST","/v2/accounts/mfaEnrollment:start",k(t,e))}function Sd(t,e){return V(t,"POST","/v2/accounts/mfaEnrollment:finalize",k(t,e))}function Rd(t,e){return V(t,"POST","/v2/accounts/mfaEnrollment:start",k(t,e))}function Nd(t,e){return V(t,"POST","/v2/accounts/mfaEnrollment:finalize",k(t,e))}var Ln="__sak";var xn=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ln,"1"),this.storage.removeItem(Ln),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Pd=1e3,kd=10,Mn=class extends xn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;n?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ql()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kd):i()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};Mn.type="LOCAL";var ya=Mn;var Cd=1e3;function oi(t){let e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function ai(t){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}var wi=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;let n=ai(e);return window.cookieStore?(await window.cookieStore.get(n))?.value:oi(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=ai(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;let r=ai(e);if(window.cookieStore){let a=h=>{let _=h.changed.find(b=>b.name===r);_&&n(_.value),h.deleted.find(b=>b.name===r)&&n(null)},c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(n,c),window.cookieStore.addEventListener("change",a)}let i=oi(r),s=setInterval(()=>{let a=oi(r);a!==i&&(n(a),i=a)},Cd),o=()=>clearInterval(s);this.listenerUnsubscribes.set(n,o)}_removeListener(e,n){let r=this.listenerUnsubscribes.get(n);r&&(r(),this.listenerUnsubscribes.delete(n))}};wi.type="COOKIE";var Un=class extends xn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};Un.type="SESSION";var Ci=Un;function Dd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var Fn=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let a=Array.from(o).map(async h=>h(n.origin,s)),c=await Dd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Fn.receivers=[];function Di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Ei=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let h=Di("",20);i.port1.start();let _=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(w){let b=w;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(_),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(b.data.response);break;default:clearTimeout(_),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function he(){return window}function Od(t){he().location.href=t}function Ia(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function Vd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ld(){return navigator?.serviceWorker?.controller||null}function xd(){return Ia()?self:null}var wa="firebaseLocalStorageDb",Md=1,jn="firebaseLocalStorage",Ea="fbase_key",$e=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function Xn(t,e){return t.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function Ud(){let t=indexedDB.deleteDatabase(wa);return new $e(t).toPromise()}function ba(){let t=indexedDB.open(wa,Md);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(jn,{keyPath:Ea})}catch(i){n(i)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(jn)?e(r):(r.close(),await Ud(),e(await ba()))})})}async function So(t,e,n){let r=Xn(t,!0).put({[Ea]:e,value:n});return new $e(r).toPromise()}async function Fd(t,e){let n=Xn(t,!1).get(e),r=await new $e(n).toPromise();return r===void 0?null:r.value}function Ro(t,e){let n=Xn(t,!0).delete(e);return new $e(n).toPromise()}var jd=800,qd=3,qn=class{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ba(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>qd)throw r;if(this.dbPromise){let i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance(xd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Vd(),!this.activeServiceWorker)return;this.sender=new Ei(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ld()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await So(e,Ln,"1"),await Ro(e,Ln)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>So(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>Fd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{let e=await this._withRetries(i=>{let s=Xn(i,!1).getAll();return new $e(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||En(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}};qn.type="LOCAL";var Ta=qn;function No(t,e){return V(t,"POST","/v2/accounts/mfaSignIn:start",k(t,e))}function Bd(t,e){return V(t,"POST","/v2/accounts/mfaSignIn:finalize",k(t,e))}function $d(t,e){return V(t,"POST","/v2/accounts/mfaSignIn:finalize",k(t,e))}var Em=na("rcb"),bm=new Ue(3e4,6e4);var vn="recaptcha";async function Hd(t,e,n){if(!t._getRecaptchaConfig())try{await id(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let i=r.session;if("phoneNumber"in r){y(i.type==="enroll",t,"internal-error");let s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Me(t,s,"mfaSmsEnrollment",async(h,_)=>{if(_.phoneEnrollmentInfo.captchaResponse===Ut){y(n?.type===vn,h,"argument-error");let w=await ci(h,_,n);return Ao(h,w)}return Ao(h,_)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{y(i.type==="signin",t,"internal-error");let s=r.multiFactorHint?.uid||r.multiFactorUid;y(s,t,"missing-multi-factor-info");let o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Me(t,o,"mfaSmsSignIn",async(_,w)=>{if(w.phoneSignInInfo.captchaResponse===Ut){y(n?.type===vn,_,"argument-error");let b=await ci(_,w,n);return No(_,b)}return No(_,w)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneResponseInfo.sessionInfo}}else{let i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Me(t,i,"sendVerificationCode",async(c,h)=>{if(h.captchaResponse===Ut){y(n?.type===vn,c,"argument-error");let _=await ci(c,h,n);return To(c,_)}return To(c,h)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n?._reset()}}async function ci(t,e,n){y(n.type===vn,t,"argument-error");let r=await n.verify();y(typeof r=="string",t,"argument-error");let i={...e};if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var Gt=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=Q(e)}verifyPhoneNumber(e,n){return Hd(this.auth,e,N(n))}static credential(e,n){return Bt._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?Bt._fromTokenResponse(n,r):null}};Gt.PROVIDER_ID="phone";Gt.PHONE_SIGN_IN_METHOD="phone";function Oi(t,e){return e?Ee(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var zt=class extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function Wd(t){return aa(t.auth,new zt(t),t.bypassAuthState)}function Gd(t){let{auth:e,user:n}=t;return y(n,e,"internal-error"),Td(n,new zt(t),t.bypassAuthState)}async function zd(t){let{auth:e,user:n}=t;return y(n,e,"internal-error"),bd(n,new zt(t),t.bypassAuthState)}var Bn=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wd;case"linkViaPopup":case"linkViaRedirect":return zd;case"reauthViaPopup":case"reauthViaRedirect":return Gd;default:te(this.auth,"internal-error")}}resolve(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Kd=new Ue(2e3,1e4);async function va(t,e,n){if(q(t.app))return Promise.reject(se(t,"operation-not-supported-in-this-environment"));let r=Q(t);Uo(t,e,it);let i=Oi(r,n);return new $n(r,"signInViaPopup",e,i).executeNotNull()}var $n=class t extends Bn{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){be(this.filter.length===1,"Popup operations only handle one event");let e=Di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kd.get())};e()}};$n.currentPopupAction=null;var Jd="pendingRedirect",An=new Map,bi=class extends Bn{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=An.get(this.auth._key());if(!e){try{let r=await Yd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}An.set(this.auth._key(),e)}return this.bypassAuthState||An.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Yd(t,e){let n=Sa(e),r=Aa(t);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function Qd(t,e){return Aa(t)._set(Sa(e),"true")}function Xd(t,e){An.set(t._key(),e)}function Aa(t){return Ee(t._redirectPersistence)}function Sa(t){return Tn(Jd,t.config.apiKey,t.name)}function Ra(t,e,n){return Zd(t,e,n)}async function Zd(t,e,n){if(q(t.app))return Promise.reject(de(t));let r=Q(t);Uo(t,e,it),await r._initializationPromise;let i=Oi(r,n);return await Qd(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Na(t,e){return await Q(t)._initializationPromise,Pa(t,e,!1)}async function Pa(t,e,n=!1){if(q(t.app))return Promise.reject(de(t));let r=Q(t),i=Oi(r,e),o=await new bi(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var eh=10*60*1e3,Ti=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!th(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ka(e)){let r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(se(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Po(e))}saveEventToCache(e){this.cachedEventUids.add(Po(e)),this.lastProcessedEventTime=Date.now()}};function Po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ka({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function th(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ka(t);default:return!1}}async function nh(t,e={}){return V(t,"GET","/v1/projects",e)}var rh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ih=/^https?/;async function sh(t){if(t.config.emulator)return;let{authorizedDomains:e}=await nh(t);for(let n of e)try{if(oh(n))return}catch{}te(t,"unauthorized-domain")}function oh(t){let e=li(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ih.test(n))return!1;if(rh.test(t))return r===t;let i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var ah=new Ue(3e4,6e4);function ko(){let t=he().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ch(t){return new Promise((e,n)=>{function r(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(se(t,"network-request-failed"))},timeout:ah.get()})}if(he().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(he().gapi?.load)r();else{let i=na("iframefcb");return he()[i]=()=>{gapi.load?r():n(se(t,"network-request-failed"))},ta(`${nd()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw Sn=null,e})}var Sn=null;function uh(t){return Sn=Sn||ch(t),Sn}var lh=new Ue(5e3,15e3),dh="__/auth/iframe",hh="emulator/auth/iframe",fh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ph=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mh(t){let e=t.config;y(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?Ni(e,hh):`https://${t.config.authDomain}/${dh}`,r={apiKey:e.apiKey,appName:t.name,v:Re},i=ph.get(t.config.apiHost);i&&(r.eid=i);let s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ze(r).slice(1)}`}async function gh(t){let e=await uh(t),n=he().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:mh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fh,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=se(t,"network-request-failed"),a=he().setTimeout(()=>{s(o)},lh.get());function c(){he().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}var _h={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yh=500,Ih=600,wh="_blank",Eh="http://localhost",Hn=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function bh(t,e,n,r=yh,i=Ih){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c={..._h,width:r.toString(),height:i.toString(),top:s,left:o},h=j().toLowerCase();n&&(a=Ko(h)?wh:n),Go(h)&&(e=e||Eh,c.scrollbars="yes");let _=Object.entries(c).reduce((b,[K,M])=>`${b}${K}=${M},`,"");if(Yl(h)&&a!=="_self")return Th(e||"",a),new Hn(null);let w=window.open(e||"",a,_);y(w,t,"popup-blocked");try{w.focus()}catch{}return new Hn(w)}function Th(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var vh="__/auth/handler",Ah="emulator/auth/handler",Sh=encodeURIComponent("fac");async function Co(t,e,n,r,i,s){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Re,eventId:i};if(e instanceof it){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[_,w]of Object.entries(s||{}))o[_]=w}if(e instanceof Be){let _=e.getScopes().filter(w=>w!=="");_.length>0&&(o.scopes=_.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let _ of Object.keys(a))a[_]===void 0&&delete a[_];let c=await t._getAppCheckToken(),h=c?`#${Sh}=${encodeURIComponent(c)}`:"";return`${Rh(t)}?${Ze(a).slice(1)}${h}`}function Rh({config:t}){return t.emulator?Ni(t,Ah):`https://${t.authDomain}/${vh}`}var ui="webStorageSupport",vi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ci,this._completeRedirectFn=Pa,this._overrideRedirectResult=Xd}async _openPopup(e,n,r,i){be(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let s=await Co(e,n,r,li(),i);return bh(e,s,Di())}async _openRedirect(e,n,r,i){await this._originValidation(e);let s=await Co(e,n,r,li(),i);return Od(s),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(be(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await gh(e),r=new Ti(e);return n.register("authEvent",i=>(y(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ui,{type:ui},i=>{let s=i?.[0]?.[ui];s!==void 0&&n(!!s),te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zo()||zo()||ki()}},Ca=vi,Wn=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return le("unexpected MultiFactorSessionType")}}},Ai=class t extends Wn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return Sd(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Bd(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Gn=class{constructor(){}static assertion(e){return Ai._fromCredential(e)}};Gn.FACTOR_ID="phone";var zn=class{static assertionForEnrollment(e,n){return Kn._fromSecret(e,n)}static assertionForSignIn(e,n){return Kn._fromEnrollmentId(e,n)}static async generateSecret(e){let n=e;y(typeof n.user?.auth<"u","internal-error");let r=await Rd(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Jn._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}};zn.FACTOR_ID="totp";var Kn=class t extends Wn{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return y(typeof this.secret<"u",e,"argument-error"),Nd(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){y(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return $d(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Jn=class t{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){let r=!1;return(wn(e)||wn(n))&&(r=!0),r&&(wn(e)&&(e=this.auth.currentUser?.email||"unknownuser"),wn(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function wn(t){return typeof t>"u"||t?.length===0}var Do="@firebase/auth",Oo="1.13.8";var Si=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Nh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ph(t){J(new O("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ea(t)},h=new gi(r,i,s,c);return sd(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),J(new O("auth-internal",e=>{let n=Q(e.getProvider("auth").getImmediate());return(r=>new Si(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),U(Do,Oo,Nh(t)),U(Do,Oo,"esm2020")}var kh=5*60,Ch=Hr("authIdTokenMaxAge")||kh,Vo=null,Dh=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ch)return;let i=n?.token;Vo!==i&&(Vo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Da(t=xe()){let e=ue(t,"auth");if(e.isInitialized())return e.getImmediate();let n=ra(t,{popupRedirectResolver:Ca,persistence:[Ta,ya,Ci]}),r=Hr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=Dh(s.toString());ma(n,o,()=>o(n.currentUser)),pa(n,a=>o(a))}}let i=Br("auth");return i&&ia(n,`http://${i}`),n}function Oh(){return document.getElementsByTagName("head")?.[0]??document}ed({loadJS(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{let s=se("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Oh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ph("Browser");var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Va={};var Vi,Vh;(function(){var t;function e(f,u){function d(){}d.prototype=u.prototype,f.F=u.prototype,f.prototype=new d,f.prototype.constructor=f,f.D=function(m,p,g){for(var l=Array(arguments.length-2),De=2;De<arguments.length;De++)l[De-2]=arguments[De];return u.prototype[p].apply(m,l)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(f,u,d){d||(d=0);let m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(d++)|u.charCodeAt(d++)<<8|u.charCodeAt(d++)<<16|u.charCodeAt(d++)<<24;else for(p=0;p<16;++p)m[p]=u[d++]|u[d++]<<8|u[d++]<<16|u[d++]<<24;u=f.g[0],d=f.g[1],p=f.g[2];let g=f.g[3],l;l=u+(g^d&(p^g))+m[0]+3614090360&4294967295,u=d+(l<<7&4294967295|l>>>25),l=g+(p^u&(d^p))+m[1]+3905402710&4294967295,g=u+(l<<12&4294967295|l>>>20),l=p+(d^g&(u^d))+m[2]+606105819&4294967295,p=g+(l<<17&4294967295|l>>>15),l=d+(u^p&(g^u))+m[3]+3250441966&4294967295,d=p+(l<<22&4294967295|l>>>10),l=u+(g^d&(p^g))+m[4]+4118548399&4294967295,u=d+(l<<7&4294967295|l>>>25),l=g+(p^u&(d^p))+m[5]+1200080426&4294967295,g=u+(l<<12&4294967295|l>>>20),l=p+(d^g&(u^d))+m[6]+2821735955&4294967295,p=g+(l<<17&4294967295|l>>>15),l=d+(u^p&(g^u))+m[7]+4249261313&4294967295,d=p+(l<<22&4294967295|l>>>10),l=u+(g^d&(p^g))+m[8]+1770035416&4294967295,u=d+(l<<7&4294967295|l>>>25),l=g+(p^u&(d^p))+m[9]+2336552879&4294967295,g=u+(l<<12&4294967295|l>>>20),l=p+(d^g&(u^d))+m[10]+4294925233&4294967295,p=g+(l<<17&4294967295|l>>>15),l=d+(u^p&(g^u))+m[11]+2304563134&4294967295,d=p+(l<<22&4294967295|l>>>10),l=u+(g^d&(p^g))+m[12]+1804603682&4294967295,u=d+(l<<7&4294967295|l>>>25),l=g+(p^u&(d^p))+m[13]+4254626195&4294967295,g=u+(l<<12&4294967295|l>>>20),l=p+(d^g&(u^d))+m[14]+2792965006&4294967295,p=g+(l<<17&4294967295|l>>>15),l=d+(u^p&(g^u))+m[15]+1236535329&4294967295,d=p+(l<<22&4294967295|l>>>10),l=u+(p^g&(d^p))+m[1]+4129170786&4294967295,u=d+(l<<5&4294967295|l>>>27),l=g+(d^p&(u^d))+m[6]+3225465664&4294967295,g=u+(l<<9&4294967295|l>>>23),l=p+(u^d&(g^u))+m[11]+643717713&4294967295,p=g+(l<<14&4294967295|l>>>18),l=d+(g^u&(p^g))+m[0]+3921069994&4294967295,d=p+(l<<20&4294967295|l>>>12),l=u+(p^g&(d^p))+m[5]+3593408605&4294967295,u=d+(l<<5&4294967295|l>>>27),l=g+(d^p&(u^d))+m[10]+38016083&4294967295,g=u+(l<<9&4294967295|l>>>23),l=p+(u^d&(g^u))+m[15]+3634488961&4294967295,p=g+(l<<14&4294967295|l>>>18),l=d+(g^u&(p^g))+m[4]+3889429448&4294967295,d=p+(l<<20&4294967295|l>>>12),l=u+(p^g&(d^p))+m[9]+568446438&4294967295,u=d+(l<<5&4294967295|l>>>27),l=g+(d^p&(u^d))+m[14]+3275163606&4294967295,g=u+(l<<9&4294967295|l>>>23),l=p+(u^d&(g^u))+m[3]+4107603335&4294967295,p=g+(l<<14&4294967295|l>>>18),l=d+(g^u&(p^g))+m[8]+1163531501&4294967295,d=p+(l<<20&4294967295|l>>>12),l=u+(p^g&(d^p))+m[13]+2850285829&4294967295,u=d+(l<<5&4294967295|l>>>27),l=g+(d^p&(u^d))+m[2]+4243563512&4294967295,g=u+(l<<9&4294967295|l>>>23),l=p+(u^d&(g^u))+m[7]+1735328473&4294967295,p=g+(l<<14&4294967295|l>>>18),l=d+(g^u&(p^g))+m[12]+2368359562&4294967295,d=p+(l<<20&4294967295|l>>>12),l=u+(d^p^g)+m[5]+4294588738&4294967295,u=d+(l<<4&4294967295|l>>>28),l=g+(u^d^p)+m[8]+2272392833&4294967295,g=u+(l<<11&4294967295|l>>>21),l=p+(g^u^d)+m[11]+1839030562&4294967295,p=g+(l<<16&4294967295|l>>>16),l=d+(p^g^u)+m[14]+4259657740&4294967295,d=p+(l<<23&4294967295|l>>>9),l=u+(d^p^g)+m[1]+2763975236&4294967295,u=d+(l<<4&4294967295|l>>>28),l=g+(u^d^p)+m[4]+1272893353&4294967295,g=u+(l<<11&4294967295|l>>>21),l=p+(g^u^d)+m[7]+4139469664&4294967295,p=g+(l<<16&4294967295|l>>>16),l=d+(p^g^u)+m[10]+3200236656&4294967295,d=p+(l<<23&4294967295|l>>>9),l=u+(d^p^g)+m[13]+681279174&4294967295,u=d+(l<<4&4294967295|l>>>28),l=g+(u^d^p)+m[0]+3936430074&4294967295,g=u+(l<<11&4294967295|l>>>21),l=p+(g^u^d)+m[3]+3572445317&4294967295,p=g+(l<<16&4294967295|l>>>16),l=d+(p^g^u)+m[6]+76029189&4294967295,d=p+(l<<23&4294967295|l>>>9),l=u+(d^p^g)+m[9]+3654602809&4294967295,u=d+(l<<4&4294967295|l>>>28),l=g+(u^d^p)+m[12]+3873151461&4294967295,g=u+(l<<11&4294967295|l>>>21),l=p+(g^u^d)+m[15]+530742520&4294967295,p=g+(l<<16&4294967295|l>>>16),l=d+(p^g^u)+m[2]+3299628645&4294967295,d=p+(l<<23&4294967295|l>>>9),l=u+(p^(d|~g))+m[0]+4096336452&4294967295,u=d+(l<<6&4294967295|l>>>26),l=g+(d^(u|~p))+m[7]+1126891415&4294967295,g=u+(l<<10&4294967295|l>>>22),l=p+(u^(g|~d))+m[14]+2878612391&4294967295,p=g+(l<<15&4294967295|l>>>17),l=d+(g^(p|~u))+m[5]+4237533241&4294967295,d=p+(l<<21&4294967295|l>>>11),l=u+(p^(d|~g))+m[12]+1700485571&4294967295,u=d+(l<<6&4294967295|l>>>26),l=g+(d^(u|~p))+m[3]+2399980690&4294967295,g=u+(l<<10&4294967295|l>>>22),l=p+(u^(g|~d))+m[10]+4293915773&4294967295,p=g+(l<<15&4294967295|l>>>17),l=d+(g^(p|~u))+m[1]+2240044497&4294967295,d=p+(l<<21&4294967295|l>>>11),l=u+(p^(d|~g))+m[8]+1873313359&4294967295,u=d+(l<<6&4294967295|l>>>26),l=g+(d^(u|~p))+m[15]+4264355552&4294967295,g=u+(l<<10&4294967295|l>>>22),l=p+(u^(g|~d))+m[6]+2734768916&4294967295,p=g+(l<<15&4294967295|l>>>17),l=d+(g^(p|~u))+m[13]+1309151649&4294967295,d=p+(l<<21&4294967295|l>>>11),l=u+(p^(d|~g))+m[4]+4149444226&4294967295,u=d+(l<<6&4294967295|l>>>26),l=g+(d^(u|~p))+m[11]+3174756917&4294967295,g=u+(l<<10&4294967295|l>>>22),l=p+(u^(g|~d))+m[2]+718787259&4294967295,p=g+(l<<15&4294967295|l>>>17),l=d+(g^(p|~u))+m[9]+3951481745&4294967295,f.g[0]=f.g[0]+u&4294967295,f.g[1]=f.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,f.g[2]=f.g[2]+p&4294967295,f.g[3]=f.g[3]+g&4294967295}r.prototype.v=function(f,u){u===void 0&&(u=f.length);let d=u-this.blockSize,m=this.C,p=this.h,g=0;for(;g<u;){if(p==0)for(;g<=d;)i(this,f,g),g+=this.blockSize;if(typeof f=="string"){for(;g<u;)if(m[p++]=f.charCodeAt(g++),p==this.blockSize){i(this,m),p=0;break}}else for(;g<u;)if(m[p++]=f[g++],p==this.blockSize){i(this,m),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var u=1;u<f.length-8;++u)f[u]=0;u=this.o*8;for(var d=f.length-8;d<f.length;++d)f[d]=u&255,u/=256;for(this.v(f),f=Array(16),u=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)f[u++]=this.g[d]>>>m&255;return f};function s(f,u){var d=a;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=u(f)}function o(f,u){this.h=u;let d=[],m=!0;for(let p=f.length-1;p>=0;p--){let g=f[p]|0;m&&g==u||(d[p]=g,m=!1)}this.g=d}var a={};function c(f){return-128<=f&&f<128?s(f,function(u){return new o([u|0],u<0?-1:0)}):new o([f|0],f<0?-1:0)}function h(f){if(isNaN(f)||!isFinite(f))return w;if(f<0)return D(h(-f));let u=[],d=1;for(let m=0;f>=d;m++)u[m]=f/d|0,d*=4294967296;return new o(u,0)}function _(f,u){if(f.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(f.charAt(0)=="-")return D(_(f.substring(1),u));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');let d=h(Math.pow(u,8)),m=w;for(let g=0;g<f.length;g+=8){var p=Math.min(8,f.length-g);let l=parseInt(f.substring(g,g+p),u);p<8?(p=h(Math.pow(u,p)),m=m.j(p).add(h(l))):(m=m.j(d),m=m.add(h(l)))}return m}var w=c(0),b=c(1),K=c(16777216);t=o.prototype,t.m=function(){if(W(this))return-D(this).m();let f=0,u=1;for(let d=0;d<this.g.length;d++){let m=this.i(d);f+=(m>=0?m:4294967296+m)*u,u*=4294967296}return f},t.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(M(this))return"0";if(W(this))return"-"+D(this).toString(f);let u=h(Math.pow(f,6));var d=this;let m="";for(;;){let p=hn(d,u).g;d=Ae(d,p.j(u));let g=((d.g.length>0?d.g[0]:d.h)>>>0).toString(f);if(d=p,M(d))return g+m;for(;g.length<6;)g="0"+g;m=g+m}},t.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function M(f){if(f.h!=0)return!1;for(let u=0;u<f.g.length;u++)if(f.g[u]!=0)return!1;return!0}function W(f){return f.h==-1}t.l=function(f){return f=Ae(this,f),W(f)?-1:M(f)?0:1};function D(f){let u=f.g.length,d=[];for(let m=0;m<u;m++)d[m]=~f.g[m];return new o(d,~f.h).add(b)}t.abs=function(){return W(this)?D(this):this},t.add=function(f){let u=Math.max(this.g.length,f.g.length),d=[],m=0;for(let p=0;p<=u;p++){let g=m+(this.i(p)&65535)+(f.i(p)&65535),l=(g>>>16)+(this.i(p)>>>16)+(f.i(p)>>>16);m=l>>>16,g&=65535,l&=65535,d[p]=l<<16|g}return new o(d,d[d.length-1]&-2147483648?-1:0)};function Ae(f,u){return f.add(D(u))}t.j=function(f){if(M(this)||M(f))return w;if(W(this))return W(f)?D(this).j(D(f)):D(D(this).j(f));if(W(f))return D(this.j(D(f)));if(this.l(K)<0&&f.l(K)<0)return h(this.m()*f.m());let u=this.g.length+f.g.length,d=[];for(var m=0;m<2*u;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<f.g.length;p++){let g=this.i(m)>>>16,l=this.i(m)&65535,De=f.i(p)>>>16,js=f.i(p)&65535;d[2*m+2*p]+=l*js,Ye(d,2*m+2*p),d[2*m+2*p+1]+=g*js,Ye(d,2*m+2*p+1),d[2*m+2*p+1]+=l*De,Ye(d,2*m+2*p+1),d[2*m+2*p+2]+=g*De,Ye(d,2*m+2*p+2)}for(f=0;f<u;f++)d[f]=d[2*f+1]<<16|d[2*f];for(f=u;f<2*u;f++)d[f]=0;return new o(d,0)};function Ye(f,u){for(;(f[u]&65535)!=f[u];)f[u+1]+=f[u]>>>16,f[u]&=65535,u++}function Pt(f,u){this.g=f,this.h=u}function hn(f,u){if(M(u))throw Error("division by zero");if(M(f))return new Pt(w,w);if(W(f))return u=hn(D(f),u),new Pt(D(u.g),D(u.h));if(W(u))return u=hn(f,D(u)),new Pt(D(u.g),u.h);if(f.g.length>30){if(W(f)||W(u))throw Error("slowDivide_ only works with positive integers.");for(var d=b,m=u;m.l(f)<=0;)d=Fs(d),m=Fs(m);var p=Qe(d,1),g=Qe(m,1);for(m=Qe(m,2),d=Qe(d,2);!M(m);){var l=g.add(m);l.l(f)<=0&&(p=p.add(d),g=l),m=Qe(m,1),d=Qe(d,1)}return u=Ae(f,p.j(u)),new Pt(p,u)}for(p=w;f.l(u)>=0;){for(d=Math.max(1,Math.floor(f.m()/u.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),g=h(d),l=g.j(u);W(l)||l.l(f)>0;)d-=m,g=h(d),l=g.j(u);M(g)&&(g=b),p=p.add(g),f=Ae(f,l)}return new Pt(p,f)}t.B=function(f){return hn(this,f).h},t.and=function(f){let u=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)&f.i(m);return new o(d,this.h&f.h)},t.or=function(f){let u=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)|f.i(m);return new o(d,this.h|f.h)},t.xor=function(f){let u=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<u;m++)d[m]=this.i(m)^f.i(m);return new o(d,this.h^f.h)};function Fs(f){let u=f.g.length+1,d=[];for(let m=0;m<u;m++)d[m]=f.i(m)<<1|f.i(m-1)>>>31;return new o(d,f.h)}function Qe(f,u){let d=u>>5;u%=32;let m=f.g.length-d,p=[];for(let g=0;g<m;g++)p[g]=u>0?f.i(g+d)>>>u|f.i(g+d+1)<<32-u:f.i(g+d);return new o(p,f.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Vh=Va.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=_,Vi=Va.Integer=o}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});function L(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)}var B=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};B.UNAUTHENTICATED=new B(null),B.GOOGLE_CREDENTIALS=new B("google-credentials-uid"),B.FIRST_PARTY=new B("first-party-uid"),B.MOCK_USER=new B("mock-user");var Tt="13.1.0";function Ja(t){Tt=t}var lt=new Se("@firebase/firestore");function Qt(t,...e){if(lt.logLevel<=v.DEBUG){let n=e.map(_s);lt.debug(`Firestore (${Tt}): ${t}`,...n)}}function Dr(t,...e){if(lt.logLevel<=v.ERROR){let n=e.map(_s);lt.error(`Firestore (${Tt}): ${t}`,...n)}}function Ya(t,...e){if(lt.logLevel<=v.WARN){let n=e.map(_s);lt.warn(`Firestore (${Tt}): ${t}`,...n)}}function _s(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}function C(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qa(t,r,n)}function Qa(t,e,n){let r=`FIRESTORE (${Tt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dr(r),new Error(r)}function Z(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qa(e,i,r)}function Xa(t,e){return t}var I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},E=class extends G{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var ir=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Fi=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(B.UNAUTHENTICATED))}shutdown(){}},ji=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},sr=class{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Z(typeof e.accessToken=="string",42297,{Z:e}),new ir(e.accessToken,new B(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}},qi=class{constructor(e,n,r){this.ee=e,this.te=n,this.re=r,this.type="FirstParty",this.user=B.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);let e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}},Bi=class{constructor(e,n,r){this.ee=e,this.te=n,this.re=r}getToken(){return Promise.resolve(new qi(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable(()=>n(B.FIRST_PARTY))}shutdown(){}invalidateToken(){}},or=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ar=class{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,q(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit(r=>{this.appCheck=r})}getToken(){return this.oe?Promise.resolve(new or(this.oe)):this.appCheck?this.appCheck.getToken().then(e=>e?(Z(typeof e.token=="string",3470,{tokenResult:e}),new or(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}};var $i=class{constructor(e,n,r,i,s,o,a,c,h,_,w,b,K){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=_,this.apiKey=w,this._customHeaders=b,this.grpcFlowControlWindow=K}},Hi="(default)",cr=class t{constructor(e,n){this.projectId=e,this.database=n||Hi}static empty(){return new t("","")}get isDefaultDatabase(){return this.database===Hi}isEqual(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}};function Za(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(t.options.projectId,e)}function Lh(t){let e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}var Wi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Lh(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}};function _e(t,e){return t<e?-1:t>e?1:0}function ys(t,e){let n=Math.min(t.length,e.length);for(let r=0;r<n;r++){let i=t.charAt(r),s=e.charAt(r);if(i!==s)return Li(i)===Li(s)?_e(i,s):Li(i)?1:-1}return _e(t.length,e.length)}var xh=55296,Mh=57343;function Li(t){let e=t.charCodeAt(0);return e>=xh&&e<=Mh}function ec(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}var La="__name__",ur=class t{constructor(e,n,r){n===void 0?n=0:n>e.length&&C(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&C(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return t.comparator(this,e)===0}child(e){let n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){let r=Math.min(e.length,n.length);for(let i=0;i<r;i++){let s=t.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return _e(e.length,n.length)}static compareSegments(e,n){let r=t.isNumericId(e),i=t.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?t.extractNumericId(e).compare(t.extractNumericId(n)):ys(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vi.fromString(e.substring(4,e.length-2))}},$=class t extends ur{construct(e,n,r){return new t(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let n=[];for(let r of e){if(r.indexOf("//")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new t(n)}static emptyPath(){return new t([])}},Uh=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Xt=class at extends ur{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Uh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===La}static keyField(){return new at([La])}static fromServerFormat(e){let n=[],r="",i=0,s=()=>{if(r.length===0)throw new E(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;i<e.length;){let a=e[i];if(a==="\\"){if(i+1===e.length)throw new E(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}};var ye=class t{constructor(e){this.path=e}static fromPath(e){return new t($.fromString(e))}static fromName(e){return new t($.fromString(e).popFirst(5))}static empty(){return new t($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t(new $(e.slice()))}};function Fh(t,e,n){if(!n)throw new E(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xa(t){if(!ye.isDocumentKey(t))throw new E(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tc(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Is(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C(12329,{type:typeof t})}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Is(t);throw new E(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nc(t){let e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}var Zn=null;function jh(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}function lr(t){return t===0&&1/t==-1/0}var xi="RestConnection",qh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"},Gi=class{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${r}/databases/${i}`,this.ce=this.databaseId.database===Hi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}le(e,n,r,i,s){let o=jh(),a=this.fe(e,n.toUriEncodedString());Qt(xi,`Sending RPC '${e}' ${o}:`,a,r);let c={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(c,i,s);let{host:h}=new URL(a),_=Oe(h);return this.de(e,a,c,r,_).then(w=>(Qt(xi,`Received RPC '${e}' ${o}: `,w),w),w=>{throw Ya(xi,`RPC '${e}' ${o} failed with error: `,w,"url: ",a,"request:",r),w})}me(e,n,r,i,s,o){return this.le(e,n,r,i,s)}he(e,n,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i),this.databaseInfo._customHeaders)for(let i of Object.keys(this.databaseInfo._customHeaders))e[i]=this.databaseInfo._customHeaders[i]}fe(e,n){let r=qh[e],i=`${this.ue}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}};var Ma,T,x,ct,zi,er,tr,Kt;function Ua(t){if(t===void 0)return Dr("RPC_ERROR","HTTP error has no status"),I.UNKNOWN;switch(t){case 200:return I.OK;case 400:return I.FAILED_PRECONDITION;case 401:return I.UNAUTHENTICATED;case 403:return I.PERMISSION_DENIED;case 404:return I.NOT_FOUND;case 409:return I.ABORTED;case 416:return I.OUT_OF_RANGE;case 429:return I.RESOURCE_EXHAUSTED;case 499:return I.CANCELLED;case 500:return I.UNKNOWN;case 501:return I.UNIMPLEMENTED;case 503:return I.UNAVAILABLE;case 504:return I.DEADLINE_EXCEEDED;default:return t>=200&&t<300?I.OK:t>=400&&t<500?I.FAILED_PRECONDITION:t>=500&&t<600?I.INTERNAL:I.UNKNOWN}}(T=Ma||(Ma={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";var Ki=class extends Gi{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,r,i,s){let o=JSON.stringify(i),a;try{let c={method:"POST",headers:r,body:o};s&&(c.credentials="include"),a=await fetch(n,c)}catch(c){let h=c,_=h?.message,w=h?.cause?String(h.cause):void 0,b=(_&&w?`${_} (${w})`:_??w)??h?.statusText??String(c);throw new E(Ua(h?.status),`Request failed with error: ${b}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);let h=c?.error?.message;throw new E(Ua(a.status),`Request failed with error: ${h??a.statusText}`)}return a.json()}};var Ji=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var oe=class t{constructor(e){this.binaryString=e}static fromBase64String(e){let n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ji("Invalid base64 string: "+s):s}}(e);return new t(n)}static fromUint8Array(e){let n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};function Zt(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}oe.EMPTY_BYTE_STRING=new oe("");var P=class t{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let r=new t;return r.parse(e,n),r}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let r=this.Pe,i=this.be(e,r);if(i==0&&this.isEmpty(r)||(n+=i)<t.we)return;if(n>t.ge)return void(this.exponent=Number(t.Fe));let s=this.ve(n,r);this.xe(n,s,r)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let r=0;for(;r<e.length&&e[r]==0;)r+=1;if(r==e.length)return 0;let i=-r;if(e.length-r>t.De){let s=e[t.De]>=5,o=new Array(t.De).fill(0);for(let a=0;a<t.De;a++)o[a]=e[a+r];s&&(i+=this.Ne(o)),e=o,r=0}for(let s=e.length-1;s>=r;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return i}Se(e){let n=e.length;for(let r=0;r<n;r++){let i=e[r]%10n;e[r]=e[r]/10n,r+1<n&&(e[r+1]+=i<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let r=n[0]<<31n|n[1]>>1n,i=Number(r)/t.Ce;return Math.floor(Number(e)*t.Be+this.log2(i))}log2(e){return t.Qe*Math.log(e)}xe(e,n,r){let i=this.Ie;this.Oe(-n,i);let s=this.pe;this.Me(r,i,s),this.qe(s),BigInt(i[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=t.Ue)<=0||(n+=this.$e(s),BigInt(n)>=t.Fe?this.exponent=Number(t.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(t.je[0],n);let r=t.je;e<0&&(e=-e,r=t.Ke);let i=t.ze,s=32,o=!0;for(;e>0;)e>=i&&(o?(this.ke(r[s],n),o=!1):this.We(n,r[s],n),e-=i),s-=1,i*=.5}ke(e,n){for(let r=0;r<n.length;r++)n[r]=e[r]}We(e,n,r){this.Ge(e,n,this.pe);let i=this.Je(this.pe);this.He(this.pe,r),r[0]=e[0]+n[0]+BigInt(i)}Ge(e,n,r){for(let i=0;i<r.length;i++)r[i]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let i=5;i>=0;i--)for(let s=5;s>=0;s--){let o=this.Ae[i]*this.Re[s];r[s+i+1]=r[s+i+1]+(o&t.Xe)&0xffffffffffffffffn,r[s+i]=r[s+i]+(o>>32n)&0xffffffffffffffffn}for(let i=11;i>=1;i--)r[i-1]=r[i-1]+(r[i]>>32n)&0xffffffffffffffffn,r[i]&=t.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,r){for(let o=0;o<r.length;o++)r[o]=0n;let i=this.Re;this.Ye(n,i);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let c=e[o]*i[a];r[a+o+1]=r[a+o+1]+(c&t.Xe)&0xffffffffffffffffn,r[a+o]=r[a+o]+(c>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)r[o-1]=r[o-1]+(r[o]>>32n)&0xffffffffffffffffn,r[o]&=t.Xe}qe(e){let n=e.length-1;e[0]&=t.Xe,e[n]*=10n;for(let r=n-1;r>=0;r--)e[r]=10n*e[r]+(e[r+1]>>32n)&0xffffffffffffffffn,e[r+1]&=t.Xe}Le(e){let n=31-t.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&t.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&t.Xe,n[2]=e[2]>>32n,n[3]=e[2]&t.Xe,n[4]=e[3]>>32n,n[5]=e[3]&t.Xe}tt(e,n){let r=e.length-1,i=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=r+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<i&t.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>i);for(let o=1;o<r;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&t.Xe|e[o+1]>>i);e[r]=e[r]<<s&t.Xe}}rt(e,n,r){let i=n;e[i]=e[i]+r&0xffffffffffffffffn;for(let s=i+1-1;s>=1&&(e[s]&t.nt)!=0n;s--)e[s]&=t.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}};P.De=59,P.ge=646456993,P.we=-646457032,P.Ce=0xccccccccccccd00,P.it=0x8000000000000000n,P.ze=2147483648,P.Xe=0x00000000ffffffffn,P.nt=0xffffffff00000000n,P.Be=Math.log(10)/Math.log(2),P.Qe=1/Math.log(2),P.Ue=2147483647,P.Fe=0xffffffffn,P.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],P.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];var S=class t{constructor(e,n,r,i){this.negative=e,this.st=n,this.Ve=r,this.Te=i}exponent(){return this.st-P.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===L(t,x,"f",ct)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===L(t,x,"f",ct)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,r;if(this.negative){if(!e.negative)return-1;n=1,r=-1}else{if(e.negative)return 1;n=-1,r=1}return this.st<e.st?n:this.st>e.st?r:this.Ve<e.Ve?n:this.Ve>e.Ve?r:this.Te<e.Te?n:this.Te>e.Te?r:0}debug(){return(this.negative?"+":"-")+L(t,x,"m",zi).call(t,this.Ve)+L(t,x,"m",zi).call(t,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return t.NaN;if(!isFinite(e))return e<0?t._t:t.ct;if(e===0)return Math.sign(1/e)>0?t.lt:t.ft;let n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);let r=n.getBigUint64(0),i=BigInt.asUintN(64,r<<12n),s=2047&Number(r>>52n);if(s===0){let o=P.et(i);i=o<63?i<<BigInt(o+1):0n,s=-o}return new t(e<0,L(t,x,"m",Kt).call(t,s-1023),i,0n)}static fromString(e){if(e==="NaN")return t.NaN;if(e==="-Infinity")return t._t;if(e==="Infinity"||e==="+Infinity")return t.ct;let n=new Array(e.length).fill(0),r=0,i=0,s=0,o=!1;for(e[r]==="-"?(o=!0,r++):e[r]==="+"&&r++;L(t,x,"m",er).call(t,e,r);)n[i++]=L(t,x,"m",tr).call(t,e,r++);if(e[r]==="."){let c=++r;for(;L(t,x,"m",er).call(t,e,r);)n[i++]=L(t,x,"m",tr).call(t,e,r++);s=c-r}if(e[r]==="e"||e[r]==="E"){let c=0;r++;let h=1;e[r]==="-"?(h=-1,r++):e[r]==="+"&&r++;let _=r;for(;L(t,x,"m",er).call(t,e,r);)if(c=10*c+L(t,x,"m",tr).call(t,e,r++),r-_>9)throw new Error("Exponent too large "+e);if(r===_)throw new Error("Invalid number "+e);s+=c*h}if(i===0||r!==e.length)throw new Error("Invalid number "+e);let a=P.ye(n.slice(0,i),s);return new t(o,a.exponent,a.Ve,a.Te)}};x=S,zi=function(e){return e.toString(16).padStart(16,"0")},er=function(e,n){let r=e.codePointAt(n);return r!==void 0&&r>=48&&r<=57},tr=function(e,n){return e.codePointAt(n)-48},Kt=function(e){return e+P.Ue},ct={value:Number(P.Fe)},S.lt=new S(!1,0,0n,0n),S.ft=new S(!0,0,0n,0n),S.NaN=new S(!1,L(S,x,"f",ct),1n<<63n,0n),S._t=new S(!0,L(S,x,"f",ct),0n,0n),S.ct=new S(!1,L(S,x,"f",ct),0n,0n),new S(!0,L(S,x,"m",Kt).call(S,63),0n,0n),new S(!1,L(S,x,"m",Kt).call(S,0),0n,0n),new S(!0,L(S,x,"m",Kt).call(S,0),0n,0n);var Bh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(t){if(Z(!!t,39018),typeof t=="string"){let e=0,n=Bh.exec(t);if(Z(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:X(t.seconds),nanos:X(t.nanos)}}function X(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?oe.fromBase64String(t):oe.fromUint8Array(t)}function ee(t,e){let n={typeString:t};return e&&(n.value=e),n}function an(t,e){if(!tc(t))throw new E(I.INVALID_ARGUMENT,"JSON must be an object");let n;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0,o=e[r].optional;if(!(r in t)){if(o)continue;n=`JSON missing required field: '${r}'`;break}let a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new E(I.INVALID_ARGUMENT,n);return!0}var Fa=-62135596800,ja=1e6,F=class t{static now(){return t.fromMillis(Date.now())}static fromDate(e){return t.fromMillis(e.getTime())}static fromMillis(e){let n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ja);return new t(n,r)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new E(I.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return t._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,r;if(e>=0n)n=Number(e/1000000000n),r=Number(e%1000000000n);else{let i=e%1000000000n;i===0n?(n=Number(e/1000000000n),r=0):(n=Number(e/1000000000n-1n),r=Number(i+1000000000n))}return new t(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fa)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ja}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(I.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");let e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(an(e,t._jsonSchema))return new t(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Fa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};F._jsonSchemaVersion="firestore/timestamp/1.0",F._jsonSchema={type:ee("string",F._jsonSchemaVersion),seconds:ee("number"),nanoseconds:ee("number")};function $h(t){return(t?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function rc(t){let e=t.mapValue.fields.__previous_value__;return $h(e)?rc(e):e}function Yi(t){let e=en(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}var ic="__type__",sc="__vector__",oc="value",Hh="server_timestamp",ac="__min__",ws="__max__",Ce="__regex__",hr="pattern",fr="options",tn="__oid__",cn="__int__",dt="__decimal128__",He="__request_timestamp__",pr="seconds",mr="increment",Lr="__binary__";var R,ne;(ne=R||(R={})).dt="regexValue",ne.Et="bsonObjectIdValue",ne.Vt="int32Value",ne.Tt="decimal128Value",ne.It="bsonTimestampValue",ne.At="bsonBinaryValue",ne.Rt="minKeyValue",ne.Pt="maxKeyValue",ne.yt="maxValue",ne.bt="vectorValue",ne.wt="serverTimestampValue",ne.gt="regularMapValue";var qa={[sc]:R.bt,[ws]:R.yt,[Hh]:R.wt},cc={[Ce]:R.dt,[tn]:R.Et,[cn]:R.Vt,[dt]:R.Tt,[He]:R.It,[Lr]:R.At,[ac]:R.Rt,[ws]:R.Pt};function Qi(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return C(28295,{value:t});switch(function(r){if(!r.mapValue?.fields)return R.gt;let i=r.mapValue.fields,s=i[ic]?.stringValue;if(s&&qa[s])return qa[s];if(Zt(i)===1){let o=Object.keys(i);return cc[o[0]]??R.gt}return R.gt}(t)){case R.wt:return 6;case R.yt:return 9007199254740991;case R.bt:return 14;case R.dt:return 12;case R.Et:return 10;case R.Vt:case R.Tt:return 3;case R.It:return 5;case R.At:return 8;case R.Rt:return 1;case R.Pt:return 16;default:return 15}}function Xi(t,e,n){if(t===e)return!0;let r=Qi(t);if(r!==Qi(e))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return Yi(t).isEqual(Yi(e));case 4:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;let a=en(s.timestampValue),c=en(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 7:return t.stringValue===e.stringValue;case 8:return function(s,o){return zh(s,o)===0}(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return function(s,o){return X(s.geoPointValue.latitude)===X(o.geoPointValue.latitude)&&X(s.geoPointValue.longitude)===X(o.geoPointValue.longitude)}(t,e);case 3:return function(s,o,a){if(ht(s)&&ht(o))return uc(s,o)===0;if("integerValue"in s&&"integerValue"in o||gr(s)&&gr(o))return nn(s)===nn(o);let c,h;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(c=X(s.doubleValue),h=X(o.doubleValue),c===h?lr(c)===lr(h):!!(a===void 0||a.vt)&&isNaN(c)&&isNaN(h))}(t,e,n);case 13:return ec(t.arrayValue.values||[],e.arrayValue.values||[],(i,s)=>Xi(i,s,n));case 14:case 15:return function(s,o,a){let c=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Zt(c)!==Zt(h))return!1;for(let _ in c)if(c.hasOwnProperty(_)&&(h[_]===void 0||!Xi(c[_],h[_],a)))return!1;return!0}(t,e,n);case 5:return Gh(t,e)===0;case 12:return Kh(t,e)===0;case 10:return Jh(t,e)===0;default:return C(52216,{left:t})}}function nn(t){let e;return e=gr(t)?t.mapValue.fields[cn].integerValue:t.integerValue||t.doubleValue,X(e)}function Wh(t){return t.mapValue.fields[dt].stringValue}function Ba(t,e){if(ht(t)||ht(e))return uc(t,e);let n=nn(t),r=nn(e);return isNaN(n)?isNaN(r)?0:-1:isNaN(r)?1:_e(n,r)}function uc(t,e){let n=$a(t),r=$a(e);return n.ot()&&r.ot()?0:n.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:n.compareTo(r)}function $a(t){return ht(t)?S.fromString(Wh(t)):S.fromNumber(nn(t))}function Gh(t,e){let n=t.mapValue.fields?.[He].mapValue?.fields?.[pr],r=e.mapValue.fields?.[He].mapValue?.fields?.[pr],i=t.mapValue.fields?.[He].mapValue?.fields?.[mr],s=e.mapValue.fields?.[He].mapValue?.fields?.[mr],o=Ba(n,r);return o!==0?o:Ba(i,s)}function Ha(t){if("bytesValue"in t)return{subtype:0,bytes:dr(t.bytesValue)};let e=t.mapValue?.fields,n=e?.[Lr],r=n?.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");let i=dr(r).toUint8Array();if(i.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");let s=i[0],o=i.slice(1);return{subtype:s,bytes:oe.fromUint8Array(o)}}function zh(t,e){let n=Ha(t),r=Ha(e);return n.subtype!==r.subtype?n.subtype<r.subtype?-1:1:n.bytes.compareTo(r.bytes)}function Kh(t,e){let n=t.mapValue.fields,r=n?.[Ce]?.mapValue?.fields?.[hr]?.stringValue??"",i=n?.[Ce]?.mapValue?.fields?.[fr]?.stringValue??"",s=e.mapValue.fields,o=s?.[Ce]?.mapValue?.fields?.[hr]?.stringValue??"",a=s?.[Ce]?.mapValue?.fields?.[fr]?.stringValue??"",c=ys(r,o);return c!==0?c:_e(i,a)}function Jh(t,e){return ys(t.mapValue.fields?.[tn]?.stringValue??"",e.mapValue.fields?.[tn]?.stringValue??"")}function ht(t){if(!t.mapValue?.fields)return!1;let e=t.mapValue.fields;return Zt(e)===1&&e[dt]&&!!e[dt].stringValue}function gr(t){if(!t.mapValue?.fields)return!1;let e=t.mapValue.fields;return Zt(e)===1&&e[cn]?.integerValue!==void 0}function Mi(t){return!!t&&"mapValue"in t}function Jt(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){let e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jt(r)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jt(t.arrayValue.values[n]);return e}return{...t}}new Set(Object.values(cc));var z=class t{static fromTimestamp(e){return new t(e)}static min(){return new t(new F(0,0))}static max(){return new t(new F(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Zi=class t{constructor(e,n){this.comparator=e,this.root=n||pe.EMPTY}insert(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){let e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ut(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ut(this.root,e,this.comparator,!1)}getReverseIterator(){return new ut(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ut(this.root,e,this.comparator,!0)}},ut=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pe=class t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??t.RED,this.left=i??t.EMPTY,this.right=s??t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw C(27949);return e+(this.isRed()?0:1)}};pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var es=class t{constructor(e){this.comparator=e,this.data=new Zi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _r(this.data.getIterator())}getIteratorFrom(e){return new _r(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(n=>{e.push(n)}),e}toString(){let e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){let n=new t(this.comparator);return n.data=e,n}},_r=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var yr=class t{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new t([])}unionWith(e){let n=new es(Xt.comparator);for(let r of this.fields)n=n.add(r);for(let r of e)n=n.add(r);return new t(n.toArray())}covers(e){for(let n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ec(this.fields,e.fields,(n,r)=>n.isEqual(r))}};var fe=class t{constructor(e){this.value=e}static empty(){return new t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jt(n)}setAll(e){let n=Xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Jt(o):i.push(a.lastSegment())});let s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){let n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new t(Jt(this.value))}};var Ir=class t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new t(e,0,z.min(),z.min(),z.min(),fe.empty(),0)}static newFoundDocument(e,n,r,i){return new t(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new t(e,2,n,z.min(),z.min(),fe.empty(),0)}static newUnknownDocument(e,n){return new t(e,3,n,z.min(),z.min(),fe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var ts=class{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}};function lc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(e)?"-0":e}}function nr(t){return{integerValue:""+t}}function Yh(t,e,n){return function(i){return typeof i=="number"&&Number.isInteger(i)&&!lr(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}(e)?nr(e):lc(t,e)}var ft=class{constructor(){this._=void 0}},wr=class extends ft{},ns=class extends ft{constructor(e){super(),this.elements=e}},rs=class extends ft{constructor(e){super(),this.elements=e}},rn=class extends ft{constructor(e,n){super(),this.serializer=e,this.Qt=n}},is=class extends rn{},ss=class extends rn{},os=class extends rn{};var as=class{constructor(e,n){this.field=e,this.transform=n}},Er=class t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new t}static exists(e){return new t(void 0,e)}static updateTime(e){return new t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}},pt=class{},br=class extends pt{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Tr=class extends pt{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}},vr=class extends pt{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Ar=class extends pt{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var cs=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function rr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qh(t,e){return rr(t,e.toTimestamp())}function Ui(t){return Z(!!t,49232),z.fromTimestamp(function(n){let r=en(n);return new F(r.seconds,r.nanos)}(t))}function dc(t,e){return us(t,e).canonicalString()}function us(t,e){let n=function(i){return new $(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sr(t,e){return dc(t.databaseId,e.path)}function Ga(t,e){let n=function(i){let s=$.fromString(i);return Z(hc(s),10190,{key:s.toString()}),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(function(i){return Z(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}(n))}function za(t,e,n){return{name:Sr(t,e),fields:n.value.mapValue.fields}}function Xh(t,e){return"found"in e?function(r,i){Z(!!i.found,43571),i.found.name,i.found.updateTime;let s=Ga(r,i.found.name),o=Ui(i.found.updateTime),a=i.found.createTime?Ui(i.found.createTime):z.min(),c=new fe({mapValue:{fields:i.found.fields}});return Ir.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){Z(!!i.missing,3894),Z(!!i.readTime,22933);let s=Ga(r,i.missing),o=Ui(i.readTime);return Ir.newNoDocument(s,o)}(t,e):C(7234,{result:e})}function Zh(t,e){let n;if(e instanceof br)n={update:za(t,e.key,e.value)};else if(e instanceof vr)n={delete:Sr(t,e.key)};else if(e instanceof Tr)n={update:za(t,e.key,e.data),updateMask:ef(e.fieldMask)};else{if(!(e instanceof Ar))return C(16599,{Ot:e.type});n={verify:Sr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let a=o.transform;if(a instanceof wr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof is)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof ss)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof os)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw C(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Qh(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:C(27497)}(t,e.precondition)),n}function ef(t){let e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function fc(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}function Es(t){return new cs(t,!0)}var ls=class{},ds=class extends ls{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.qt=!1}Lt(){if(this.qt)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,r,i){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.le(e,us(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(I.UNKNOWN,s.toString())})}me(e,n,r,i,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.me(e,us(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(I.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}};async function pc(t,e){let n=Xa(t),r={writes:e.map(i=>Zh(n.serializer,i))};await n.le("Commit",n.serializer.databaseId,$.emptyPath(),r)}async function mc(t,e){let n=Xa(t),r={documents:e.map(a=>Sr(n.serializer,a))},i=await n.me("BatchGetDocuments",n.serializer.databaseId,$.emptyPath(),r,e.length),s=new Map;i.forEach(a=>{let c=Xh(n.serializer,a);s.set(c.key.toString(),c)});let o=[];return e.forEach(a=>{let c=s.get(a.toString());Z(!!c,55234,{key:a}),o.push(c)}),o}var gc="ComponentProvider",Yt=new Map;function bs(t){if(t._terminated)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.");if(!Yt.has(t)){Qt(gc,"Initializing Datastore");let e=function(s){return new Ki(s)}(function(s,o,a,c,h){return new $i(s,o,a,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nc(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator,c,h._customHeaders,h.grpcFlowControlWindow)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Es(t._databaseId),r=function(s,o,a,c){return new ds(s,o,a,c)}(t._authCredentials,t._appCheckCredentials,e,n);Yt.set(t,r)}return Yt.get(t)}var tf=1048576,_c="firestore.googleapis.com",Ka=!0,Rr=class{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new E(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_c,this.ssl=Ka}else this.host=e.host,this.ssl=e.ssl??Ka;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tf)throw new E(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(r,i,s,o){if(i===!0&&o===!0)throw new E(I.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new E(I.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,i){if(r===i)return!0;if(!r||!i)return!1;let s=Object.keys(r),o=Object.keys(i);if(s.length!==o.length)return!1;for(let a of s)if(r[a]!==i[a])return!1;return!0}(this._customHeaders,e._customHeaders)}},mt=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fi;switch(r.type){case"firstParty":return new Bi(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=Yt.get(n);r&&(Qt(gc,"Removing Datastore"),Yt.delete(n),r.terminate())}(this),Promise.resolve()}};function yc(t,e){let n=typeof t=="object"?t:xe(),r=typeof t=="string"?t:e||"(default)",i=ue(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){let s=Ws("firestore");s&&Ic(i,...s)}return i}function Ic(t,e,n,r={}){t=Or(t,mt);let i=Oe(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&gn(`https://${a}`),s.host!==_c&&s.host!==a&&Ya("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let c={...s,host:a,ssl:i,emulatorOptions:r};if(!re(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,_;if(typeof r.mockUserToken=="string")h=r.mockUserToken,_=B.MOCK_USER;else{h=Gs(r.mockUserToken,t._app?.options.projectId);let w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new E(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new B(w)}t._authCredentials=new ji(new ir(h,_))}}var Nr=class t{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new t(this.firestore,e,this._query)}},H=class t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new t(this.firestore,e,this._key)}toJSON(){return{type:t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(an(n,t._jsonSchema))return new t(e,r||null,new ye($.fromString(n.referencePath)))}};H._jsonSchemaVersion="firestore/documentReference/1.0",H._jsonSchema={type:ee("string",H._jsonSchemaVersion),referencePath:ee("string")};var gt=class t extends Nr{constructor(e,n,r){super(e,n,function(s){return new ts(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new H(this.firestore,null,new ye(e))}withConverter(e){return new t(this.firestore,e,this._path)}};function wc(t,e,...n){if(t=N(t),arguments.length===1&&(e=Wi.newId()),Fh("doc","path",e),t instanceof mt){let r=$.fromString(e,...n);return xa(r),new H(t,null,new ye(r))}{if(!(t instanceof H||t instanceof gt))throw new E(I.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child($.fromString(e,...n));return xa(r),new H(t.firestore,t instanceof gt?t.converter:null,new ye(r))}}var me=class t{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new E(I.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new t(oe.fromBase64String(e),n)}catch(r){throw new E(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e,n=0){return new t(oe.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){let e={type:t._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(an(e,t._jsonSchema)){let n=e.subtype??0;return t.fromBase64String(e.bytes,n)}}};me._jsonSchemaVersion="firestore/bytes/1.0",me._jsonSchema={type:ee("string",me._jsonSchemaVersion),bytes:ee("string"),subtype:{...ee("number"),optional:!0}};var sn=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var _t=class{constructor(e){this.value=e}isEqual(e){return this.value===e.value}};var yt=class{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}};var It=class{constructor(e){this.stringValue=e,this.value=S.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}};var wt=class{constructor(e){this._methodName=e}};var Te=class t{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:t._jsonSchemaVersion}}static fromJSON(e){if(an(e,t._jsonSchema))return new t(e.latitude,e.longitude)}};Te._jsonSchemaVersion="firestore/geoPoint/1.0",Te._jsonSchema={type:ee("string",Te._jsonSchemaVersion),latitude:ee("number"),longitude:ee("number")};var Et=class{constructor(e){this.value=e}isEqual(e){return this.value===e.value}};var We=class t{constructor(){this.type="MaxKey"}static instance(){return t.MAX_KEY_VALUE_INSTANCE||(t.MAX_KEY_VALUE_INSTANCE=new t),t.MAX_KEY_VALUE_INSTANCE}};We.MAX_KEY_VALUE_INSTANCE=null;var Ge=class t{constructor(){this.type="MinKey"}static instance(){return t.MIN_KEY_VALUE_INSTANCE||(t.MIN_KEY_VALUE_INSTANCE=new t),t.MIN_KEY_VALUE_INSTANCE}};Ge.MIN_KEY_VALUE_INSTANCE=null;var bt=class{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}};var ge=class t{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(an(e,t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new t(e.vectorValues);throw new E(I.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};ge._jsonSchemaVersion="firestore/vectorValue/1.0",ge._jsonSchema={type:ee("string",ge._jsonSchemaVersion),vectorValues:ee("object")};var nf=/^__.*__$/,hs=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new br(e,this.data,n,this.fieldTransforms)}};function Ec(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{dataSource:t})}}var fs=class t{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new t({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){let n=this.path?.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){let n=this.path?.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Pr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Ec(this.dataSource)&&nf.test(e))throw this.createError('Document fields cannot begin and end with "__"')}},ps=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Es(e)}createContext(e,n,r,i=!1){return new fs({dataSource:e,methodName:n,targetDoc:r,path:Xt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function bc(t){let e=t._freezeSettings(),n=Es(t._databaseId);return new ps(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tc(t,e,n,r,i,s={}){let o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Nc("Data must be an object, but it was:",o,r);let a=Ac(r,o),c,h;if(s.merge)c=new yr(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){let _=[];for(let w of s.mergeFields){let b=Ts(e,w,n);if(!o.contains(b))throw new E(I.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);of(_,b)||_.push(b)}c=new yr(_),h=o.fieldTransforms.filter(w=>c.covers(w.field))}else c=null,h=o.fieldTransforms;return new hs(new fe(a),c,h)}var ms=class t extends wt{_toFieldTransform(e){return new as(e.path,new wr)}isEqual(e){return e instanceof t}};function vc(t,e,n){if(Rc(t=N(t)))return Nc("Unsupported field value:",e,t),Ac(t,e);if(t instanceof wt)return function(i,s){if(!Ec(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);let o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(i,s){let o=[],a=0;for(let c of i){let h=vc(c,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(t,e)}return function(i,s,o){if((i=N(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Yh(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let a=F.fromDate(i);return{timestampValue:rr(s.serializer,a)}}if(i instanceof F){let a=new F(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:rr(s.serializer,a)}}if(Sc(i)){let a=F.fromInstant(i),c=new F(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:rr(s.serializer,c)}}if(i instanceof Te)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof me)return i.subtype===0?{bytesValue:Wa(s.serializer,i._byteString)}:function(c,h){let _=h.toUint8Array(),w=new Uint8Array(_.length+1);return w[0]=h.subtype,w.set(_,1),{mapValue:{fields:{[Lr]:{bytesValue:Wa(c,oe.fromUint8Array(w))}}}}}(s.serializer,i);if(i instanceof H){let a=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw s.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:dc(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ge)return function(c,h){let _=c instanceof ge?c.toArray():c;return{mapValue:{fields:{[ic]:{stringValue:sc},[oc]:{arrayValue:{values:_.map(b=>{if(typeof b!="number")throw h.createError("VectorValues must only contain numeric values.");return lc(h.serializer,b)})}}}}}}(i,s);if(i instanceof bt)return function(c){return{mapValue:{fields:{[Ce]:{mapValue:{fields:{[hr]:{stringValue:c.pattern},[fr]:{stringValue:c.options}}}}}}}}(i);if(i instanceof _t)return function(c){return{mapValue:{fields:{[tn]:{stringValue:c.value}}}}}(i);if(i instanceof Et)return function(c){return{mapValue:{fields:{[cn]:nr(c.value)}}}}(i);if(i instanceof It)return function(c){return{mapValue:{fields:{[dt]:{stringValue:c.stringValue}}}}}(i);if(i instanceof yt)return function(c){return{mapValue:{fields:{[He]:{mapValue:{fields:{[pr]:nr(c.seconds),[mr]:nr(c.increment)}}}}}}}(i);if(i instanceof Ge)return function(){return{mapValue:{fields:{[ac]:{nullValue:"NULL_VALUE"}}}}}();if(i instanceof We)return function(){return{mapValue:{fields:{[ws]:{nullValue:"NULL_VALUE"}}}}}();if(fc(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Is(i)}`)}(t,e)}function Ac(t,e){let n={};return function(i){for(let s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,i)=>{let s=vc(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Sc(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;let e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Rc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Te||t instanceof me||t instanceof H||t instanceof wt||t instanceof ge||t instanceof Ge||t instanceof We||t instanceof Et||t instanceof It||t instanceof bt||t instanceof _t||t instanceof yt||Sc(t)||fc(t))}function Nc(t,e,n){if(!Rc(n)||!tc(n)){let r=Is(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ts(t,e,n){if((e=N(e))instanceof sn)return e._internalPath;if(typeof e=="string")return sf(t,e);throw Pr("Field path arguments must be of type string or ",t,!1,void 0,n)}var rf=new RegExp("[~\\*/\\[\\]]");function sf(t,e,n){if(e.search(rf)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sn(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pr(t,e,n,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new E(I.INVALID_ARGUMENT,a+t+c)}function of(t,e){return t.some(n=>n.isEqual(e))}var on=class{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new H(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new kr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){let n=this._document.data.field(Ts("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},kr=class extends on{data(){return super.data()}};var gs=class{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(gr(e))return this.convertToInt32Value(e.mapValue);if(ht(e))return this.convertToDecimal128Value(e.mapValue)}return X(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(dr(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return We.instance();case 1:return Ge.instance();default:throw C(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){let r={};return Vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){let n=e.fields?.[oc].arrayValue?.values?.map(r=>X(r.doubleValue));return new ge(n)}convertToBsonObjectId(e){let n=e.fields?.[tn]?.stringValue??"";return new _t(n)}convertToBytesWithSubtype(e){let n=e.fields?.[Lr],r=n?.bytesValue;if(!r)throw new Error("Received incorrect bytesValue for Bytes with subtype");let i=dr(r).toUint8Array();if(i.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");let s=i[0],o=i.slice(1);return new me(oe.fromUint8Array(o),s)}convertToBsonTimestamp(e){let n=e.fields?.[He],r=Number(n?.mapValue?.fields?.[pr]?.integerValue),i=Number(n?.mapValue?.fields?.[mr]?.integerValue);return new yt(r,i)}convertToRegexValue(e){let n=e.fields?.[Ce]?.mapValue?.fields?.[hr]?.stringValue??"",r=e.fields?.[Ce]?.mapValue?.fields?.[fr]?.stringValue??"";return new bt(n,r)}convertToInt32Value(e){let n=Number(e.fields?.[cn]?.integerValue);return new Et(n)}convertToDecimal128Value(e){let n=e.fields?.[dt]?.stringValue??"";return new It(n)}convertGeoPoint(e){return new Te(X(e.latitude),X(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":let r=rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){let n=en(e);return new F(n.seconds,n.nanos)}convertDocumentKey(e,n){let r=$.fromString(e);Z(hc(r),9688,{name:e});let i=new cr(r.get(1),r.get(3)),s=new ye(r.popFirst(5));return i.isEqual(n)||Dr(`A document reference to ${s} refers to a different database (${i.projectId}/${i.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}};function Pc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}var Cr=class extends gs{constructor(e){super(),this.firestore=e}convertBytes(e){return new me(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new H(this.firestore,null,n)}};function kc(t){let e=bs((t=Or(t,H)).firestore),n=new Cr(t.firestore);return mc(e,[t._key]).then(r=>{Z(r.length===1,15618);let i=r[0];return new on(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function Cc(t,e,n){let r=Pc((t=Or(t,H)).converter,e,n),i=Tc(bc(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return pc(bs(t.firestore),[i.toMutation(t._key,Er.none())])}function Dc(){return new ms("serverTimestamp")}var Oc="4.19.0";(function(){Ja(`${Re}_lite`),J(new O("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new mt(new sr(e.getProvider("auth-internal")),new ar(i,e.getProvider("app-check-internal")),Za(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),U("firestore-lite",Oc,""),U("firestore-lite",Oc,"esm2020")})();var xc="@firebase/installations",Rs="0.6.24";var Mc=1e4,Uc=`w:${Rs}`,Fc="FIS_v2",af="https://firebaseinstallations.googleapis.com/v1",cf=60*60*1e3,uf="installations",lf="Installations";var df={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ke=new Y(uf,lf,df);function jc(t){return t instanceof G&&t.code.includes("request-failed")}function qc({projectId:t}){return`${af}/projects/${t}/installations`}function Bc(t){return{token:t.token,requestStatus:2,expiresIn:ff(t.expiresIn),creationTime:Date.now()}}async function $c(t,e){let r=(await e.json()).error;return Ke.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hf(t,{refreshToken:e}){let n=Hc(t);return n.append("Authorization",pf(e)),n}async function Wc(t){let e=await t();return e.status>=500&&e.status<600?t():e}function ff(t){return Number(t.replace("s","000"))}function pf(t){return`${Fc} ${t}`}async function mf({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let r=qc(t),i=Hc(t),s=e.getImmediate({optional:!0});if(s){let h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}let o={fid:n,authVersion:Fc,appId:t.appId,sdkVersion:Uc},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Wc(()=>fetch(r,a));if(c.ok){let h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Bc(h.authToken)}}else throw await $c("Create Installation",c)}function Gc(t){return new Promise(e=>{setTimeout(e,t)})}function gf(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}var _f=/^[cdef][\w-]{21}$/,Ss="";function yf(){try{let t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;let n=If(t);return _f.test(n)?n:Ss}catch{return Ss}}function If(t){return gf(t).substr(0,22)}function At(t){return`${t.appName}!${t.appId}`}var vt=new Map;function zc(t,e){let n=At(t);Kc(n,e),bf(n,e)}function wf(t,e){Jc();let n=At(t),r=vt.get(n);r||(r=new Set,vt.set(n,r)),r.add(e)}function Ef(t,e){let n=At(t),r=vt.get(n);r&&(r.delete(e),r.size===0&&vt.delete(n),Yc())}function Kc(t,e){let n=vt.get(t);if(n)for(let r of n)r(e)}function bf(t,e){let n=Jc();n&&n.postMessage({key:t,fid:e}),Yc()}var ze=null;function Jc(){return!ze&&"BroadcastChannel"in self&&(ze=new BroadcastChannel("[Firebase] FID Change"),ze.onmessage=t=>{Kc(t.data.key,t.data.fid)}),ze}function Yc(){vt.size===0&&ze&&(ze.close(),ze=null)}var Tf="firebase-installations-database",vf=1,Je="firebase-installations-store",vs=null;function Ns(){return vs||(vs=Le(Tf,vf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Je)}}})),vs}async function xr(t,e){let n=At(t),i=(await Ns()).transaction(Je,"readwrite"),s=i.objectStore(Je),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&zc(t,e.fid),e}async function Qc(t){let e=At(t),r=(await Ns()).transaction(Je,"readwrite");await r.objectStore(Je).delete(e),await r.done}async function Mr(t,e){let n=At(t),i=(await Ns()).transaction(Je,"readwrite"),s=i.objectStore(Je),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&zc(t,a.fid),a}async function Ps(t){let e,n=await Mr(t.appConfig,r=>{let i=Af(r),s=Sf(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ss?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Af(t){let e=t||{fid:yf(),registrationStatus:0};return Xc(e)}function Sf(t,e){if(e.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(Ke.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Rf(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Nf(t)}:{installationEntry:e}}async function Rf(t,e){try{let n=await mf(t,e);return xr(t.appConfig,n)}catch(n){throw jc(n)&&n.customData.serverCode===409?await Qc(t.appConfig):await xr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Nf(t){let e=await Vc(t.appConfig);for(;e.registrationStatus===1;)await Gc(100),e=await Vc(t.appConfig);if(e.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=await Ps(t);return r||n}return e}function Vc(t){return Mr(t,e=>{if(!e)throw Ke.create("installation-not-found");return Xc(e)})}function Xc(t){return Pf(t)?{fid:t.fid,registrationStatus:0}:t}function Pf(t){return t.registrationStatus===1&&t.registrationTime+Mc<Date.now()}async function kf({appConfig:t,heartbeatServiceProvider:e},n){let r=Cf(t,n),i=hf(t,n),s=e.getImmediate({optional:!0});if(s){let h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}let o={installation:{sdkVersion:Uc,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Wc(()=>fetch(r,a));if(c.ok){let h=await c.json();return Bc(h)}else throw await $c("Generate Auth Token",c)}function Cf(t,{fid:e}){return`${qc(t)}/${e}/authTokens:generate`}async function ks(t,e=!1){let n,r=await Mr(t.appConfig,s=>{if(!Zc(s))throw Ke.create("not-registered");let o=s.authToken;if(!e&&Vf(o))return s;if(o.requestStatus===1)return n=Df(t,e),s;{if(!navigator.onLine)throw Ke.create("app-offline");let a=xf(s);return n=Of(t,a),a}});return n?await n:r.authToken}async function Df(t,e){let n=await Lc(t.appConfig);for(;n.authToken.requestStatus===1;)await Gc(100),n=await Lc(t.appConfig);let r=n.authToken;return r.requestStatus===0?ks(t,e):r}function Lc(t){return Mr(t,e=>{if(!Zc(e))throw Ke.create("not-registered");let n=e.authToken;return Mf(n)?{...e,authToken:{requestStatus:0}}:e})}async function Of(t,e){try{let n=await kf(t,e),r={...e,authToken:n};return await xr(t.appConfig,r),n}catch(n){if(jc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qc(t.appConfig);else{let r={...e,authToken:{requestStatus:0}};await xr(t.appConfig,r)}throw n}}function Zc(t){return t!==void 0&&t.registrationStatus===2}function Vf(t){return t.requestStatus===2&&!Lf(t)}function Lf(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cf}function xf(t){let e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Mf(t){return t.requestStatus===1&&t.requestTime+Mc<Date.now()}async function Uf(t){let e=t,{installationEntry:n,registrationPromise:r}=await Ps(e);return r?r.catch(console.error):ks(e).catch(console.error),n.fid}async function Ff(t,e=!1){let n=t;return await jf(n),(await ks(n,e)).token}async function jf(t){let{registrationPromise:e}=await Ps(t);e&&await e}function eu(t,e){let{appConfig:n}=t;return wf(n,e),()=>{Ef(n,e)}}function qf(t){if(!t||!t.options)throw As("App Configuration");if(!t.name)throw As("App Name");let e=["projectId","apiKey","appId"];for(let n of e)if(!t.options[n])throw As(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function As(t){return Ke.create("missing-app-config-values",{valueName:t})}var tu="installations",Bf="installations-internal",$f=t=>{let e=t.getProvider("app").getImmediate(),n=qf(e),r=ue(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hf=t=>{let e=t.getProvider("app").getImmediate(),n=ue(e,tu).getImmediate();return{getId:()=>Uf(n),getToken:i=>Ff(n,i)}};function Wf(){J(new O(tu,$f,"PUBLIC")),J(new O(Bf,Hf,"PRIVATE"))}Wf();U(xc,Rs);U(xc,Rs,"esm2020");var Gf="/firebase-messaging-sw.js",zf="/firebase-cloud-messaging-push-scope",pu="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Kf="https://fcmregistrations.googleapis.com/v1",mu="google.c.a.c_id",Jf="google.c.a.c_l",Yf="google.c.a.ts",Qf="google.c.a.e",nu=1e4,ru;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ru||(ru={}));var St;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked",t.FID_REGISTERED="fid-registered"})(St||(St={}));function ae(t){let e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gu(t){let e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}var Cs="fcm_token_details_db",Xf=5,iu="fcm_token_object_Store";async function Zf(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Cs))return null;let e=null;return(await Le(Cs,Xf,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(iu))return;let a=o.objectStore(iu),c=await a.index("fcmSenderId").get(t);if(await a.clear(),!!c){if(i===2){let h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ae(h.vapidKey)}}}else if(i===3){let h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ae(h.auth),p256dh:ae(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ae(h.vapidKey)}}}else if(i===4){let h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ae(h.auth),p256dh:ae(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ae(h.vapidKey)}}}}}})).close(),await Ct(Cs),await Ct("fcm_vapid_details_db"),await Ct("undefined"),ep(e)?e:null}function ep(t){if(!t||!t.subscriptionOptions)return!1;let{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}var tp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","fid-registration-failed":"A problem occurred while creating an FCM registration via FID: {$errorInfo}","fid-unregister-failed":"A problem occurred while unregistering the FCM registration via FID: {$errorInfo}","fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":"No onRegistered callback handler was provided or registered. Implement onRegistered() before register()."},A=new Y("messaging","Messaging",tp);var su="firebase-messaging-database",ou=2,ve="firebase-messaging-store",ce="firebase-messaging-fid-registration-store",np={openDB:Le,deleteDB:Ct},au=np,un=null;function rp(t,e,n){switch(e){case 0:if(t.createObjectStore(ve),n===1)break;case 1:n===2&&t.createObjectStore(ce)}}function cu(t){return{upgrade:(e,n)=>{rp(e,n,t)},blocked:()=>{},blocking:(e,n,r)=>{un=null,r.target?.close()},terminated:()=>{un=null}}}function Rt(){return un||(un=au.openDB(su,ou,cu(2)).catch(()=>au.openDB(su,ou-1,cu(1)))),un}function _u(t,e){return t.objectStoreNames.contains(e)}function Ls(t){if(!_u(t,ce))throw A.create("fid-registration-idb-schema-unavailable")}async function yu(t){let e=Nt(t),r=await(await Rt()).transaction(ve).objectStore(ve).get(e);if(r)return r;{let i=await Zf(t.appConfig.senderId);if(i)return await xs(t,i),i}}async function xs(t,e){let n=Nt(t),r=await Rt(),i=[ve],s=_u(r,ce);s&&i.push(ce);let o=r.transaction(i,"readwrite");return await o.objectStore(ve).put(e,n),s&&await o.objectStore(ce).delete(n),await o.done,e}async function ip(t){let e=Nt(t),r=(await Rt()).transaction(ve,"readwrite");await r.objectStore(ve).delete(e),await r.done}async function Ms(t){let e=Nt(t),n=await Rt();return Ls(n),await n.transaction(ce).objectStore(ce).get(e)}async function sp(t,e){let n=Nt(t),r=await Rt();Ls(r);let i=r.transaction([ve,ce],"readwrite");return await i.objectStore(ce).put(e,n),await i.objectStore(ve).delete(n),await i.done,e}async function op(t){let e=Nt(t),n=await Rt();Ls(n);let r=n.transaction(ce,"readwrite");await r.objectStore(ce).delete(e),await r.done}function Nt({appConfig:t}){return t.appId}var uu="@firebase/messaging",Os="0.13.3";var ap=3,cp=1e3;async function up(t,e){let n=await dn(t),r=Us(e,t.appConfig.appName,!1),i={method:"POST",headers:n,body:JSON.stringify(r)},s;try{s=await(await fetch(ln(t.appConfig),i)).json()}catch(o){throw A.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(s.error){let o=s.error.message;throw A.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw A.create("token-subscribe-no-token");return s.token}async function lp(t,e){let n=await dn(t),r=Us(e,t.appConfig.appName,!0),i={method:"POST",headers:n,body:JSON.stringify(r)},s;try{s=await mp(()=>fetch(ln(t.appConfig),i),ap,cp)}catch(c){throw A.create("fid-registration-failed",{errorInfo:c?.toString()})}if(s.ok)return{responseFid:await hp(s)};let o;try{o=await s.json()}catch{throw A.create("fid-registration-failed",{errorInfo:s.statusText})}let a=o.error?.message??s.statusText;throw A.create("fid-registration-failed",{errorInfo:a})}async function dp(t,e){let r={method:"DELETE",headers:await dn(t)},i;try{i=await fetch(`${ln(t.appConfig)}/${e}`,r)}catch(s){throw A.create("fid-unregister-failed",{errorInfo:s?.toString()})}if(!i.ok)try{throw(await i.json()).error?.message??i.statusText}catch(s){throw A.create("fid-unregister-failed",{errorInfo:typeof s=="string"&&s||i.statusText||s?.toString()})}}async function hp(t){let e=await t.text();if(!e.trim())throw A.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is empty"});let n;try{n=JSON.parse(e)}catch{throw A.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is not valid JSON"})}let r=n.name;if(typeof r!="string"||r.length===0)throw A.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response did not include a non-empty name"});return fp(r)}var lu="/registrations/";function fp(t){let e=t.indexOf(lu);if(e!==-1){let n=t.slice(e+lu.length);if(n.length>0)return n}throw A.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response name is not a valid registration resource name"})}async function pp(t,e){let n=await dn(t),r=Us(e.subscriptionOptions,t.appConfig.appName,!1),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s;try{s=await(await fetch(`${ln(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw A.create("token-update-failed",{errorInfo:o?.toString()})}if(s.error){let o=s.error.message;throw A.create("token-update-failed",{errorInfo:o})}if(!s.token)throw A.create("token-update-no-token");return s.token}async function Iu(t,e){let r={method:"DELETE",headers:await dn(t)};try{let s=await(await fetch(`${ln(t.appConfig)}/${e}`,r)).json();if(s.error){let o=s.error.message;throw A.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw A.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}async function mp(t,e,n){let r;for(let i=0;i<e;i++)try{return await t()}catch(s){if(r=s,i<e-1){let o=n*Math.pow(2,i);await new Promise(a=>setTimeout(a,o))}}throw r}function ln({projectId:t}){return`${Kf}/projects/${t}/registrations`}async function dn({appConfig:t,installations:e}){let n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gp(t,e){try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(t))return new URL(t).host}catch{}try{if(typeof self<"u"&&self.location?.href)return new URL(t,self.location.origin).host}catch{}return typeof self<"u"&&self.location?.host?self.location.host:e}function Us({p256dh:t,auth:e,endpoint:n,vapidKey:r,swScope:i},s,o){let a={web:{origin:gp(i,s),endpoint:n,auth:e,p256dh:t}};return o&&(a.fcm_sdk_version=Os),r!==pu&&(a.web.applicationPubKey=r),a}var _p=7*24*60*60*1e3;async function yp(t){let e=await Tp(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ae(e.getKey("auth")),p256dh:ae(e.getKey("p256dh"))},r=await yu(t.firebaseDependencies);if(r){if(vp(r.subscriptionOptions,n))return Date.now()>=r.createTime+_p?bp(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Iu(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return du(t.firebaseDependencies,n)}else return du(t.firebaseDependencies,n)}async function Ip(t,e){await Iu(t.firebaseDependencies,e.token),await ip(t.firebaseDependencies),await wu(t.firebaseDependencies)}async function wp(t){let n=(await Ms(t.firebaseDependencies).catch(()=>{}))?.fid;n&&await dp(t.firebaseDependencies,n),await wu(t.firebaseDependencies),n&&Sp(t,n)}async function Ep(t){let e=await yu(t.firebaseDependencies);e?await Ip(t,e):await wp(t);let n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function bp(t,e){try{let n=await pp(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await xs(t.firebaseDependencies,r),n}catch(n){throw n}}async function du(t,e){let r={token:await up(t,e),createTime:Date.now(),subscriptionOptions:e};return await xs(t,r),r.token}async function Tp(t,e){let n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gu(e)})}function vp(t,e){let n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}async function wu(t){try{await op(t)}catch{}}function Ap(t,e){let n=t.onRegisteredHandler;n&&(typeof n=="function"?n(e):n.next(e))}function Sp(t,e){let n=t.onUnregisteredHandler;n&&(typeof n=="function"?n(e):n.next(e))}async function Eu(t){try{t.swRegistration=await navigator.serviceWorker.register(Gf,{scope:zf}),t.swRegistration.update().catch(()=>{}),await Rp(t.swRegistration)}catch(e){throw A.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function Rp(t){return new Promise((e,n)=>{let r=setTimeout(()=>n(new Error(`Service worker not registered after ${nu} ms`)),nu),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{s.target?.state==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}async function bu(t,e){if(!e&&!t.swRegistration&&await Eu(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw A.create("invalid-sw-registration");t.swRegistration=e}}async function Tu(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=pu)}var hu=3;async function Np(t,e){let n=await Pp(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:n.endpoint,auth:ae(n.getKey("auth")),p256dh:ae(n.getKey("p256dh"))},i=t.firebaseDependencies.installations;for(let s=0;s<hu;s++){let{responseFid:o}=await lp(t.firebaseDependencies,r);if(o===e)return;s<hu-1&&await i.getToken(!0)}throw A.create("fid-registration-failed",{errorInfo:"CreateRegistration response FID does not match Firebase Installation ID"})}async function Pp(t,e){let n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gu(e)})}var kp=7*24*60*60*1e3;async function vu(t,e){if(!navigator)throw A.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw A.create("permission-blocked");if(!t.onRegisteredHandler)throw A.create("invalid-on-registered-handler");await Tu(t,e?.vapidKey),await bu(t,e?.serviceWorkerRegistration);let n=t._registerNotifyChain.catch(()=>{});return t._registerNotifyChain=n.then(async()=>{let r=await t.firebaseDependencies.installations.getId(),i=await Ms(t.firebaseDependencies),s=Date.now();if((!i||i.fid!==r||s>=i.lastRegisterTime+kp)&&(await Np(t,r),await sp(t.firebaseDependencies,{fid:r,lastRegisterTime:s,vapidKey:t.vapidKey})),!t.onRegisteredHandler)throw A.create("invalid-on-registered-handler");Ap(t,r)}),t._registerNotifyChain}function Cp(t,e){return eu(e,()=>{(async()=>!t.onRegisteredHandler||!await Ms(t.firebaseDependencies)||await vu(t).catch(()=>{}))()})}function fu(t){let e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Dp(e,t),Op(e,t),Vp(e,t),e}function Dp(t,e){if(!e.notification)return;t.notification={};let n=e.notification.title;n&&(t.notification.title=n);let r=e.notification.body;r&&(t.notification.body=r);let i=e.notification.image;i&&(t.notification.image=i);let s=e.notification.icon;s&&(t.notification.icon=s)}function Op(t,e){e.data&&(t.data=e.data)}function Vp(t,e){if(!e.fcmOptions&&!e.notification?.click_action)return;t.fcmOptions={};let n=e.fcmOptions?.link??e.notification?.click_action;n&&(t.fcmOptions.link=n);let r=e.fcmOptions?.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}function Lp(t){return typeof t=="object"&&!!t&&mu in t}function xp(t){if(!t||!t.options)throw Ds("App Configuration Object");if(!t.name)throw Ds("App Name");let e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(let r of e)if(!n[r])throw Ds(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ds(t){return A.create("missing-app-config-values",{valueName:t})}var Vs=class{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:"stopped"};let i=xp(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),this.logQueue.state==="scheduled"&&clearTimeout(this.logQueue.timerId),this.logQueue={state:"stopped"},Promise.resolve()}};async function Au(t,e){if(!navigator)throw A.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw A.create("permission-blocked");return await Tu(t,e?.vapidKey),await bu(t,e?.serviceWorkerRegistration),yp(t)}async function Mp(t,e,n){let r=Up(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[mu],message_name:n[Jf],message_time:n[Yf],message_device_time:Math.floor(Date.now()/1e3)})}function Up(t){switch(t){case St.NOTIFICATION_CLICKED:return"notification_open";case St.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}async function Fp(t,e){let n=e.data;if(!n.isFirebaseMessaging)return;if(t.onMessageHandler&&n.messageType===St.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(fu(n)):t.onMessageHandler.next(fu(n))),t.onRegisteredHandler&&n.messageType===St.FID_REGISTERED){let i=n.fid;typeof t.onRegisteredHandler=="function"?t.onRegisteredHandler(i):t.onRegisteredHandler.next(i)}let r=n.data;Lp(r)&&r[Qf]==="1"&&await Mp(t,n.messageType,r)}var jp=t=>{let e=new Vs(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Fp(e,n)),e._fidChangeUnsubscribe=Cp(e,t.getProvider("installations").getImmediate()),e},qp=t=>{let e=t.getProvider("messaging").getImmediate();return{getToken:r=>Au(e,r),register:r=>vu(e,r)}};function Bp(){J(new O("messaging",jp,"PUBLIC")),J(new O("messaging-internal",qp,"PRIVATE")),U(uu,Os),U(uu,Os,"esm2020")}async function Su(){try{await mn()}catch{return!1}return typeof window<"u"&&pn()&&Xs()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function $p(t){if(!navigator)throw A.create("only-available-in-window");return t.swRegistration||await Eu(t),Ep(t)}function Hp(t=xe()){return Su().then(e=>{if(!e)throw A.create("unsupported-browser")},e=>{throw A.create("indexed-db-unsupported")}),ue(N(t),"messaging").getImmediate()}async function Wp(t,e){return t=N(t),Au(t,e)}function Gp(t){return t=N(t),$p(t)}Bp();export{st as GoogleAuthProvider,da as createUserWithEmailAndPassword,Gp as deleteToken,wc as doc,Da as getAuth,kc as getDoc,yc as getFirestore,Hp as getMessaging,Na as getRedirectResult,Wp as getToken,fo as initializeApp,Su as isSupported,ga as onAuthStateChanged,la as sendPasswordResetEmail,Dc as serverTimestamp,Cc as setDoc,ha as signInWithEmailAndPassword,va as signInWithPopup,Ra as signInWithRedirect,_a as signOut,fa as updateProfile};
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-DYWDbVEA.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * Copyright 2021 M.Vokhmentsev
   *
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-Cl98i9kc.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
   * in compliance with the License. You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under the License
   * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
   * or implied. See the License for the specific language governing permissions and limitations under
   * the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
