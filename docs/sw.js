!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();const t=self,a=200,r=206,n="assets",i="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",p="create_task",g="update_task",y="delete_task",m=[u,l,f,p,g,y];const _="tasks",h="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),r=await caches.open(h),n=await r.match(_);void 0!==n&&(t=await n.text()),void 0!==n&&t===a||await r.put(_,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let b={tasks:[],categories:[],priorities:[],icons:[]};function k(){return b}async function v(e){b=e,await w(e)}function x(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:x(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:x(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function S(){let e=k();const t=await caches.open(h),a=await t.match(_);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await v(e),e}if(e.icons&&0===e.icons.length)return await v(j),j}return a||await w(e),e}async function T(){await async function(){const e=await caches.open(n);let a=(await e.keys()).map((e=>new URL(e.url).pathname));const r=a.filter((e=>!t.assets.includes(e)));r.length>0&&await Promise.all(r.map((async t=>{await e.delete(t),a=a.filter((e=>e!==t))})));const i=t.assets.filter((e=>!a.includes(e)));i.length>0&&await e.addAll(i)}(),await S(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const O=()=>{};let q=new Proxy({},{get:()=>O});const R=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.620cb6e3fbb02a11dca3.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.1ea7a7baf38af83095dc.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.eadd9a7854cd168e551c.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/npms.03b680477565bc10ec71.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.907c07f0475d773864ed.js","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.2f157314e5da1bc3c97a335d75e64f38.webmanifest","/my-tasks/offline.eff345036910bb4289065adeea89fdee.html"];function $(e){}function I(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:c,status:200})}function W(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const E="/my-tasks/",N=e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html"),P="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-dT3fSvfUrOfjTOzyIoZu-PNhGKAJ6a2I1y-_O5bTENaFD-ePtYd9Ipuodwb2KLHi' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-kUaNvIPPkoFVX4Duqfm6-npDJOateGZ4vtx0nhbr9D156C-UFd7dw4rK9skQVB4h' 'sha384-UMshMv5MrZmB01Hiqck2wgdziMJHYJ3Rs69rmDxmdYX2oPUCWhb6-frpp0LgzERH' 'sha384-Aa5jM8h_sOfmhvzJ573YGJDV0imvdIMeAaexF5A8jDaXpByZCzd0WTxCk-9S9R7s' 'sha384-xYjzTFWPDJTNPwNDtiF8SHBQaCKi_o7-sON6ZPB44fpn53Qh3Yl8WolO8MXsWjP0' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function A(e,s,o){const c=await caches.open(n),d=await c.match(s);if(d){if(N(s)&&!d.headers.get(i)){const e=d.clone(),t=new Headers(d.headers);t.set(i,P);try{let a=await d.text();W()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(s,r.clone()),r}catch(e){return d}}return d}return async function(e,s){let o;const c=await fetch(e);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;N(e)?(t=await c.text(),d.set(i,P),W()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===a;if(!1===u)return c;u&&t.assets.includes(s)&&(await caches.open(n)).put(e,o.clone());return o}(s,o)}function L(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let a=0;a<e.length;a++){const r=e[a].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function D(e){return"number"==typeof e&&Number.isInteger(e)}const U=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function C(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const J=(e,t,a,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${r} символов`;const M=(e,t,a,r)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${r}" должна быть объектом`,data:e}};const n=e,i=Object.keys(t);for(let a=0;a<i.length;a++){const s=i[a],o=t[s];if(!0===o.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${r} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](n[s]))return{error:{message:a[1],data:e}}}}return{result:a(n)}};function B(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const Z="Категория",H={icon_id:{validators:[[D,U(Z,"icon_id")]],required:!0},category_name:{validators:[[C(3,20),J(Z,"category_name",3,20)]],required:!0}},z=e=>M(e,H,B,Z);function K(e){const{category_id:t,icon_id:a,category_name:r}=e||{};return{category_id:t,icon_id:a,category_name:r}}const F={category_id:{validators:[[D,U(Z,"category_id")]],required:!0},...H},G=e=>M(e,F,K,Z);function V(e){return t=>void 0===t||e(t)}function Y(e){return"boolean"==typeof e}function X(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function Q(e){const{title:t,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}=e||{};return{title:t,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}}const ee="Задача",te={title:{validators:[[C(3,100),J(ee,"title",3,100)]],required:!0},priority_id:{validators:[[D,U(ee,"priority_id")]],required:!0},category_id:{validators:[[V(D),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(ee,"category_id")]]},description:{validators:[[V(C(3,1e3)),J(ee,"description",3,1e3)]]},expire_date_time:{validators:[[V((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${ee} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[V(Y),X(ee,"deleted")]]},completed:{validators:[[V(Y),X(ee,"completed")]]}},ae=e=>M(e,te,Q,ee);function re(e){const{task_id:t,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}}const ne={task_id:{validators:[[D,U(ee,"task_id")]],required:!0},...te},ie=e=>M(e,ne,re,ee);e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;function se(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:c,status:a})}class oe{constructor(e,t){this.type=e,this.data=t}}async function ce(e,a){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(a)}))}))}async function de(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ae(t);if(!a.error){const r=a.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}};const n=e.tasks.at(-1)?.task_id||0,i={...r,task_id:n+1};return e.tasks.push(i),{result:i}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("create_task",t)),se(r,t)}return I(r,i.error.message,i.error.data)}async function ue(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===n?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?e.categories.find((e=>e.category_id===r.category_id))?(e.tasks[n]=r,{result:r}):{error:{message:"Не известный идентификатор категории",data:t}}:{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("update_task",t)),se(r,t)}return I(r,i.error.message,i.error.data)}function le(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);return a.length===r.length&&a.every((a=>r.includes(a)&&le(e[a],t[a])))}async function fe(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>le(re(e),re(r))));return-1===n?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("delete_task",t)),se(r,t)}return I(r,i.error.message,i.error.data)}async function pe(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=z(t);if(a.result){const r=a.result,n=e.categories.find((e=>e.category_name===r.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const i=e.categories.at(-1)?.category_id||0,s={...r,category_id:i+1};return e.categories.push(s),{result:s}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("create_category",t)),se(r,t)}return I(r,i.error.message,i.error.data)}async function ge(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=G(t);if(a.result){const r=a.result;let n=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(n=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[n]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,n);if(i.result){const t=i.result;return v(a),await ce(e.clientId,new oe("update_category",t)),se(r,t)}return I(r,i.error.message,i.error.data)}async function ye(e){const{request:t}=e,a=k(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=G(t);if(a.result){const r=a.result,n=e.categories.findIndex((e=>le(e,r)));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return v(a),await ce(e.clientId,new oe("delete_category",t)),se(r,t)}return I(r,i.error.message,i.error.data)}async function me(e,t){switch(t){case o:return async function(e){const{request:t}=e,a=await S(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})}(e);case u:return pe(e);case l:return ge(e);case f:return ye(e);case p:return de(e);case g:return ue(e);case y:return fe(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||L();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}t.id=Date.now(),t.VERSION="1.0.0",t.assets=R,t.isRepearing=!1,t.logger=q,t.onerror=$,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const a=e.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(s)?t.slice(s.length):t}(a.url);switch(a.method){case"GET":return async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(r)}finally{t.isRepearing=!1}}}(),void await async function(e,a){if("document"!==e.request.destination||a!==E)t.assets.includes(a)&&e.respondWith(A(0,e.request.url,a));else{const a=t.assets.find((e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html")))||"";e.respondWith(A(0,a,a))}}(e,r);case"POST":{const t=()=>me(e,r);return void await async function(e,t,a){if(m.includes(t)){const e=k();e.icons&&0===e.icons.length&&await S()}e.respondWith(a())}(e,r,t)}default:e.respondWith(I(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)));t.loadedAssets=r,r.length>0&&await e.addAll(r)}())})),t.addEventListener("activate",(async function(e){e.waitUntil(T()),e.waitUntil(t.clients.claim())}))}();