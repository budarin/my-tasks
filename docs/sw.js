!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var i=r.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!t;)t=i[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();const t=self,r=200,i=206,a="assets",n="Content-Security-Policy";const s="/api/",o="get_tasks",c={"Content-Type":"application/json; charset=utf-8"},d="RELOAD_PAGE",u="create_category",l="update_category",f="delete_category",p="create_task",g="update_task",y="delete_task",m="clear_tasks",_="import_tasks",h=[u,l,f,p,g,y,m,_];const b="tasks",w="kv-storage";async function k(e){if(e.icons&&e.icons.length>0){let t;const r=JSON.stringify(e),i=await caches.open(w),a=await i.match(b);void 0!==a&&(t=await a.text()),void 0!==a&&t===r||await i.put(b,new Response(r,{headers:new Headers({...c,"Content-Length":String(r.length)})}))}}let v={tasks:[],categories:[],priorities:[],icons:[]};function x(){return v}async function j(e){v=e,await k(e)}function q(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const S={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий",color:"#808080"},{priority_id:2,priority_name:"нормальный",color:"#000000"},{priority_id:3,priority_name:"повышенный",color:"#008000"},{priority_id:4,priority_name:"высокий",color:"#E56353"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:q(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:q(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function $(){let e=x();const t=await caches.open(w),r=await t.match(b);if(e.icons&&0===e.icons.length){if(void 0!==r){const t=await r.json();if(t)return e=t,await j(e),e}if(e.icons&&0===e.icons.length)return await j(S),S}return r||await k(e),e}async function O(){await async function(){const e=await caches.open(a);let r=(await e.keys()).map((e=>new URL(e.url).pathname));const i=r.filter((e=>!t.assets.includes(e)));i.length>0&&await Promise.all(i.map((async t=>{await e.delete(t),r=r.filter((e=>e!==t))})));const n=t.assets.filter((e=>!r.includes(e)));n.length>0&&await e.addAll(n)}(),await $(),await async function(){t.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:d})))}))}()}const A=()=>{};let T=new Proxy({},{get:()=>A});const R=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.3d1e70a95d22e5b642cc.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.42e1b571fbc9bf10b2d8.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.cd3261e56180c2c0e031.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.73c5add8faf0aeec0614.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.cf11845aa29b430d79d1.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.072e730091aa92f00ee4.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.dca2a7d07f6e1d618c06.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.4f8f41e5624a699e4e90e2d2413a0a6f.webmanifest","/my-tasks/offline.c06751a2c58ecb86fcf546706a873e69.html"];function I(e){}function E(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:c,status:200})}function N(){return navigator.userAgent.toLowerCase().includes("chrome")||navigator.userAgent.toLowerCase().includes("chromium")}const L="/my-tasks/",W=e=>e.startsWith(`${L}offline.`)&&e.endsWith(".html"),P="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-AvYT35FTNVE6h-dPxkBEXtQ1DyOVhaaimakups_CsVYmVPAmP2ym6GQfrkF6aXy3' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-2WZPK9bOk-gNZ-Z8eKZbUPTzTOgw5OrAYWl8epa74e2o9NSBRq32eXWfEnKLR9M9' 'sha384-Ngi2uuQzV6D3wsODNVX_sybSA_ttnOK3z2JGzE-QMMWuRhAu3ilR7f070ss_TrRw' 'sha384-aQrLUylDRHo-8fCShU6gMobx9EajPdZSbFp0u4mzoBKkFMvcufNViCmGuESbBUi3' 'sha384-jxupI0Q8mR18zeIaGNcP4Wxtd4jbr8kNb2BkGRdYzBlB9J0lv4PMvKtnY1WCTLNZ' 'sha384-OyOiZihO5L1U2swPOXDlHINjZFeAd8g_LYTdlqvfswDQJgndFrac35GmA3qnf070' 'sha384-SaWKTiy-Z9MUxVypOpivhdOgH91BCbBOVil0BtzDyp7eq3jGZcl72HAKIU1QL3wx'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt lit-html default;";async function U(e,s,o){const c=await caches.open(a),d=await c.match(s);if(d){if(W(s)&&!d.headers.get(n)){const e=d.clone(),t=new Headers(d.headers);t.set(n,P);try{let r=await d.text();N()&&(r=r.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const i=new Response(r,{status:e.status,statusText:e.statusText,headers:t});return await c.put(s,i.clone()),i}catch(e){return d}}return d}return async function(e,s){let o;const c=await fetch(e);if(null===c.body)return c;const d=new Headers(c.headers);if(c.status===i){const e=await c.blob(),t=await e.arrayBuffer();o=new Response(t,{headers:d})}else{let t;W(e)?(t=await c.text(),d.set(n,P),N()&&(t=t.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):t=await c.blob(),o=new Response(t,{headers:d,status:c.status,statusText:c.statusText})}const u=o.status===r;if(!1===u)return c;u&&t.assets.includes(s)&&(await caches.open(a)).put(e,o.clone());return o}(s,o)}function B(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),i=function(e){let t="";for(let r=0;r<e.length;r++){const i=e[r].toString(16);t+=2===i.length?i:"0"+i}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${i.substring(0,4)}-${i.substring(4,8)}-${i.substring(8)}`}function C(e){return"number"==typeof e&&Number.isInteger(e)}const D=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function M(e,t){return void 0===t&&(t=65536),r=>"string"==typeof r&&r.length>=e&&r.length<=t}const V=(e,t,r,i)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${i} символов`;const G=(e,t,r,i)=>{if(!1===function(e){return"object"==typeof e&&null!==e}(e))return{error:{message:`Сущность "${i}" должна быть объектом`,data:e}};const a=e,n=Object.keys(t);for(let r=0;r<n.length;r++){const s=n[r],o=t[s];if(!0===o.required&&void 0===a[s])return{error:{message:`Свойство "${s}" сущности ${i} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const r=o.validators[t];if(!1===r[0](a[s]))return{error:{message:r[1],data:e}}}}return{result:r(a)}};function J(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:t,category_name:r}}const Z="Категория",K={icon_id:{validators:[[C,D(Z,"icon_id")]],required:!0},category_name:{validators:[[M(3,20),V(Z,"category_name",3,20)]],required:!0}},Q=e=>G(e,K,J,Z);function z(e){const{category_id:t,icon_id:r,category_name:i}=e||{};return{category_id:t,icon_id:r,category_name:i}}const H={category_id:{validators:[[C,D(Z,"category_id")]],required:!0},...K},F=e=>G(e,H,z,Z);function X(e){return t=>void 0===t||e(t)}function Y(e){return"boolean"==typeof e}function ee(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function te(e){const{title:t,priority_id:r,category_id:i,description:a,expire_date_time:n,deleted:s,completed:o}=e||{};return{title:t,priority_id:r,category_id:i,description:a,expire_date_time:n,deleted:s,completed:o}}const re="Задача",ie={title:{validators:[[M(3,100),V(re,"title",3,100)]],required:!0},priority_id:{validators:[[C,D(re,"priority_id")]],required:!0},category_id:{validators:[[X(C),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(re,"category_id")]]},description:{validators:[[X(M(3,1e3)),V(re,"description",3,1e3)]]},expire_date_time:{validators:[[X((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${re} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[X(Y),ee(re,"deleted")]]},completed:{validators:[[X(Y),ee(re,"completed")]]}},ae=e=>G(e,ie,te,re);function ne(e){const{task_id:t,title:r,priority_id:i,category_id:a,description:n,expire_date_time:s,deleted:o,completed:c}=e||{};return{task_id:t,title:r,priority_id:i,category_id:a,description:n,expire_date_time:s,deleted:o,completed:c}}const se={task_id:{validators:[[C,D(re,"task_id")]],required:!0},...ie},oe=e=>G(e,se,ne,re);var ce=e.p+"476b00abda902b398be7.png",de=e.p+"3d996bafa729a1d3f580.png",ue=e.p+"83b52ad3ded9ef1fbd18.png",le=e.p+"2d640112b4b86b627ff7.png",fe=e.p+"7f0174c25660ef72df60.png",pe=e.p+"3e40fe2b97b19c75dfaf.png",ge=e.p+"58a834f614e341f9c578.png",ye=e.p+"5896aaa56394aa0273b3.png",me=e.p+"4a4239588f1b0d37bcfc.png",_e=e.p+"66c872e04e2846cafa68.png",he=e.p+"9d1fc4484b1e5929b7ee.png",be=e.p+"141e3d87afbd71da541c.png",we=e.p+"5556cda0273e796d6a65.png",ke=e.p+"4f48c087dcbbdb3bd268.png",ve=e.p+"66f2d7c840bd3b9aed95.png",xe=e.p+"4b695e6dc3fabdcc84b4.png",je=e.p+"8e112a51a84fa9c09b11.png",qe=e.p+"abc5ade9f6cd6928e96d.png";e.p,e.p,e.p,e.p,e.p,e.p,e.p;function Se(e){return"string"==typeof e}function $e(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function Oe(e){return t=>e.includes(t)}function Ae(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const Te="others",Re="settings",Ie="about",Ee="store_state",Ne=[Re,Ie,Ee];const Le="Навигационный фильтр",We=($e(Le,"title"),Oe(Ne),Ae(Le,"title"),$e(Le,"type"),"filter"),Pe="inbox",Ue="trash",Be="expired",Ce="completed",De=[Pe,Be,Ce,Ue];const Me="Навигационный фильтр",Ve=($e(Me,"title"),Oe(De),Ae(Me,"title"),$e(Me,"type"),"calendar");const Ge="Навигационный фильтр",Je=(D(Ge,"key"),$e(Ge,"type"),"category");const Ze="Навигационный фильтр";D(Ze,"key"),$e(Ze,"type");function Ke(e,t,r){return void 0===r&&(r=200),new Response(JSON.stringify({id:e,result:t}),{headers:c,status:r})}class Qe{constructor(e,t){this.type=e,this.data=t}}async function ze(e,r){t.clients.matchAll().then((t=>{t.forEach((t=>{t.id!==e&&t.postMessage(r)}))}))}function He(e,t){const r=ae(t);if(!r.error){const i=r.result;if(!e.priorities.find((e=>e.priority_id===i.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(i.category_id){if(!e.categories.find((e=>e.category_id===i.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const a=e.tasks.at(-1)?.task_id||0,n={...i,task_id:a+1};return e.tasks.push(n),{result:n}}return r}async function Fe(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=function(e,t){const r=oe(t);if(r.result){const i=r.result,a=e.tasks.findIndex((e=>e.task_id===i.task_id));return-1===a?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===i.priority_id))?i.category_id&&!e.categories.find((e=>e.category_id===i.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[a]=i,{result:i}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(r,a);if(n.result){const t=n.result;return await j(r),await ze(e.clientId,new Qe(g,t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}function Xe(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&r.every((r=>i.includes(r)&&Xe(e[r],t[r])))}async function Ye(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=function(e,t){const r=oe(t);if(r.result){const i=r.result,a=e.tasks.findIndex((e=>Xe(ne(e),ne(i))));return-1===a?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(a,1),{result:i})}return r}(r,a);if(n.result){const t=n.result;return await j(r),await ze(e.clientId,new Qe(y,t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}function et(e,t){const r=Q(t);if(r.result){const i=r.result,a=e.categories.find((e=>e.category_name===i.category_name));if(a)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===i.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const n=e.categories.at(-1)?.category_id||0,s={...i,category_id:n+1};return e.categories.push(s),{result:s}}return r}async function tt(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=function(e,t){const r=F(t);if(r.result){const i=r.result;let a=e.categories.findIndex((e=>e.category_id===i.category_id));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===i.category_name&&e.category_id!==i.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===i.icon_id))?(a=e.categories.findIndex((e=>e.category_id===i.category_id)),e.categories[a]=i,{result:i}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(r,a);if(n.result){const t=n.result;return j(r),await ze(e.clientId,new Qe("update_category",t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}async function rt(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=function(e,t){const r=F(t);if(r.result){const i=r.result,a=e.categories.findIndex((e=>Xe(e,i)));return-1===a?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===i.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(a,1),{result:i})}return r}(r,a);if(n.result){const t=n.result;return j(r),await ze(e.clientId,new Qe("delete_category",t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}function it(e){const t=(r=e.tasks,"structuredClone"in globalThis?structuredClone(r):r);var r;return e.tasks=[],{result:t}}function at(e){const{icon_id:t,file_name:r}=e||{};return{icon_id:t,file_name:r}}const nt="Иконка",st={icon_id:{validators:[[C,D(nt,"icon_id")]],required:!0},file_name:{validators:[[M(3,20),V(nt,"fole_name",3,20)]],required:!0}},ot=e=>G(e,st,at,nt);function ct(e){const t=ot(e);if(t.result){const e=t.result,r=x();if(r.icons.find((t=>t.file_name===e.file_name)))return{error:{message:"Иконка с таким именем уже существует",data:e}};const i=r.icons.at(-1)?.icon_id||0,a={...e,icon_id:i+1};return j({...r,icons:[...r.icons,a]}),{result:a}}return t}function dt(e){return/^#([0-9A-Fa-f]{3}){1,2}$/.test(e)}const ut=e=>`Свойство сущности ${e} "color" должно содержать описание цвета в формате HEX`,lt=["низкий","нормальный","повышенный","высокий"];function ft(e){const{priority_id:t,priority_name:r,color:i}=e||{};return{priority_id:t,priority_name:r,color:i}}const pt="Приоритет",gt={priority_id:{validators:[[C,D(pt,"priority_id")]],required:!0},priority_name:{validators:[[e=>lt.includes(e),`Свойство сущности ${pt} "priority_name" должно быть одним из ${JSON.stringify(lt)}`]],required:!0},color:{validators:[(e=>[dt,ut(e)])(pt)],required:!0}},yt=e=>G(e,gt,ft,pt);function mt(e){const t=yt(e);if(t.result){const e=t.result,r=x();if(r.priorities.find((t=>t.priority_name===e.priority_name)))return{error:{message:"Такой приоритет уже существует",data:e}};const i=r.priorities.at(-1)?.priority_id||0,a={...e,priority_id:i+1};return j({...r,priorities:[...r.priorities,a]}),{result:a}}return t}async function _t(e,t){switch(t){case o:return async function(e){const{request:t}=e,r=await $(),i=t.headers.get("x-request-id");return new Response(JSON.stringify({id:i,result:r}),{headers:c,status:200})}(e);case u:return async function(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=et(r,a);if(n.result){const t=n.result;return await j(r),await ze(e.clientId,new Qe("create_category",t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}(e);case l:return tt(e);case f:return rt(e);case p:return async function(e){const{request:t}=e,r=x(),{id:i,params:a}=await t.json(),n=He(r,a);if(n.result){const t=n.result;return await j(r),await ze(e.clientId,new Qe(p,t)),Ke(i,t)}return E(i,n.error.message,n.error.data)}(e);case g:return Fe(e);case y:return Ye(e);case m:return async function(e){const{request:t}=e,r=x(),{id:i}=await t.json(),a=it(r);if(a.result){const t=a.result;return await j(r),await ze(e.clientId,new Qe(m)),Ke(i,t)}return E(i,a.error.message,a.error.data)}(e);case _:return async function(e){const{request:t}=e,r={failed:{priorities:[],icons:[],categories:[],tasks:[]},imported:{priorities:[],icons:[],categories:[],tasks:[]}},i={priorities:[],icons:[],categories:[]},{id:a,params:n}=await t.json();if(n){const t=x(),{icons:s,tasks:o,priorities:c,categories:d}=n;if(!(s&&Array.isArray(s)&&o&&Array.isArray(o)&&c&&Array.isArray(c)&&d&&Array.isArray(d)))return E(a,"Невалидные данные");for(let e=0;e<o.length;e++){const a=o[e];let n;const u=c.find((e=>e.priority_id===a.priority_id));if(u&&!i.priorities.includes(u.priority_name)&&(n=mt(u),n.error?r.failed.priorities.push(n.error):r.imported.priorities.push(n.result),i.priorities.push(u.priority_name)),a.category_id){const e=d.find((e=>e.category_id===a.category_id));if(e){const a=s.find((t=>t.icon_id===e.icon_id));a&&(i.icons.includes(a.file_name)||(n=ct(a),n.error?r.failed.icons.push(n.error):r.imported.icons.push(n.result),i.icons.push(a.file_name))),i.categories.includes(e.category_name)||(n=et(t,e),n.error?r.failed.categories.push(n.error):r.imported.categories.push(n.result),i.categories.push(e.category_name))}}t.tasks.find((e=>e.title===a.title&&e.description===a.description&&e.priority_id===a.priority_id&&e.category_id===a.category_id&&e.completed==a.completed&&e.deleted==a.deleted&&e.expire_date_time==a.expire_date_time))?r.failed.tasks.push({message:"Задача уже существует",data:a}):(n=He(t,a),n.error?r.failed.tasks.push(n.error):r.imported.tasks.push(n.result))}j(t);const u=r.imported;return(u.priorities.length>0||u.icons.length>0||u.categories.length>0||u.tasks.length>0)&&await ze(e.clientId,new Qe(_,r.imported)),Ke(a,r)}return E(a,"Не удалось импортировать задачи")}(e);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,r=(await t.json()).id||B();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:c,status:200})}(e);default:return new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:c,status:200})}}t.id=Date.now(),t.VERSION="1.5.4",t.assets=R,t.isRepearing=!1,t.logger=T,t.onerror=I,t.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&t.skipWaiting()})),t.addEventListener("fetch",(async function(e){const r=e.request,i=function(e){const{pathname:t}=new URL(e);return t.startsWith(s)?t.slice(s.length):t}(r.url);switch(r.method){case"GET":return async function(){const e=await caches.open(a),r=(await e.keys()).map((e=>new URL(e.url).pathname)),i=t.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(i.length>0&&!t.isRepearing){t.isRepearing=!0;try{await e.addAll(i)}finally{t.isRepearing=!1}}}(),void await async function(e,r){if("document"!==e.request.destination||r!==L)t.assets.includes(r)&&e.respondWith(U(0,e.request.url,r));else{const r=t.assets.find((e=>e.startsWith(`${L}offline.`)&&e.endsWith(".html")))||"";e.respondWith(U(0,r,r))}}(e,i);case"POST":{const t=()=>_t(e,i);return void await async function(e,t,r){if(h.includes(t)){const e=x();e.icons&&0===e.icons.length&&await $()}e.respondWith(r())}(e,i,t)}default:e.respondWith(E(-1,"Не допустимый http метод"))}})),t.addEventListener("install",(async function(e){e.waitUntil(async function(){const e=await caches.open(a),r=(await e.keys()).map((e=>new URL(e.url).pathname)),i=t.assets.filter((e=>!r.includes(e)));t.loadedAssets=i,i.length>0&&await e.addAll(i)}())})),t.addEventListener("activate",(async function(e){e.waitUntil(O()),e.waitUntil(t.clients.claim())}))}();