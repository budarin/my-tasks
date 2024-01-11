!function(){"use strict";const e=self,t=200,a=206,n="assets",s="Content-Security-Policy";const r="/api/",i="get_tasks",o={"Content-Type":"application/json; charset=utf-8"},c="RELOAD_PAGE",d="create_category",u="update_category",l="delete_category",f="create_task",g="update_task",y="delete_task",p=[d,u,l,f,g,y];const m="tasks",_="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),n=await caches.open(_),s=await n.match(m);void 0!==s&&(t=await s.text()),void 0!==s&&t===a||await n.put(m,new Response(a,{headers:new Headers({...o,"Content-Length":String(a.length)})}))}}let h={tasks:[],categories:[],priorities:[],icons:[]};function b(){return h}async function k(e){h=e,await w(e)}function v(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date_time:v(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",due_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",due_date_time:v(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function q(){let e=b();const t=await caches.open(_),a=await t.match(m);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await k(e),e}if(e.icons&&0===e.icons.length)return await k(j),j}return a||await w(e),e}async function S(){await async function(){const t=await caches.open(n);let a=(await t.keys()).map((e=>new URL(e.url).pathname));const s=a.filter((t=>!e.assets.includes(t)));s.length>0&&await Promise.all(s.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const r=e.assets.filter((e=>!a.includes(e)));r.length>0&&await t.addAll(r)}(),await q(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:c})))}))}()}const x=()=>{};let T=new Proxy({},{get:()=>x});const R=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.ea586e73b0e6cbf04880.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.4a1954bad283653e8db0.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.05b5097aba7f0317d761.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/npms.03b680477565bc10ec71.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/overdue.45d759abb485d88b78aa.svg","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.9e4ec22c34f3d425b589.js","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.2f157314e5da1bc3c97a335d75e64f38.webmanifest","/my-tasks/offline.53e19dcc1732879525f07f6efae6885b.html"];function E(e){}function O(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:o,status:200})}function W(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const $="/my-tasks/",A=e=>e.startsWith(`${$}offline.`)&&e.endsWith(".html"),I="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-8ZqEQ3vxgir9Bi_y0Lz_vl31q-W_p-YvbSbIRoH8jZLOxdM0k5tqSc2-3h_DSHKp' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-GJN-q5Y4Wd-ZVFtncoersJoRScpDctud4m3MPFQ-aJMVvfkFr-WoAb3AX9tF2Fpq' 'sha384-mKvTpL5idEXA_pmfTavsSTwY_Uah7A3pfb4TYz__AZS7QGb_hHaECOKTmuiKgwYB' 'sha384-PyUyxERMH7O-zHyCKRUWj-epsou4h8GXhuF2U12Z8gjpCBrLcgzNmzQ_v2THtBbb' 'sha384-039wwfbuuw4sCrybiEainEHrWNsv0v2jb0gfCF6jAtaHHU7vFqFUmayjU-711wee' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function L(r,i,o){const c=await caches.open(n),d=await c.match(i);if(d){if(A(i)&&!d.headers.get(s)){const e=d.clone(),t=new Headers(d.headers);t.set(s,I);try{let a=await d.text();W()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const n=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,n.clone()),n}catch(e){return d}}return d}return async function(r,i){let o;const c=await fetch(r);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===a){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;A(r)?(e=await c.text(),d.set(s,I),W()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(i)&&(await caches.open(n)).put(r,o.clone());return o}(i,o)}function U(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),n=function(e){let t="";for(let a=0;a<e.length;a++){const n=e[a].toString(16);t+=2===n.length?n:"0"+n}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${n.substring(0,4)}-${n.substring(4,8)}-${n.substring(8)}`}function N(e){return"number"==typeof e&&Number.isInteger(e)}const H=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function C(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const Z=(e,t,a,n)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${n} символов`;const P=(e,t,a,n)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${n}" должна быть объектом`,data:e}};const s=e,r=Object.keys(t);for(let a=0;a<r.length;a++){const i=r[a],o=t[i];if(!0===o.required&&void 0===s[i])return{error:{message:`Свойство "${i}" сущности ${n} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](s[i]))return{error:{message:a[1],data:e}}}}return{result:a(s)}};function B(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const M="Категория",D={icon_id:{validators:[[N,H(M,"icon_id")]],required:!0},category_name:{validators:[[C(3,20),Z(M,"category_name",3,20)]],required:!0}},J=e=>P(e,D,B,M);function K(e){const{category_id:t,icon_id:a,category_name:n}=e||{};return{category_id:t,icon_id:a,category_name:n}}const F={category_id:{validators:[[N,H(M,"category_id")]],required:!0},...D},z=e=>P(e,F,K,M);function G(e){return t=>void 0===t||e(t)}function Q(e){return"boolean"==typeof e}function V(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function Y(e){const{title:t,priority_id:a,category_id:n,description:s,due_date_time:r,deleted:i,completed:o}=e||{};return{title:t,priority_id:a,category_id:n,description:s,due_date_time:r,deleted:i,completed:o}}const X="Задача",ee={title:{validators:[[C(3,100),Z(X,"title",3,100)]],required:!0},priority_id:{validators:[[N,H(X,"priority_id")]],required:!0},category_id:{validators:[[G(N),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(X,"category_id")]]},description:{validators:[[G(C(3,1e3)),Z(X,"description",3,1e3)]]},due_date_time:{validators:[[G((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${X} "due_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[G(Q),V(X,"deleted")]]},completed:{validators:[[G(Q),V(X,"completed")]]}},te=e=>P(e,ee,Y,X);function ae(e){const{task_id:t,title:a,priority_id:n,category_id:s,description:r,due_date_time:i,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:n,category_id:s,description:r,due_date_time:i,deleted:o,completed:c}}const ne={task_id:{validators:[[N,H(X,"task_id")]],required:!0},...ee},se=e=>P(e,ne,ae,X);function re(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:o,status:a})}class ie{constructor(e,t){this.type=e,this.data=t}}async function oe(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}async function ce(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=te(t);if(!a.error){const n=a.result;if(!e.priorities.find((e=>e.priority_id===n.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(!e.categories.find((e=>e.category_id===n.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}};const s=e.tasks.at(-1)?.task_id||0,r={...n,task_id:s+1};return e.tasks.push(r),{result:r}}return a}(a,s);if(r.result){const t=r.result;return await k(a),await oe(e.clientId,new ie("create_task",t)),re(n,t)}return O(n,r.error.message,r.error.data)}async function de(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=se(t);if(a.result){const n=a.result,s=e.tasks.findIndex((e=>e.task_id===n.task_id));return-1===s?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===n.priority_id))?e.categories.find((e=>e.category_id===n.category_id))?(e.tasks[s]=n,{result:n}):{error:{message:"Не известный идентификатор категории",data:t}}:{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,s);if(r.result){const t=r.result;return await k(a),await oe(e.clientId,new ie("update_task",t)),re(n,t)}return O(n,r.error.message,r.error.data)}function ue(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),n=Object.keys(t);return a.length===n.length&&a.every((a=>n.includes(a)&&ue(e[a],t[a])))}async function le(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=se(t);if(a.result){const n=a.result,s=e.tasks.findIndex((e=>ue(ae(e),ae(n))));return-1===s?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(s,1),{result:n})}return a}(a,s);if(r.result){const t=r.result;return await k(a),await oe(e.clientId,new ie("delete_task",t)),re(n,t)}return O(n,r.error.message,r.error.data)}async function fe(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=J(t);if(a.result){const n=a.result,s=e.categories.find((e=>e.category_name===n.category_name));if(s)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===n.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const r=e.categories.at(-1)?.category_id||0,i={...n,category_id:r+1};return e.categories.push(i),{result:i}}return a}(a,s);if(r.result){const t=r.result;return await k(a),await oe(e.clientId,new ie("create_category",t)),re(n,t)}return O(n,r.error.message,r.error.data)}async function ge(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=z(t);if(a.result){const n=a.result;let s=e.categories.findIndex((e=>e.category_id===n.category_id));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===n.category_name&&e.category_id!==n.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===n.icon_id))?(s=e.categories.findIndex((e=>e.category_id===n.category_id)),e.categories[s]=n,{result:n}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,s);if(r.result){const t=r.result;return k(a),await oe(e.clientId,new ie("update_category",t)),re(n,t)}return O(n,r.error.message,r.error.data)}async function ye(e){const{request:t}=e,a=b(),{id:n,params:s}=await t.json(),r=await async function(e,t){const a=z(t);if(a.result){const n=a.result,s=e.categories.findIndex((e=>ue(e,n)));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===n.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(s,1),{result:n})}return a}(a,s);if(r.result){const t=r.result;return k(a),await oe(e.clientId,new ie("delete_category",t)),re(n,t)}return O(n,r.error.message,r.error.data)}async function pe(e,t){switch(t){case i:return async function(e){const{request:t}=e,a=await q(),n=t.headers.get("x-request-id");return new Response(JSON.stringify({id:n,result:a}),{headers:o,status:200})}(e);case d:return fe(e);case u:return ge(e);case l:return ye(e);case f:return ce(e);case g:return de(e);case y:return le(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||U();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:o,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:o,status:200})}}e.id=Date.now(),e.VERSION="1.0.0",e.assets=R,e.isRepearing=!1,e.logger=T,e.onerror=E,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,s=function(e){const{pathname:t}=new URL(e);return t.startsWith(r)?t.slice(r.length):t}(a.url);switch(a.method){case"GET":return async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(s.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(s)}finally{e.isRepearing=!1}}}(),void await async function(t,a){if("document"!==t.request.destination||a!==$)e.assets.includes(a)&&t.respondWith(L(0,t.request.url,a));else{const a=e.assets.find((e=>e.startsWith(`${$}offline.`)&&e.endsWith(".html")))||"";t.respondWith(L(0,a,a))}}(t,s);case"POST":{const e=()=>pe(t,s);return void await async function(e,t,a){if(p.includes(t)){const e=b();e.icons&&0===e.icons.length&&await q()}e.respondWith(a())}(t,s,e)}default:t.respondWith(O(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>!a.includes(e)));e.loadedAssets=s,s.length>0&&await t.addAll(s)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(S()),t.waitUntil(e.clients.claim())}))}();