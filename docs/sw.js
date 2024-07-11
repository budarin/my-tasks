(()=>{"use strict";const e=self,t=200,r=206,a="assets",s="Content-Security-Policy",n=["js","css","webmanifest","json","html"];const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",p="update_task",m="delete_task",y="clear_tasks",_="import_tasks";const h="tasks",w="kv-storage";async function k(e){if(e.icons&&e.icons.length>0){let t;const r=JSON.stringify(e),a=await caches.open(w),s=await a.match(h);void 0!==s&&(t=await s.text()),void 0!==s&&t===r||await a.put(h,new Response(r,{headers:new Headers({...c,"Content-Length":String(r.length)})}))}}let b={tasks:[],categories:[],priorities:[],icons:[]};function v(){return b}async function x(e){b=e,await k(e)}const q={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"обычный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:2,icon_id:2,category_name:"Дом"},{category_id:1,icon_id:3,category_name:"Работа"}],tasks:[]};async function $(){let e=v();const t=await caches.open(w),r=await t.match(h);if(e.icons&&0===e.icons.length){if(void 0!==r){const t=await r.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x(q),q}return r||await k(e),e}async function j(){await async function(){const t=await caches.open(a);let r=(await t.keys()).map((e=>new URL(e.url).pathname));const s=r.filter((t=>!e.assets.includes(t)));s.length>0&&await Promise.all(s.map((async e=>{await t.delete(e),r=r.filter((t=>t!==e))})));const i=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!r.includes(e)}));i.length>0&&await t.addAll(i)}(),await $(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const I=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let N=I(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let R=(e=>I(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const S=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.355ceda72d80a1849f5e.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.07e68c4e1a7f5c4cf69c.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/locked.4ca6e2c7ddf27e00ee5f.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.cb7290c94ec0e4d1ccc2.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.d81051982826595114aa.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.4522e108c626ed111f07.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/unlocked.737119d4563135ccd8c0.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.d1c187eb2420adf8e31782026282a33b.webmanifest","/my-tasks/offline.8e1d63a8a2b5539ce2ade210f0009607.html"];function O(e){}function T(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:c,status:200})}function L(){return R.navigator.userAgent.toLowerCase().includes("chrome")||R.navigator.userAgent.toLowerCase().includes("chromium")}const A="/my-tasks/",E=e=>e.startsWith(`${A}offline.`)&&e.endsWith(".html"),C="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://budarinv.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-i4-8kO6QCoUm26IrQJyL6kbNks67_8rrnUh40ZqruFkX5ELrD0YOhjK5IoQ8PEp6' 'sha384-El-VUQMDWcMUTozokQpFUqYWgcwKQIQSTlnj9N1gN_ZDk8_QOFMJt3uua7eH_5OC' 'sha384-y-YOaMkIbv4h08oIc56-V07gl_zjB5NYrEi9EM5apl8tIv5c3Hqf-OneIKjqZMke' 'sha384-xVhJpYkKWld4TJYk7qwUta5usjwBeafrfRt89BK5_bBTN92NfPMXcoFpeHCSNdsg'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function U(n,i,o){const c=await caches.open(a),d=await c.match(i);if(d){if(E(i)&&!d.headers.get(s)){const e=d.clone(),t=new Headers(d.headers);t.set(s,C);try{let r=await d.text();L()&&(r=r.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const a=new Response(r,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,a.clone()),a}catch(e){return d}}return d}return async function(n,i){let o;const c=await fetch(n,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;E(n)?(e=await c.text(),d.set(s,C),L()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(a)).put(n,o.clone());return o}(i,o)}function W(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),a=function(e){let t="";for(let r=0;r<e.length;r++){const a=e[r].toString(16);t+=2===a.length?a:"0"+a}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${a.substring(0,4)}-${a.substring(4,8)}-${a.substring(8)}`}function J(e,t=65536){return r=>{if("string"!=typeof r)return!1;const a=String(r).trim();return a.length>=e&&a.length<=t}}const M=(e,t,r,a)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${a} символов`;function P(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const Q=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function B(e){return t=>void 0===t||e(t)}function V(e){return"boolean"==typeof e}function D(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const K=(e,t,r,a)=>{const s={error:{message:`Сущность "${a}" должна быть объектом`,data:e}};if(void 0===e)return s;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return s;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const r=i[e],s=t[r];if(!0===s.required&&void 0===n[r])return{error:{message:`Свойство "${r}" сущности ${a} отсутствует`,data:n}};for(let e=0;e<s.validators.length;e++){const t=s.validators[e];if(!1===t[0](n[r]))return{error:{message:t[1],data:n}}}}return{result:r(n)}},H=e=>{e.currentTarget.setCustomValidity("")},X=(e,t,r)=>a=>{const s=a.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=s.value.replace(/\n/gm,"").trim();return s.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void s.setCustomValidity(n)):i&&(i.length<t||i.length>r)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${r} символов`,void s.setCustomValidity(n)):void s.setCustomValidity(n)};function Y(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}const Z="Задача",z=100,F="Название задачи";X(F,3,z);function G(e){const{title:t,priority_id:r,category_id:a,description:s,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:Y(t.trim()),priority_id:Number(r),category_id:a?Number(a):void 0,description:s?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const ee={title:{validators:[[J(3,z),M(Z,"title",3,z)]],required:!0},priority_id:{validators:[[P,Q(Z,"priority_id")]],required:!0},category_id:{validators:[[B(P),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(Z,"category_id")]]},expire_date_time:{validators:[[B((function(e){return"string"==typeof e})),function(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}(Z,"expire_date_time")],[B((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${Z} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[B(V),D(Z,"deleted")]]},completed:{validators:[[B(V),D(Z,"completed")]]}},te=e=>K(e,ee,G,Z);function re(e){const{task_id:t,title:r,priority_id:a,category_id:s,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:Y(r.trim()),priority_id:Number(a),category_id:s?Number(s):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const ae={task_id:{validators:[[P,Q(Z,"task_id")]],required:!0},...ee},se=e=>K(e,ae,re,Z);function ne(e,t,r=200){return new Response(JSON.stringify({id:e,result:t}),{headers:c,status:r})}class ie{constructor(e,t){this.type=e,this.data=t}}async function oe(t,r){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(r)}))}))}function ce(e,t){const r=te(t);if(!r.error){const a=r.result;if(!e.priorities.find((e=>e.priority_id===a.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(a.category_id){if(!e.categories.find((e=>e.category_id===a.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const s=e.tasks.at(-1)?.task_id||0,n={...a,task_id:s+1};return e.tasks.push(n),{result:n}}return r}function de(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&r.every((r=>a.includes(r)&&de(e[r],t[r])))}const ue="Категория",le="Название категории";X(le,3,20);function fe(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:Number(t),category_name:Y(r.trim())}}const ge={icon_id:{validators:[[P,Q(ue,"icon_id")]],required:!0},category_name:{validators:[[J(3,20),M(ue,"category_name",3,20)]],required:!0}},pe=e=>K(e,ge,fe,ue);function me(e){const{category_id:t,icon_id:r,category_name:a}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:Y(a.trim())}}const ye={category_id:{validators:[[P,Q(ue,"category_id")]],required:!0},...ge},_e=e=>K(e,ye,me,ue);function he(e,t){const r=pe(t);if(r.result){const a=r.result,s=e.categories.find((e=>e.category_name===a.category_name));if(s)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===a.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,i={...a,category_id:n+1};return e.categories.push(i),{result:i}}return r}function we(e){const t=(r=e.tasks,"structuredClone"in globalThis?R.structuredClone(r):r);var r;return e.tasks=[],{result:t}}function ke(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}async function be(e){const{request:t}=e,r=(await t.json()).id||W();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:c,status:200})}const ve={[o]:async function(e){const{request:t}=e,r=await $(),a=t.headers.get("x-request-id");return new Response(JSON.stringify({id:a,result:r}),{headers:c,status:200})},[u]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=he(r,s);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie("create_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[l]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=function(e,t){const r=_e(t);if(r.result){const a=r.result;let s=e.categories.findIndex((e=>e.category_id===a.category_id));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===a.category_name&&e.category_id!==a.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===a.icon_id))?(s=e.categories.findIndex((e=>e.category_id===a.category_id)),e.categories[s]=a,{result:a}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(r,s);if(n.result){const t=n.result;return x(r),await oe(e.clientId,new ie("update_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=function(e,t){const r=_e(t);if(r.result){const a=r.result,s=e.categories.findIndex((e=>de(e,a)));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===a.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return x(r),await oe(e.clientId,new ie("delete_category",t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=ce(r,s);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(g,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=function(e,t){const r=se(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>e.task_id===a.task_id));return-1===s?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===a.priority_id))?a.category_id&&!e.categories.find((e=>e.category_id===a.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[s]=a,{result:a}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(r,s);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(p,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,r=v(),{id:a,params:s}=await t.json(),n=function(e,t){const r=se(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>de(re(e),re(a))));return-1===s?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return await x(r),await oe(e.clientId,new ie(m,t)),ne(a,t)}return T(a,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,r=v(),{id:a}=await t.json(),s=we(r);if(s.result){const t=s.result;return await x(r),await oe(e.clientId,new ie(y)),ne(a,t)}return T(a,s.error.message,s.error.data)},[_]:async function(e){const{request:t}=e,r={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},a={categories:[]},{id:s,params:n}=await t.json();if(n){const t=v(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return T(s,"Не валидные данные");for(let e=0;e<i.length;e++){const s=i[e];let n;if(s.category_id){const e=o.find((e=>e.category_id===s.category_id));e&&(a.categories.includes(e.category_name)||(n=he(t,e),n.error?r.failed.categories.push(n.error):r.imported.categories.push(n.result),a.categories.push(e.category_name)))}t.tasks.find((e=>e.title===s.title&&e.description===s.description&&e.priority_id===s.priority_id&&e.category_id===s.category_id&&e.completed==s.completed&&e.deleted==s.deleted&&e.expire_date_time==s.expire_date_time))?r.failed.tasks.push({message:"Задача уже существует",data:s}):(n=ce(t,s),n.error?r.failed.tasks.push(n.error):r.imported.tasks.push(n.result))}(r.imported.categories.length>0||r.imported.tasks.length>0)&&x(t);const c=r.imported;return(c.categories.length>0||c.tasks.length>0)&&await oe(e.clientId,new ie(_,r.imported)),ne(s,r)}return T(s,"Не удалось импортировать задачи")},"/log/info":be,"/log/warn":be,"/log/error":be};async function xe(e,t){const r=async function(e,t){return 0===v().icons.length&&await $(),(ve[t]||ke)(e)}(e,t);return r}var qe;qe=globalThis,R=qe,e.id=Date.now(),e.VERSION="1.22.45",e.assets=S,e.isRepearing=!1,e.logger=N,e.onerror=O,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const r=t.request,s=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(r.url);switch(r.method){case"GET":return await async function(t,r){if("document"!==t.request.destination||r!==A)e.assets.includes(r)&&t.respondWith(U(0,t.request.url,r));else{const r=e.assets.find((e=>e.startsWith(`${A}offline.`)&&e.endsWith(".html")))||"";t.respondWith(U(0,r,r))}}(t,s),void t.waitUntil(async function(){const t=await caches.open(a),r=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(s.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(s)}finally{e.isRepearing=!1}}}());case"POST":{const{origin:e}=new URL(t.request.referrer);if(!t.request.url.startsWith(e))return;if(t.request.url.indexOf("/ai/")>0)return;return void t.respondWith(xe(t,s))}default:t.respondWith(T(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(a),r=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!r.includes(e)}));e.loadedAssets=s,s.length>0&&await t.addAll(s)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(j()),t.waitUntil(e.clients.claim())}))})();