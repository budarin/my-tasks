(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[179],{9051:function(e,t,r){function n(e,t,r,n){o=e.child({layer:a.UI}),s=t,i=r,d=n}r.d(t,{bZ:function(){return n}});var a=r(9594);r(6769);let o=null,i=null,s=null,d=null},9503:function(e,t,r){function n(e){return new Promise((t=>{setTimeout(t,e)}))}function a(e){const t=document.getElementById(e);t&&t.remove()}function o(e,t){const r=document.getElementById(e);r&&r.classList.remove(t)}function i(e,t,r){return async t=>{const n=(0,J.S)();return e({headers:{...Y.K_},body:{id:n,method:r,params:t}})}}function s(){return Boolean(document.startViewTransition)?e=>document.startViewTransition?.(e):ee}function d(e){function t(){n(250).then((()=>{ie?de():oe.play().catch(se)}))}function r(){n(250).then((()=>{oe.play().catch(se),de([100,30,100,30,100])}))}se=function(t){t instanceof DOMException&&"NotAllowedError"===t.name||e.error({message:ce,error:t})},ue={off:()=>{le=!0},on:()=>{le=!1},info:e=>le?Promise.resolve():n(0).then((()=>new Promise((t=>{re.Am.info(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...ae},onClose:()=>{t()}})})))),warn:e=>le?Promise.resolve():n(0).then((()=>new Promise((t=>{re.Am.warn(e,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...ae},onClose:()=>{t()}})})))),error:e=>le?Promise.resolve():n(0).then((()=>new Promise((r=>{re.Am.error(e,{autoClose:!1,style:{border:"1px solid var(--error-color)",...ae},onOpen:t,onClose:()=>{oe.pause(),r()}})})))),joyfullyGilling:e=>le?Promise.resolve():n(0).then((()=>new Promise((t=>{re.Am.success(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...ae},onOpen:r,onClose:()=>{t()}})}))))}}function c(e,t,r,n,a){ve=e,_e=t.child({layer:Y.ud}),ke=t.child({layer:Y.d}),we=r,be=n,he=a}function u(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function l(e){const{task_id:t,title:r,priority_id:n,category_id:a,description:o,due_date_time:i,deleted:s=!1,completed:d=!1}=e;if(i){const e=Date.parse(i),c=new Date(e);return{task_id:t,title:r,priority_id:n,category_id:a,description:o,deleted:s,completed:d,due_date_time:i,due_date_ts:new Date(c.getFullYear(),c.getMonth(),c.getDay()).valueOf(),due_date_time_ts:e}}return{task_id:t,title:r,priority_id:n,category_id:a,description:o,deleted:s,completed:d,due_date_time:void 0,due_date_ts:void 0,due_date_time_ts:void 0}}function y(e){return void 0!==e.due_date_time_ts&&e.due_date_time_ts<Date.now()}function g(e,t){const{tasks:r}=e,{idsByDueDate:n}=r;return t.due_date_ts?{...e,tasks:{...r,idsByDueDate:{...n,[t.due_date_ts]:[...n[t.due_date_ts]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function f(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Ee]:[...r.idsByFilterId[Ee],t.task_id]}}}}function m(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[De]:[...r.idsByFilterId[De],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function p(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Le]:[...r.idsByFilterId[Le],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function v(e,t){const{tasks:r}=e;return t.category_id?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:[...r.idsByCategoryId[t.category_id]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function _(e,t){const{tasks:r}=e;return!1===r.idsByFilterId[Pe].includes(t.task_id)?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Pe]:[...r.idsByFilterId[Pe],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function k(e,t){let r=e;return t.deleted?_(r,t):(t.category_id&&(r=v(r,t)),t.due_date_time?(r=g(r,t),y(t)&&(r=m(r,t))):r=f(r,t),!0===t.completed&&(r=p(r,t)),r)}function h(e,t){const{tasks:r}=e;return r.idsByFilterId[Ee].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ee]:r.idsByFilterId[Ee].filter((e=>e!==t.task_id))}}}:e}function w(e,t){const{tasks:r}=e;return r.idsByFilterId[De].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[De]:r.idsByFilterId[De].filter((e=>e!==t.task_id))}}}:e}function b(e,t){const{tasks:r}=e;return r.idsByFilterId[Le].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Le]:r.idsByFilterId[Le].filter((e=>e!==t.task_id))}}}:e}function I(e,t){const{tasks:r}=e;if(void 0!==t.due_date_time&&void 0!==r.idsByDueDate[t.due_date_ts]){const n={...e,tasks:{...r,idsByDueDate:{...r.idsByDueDate,[t.due_date_ts]:r.idsByDueDate[t.due_date_ts].filter((e=>e!==t.task_id))}}};if(0===n.tasks.idsByDueDate[t.due_date_ts].length){const{[t.due_date_ts]:e,...r}=n.tasks.idsByDueDate;n.tasks.idsByDueDate=r}return n}return e}function x(e,t){const{tasks:r}=e,n=void 0!==t.category_id&&r.idsByCategoryId[t.category_id].includes(t.task_id);return t.category_id&&n?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:r.idsByCategoryId[t.category_id].filter((e=>e!==t.task_id))}}}:e}function B(e,t,r){const n=function(e,t){const{tasks:r}=e;return r.idsByFilterId[Pe].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Pe]:r.idsByFilterId[Pe].filter((e=>e!==t.task_id))}}}:e}(e,t.byId[r.task_id]);return k(n,r)}function T(e,t){if(e.error){const{error:{message:r}}=e;we.error(t||r),ke.error(r,e.error.data)}return e}function C(){var e;_t=q.child({layer:Y.lw}),_t.info("🚀 Старт инициализации приложения"),_t.debug("инициализация провайдеров"),e=(0,G.hG)("/api"),q.child({layer:Y.bl}),Q={getTasks:i(e,0,"get_tasks"),createCategory:i(e,0,"create_category"),updateCategory:i(e,0,"update_category"),deleteCategory:i(e,0,"delete_category"),createTask:i(e,0,"create_task"),updateTask:i(e,0,"update_task"),deleteTask:i(e,0,"delete_task")},d(q.child({layer:Y.mr}));const t=new z.j(q.child({layer:Y.H3}));(0,vt.bZ)(q,ue,U,t),c(Q,q,ue,t,te)}function S(){!function(e,t){const r=document.getElementById(e);r&&r.classList.add(t)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(a)}),1e3)}async function F(){globalThis.utilTimers.forEach((e=>{clearTimeout(e)})),await async function(){const e=kt-(performance.now()-globalThis.htmlInitTime);e>0&&await n(e)}(),a("loading-text"),o("root","Root_hidden"),S()}function E(){window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),_t.debug("beforeinstallprompt"),function(e){ht=e}(e)}))}async function A(){_t.debug("настройка приложения"),window.addEventListener("securitypolicyviolation",(e=>{_t.error("CSP Violation Detected:",{"Blocked URI":e.blockedURI,"Violated Directive":e.violatedDirective,"Original Policy":e.originalPolicy})})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(e=>{let t="browser";e.matches&&(t="standalone"),_t.debug("display-mode изменился:",t)})),function(){function e(e){const t=localStorage.getItem("colorScheme");if(void 0===[Y._4,Y.R2].find((e=>e===t))){const t=document.documentElement,r=t.classList;e.matches?(r.add(Y._4),r.remove(Y.R2)):(r.add(Y.R2),r.remove(Y._4));const n=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim(),a=document.querySelector('meta[name="theme-color"]');a&&n&&a.setAttribute("content",n)}}const t=window.matchMedia("(prefers-color-scheme: dark)");e(t),t.addEventListener("change",e)}(),window.addEventListener("unhandledrejection",(e=>{e.preventDefault(),_t.error("Unhandled promise rejection",e.reason)})),E()}function P(){return"serviceWorker"in navigator}function j(e){let{title:t,message:r,buttonText:n}=e;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const a=document.createElement("h3");if(a.textContent=t,document.body.appendChild(a),r){const e=document.createElement("p");e.textContent=r,document.body.appendChild(e)}if(n){const e=document.createElement("button");e.textContent=n,e.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(e)}}function D(){window.location.reload()}async function N(){try{return await r.e(143).then(r.bind(r,6119))}catch(e){return _t.error("Ошибка загрузки компонента App"),{default:Tt}}}async function L(e){if(!e.result)return void _t.error("Failed to create app store",e.error);Re=(0,xe.Ue)()((()=>({...Be.VE,navigationFilter:Me(u(new Date)),tasks:{...Be.VE.tasks,idsByCategoryId:{},idsByDueDate:{},idsByFilterId:{[Ee]:[],[De]:[],[Le]:[],[Pe]:[]}}}))),(0,Be.eR)(Re,_e.child({layer:"[ DOMAIN ]"})),te.setEnabled(!1);const t=(e,t)=>{e.forEach((e=>{const r=t(e);r.error&&_t.error(r.error.message,e)}))},{icons:r,categories:n,priorities:a,tasks:o}=e.result;try{t(r,Xe.addIcon),t(n,Xe.addCategory),t(a,Xe.addPriority),t(o,Xe.addTask)}catch(e){_t.error("Initialization error",e)}finally{te.setEnabled(!0)}}function O(){return document.querySelector("#root")||function(){const e=document.createElement("div");return e.id="root",document.body.appendChild(e),e}()}async function H(){const e=O();L(await async function(){return _t.debug("предзагрузка данных для хранилища приложения"),Q.getTasks()}()),_t.debug("🦚 Старт рендера приложения"),(0,bt.s)(e).render((0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)(It.StrictMode,{children:(0,xt.jsx)(nr,{children:e=>({header:(0,xt.jsx)(Vt,{children:(0,xt.jsx)(rr,{...e,children:e.isNavVisible?(0,xt.jsx)(St,{}):(0,xt.jsx)(Ct,{})})}),nav:(0,xt.jsx)("div",{style:{height:"100%",background:"var(--surface-color)"},children:(0,xt.jsx)(Gt,{title:"Календарь"})}),content:(0,xt.jsx)("div",{style:{height:"100%",background:"var(--surface-color)"},children:(0,xt.jsx)(Yt,{title:"Список задач"})})})})}),(0,xt.jsx)(re.Ix,{draggablePercent:30,role:"alert"})]}))}async function Z(e,t,r){return new Promise(((n,a)=>{e.state===t?n():e.onstatechange=async()=>{_t.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),e.state===t?n():"redundant"===e.state&&(_t.debug("сервис-воркер стал не нужным"),a())}}))}function M(){!function(e,t){const r=document.getElementById(e);r&&(r.textContent=t)}(or,"Загрузка обновлений ..."),o(or,"loading-text_hidden")}async function R(e,t){return!(!e.waiting||"installed"!==e.waiting.state)&&(await async function(e){const t=performance.now();!e&&t<ar&&(_t.debug(`загрузка ассетов заняла меньше ${ar} мс - отображаем индикатор загрузки`),await n(ar-t))}(t),_t.debug(`отправляем сервис-воркеру сообщение: ${Y.fv}`),e.waiting.postMessage({type:Y.fv}),await Z(e.waiting,"activated",e),!0)}async function $(e){if(!e||!navigator.onLine)return!1;await e.update().then((async()=>{await n(0)})),navigator.serviceWorker.addEventListener("message",ir);let t=await async function(e){return!!e.installing&&(M(),_t.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await Z(e.installing,"installed",e),!0)}(e);return t=await R(e,t),await async function(e){e.active&&(_t.debug("сервис-воркер активируется"),await Z(e.active,"activated",e))}(e),!1===t&&navigator.serviceWorker.removeEventListener("message",ir),t}async function W(){const e=await globalThis.swRegistration;if(e instanceof Error)throw e;const t=await $(e);return t||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const e=await navigator.storage.persist(),t=e?"⭐️ ":"",r=e?"дал обещание":"отверг предложение";_t.debug(`${t}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",sr)),t}function V(e){if(!e.message.includes(`${window.location.origin}/sw.js`)){if(!function(e){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&e instanceof TypeError&&e.message.startsWith("Failed to update a ServiceWorker for scope")}(e))throw e;_t.error("Не удалось обновить сервис-воркер")}}var U={};r.r(U),r.d(U,{addCategory:function(){return Je},addIcon:function(){return Ye},addPriority:function(){return qe},addTask:function(){return ot},clearTrash:function(){return st},createCategory:function(){return et},createTask:function(){return ct},deleteCategory:function(){return rt},deleteTask:function(){return lt},undeleteTask:function(){return gt},updateCategory:function(){return at},updateTask:function(){return mt},useAppState:function(){return pt}});var z=r(7258),G=r(335),K=r(7849),X=r(1990),Y=r(9594);let q=K.G;q=new X.G("/log");var J=r(7029);let Q;const ee=e=>e(),te={apply:ee,setEnabled:e=>{te.apply=e?s():ee}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");te.apply=s()}();var re=r(1277),ne=r.p+"error.8ad17092b67f41ed6f08.mp3";const ae={lineHeight:1.45,color:"var(--text-color)",fontFamily:"robotoregular",backgroundColor:"var(--notify-surface-color)"},oe=new Audio(ne);oe.preload="auto",oe.volume=.25;const ie=!0===window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"vibrate"in navigator;let se;const de=function(e){void 0===e&&(e=[5]),ie&&window.navigator.vibrate(e)},ce="Ошибка воспроизведения звука";let ue,le=!1;var ye=r(4321),ge=r(8850),fe=r(4687),me=r(8975),pe=r(6769);let ve=pe.P,_e=pe.P,ke=pe.P,he=null,we=pe.P,be=null;var Ie=r(1),xe=r(270),Be=r(6790),Te=r(2182);const Ce="filter",Se="category",Fe="calendar",Ee="inbox",Ae="Черновики",Pe="trash",je="Корзина",De="overdue",Ne="Просроченные",Le="completed",Oe="Завершенные",He={[Ee]:Ae,[Pe]:je,[De]:Ne,[Le]:Oe},Ze={year:"numeric",month:"long",day:"numeric"},Me=e=>{return t=`${e.toLocaleDateString("ru-Ru",Ze)}`,r=u(e).valueOf(),{type:Fe,title:t,key:r};var t,r};let Re;var $e=r(9976);var We=r(3538);var Ve=r(5096),Ue=r(9882),ze=r(1276);const Ge=e=>{const t=Re.getState().tasks;if(!1===function(e,t){const r=(0,Ve.v)((0,Te._X)(e),{...(0,Te._X)(t),deleted:!0});return void 0!==e&&void 0!==t&&!0===r&&!0===e.deleted&&!t.deleted}(e.task_id&&t.byId[Number(e.task_id)]||{},e)){const t={message:`${Ge.name}: задача не найдена`,data:e};return _e.error(t.message,t.data),{error:t}}const r=(0,ze.x)({...e,deleted:!1});if(r.error)return r;const n=r.result,a=Re.getState(),o=B(a,t,l(n));return o!==a&&Re.setState(o),{result:n}},Ke=e=>e,Xe={addIcon:ye.U,addCategory:e=>{const t=(0,Ie.i)(e);if(t.error){const{message:e,data:r}=t.error;return _e.error(e,r),t}const r=t.result,n=Re.getState(),a=function(e,t){const{category_id:r}=t;return{...e,tasks:{...e.tasks,idsByCategoryId:{...e.tasks.idsByCategoryId,[r]:[]}}}}(n,r);return a!==n&&Re.setState(a),{result:r}},deleteCategory:e=>{const t=(0,$e.u)(e);if(t.error){const{message:e,data:r}=t.error;return _e.error(e,r),t}const r=t.result,n=Re.getState(),a=function(e,t){const{category_id:r}=t,{[r]:n,...a}=e.tasks.idsByCategoryId;return{...e,tasks:{...e.tasks,idsByCategoryId:a}}}(n,r);return a!==n&&Re.setState(a),{result:r}},updateCategory:ge.y,addPriority:fe.O,createCalendarNavigationFilter:Me,createCategoryNavigationFilter:(e,t)=>function(e,t){return{type:Se,title:t,key:e}}(e,t),createFilterNavigationFilter:e=>{return{type:Ce,title:He[t=e],key:t};var t},setNavigationFilter:function(e){const t=Re.getState();return Re.setState({...t,navigationFilter:e}),{result:e}},addTask:e=>{const t=(0,We.g)(e);if(t.error)return t;const r=t.result,n=Re.getState(),a=k(n,l(r));return n!==a&&Re.setState(a),{result:r}},trashTask:function(e){const t=Re.getState(),{[Number(e.task_id)]:r,...n}=t.tasks.byId,a={...t,tasks:{...t.tasks,byId:n,ids:t.tasks.ids.filter((t=>t!==e.task_id)),idsByFilterId:{...t.tasks.idsByFilterId,[Pe]:t.tasks.idsByFilterId[Pe].filter((t=>t!==e.task_id))}}};return t!==a&&(Re.setState(a),_e.debug("clearTrash")),{result:e}},deleteTask:e=>{const t=Re.getState().tasks,r=e.task_id&&(0,Ue._X)(t.byId[e.task_id]);if(!(0,Ve.v)((0,Ue._X)(e),r)){const t={message:"Задача не найдена",data:e};return _e.error(t.message,t.data),{error:t}}const n=(0,ze.x)({...e,deleted:!0});if(n.error){const{message:e,data:t}=n.error;return _e.error(e,t),n}const a=n.result,o=Re.getState(),i=function(e,t,r){let n=e;return function(e,t){return e&&!e.deleted&&!0===t.deleted}(t.byId[r.task_id],r)&&(n=x(n,r),n=I(n,r),n=h(n,r),n=w(n,r),n=b(n,r),n=_(n,r)),n}(o,t,l(a));return i!==o&&Re.setState(i),{result:a}},undeleteTask:Ge,updateTask:e=>{const{task_id:t}=e;let r=Re.getState();const n=r.tasks;if(t&&!0===n.byId[t].deleted){const t={message:"Нельзя обновить удаленную задачу",data:e};return _e.error(t.message,t.data),{error:t}}const a=(0,ze.x)(e);if(a.error){const{message:e,data:t}=a.error;return _e.error(e,t),a}const o=a.result;r=Re.getState();const i=function(e,t,r){const n=t.byId[r.task_id];let a=e;return function(e,t){return void 0===e.category_id&&void 0!==t.category_id}(n,r)&&(a=v(a,r)),function(e,t){return void 0!==e.category_id&&void 0===t.category_id}(n,r)&&(a=x(a,n)),function(e,t){return e.category_id!==t.category_id}(n,r)&&(a=x(a,n),a=v(a,r)),function(e,t){return void 0===e.due_date_time&&void 0!==t.due_date_time}(n,r)&&(a=h(a,n),a=g(a,r),y(r)&&(a=m(a,r))),function(e,t){return void 0!==e.due_date_time&&void 0===t.due_date_time}(n,r)&&(a=I(a,n),a=w(a,r),a=f(a,r)),function(e,t){return void 0!==e.due_date_time&&void 0!==t.due_date_time&&e.due_date_time!==t.due_date_time}(n,r)&&(a=I(a,n),a=w(a,r),a=g(a,r),y(r)&&(a=m(a,r))),a=function(e,t){return!0===t.completed&&e.completed!==t.completed}(n,r)?p(a,r):b(a,r),a}(r,n,l(o));return i!==r&&Re.setState(i),{result:o}},useAppState:()=>Re(Ke),getCategotyById:e=>Re.getState().categories.byId[e],getTaskInTrash:me.B},Ye=e=>T(Xe.addIcon(e),"Ошибка добавления иконки"),qe=e=>T(Xe.addPriority(e),"Ошибка добавления приоритета"),Je=e=>T(Xe.addCategory(e),"Ошибка при добавлении категории"),Qe="Ошибка создания новой категории",et=async e=>{const t=await ve.createCategory(e);if(t.error)return T(t,`${Qe} на сервере`);const r=Xe.addCategory(t.result);return r.error?T(t,Qe):r},tt="Ошибка удаления категории",rt=async e=>{const t=await ve.deleteCategory(e);if(t.error)return T(t,`${tt} на сервере`);const r=Xe.deleteCategory(t.result);return r.error?T(t,tt):r},nt="Ошибка обновления категории",at=async e=>{const t=await ve.updateCategory(e);if(t.error)return T(t,`${nt} на сервере`);const r=Xe.updateCategory(t.result);return r.error?T(t,nt):r},ot=e=>T(Xe.addTask(e),"Ошибка добавления задачи"),it="Ошибка очистки корзины",st=async()=>{const e=await Promise.all(Xe.getTaskInTrash().map((async e=>{const t=await ve.deleteTask(e);t.error&&ke.error(`${it} на сервере`,t.error.data);const r=Xe.trashTask(e);return r.error&&ke.error(it,r.error.data),r})));return e.find((e=>e.error))&&we.error(it),e},dt="Ошибка создания задачи",ct=async e=>{const t=await ve.createTask(e);if(t.error)return T(t,`${dt} на сервере`);const r=Xe.addTask(t.result);return r.error?T(t,dt):r},ut="Ошибка удаления задачи",lt=async e=>{const t=await ve.deleteTask(e);if(t.error)return T(t,`${ut} на сервере`);const r=Xe.deleteTask(t.result);return r.error?T(t,ut):r},yt="Ошибка восстановления задачи из корзины",gt=async e=>{const t=await ve.updateTask({...e,deleted:!1});if(t.error)return T(t,`${yt} на сервере`);const r=Xe.updateTask(t.result);return r.error?T(t,yt):r},ft="Ошибка обновления задачи",mt=async e=>{const t=await ve.updateTask(e);if(t.error)return T(t,`${ft} на сервере`);const r=Xe.updateTask(t.result);return r.error?T(t,ft):r},pt=()=>Xe.useAppState();var vt=r(9051);let _t=pe.P;const kt=1e3;let ht;class wt extends Error{constructor(e){void 0===e&&(e="Сервис-воркер не поддерживается"),super(e),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,wt.prototype)}}var bt=r(745),It=r(7294),xt=r(5893),Bt=function(e){let{pageReload:t}=e;return(0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,xt.jsx)("button",{type:"button",onClick:t,children:"Перезагрузить страницу"})]})},Tt=function(){return(0,xt.jsx)(Bt,{pageReload:D})},Ct=function(e){const{className:t}=e;return(0,xt.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,xt.jsx)("path",{d:"M4 17H20M4 12H20M4 7H20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},St=function(e){const{className:t}=e;return(0,xt.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,xt.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",fill:"currentColor"})})},Ft=r.p+"todo.cd3261e56180c2c0e031.svg",Et=r(3379),At=r.n(Et),Pt=r(7795),jt=r.n(Pt),Dt=r(569),Nt=r.n(Dt),Lt=r(3565),Ot=r.n(Lt),Ht=r(9216),Zt=r.n(Ht),Mt=r(4589),Rt=r.n(Mt),$t=r(656),Wt={};Wt.styleTagTransform=Rt(),Wt.setAttributes=Ot(),Wt.insert=Nt().bind(null,"head"),Wt.domAPI=jt(),Wt.insertStyleElement=Zt();At()($t.Z,Wt),$t.Z&&$t.Z.locals&&$t.Z.locals;var Vt=function(e){let{children:t}=e;return(0,xt.jsxs)("div",{className:"AppHeader",children:[(0,xt.jsx)("img",{className:"AppHeader-Icon",src:Ft,alt:"App logo"}),(0,xt.jsx)("h1",{className:"AppHeader-Title",children:"Мои Задачи"}),(0,xt.jsx)("div",{className:"AppHeader-MenuButtonContainer",children:t})]})},Ut=r(9187),zt={};zt.styleTagTransform=Rt(),zt.setAttributes=Ot(),zt.insert=Nt().bind(null,"head"),zt.domAPI=jt(),zt.insertStyleElement=Zt();At()(Ut.Z,zt),Ut.Z&&Ut.Z.locals&&Ut.Z.locals;var Gt=function(e){let{title:t}=e;return(0,xt.jsx)("h3",{className:"NavSection",children:t})},Kt=r(2205),Xt={};Xt.styleTagTransform=Rt(),Xt.setAttributes=Ot(),Xt.insert=Nt().bind(null,"head"),Xt.domAPI=jt(),Xt.insertStyleElement=Zt();At()(Kt.Z,Xt),Kt.Z&&Kt.Z.locals&&Kt.Z.locals;var Yt=function(e){let{title:t}=e;return(0,xt.jsx)("h3",{className:"TodoListHeader",children:t})},qt=r(1504);const Jt=()=>{};var Qt=r(489),er={};er.styleTagTransform=Rt(),er.setAttributes=Ot(),er.insert=Nt().bind(null,"head"),er.domAPI=jt(),er.insertStyleElement=Zt();At()(Qt.Z,er),Qt.Z&&Qt.Z.locals&&Qt.Z.locals;const tr=(0,qt.cn)("AppHeaderNavMenuButton");var rr=function(e){let{isNavVisible:t=!1,toggleNavVisibility:r=Jt,showToggleNavButton:n=!1}=e;const a=(t?"Скрыть":"Открыть")+" боковую панель";return(0,xt.jsx)("button",{type:"button",title:a,onClick:r,className:tr({hidden:!n}),children:t?(0,xt.jsx)(St,{}):(0,xt.jsx)(Ct,{})})};r(257);const nr=(0,It.lazy)(N),ar=1e3,or="loading-text",ir=e=>{e.data.type===Y.T1&&(_t.debug(`получили сообщение от сервис-воркера ${Y.T1} - перезагружаем страницу`),D())},sr=e=>{_t.debug("получили сообщение от сервис-воркера",e.data),te.apply((()=>{switch(e.data.type){case"create_category":Xe.addCategory(e.data.data);break;case"update_category":Xe.updateCategory(e.data.data);break;case"delete_category":Xe.deleteCategory(e.data.data);break;case"create_task":Xe.addTask(e.data.data);break;case"update_task":Xe.updateTask(e.data.data);break;case"delete_task":Xe.deleteTask(e.data.data)}}))};!async function(){C();try{!await async function(){_t.debug("настройка сервис-воркера...");let e=!1;if(!P())throw _t.debug("сервис-воркер не поддерживается"),new wt;_t.debug("сервис-воркер поддерживается");try{e=await W()}catch(e){V(e)}return e}()&&(await A(),await H(),await F())}catch(e){!function(e){if(_t.error("ошибка при инициализации приложения",e),e instanceof wt)P()?j({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):j({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(e instanceof Error&&"Error"===e.name)return;j({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(e)}}()},9594:function(e,t,r){r.d(t,{H3:function(){return d},K_:function(){return u},R2:function(){return f},T1:function(){return l},UI:function(){return n},_4:function(){return g},bl:function(){return o},d:function(){return c},fv:function(){return y},lw:function(){return a},mr:function(){return s},ud:function(){return i}});const n="[ UI ]",a="[ APP ]",o="[ API ]",i="[ STORE ]",s="[ NOTIFY ]",d="[ LOCAL-STORAGE ]",c="[ USE-CASES ]",u={"Content-Type":"application/json; charset=utf-8"},l="RELOAD_PAGE",y="SKIP_WAITING",g="dark",f="light"},6769:function(e,t,r){r.d(t,{P:function(){return n}});const n=(0,r(8398).K)()},489:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppHeaderNavMenuButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--surfaceColor);border:initial;color:var(--light-text-color);cursor:pointer;display:block;max-height:var(--x8);max-width:var(--x8);padding:calc(var(--x)*(1 - var(--isTouch)))}.AppHeaderNavMenuButton:active,.AppHeaderNavMenuButton:hover{color:var(--text-color)}.AppHeaderNavMenuButton_hidden{display:none}",""]),t.Z=i},656:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppHeader{align-items:center;display:flex;padding-left:var(--x4);padding-right:var(--x4)}.AppHeader-Icon{height:var(--x8);vertical-align:text-bottom;width:var(--x8)}.AppHeader-Title{display:inline-block;flex:1;font-size:1.5rem;margin-left:var(--x4)}.AppHeader-MenuButtonContainer{max-height:var(--x10);max-width:var(--x10);overflow:hidden;padding:var(--x);padding-top:var(--x2)}@media only screen and (min-height:40.001rem){.AppHeader{height:5rem}}",""]),t.Z=i},9187:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".NavSection{background-color:var(--panel-surface-color);color:var(--panel-color);font-size:var(--x5);font-weight:400;margin:0;padding:var(--x2) var(--x4)}",""]),t.Z=i},2205:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".TodoListHeader{background-color:var(--selection-color);color:var(--panel-color);font-size:var(--x5);font-weight:400;margin:0;padding:var(--x2) var(--x4)}",""]),t.Z=i}},function(e){e.O(0,[568,169,514],(function(){return t=9503,e(e.s=t);var t}));e.O()}]);