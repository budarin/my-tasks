!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var a=r.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=a[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();const t=self,r=200,a=206,s="assets",n="Content-Security-Policy",i=["js","css","webmanifest","json","html"];const o="/api/",c="get_tasks",d={"Content-Type":"application/json; charset=utf-8"},u="RELOAD_PAGE",f="create_category",l="update_category",p="delete_category",g="create_task",m="update_task",y="delete_task",_="clear_tasks",h="import_tasks";const b="tasks",w="kv-storage";async function k(e){if(e.icons&&e.icons.length>0){let t;const r=JSON.stringify(e),a=await caches.open(w),s=await a.match(b);void 0!==s&&(t=await s.text()),void 0!==s&&t===r||await a.put(b,new Response(r,{headers:new Headers({...d,"Content-Length":String(r.length)})}))}}let v={tasks:[],categories:[],priorities:[],icons:[]};function x(){return v}async function S(e){v=e,await k(e)}function j(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const R={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"низкий"},{priority_id:2,priority_name:"нормальный"},{priority_id:3,priority_name:"повышенный"},{priority_id:4,priority_name:"высокий"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:j(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:j(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function I(){let e=x();const t=await caches.open(w),r=await t.match(b);if(e.icons&&0===e.icons.length){if(void 0!==r){const t=await r.json();if(t)return e=t,await S(e),e}if(e.icons&&0===e.icons.length)return await S(R),R}return r||await k(e),e}async function q(){await async function(){const e=await caches.open(s);let r=(await e.keys()).map((e=>new URL(e.url).pathname));const a=r.filter((e=>!t.assets.includes(e)));a.length>0&&await Promise.all(a.map((async t=>{await e.delete(t),r=r.filter((e=>e!==t))})));const n=t.assets.filter((e=>{const t=e.split(".").pop()||"";return i.includes(t)&&!r.includes(e)}));n.length>0&&await e.addAll(n)}(),await I(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:u})))}))}()}const $=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let N=$(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let T=(e=>$(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const O=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.8e9be084a1cbacf9c45e.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.077d9a6691856663cc73.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.298a04672eef49cd6c48.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.60a7ffcd95ded5844c07.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.0e395b1e4effc40cc25d.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.9f2af99da95a2d7dd555.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.c1704a973f934cb56785f497f5fb9683.webmanifest","/my-tasks/offline.033ee1a1c00431f2453553f7d58a2e1b.html"];function A(e){}function L(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:d,status:200})}function E(){return T.navigator.userAgent.toLowerCase().includes("chrome")||T.navigator.userAgent.toLowerCase().includes("chromium")}const U="/my-tasks/",W=e=>e.startsWith(`${U}offline.`)&&e.endsWith(".html"),P="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-oULjRiaR7R6nvCPg6Sw2W1cQSG9-IB1d3pMwNafpGnxROqD92PL8swF7h4tYVBuv' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-TMg2vXCz1pe78f0G_8B9RdKdv-7zh9C3kUwiuVJ3dEq9f-662JOGLGwxDgfWZq1q' 'sha384-c5R3foO09_eIzfvkQmGwIuLlniSYo5DRL3KtasBuzUFAPiQ-j_1phN9BSOBJMP_g' 'sha384-lIrB7SarEZj6MEil3sSIzpIOiHpV2RiFbmUJUEFLfwSZ_U2dO6m7TB400K_h_g93' 'sha384-AR9GPDc1gYZ7sGc52hj4Lxs3sbdx20q1Isglo4Vx24Ar4vU4-asVSldc4yRXY52t' 'sha384-rl0UUSTKzwFgDNy-pqQ8NZWRTIEtxSgar3VUeNUIOOaJ044cezNXQ7FZ-s71SOeV' 'sha384-6bXAwZDfsmzg1wQKhJYfkJIUL5-M063gNwYwHaj4Ef7_YEl3pHf5-hA93PVfRsmx'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function C(e,i,o){const c=await caches.open(s),d=await c.match(i);if(d){if(W(i)&&!d.headers.get(n)){const e=d.clone(),t=new Headers(d.headers);t.set(n,P);try{let r=await d.text();E()&&(r=r.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const a=new Response(r,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,a.clone()),a}catch(e){return d}}return d}return async function(e,i){let o;const c=await fetch(e,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===a){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;W(e)?(t=await c.text(),d.set(n,P),E()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===r;if(!1===u)return c;u&&t.assets.includes(i)&&(await caches.open(s)).put(e,o.clone());return o}(i,o)}function D(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),a=function(e){let t="";for(let r=0;r<e.length;r++){const a=e[r].toString(16);t+=2===a.length?a:"0"+a}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${a.substring(0,4)}-${a.substring(4,8)}-${a.substring(8)}`}function J(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}function B(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const G=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function V(e,t){return void 0===t&&(t=65536),r=>{if("string"!=typeof r)return!1;const a=String(r).trim();return a.length>=e&&a.length<=t}}const M=(e,t,r,a)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${a} символов`;const z=(e,t,r,a)=>{const s={error:{message:`Сущность "${a}" должна быть объектом`,data:e}};if(void 0===e)return s;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return s;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const r=i[e],s=t[r];if(!0===s.required&&void 0===n[r])return{error:{message:`Свойство "${r}" сущности ${a} отсутствует`,data:n}};for(let e=0;e<s.validators.length;e++){const t=s.validators[e];if(!1===t[0](n[r]))return{error:{message:t[1],data:n}}}}return{result:r(n)}},Q="Категория";function Z(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:Number(t),category_name:J(r.trim())}}const F={icon_id:{validators:[[B,G(Q,"icon_id")]],required:!0},category_name:{validators:[[V(3,20),M(Q,"category_name",3,20)]],required:!0}},H=e=>z(e,F,Z,Q);function K(e){const{category_id:t,icon_id:r,category_name:a}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:J(a.trim())}}const Y={category_id:{validators:[[B,G(Q,"category_id")]],required:!0},...F},X=e=>z(e,Y,K,Q);function ee(e){return t=>void 0===t||e(t)}function te(e){return"string"==typeof e}function re(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function ae(e){return"boolean"==typeof e}function se(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const ne="Задача",ie=1e3;function oe(e){const{title:t,priority_id:r,category_id:a,description:s,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:J(t.trim()),priority_id:Number(r),category_id:a?Number(a):void 0,description:s?.trim(),expire_date_time:n,deleted:i,completed:o}}const ce={title:{validators:[[V(3,100),M(ne,"title",3,100)]],required:!0},priority_id:{validators:[[B,G(ne,"priority_id")]],required:!0},category_id:{validators:[[ee(B),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(ne,"category_id")]]},description:{validators:[[ee(V(3,ie)),M(ne,"description",3,ie)]]},expire_date_time:{validators:[[ee(te),re(ne,"expire_date_time")],[ee((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${ne} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[ee(ae),se(ne,"deleted")]]},completed:{validators:[[ee(ae),se(ne,"completed")]]}},de=e=>z(e,ce,oe,ne);function ue(e){const{task_id:t,title:r,priority_id:a,category_id:s,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:J(r.trim()),priority_id:Number(a),category_id:s?Number(s):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const fe={task_id:{validators:[[B,G(ne,"task_id")]],required:!0},...ce},le=e=>z(e,fe,ue,ne);var pe=e.p+"476b00abda902b398be7.png",ge=e.p+"3d996bafa729a1d3f580.png",me=e.p+"83b52ad3ded9ef1fbd18.png",ye=e.p+"2d640112b4b86b627ff7.png",_e=e.p+"7f0174c25660ef72df60.png",he=e.p+"3e40fe2b97b19c75dfaf.png",be=e.p+"58a834f614e341f9c578.png",we=e.p+"4a4239588f1b0d37bcfc.png",ke=e.p+"66c872e04e2846cafa68.png",ve=e.p+"9d1fc4484b1e5929b7ee.png",xe=e.p+"141e3d87afbd71da541c.png",Se=e.p+"5556cda0273e796d6a65.png",je=e.p+"4f48c087dcbbdb3bd268.png",Re=e.p+"4b695e6dc3fabdcc84b4.png",Ie=e.p+"8e112a51a84fa9c09b11.png",qe=e.p+"abc5ade9f6cd6928e96d.png";e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;function $e(e){return t=>{if("string"!=typeof t)return!1;const r=t.trim();return e.includes(r)}}function Ne(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const Te="others",Oe="settings",Ae="about",Le="store_state",Ee=[Oe,Ae,Le];const Ue="Навигационный фильтр",We=(re(Ue,"title"),$e(Ee),Ne(Ue,"title"),re(Ue,"type"),"filter"),Pe="inbox",Ce="trash",De="expired",Je="completed",Be=[Pe,De,Je,Ce];const Ge="Навигационный фильтр",Ve=(re(Ge,"title"),$e(Be),Ne(Ge,"title"),re(Ge,"type"),"calendar");const Me="Навигационный фильтр",ze=(G(Me,"key"),re(Me,"type"),"category");const Qe="Навигационный фильтр";G(Qe,"key"),re(Qe,"type");function Ze(e,t,r){return void 0===r&&(r=200),new Response(JSON.stringify({id:e,result:t}),{headers:d,status:r})}class Fe{constructor(e,t){this.type=e,this.data=t}}async function He(e,r){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(r)}))}))}function Ke(e,t){const r=de(t);if(!r.error){const a=r.result;if(!e.priorities.find((e=>e.priority_id===a.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(a.category_id){if(!e.categories.find((e=>e.category_id===a.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const s=e.tasks.at(-1)?.task_id||0,n={...a,task_id:s+1};return e.tasks.push(n),{result:n}}return r}async function Ye(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=le(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>e.task_id===a.task_id));return-1===s?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===a.priority_id))?a.category_id&&!e.categories.find((e=>e.category_id===a.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[s]=a,{result:a}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(r,s);if(n.result){const t=n.result;return await S(r),await He(e.clientId,new Fe(m,t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}function Xe(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&r.every((r=>a.includes(r)&&Xe(e[r],t[r])))}async function et(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=le(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>Xe(ue(e),ue(a))));return-1===s?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return await S(r),await He(e.clientId,new Fe(y,t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}function tt(e,t){const r=H(t);if(r.result){const a=r.result,s=e.categories.find((e=>e.category_name===a.category_name));if(s)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===a.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,i={...a,category_id:n+1};return e.categories.push(i),{result:i}}return r}async function rt(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=X(t);if(r.result){const a=r.result;let s=e.categories.findIndex((e=>e.category_id===a.category_id));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===a.category_name&&e.category_id!==a.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===a.icon_id))?(s=e.categories.findIndex((e=>e.category_id===a.category_id)),e.categories[s]=a,{result:a}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(r,s);if(n.result){const t=n.result;return S(r),await He(e.clientId,new Fe("update_category",t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}async function at(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=X(t);if(r.result){const a=r.result,s=e.categories.findIndex((e=>Xe(e,a)));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===a.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return S(r),await He(e.clientId,new Fe("delete_category",t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}function st(e){const t=(r=e.tasks,"structuredClone"in globalThis?T.structuredClone(r):r);var r;return e.tasks=[],{result:t}}async function nt(e,t){switch(0===x().icons.length&&await I(),t){case c:return async function(e){const{request:t}=e,r=await I(),a=t.headers.get("x-request-id");return new Response(JSON.stringify({id:a,result:r}),{headers:d,status:200})}(e);case f:return async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=tt(r,s);if(n.result){const t=n.result;return await S(r),await He(e.clientId,new Fe("create_category",t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}(e);case l:return rt(e);case p:return at(e);case g:return async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=Ke(r,s);if(n.result){const t=n.result;return await S(r),await He(e.clientId,new Fe(g,t)),Ze(a,t)}return L(a,n.error.message,n.error.data)}(e);case m:return Ye(e);case y:return et(e);case _:return async function(e){const{request:t}=e,r=x(),{id:a}=await t.json(),s=st(r);if(s.result){const t=s.result;return await S(r),await He(e.clientId,new Fe(_)),Ze(a,t)}return L(a,s.error.message,s.error.data)}(e);case h:return async function(e){const{request:t}=e,r={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},a={categories:[]},{id:s,params:n}=await t.json();if(n){const t=x(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return L(s,"Не валидные данные");for(let e=0;e<i.length;e++){const s=i[e];let n;if(s.category_id){const e=o.find((e=>e.category_id===s.category_id));e&&(a.categories.includes(e.category_name)||(n=tt(t,e),n.error?r.failed.categories.push(n.error):r.imported.categories.push(n.result),a.categories.push(e.category_name)))}t.tasks.find((e=>e.title===s.title&&e.description===s.description&&e.priority_id===s.priority_id&&e.category_id===s.category_id&&e.completed==s.completed&&e.deleted==s.deleted&&e.expire_date_time==s.expire_date_time))?r.failed.tasks.push({message:"Задача уже существует",data:s}):(n=Ke(t,s),n.error?r.failed.tasks.push(n.error):r.imported.tasks.push(n.result))}(r.imported.categories.length>0||r.imported.tasks.length>0)&&S(t);const c=r.imported;return(c.categories.length>0||c.tasks.length>0)&&await He(e.clientId,new Fe(h,r.imported)),Ze(s,r)}return L(s,"Не удалось импортировать задачи")}(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,r=(await t.json()).id||D();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:d,status:200})}(e);default:return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:d,status:200}))}}var it;it=globalThis,T=it,t.id=Date.now(),t.VERSION="1.16.28",t.assets=O,t.isRepearing=!1,t.logger=N,t.onerror=A,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const r=e.request,a=function(e){const{pathname:t}=new URL(e);return t.startsWith(o)?t.slice(o.length):t}(r.url);switch(r.method){case"GET":return await async function(e,r){if("document"!==e.request.destination||r!==U)t.assets.includes(r)&&e.respondWith(C(0,e.request.url,r));else{const r=t.assets.find((e=>e.startsWith(`${U}offline.`)&&e.endsWith(".html")))||"";e.respondWith(C(0,r,r))}}(e,a),void e.waitUntil(async function(){const e=await caches.open(s),r=(await e.keys()).map((e=>new URL(e.url).pathname)),a=t.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(a.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(a)}finally{t.isRepearing=!1}}}());case"POST":return void e.respondWith(async function(e,t){return nt(e,t)}(e,a));default:e.respondWith(L(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(s),r=(await e.keys()).map((e=>new URL(e.url).pathname)),a=t.assets.filter((e=>{const t=e.split(".").pop()||"";return i.includes(t)&&!r.includes(e)}));t.loadedAssets=a,a.length>0&&await e.addAll(a)}())})),t.addEventListener("activate",(async function(e){e.waitUntil(q()),e.waitUntil(t.clients.claim())}))}();