!function(){"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var r=a.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}();const e=self,a=200,r=206,n="assets",i="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",p="create_task",g="update_task",y="delete_task",m=[u,l,f,p,g,y];const _="tasks",h="kv-storage";async function w(t){if(t.icons&&t.icons.length>0){let e;const a=JSON.stringify(t),r=await caches.open(h),n=await r.match(_);void 0!==n&&(e=await n.text()),void 0!==n&&e===a||await r.put(_,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let b={tasks:[],categories:[],priorities:[],icons:[]};function k(){return b}async function v(t){b=t,await w(t)}function x(t){const e=new Date;return e.setDate(e.getDate()+t),e.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:x(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(t){const e=new Date;return e.setMinutes(e.getMinutes()+t),e.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:x(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function I(){let t=k();const e=await caches.open(h),a=await e.match(_);if(t.icons&&0===t.icons.length){if(void 0!==a){const e=await a.json();if(e)return t=e,await v(t),t}if(t.icons&&0===t.icons.length)return await v(j),j}return a||await w(t),t}async function S(){await async function(){const t=await caches.open(n);let a=(await t.keys()).map((t=>new URL(t.url).pathname));const r=a.filter((t=>!e.assets.includes(t)));r.length>0&&await Promise.all(r.map((async e=>{await t.delete(e),a=a.filter((t=>t!==e))})));const i=e.assets.filter((t=>!a.includes(t)));i.length>0&&await t.addAll(i)}(),await I(),await async function(){e.clients.matchAll().then((t=>{t.forEach((t=>t.postMessage({type:d})))}))}()}const R=()=>{};let T=new Proxy({},{get:()=>R});const $=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.64cdf68658398a163484.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.975624607a4350da8bf0.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.a9cadf80b4fae9fb1dc7.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/npms.08b9a06eb5c596b17224.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/roboto-regular-webfont.7c365dca831ccd4122ac.woff2","/my-tasks/runtime.61701fa5320d7b7e09d6.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.2f157314e5da1bc3c97a335d75e64f38.webmanifest","/my-tasks/offline.36eccf772be4fba3d02c45cfaf48123b.html"];function q(t){}function O(t,e,a){return new Response(JSON.stringify({id:t,error:{code:500,message:e,data:a}}),{headers:c,status:200})}function A(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const W="/my-tasks/",L=t=>t.startsWith(`${W}offline.`)&&t.endsWith(".html"),U="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-ZbiWq4wJZC6uxAz4kIquAHNBsivHh6aZBePQBKuX1KvsWe0PH9Q37UVZP1-iv60W' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-RLrn-iAiVwtn2mIBzWG445t9RYnl1ADwf53ZhfGAwJ4zVm_uzD3VNUoS7Uqvogn3' 'sha384-kiQ3e6TAkF9YxFukcXTUTSkYAk3mIVd0rFfaUlZM-wSw8HeckgaLDDbrrBDxpIvu' 'sha384-ZxdIH9rOmzI9mKiY3IK3t9yowhdp3UOXhrAl5nCJMpWKAC3ey3xvLkWH8ThnPHJT' 'sha384-tFgFXVn-QJUujLrkzug7jRI5jF7Og-uDJ8pijUAvmeOcX1eod0IujR1XcopkRbcS' 'sha384-GYZ25FRrg5I2LKXWIMDvH3K6hcdKQylkIYQGN6cx6hh0-E6JeMiwkwpOKhzxU6_T'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt default;";async function E(t,s,o){const c=await caches.open(n),d=await c.match(s);if(d){if(L(s)&&!d.headers.get(i)){const t=d.clone(),e=new Headers(d.headers);e.set(i,U);try{let a=await d.text();A()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:t.status,statusText:t.statusText,headers:e});return await c.put(s,r.clone()),r}catch(t){return d}}return d}return async function(t,s){let o;const c=await fetch(t);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const t=await c.blob(),e=await t.arrayBuffer();o=new Response(e,{headers:d})}else{let e;L(t)?(e=await c.text(),d.set(i,U),A()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await c.blob(),o=new Response(e,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===a;if(!1===u)return c;u&&e.assets.includes(s)&&(await caches.open(n)).put(t,o.clone());return o}(s,o)}function N(t){void 0===t&&(t=Date.now());const e=new Uint8Array(10);!function(t){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(t);if("function"==typeof require){const e=require("crypto").randomBytes(t.length);return t.set(e),t}throw new Error("Secure random number generation is not supported in this environment.")}(e);const a=t.toString(16).padStart(12,"0"),r=function(t){let e="";for(let a=0;a<t.length;a++){const r=t[a].toString(16);e+=2===r.length?r:"0"+r}return e}(e);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function D(t){return"number"==typeof t&&Number.isInteger(t)}const J=(t,e)=>`Свойство сущности ${t} "${e}" должно быть целым числом`;function K(t,e){return void 0===e&&(e=65536),a=>"string"==typeof a&&a.length>=t&&a.length<=e}const P=(t,e,a,r)=>`Свойство сущности ${t} "${e}" должно быть строкой длиной от ${a} до ${r} символов`;const Z=(t,e,a,r)=>{if(!1===function(t){return"object"==typeof t&&null!==t}(t))return{error:{message:`Сущность "${r}" должна быть объектом`,data:t}};const n=t,i=Object.keys(e);for(let a=0;a<i.length;a++){const s=i[a],o=e[s];if(!0===o.required&&void 0===n[s])return{error:{message:`Свойство "${s}" сущности ${r} отсутствует`,data:t}};for(let e=0;e<o.validators.length;e++){const a=o.validators[e];if(!1===a[0](n[s]))return{error:{message:a[1],data:t}}}}return{result:a(n)}};function H(t){const{icon_id:e,category_name:a}=t||{};return{icon_id:e,category_name:a}}const B="Категория",C={icon_id:{validators:[[D,J(B,"icon_id")]],required:!0},category_name:{validators:[[K(3,20),P(B,"category_name",3,20)]],required:!0}},M=t=>Z(t,C,H,B);function z(t){const{category_id:e,icon_id:a,category_name:r}=t||{};return{category_id:e,icon_id:a,category_name:r}}const V={category_id:{validators:[[D,J(B,"category_id")]],required:!0},...C},X=t=>Z(t,V,z,B);function F(t){return e=>void 0===e||t(e)}function G(t){return"boolean"==typeof t}function Q(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или boolean`}function Y(t){const{title:e,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}=t||{};return{title:e,priority_id:a,category_id:r,description:n,expire_date_time:i,deleted:s,completed:o}}const tt="Задача",et={title:{validators:[[K(3,100),P(tt,"title",3,100)]],required:!0},priority_id:{validators:[[D,J(tt,"priority_id")]],required:!0},category_id:{validators:[[F(D),function(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или целым числом`}(tt,"category_id")]]},description:{validators:[[F(K(3,1e3)),P(tt,"description",3,1e3)]]},expire_date_time:{validators:[[F((function(t){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(t)})),`Свойство сущности ${tt} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[F(G),Q(tt,"deleted")]]},completed:{validators:[[F(G),Q(tt,"completed")]]}},at=t=>Z(t,et,Y,tt);function rt(t){const{task_id:e,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}=t||{};return{task_id:e,title:a,priority_id:r,category_id:n,description:i,expire_date_time:s,deleted:o,completed:c}}const nt={task_id:{validators:[[D,J(tt,"task_id")]],required:!0},...et},it=t=>Z(t,nt,rt,tt);t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;function st(t){return"string"==typeof t}function ot(t,e){return`Свойство сущности ${t} "${e}" должно быть строкой`}function ct(t){return e=>t.includes(e)}function dt(t,e){return`Свойство сущности ${t} "${e}" должно быть значением из списка`}const ut="others",lt="settings",ft="Настройки",pt="about",gt="О Приложении",yt="store_state",mt="Разработчикам",_t=[lt,yt,pt],ht=[ft,gt,mt];const wt="Навигационный фильтр",bt=(ot(wt,"title"),ct(_t),dt(wt,"title"),ot(wt,"title"),ct(ht),dt(wt,"title"),ot(wt,"type"),"filter"),kt="inbox",vt="Черновики",xt="trash",jt="Корзина",It="expired",St="Просроченные",Rt="completed",Tt="Завершенные",$t=[kt,It,Rt,xt],qt=[vt,jt,St,Tt];const Ot="Навигационный фильтр",At=(ot(Ot,"title"),ct($t),dt(Ot,"title"),ot(Ot,"title"),ct(qt),dt(Ot,"title"),ot(Ot,"type"),"calendar");const Wt="Навигационный фильтр",Lt=(J(Wt,"key"),ot(Wt,"type"),"category");const Ut="Навигационный фильтр";J(Ut,"key"),ot(Ut,"type");function Et(t,e,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:t,result:e}),{headers:c,status:a})}class Nt{constructor(t,e){this.type=t,this.data=e}}async function Dt(t,a){e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(a)}))}))}async function Jt(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=at(e);if(!a.error){const r=a.result;if(!t.priorities.find((t=>t.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:e}};if(!t.categories.find((t=>t.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:e}};const n=t.tasks.at(-1)?.task_id||0,i={...r,task_id:n+1};return t.tasks.push(i),{result:i}}return a}(a,n);if(i.result){const e=i.result;return await v(a),await Dt(t.clientId,new Nt("create_task",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}async function Kt(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=it(e);if(a.result){const r=a.result,n=t.tasks.findIndex((t=>t.task_id===r.task_id));return-1===n?{error:{message:"Задача не найдена",data:e}}:t.priorities.find((t=>t.priority_id===r.priority_id))?t.categories.find((t=>t.category_id===r.category_id))?(t.tasks[n]=r,{result:r}):{error:{message:"Не известный идентификатор категории",data:e}}:{error:{message:"Не известный идентификатор приоритета",data:e}}}return a}(a,n);if(i.result){const e=i.result;return await v(a),await Dt(t.clientId,new Nt("update_task",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}function Pt(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const a=Object.keys(t),r=Object.keys(e);return a.length===r.length&&a.every((a=>r.includes(a)&&Pt(t[a],e[a])))}async function Zt(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=it(e);if(a.result){const r=a.result,n=t.tasks.findIndex((t=>Pt(rt(t),rt(r))));return-1===n?{error:{message:"Задача не найдена",data:e}}:(t.tasks.splice(n,1),{result:r})}return a}(a,n);if(i.result){const e=i.result;return await v(a),await Dt(t.clientId,new Nt("delete_task",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}async function Ht(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=M(e);if(a.result){const r=a.result,n=t.categories.find((t=>t.category_name===r.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:e}};if(!t.icons.find((t=>t.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:e}};const i=t.categories.at(-1)?.category_id||0,s={...r,category_id:i+1};return t.categories.push(s),{result:s}}return a}(a,n);if(i.result){const e=i.result;return await v(a),await Dt(t.clientId,new Nt("create_category",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}async function Bt(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=X(e);if(a.result){const r=a.result;let n=t.categories.findIndex((t=>t.category_id===r.category_id));return-1===n?{error:{message:"Категория не найдена",data:e}}:t.categories.find((t=>t.category_name===r.category_name&&t.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:e}}:t.icons.find((t=>t.icon_id===r.icon_id))?(n=t.categories.findIndex((t=>t.category_id===r.category_id)),t.categories[n]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:e}}}return a}(a,n);if(i.result){const e=i.result;return v(a),await Dt(t.clientId,new Nt("update_category",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}async function Ct(t){const{request:e}=t,a=k(),{id:r,params:n}=await e.json(),i=await async function(t,e){const a=X(e);if(a.result){const r=a.result,n=t.categories.findIndex((t=>Pt(t,r)));return-1===n?{error:{message:"Категория не найдена",data:e}}:t.tasks.find((t=>t.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:e}}:(t.categories.splice(n,1),{result:r})}return a}(a,n);if(i.result){const e=i.result;return v(a),await Dt(t.clientId,new Nt("delete_category",e)),Et(r,e)}return O(r,i.error.message,i.error.data)}async function Mt(t,e){switch(e){case o:return async function(t){const{request:e}=t,a=await I(),r=e.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})}(t);case u:return Ht(t);case l:return Bt(t);case f:return Ct(t);case p:return Jt(t);case g:return Kt(t);case y:return Zt(t);case"/log/info":case"/log/warn":case"/log/error":return async function(t){const{request:e}=t,a=(await e.json()).id||N();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(t);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}e.id=Date.now(),e.VERSION="1.0.0",e.assets=$,e.isRepearing=!1,e.logger=T,e.onerror=q,e.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&e.skipWaiting()})),e.addEventListener("fetch",(async function(t){const a=t.request,r=function(t){const{pathname:e}=new URL(t);return e.startsWith(s)?e.slice(s.length):e}(a.url);switch(a.method){case"GET":return async function(){const t=await caches.open(n),a=(await t.keys()).map((t=>new URL(t.url).pathname)),r=e.assets.filter((t=>!a.includes(t)&&!t.startsWith("/offline.")));if(r.length>0&&!e.isRepearing){e.isRepearing=!0;try{await t.addAll(r)}finally{e.isRepearing=!1}}}(),void await async function(t,a){if("document"!==t.request.destination||a!==W)e.assets.includes(a)&&t.respondWith(E(0,t.request.url,a));else{const a=e.assets.find((t=>t.startsWith(`${W}offline.`)&&t.endsWith(".html")))||"";t.respondWith(E(0,a,a))}}(t,r);case"POST":{const e=()=>Mt(t,r);return void await async function(t,e,a){if(m.includes(e)){const t=k();t.icons&&0===t.icons.length&&await I()}t.respondWith(a())}(t,r,e)}default:t.respondWith(O(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(n),a=(await t.keys()).map((t=>new URL(t.url).pathname)),r=e.assets.filter((t=>!a.includes(t)));e.loadedAssets=r,r.length>0&&await t.addAll(r)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(S()),t.waitUntil(e.clients.claim())}))}();