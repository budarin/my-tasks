!function(){"use strict";const e=self,t=200,a=206,n="assets",r="Content-Security-Policy";const i="/api/",s="get_tasks",o={"Content-Type":"application/json; charset=utf-8"},c="RELOAD_PAGE",d="create_category",u="update_category",l="delete_category",f="create_task",g="update_task",y="delete_task",p=[d,u,l,f,g,y];const _="tasks",m="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),n=await caches.open(m),r=await n.match(_);void 0!==r&&(t=await r.text()),void 0!==r&&t===a||await n.put(_,new Response(a,{headers:new Headers({...o,"Content-Length":String(a.length)})}))}}let h={tasks:[],categories:[],priorities:[],icons:[]};function k(){return h}async function b(e){h=e,await w(e)}function v(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const T={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",due_date_time:v(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",due_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",due_date_time:v(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function S(){let e=k();const t=await caches.open(m),a=await t.match(_);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await b(e),e}if(e.icons&&0===e.icons.length)return await b(T),T}return a||await w(e),e}async function x(){await async function(){const t=await caches.open(n);let a=(await t.keys()).map((e=>new URL(e.url).pathname));const r=a.filter((t=>!e.assets.includes(t)));r.length>0&&await Promise.all(r.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const i=e.assets.filter((e=>!a.includes(e)));i.length>0&&await t.addAll(i)}(),await S(),await async function(){e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:c})))}))}()}const j=()=>{};let q=new Proxy({},{get:()=>j});const O=["/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.5da40d4005f179320438.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/budarin.4a1954bad283653e8db0.js","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/main.a4bb1f4330e7e8039463.js","/my-tasks/npms.03b680477565bc10ec71.js","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.faf9429db4eb8507db03.js","/my-tasks/todo.cd3261e56180c2c0e031.svg","/my-tasks/manifest.72fd422207cecac5111b2337c50afb7b.webmanifest","/my-tasks/offline.4fc6df597accf3f78ef92e25e3296f37.html"];function W(e){}function R(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:o,status:200})}function I(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const E="/my-tasks/",$=e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html"),A="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-awspsacWvBAq6mulvxlzzB61MgSTDeWWJ6et7fHy3afMe0jGHabj3FVrc00CwO0C' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-xnWWkOTSvPAuspyBC92de_b4xZpLVwU4ZWtyeBuEHz3DqExMpCkH-aykTvk1EfrZ' 'sha384-Mfj7z1y8UlqC0KTZKt2tgd50FSX2WPVjNvkhg3wr28ugk0LSK-hIiY-ZQ8r4JJJx' 'sha384-mKvTpL5idEXA_pmfTavsSTwY_Uah7A3pfb4TYz__AZS7QGb_hHaECOKTmuiKgwYB' 'sha384-vVOHsiIWZrD8gyUcl-IG36HpxIAgoVsnZeahfF0yYb4cK0zEVF9TV3WoneNR9_TL' 'sha384-uetLpBNyvQJSxE1ORAGrOBsWl3Agb73fe0lqPhbSiz6BT1TV1Qxm9h288IfV-Fzb' 'unsafe-inline'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function L(i,s,o){const c=await caches.open(n),d=await c.match(s);if(d){if($(s)&&!d.headers.get(r)){const e=d.clone(),t=new Headers(d.headers);t.set(r,A);try{let a=await d.text();I()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const n=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(s,n.clone()),n}catch(e){return d}}return d}return async function(i,s){let o;const c=await fetch(i);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===a){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let e;$(i)?(e=await c.text(),d.set(r,A),I()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===t;if(!1===u)return c;u&&e.assets.includes(s)&&(await caches.open(n)).put(i,o.clone());return o}(s,o)}function N(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),n=function(e){let t="";for(let a=0;a<e.length;a++){const n=e[a].toString(16);t+=2===n.length?n:"0"+n}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${n.substring(0,4)}-${n.substring(4,8)}-${n.substring(8)}`}function U(e){return"number"==typeof e&&Number.isInteger(e)}const B=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function C(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const Z=(e,t,a,n)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${n} символов`;const J=(e,t,a,n)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${n}" должна быть объектом`,data:e}};const r=e,i=Object.keys(t);for(let a=0;a<i.length;a++){const s=i[a],o=t[s];if(!0===o.required&&void 0===r[s])return{error:{message:`Свойство "${s}" сущности ${n} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](r[s]))return{error:{message:a[1],data:e}}}}return{result:a(r)}};function K(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const P="Категория",V={icon_id:{validators:[[U,B(P,"icon_id")]],required:!0},category_name:{validators:[[C(3,20),Z(P,"category_name",3,20)]],required:!0}},H=e=>J(e,V,K,P);function z(e){const{category_id:t,icon_id:a,category_name:n}=e||{};return{category_id:t,icon_id:a,category_name:n}}const D={category_id:{validators:[[U,B(P,"category_id")]],required:!0},...V},M=e=>J(e,D,z,P);function G(e){return t=>void 0===t||e(t)}function Q(e){return"boolean"==typeof e}function Y(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function F(e){const{title:t,priority_id:a,category_id:n,description:r,due_date_time:i,deleted:s,completed:o}=e||{};return{title:t,priority_id:a,category_id:n,description:r,due_date_time:i,deleted:s,completed:o}}const X="Задача",ee={title:{validators:[[C(3,100),Z(X,"title",3,100)]],required:!0},priority_id:{validators:[[U,B(X,"priority_id")]],required:!0},category_id:{validators:[[G(U),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(X,"category_id")]]},description:{validators:[[G(C(3,1e3)),Z(X,"description",3,1e3)]]},due_date_time:{validators:[[G((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${X} "due_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[G(Q),Y(X,"deleted")]]},completed:{validators:[[G(Q),Y(X,"completed")]]}},te=e=>J(e,ee,F,X);function ae(e){const{task_id:t,title:a,priority_id:n,category_id:r,description:i,due_date_time:s,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:n,category_id:r,description:i,due_date_time:s,deleted:o,completed:c}}const ne={task_id:{validators:[[U,B(X,"task_id")]],required:!0},...ee},re=e=>J(e,ne,ae,X);function ie(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:o,status:a})}class se{constructor(e,t){this.type=e,this.data=t}}async function oe(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}async function ce(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=te(t);if(!a.error){const n=a.result;if(!e.priorities.find((e=>e.priority_id===n.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(!e.categories.find((e=>e.category_id===n.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}};const r=e.tasks.at(-1)?.task_id||0,i={...n,task_id:r+1};return e.tasks.push(i),{result:i}}return a}(a,r);if(i.result){const t=i.result;return await b(a),await oe(e.clientId,new se("create_task",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}async function de(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=re(t);if(a.result){const n=a.result,r=e.tasks.findIndex((e=>e.task_id===n.task_id));return-1===r?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===n.priority_id))?e.categories.find((e=>e.category_id===n.category_id))?(e.tasks[r]=n,{result:n}):{error:{message:"Не известный идентификатор категории",data:t}}:{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,r);if(i.result){const t=i.result;return await b(a),await oe(e.clientId,new se("update_task",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}function ue(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),n=Object.keys(t);return a.length===n.length&&a.every((a=>n.includes(a)&&ue(e[a],t[a])))}async function le(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=re(t);if(a.result){const n=a.result,r=e.tasks.findIndex((e=>ue(ae(e),ae(n))));return-1===r?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(r,1),{result:n})}return a}(a,r);if(i.result){const t=i.result;return await b(a),await oe(e.clientId,new se("delete_task",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}async function fe(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=H(t);if(a.result){const n=a.result,r=e.categories.find((e=>e.category_name===n.category_name));if(r)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===n.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const i=e.categories.at(-1)?.category_id||0,s={...n,category_id:i+1};return e.categories.push(s),{result:s}}return a}(a,r);if(i.result){const t=i.result;return await b(a),await oe(e.clientId,new se("create_category",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}async function ge(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=M(t);if(a.result){const n=a.result;let r=e.categories.findIndex((e=>e.category_id===n.category_id));return-1===r?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===n.category_name&&e.category_id!==n.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===n.icon_id))?(r=e.categories.findIndex((e=>e.category_id===n.category_id)),e.categories[r]=n,{result:n}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,r);if(i.result){const t=i.result;return b(a),await oe(e.clientId,new se("update_category",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}async function ye(e){const{request:t}=e,a=k(),{id:n,params:r}=await t.json(),i=await async function(e,t){const a=M(t);if(a.result){const n=a.result,r=e.categories.findIndex((e=>ue(e,n)));return-1===r?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===n.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(r,1),{result:n})}return a}(a,r);if(i.result){const t=i.result;return b(a),await oe(e.clientId,new se("delete_category",t)),ie(n,t)}return R(n,i.error.message,i.error.data)}async function pe(e,t){switch(t){case s:return async function(e){const{request:t}=e,a=await S(),n=t.headers.get("x-request-id");return new Response(JSON.stringify({id:n,result:a}),{headers:o,status:200})}(e);case d:return fe(e);case u:return ge(e);case l:return ye(e);case f:return ce(e);case g:return de(e);case y:return le(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||N();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:o,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:o,status:200})}}e.id=Date.now(),e.VERSION="1.0.0",e.assets=O,e.isRepearing=!1,e.logger=q,e.onerror=W,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(a.url);switch(a.method){case"GET":return async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(r)}finally{e.isRepearing=!1}}}(),void await async function(t,a){if("document"!==t.request.destination||a!==E)e.assets.includes(a)&&t.respondWith(L(0,t.request.url,a));else{const a=e.assets.find((e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html")))||"";t.respondWith(L(0,a,a))}}(t,r);case"POST":{const e=()=>pe(t,r);return void await async function(e,t,a){if(p.includes(t)){const e=k();e.icons&&0===e.icons.length&&await S()}e.respondWith(a())}(t,r,e)}default:t.respondWith(R(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(n),a=(await t.keys()).map((e=>new URL(e.url).pathname)),r=e.assets.filter((e=>!a.includes(e)));e.loadedAssets=r,r.length>0&&await t.addAll(r)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(x()),t.waitUntil(e.clients.claim())}))}();