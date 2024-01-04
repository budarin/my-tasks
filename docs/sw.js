!function(){var e={401:function(e){e.exports={appPath:"/my-tasks/"}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}!function(){"use strict";const e=self,t=200,r=206,n="assets",i="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",g="create_task",p="update_task",y="delete_task",_=[u,l,f,g,p,y];const m="tasks",h="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),r=await caches.open(h),n=await r.match(m);void 0!==n&&(t=await n.text()),void 0!==n&&t===a||await r.put(m,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function b(){return k}async function v(e){k=e,await w(e)}function x(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date_time:x(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",due_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",due_date_time:x(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function S(){let e=b();const t=await caches.open(h),a=await t.match(m);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await v(e),e}if(e.icons&&0===e.icons.length)return await v(j),j}return a||await w(e),e}async function T(){await async function(){const t=await caches.open(n);let a=(await t.keys()).map((e=>new URL(e.url).pathname));const r=a.filter((t=>!e.assets.includes(t)));r.length>0&&await Promise.all(r.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const i=e.assets.filter((e=>!a.includes(e)));i.length>0&&await t.addAll(i)}(),await S(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const R=()=>{};let q=new Proxy({},{get:()=>R});const O=["/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.f3db4485bb1e69f3c1c1.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/budarin.4a1954bad283653e8db0.js","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/main.750870431187fdccd3ba.js","/my-tasks/npms.03b680477565bc10ec71.js","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.551cdf97852b0a10588d.js","/my-tasks/todo.cd3261e56180c2c0e031.svg","/my-tasks/manifest.72fd422207cecac5111b2337c50afb7b.webmanifest","/my-tasks/offline.55a4be05a5c8ed2586b45942444d2587.html"];function W(e){}function E(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:c,status:200})}function $(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}var A=a(401);const I=e=>e.startsWith(`${A.appPath}offline.`)&&e.endsWith(".html"),L="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-awspsacWvBAq6mulvxlzzB61MgSTDeWWJ6et7fHy3afMe0jGHabj3FVrc00CwO0C' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-em2x1NwfGC2iR2_idMaQBy4c6yZfjJrDORUD5Eo21ADuNrP_6hJD1HJW5SRjIzZ7' 'sha384-mKvTpL5idEXA_pmfTavsSTwY_Uah7A3pfb4TYz__AZS7QGb_hHaECOKTmuiKgwYB' 'sha384-RZU2MylYZMl2V-wmSp4O-3KXej4CT7Ws-7N-PLYGyCmpk8durq2WY_Nnf1ZVpzMB' 'sha384-p5L6yiMnAOJYTRWqa461vjDE5KibnyJFlR04NTYiBrLphSX_KyN2p3E1mzh4upfo' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function N(a,s,o){const c=await caches.open(n),d=await c.match(s);if(d){if(I(s)&&!d.headers.get(i)){const e=d.clone(),t=new Headers(d.headers);t.set(i,L);try{let a=await d.text();$()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(s,r.clone()),r}catch(e){return d}}return d}return async function(a,s){let o;const c=await fetch(a);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;I(a)?(e=await c.text(),d.set(i,L),$()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(s)&&(await caches.open(n)).put(a,o.clone());return o}(s,o)}function P(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let a=0;a<e.length;a++){const r=e[a].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function C(e){return"number"==typeof e&&Number.isInteger(e)}const D=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function M(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const U=(e,t,a,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${r} символов`;const Z=(e,t,a,r)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${r}" должна быть объектом`,data:e}};const n=e,i=Object.keys(t);for(let a=0;a<i.length;a++){const s=i[a],o=t[s];if(!0===o.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${r} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](n[s]))return{error:{message:a[1],data:e}}}}return{result:a(n)}};function B(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const J="Категория",K={icon_id:{validators:[[C,D(J,"icon_id")]],required:!0},category_name:{validators:[[M(3,20),U(J,"category_name",3,20)]],required:!0}},H=e=>Z(e,K,B,J);function z(e){const{category_id:t,icon_id:a,category_name:r}=e||{};return{category_id:t,icon_id:a,category_name:r}}const Y={category_id:{validators:[[C,D(J,"category_id")]],required:!0},...K},G=e=>Z(e,Y,z,J);function V(e){return t=>void 0===t||e(t)}function X(e){return"boolean"==typeof e}function Q(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function F(e){const{title:t,priority_id:a,category_id:r,description:n,due_date_time:i,deleted:s,completed:o}=e||{};return{title:t,priority_id:a,category_id:r,description:n,due_date_time:i,deleted:s,completed:o}}const ee="Задача",te={title:{validators:[[M(3,100),U(ee,"title",3,100)]],required:!0},priority_id:{validators:[[C,D(ee,"priority_id")]],required:!0},category_id:{validators:[[V(C),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(ee,"category_id")]]},description:{validators:[[V(M(3,1e3)),U(ee,"description",3,1e3)]]},due_date_time:{validators:[[V((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${ee} "due_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[V(X),Q(ee,"deleted")]]},completed:{validators:[[V(X),Q(ee,"completed")]]}},ae=e=>Z(e,te,F,ee);function re(e){const{task_id:t,title:a,priority_id:r,category_id:n,description:i,due_date_time:s,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:r,category_id:n,description:i,due_date_time:s,deleted:o,completed:c}}const ne={task_id:{validators:[[C,D(ee,"task_id")]],required:!0},...te},ie=e=>Z(e,ne,re,ee);function se(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:c,status:a})}class oe{constructor(e,t){this.type=e,this.data=t}}async function ce(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}async function de(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ae(t);if(!a.error){const r=a.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}};const n=e.tasks.at(-1)?.task_id||0,i={...r,task_id:n+1};return e.tasks.push(i),{result:i}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("create_task",t)),se(r,t)}return E(r,i.error.message,i.error.data)}async function ue(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===n?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?e.categories.find((e=>e.category_id===r.category_id))?(e.tasks[n]=r,{result:r}):{error:{message:"Не известный идентификатор категории",data:t}}:{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("update_task",t)),se(r,t)}return E(r,i.error.message,i.error.data)}function le(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);return a.length===r.length&&a.every((a=>r.includes(a)&&le(e[a],t[a])))}async function fe(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>le(re(e),re(r))));return-1===n?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("delete_task",t)),se(r,t)}return E(r,i.error.message,i.error.data)}async function ge(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=H(t);if(a.result){const r=a.result,n=e.categories.find((e=>e.category_name===r.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const i=e.categories.at(-1)?.category_id||0,s={...r,category_id:i+1};return e.categories.push(s),{result:s}}return a}(a,n);if(i.result){const t=i.result;return await v(a),await ce(e.clientId,new oe("create_category",t)),se(r,t)}return E(r,i.error.message,i.error.data)}async function pe(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=G(t);if(a.result){const r=a.result;let n=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(n=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[n]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,n);if(i.result){const t=i.result;return v(a),await ce(e.clientId,new oe("update_category",t)),se(r,t)}return E(r,i.error.message,i.error.data)}async function ye(e){const{request:t}=e,a=b(),{id:r,params:n}=await t.json(),i=await async function(e,t){const a=G(t);if(a.result){const r=a.result,n=e.categories.findIndex((e=>le(e,r)));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(n,1),{result:r})}return a}(a,n);if(i.result){const t=i.result;return v(a),await ce(e.clientId,new oe("delete_category",t)),se(r,t)}return E(r,i.error.message,i.error.data)}async function _e(e,t){switch(t){case o:return async function(e){const{request:t}=e,a=await S(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})}(e);case u:return ge(e);case l:return pe(e);case f:return ye(e);case g:return de(e);case p:return ue(e);case y:return fe(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||P();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}e.id=Date.now(),e.VERSION="1.0.0",e.assets=O,e.isRepearing=!1,e.logger=q,e.onerror=W,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(s)?t.slice(s.length):t}(a.url);switch(a.method){case"GET":return async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(r)}finally{e.isRepearing=!1}}}(),void await async function(t,a){if("document"!==t.request.destination||a!==A.appPath)e.assets.includes(a)&&t.respondWith(N(0,t.request.url,a));else{const a=e.assets.find((e=>e.startsWith(`${A.appPath}offline.`)&&e.endsWith(".html")))||"";t.respondWith(N(0,a,a))}}(t,r);case"POST":{const e=()=>_e(t,r);return void await async function(e,t,a){if(_.includes(t)){const e=b();e.icons&&0===e.icons.length&&await S()}e.respondWith(a())}(t,r,e)}default:t.respondWith(E(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>!a.includes(e)));e.loadedAssets=r,r.length>0&&await t.addAll(r)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(T()),t.waitUntil(e.clients.claim())}))}()}();