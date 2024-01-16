!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();const t=self,a=200,r=206,n="assets",i="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",p="create_task",g="update_task",y="delete_task",m=[u,l,f,p,g,y];const _="tasks",h="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),r=await caches.open(h),n=await r.match(_);void 0!==n&&(t=await n.text()),void 0!==n&&t===a||await r.put(_,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let b={tasks:[],categories:[],priorities:[],icons:[]};function k(){return b}async function v(e){b=e,await w(e)}function x(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:x(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:x(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function I(){let e=k();const t=await caches.open(h),a=await t.match(_);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await v(e),e}if(e.icons&&0===e.icons.length)return await v(j),j}return a||await w(e),e}async function S(){await async function(){const e=await caches.open(n);let a=(await e.keys()).map((e=>new URL(e.url).pathname));const r=a.filter((e=>!t.assets.includes(e)));r.length>0&&await Promise.all(r.map((async t=>{await e.delete(t),a=a.filter((e=>e!==t))})));const i=t.assets.filter((e=>!a.includes(e)));i.length>0&&await e.addAll(i)}(),await I(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const T=()=>{};let $=new Proxy({},{get:()=>T});const R=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.64cdf68658398a163484.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.975624607a4350da8bf0.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.e516317cbb36ebf89753.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/npms.08b9a06eb5c596b17224.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.61701fa5320d7b7e09d6.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.2f157314e5da1bc3c97a335d75e64f38.webmanifest","/my-tasks/offline.e34e62570e1bc2789fa11ed79207c488.html"];function q(e){}function O(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:c,status:200})}function A(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const W="/my-tasks/",L=e=>e.startsWith(`${W}offline.`)&&e.endsWith(".html"),E="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-ZbiWq4wJZC6uxAz4kIquAHNBsivHh6aZBePQBKuX1KvsWe0PH9Q37UVZP1-iv60W' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-3Le7LlJGEsQ1RhbA42Q1vv_df8AbU8Izn_o128ItdZvqm0kth1iQJsyyseMt2M5N' 'sha384-kiQ3e6TAkF9YxFukcXTUTSkYAk3mIVd0rFfaUlZM-wSw8HeckgaLDDbrrBDxpIvu' 'sha384-ZxdIH9rOmzI9mKiY3IK3t9yowhdp3UOXhrAl5nCJMpWKAC3ey3xvLkWH8ThnPHJT' 'sha384-tFgFXVn-QJUujLrkzug7jRI5jF7Og-uDJ8pijUAvmeOcX1eod0IujR1XcopkRbcS' 'sha384-GYZ25FRrg5I2LKXWIMDvH3K6hcdKQylkIYQGN6cx6hh0-E6JeMiwkwpOKhzxU6_T'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function U(e,s,o){const c=await caches.open(n),d=await c.match(s);if(d){if(L(s)&&!d.headers.get(i)){const e=d.clone(),t=new Headers(d.headers);t.set(i,E);try{let a=await d.text();A()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(s,r.clone()),r}catch(e){return d}}return d}return async function(e,s){let o;const c=await fetch(e);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;L(e)?(t=await c.text(),d.set(i,E),A()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===a;if(!1===u)return c;u&&t.assets.includes(s)&&(await caches.open(n)).put(e,o.clone());return o}(s,o)}function N(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let a=0;a<e.length;a++){const r=e[a].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function J(e){return"number"==typeof e&&Number.isInteger(e)}const K=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function P(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const Z=(e,t,a,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${r} символов`;const D=(e,t,a,r)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${r}" должна быть объектом`,data:e}};const n=e,i=Object.keys(t);for(let a=0;a<i.length;a++){const s=i[a],o=t[s];if(!0===o.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${r} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](n[s]))return{error:{message:a[1],data:e}}}}return{result:a(n)}};function H(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const M="Категория",Q={icon_id:{validators:[[J,K(M,"icon_id")]],required:!0},category_name:{validators:[[P(3,20),Z(M,"category_name",3,20)]],required:!0}},B=e=>D(e,Q,H,M);function C(e){const{category_id:t,icon_id:a,category_name:r}=e||{};return{category_id:t,icon_id:a,category_name:r}}const X={category_id:{validators:[[J,K(M,"category_id")]],required:!0},...Q},F=e=>D(e,X,C,M);function z(e){return t=>void 0===t||e(t)}function G(e){return"boolean"==typeof e}function V(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function Y(e){const{title:t,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}=e||{};return{title:t,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}}const ee="Задача",te={title:{validators:[[P(3,100),Z(ee,"title",3,100)]],required:!0},priority_id:{validators:[[J,K(ee,"priority_id")]],required:!0},category_id:{validators:[[z(J),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(ee,"category_id")]]},description:{validators:[[z(P(3,1e3)),Z(ee,"description",3,1e3)]]},expire_date_time:{validators:[[z((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${ee} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[z(G),V(ee,"deleted")]]},completed:{validators:[[z(G),V(ee,"completed")]]}},ae=e=>D(e,te,Y,ee);function re(e){const{task_id:t,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}}const ne={task_id:{validators:[[J,K(ee,"task_id")]],required:!0},...te},ie=e=>D(e,ne,re,ee);e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;function se(e){return"string"==typeof e}function oe(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function ce(e){return t=>e.includes(t)}function de(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const ue="others",le="settings",fe="Настройки",pe="about",ge="О Приложении",ye="store_state",me="Разработчикам",_e=[le,ye,pe],he=[fe,ge,me];const we="Навигационный фильтр",be=(oe(we,"title"),ce(_e),de(we,"title"),oe(we,"title"),ce(he),de(we,"title"),oe(we,"type"),"filter"),ke="inbox",ve="Черновики",xe="trash",je="Корзина",Ie="expired",Se="Просроченные",Te="completed",$e="Завершенные",Re=[ke,Ie,Te,xe],qe=[ve,je,Se,$e];const Oe="Навигационный фильтр",Ae=(oe(Oe,"title"),ce(Re),de(Oe,"title"),oe(Oe,"title"),ce(qe),de(Oe,"title"),oe(Oe,"type"),"calendar");const We="Навигационный фильтр",Le=(K(We,"key"),oe(We,"type"),"category");const Ee="Навигационный фильтр";K(Ee,"key"),oe(Ee,"type");function Ue(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:c,status:a})}class Ne{constructor(e,t){this.type=e,this.data=t}}async function Je(e,a){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(a)}))}))}async function Ke(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ae(t);if(!a.error){const r=a.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}};const n=e.tasks.at(-1)?.task_id||0,i={...r,task_id:n+1};return e.tasks.push(i),{result:i}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await Je(e.clientId,new Ne("create_task",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}async function Pe(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===n?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?e.categories.find((e=>e.category_id===r.category_id))?(e.tasks[n]=r,{result:r}):{error:{message:"Не известный идентификатор категории",data:t}}:{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await Je(e.clientId,new Ne("update_task",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}function Ze(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);return a.length===r.length&&a.every((a=>r.includes(a)&&Ze(e[a],t[a])))}async function De(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>Ze(re(e),re(r))));return-1===n?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return await v(a),await Je(e.clientId,new Ne("delete_task",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}async function He(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=B(t);if(a.result){const r=a.result,n=e.categories.find((e=>e.category_name===r.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const i=e.categories.at(-1)?.category_id||0,s={...r,category_id:i+1};return e.categories.push(s),{result:s}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await Je(e.clientId,new Ne("create_category",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}async function Me(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=F(t);if(a.result){const r=a.result;let n=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(n=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[n]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,n);if(i.result){const t=i.result;return v(a),await Je(e.clientId,new Ne("update_category",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}async function Qe(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=F(t);if(a.result){const r=a.result,n=e.categories.findIndex((e=>Ze(e,r)));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return v(a),await Je(e.clientId,new Ne("delete_category",t)),Ue(r,t)}return O(r,i.error.message,i.error.data)}async function Be(e,t){switch(t){case o:return async function(e){const{request:t}=e,a=await I(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})}(e);case u:return He(e);case l:return Me(e);case f:return Qe(e);case p:return Ke(e);case g:return Pe(e);case y:return De(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||N();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}t.id=Date.now(),t.VERSION="1.0.0",t.assets=R,t.isRepearing=!1,t.logger=$,t.onerror=q,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const a=e.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(s)?t.slice(s.length):t}(a.url);switch(a.method){case"GET":return async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(r)}finally{t.isRepearing=!1}}}(),void await async function(e,a){if("document"!==e.request.destination||a!==W)t.assets.includes(a)&&e.respondWith(U(0,e.request.url,a));else{const a=t.assets.find((e=>e.startsWith(`${W}offline.`)&&e.endsWith(".html")))||"";e.respondWith(U(0,a,a))}}(e,r);case"POST":{const t=()=>Be(e,r);return void await async function(e,t,a){if(m.includes(t)){const e=k();e.icons&&0===e.icons.length&&await I()}e.respondWith(a())}(e,r,t)}default:e.respondWith(O(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)));t.loadedAssets=r,r.length>0&&await e.addAll(r)}())})),t.addEventListener("activate",(async function(e){e.waitUntil(S()),e.waitUntil(t.clients.claim())}))}();