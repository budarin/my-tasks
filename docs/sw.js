!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();const t=self,a=200,r=206,n="assets",s="Content-Security-Policy";const i="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",f="update_category",l="delete_category",p="create_task",g="update_task",y="delete_task",m="clear_tasks",_="import_tasks";const b="tasks",h="kv-storage";async function w(e){if(e.icons&&e.icons.length>0){let t;const a=JSON.stringify(e),r=await caches.open(h),n=await r.match(b);void 0!==n&&(t=await n.text()),void 0!==n&&t===a||await r.put(b,new Response(a,{headers:new Headers({...c,"Content-Length":String(a.length)})}))}}let k={tasks:[],categories:[],priorities:[],icons:[]};function v(){return k}async function x(e){k=e,await w(e)}function q(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const S={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:q(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:q(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function j(){let e=v();const t=await caches.open(h),a=await t.match(b);if(e.icons&&0===e.icons.length){if(void 0!==a){const t=await a.json();if(t)return e=t,await x(e),e}if(e.icons&&0===e.icons.length)return await x(S),S}return a||await w(e),e}async function $(){await async function(){const e=await caches.open(n);let a=(await e.keys()).map((e=>new URL(e.url).pathname));const r=a.filter((e=>!t.assets.includes(e)));r.length>0&&await Promise.all(r.map((async t=>{await e.delete(t),a=a.filter((e=>e!==t))})));const s=t.assets.filter((e=>!a.includes(e)));s.length>0&&await e.addAll(s)}(),await j(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const R=()=>{};let I=new Proxy({},{get:()=>R});const T=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.ccb6f6eef3a659862511.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.cab89439c5b52c826da9.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.8503cd1d8f4f010b91e0.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.cf11845aa29b430d79d1.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.d42c982a374b25e7adda.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.e321df409f14491a970f45da21f085da.webmanifest","/my-tasks/offline.cffad2059defc3dbaeffb7ea1a1c73c7.html"];function A(e){}function E(e,t,a){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:a}}),{headers:c,status:200})}function W(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const O="/my-tasks/",P=e=>e.startsWith(`${O}offline.`)&&e.endsWith(".html"),U="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-wWJqlmJWfAsZ3cZERs6dR8iUoMddkopAPYVqX27Re0n9P4-Z15vE5ZrhfelZKuDQ' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-GUe0gPQvuqksjEb1HGt5osH0AImW0jgVUYZqb28y0dI0K3RpPRymu4KAj4aD8wcU' 'sha384-aQrLUylDRHo-8fCShU6gMobx9EajPdZSbFp0u4mzoBKkFMvcufNViCmGuESbBUi3' 'sha384-oVv_-cqe9a3IrJ_E1-4nrxP-ugLaSZCNTNqlGadiVAWq2kYZvlBuQWM17zfAXPKl' 'sha384-qSw2giuqI7Zj4uY4FPfJYTf_4VSDrR4ofwC6UYe-WqBNGpAxPbxDEnh15OUbT8WE' 'sha384-ksG7ngvJnZPvEtm8IsPHWtpTdGbHIOV_J2YjGm8JrSBS9S6VU0d3UmFQAbmir7I-'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt lit-html default;";async function N(e,i,o){const c=await caches.open(n),d=await c.match(i);if(d){if(P(i)&&!d.headers.get(s)){const e=d.clone(),t=new Headers(d.headers);t.set(s,U);try{let a=await d.text();W()&&(a=a.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const r=new Response(a,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,r.clone()),r}catch(e){return d}}return d}return async function(e,i){let o;const c=await fetch(e);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===r){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;P(e)?(t=await c.text(),d.set(s,U),W()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===a;if(!1===u)return c;u&&t.assets.includes(i)&&(await caches.open(n)).put(e,o.clone());return o}(i,o)}function L(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const a=e.toString(16).padStart(12,"0"),r=function(e){let t="";for(let a=0;a<e.length;a++){const r=e[a].toString(16);t+=2===r.length?r:"0"+r}return t}(t);return`${a.substring(0,8)}-${a.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}function Z(e){return"number"==typeof e&&Number.isInteger(e)}const J=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function C(e,t){return void 0===t&&(t=65536),a=>"string"==typeof a&&a.length>=e&&a.length<=t}const D=(e,t,a,r)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${a} до ${r} символов`;const G=(e,t,a,r)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${r}" должна быть объектом`,data:e}};const n=e,s=Object.keys(t);for(let a=0;a<s.length;a++){const i=s[a],o=t[i];if(!0===o.required&&void 0===n[i])return{error:{message:`Свойство "${i}" сущности ${r} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const a=o.validators[t];if(!1===a[0](n[i]))return{error:{message:a[1],data:e}}}}return{result:a(n)}};function B(e){const{icon_id:t,category_name:a}=e||{};return{icon_id:t,category_name:a}}const V="Категория",K={icon_id:{validators:[[Z,J(V,"icon_id")]],required:!0},category_name:{validators:[[C(3,20),D(V,"category_name",3,20)]],required:!0}},M=e=>G(e,K,B,V);function H(e){const{category_id:t,icon_id:a,category_name:r}=e||{};return{category_id:t,icon_id:a,category_name:r}}const Y={category_id:{validators:[[Z,J(V,"category_id")]],required:!0},...K},Q=e=>G(e,Y,H,V);function F(e){return t=>void 0===t||e(t)}function z(e){return"boolean"==typeof e}function X(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function ee(e){const{title:t,priority_id:a,category_id:r,description:n,expire_date_time:s,deleted:i,completed:o}=e||{};return{title:t,priority_id:a,category_id:r,description:n,expire_date_time:s,deleted:i,completed:o}}const te="Задача",ae={title:{validators:[[C(3,100),D(te,"title",3,100)]],required:!0},priority_id:{validators:[[Z,J(te,"priority_id")]],required:!0},category_id:{validators:[[F(Z),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(te,"category_id")]]},description:{validators:[[F(C(3,1e3)),D(te,"description",3,1e3)]]},expire_date_time:{validators:[[F((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${te} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[F(z),X(te,"deleted")]]},completed:{validators:[[F(z),X(te,"completed")]]}},re=e=>G(e,ae,ee,te);function ne(e){const{task_id:t,title:a,priority_id:r,category_id:n,description:s,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:t,title:a,priority_id:r,category_id:n,description:s,expire_date_time:i,deleted:o,completed:c}}const se={task_id:{validators:[[Z,J(te,"task_id")]],required:!0},...ae},ie=e=>G(e,se,ne,te);var oe=e.p+"476b00abda902b398be7.png",ce=e.p+"3d996bafa729a1d3f580.png",de=e.p+"83b52ad3ded9ef1fbd18.png",ue=e.p+"2d640112b4b86b627ff7.png",fe=e.p+"7f0174c25660ef72df60.png",le=e.p+"3e40fe2b97b19c75dfaf.png",pe=e.p+"58a834f614e341f9c578.png",ge=e.p+"5896aaa56394aa0273b3.png",ye=e.p+"4a4239588f1b0d37bcfc.png",me=e.p+"66c872e04e2846cafa68.png",_e=e.p+"9d1fc4484b1e5929b7ee.png",be=e.p+"141e3d87afbd71da541c.png",he=e.p+"5556cda0273e796d6a65.png",we=e.p+"4f48c087dcbbdb3bd268.png",ke=e.p+"66f2d7c840bd3b9aed95.png",ve=e.p+"4b695e6dc3fabdcc84b4.png",xe=e.p+"8e112a51a84fa9c09b11.png",qe=e.p+"abc5ade9f6cd6928e96d.png";e.p,e.p,e.p,e.p,e.p,e.p,e.p;function Se(e){return"string"==typeof e}function je(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function $e(e){return t=>e.includes(t)}function Re(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const Ie="others",Te="settings",Ae="about",Ee="store_state",We=[Te,Ae,Ee];const Oe="Навигационный фильтр",Pe=(je(Oe,"title"),$e(We),Re(Oe,"title"),je(Oe,"type"),"filter"),Ue="inbox",Ne="trash",Le="expired",Ze="completed",Je=[Ue,Le,Ze,Ne];const Ce="Навигационный фильтр";je(Ce,"title"),$e(Je),Re(Ce,"title"),je(Ce,"type");function De(e){return"number"==typeof e&&Number.isInteger(e)}const Ge=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`,Be="calendar";const Ve="Навигационный фильтр",Ke=(Ge(Ve,"key"),je(Ve,"type"),"category");const Me="Навигационный фильтр";Ge(Me,"key"),je(Me,"type");function He(e,t,a){return void 0===a&&(a=200),new Response(JSON.stringify({id:e,result:t}),{headers:c,status:a})}class Ye{constructor(e,t){this.type=e,this.data=t}}async function Qe(e,a){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(a)}))}))}function Fe(e,t){const a=re(t);if(!a.error){const r=a.result;if(!e.priorities.find((e=>e.priority_id===r.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(r.category_id){if(!e.categories.find((e=>e.category_id===r.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const n=e.tasks.at(-1)?.task_id||0,s={...r,task_id:n+1};return e.tasks.push(s),{result:s}}return a}async function ze(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>e.task_id===r.task_id));return-1===n?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===r.priority_id))?r.category_id&&!e.categories.find((e=>e.category_id===r.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[n]=r,{result:r}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return a}(a,n);if(s.result){const t=s.result;return await x(a),await Qe(e.clientId,new Ye(g,t)),He(r,t)}return E(r,s.error.message,s.error.data)}function Xe(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);return a.length===r.length&&a.every((a=>r.includes(a)&&Xe(e[a],t[a])))}async function et(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=function(e,t){const a=ie(t);if(a.result){const r=a.result,n=e.tasks.findIndex((e=>Xe(ne(e),ne(r))));return-1===n?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(n,1),{result:r})}return a}(a,n);if(s.result){const t=s.result;return await x(a),await Qe(e.clientId,new Ye(y,t)),He(r,t)}return E(r,s.error.message,s.error.data)}function tt(e,t){const a=M(t);if(a.result){const r=a.result,n=e.categories.find((e=>e.category_name===r.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===r.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const s=e.categories.at(-1)?.category_id||0,i={...r,category_id:s+1};return e.categories.push(i),{result:i}}return a}async function at(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=function(e,t){const a=Q(t);if(a.result){const r=a.result;let n=e.categories.findIndex((e=>e.category_id===r.category_id));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===r.category_name&&e.category_id!==r.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===r.icon_id))?(n=e.categories.findIndex((e=>e.category_id===r.category_id)),e.categories[n]=r,{result:r}):{error:{message:"Не известный идентификатор иконки",data:t}}}return a}(a,n);if(s.result){const t=s.result;return x(a),await Qe(e.clientId,new Ye("update_category",t)),He(r,t)}return E(r,s.error.message,s.error.data)}async function rt(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=function(e,t){const a=Q(t);if(a.result){const r=a.result,n=e.categories.findIndex((e=>Xe(e,r)));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===r.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(n,1),{result:r})}return a}(a,n);if(s.result){const t=s.result;return x(a),await Qe(e.clientId,new Ye("delete_category",t)),He(r,t)}return E(r,s.error.message,s.error.data)}function nt(e){const t=(a=e.tasks,"structuredClone"in globalThis?structuredClone(a):a);var a;return e.tasks=[],{result:t}}function st(e,t){switch(t){case o:return async function(e){const{request:t}=e,a=await j(),r=t.headers.get("x-request-id");return new Response(JSON.stringify({id:r,result:a}),{headers:c,status:200})}(e);case u:return async function(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=tt(a,n);if(s.result){const t=s.result;return await x(a),await Qe(e.clientId,new Ye("create_category",t)),He(r,t)}return E(r,s.error.message,s.error.data)}(e);case f:return at(e);case l:return rt(e);case p:return async function(e){const{request:t}=e,a=v(),{id:r,params:n}=await t.json(),s=Fe(a,n);if(s.result){const t=s.result;return await x(a),await Qe(e.clientId,new Ye(p,t)),He(r,t)}return E(r,s.error.message,s.error.data)}(e);case g:return ze(e);case y:return et(e);case m:return async function(e){const{request:t}=e,a=v(),{id:r}=await t.json(),n=nt(a);if(n.result){const t=n.result;return await x(a),await Qe(e.clientId,new Ye(m)),He(r,t)}return E(r,n.error.message,n.error.data)}(e);case _:return async function(e){const{request:t}=e,a={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},r={categories:[]},{id:n,params:s}=await t.json();if(s){const t=v(),{tasks:i,categories:o}=s;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return E(n,"Не валидные данные");for(let e=0;e<i.length;e++){const n=i[e];let s;if(n.category_id){const e=o.find((e=>e.category_id===n.category_id));e&&(r.categories.includes(e.category_name)||(s=tt(t,e),s.error?a.failed.categories.push(s.error):a.imported.categories.push(s.result),r.categories.push(e.category_name)))}t.tasks.find((e=>e.title===n.title&&e.description===n.description&&e.priority_id===n.priority_id&&e.category_id===n.category_id&&e.completed==n.completed&&e.deleted==n.deleted&&e.expire_date_time==n.expire_date_time))?a.failed.tasks.push({message:"Задача уже существует",data:n}):(s=Fe(t,n),s.error?a.failed.tasks.push(s.error):a.imported.tasks.push(s.result))}(a.imported.categories.length>0||a.imported.tasks.length>0)&&x(t);const c=a.imported;return(c.categories.length>0||c.tasks.length>0)&&await Qe(e.clientId,new Ye(_,a.imported)),He(n,a)}return E(n,"Не удалось импортировать задачи")}(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,a=(await t.json()).id||L();return new Response(JSON.stringify({id:a,result:"Ok"}),{headers:c,status:200})}(e);default:return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200}))}}t.id=Date.now(),t.VERSION="1.7.12",t.assets=T,t.isRepearing=!1,t.logger=I,t.onerror=A,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const a=e.request,r=function(e){const{pathname:t}=new URL(e);return t.startsWith(i)?t.slice(i.length):t}(a.url);switch(a.method){case"GET":return async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)&&!e.startsWith("/offline.")));if(r.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(r)}finally{t.isRepearing=!1}}}(),void await async function(e,a){if("document"!==e.request.destination||a!==O)t.assets.includes(a)&&e.respondWith(N(0,e.request.url,a));else{const a=t.assets.find((e=>e.startsWith(`${O}offline.`)&&e.endsWith(".html")))||"";e.respondWith(N(0,a,a))}}(e,r);case"POST":return void await async function(e,t){const a=st(e,t);e.respondWith(a)}(e,r);default:e.respondWith(E(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(n),a=(await e.keys()).map((e=>new URL(e.url).pathname)),r=t.assets.filter((e=>!a.includes(e)));t.loadedAssets=r,r.length>0&&await e.addAll(r)}())})),t.addEventListener("activate",(async function(e){e.waitUntil($()),e.waitUntil(t.clients.claim())}))}();