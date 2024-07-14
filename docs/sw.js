(()=>{"use strict";const e=self,t=200,a=206,r="assets",s="Content-Security-Policy",n=["js","css","webmanifest","json","html"];const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",p="update_task",m="delete_task",y="clear_tasks",_="import_tasks";const h="tasks",w="kv-storage";async function b(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),r=await caches.open(w),s=await r.match(h);void 0!==s&&(t=await s.text()),void 0!==s&&t===a||await r.put(h,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function v(){return k}async function x(e){k=e,await b(e)}const $={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"обычный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:2,icon_id:2,category_name:"Дом"},{category_id:1,icon_id:3,category_name:"Работа"}],tasks:[]};async function j(){let e=v();const t=await caches.open(w),a=await t.match(h);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x($),$}return a||await b(e),e}async function q(){await async function(){const t=await caches.open(r);let a=(await t.keys()).map((e=>new URL(e.url).pathname));const s=a.filter((t=>!e.assets.includes(t)));s.length>0&&await Promise.all(s.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const i=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!a.includes(e)}));i.length>0&&await t.addAll(i)}(),await j(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const R=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let S=R(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let I=(e=>R(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const N=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.b9ff38c53b4a4a9d51a3.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.07e68c4e1a7f5c4cf69c.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/locked.4ca6e2c7ddf27e00ee5f.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.e2f21ad293ef6a420ba9.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.e905b72fafe5572f066d.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.9699e18f49b33ad647b0.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/unlocked.737119d4563135ccd8c0.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.d1c187eb2420adf8e31782026282a33b.webmanifest","/my-tasks/offline.0301c46056a4f9729bf11adac69d1fab.html"];function T(e){}function A(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:c,status:200})}function C(){return I.navigator.userAgent.toLowerCase().includes("chrome")||I.navigator.userAgent.toLowerCase().includes("chromium")}const L=e=>e.startsWith(`${/my-tasks/}offline.`)&&e.endsWith(".html"),E="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://budarinv.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-MQKPSNy64VfUBDJveceQxthkvKXKBfJs2C7u2NRQ7Fc22Wc8ELctH6EHu6jZ1f2L' 'sha384-IF_sD6CcGAKwtK88XTJrfY6CkCUmE0PcX6QewOX8WVb_rjGslRzjFNhAPKBiAxBr' 'sha384-PkrxsRS5UDrTCLUxdrlJIgmp4s4g3x6DT2eQTEt4S7Zr6ts2mpFdSe0FQTbDt9ei' 'sha384-Y2Zy8A7FBBT8HGQSQTCqaNBq5X9wGd6DZ-qPGdtsVRjR7aYRcZKW36wyu23Hwa4Q'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function O(n,i,o){const c=await caches.open(r),d=await c.match(i);if(d){if(L(i)&&!d.headers.get(s)){const e=d.clone(),t=new Headers(d.headers);t.set(s,E);try{let a=await d.text();C()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,r.clone()),r}catch(e){return d}}return d}return async function(n,i){let o;const c=await fetch(n,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===a){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;L(n)?(e=await c.text(),d.set(s,E),C()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(r)).put(n,o.clone());return o}(i,o)}function U(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let a=0;a<e.length;a++){const r=e[a].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function P(e,t=65536){return a=>{if("string"!=typeof a)return!1;const r=String(a).trim();return r.length>=e&&r.length<=t}}const J=(e,t,a,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${r} символов`;function W(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const B=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function Q(e){return t=>void 0===t||e(t)}function D(e){return"boolean"==typeof e}function K(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const V=(e,t,a,r)=>{const s={error:{message:`Сущность "${r}" должна быть объектом`,data:e}};if(void 0===e)return s;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return s;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const a=i[e],s=t[a];if(!0===s.required&&void 0===n[a])return{error:{message:`Свойство "${a}" сущности ${r} отсутствует`,data:n}};for(let e=0;e<s.validators.length;e++){const t=s.validators[e];if(!1===t[0](n[a]))return{error:{message:t[1],data:n}}}}return{result:a(n)}},X=e=>{e.currentTarget.setCustomValidity("")},G=(e,t,a)=>r=>{const s=r.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=s.value.replace(/\n/gm,"").trim();return s.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void s.setCustomValidity(n)):i&&(i.length<t||i.length>a)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${a} символов`,void s.setCustomValidity(n)):void s.setCustomValidity(n)};function H(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}const Z="Задача",F=100,M="Название задачи";G(M,3,F);function Y(e){const{title:t,priority_id:a,category_id:r,description:s,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:H(t.trim()),priority_id:Number(a),category_id:r?Number(r):void 0,description:s?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const z={title:{validators:[[P(3,F),J(Z,"title",3,F)]],required:!0},priority_id:{validators:[[W,B(Z,"priority_id")]],required:!0},category_id:{validators:[[Q(W),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(Z,"category_id")]]},expire_date_time:{validators:[[Q((function(e){return"string"==typeof e})),function(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}(Z,"expire_date_time")],[Q((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${Z} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[Q(D),K(Z,"deleted")]]},completed:{validators:[[Q(D),K(Z,"completed")]]}},ee=e=>V(e,z,Y,Z);function te(e){const{task_id:t,title:a,priority_id:r,category_id:s,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:H(a.trim()),priority_id:Number(r),category_id:s?Number(s):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const ae={task_id:{validators:[[W,B(Z,"task_id")]],required:!0},...z},re=e=>V(e,ae,te,Z);function se(e,t,a=200){return new Response(JSON.stringify({id:e,result:t}),{headers:c,status:a})}class ne{constructor(e,t){this.type=e,this.data=t}}async function ie(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}function oe(e,t){const a=ee(t);if(!a.error){const r=a.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(r.category_id){if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const s=e.tasks.reduce(((e,t)=>t?.task_id||0>e?t.task_id:e),e.tasks[0]?.task_id||0)||0,n={...r,task_id:s+1};return e.tasks.push(n),{result:n}}return a}function ce(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);return a.length===r.length&&a.every((a=>r.includes(a)&&ce(e[a],t[a])))}const de="Категория",ue="Название категории";G(ue,3,20);function le(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:Number(t),category_name:H(a.trim())}}const fe={icon_id:{validators:[[W,B(de,"icon_id")]],required:!0},category_name:{validators:[[P(3,20),J(de,"category_name",3,20)]],required:!0}},ge=e=>V(e,fe,le,de);function pe(e){const{category_id:t,icon_id:a,category_name:r}=e||{};return{category_id:Number(t),icon_id:Number(a),category_name:H(r.trim())}}const me={category_id:{validators:[[W,B(de,"category_id")]],required:!0},...fe},ye=e=>V(e,me,pe,de);function _e(e,t){const a=ge(t);if(a.result){const r=a.result,s=e.categories.find((e=>e.category_name===r.category_name));if(s)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.reduce(((e,t)=>(console.log({max:e,item:t}),(t.category_id||0)>e?t.category_id:e)),e.categories[0]?.category_id||0)||0,i={...r,category_id:n+1};return e.categories.push(i),{result:i}}return a}function he(e){const t=(a=e.tasks,"structuredClone"in globalThis?I.structuredClone(a):a);var a;return e.tasks=[],{result:t}}function we(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}async function be(e){const{request:t}=e,a=(await t.json()).id||U();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}const ke={[o]:async function(e){const{request:t}=e,a=await j(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})},[u]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=_e(a,s);if(n.result){const t=n.result;return await x(a),await ie(e.clientId,new ne("create_category",t)),se(r,t)}return A(r,n.error.message,n.error.data)},[l]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=function(e,t){const a=ye(t);if(a.result){const r=a.result;let s=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(s=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[s]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,s);if(n.result){const t=n.result;return x(a),await ie(e.clientId,new ne("update_category",t)),se(r,t)}return A(r,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=function(e,t){const a=ye(t);if(a.result){const r=a.result,s=e.categories.findIndex((e=>ce(e,r)));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(s,1),{result:r})}return a}(a,s);if(n.result){const t=n.result;return x(a),await ie(e.clientId,new ne("delete_category",t)),se(r,t)}return A(r,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=oe(a,s);if(n.result){const t=n.result;return await x(a),await ie(e.clientId,new ne(g,t)),se(r,t)}return A(r,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=function(e,t){const a=re(t);if(a.result){const r=a.result,s=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===s?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?r.category_id&&!e.categories.find((e=>e.category_id===r.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[s]=r,{result:r}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,s);if(n.result){const t=n.result;return await x(a),await ie(e.clientId,new ne(p,t)),se(r,t)}return A(r,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,a=v(),{id:r,params:s}=await t.json(),n=function(e,t){const a=re(t);if(a.result){const r=a.result,s=e.tasks.findIndex((e=>ce(te(e),te(r))));return-1===s?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(s,1),{result:r})}return a}(a,s);if(n.result){const t=n.result;return await x(a),await ie(e.clientId,new ne(m,t)),se(r,t)}return A(r,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,a=v(),{id:r}=await t.json(),s=he(a);if(s.result){const t=s.result;return await x(a),await ie(e.clientId,new ne(y)),se(r,t)}return A(r,s.error.message,s.error.data)},[_]:async function(e){const{request:t}=e,a={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},r={categories:[]},{id:s,params:n}=await t.json();if(n){const t=v(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return A(s,"Не валидные данные");for(let e=0;e<i.length;e++){const s=i[e];let n;if(s.category_id){const e=o.find((e=>e.category_id===s.category_id));e&&(r.categories.includes(e.category_name)||(n=_e(t,e),n.error?a.failed.categories.push(n.error):a.imported.categories.push(n.result),r.categories.push(e.category_name)))}t.tasks.find((e=>e.title===s.title&&e.description===s.description&&e.priority_id===s.priority_id&&e.category_id===s.category_id&&e.completed==s.completed&&e.deleted==s.deleted&&e.expire_date_time==s.expire_date_time))?a.failed.tasks.push({message:"Задача уже существует",data:s}):(n=oe(t,s),n.error?a.failed.tasks.push(n.error):a.imported.tasks.push(n.result))}(a.imported.categories.length>0||a.imported.tasks.length>0)&&x(t);const c=a.imported;return(c.categories.length>0||c.tasks.length>0)&&await ie(e.clientId,new ne(_,a.imported)),se(s,a)}return A(s,"Не удалось импортировать задачи")},"/log/info":be,"/log/warn":be,"/log/error":be};async function ve(e,t){const a=async function(e,t){return 0===v().icons.length&&await j(),(ke[t]||we)(e)}(e,t);return a}var xe;xe=globalThis,I=xe,e.id=Date.now(),e.VERSION="1.22.57",e.assets=N,e.isRepearing=!1,e.logger=S,e.onerror=T,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,s=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(a.url);switch(a.method){case"GET":return await async function(t,a){t.request.destination,e.assets.includes(a)&&t.respondWith(O(0,t.request.url,a))}(t,s),void t.waitUntil(async function(){const t=await caches.open(r),a=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(s.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(s)}finally{e.isRepearing=!1}}}());case"POST":{const{origin:e}=new URL(t.request.referrer);if(!t.request.url.startsWith(e))return;if(t.request.url.indexOf("/ai/")>0)return;return void t.respondWith(ve(t,s))}default:t.respondWith(A(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(r),a=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>{const t=e.split(".").pop()||"";return n.includes(t)&&!a.includes(e)}));e.loadedAssets=s,s.length>0&&await t.addAll(s)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(q()),t.waitUntil(e.clients.claim())}))})();