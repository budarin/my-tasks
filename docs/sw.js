(()=>{"use strict";const e=self,t=200,r=206,s="assets",a="Content-Security-Policy",n=["js","css","webmanifest","json","html"];const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",p="update_task",m="delete_task",y="clear_tasks",_="import_tasks";const h="tasks",w="kv-storage";async function b(e){if(e.icons&&e.icons.length>0){let t;const r=JSON.stringify(e),s=await caches.open(w),a=await s.match(h);void 0!==a&&(t=await a.text()),void 0!==a&&t===r||await s.put(h,new Response(r,{headers:new Headers({...c,"Content-Length":String(r.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function v(){return k}async function x(e){k=e,await b(e)}const $={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"обычный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:2,icon_id:2,category_name:"Дом"},{category_id:1,icon_id:3,category_name:"Работа"}],tasks:[]};async function j(){let e=v();const t=await caches.open(w),r=await t.match(h);if(e.icons&&0===e.icons.length){if(void 0!==r){const t=await r.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x($),$}return r||await b(e),e}async function q(){await async function(){const t=await caches.open(s);let r=(await t.keys()).map((e=>new URL(e.url).pathname));const a=r.filter((t=>!e.assets.includes(t)));a.length>0&&await Promise.all(a.map((async e=>{await t.delete(e),r=r.filter((t=>t!==e))})));const i=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!r.includes(e)}));i.length>0&&await t.addAll(i)}(),await j(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const R=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let S=R(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let A=(e=>R(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const I=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.abf4a407cd758cef010d.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.0ffe88187ccc7de69885.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.07e68c4e1a7f5c4cf69c.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/locked.4ca6e2c7ddf27e00ee5f.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.541f879a27abeafce9e5.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.20f2ff7e44f1a4eec9f8.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.fb2caa95e6ce999bc26d.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.6eadf7bfb25fbeeafef8.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/unlocked.737119d4563135ccd8c0.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.fb98497c14d81dd1b184bc4e5e495cdc.webmanifest","/my-tasks/offline.c21d28deb8be83c623d6e2cd6c3783ea.html"];function N(e){}function C(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:c,status:200})}function L(){return A.navigator.userAgent.toLowerCase().includes("chrome")||A.navigator.userAgent.toLowerCase().includes("chromium")}const O="/my-tasks/",W=e=>e.startsWith(`${O}offline.`)&&e.endsWith(".html"),T="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://budarinv.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-lgLy00bpvVSfKhn3P8PPCyEhHXdULHreLfoRJ82CUlVpWkWK5CpG9o09GR2slRkP' 'sha384-x5SSHHrxHRE0n_l6Ni5xd70Fs-b2vLG5VyA8CGm12UC19fr5gWXNlcotKiNu11I9' 'sha384-SRxOHWVlaZ92n_vtti9Y7YbUTuOCk0W-U6x61JE7GsQ6e_s6fGGZVGWWgnFchcJO' 'sha384-h1AkrMQei9IuX7oKdArhPg836xN-F9QnA7Aq1FBoc3BFtA2DDG1nmGBaSRtAiT_r' 'sha384-03KeUgd-7JWHxfbXH--Q2eMDpIHLvG3jxsZ0XZ5nh9GMGUGl7jSvEiNyt1-yOOYl' 'sha384-bktPtCKup5o77wO8z31l69_rdBhHqOC7_gnhairYC3GTMZo0qeDH3RzYrpAgrQ3j'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function G(n,i,o){const c=await caches.open(s),d=await c.match(i);if(d){if(W(i)&&!d.headers.get(a)){const e=d.clone(),t=new Headers(d.headers);t.set(a,T);try{let r=await d.text();L()&&(r=r.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const s=new Response(r,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,s.clone()),s}catch(e){return d}}return d}return async function(n,i){let o;const c=await fetch(n,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;W(n)?(e=await c.text(),d.set(a,T),L()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(s)).put(n,o.clone());return o}(i,o)}function U(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),s=function(e){let t="";for(let r=0;r<e.length;r++){const s=e[r].toString(16);t+=2===s.length?s:"0"+s}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${s.substring(0,4)}-${s.substring(4,8)}-${s.substring(8)}`}function E(e,t=65536){return r=>{if("string"!=typeof r)return!1;const s=String(r).trim();return s.length>=e&&s.length<=t}}const P=(e,t,r,s)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${s} символов`;function H(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const J=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function V(e){return t=>void 0===t||e(t)}function B(e){return"boolean"==typeof e}function D(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const X=(e,t,r,s)=>{const a={error:{message:`Сущность "${s}" должна быть объектом`,data:e}};if(void 0===e)return a;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return a;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const r=i[e],a=t[r];if(!0===a.required&&void 0===n[r])return{error:{message:`Свойство "${r}" сущности ${s} отсутствует`,data:n}};for(let e=0;e<a.validators.length;e++){const t=a.validators[e];if(!1===t[0](n[r]))return{error:{message:t[1],data:n}}}}return{result:r(n)}},K=e=>{e.currentTarget.setCustomValidity("")},M=(e,t,r)=>s=>{const a=s.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=a.value.replace(/\n/gm,"").trim();return a.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void a.setCustomValidity(n)):i&&(i.length<t||i.length>r)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${r} символов`,void a.setCustomValidity(n)):void a.setCustomValidity(n)};function Q(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}const Z="Задача",Y=100,F="Название задачи";M(F,3,Y);function z(e){const{title:t,priority_id:r,category_id:s,description:a,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:Q(t.trim()),priority_id:Number(r),category_id:s?Number(s):void 0,description:a?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const ee={title:{validators:[[E(3,Y),P(Z,"title",3,Y)]],required:!0},priority_id:{validators:[[H,J(Z,"priority_id")]],required:!0},category_id:{validators:[[V(H),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(Z,"category_id")]]},expire_date_time:{validators:[[V((function(e){return"string"==typeof e})),function(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}(Z,"expire_date_time")],[V((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${Z} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[V(B),D(Z,"deleted")]]},completed:{validators:[[V(B),D(Z,"completed")]]}},te=e=>X(e,ee,z,Z);function re(e){const{task_id:t,title:r,priority_id:s,category_id:a,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:Q(r.trim()),priority_id:Number(s),category_id:a?Number(a):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const se={task_id:{validators:[[H,J(Z,"task_id")]],required:!0},...ee},ae=e=>X(e,se,re,Z);function ne(e,t,r=200){return new Response(JSON.stringify({id:e,result:t}),{headers:c,status:r})}class ie{constructor(e,t){this.type=e,this.data=t}}async function oe(t,r){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(r)}))}))}function ce(e,t){const r=te(t);if(!r.error){const s=r.result;if(!e.priorities.find((e=>e.priority_id===s.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(s.category_id){if(!e.categories.find((e=>e.category_id===s.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const a=e.tasks.at(-1)?.task_id||0,n={...s,task_id:a+1};return e.tasks.push(n),{result:n}}return r}function de(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),s=Object.keys(t);return r.length===s.length&&r.every((r=>s.includes(r)&&de(e[r],t[r])))}const ue="Категория",le="Название категории";M(le,3,20);function fe(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:Number(t),category_name:Q(r.trim())}}const ge={icon_id:{validators:[[H,J(ue,"icon_id")]],required:!0},category_name:{validators:[[E(3,20),P(ue,"category_name",3,20)]],required:!0}},pe=e=>X(e,ge,fe,ue);function me(e){const{category_id:t,icon_id:r,category_name:s}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:Q(s.trim())}}const ye={category_id:{validators:[[H,J(ue,"category_id")]],required:!0},...ge},_e=e=>X(e,ye,me,ue);function he(e,t){const r=pe(t);if(r.result){const s=r.result,a=e.categories.find((e=>e.category_name===s.category_name));if(a)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===s.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,i={...s,category_id:n+1};return e.categories.push(i),{result:i}}return r}function we(e){const t=(r=e.tasks,"structuredClone"in globalThis?A.structuredClone(r):r);var r;return e.tasks=[],{result:t}}function be(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}async function ke(e){const{request:t}=e,r=(await t.json()).id||U();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:c,status:200})}const ve={[o]:async function(e){const{request:t}=e,r=await j(),s=t.headers.get("x-request-id");return new Response(JSON.stringify({id:s,result:r}),{headers:c,status:200})},[u]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=he(r,a);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie("create_category",t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[l]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=function(e,t){const r=_e(t);if(r.result){const s=r.result;let a=e.categories.findIndex((e=>e.category_id===s.category_id));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===s.category_name&&e.category_id!==s.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===s.icon_id))?(a=e.categories.findIndex((e=>e.category_id===s.category_id)),e.categories[a]=s,{result:s}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(r,a);if(n.result){const t=n.result;return x(r),await oe(e.clientId,new ie("update_category",t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=function(e,t){const r=_e(t);if(r.result){const s=r.result,a=e.categories.findIndex((e=>de(e,s)));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===s.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(a,1),{result:s})}return r}(r,a);if(n.result){const t=n.result;return x(r),await oe(e.clientId,new ie("delete_category",t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=ce(r,a);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(g,t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=function(e,t){const r=ae(t);if(r.result){const s=r.result,a=e.tasks.findIndex((e=>e.task_id===s.task_id));return-1===a?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===s.priority_id))?s.category_id&&!e.categories.find((e=>e.category_id===s.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[a]=s,{result:s}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(r,a);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(p,t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,r=v(),{id:s,params:a}=await t.json(),n=function(e,t){const r=ae(t);if(r.result){const s=r.result,a=e.tasks.findIndex((e=>de(re(e),re(s))));return-1===a?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(a,1),{result:s})}return r}(r,a);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(m,t)),ne(s,t)}return C(s,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,r=v(),{id:s}=await t.json(),a=we(r);if(a.result){const t=a.result;return await x(r),await oe(e.clientId,new ie(y)),ne(s,t)}return C(s,a.error.message,a.error.data)},[_]:async function(e){const{request:t}=e,r={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},s={categories:[]},{id:a,params:n}=await t.json();if(n){const t=v(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return C(a,"Не валидные данные");for(let e=0;e<i.length;e++){const a=i[e];let n;if(a.category_id){const e=o.find((e=>e.category_id===a.category_id));e&&(s.categories.includes(e.category_name)||(n=he(t,e),n.error?r.failed.categories.push(n.error):r.imported.categories.push(n.result),s.categories.push(e.category_name)))}t.tasks.find((e=>e.title===a.title&&e.description===a.description&&e.priority_id===a.priority_id&&e.category_id===a.category_id&&e.completed==a.completed&&e.deleted==a.deleted&&e.expire_date_time==a.expire_date_time))?r.failed.tasks.push({message:"Задача уже существует",data:a}):(n=ce(t,a),n.error?r.failed.tasks.push(n.error):r.imported.tasks.push(n.result))}(r.imported.categories.length>0||r.imported.tasks.length>0)&&x(t);const c=r.imported;return(c.categories.length>0||c.tasks.length>0)&&await oe(e.clientId,new ie(_,r.imported)),ne(a,r)}return C(a,"Не удалось импортировать задачи")},"/log/info":ke,"/log/warn":ke,"/log/error":ke};async function xe(e,t){const r=async function(e,t){return 0===v().icons.length&&await j(),(ve[t]||be)(e)}(e,t);return r}var $e;$e=globalThis,A=$e,e.id=Date.now(),e.VERSION="1.22.26",e.assets=I,e.isRepearing=!1,e.logger=S,e.onerror=N,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const r=t.request,a=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(r.url);switch(r.method){case"GET":return await async function(t,r){if("document"!==t.request.destination||r!==O)e.assets.includes(r)&&t.respondWith(G(0,t.request.url,r));else{const r=e.assets.find((e=>e.startsWith(`${O}offline.`)&&e.endsWith(".html")))||"";t.respondWith(G(0,r,r))}}(t,a),void t.waitUntil(async function(){const t=await caches.open(s),r=(await t.keys()).map((e=>new URL(e.url).pathname)),a=e.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(a.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(a)}finally{e.isRepearing=!1}}}());case"POST":{const{origin:e}=new URL(t.request.referrer);if(!t.request.url.startsWith(e))return;if(t.request.url.indexOf("/ai/")>0)return;return void t.respondWith(xe(t,a))}default:t.respondWith(C(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(s),r=(await t.keys()).map((e=>new URL(e.url).pathname)),a=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!r.includes(e)}));e.loadedAssets=a,a.length>0&&await t.addAll(a)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(q()),t.waitUntil(e.clients.claim())}))})();