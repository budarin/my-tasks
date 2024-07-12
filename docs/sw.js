(()=>{"use strict";const e=self,t=200,s=206,r="assets",a="Content-Security-Policy",n=["js","css","webmanifest","json","html"];const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",m="update_task",p="delete_task",y="clear_tasks",_="import_tasks";const h="tasks",w="kv-storage";async function b(e){if(e.icons&&e.icons.length>0){let t;const s=JSON.stringify(e),r=await caches.open(w),a=await r.match(h);void 0!==a&&(t=await a.text()),void 0!==a&&t===s||await r.put(h,new Response(s,{headers:new Headers({...c,"Content-Length":String(s.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function v(){return k}async function x(e){k=e,await b(e)}const q={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"обычный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:2,icon_id:2,category_name:"Дом"},{category_id:1,icon_id:3,category_name:"Работа"}],tasks:[]};async function j(){let e=v();const t=await caches.open(w),s=await t.match(h);if(e.icons&&0===e.icons.length){if(void 0!==s){const t=await s.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x(q),q}return s||await b(e),e}async function $(){await async function(){const t=await caches.open(r);let s=(await t.keys()).map((e=>new URL(e.url).pathname));const a=s.filter((t=>!e.assets.includes(t)));a.length>0&&await Promise.all(a.map((async e=>{await t.delete(e),s=s.filter((t=>t!==e))})));const i=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!s.includes(e)}));i.length>0&&await t.addAll(i)}(),await j(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const I=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let R=I(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let S=(e=>I(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const A=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.31242c728d739ee29b26.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.07e68c4e1a7f5c4cf69c.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/locked.4ca6e2c7ddf27e00ee5f.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.2d3a3b0a74d67d9bc666.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.e905b72fafe5572f066d.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.fae01862f67ac68b5916.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/unlocked.737119d4563135ccd8c0.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.d1c187eb2420adf8e31782026282a33b.webmanifest","/my-tasks/offline.e10506335948e4429398e98414519471.html"];function N(e){}function L(e,t,s){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:s}}),{headers:c,status:200})}function T(){return S.navigator.userAgent.toLowerCase().includes("chrome")||S.navigator.userAgent.toLowerCase().includes("chromium")}const P=e=>e.startsWith("my-tasksoffline.")&&e.endsWith(".html"),C="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://budarinv.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-kA4p8zLD7q84mt6eTQbMlsQSZe6Kz9EgJMkdV-w0S2ak223lPD3j6HP84dPwgc-J' 'sha384-IF_sD6CcGAKwtK88XTJrfY6CkCUmE0PcX6QewOX8WVb_rjGslRzjFNhAPKBiAxBr' 'sha384-hJ76qmbqTJlpv342Lhulawz-cPzFdnQm18RhihAQxIncQm4PryhuzV5dnLDQqtt3' 'sha384-WVvH4Gs3jEqd8mgeggSpYmhdXmlgefs_PipQOucFs85m3-eylxj5E2-zezPcKv4b'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function E(n,i,o){const c=await caches.open(r),d=await c.match(i);if(d){if(P(i)&&!d.headers.get(a)){const e=d.clone(),t=new Headers(d.headers);t.set(a,C);try{let s=await d.text();T()&&(s=s.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(s,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,r.clone()),r}catch(e){return d}}return d}return async function(n,i){let o;const c=await fetch(n,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===s){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;P(n)?(e=await c.text(),d.set(a,C),T()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(r)).put(n,o.clone());return o}(i,o)}function O(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const s=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let s=0;s<e.length;s++){const r=e[s].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${s.substring(0,8)}-${s.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function W(e,t=65536){return s=>{if("string"!=typeof s)return!1;const r=String(s).trim();return r.length>=e&&r.length<=t}}const J=(e,t,s,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${s} до ${r} символов`;function U(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const Q=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function V(e){return t=>void 0===t||e(t)}function z(e){return"boolean"==typeof e}function D(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const X=(e,t,s,r)=>{const a={error:{message:`Сущность "${r}" должна быть объектом`,data:e}};if(void 0===e)return a;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return a;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const s=i[e],a=t[s];if(!0===a.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${r} отсутствует`,data:n}};for(let e=0;e<a.validators.length;e++){const t=a.validators[e];if(!1===t[0](n[s]))return{error:{message:t[1],data:n}}}}return{result:s(n)}},B=e=>{e.currentTarget.setCustomValidity("")},K=(e,t,s)=>r=>{const a=r.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=a.value.replace(/\n/gm,"").trim();return a.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void a.setCustomValidity(n)):i&&(i.length<t||i.length>s)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${s} символов`,void a.setCustomValidity(n)):void a.setCustomValidity(n)};function G(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}const M="Задача",H=100,F="Название задачи";K(F,3,H);function Y(e){const{title:t,priority_id:s,category_id:r,description:a,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:G(t.trim()),priority_id:Number(s),category_id:r?Number(r):void 0,description:a?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const Z={title:{validators:[[W(3,H),J(M,"title",3,H)]],required:!0},priority_id:{validators:[[U,Q(M,"priority_id")]],required:!0},category_id:{validators:[[V(U),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(M,"category_id")]]},expire_date_time:{validators:[[V((function(e){return"string"==typeof e})),function(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}(M,"expire_date_time")],[V((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${M} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[V(z),D(M,"deleted")]]},completed:{validators:[[V(z),D(M,"completed")]]}},ee=e=>X(e,Z,Y,M);function te(e){const{task_id:t,title:s,priority_id:r,category_id:a,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:G(s.trim()),priority_id:Number(r),category_id:a?Number(a):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const se={task_id:{validators:[[U,Q(M,"task_id")]],required:!0},...Z},re=e=>X(e,se,te,M);function ae(e,t,s=200){return new Response(JSON.stringify({id:e,result:t}),{headers:c,status:s})}class ne{constructor(e,t){this.type=e,this.data=t}}async function ie(t,s){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(s)}))}))}function oe(e,t){const s=ee(t);if(!s.error){const r=s.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(r.category_id){if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const a=e.tasks.reduce(((e,t)=>t?.task_id||0>e?t.task_id:e),e.tasks[0]?.task_id||0)||0,n={...r,task_id:a+1};return e.tasks.push(n),{result:n}}return s}function ce(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const s=Object.keys(e),r=Object.keys(t);return s.length===r.length&&s.every((s=>r.includes(s)&&ce(e[s],t[s])))}const de="Категория",ue="Название категории";K(ue,3,20);function le(e){const{icon_id:t,category_name:s}=e||{};return{icon_id:Number(t),category_name:G(s.trim())}}const fe={icon_id:{validators:[[U,Q(de,"icon_id")]],required:!0},category_name:{validators:[[W(3,20),J(de,"category_name",3,20)]],required:!0}},ge=e=>X(e,fe,le,de);function me(e){const{category_id:t,icon_id:s,category_name:r}=e||{};return{category_id:Number(t),icon_id:Number(s),category_name:G(r.trim())}}const pe={category_id:{validators:[[U,Q(de,"category_id")]],required:!0},...fe},ye=e=>X(e,pe,me,de);function _e(e,t){const s=ge(t);if(s.result){const r=s.result,a=e.categories.find((e=>e.category_name===r.category_name));if(a)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.reduce(((e,t)=>(console.log({max:e,item:t}),(t.category_id||0)>e?t.category_id:e)),e.categories[0]?.category_id||0)||0,i={...r,category_id:n+1};return e.categories.push(i),{result:i}}return s}function he(e){const t=(s=e.tasks,"structuredClone"in globalThis?S.structuredClone(s):s);var s;return e.tasks=[],{result:t}}function we(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}async function be(e){const{request:t}=e,s=(await t.json()).id||O();return new Response(JSON.stringify({id:s,result:"Ok"}),{headers:c,status:200})}const ke={[o]:async function(e){const{request:t}=e,s=await j(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:s}),{headers:c,status:200})},[u]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=_e(s,a);if(n.result){const t=n.result;return await x(s),await ie(e.clientId,new ne("create_category",t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[l]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=function(e,t){const s=ye(t);if(s.result){const r=s.result;let a=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(a=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[a]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return s}(s,a);if(n.result){const t=n.result;return x(s),await ie(e.clientId,new ne("update_category",t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=function(e,t){const s=ye(t);if(s.result){const r=s.result,a=e.categories.findIndex((e=>ce(e,r)));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(a,1),{result:r})}return s}(s,a);if(n.result){const t=n.result;return x(s),await ie(e.clientId,new ne("delete_category",t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=oe(s,a);if(n.result){const t=n.result;return await x(s),await ie(e.clientId,new ne(g,t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=function(e,t){const s=re(t);if(s.result){const r=s.result,a=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===a?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?r.category_id&&!e.categories.find((e=>e.category_id===r.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[a]=r,{result:r}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return s}(s,a);if(n.result){const t=n.result;return await x(s),await ie(e.clientId,new ne(m,t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,s=v(),{id:r,params:a}=await t.json(),n=function(e,t){const s=re(t);if(s.result){const r=s.result,a=e.tasks.findIndex((e=>ce(te(e),te(r))));return-1===a?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(a,1),{result:r})}return s}(s,a);if(n.result){const t=n.result;return await x(s),await ie(e.clientId,new ne(p,t)),ae(r,t)}return L(r,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,s=v(),{id:r}=await t.json(),a=he(s);if(a.result){const t=a.result;return await x(s),await ie(e.clientId,new ne(y)),ae(r,t)}return L(r,a.error.message,a.error.data)},[_]:async function(e){const{request:t}=e,s={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},r={categories:[]},{id:a,params:n}=await t.json();if(n){const t=v(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return L(a,"Не валидные данные");for(let e=0;e<i.length;e++){const a=i[e];let n;if(a.category_id){const e=o.find((e=>e.category_id===a.category_id));e&&(r.categories.includes(e.category_name)||(n=_e(t,e),n.error?s.failed.categories.push(n.error):s.imported.categories.push(n.result),r.categories.push(e.category_name)))}t.tasks.find((e=>e.title===a.title&&e.description===a.description&&e.priority_id===a.priority_id&&e.category_id===a.category_id&&e.completed==a.completed&&e.deleted==a.deleted&&e.expire_date_time==a.expire_date_time))?s.failed.tasks.push({message:"Задача уже существует",data:a}):(n=oe(t,a),n.error?s.failed.tasks.push(n.error):s.imported.tasks.push(n.result))}(s.imported.categories.length>0||s.imported.tasks.length>0)&&x(t);const c=s.imported;return(c.categories.length>0||c.tasks.length>0)&&await ie(e.clientId,new ne(_,s.imported)),ae(a,s)}return L(a,"Не удалось импортировать задачи")},"/log/info":be,"/log/warn":be,"/log/error":be};async function ve(e,t){const s=async function(e,t){return 0===v().icons.length&&await j(),(ke[t]||we)(e)}(e,t);return s}var xe;xe=globalThis,S=xe,e.id=Date.now(),e.VERSION="1.22.48",e.assets=A,e.isRepearing=!1,e.logger=R,e.onerror=N,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const s=t.request,a=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(s.url);switch(s.method){case"GET":return await async function(t,s){if("document"!==t.request.destination||"my-tasks"!==s)e.assets.includes(s)&&t.respondWith(E(0,t.request.url,s));else{const s=e.assets.find((e=>e.startsWith("my-tasksoffline.")&&e.endsWith(".html")))||"";t.respondWith(E(0,s,s))}}(t,a),void t.waitUntil(async function(){const t=await caches.open(r),s=(await t.keys()).map((e=>new URL(e.url).pathname)),a=e.assets.filter((e=>!s.includes(e)&&!e.startsWith("/offline.")));if(a.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(a)}finally{e.isRepearing=!1}}}());case"POST":{const{origin:e}=new URL(t.request.referrer);if(!t.request.url.startsWith(e))return;if(t.request.url.indexOf("/ai/")>0)return;return void t.respondWith(ve(t,a))}default:t.respondWith(L(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(r),s=(await t.keys()).map((e=>new URL(e.url).pathname)),a=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!s.includes(e)}));e.loadedAssets=a,a.length>0&&await t.addAll(a)}())})),e.addEventListener("activate",(async function(t){t.waitUntil($()),t.waitUntil(e.clients.claim())}))})();