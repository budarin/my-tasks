(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[179],{9051:function(e,t,r){function a(e,t,r,a){o=e.child({layer:n.UI}),s=t,i=r,d=a}r.d(t,{bZ:function(){return a}});var n=r(9594);r(6769);let o=null,i=null,s=null,d=null},3490:function(e,t,r){function a(e){return new Promise((t=>{setTimeout(t,e)}))}function n(e){const t=document.getElementById(e);t&&t.remove()}function o(e,t){const r=document.getElementById(e);r&&r.classList.remove(t)}function i(e,t,r){return async t=>{const a=(0,J.S)();return e({headers:{...Y.K_},body:{id:a,method:r,params:t}})}}function s(){return Boolean(document.startViewTransition)?e=>document.startViewTransition?.(e):ee}function d(e){function t(){a(250).then((()=>{ie?de():oe.play().catch(se)}))}function r(){a(250).then((()=>{oe.play().catch(se),de([100,30,100,30,100])}))}se=function(t){t instanceof DOMException&&"NotAllowedError"===t.name||e.error({message:ce,error:t})},ue={off:()=>{le=!0},on:()=>{le=!1},info:e=>le?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.info(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...ne},onClose:()=>{t()}})})))),warn:e=>le?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.warn(e,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...ne},onClose:()=>{t()}})})))),error:e=>le?Promise.resolve():a(0).then((()=>new Promise((r=>{re.Am.error(e,{autoClose:!1,style:{border:"1px solid var(--error-color)",...ne},onOpen:t,onClose:()=>{oe.pause(),r()}})})))),joyfullyGilling:e=>le?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.success(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...ne},onOpen:r,onClose:()=>{t()}})}))))}}function c(e,t,r,a,n){_e=e,ve=t.child({layer:Y.ud}),ke=t.child({layer:Y.d}),we=r,be=a,he=n}function u(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function l(e){const{task_id:t,title:r,priority_id:a,category_id:n,description:o,due_date_time:i,deleted:s=!1,completed:d=!1}=e;if(i){const e=Date.parse(i),c=new Date(e);return{task_id:t,title:r,priority_id:a,category_id:n,description:o,deleted:s,completed:d,due_date_time:i,due_date_ts:new Date(c.getFullYear(),c.getMonth(),c.getDay()).valueOf(),due_date_time_ts:e}}return{task_id:t,title:r,priority_id:a,category_id:n,description:o,deleted:s,completed:d,due_date_time:void 0,due_date_ts:void 0,due_date_time_ts:void 0}}function y(e){return void 0!==e.due_date_time_ts&&e.due_date_time_ts<Date.now()}function g(e,t){const{tasks:r}=e,{idsByDueDate:a}=r;return t.due_date_ts?{...e,tasks:{...r,idsByDueDate:{...a,[t.due_date_ts]:[...a[t.due_date_ts]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function f(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Ee]:[...r.idsByFilterId[Ee],t.task_id]}}}}function m(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[je]:[...r.idsByFilterId[je],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function p(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Le]:[...r.idsByFilterId[Le],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function _(e,t){const{tasks:r}=e;return t.category_id?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:[...r.idsByCategoryId[t.category_id]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function v(e,t){const{tasks:r}=e;return!1===r.idsByFilterId[De].includes(t.task_id)?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[De]:[...r.idsByFilterId[De],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function k(e,t){let r=e;return t.deleted?v(r,t):(t.category_id&&(r=_(r,t)),t.due_date_time?(r=g(r,t),y(t)&&(r=m(r,t))):r=f(r,t),!0===t.completed&&(r=p(r,t)),r)}function h(e,t){const{tasks:r}=e;return r.idsByFilterId[Ee].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ee]:r.idsByFilterId[Ee].filter((e=>e!==t.task_id))}}}:e}function w(e,t){const{tasks:r}=e;return r.idsByFilterId[je].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[je]:r.idsByFilterId[je].filter((e=>e!==t.task_id))}}}:e}function b(e,t){const{tasks:r}=e;return r.idsByFilterId[Le].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Le]:r.idsByFilterId[Le].filter((e=>e!==t.task_id))}}}:e}function I(e,t){const{tasks:r}=e;if(void 0!==t.due_date_time&&void 0!==r.idsByDueDate[t.due_date_ts]){const a={...e,tasks:{...r,idsByDueDate:{...r.idsByDueDate,[t.due_date_ts]:r.idsByDueDate[t.due_date_ts].filter((e=>e!==t.task_id))}}};if(0===a.tasks.idsByDueDate[t.due_date_ts].length){const{[t.due_date_ts]:e,...r}=a.tasks.idsByDueDate;a.tasks.idsByDueDate=r}return a}return e}function x(e,t){const{tasks:r}=e,a=void 0!==t.category_id&&r.idsByCategoryId[t.category_id].includes(t.task_id);return t.category_id&&a?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:r.idsByCategoryId[t.category_id].filter((e=>e!==t.task_id))}}}:e}function B(e,t,r){const a=function(e,t){const{tasks:r}=e;return r.idsByFilterId[De].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[De]:r.idsByFilterId[De].filter((e=>e!==t.task_id))}}}:e}(e,t.byId[r.task_id]);return k(a,r)}function C(e,t){if(e.error){const{error:{message:r}}=e;we.error(t||r),ke.error(r,e.error.data)}return e}function T(){var e;vt=q.child({layer:Y.lw}),vt.info("🚀 Старт инициализации приложения"),vt.debug("инициализация провайдеров"),e=(0,G.hG)("/api"),q.child({layer:Y.bl}),Q={getTasks:i(e,0,"get_tasks"),createCategory:i(e,0,"create_category"),updateCategory:i(e,0,"update_category"),deleteCategory:i(e,0,"delete_category"),createTask:i(e,0,"create_task"),updateTask:i(e,0,"update_task"),deleteTask:i(e,0,"delete_task")},d(q.child({layer:Y.mr}));const t=new z.j(q.child({layer:Y.H3}));(0,_t.bZ)(q,ue,U,t),c(Q,q,ue,t,te)}function F(){!function(e,t){const r=document.getElementById(e);r&&r.classList.add(t)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(n)}),1e3)}async function S(){globalThis.utilTimers.forEach((e=>{clearTimeout(e)})),await async function(){const e=kt-(performance.now()-globalThis.htmlInitTime);e>0&&await a(e)}(),n("loading-text"),o("root","Root_hidden"),F()}function E(){window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),vt.debug("beforeinstallprompt"),function(e){ht=e}(e)}))}async function A(){vt.debug("настройка приложения"),window.addEventListener("securitypolicyviolation",(e=>{vt.error("CSP Violation Detected:",{"Blocked URI":e.blockedURI,"Violated Directive":e.violatedDirective,"Original Policy":e.originalPolicy})})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(e=>{let t="browser";e.matches&&(t="standalone"),vt.debug("display-mode изменился:",t)})),function(){function e(e){const t=localStorage.getItem("colorScheme");if(void 0===[Y._4,Y.R2].find((e=>e===t))){const t=document.documentElement,r=t.classList;e.matches?(r.add(Y._4),r.remove(Y.R2)):(r.add(Y.R2),r.remove(Y._4));const a=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim(),n=document.querySelector('meta[name="theme-color"]');n&&a&&n.setAttribute("content",a)}}const t=window.matchMedia("(prefers-color-scheme: dark)");e(t),t.addEventListener("change",e)}(),window.addEventListener("unhandledrejection",(e=>{e.preventDefault(),vt.error("Unhandled promise rejection",e.reason)})),E()}function D(){return"serviceWorker"in navigator}function P(e){let{title:t,message:r,buttonText:a}=e;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const n=document.createElement("h3");if(n.textContent=t,document.body.appendChild(n),r){const e=document.createElement("p");e.textContent=r,document.body.appendChild(e)}if(a){const e=document.createElement("button");e.textContent=a,e.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(e)}}function j(){window.location.reload()}async function N(){try{return await r.e(143).then(r.bind(r,6119))}catch(e){return vt.error("Ошибка загрузки компонента App"),{default:Ct}}}async function L(e){if(!e.result)return void vt.error("Failed to create app store",e.error);$e=(0,xe.Ue)()((()=>({...Be.VE,navigationFilter:Re(u(new Date)),tasks:{...Be.VE.tasks,idsByCategoryId:{},idsByDueDate:{},idsByFilterId:{[Ee]:[],[je]:[],[Le]:[],[De]:[]}}}))),(0,Be.eR)($e,ve.child({layer:"[ DOMAIN ]"})),te.setEnabled(!1);const t=(e,t)=>{e.forEach((e=>{const r=t(e);r.error&&vt.error(r.error.message,e)}))},{icons:r,categories:a,priorities:n,tasks:o}=e.result;try{t(r,Xe.addIcon),t(a,Xe.addCategory),t(n,Xe.addPriority),t(o,Xe.addTask)}catch(e){vt.error("Initialization error",e)}finally{te.setEnabled(!0)}}function O(){return document.querySelector("#root")||function(){const e=document.createElement("div");return e.id="root",document.body.appendChild(e),e}()}async function H(){const e=O();L(await async function(){return vt.debug("предзагрузка данных для хранилища приложения"),Q.getTasks()}()),vt.debug("🦚 Старт рендера приложения"),(0,bt.s)(e).render((0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)(It.StrictMode,{children:(0,xt.jsx)(qt,{children:e=>({header:(0,xt.jsx)(Vt,{children:(0,xt.jsx)(Yt,{...e,children:e.isNavVisible?(0,xt.jsx)(Ft,{}):(0,xt.jsx)(Tt,{})})}),nav:(0,xt.jsx)("div",{style:{color:"var(--text-color)",background:"var(--surface-color)",height:"100%"}}),content:(0,xt.jsx)("div",{style:{color:"var(--text-color)",background:"var(--surface-color)",height:"100%"}})})})}),(0,xt.jsx)(re.Ix,{draggablePercent:30,role:"alert"})]}))}async function M(e,t,r){return new Promise(((a,n)=>{e.state===t?a():e.onstatechange=async()=>{vt.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),e.state===t?a():"redundant"===e.state&&(vt.debug("сервис-воркер стал не нужным"),n())}}))}function R(){!function(e,t){const r=document.getElementById(e);r&&(r.textContent=t)}(Qt,"Загрузка обновлений ..."),o(Qt,"loading-text_hidden")}async function $(e,t){return!(!e.waiting||"installed"!==e.waiting.state)&&(await async function(e){const t=performance.now();!e&&t<Jt&&(vt.debug(`загрузка ассетов заняла меньше ${Jt} мс - отображаем индикатор загрузки`),await a(Jt-t))}(t),vt.debug(`отправляем сервис-воркеру сообщение: ${Y.fv}`),e.waiting.postMessage({type:Y.fv}),await M(e.waiting,"activated",e),!0)}async function Z(e){if(!e||!navigator.onLine)return!1;await e.update().then((async()=>{await a(0)})),navigator.serviceWorker.addEventListener("message",er);let t=await async function(e){return!!e.installing&&(R(),vt.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await M(e.installing,"installed",e),!0)}(e);return t=await $(e,t),await async function(e){e.active&&(vt.debug("сервис-воркер активируется"),await M(e.active,"activated",e))}(e),!1===t&&navigator.serviceWorker.removeEventListener("message",er),t}async function W(){const e=await globalThis.swRegistration;if(e instanceof Error)throw e;const t=await Z(e);return t||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const e=await navigator.storage.persist(),t=e?"⭐️ ":"",r=e?"дал обещание":"отверг предложение";vt.debug(`${t}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",tr)),t}function V(e){if(!e.message.includes(`${window.location.origin}/sw.js`)){if(!function(e){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&e instanceof TypeError&&e.message.startsWith("Failed to update a ServiceWorker for scope")}(e))throw e;vt.error("Не удалось обновить сервис-воркер")}}var U={};r.r(U),r.d(U,{addCategory:function(){return Je},addIcon:function(){return Ye},addPriority:function(){return qe},addTask:function(){return ot},clearTrash:function(){return st},createCategory:function(){return et},createTask:function(){return ct},deleteCategory:function(){return rt},deleteTask:function(){return lt},undeleteTask:function(){return gt},updateCategory:function(){return nt},updateTask:function(){return mt},useAppState:function(){return pt}});var z=r(7258),G=r(335),K=r(7849),X=r(1990),Y=r(9594);let q=K.G;q=new X.G("/log");var J=r(7029);let Q;const ee=e=>e(),te={apply:ee,setEnabled:e=>{te.apply=e?s():ee}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");te.apply=s()}();var re=r(1277),ae=r.p+"error.8ad17092b67f41ed6f08.mp3";const ne={lineHeight:1.45,color:"var(--textColor)",fontFamily:"robotoregular",backgroundColor:"var(--notify-surface-color)"},oe=new Audio(ae);oe.preload="auto",oe.volume=.25;const ie=!0===window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"vibrate"in navigator;let se;const de=function(e){void 0===e&&(e=[5]),ie&&window.navigator.vibrate(e)},ce="Ошибка воспроизведения звука";let ue,le=!1;var ye=r(4321),ge=r(8850),fe=r(4687),me=r(8975),pe=r(6769);let _e=pe.P,ve=pe.P,ke=pe.P,he=null,we=pe.P,be=null;var Ie=r(1),xe=r(270),Be=r(6790),Ce=r(2182);const Te="filter",Fe="category",Se="calendar",Ee="inbox",Ae="Черновики",De="trash",Pe="Корзина",je="overdue",Ne="Просроченные",Le="completed",Oe="Завершенные",He={[Ee]:Ae,[De]:Pe,[je]:Ne,[Le]:Oe},Me={year:"numeric",month:"long",day:"numeric"},Re=e=>{return t=`${e.toLocaleDateString("ru-Ru",Me)}`,r=u(e).valueOf(),{type:Se,title:t,key:r};var t,r};let $e;var Ze=r(9976);var We=r(3538);var Ve=r(5096),Ue=r(9882),ze=r(1276);const Ge=e=>{const t=$e.getState().tasks;if(!1===function(e,t){const r=(0,Ve.v)((0,Ce._X)(e),{...(0,Ce._X)(t),deleted:!0});return void 0!==e&&void 0!==t&&!0===r&&!0===e.deleted&&!t.deleted}(e.task_id&&t.byId[Number(e.task_id)]||{},e)){const t={message:`${Ge.name}: задача не найдена`,data:e};return ve.error(t.message,t.data),{error:t}}const r=(0,ze.x)({...e,deleted:!1});if(r.error)return r;const a=r.result,n=$e.getState(),o=B(n,t,l(a));return o!==n&&$e.setState(o),{result:a}},Ke=e=>e,Xe={addIcon:ye.U,addCategory:e=>{const t=(0,Ie.i)(e);if(t.error){const{message:e,data:r}=t.error;return ve.error(e,r),t}const r=t.result,a=$e.getState(),n=function(e,t){const{category_id:r}=t;return{...e,tasks:{...e.tasks,idsByCategoryId:{...e.tasks.idsByCategoryId,[r]:[]}}}}(a,r);return n!==a&&$e.setState(n),{result:r}},deleteCategory:e=>{const t=(0,Ze.u)(e);if(t.error){const{message:e,data:r}=t.error;return ve.error(e,r),t}const r=t.result,a=$e.getState(),n=function(e,t){const{category_id:r}=t,{[r]:a,...n}=e.tasks.idsByCategoryId;return{...e,tasks:{...e.tasks,idsByCategoryId:n}}}(a,r);return n!==a&&$e.setState(n),{result:r}},updateCategory:ge.y,addPriority:fe.O,createCalendarNavigationFilter:Re,createCategoryNavigationFilter:(e,t)=>function(e,t){return{type:Fe,title:t,key:e}}(e,t),createFilterNavigationFilter:e=>{return{type:Te,title:He[t=e],key:t};var t},setNavigationFilter:function(e){const t=$e.getState();return $e.setState({...t,navigationFilter:e}),{result:e}},addTask:e=>{const t=(0,We.g)(e);if(t.error)return t;const r=t.result,a=$e.getState(),n=k(a,l(r));return a!==n&&$e.setState(n),{result:r}},trashTask:function(e){const t=$e.getState(),{[Number(e.task_id)]:r,...a}=t.tasks.byId,n={...t,tasks:{...t.tasks,byId:a,ids:t.tasks.ids.filter((t=>t!==e.task_id)),idsByFilterId:{...t.tasks.idsByFilterId,[De]:t.tasks.idsByFilterId[De].filter((t=>t!==e.task_id))}}};return t!==n&&($e.setState(n),ve.debug("clearTrash")),{result:e}},deleteTask:e=>{const t=$e.getState().tasks,r=e.task_id&&(0,Ue._X)(t.byId[e.task_id]);if(!(0,Ve.v)((0,Ue._X)(e),r)){const t={message:"Задача не найдена",data:e};return ve.error(t.message,t.data),{error:t}}const a=(0,ze.x)({...e,deleted:!0});if(a.error){const{message:e,data:t}=a.error;return ve.error(e,t),a}const n=a.result,o=$e.getState(),i=function(e,t,r){let a=e;return function(e,t){return e&&!e.deleted&&!0===t.deleted}(t.byId[r.task_id],r)&&(a=x(a,r),a=I(a,r),a=h(a,r),a=w(a,r),a=b(a,r),a=v(a,r)),a}(o,t,l(n));return i!==o&&$e.setState(i),{result:n}},undeleteTask:Ge,updateTask:e=>{const{task_id:t}=e;let r=$e.getState();const a=r.tasks;if(t&&!0===a.byId[t].deleted){const t={message:"Нельзя обновить удаленную задачу",data:e};return ve.error(t.message,t.data),{error:t}}const n=(0,ze.x)(e);if(n.error){const{message:e,data:t}=n.error;return ve.error(e,t),n}const o=n.result;r=$e.getState();const i=function(e,t,r){const a=t.byId[r.task_id];let n=e;return function(e,t){return void 0===e.category_id&&void 0!==t.category_id}(a,r)&&(n=_(n,r)),function(e,t){return void 0!==e.category_id&&void 0===t.category_id}(a,r)&&(n=x(n,a)),function(e,t){return e.category_id!==t.category_id}(a,r)&&(n=x(n,a),n=_(n,r)),function(e,t){return void 0===e.due_date_time&&void 0!==t.due_date_time}(a,r)&&(n=h(n,a),n=g(n,r),y(r)&&(n=m(n,r))),function(e,t){return void 0!==e.due_date_time&&void 0===t.due_date_time}(a,r)&&(n=I(n,a),n=w(n,r),n=f(n,r)),function(e,t){return void 0!==e.due_date_time&&void 0!==t.due_date_time&&e.due_date_time!==t.due_date_time}(a,r)&&(n=I(n,a),n=w(n,r),n=g(n,r),y(r)&&(n=m(n,r))),n=function(e,t){return!0===t.completed&&e.completed!==t.completed}(a,r)?p(n,r):b(n,r),n}(r,a,l(o));return i!==r&&$e.setState(i),{result:o}},useAppState:()=>$e(Ke),getCategotyById:e=>$e.getState().categories.byId[e],getTaskInTrash:me.B},Ye=e=>C(Xe.addIcon(e),"Ошибка добавления иконки"),qe=e=>C(Xe.addPriority(e),"Ошибка добавления приоритета"),Je=e=>C(Xe.addCategory(e),"Ошибка при добавлении категории"),Qe="Ошибка создания новой категории",et=async e=>{const t=await _e.createCategory(e);if(t.error)return C(t,`${Qe} на сервере`);const r=Xe.addCategory(t.result);return r.error?C(t,Qe):r},tt="Ошибка удаления категории",rt=async e=>{const t=await _e.deleteCategory(e);if(t.error)return C(t,`${tt} на сервере`);const r=Xe.deleteCategory(t.result);return r.error?C(t,tt):r},at="Ошибка обновления категории",nt=async e=>{const t=await _e.updateCategory(e);if(t.error)return C(t,`${at} на сервере`);const r=Xe.updateCategory(t.result);return r.error?C(t,at):r},ot=e=>C(Xe.addTask(e),"Ошибка добавления задачи"),it="Ошибка очистки корзины",st=async()=>{const e=await Promise.all(Xe.getTaskInTrash().map((async e=>{const t=await _e.deleteTask(e);t.error&&ke.error(`${it} на сервере`,t.error.data);const r=Xe.trashTask(e);return r.error&&ke.error(it,r.error.data),r})));return e.find((e=>e.error))&&we.error(it),e},dt="Ошибка создания задачи",ct=async e=>{const t=await _e.createTask(e);if(t.error)return C(t,`${dt} на сервере`);const r=Xe.addTask(t.result);return r.error?C(t,dt):r},ut="Ошибка удаления задачи",lt=async e=>{const t=await _e.deleteTask(e);if(t.error)return C(t,`${ut} на сервере`);const r=Xe.deleteTask(t.result);return r.error?C(t,ut):r},yt="Ошибка восстановления задачи из корзины",gt=async e=>{const t=await _e.updateTask({...e,deleted:!1});if(t.error)return C(t,`${yt} на сервере`);const r=Xe.updateTask(t.result);return r.error?C(t,yt):r},ft="Ошибка обновления задачи",mt=async e=>{const t=await _e.updateTask(e);if(t.error)return C(t,`${ft} на сервере`);const r=Xe.updateTask(t.result);return r.error?C(t,ft):r},pt=()=>Xe.useAppState();var _t=r(9051);let vt=pe.P;const kt=1e3;let ht;class wt extends Error{constructor(e){void 0===e&&(e="Сервис-воркер не поддерживается"),super(e),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,wt.prototype)}}var bt=r(745),It=r(7294),xt=r(5893),Bt=function(e){let{pageReload:t}=e;return(0,xt.jsxs)(xt.Fragment,{children:[(0,xt.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,xt.jsx)("button",{type:"button",onClick:t,children:"Перезагрузить страницу"})]})},Ct=function(){return(0,xt.jsx)(Bt,{pageReload:j})},Tt=function(e){const{className:t}=e;return(0,xt.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,xt.jsx)("path",{d:"M4 17H20M4 12H20M4 7H20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},Ft=function(e){const{className:t}=e;return(0,xt.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,xt.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",fill:"currentColor"})})},St=r.p+"todo.cd3261e56180c2c0e031.svg",Et=r(3379),At=r.n(Et),Dt=r(7795),Pt=r.n(Dt),jt=r(569),Nt=r.n(jt),Lt=r(3565),Ot=r.n(Lt),Ht=r(9216),Mt=r.n(Ht),Rt=r(4589),$t=r.n(Rt),Zt=r(656),Wt={};Wt.styleTagTransform=$t(),Wt.setAttributes=Ot(),Wt.insert=Nt().bind(null,"head"),Wt.domAPI=Pt(),Wt.insertStyleElement=Mt();At()(Zt.Z,Wt),Zt.Z&&Zt.Z.locals&&Zt.Z.locals;var Vt=function(e){let{children:t}=e;return(0,xt.jsxs)("div",{className:"AppHeader",children:[(0,xt.jsx)("img",{className:"AppHeader-Icon",src:St,alt:"App logo"}),(0,xt.jsx)("h1",{className:"AppHeader-Title",children:"Мои Задачи"}),(0,xt.jsx)("div",{className:"AppHeader-MenuButtonContainer",children:t})]})},Ut=r(1504);const zt=()=>{};var Gt=r(489),Kt={};Kt.styleTagTransform=$t(),Kt.setAttributes=Ot(),Kt.insert=Nt().bind(null,"head"),Kt.domAPI=Pt(),Kt.insertStyleElement=Mt();At()(Gt.Z,Kt),Gt.Z&&Gt.Z.locals&&Gt.Z.locals;const Xt=(0,Ut.cn)("AppHeaderNavMenuButton");var Yt=function(e){let{isNavVisible:t=!1,toggleNavVisibility:r=zt,showToggleNavButton:a=!1}=e;const n=(t?"Скрыть":"Открыть")+" боковую панель";return(0,xt.jsx)("button",{type:"button",title:n,onClick:r,className:Xt({hidden:!a}),children:t?(0,xt.jsx)(Ft,{}):(0,xt.jsx)(Tt,{})})};r(257);const qt=(0,It.lazy)(N),Jt=1e3,Qt="loading-text",er=e=>{e.data.type===Y.T1&&(vt.debug(`получили сообщение от сервис-воркера ${Y.T1} - перезагружаем страницу`),j())},tr=e=>{vt.debug("получили сообщение от сервис-воркера",e.data),te.apply((()=>{switch(e.data.type){case"create_category":Xe.addCategory(e.data.data);break;case"update_category":Xe.updateCategory(e.data.data);break;case"delete_category":Xe.deleteCategory(e.data.data);break;case"create_task":Xe.addTask(e.data.data);break;case"update_task":Xe.updateTask(e.data.data);break;case"delete_task":Xe.deleteTask(e.data.data)}}))};!async function(){T();try{!await async function(){vt.debug("настройка сервис-воркера...");let e=!1;if(!D())throw vt.debug("сервис-воркер не поддерживается"),new wt;vt.debug("сервис-воркер поддерживается");try{e=await W()}catch(e){V(e)}return e}()&&(await A(),await H(),await S())}catch(e){!function(e){if(vt.error("ошибка при инициализации приложения",e),e instanceof wt)D()?P({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):P({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(e instanceof Error&&"Error"===e.name)return;P({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(e)}}()},9594:function(e,t,r){r.d(t,{H3:function(){return d},K_:function(){return u},R2:function(){return f},T1:function(){return l},UI:function(){return a},_4:function(){return g},bl:function(){return o},d:function(){return c},fv:function(){return y},lw:function(){return n},mr:function(){return s},ud:function(){return i}});const a="[ UI ]",n="[ APP ]",o="[ API ]",i="[ STORE ]",s="[ NOTIFY ]",d="[ LOCAL-STORAGE ]",c="[ USE-CASES ]",u={"Content-Type":"application/json; charset=utf-8"},l="RELOAD_PAGE",y="SKIP_WAITING",g="dark",f="light"},6769:function(e,t,r){r.d(t,{P:function(){return a}});const a=(0,r(8398).K)()},489:function(e,t,r){var a=r(8081),n=r.n(a),o=r(3645),i=r.n(o)()(n());i.push([e.id,".AppHeaderNavMenuButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--surfaceColor);border:initial;color:var(--light-text-color);cursor:pointer;display:block;max-height:var(--x8);max-width:var(--x8);padding:calc(var(--x)*(1 - var(--isTouch)))}.AppHeaderNavMenuButton:active,.AppHeaderNavMenuButton:hover{color:var(--text-color)}.AppHeaderNavMenuButton_hidden{display:none}",""]),t.Z=i},656:function(e,t,r){var a=r(8081),n=r.n(a),o=r(3645),i=r.n(o)()(n());i.push([e.id,".AppHeader{align-items:center;display:flex;padding-left:var(--x4);padding-right:var(--x4)}.AppHeader-Icon{height:var(--x8);vertical-align:text-bottom;width:var(--x8)}.AppHeader-Title{box-sizing:border-box;display:inline-block;flex:1;font-size:1.5rem;margin-left:var(--x4)}.AppHeader-MenuButtonContainer{box-sizing:border-box;max-height:var(--x10);max-width:var(--x10);overflow:hidden;padding-top:var(--x)}@media only screen and (min-height:40.001rem){.AppHeader{height:5rem}}",""]),t.Z=i}},function(e){e.O(0,[568,169,514],(function(){return t=3490,e(e.s=t);var t}));e.O()}]);