!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var n=a.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}();const e=self,a=200,n=206,r="assets",i="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",p="create_task",g="update_task",y="delete_task",m=[u,l,f,p,g,y];const _="tasks",h="kv-storage";async function w(t){if(t.icons&&t.icons.length>0){let e;const a=JSON.stringify(t),n=await caches.open(h),r=await n.match(_);void 0!==r&&(e=await r.text()),void 0!==r&&e===a||await n.put(_,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function b(){return k}async function v(t){k=t,await w(t)}function x(t){const e=new Date;return e.setDate(e.getDate()+t),e.toISOString()}const q={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:x(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(t){const e=new Date;return e.setMinutes(e.getMinutes()+t),e.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:x(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function T(){let t=b();const e=await caches.open(h),a=await e.match(_);if(t.icons&&0===t.icons.length){if(void 0!==a){const e=await a.json();if(e)return t=e,await v(t),t}if(t.icons&&0===t.icons.length)return await v(q),q}return a||await w(t),t}async function S(){await async function(){const t=await caches.open(r);let a=(await t.keys()).map((t=>new URL(t.url).pathname));const n=a.filter((t=>!e.assets.includes(t)));n.length>0&&await Promise.all(n.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const i=e.assets.filter((t=>!a.includes(t)));i.length>0&&await t.addAll(i)}(),await T(),await async function(){e.clients.matchAll().then((t=>{t.forEach((t=>t.postMessage({type:d})))}))}()}const j=()=>{};let $=new Proxy({},{get:()=>j});const I=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.6333418cec878cca8d69.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.975624607a4350da8bf0.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.a45351eca2429dd0a70e.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/npms.08b9a06eb5c596b17224.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.254799bea7374f7e63a7.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.2f157314e5da1bc3c97a335d75e64f38.webmanifest","/my-tasks/offline.fc812b98a272de92106f55546de4e3d1.html"];function O(t){}function R(t,e,a){return new Response(JSON.stringify({id:t,error:{code:500,message:e,data:a}}),{headers:c,status:200})}function W(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const A="/my-tasks/",L=t=>t.startsWith(`${A}offline.`)&&t.endsWith(".html"),E="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-ZbiWq4wJZC6uxAz4kIquAHNBsivHh6aZBePQBKuX1KvsWe0PH9Q37UVZP1-iv60W' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-6qhGZ3wnlBT7U6SL-qb-J0mXI9CMccOSc3tn7uJzh7Ctnz8z_2gMYg0QnlY3kIpv' 'sha384-kiQ3e6TAkF9YxFukcXTUTSkYAk3mIVd0rFfaUlZM-wSw8HeckgaLDDbrrBDxpIvu' 'sha384-ZxdIH9rOmzI9mKiY3IK3t9yowhdp3UOXhrAl5nCJMpWKAC3ey3xvLkWH8ThnPHJT' 'sha384--M3ZiyffaW5xORR3GqLpqA6oqJfmFykTcKVj90_PgGxQmEs6jcqlQ3ZvMYdDUq8l' 'sha384-CcVxqtH6sLk9JcCjr8c79HAP1ovPnFRXgv4pM-5DLehOkAub3GWWnOVHTtpIcYTr'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function P(t,s,o){const c=await caches.open(r),d=await c.match(s);if(d){if(L(s)&&!d.headers.get(i)){const t=d.clone(),e=new Headers(d.headers);e.set(i,E);try{let a=await d.text();W()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const n=new Response(a,{status:t.status,statusText:t.statusText,headers:e});return await c.put(s,n.clone()),n}catch(t){return d}}return d}return async function(t,s){let o;const c=await fetch(t);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===n){const t=await c.blob(),e=await t.arrayBuffer();o=new Response(e,{headers:d})}else{let e;L(t)?(e=await c.text(),d.set(i,E),W()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===a;if(!1===u)return c;u&&e.assets.includes(s)&&(await caches.open(r)).put(t,o.clone());return o}(s,o)}function U(t){void 0===t&&(t=Date.now());const e=new Uint8Array(10);!function(t){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(t);if("function"==typeof require){const e=require("crypto").randomBytes(t.length);return t.set(e),t}throw new Error("Secure random number generation is not supported in this environment.")}(e);const a=t.toString(16).padStart(12,"0"),n=function(t){let e="";for(let a=0;a<t.length;a++){const n=t[a].toString(16);e+=2===n.length?n:"0"+n}return e}(e);return`${a.substring(0,8)}-${a.substring(8)}-${n.substring(0,4)}-${n.substring(4,8)}-${n.substring(8)}`}function N(t){return"number"==typeof t&&Number.isInteger(t)}const C=(t,e)=>`Свойство сущности ${t} "${e}" должно быть целым числом`;function H(t,e){return void 0===e&&(e=65536),a=>"string"==typeof a&&a.length>=t&&a.length<=e}const J=(t,e,a,n)=>`Свойство сущности ${t} "${e}" должно быть строкой длиной от ${a} до ${n} символов`;const Z=(t,e,a,n)=>{if(!1===function(t){return"object"==typeof t&&null!==t}(t))return{error:{message:`Сущность "${n}" должна быть объектом`,data:t}};const r=t,i=Object.keys(e);for(let a=0;a<i.length;a++){const s=i[a],o=e[s];if(!0===o.required&&void 0===r[s])return{error:{message:`Свойство "${s}" сущности ${n} отсутствует`,data:t}};for(let e=0;e<o.validators.length;e++){const a=o.validators[e];if(!1===a[0](r[s]))return{error:{message:a[1],data:t}}}}return{result:a(r)}};function M(t){const{icon_id:e,category_name:a}=t||{};return{icon_id:e,category_name:a}}const D="Категория",B={icon_id:{validators:[[N,C(D,"icon_id")]],required:!0},category_name:{validators:[[H(3,20),J(D,"category_name",3,20)]],required:!0}},K=t=>Z(t,B,M,D);function G(t){const{category_id:e,icon_id:a,category_name:n}=t||{};return{category_id:e,icon_id:a,category_name:n}}const Q={category_id:{validators:[[N,C(D,"category_id")]],required:!0},...B},V=t=>Z(t,Q,G,D);function Y(t){return e=>void 0===e||t(e)}function z(t){return"boolean"==typeof t}function X(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или boolean`}function F(t){const{title:e,priority_id:a,category_id:n,description:r,expire_date_time:i,deleted:s,completed:o}=t||{};return{title:e,priority_id:a,category_id:n,description:r,expire_date_time:i,deleted:s,completed:o}}const tt="Задача",et={title:{validators:[[H(3,100),J(tt,"title",3,100)]],required:!0},priority_id:{validators:[[N,C(tt,"priority_id")]],required:!0},category_id:{validators:[[Y(N),function(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или целым числом`}(tt,"category_id")]]},description:{validators:[[Y(H(3,1e3)),J(tt,"description",3,1e3)]]},expire_date_time:{validators:[[Y((function(t){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(t)})),`Свойство сущности ${tt} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[Y(z),X(tt,"deleted")]]},completed:{validators:[[Y(z),X(tt,"completed")]]}},at=t=>Z(t,et,F,tt);function nt(t){const{task_id:e,title:a,priority_id:n,category_id:r,description:i,expire_date_time:s,deleted:o,completed:c}=t||{};return{task_id:e,title:a,priority_id:n,category_id:r,description:i,expire_date_time:s,deleted:o,completed:c}}const rt={task_id:{validators:[[N,C(tt,"task_id")]],required:!0},...et},it=t=>Z(t,rt,nt,tt);t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;function st(t){return"string"==typeof t}function ot(t,e){return`Свойство сущности ${t} "${e}" должно быть строкой`}function ct(t){return e=>t.includes(e)}function dt(t,e){return`Свойство сущности ${t} "${e}" должно быть значением из списка`}const ut="others",lt="settings",ft="Настройки",pt="about",gt="О Приложении",yt="store_state",mt="Разработчикам",_t=[lt,yt,pt],ht=[ft,gt,mt];const wt="Навигационный фильтр",kt=(ot(wt,"title"),ct(_t),dt(wt,"title"),ot(wt,"title"),ct(ht),dt(wt,"title"),ot(wt,"type"),"filter"),bt="inbox",vt="Черновики",xt="trash",qt="Корзина",Tt="expired",St="Просроченные",jt="completed",$t="Завершенные",It=[bt,Tt,jt,xt],Ot=[vt,qt,St,$t];const Rt="Навигационный фильтр",Wt=(ot(Rt,"title"),ct(It),dt(Rt,"title"),ot(Rt,"title"),ct(Ot),dt(Rt,"title"),ot(Rt,"type"),"calendar");const At="Навигационный фильтр",Lt=(C(At,"key"),ot(At,"type"),"category");const Et="Навигационный фильтр";C(Et,"key"),ot(Et,"type");function Pt(t,e,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:t,result:e}),{headers:c,status:a})}class Ut{constructor(t,e){this.type=t,this.data=e}}async function Nt(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}async function Ct(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=at(e);if(!a.error){const n=a.result;if(!t.priorities.find((t=>t.priority_id===n.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:e}};if(!t.categories.find((t=>t.category_id===n.category_id)))return{error:{message:"Не известный идентификатор категории",data:e}};const r=t.tasks.at(-1)?.task_id||0,i={...n,task_id:r+1};return t.tasks.push(i),{result:i}}return a}(a,r);if(i.result){const e=i.result;return await v(a),await Nt(t.clientId,new Ut("create_task",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}async function Ht(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=it(e);if(a.result){const n=a.result,r=t.tasks.findIndex((t=>t.task_id===n.task_id));return-1===r?{error:{message:"Задача не найдена",data:e}}:t.priorities.find((t=>t.priority_id===n.priority_id))?t.categories.find((t=>t.category_id===n.category_id))?(t.tasks[r]=n,{result:n}):{error:{message:"Не известный идентификатор категории",data:e}}:{error:{message:"Не известный идентификатор приоритета",data:e}}}return a}(a,r);if(i.result){const e=i.result;return await v(a),await Nt(t.clientId,new Ut("update_task",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}function Jt(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const a=Object.keys(t),n=Object.keys(e);return a.length===n.length&&a.every((a=>n.includes(a)&&Jt(t[a],e[a])))}async function Zt(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=it(e);if(a.result){const n=a.result,r=t.tasks.findIndex((t=>Jt(nt(t),nt(n))));return-1===r?{error:{message:"Задача не найдена",data:e}}:(t.tasks.splice(r,1),{result:n})}return a}(a,r);if(i.result){const e=i.result;return await v(a),await Nt(t.clientId,new Ut("delete_task",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}async function Mt(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=K(e);if(a.result){const n=a.result,r=t.categories.find((t=>t.category_name===n.category_name));if(r)return{error:{message:"Категория с таким именем уже существует",data:e}};if(!t.icons.find((t=>t.icon_id===n.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:e}};const i=t.categories.at(-1)?.category_id||0,s={...n,category_id:i+1};return t.categories.push(s),{result:s}}return a}(a,r);if(i.result){const e=i.result;return await v(a),await Nt(t.clientId,new Ut("create_category",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}async function Dt(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=V(e);if(a.result){const n=a.result;let r=t.categories.findIndex((t=>t.category_id===n.category_id));return-1===r?{error:{message:"Категория не найдена",data:e}}:t.categories.find((t=>t.category_name===n.category_name&&t.category_id!==n.category_id))?{error:{message:"Категория с таким именем уже существует",data:e}}:t.icons.find((t=>t.icon_id===n.icon_id))?(r=t.categories.findIndex((t=>t.category_id===n.category_id)),t.categories[r]=n,{result:n}):{error:{message:"Не известный идентификатор иконки",data:e}}}return a}(a,r);if(i.result){const e=i.result;return v(a),await Nt(t.clientId,new Ut("update_category",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}async function Bt(t){const{request:e}=t,a=b(),{id:n,params:r}=await e.json(),i=await async function(t,e){const a=V(e);if(a.result){const n=a.result,r=t.categories.findIndex((t=>Jt(t,n)));return-1===r?{error:{message:"Категория не найдена",data:e}}:t.tasks.find((t=>t.category_id===n.category_id))?{error:{message:"Категория используется в задачах",data:e}}:(t.categories.splice(r,1),{result:n})}return a}(a,r);if(i.result){const e=i.result;return v(a),await Nt(t.clientId,new Ut("delete_category",e)),Pt(n,e)}return R(n,i.error.message,i.error.data)}async function Kt(t,e){switch(e){case o:return async function(t){const{request:e}=t,a=await T(),n=e.headers.get("x-request-id");return new Response(JSON.stringify({id:n,result:a}),{headers:c,status:200})}(t);case u:return Mt(t);case l:return Dt(t);case f:return Bt(t);case p:return Ct(t);case g:return Ht(t);case y:return Zt(t);case"/log/info":case"/log/warn":case"/log/error":return async function(t){const{request:e}=t,a=(await e.json()).id||U();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(t);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}e.id=Date.now(),e.VERSION="1.0.0",e.assets=I,e.isRepearing=!1,e.logger=$,e.onerror=O,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,n=function(t){const{pathname:e}=new URL(t);return e.startsWith(s)?e.slice(s.length):e}(a.url);switch(a.method){case"GET":return async function(){const t=await caches.open(r),a=(await t.keys()).map((t=>new URL(t.url).pathname)),n=e.assets.filter((t=>!a.includes(t)&&!t.startsWith("/offline.")));if(n.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(n)}finally{e.isRepearing=!1}}}(),void await async function(t,a){if("document"!==t.request.destination||a!==A)e.assets.includes(a)&&t.respondWith(P(0,t.request.url,a));else{const a=e.assets.find((t=>t.startsWith(`${A}offline.`)&&t.endsWith(".html")))||"";t.respondWith(P(0,a,a))}}(t,n);case"POST":{const e=()=>Kt(t,n);return void await async function(t,e,a){if(m.includes(e)){const t=b();t.icons&&0===t.icons.length&&await T()}t.respondWith(a())}(t,n,e)}default:t.respondWith(R(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(r),a=(await t.keys()).map((t=>new URL(t.url).pathname)),n=e.assets.filter((t=>!a.includes(t)));e.loadedAssets=n,n.length>0&&await t.addAll(n)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(S()),t.waitUntil(e.clients.claim())}))}();