(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var a=r.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=a[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=self,r=200,a=206,s="assets",n="Content-Security-Policy",i=["js","css","webmanifest","json","html"];const o="/api/",c="get_tasks",d={"Content-Type":"application/json; charset=utf-8"},u="RELOAD_PAGE",l="create_category",f="update_category",p="delete_category",g="create_task",m="update_task",y="delete_task",_="clear_tasks",h="import_tasks";const b="tasks",w="kv-storage";async function k(e){if(e.icons&&e.icons.length>0){let t;const r=JSON.stringify(e),a=await caches.open(w),s=await a.match(b);void 0!==s&&(t=await s.text()),void 0!==s&&t===r||await a.put(b,new Response(r,{headers:new Headers({...d,"Content-Length":String(r.length)})}))}}let v={tasks:[],categories:[],priorities:[],icons:[]};function x(){return v}async function S(e){v=e,await k(e)}function $(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const j={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"},{icon_id:15,file_name:"refresh.png"},{icon_id:16,file_name:"next.png"},{icon_id:17,file_name:"today.png"}],priorities:[{priority_id:1,priority_name:"нормальный"},{priority_id:2,priority_name:"повышенный"},{priority_id:3,priority_name:"высокий"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:$(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:2,category_id:1,title:"Todo4",expire_date_time:$(1),completed:!0,deleted:!1},{task_id:5,priority_id:1,title:"Todo5"},{task_id:6,category_id:4,priority_id:3,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function q(){let e=x();const t=await caches.open(w),r=await t.match(b);if(e.icons&&0===e.icons.length){if(void 0!==r){const t=await r.json();if(t)return e=t,await S(e),e}if(e.icons&&0===e.icons.length)return await S(j),j}return r||await k(e),e}async function I(){await async function(){const e=await caches.open(s);let r=(await e.keys()).map((e=>new URL(e.url).pathname));const a=r.filter((e=>!t.assets.includes(e)));a.length>0&&await Promise.all(a.map((async t=>{await e.delete(t),r=r.filter((e=>e!==t))})));const n=t.assets.filter((e=>{const t=e.split(".").pop()||"";return i.includes(t)&&!r.includes(e)}));n.length>0&&await e.addAll(n)}(),await q(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:u})))}))}()}const R=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let N=R(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);let T=(e=>R(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const A=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.14ab749eda3bea706cb1.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.8277e9f8c97ae9c01733.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-narrow1.5fd4be916f60a603a2f2.png","/my-tasks/install-narrow2.c310a9844a7be437477c.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/install-wide.6c346932ecfd0d529b06.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.8cf021e6018d37c4a996.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.962d3541c00c0e5fc3cb.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.fb2caa95e6ce999bc26d.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.6fe2639de7786a69d4a5.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/social.74d1f2af4215f43e0288.png","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.c1704a973f934cb56785f497f5fb9683.webmanifest","/my-tasks/offline.e05763fb3897c718b0c3837c65dfbae2.html"];function O(e){}function L(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:d,status:200})}function W(){return T.navigator.userAgent.toLowerCase().includes("chrome")||T.navigator.userAgent.toLowerCase().includes("chromium")}const E="/my-tasks/",C=e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html"),P="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self' https://llm.api.cloud.yandex.net https://gigachat.devices.sberbank.ru; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-J0gYDrIaXmSwJHoBIceuTJaPP1fQlZBXIKzt4pA3rwiSN--DRXL_XuQj3_htMm-g' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-1s9IQpQwRtoBOJOcUPc-2XCEsqikuxwMIvYKsPdRlHXBA_xCMIVvp8K71q0AS8s6' 'sha384-x5SSHHrxHRE0n_l6Ni5xd70Fs-b2vLG5VyA8CGm12UC19fr5gWXNlcotKiNu11I9' 'sha384-rDbmcz7KfmNeR7iYJzOHRx6FS5gSV-hweWGb8mFVX7rkLcxqLgsZ8p6NhtKj0fmo' 'sha384-IMGZ6ajehSxIvbgxHqDvvJbJv7GSMx8FMrVlvm5A6aPE-Xteq6_OkL89MhDgh-aG' 'sha384-O_uo5z9uY6Oo9WsQYJ-91slzNjx9VAm6y72Blnf4gPS-V5NhLuws0pSWtb4HpYOy' 'sha384--XsUIPTThp5USq6YPSbY3gSRgj-Pu9E3ziJRmUW4sx36fWYWXdoXq0Og7h68QbSi'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function U(e,i,o){const c=await caches.open(s),d=await c.match(i);if(d){if(C(i)&&!d.headers.get(n)){const e=d.clone(),t=new Headers(d.headers);t.set(n,P);try{let r=await d.text();W()&&(r=r.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const a=new Response(r,{status:e.status,statusText:e.statusText,headers:t});return await c.put(i,a.clone()),a}catch(e){return d}}return d}return async function(e,i){let o;const c=await fetch(e,{keepalive:!0});if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===a){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;C(e)?(t=await c.text(),d.set(n,P),W()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===r;if(!1===u)return c;u&&t.assets.includes(i)&&(await caches.open(s)).put(e,o.clone());return o}(i,o)}function J(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),a=function(e){let t="";for(let r=0;r<e.length;r++){const a=e[r].toString(16);t+=2===a.length?a:"0"+a}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${a.substring(0,4)}-${a.substring(4,8)}-${a.substring(8)}`}const V=e=>{e.currentTarget.setCustomValidity("")},D=(e,t,r)=>a=>{const s=a.currentTarget;let n=`Поле "${e}" обязательно для заполнения`;const i=s.value.replace(/\n/gm,"").trim();return s.validity.patternMismatch?(n=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void s.setCustomValidity(n)):i&&(i.length<t||i.length>r)?(n=`Поле "${e}" должно содержать минимум ${t} и максимум ${r} символов`,void s.setCustomValidity(n)):void s.setCustomValidity(n)};function M(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}function X(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}const H=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function B(e,t=65536){return r=>{if("string"!=typeof r)return!1;const a=String(r).trim();return a.length>=e&&a.length<=t}}const G=(e,t,r,a)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${a} символов`;const Y=(e,t,r,a)=>{const s={error:{message:`Сущность "${a}" должна быть объектом`,data:e}};if(void 0===e)return s;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return s;const n=e,i=Object.keys(t);for(let e=0;e<i.length;e++){const r=i[e],s=t[r];if(!0===s.required&&void 0===n[r])return{error:{message:`Свойство "${r}" сущности ${a} отсутствует`,data:n}};for(let e=0;e<s.validators.length;e++){const t=s.validators[e];if(!1===t[0](n[r]))return{error:{message:t[1],data:n}}}}return{result:r(n)}},K="Категория",Q="Название категории";D(Q,3,20);function z(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:Number(t),category_name:M(r.trim())}}const F={icon_id:{validators:[[X,H(K,"icon_id")]],required:!0},category_name:{validators:[[B(3,20),G(K,"category_name",3,20)]],required:!0}},Z=e=>Y(e,F,z,K);function ee(e){const{category_id:t,icon_id:r,category_name:a}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:M(a.trim())}}const te={category_id:{validators:[[X,H(K,"category_id")]],required:!0},...F},re=e=>Y(e,te,ee,K);function ae(e){return t=>void 0===t||e(t)}function se(e){return"string"==typeof e}function ne(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function ie(e){return"boolean"==typeof e}function oe(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const ce="Задача",de=100,ue="Название задачи";D(ue,3,de);function le(e){const{title:t,priority_id:r,category_id:a,description:s,expire_date_time:n,deleted:i,completed:o}=e||{};return{title:M(t.trim()),priority_id:Number(r),category_id:a?Number(a):void 0,description:s?.replace(/\s*\n+\s*$/,"").trim(),expire_date_time:n,deleted:i,completed:o}}const fe={title:{validators:[[B(3,de),G(ce,"title",3,de)]],required:!0},priority_id:{validators:[[X,H(ce,"priority_id")]],required:!0},category_id:{validators:[[ae(X),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(ce,"category_id")]]},expire_date_time:{validators:[[ae(se),ne(ce,"expire_date_time")],[ae((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${ce} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[ae(ie),oe(ce,"deleted")]]},completed:{validators:[[ae(ie),oe(ce,"completed")]]}},pe=e=>Y(e,fe,le,ce);function ge(e){const{task_id:t,title:r,priority_id:a,category_id:s,description:n,expire_date_time:i,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:M(r.trim()),priority_id:Number(a),category_id:s?Number(s):void 0,description:n,expire_date_time:i,deleted:o,completed:c}}const me={task_id:{validators:[[X,H(ce,"task_id")]],required:!0},...fe},ye=e=>Y(e,me,ge,ce),_e=e.p+"476b00abda902b398be7.png",he=e.p+"3d996bafa729a1d3f580.png",be=e.p+"83b52ad3ded9ef1fbd18.png",we=e.p+"2d640112b4b86b627ff7.png",ke=e.p+"7f0174c25660ef72df60.png",ve=e.p+"3e40fe2b97b19c75dfaf.png",xe=e.p+"58a834f614e341f9c578.png",Se=e.p+"4a4239588f1b0d37bcfc.png",$e=e.p+"66c872e04e2846cafa68.png",je=e.p+"9d1fc4484b1e5929b7ee.png",qe=e.p+"141e3d87afbd71da541c.png",Ie=e.p+"5556cda0273e796d6a65.png",Re=e.p+"4f48c087dcbbdb3bd268.png",Ne=e.p+"4b695e6dc3fabdcc84b4.png",Te=e.p+"8e112a51a84fa9c09b11.png",Ae=e.p+"abc5ade9f6cd6928e96d.png";e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;function Oe(e){return t=>{if("string"!=typeof t)return!1;const r=t.trim();return e.includes(r)}}function Le(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const We="others",Ee="settings",Ce="about",Pe="help",Ue="store_state",Je="roadmap",Ve=[Ee,Ce,Je,Ue,Pe];const De="Навигационный фильтр",Me=(ne(De,"title"),Oe(Ve),Le(De,"title"),ne(De,"type"),"filter"),Xe="inbox",He="trash",Be="expired",Ge="completed",Ye=[Be,Xe,Ge,He];const Ke="Навигационный фильтр",Qe=(ne(Ke,"title"),Oe(Ye),Le(Ke,"title"),ne(Ke,"type"),"calendar");const ze="Навигационный фильтр",Fe=(H(ze,"key"),ne(ze,"type"),"category");const Ze="Навигационный фильтр";H(Ze,"key"),ne(Ze,"type");function et(e,t,r=200){return new Response(JSON.stringify({id:e,result:t}),{headers:d,status:r})}class tt{constructor(e,t){this.type=e,this.data=t}}async function rt(e,r){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(r)}))}))}function at(e,t){const r=pe(t);if(!r.error){const a=r.result;if(!e.priorities.find((e=>e.priority_id===a.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(a.category_id){if(!e.categories.find((e=>e.category_id===a.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const s=e.tasks.at(-1)?.task_id||0,n={...a,task_id:s+1};return e.tasks.push(n),{result:n}}return r}function st(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&r.every((r=>a.includes(r)&&st(e[r],t[r])))}function nt(e,t){const r=Z(t);if(r.result){const a=r.result,s=e.categories.find((e=>e.category_name===a.category_name));if(s)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===a.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,i={...a,category_id:n+1};return e.categories.push(i),{result:i}}return r}function it(e){const t=(r=e.tasks,"structuredClone"in globalThis?T.structuredClone(r):r);var r;return e.tasks=[],{result:t}}function ot(){return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:d,status:200}))}async function ct(e){const{request:t}=e,r=(await t.json()).id||J();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:d,status:200})}const dt={[c]:async function(e){const{request:t}=e,r=await q(),a=t.headers.get("x-request-id");return new Response(JSON.stringify({id:a,result:r}),{headers:d,status:200})},[l]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=nt(r,s);if(n.result){const t=n.result;return await S(r),await rt(e.clientId,new tt("create_category",t)),et(a,t)}return L(a,n.error.message,n.error.data)},[f]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=re(t);if(r.result){const a=r.result;let s=e.categories.findIndex((e=>e.category_id===a.category_id));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===a.category_name&&e.category_id!==a.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===a.icon_id))?(s=e.categories.findIndex((e=>e.category_id===a.category_id)),e.categories[s]=a,{result:a}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(r,s);if(n.result){const t=n.result;return S(r),await rt(e.clientId,new tt("update_category",t)),et(a,t)}return L(a,n.error.message,n.error.data)},[p]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=re(t);if(r.result){const a=r.result,s=e.categories.findIndex((e=>st(e,a)));return-1===s?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===a.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return S(r),await rt(e.clientId,new tt("delete_category",t)),et(a,t)}return L(a,n.error.message,n.error.data)},[g]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=at(r,s);if(n.result){const t=n.result;return await S(r),await rt(e.clientId,new tt(g,t)),et(a,t)}return L(a,n.error.message,n.error.data)},[m]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=ye(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>e.task_id===a.task_id));return-1===s?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===a.priority_id))?a.category_id&&!e.categories.find((e=>e.category_id===a.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[s]=a,{result:a}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(r,s);if(n.result){const t=n.result;return await S(r),await rt(e.clientId,new tt(m,t)),et(a,t)}return L(a,n.error.message,n.error.data)},[y]:async function(e){const{request:t}=e,r=x(),{id:a,params:s}=await t.json(),n=function(e,t){const r=ye(t);if(r.result){const a=r.result,s=e.tasks.findIndex((e=>st(ge(e),ge(a))));return-1===s?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(s,1),{result:a})}return r}(r,s);if(n.result){const t=n.result;return await S(r),await rt(e.clientId,new tt(y,t)),et(a,t)}return L(a,n.error.message,n.error.data)},[_]:async function(e){const{request:t}=e,r=x(),{id:a}=await t.json(),s=it(r);if(s.result){const t=s.result;return await S(r),await rt(e.clientId,new tt(_)),et(a,t)}return L(a,s.error.message,s.error.data)},[h]:async function(e){const{request:t}=e,r={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},a={categories:[]},{id:s,params:n}=await t.json();if(n){const t=x(),{tasks:i,categories:o}=n;if(!(i&&Array.isArray(i)&&o&&Array.isArray(o)))return L(s,"Не валидные данные");for(let e=0;e<i.length;e++){const s=i[e];let n;if(s.category_id){const e=o.find((e=>e.category_id===s.category_id));e&&(a.categories.includes(e.category_name)||(n=nt(t,e),n.error?r.failed.categories.push(n.error):r.imported.categories.push(n.result),a.categories.push(e.category_name)))}t.tasks.find((e=>e.title===s.title&&e.description===s.description&&e.priority_id===s.priority_id&&e.category_id===s.category_id&&e.completed==s.completed&&e.deleted==s.deleted&&e.expire_date_time==s.expire_date_time))?r.failed.tasks.push({message:"Задача уже существует",data:s}):(n=at(t,s),n.error?r.failed.tasks.push(n.error):r.imported.tasks.push(n.result))}(r.imported.categories.length>0||r.imported.tasks.length>0)&&S(t);const c=r.imported;return(c.categories.length>0||c.tasks.length>0)&&await rt(e.clientId,new tt(h,r.imported)),et(s,r)}return L(s,"Не удалось импортировать задачи")},"/log/info":ct,"/log/warn":ct,"/log/error":ct};async function ut(e,t){const r=async function(e,t){return 0===x().icons.length&&await q(),(dt[t]||ot)(e)}(e,t);return r}var lt;lt=globalThis,T=lt,t.id=Date.now(),t.VERSION="1.21.1",t.assets=A,t.isRepearing=!1,t.logger=N,t.onerror=O,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const r=e.request,a=function(e){const{pathname:t}=new URL(e);return t.startsWith(o)?t.slice(o.length):t}(r.url);switch(r.method){case"GET":return await async function(e,r){if("document"!==e.request.destination||r!==E)t.assets.includes(r)&&e.respondWith(U(0,e.request.url,r));else{const r=t.assets.find((e=>e.startsWith(`${E}offline.`)&&e.endsWith(".html")))||"";e.respondWith(U(0,r,r))}}(e,a),void e.waitUntil(async function(){const e=await caches.open(s),r=(await e.keys()).map((e=>new URL(e.url).pathname)),a=t.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(a.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(a)}finally{t.isRepearing=!1}}}());case"POST":{const{origin:t}=new URL(e.request.referrer);if(!e.request.url.startsWith(t))return;return void e.respondWith(ut(e,a))}default:e.respondWith(L(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(s),r=(await e.keys()).map((e=>new URL(e.url).pathname)),a=t.assets.filter((e=>{const t=e.split(".").pop()||"";return i.includes(t)&&!r.includes(e)}));t.loadedAssets=a,a.length>0&&await e.addAll(a)}())})),t.addEventListener("activate",(async function(e){e.waitUntil(I()),e.waitUntil(t.clients.claim())}))})();