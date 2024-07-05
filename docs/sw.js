(()=>{"use strict";const e=self,t=200,s=206,a="assets",r="Content-Security-Policy",n=["js","css","webmanifest","json","html"];const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",p="update_task",m="delete_task",y="clear_tasks",_="import_tasks";const h="tasks",w="kv-storage";async function b(e){if(e.icons&&e.icons.length>0){let t;const s=JSON.stringify(e),a=await caches.open(w),r=await a.match(h);void 0!==r&&(t=await r.text()),void 0!==r&&t===s||await a.put(h,new Response(s,{headers:new Headers({...c,"Content-Length":String(s.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function v(){return k}async function x(e){k=e,await b(e)}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"обычный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:2,icon_id:2,category_name:"Дом"},{category_id:1,icon_id:3,category_name:"Работа"}],tasks:[]};async function $(){let e=v();const t=await caches.open(w),s=await t.match(h);if(e.icons&&0===e.icons.length){if(void 0!==s){const t=await s.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x(j),j}return s||await b(e),e}async function q(){await async function(){const t=await caches.open(a);let s=(await t.keys()).map((e=>new URL(e.url).pathname));const r=s.filter((t=>!e.assets.includes(t)));r.length>0&&await Promise.all(r.map((async e=>{await t.delete(e),s=s.filter((t=>t!==e))})));const i=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!s.includes(e)}));i.length>0&&await t.addAll(i)}(),await $(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const A=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let I=A(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let N=(e=>A(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const R=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.75dffc3016cb55f7c27a.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.0ffe88187ccc7de69885.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.07e68c4e1a7f5c4cf69c.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/locked.4ca6e2c7ddf27e00ee5f.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.c11d2a4b5ff98236bae6.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.20f2ff7e44f1a4eec9f8.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.fb2caa95e6ce999bc26d.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.157b99dd74fd18f2a6ee.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/unlocked.737119d4563135ccd8c0.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.fb98497c14d81dd1b184bc4e5e495cdc.webmanifest","/my-tasks/offline.8056a99456a101a993816b36d7ef22e8.html"];function S(e){}function T(e,t,s){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:s}}),{headers:c,status:200})}function C(){return N.navigator.userAgent.toLowerCase().includes("chrome")||N.navigator.userAgent.toLowerCase().includes("chromium")}const L="/my-tasks/",E=e=>e.startsWith(`${L}offline.`)&&e.endsWith(".html"),U="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://budarinv.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-3Ipadu_RiLEiebGs8i3Hb5Bmg0xyTQTOtdKXYhYyhyddBD_b_6i8xlcltdnHQUvj' 'sha384-x5SSHHrxHRE0n_l6Ni5xd70Fs-b2vLG5VyA8CGm12UC19fr5gWXNlcotKiNu11I9' 'sha384-qhiCQCxmHF10Bu-Bsp353EnyvAU6niZdVK9PEIdtYiuj1gX6KP9AUNonWftU5u8j' 'sha384-h1AkrMQei9IuX7oKdArhPg836xN-F9QnA7Aq1FBoc3BFtA2DDG1nmGBaSRtAiT_r' 'sha384-03KeUgd-7JWHxfbXH--Q2eMDpIHLvG3jxsZ0XZ5nh9GMGUGl7jSvEiNyt1-yOOYl' 'sha384-eTrq2D8YCbGHkT-Zld5RuCXF5mvlkwgKVbG-1UZnEMZR3lXZm3WCum4N8H406T1Z'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function O(n,i,o){const c=await caches.open(a),d=await c.match(i);if(d){if(E(i)&&!d.headers.get(r)){const e=d.clone(),t=new Headers(d.headers);t.set(r,U);try{let s=await d.text();C()&&(s=s.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const a=new Response(s,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,a.clone()),a}catch(e){return d}}return d}return async function(n,i){let o;const c=await fetch(n,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===s){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;E(n)?(e=await c.text(),d.set(r,U),C()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(a)).put(n,o.clone());return o}(i,o)}function W(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const s=e.toString(16).padStart(12,"0"),a=function(e){let t="";for(let s=0;s<e.length;s++){const a=e[s].toString(16);t+=2===a.length?a:"0"+a}return t}(t);return`${s.substring(0,8)}-${s.substring(8)}-${a.substring(0,4)}-${a.substring(4,8)}-${a.substring(8)}`}function G(e,t=65536){return s=>{if("string"!=typeof s)return!1;const a=String(s).trim();return a.length>=e&&a.length<=t}}const H=(e,t,s,a)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${s} до ${a} символов`;function B(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const P=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function X(e){return t=>void 0===t||e(t)}function D(e){return"boolean"==typeof e}function J(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const K=(e,t,s,a)=>{const r={error:{message:`Сущность "${a}" должна быть объектом`,data:e}};if(void 0===e)return r;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return r;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const s=i[e],r=t[s];if(!0===r.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${a} отсутствует`,data:n}};for(let e=0;e<r.validators.length;e++){const t=r.validators[e];if(!1===t[0](n[s]))return{error:{message:t[1],data:n}}}}return{result:s(n)}},Q=e=>{e.currentTarget.setCustomValidity("")},V=(e,t,s)=>a=>{const r=a.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=r.value.replace(/\n/gm,"").trim();return r.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void r.setCustomValidity(n)):i&&(i.length<t||i.length>s)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${s} символов`,void r.setCustomValidity(n)):void r.setCustomValidity(n)};function Z(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}const M="Задача",F=100,Y="Название задачи";V(Y,3,F);function z(e){const{title:t,priority_id:s,category_id:a,description:r,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:Z(t.trim()),priority_id:Number(s),category_id:a?Number(a):void 0,description:r?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const ee={title:{validators:[[G(3,F),H(M,"title",3,F)]],required:!0},priority_id:{validators:[[B,P(M,"priority_id")]],required:!0},category_id:{validators:[[X(B),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(M,"category_id")]]},expire_date_time:{validators:[[X((function(e){return"string"==typeof e})),function(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}(M,"expire_date_time")],[X((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${M} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[X(D),J(M,"deleted")]]},completed:{validators:[[X(D),J(M,"completed")]]}},te=e=>K(e,ee,z,M);function se(e){const{task_id:t,title:s,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:Z(s.trim()),priority_id:Number(a),category_id:r?Number(r):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const ae={task_id:{validators:[[B,P(M,"task_id")]],required:!0},...ee},re=e=>K(e,ae,se,M);function ne(e,t,s=200){return new Response(JSON.stringify({id:e,result:t}),{headers:c,status:s})}class ie{constructor(e,t){this.type=e,this.data=t}}async function oe(t,s){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(s)}))}))}function ce(e,t){const s=te(t);if(!s.error){const a=s.result;if(!e.priorities.find((e=>e.priority_id===a.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(a.category_id){if(!e.categories.find((e=>e.category_id===a.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const r=e.tasks.at(-1)?.task_id||0,n={...a,task_id:r+1};return e.tasks.push(n),{result:n}}return s}function de(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((s=>a.includes(s)&&de(e[s],t[s])))}const ue="Категория",le="Название категории";V(le,3,20);function fe(e){const{icon_id:t,category_name:s}=e||{};return{icon_id:Number(t),category_name:Z(s.trim())}}const ge={icon_id:{validators:[[B,P(ue,"icon_id")]],required:!0},category_name:{validators:[[G(3,20),H(ue,"category_name",3,20)]],required:!0}},pe=e=>K(e,ge,fe,ue);function me(e){const{category_id:t,icon_id:s,category_name:a}=e||{};return{category_id:Number(t),icon_id:Number(s),category_name:Z(a.trim())}}const ye={category_id:{validators:[[B,P(ue,"category_id")]],required:!0},...ge},_e=e=>K(e,ye,me,ue);function he(e,t){const s=pe(t);if(s.result){const a=s.result,r=e.categories.find((e=>e.category_name===a.category_name));if(r)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===a.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,i={...a,category_id:n+1};return e.categories.push(i),{result:i}}return s}function we(e){const t=(s=e.tasks,"structuredClone"in globalThis?N.structuredClone(s):s);var s;return e.tasks=[],{result:t}}function be(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}async function ke(e){const{request:t}=e,s=(await t.json()).id||W();return new Response(JSON.stringify({id:s,result:"Ok"}),{headers:c,status:200})}const ve={[o]:async function(e){const{request:t}=e,s=await $(),a=t.headers.get("x-request-id");return new Response(JSON.stringify({id:a,result:s}),{headers:c,status:200})},[u]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=he(s,r);if(n.result){const t=n.result;return await x(s),await oe(e.clientId,new ie("create_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[l]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=function(e,t){const s=_e(t);if(s.result){const a=s.result;let r=e.categories.findIndex((e=>e.category_id===a.category_id));return-1===r?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===a.category_name&&e.category_id!==a.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===a.icon_id))?(r=e.categories.findIndex((e=>e.category_id===a.category_id)),e.categories[r]=a,{result:a}):{error:{message:"Не известный идентификатор иконки",data:t}}}return s}(s,r);if(n.result){const t=n.result;return x(s),await oe(e.clientId,new ie("update_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=function(e,t){const s=_e(t);if(s.result){const a=s.result,r=e.categories.findIndex((e=>de(e,a)));return-1===r?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===a.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(r,1),{result:a})}return s}(s,r);if(n.result){const t=n.result;return x(s),await oe(e.clientId,new ie("delete_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=ce(s,r);if(n.result){const t=n.result;return await x(s),await oe(e.clientId,new ie(g,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=function(e,t){const s=re(t);if(s.result){const a=s.result,r=e.tasks.findIndex((e=>e.task_id===a.task_id));return-1===r?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===a.priority_id))?a.category_id&&!e.categories.find((e=>e.category_id===a.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[r]=a,{result:a}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return s}(s,r);if(n.result){const t=n.result;return await x(s),await oe(e.clientId,new ie(p,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,s=v(),{id:a,params:r}=await t.json(),n=function(e,t){const s=re(t);if(s.result){const a=s.result,r=e.tasks.findIndex((e=>de(se(e),se(a))));return-1===r?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(r,1),{result:a})}return s}(s,r);if(n.result){const t=n.result;return await x(s),await oe(e.clientId,new ie(m,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,s=v(),{id:a}=await t.json(),r=we(s);if(r.result){const t=r.result;return await x(s),await oe(e.clientId,new ie(y)),ne(a,t)}return T(a,r.error.message,r.error.data)},[_]:async function(e){const{request:t}=e,s={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},a={categories:[]},{id:r,params:n}=await t.json();if(n){const t=v(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return T(r,"Не валидные данные");for(let e=0;e<i.length;e++){const r=i[e];let n;if(r.category_id){const e=o.find((e=>e.category_id===r.category_id));e&&(a.categories.includes(e.category_name)||(n=he(t,e),n.error?s.failed.categories.push(n.error):s.imported.categories.push(n.result),a.categories.push(e.category_name)))}t.tasks.find((e=>e.title===r.title&&e.description===r.description&&e.priority_id===r.priority_id&&e.category_id===r.category_id&&e.completed==r.completed&&e.deleted==r.deleted&&e.expire_date_time==r.expire_date_time))?s.failed.tasks.push({message:"Задача уже существует",data:r}):(n=ce(t,r),n.error?s.failed.tasks.push(n.error):s.imported.tasks.push(n.result))}(s.imported.categories.length>0||s.imported.tasks.length>0)&&x(t);const c=s.imported;return(c.categories.length>0||c.tasks.length>0)&&await oe(e.clientId,new ie(_,s.imported)),ne(r,s)}return T(r,"Не удалось импортировать задачи")},"/log/info":ke,"/log/warn":ke,"/log/error":ke};async function xe(e,t){const s=async function(e,t){return 0===v().icons.length&&await $(),(ve[t]||be)(e)}(e,t);return s}var je;je=globalThis,N=je,e.id=Date.now(),e.VERSION="1.22.27",e.assets=R,e.isRepearing=!1,e.logger=I,e.onerror=S,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const s=t.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(s.url);switch(s.method){case"GET":return await async function(t,s){if("document"!==t.request.destination||s!==L)e.assets.includes(s)&&t.respondWith(O(0,t.request.url,s));else{const s=e.assets.find((e=>e.startsWith(`${L}offline.`)&&e.endsWith(".html")))||"";t.respondWith(O(0,s,s))}}(t,r),void t.waitUntil(async function(){const t=await caches.open(a),s=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>!s.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(r)}finally{e.isRepearing=!1}}}());case"POST":{const{origin:e}=new URL(t.request.referrer);if(!t.request.url.startsWith(e))return;if(t.request.url.indexOf("/ai/")>0)return;return void t.respondWith(xe(t,r))}default:t.respondWith(T(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(a),s=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!s.includes(e)}));e.loadedAssets=r,r.length>0&&await t.addAll(r)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(q()),t.waitUntil(e.clients.claim())}))})();