(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[179],{9051:function(e,t,r){function a(e,t,r,a){i=e.child({layer:n.UI}),s=t,o=r,d=a}r.d(t,{bZ:function(){return a}});var n=r(9594);r(6769);let i=null,o=null,s=null,d=null},8811:function(e,t,r){function a(e){return new Promise((t=>{setTimeout(t,e)}))}function n(e){const t=document.getElementById(e);t&&t.remove()}function i(e,t){const r=document.getElementById(e);r&&r.classList.remove(t)}function o(e,t,r){return async t=>{const a=(0,J.S)();return e({headers:{...Y.K_},body:{id:a,method:r,params:t}})}}function s(){return Boolean(document.startViewTransition)?e=>document.startViewTransition?.(e):ee}function d(e){function t(){a(250).then((()=>{oe?de():ie.play().catch(se)}))}function r(){a(250).then((()=>{ie.play().catch(se),de([100,30,100,30,100])}))}se=function(t){t instanceof DOMException&&"NotAllowedError"===t.name||e.error({message:ce,error:t})},le={off:()=>{ue=!0},on:()=>{ue=!1},info:e=>ue?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.info(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...ne},onClose:()=>{t()}})})))),warn:e=>ue?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.warn(e,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...ne},onClose:()=>{t()}})})))),error:e=>ue?Promise.resolve():a(0).then((()=>new Promise((r=>{re.Am.error(e,{autoClose:!1,style:{border:"1px solid var(--error-color)",...ne},onOpen:t,onClose:()=>{ie.pause(),r()}})})))),joyfullyGilling:e=>ue?Promise.resolve():a(0).then((()=>new Promise((t=>{re.Am.success(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...ne},onOpen:r,onClose:()=>{t()}})}))))}}function c(e,t,r,a,n){me=e,ve=t.child({layer:Y.ud}),ke=t.child({layer:Y.d}),_e=r,xe=a,be=n}function l(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function u(e){const{task_id:t,title:r,priority_id:a,category_id:n,description:i,due_date_time:o,deleted:s=!1,completed:d=!1}=e;if(o){const e=Date.parse(o),c=new Date(e);return{task_id:t,title:r,priority_id:a,category_id:n,description:i,deleted:s,completed:d,due_date_time:o,due_date_ts:new Date(c.getFullYear(),c.getMonth(),c.getDay()).valueOf(),due_date_time_ts:e}}return{task_id:t,title:r,priority_id:a,category_id:n,description:i,deleted:s,completed:d,due_date_time:void 0,due_date_ts:void 0,due_date_time_ts:void 0}}function f(e){return void 0!==e.due_date_time_ts&&e.due_date_time_ts<Date.now()}function g(e,t){const{tasks:r}=e,{idsByDueDate:a}=r;return t.due_date_ts?{...e,tasks:{...r,idsByDueDate:{...a,[t.due_date_ts]:[...a[t.due_date_ts]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function y(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Se]:[...r.idsByFilterId[Se],t.task_id]}}}}function p(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Pe]:[...r.idsByFilterId[Pe],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function h(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[De]:[...r.idsByFilterId[De],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function m(e,t){const{tasks:r}=e;return t.category_id?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:[...r.idsByCategoryId[t.category_id]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function v(e,t){const{tasks:r}=e;return!1===r.idsByFilterId[Fe].includes(t.task_id)?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Fe]:[...r.idsByFilterId[Fe],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function k(e,t){let r=e;return t.deleted?v(r,t):(t.category_id&&(r=m(r,t)),t.due_date_time?(r=g(r,t),f(t)&&(r=p(r,t))):r=y(r,t),!0===t.completed&&(r=h(r,t)),r)}function b(e,t){const{tasks:r}=e;return r.idsByFilterId[Se].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Se]:r.idsByFilterId[Se].filter((e=>e!==t.task_id))}}}:e}function _(e,t){const{tasks:r}=e;return r.idsByFilterId[Pe].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Pe]:r.idsByFilterId[Pe].filter((e=>e!==t.task_id))}}}:e}function x(e,t){const{tasks:r}=e;return r.idsByFilterId[De].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[De]:r.idsByFilterId[De].filter((e=>e!==t.task_id))}}}:e}function w(e,t){const{tasks:r}=e;if(void 0!==t.due_date_time&&void 0!==r.idsByDueDate[t.due_date_ts]){const a={...e,tasks:{...r,idsByDueDate:{...r.idsByDueDate,[t.due_date_ts]:r.idsByDueDate[t.due_date_ts].filter((e=>e!==t.task_id))}}};if(0===a.tasks.idsByDueDate[t.due_date_ts].length){const{[t.due_date_ts]:e,...r}=a.tasks.idsByDueDate;a.tasks.idsByDueDate=r}return a}return e}function I(e,t){const{tasks:r}=e,a=void 0!==t.category_id&&r.idsByCategoryId[t.category_id].includes(t.task_id);return t.category_id&&a?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:r.idsByCategoryId[t.category_id].filter((e=>e!==t.task_id))}}}:e}function C(e,t,r){const a=function(e,t){const{tasks:r}=e;return r.idsByFilterId[Fe].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Fe]:r.idsByFilterId[Fe].filter((e=>e!==t.task_id))}}}:e}(e,t.byId[r.task_id]);return k(a,r)}function T(e,t){if(e.error){const{error:{message:r}}=e;_e.error(t||r),ke.error(r,e.error.data)}return e}function j(){var e;vt=q.child({layer:Y.lw}),vt.info("🚀 Старт инициализации приложения"),vt.debug("инициализация провайдеров"),e=(0,G.hG)("/api"),q.child({layer:Y.bl}),Q={getTasks:o(e,0,"get_tasks"),createCategory:o(e,0,"create_category"),updateCategory:o(e,0,"update_category"),deleteCategory:o(e,0,"delete_category"),createTask:o(e,0,"create_task"),updateTask:o(e,0,"update_task"),deleteTask:o(e,0,"delete_task")},d(q.child({layer:Y.mr}));const t=new U.j(q.child({layer:Y.H3}));(0,mt.bZ)(q,le,V,t),c(Q,q,le,t,te)}function B(){!function(e,t){const r=document.getElementById(e);r&&r.classList.add(t)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(n)}),1e3)}async function N(){globalThis.utilTimers.forEach((e=>{clearTimeout(e)})),await async function(){const e=kt-(performance.now()-globalThis.htmlInitTime);e>0&&await a(e)}(),n("loading-text"),i("root","Root_hidden"),B()}async function S(){vt.debug("настройка приложения"),window.addEventListener("securitypolicyviolation",(e=>{vt.error("CSP Violation Detected:",{"Blocked URI":e.blockedURI,"Violated Directive":e.violatedDirective,"Original Policy":e.originalPolicy})})),window.addEventListener("appinstalled",(e=>{vt.info("Приложение было установлено",e)})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(e=>{let t="browser";e.matches&&(t="standalone"),vt.debug("display-mode изменился:",t)})),function(){function e(e){const t=localStorage.getItem("colorScheme");if(void 0===[Y._4,Y.R2].find((e=>e===t))){const t=document.documentElement,r=t.classList;e.matches?(r.add(Y._4),r.remove(Y.R2)):(r.add(Y.R2),r.remove(Y._4));const a=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim(),n=document.querySelector('meta[name="theme-color"]');n&&a&&n.setAttribute("content",a)}}const t=window.matchMedia("(prefers-color-scheme: dark)");e(t),t.addEventListener("change",e)}(),window.addEventListener("unhandledrejection",(e=>{e.preventDefault(),vt.error("Unhandled promise rejection",e.reason)}))}function E(){return"serviceWorker"in navigator}function F(e){let{title:t,message:r,buttonText:a}=e;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const n=document.createElement("h3");if(n.textContent=t,document.body.appendChild(n),r){const e=document.createElement("p");e.textContent=r,document.body.appendChild(e)}if(a){const e=document.createElement("button");e.textContent=a,e.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(e)}}function A(){window.location.reload()}async function P(){try{return await r.e(143).then(r.bind(r,6119))}catch(e){return vt.error("Ошибка загрузки компонента App"),{default:cr}}}async function M(e){if(!e.result)return void vt.error("Failed to create app store",e.error);Le=(0,Ie.Ue)()((()=>({...Ce.VE,tasks:{...Ce.VE.tasks,idsByCategoryId:{},idsByDueDate:{},idsByFilterId:{[Se]:[],[Pe]:[],[De]:[],[Fe]:[]}},navigationFilter:Oe(l(new Date))}))),(0,Ce.eR)(Le,ve.child({layer:"[ DOMAIN ]"})),te.setEnabled(!1);const t=(e,t)=>{e.forEach((e=>{const r=t(e);r.error&&vt.error(r.error.message,e)}))},{icons:r,categories:a,priorities:n,tasks:i}=e.result;try{t(r,Xe.addIcon),t(a,Xe.addCategory),t(n,Xe.addPriority),t(i,Xe.addTask)}catch(e){vt.error("Initialization error",e)}finally{te.setEnabled(!0)}}function D(){return document.querySelector("#root")||function(){const e=document.createElement("div");return e.id="root",document.body.appendChild(e),e}()}async function Z(){const e=D();M(await async function(){return vt.debug("предзагрузка данных для хранилища приложения"),Q.getTasks()}()),vt.debug("🦚 Старт рендера приложения"),(0,_t.s)(e).render((0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)(xt.StrictMode,{children:(0,Ht.jsx)(lr,{children:e=>({header:(0,Ht.jsx)(Vt,{children:(0,Ht.jsx)(sr,{...e,children:e.isNavVisible?(0,Ht.jsx)(qt,{}):(0,Ht.jsx)(Yt,{})})}),nav:(0,Ht.jsxs)("div",{style:{height:"100%",background:"var(--background-color)"},children:[(0,Ht.jsx)(Kt,{title:"Календарь"}),(0,Ht.jsx)(Lt,{title:"Дела по дому",icon:wt["home.png"],selected:!1,handleClick:()=>{},children:(0,Ht.jsx)(Xt,{className:"NavItem-Icon"})}),(0,Ht.jsx)(Lt,{title:"Спорт",icon:wt["ball.png"],selected:!1,handleClick:()=>{},children:(0,Ht.jsx)(Xt,{className:"NavItem-Icon"})})]}),content:(0,Ht.jsx)("div",{style:{height:"100%",background:"var(--background-color)"},children:(0,Ht.jsx)(rr,{title:"Список задач"})})})})}),(0,Ht.jsx)(re.Ix,{draggablePercent:30,role:"alert"})]}))}async function z(e,t,r){return new Promise(((a,n)=>{e.state===t?a():e.onstatechange=async()=>{vt.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),e.state===t?a():"redundant"===e.state&&(vt.debug("сервис-воркер стал не нужным"),n())}}))}function H(){!function(e,t){const r=document.getElementById(e);r&&(r.textContent=t)}(fr,"Загрузка обновлений ..."),i(fr,"loading-text_hidden")}async function O(e,t){return!(!e.waiting||"installed"!==e.waiting.state)&&(await async function(e){const t=performance.now();!e&&t<ur&&(vt.debug(`загрузка ассетов заняла меньше ${ur} мс - отображаем индикатор загрузки`),await a(ur-t))}(t),vt.debug(`отправляем сервис-воркеру сообщение: ${Y.fv}`),e.waiting.postMessage({type:Y.fv}),await z(e.waiting,"activated",e),!0)}async function L(e){if(!e||!navigator.onLine)return!1;await e.update().then((async()=>{await a(0)})),navigator.serviceWorker.addEventListener("message",gr);let t=await async function(e){return!!e.installing&&(H(),vt.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await z(e.installing,"installed",e),!0)}(e);return t=await O(e,t),await async function(e){e.active&&(vt.debug("сервис-воркер активируется"),await z(e.active,"activated",e))}(e),!1===t&&navigator.serviceWorker.removeEventListener("message",gr),t}function R(){globalThis.swRegistration=void 0}async function W(){if(globalThis.swRegistration){const e=await globalThis.swRegistration;if(e instanceof Error)throw R(),e;const t=await L(e);return t||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const e=await navigator.storage.persist(),t=e?"⭐️ ":"",r=e?"дал обещание":"отверг предложение";vt.debug(`${t}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",yr)),R(),t}return!1}function $(e){if(!e.message.includes(`${window.location.origin}/sw.js`)){if(!function(e){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&e instanceof TypeError&&e.message.startsWith("Failed to update a ServiceWorker for scope")}(e))throw e;vt.error("Не удалось обновить сервис-воркер")}}var V={};r.r(V),r.d(V,{addCategory:function(){return Je},addIcon:function(){return Ye},addPriority:function(){return qe},addTask:function(){return it},clearTrash:function(){return st},createCategory:function(){return et},createTask:function(){return ct},deleteCategory:function(){return rt},deleteTask:function(){return ut},undeleteTask:function(){return gt},updateCategory:function(){return nt},updateTask:function(){return pt},useAppState:function(){return ht}});var U=r(7258),G=r(335),K=r(7849),X=r(1990),Y=r(9594);let q=K.G;q=new X.G("/log");var J=r(7029);let Q;const ee=e=>e(),te={apply:ee,setEnabled:e=>{te.apply=e?s():ee}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");te.apply=s()}();var re=r(1277),ae=r.p+"error.8ad17092b67f41ed6f08.mp3";const ne={lineHeight:1.45,color:"var(--text-color)",fontFamily:"robotoregular",backgroundColor:"var(--notify-surface-color)"},ie=new Audio(ae);ie.preload="auto",ie.volume=.25;const oe=!0===window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"vibrate"in navigator;let se;const de=function(e){void 0===e&&(e=[5]),oe&&window.navigator.vibrate(e)},ce="Ошибка воспроизведения звука";let le,ue=!1;var fe=r(4321),ge=r(8850),ye=r(4687),pe=r(8975),he=r(6769);let me=he.P,ve=he.P,ke=he.P,be=null,_e=he.P,xe=null;var we=r(1),Ie=r(270),Ce=r(6790),Te=r(2182);const je="filter",Be="category",Ne="calendar",Se="inbox",Ee="Черновики",Fe="trash",Ae="Корзина",Pe="overdue",Me="Просроченные",De="completed",Ze="Завершенные",ze={[Se]:Ee,[Fe]:Ae,[Pe]:Me,[De]:Ze},He={year:"numeric",month:"long",day:"numeric"},Oe=e=>{return t=`${e.toLocaleDateString("ru-Ru",He)}`,r=l(e).valueOf(),{type:Ne,title:t,key:r};var t,r};let Le;var Re=r(9976);var We=r(3538);var $e=r(5096),Ve=r(9882),Ue=r(1276);const Ge=e=>{const t=Le.getState().tasks;if(!1===function(e,t){const r=(0,$e.v)((0,Te._X)(e),{...(0,Te._X)(t),deleted:!0});return void 0!==e&&void 0!==t&&!0===r&&!0===e.deleted&&!t.deleted}(e.task_id&&t.byId[Number(e.task_id)]||{},e)){const t={message:`${Ge.name}: задача не найдена`,data:e};return ve.error(t.message,t.data),{error:t}}const r=(0,Ue.x)({...e,deleted:!1});if(r.error)return r;const a=r.result,n=Le.getState(),i=C(n,t,u(a));return i!==n&&Le.setState(i),{result:a}},Ke=e=>e,Xe={addIcon:fe.U,addCategory:e=>{const t=(0,we.i)(e);if(t.error){const{message:e,data:r}=t.error;return ve.error(e,r),t}const r=t.result,a=Le.getState(),n=function(e,t){const{category_id:r}=t;return{...e,tasks:{...e.tasks,idsByCategoryId:{...e.tasks.idsByCategoryId,[r]:[]}}}}(a,r);return n!==a&&Le.setState(n),{result:r}},deleteCategory:e=>{const t=(0,Re.u)(e);if(t.error){const{message:e,data:r}=t.error;return ve.error(e,r),t}const r=t.result,a=Le.getState(),n=function(e,t){const{category_id:r}=t,{[r]:a,...n}=e.tasks.idsByCategoryId;return{...e,tasks:{...e.tasks,idsByCategoryId:n}}}(a,r);return n!==a&&Le.setState(n),{result:r}},updateCategory:ge.y,addPriority:ye.O,createCalendarNavigationFilter:Oe,createCategoryNavigationFilter:(e,t)=>function(e,t){return{type:Be,title:t,key:e}}(e,t),createFilterNavigationFilter:e=>{return{type:je,title:ze[t=e],key:t};var t},setNavigationFilter:function(e){const t=Le.getState();return Le.setState({...t,navigationFilter:e}),{result:e}},addTask:e=>{const t=(0,We.g)(e);if(t.error)return t;const r=t.result,a=Le.getState(),n=k(a,u(r));return a!==n&&Le.setState(n),{result:r}},trashTask:function(e){const t=Le.getState(),{[Number(e.task_id)]:r,...a}=t.tasks.byId,n={...t,tasks:{...t.tasks,byId:a,ids:t.tasks.ids.filter((t=>t!==e.task_id)),idsByFilterId:{...t.tasks.idsByFilterId,[Fe]:t.tasks.idsByFilterId[Fe].filter((t=>t!==e.task_id))}}};return t!==n&&(Le.setState(n),ve.debug("clearTrash")),{result:e}},deleteTask:e=>{const t=Le.getState().tasks,r=e.task_id&&(0,Ve._X)(t.byId[e.task_id]);if(!(0,$e.v)((0,Ve._X)(e),r)){const t={message:"Задача не найдена",data:e};return ve.error(t.message,t.data),{error:t}}const a=(0,Ue.x)({...e,deleted:!0});if(a.error){const{message:e,data:t}=a.error;return ve.error(e,t),a}const n=a.result,i=Le.getState(),o=function(e,t,r){let a=e;return function(e,t){return e&&!e.deleted&&!0===t.deleted}(t.byId[r.task_id],r)&&(a=I(a,r),a=w(a,r),a=b(a,r),a=_(a,r),a=x(a,r),a=v(a,r)),a}(i,t,u(n));return o!==i&&Le.setState(o),{result:n}},undeleteTask:Ge,updateTask:e=>{const{task_id:t}=e;let r=Le.getState();const a=r.tasks;if(t&&!0===a.byId[t].deleted){const t={message:"Нельзя обновить удаленную задачу",data:e};return ve.error(t.message,t.data),{error:t}}const n=(0,Ue.x)(e);if(n.error){const{message:e,data:t}=n.error;return ve.error(e,t),n}const i=n.result;r=Le.getState();const o=function(e,t,r){const a=t.byId[r.task_id];let n=e;return function(e,t){return void 0===e.category_id&&void 0!==t.category_id}(a,r)&&(n=m(n,r)),function(e,t){return void 0!==e.category_id&&void 0===t.category_id}(a,r)&&(n=I(n,a)),function(e,t){return e.category_id!==t.category_id}(a,r)&&(n=I(n,a),n=m(n,r)),function(e,t){return void 0===e.due_date_time&&void 0!==t.due_date_time}(a,r)&&(n=b(n,a),n=g(n,r),f(r)&&(n=p(n,r))),function(e,t){return void 0!==e.due_date_time&&void 0===t.due_date_time}(a,r)&&(n=w(n,a),n=_(n,r),n=y(n,r)),function(e,t){return void 0!==e.due_date_time&&void 0!==t.due_date_time&&e.due_date_time!==t.due_date_time}(a,r)&&(n=w(n,a),n=_(n,r),n=g(n,r),f(r)&&(n=p(n,r))),n=function(e,t){return!0===t.completed&&e.completed!==t.completed}(a,r)?h(n,r):x(n,r),n}(r,a,u(i));return o!==r&&Le.setState(o),{result:i}},useAppState:()=>Le(Ke),getCategotyById:e=>Le.getState().categories.byId[e],getTaskInTrash:pe.B},Ye=e=>T(Xe.addIcon(e),"Ошибка добавления иконки"),qe=e=>T(Xe.addPriority(e),"Ошибка добавления приоритета"),Je=e=>T(Xe.addCategory(e),"Ошибка при добавлении категории"),Qe="Ошибка создания новой категории",et=async e=>{const t=await me.createCategory(e);if(t.error)return T(t,`${Qe} на сервере`);const r=Xe.addCategory(t.result);return r.error?T(t,Qe):r},tt="Ошибка удаления категории",rt=async e=>{const t=await me.deleteCategory(e);if(t.error)return T(t,`${tt} на сервере`);const r=Xe.deleteCategory(t.result);return r.error?T(t,tt):r},at="Ошибка обновления категории",nt=async e=>{const t=await me.updateCategory(e);if(t.error)return T(t,`${at} на сервере`);const r=Xe.updateCategory(t.result);return r.error?T(t,at):r},it=e=>T(Xe.addTask(e),"Ошибка добавления задачи"),ot="Ошибка очистки корзины",st=async()=>{const e=await Promise.all(Xe.getTaskInTrash().map((async e=>{const t=await me.deleteTask(e);t.error&&ke.error(`${ot} на сервере`,t.error.data);const r=Xe.trashTask(e);return r.error&&ke.error(ot,r.error.data),r})));return e.find((e=>e.error))&&_e.error(ot),e},dt="Ошибка создания задачи",ct=async e=>{const t=await me.createTask(e);if(t.error)return T(t,`${dt} на сервере`);const r=Xe.addTask(t.result);return r.error?T(t,dt):r},lt="Ошибка удаления задачи",ut=async e=>{const t=await me.deleteTask(e);if(t.error)return T(t,`${lt} на сервере`);const r=Xe.deleteTask(t.result);return r.error?T(t,lt):r},ft="Ошибка восстановления задачи из корзины",gt=async e=>{const t=await me.updateTask({...e,deleted:!1});if(t.error)return T(t,`${ft} на сервере`);const r=Xe.updateTask(t.result);return r.error?T(t,ft):r},yt="Ошибка обновления задачи",pt=async e=>{const t=await me.updateTask(e);if(t.error)return T(t,`${yt} на сервере`);const r=Xe.updateTask(t.result);return r.error?T(t,yt):r},ht=()=>{var e;return e=Xe.useAppState(),"structuredClone"in window?structuredClone(e):e};var mt=r(9051);let vt=he.P;const kt=1e3;class bt extends Error{constructor(e){void 0===e&&(e="Сервис-воркер не поддерживается"),super(e),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,bt.prototype)}}var _t=r(745),xt=r(7294);const wt={"alert.png":r.p+"alert.476b00abda902b398be7.png","ball.png":r.p+"ball.3d996bafa729a1d3f580.png","bug.png":r.p+"bug.83b52ad3ded9ef1fbd18.png","cart.png":r.p+"cart.2d640112b4b86b627ff7.png","favorite.png":r.p+"favorite.7f0174c25660ef72df60.png","home.png":r.p+"home.3e40fe2b97b19c75dfaf.png","inbox.png":r.p+"inbox.58a834f614e341f9c578.png","life.png":r.p+"life.5896aaa56394aa0273b3.png","mail.png":r.p+"mail.4a4239588f1b0d37bcfc.png","other.png":r.p+"other.66c872e04e2846cafa68.png","page.png":r.p+"page.9d1fc4484b1e5929b7ee.png","today.png":r.p+"today.141e3d87afbd71da541c.png","twitter.png":r.p+"twitter.5556cda0273e796d6a65.png","warning.png":r.p+"warning.4f48c087dcbbdb3bd268.png","folder_red.png":r.p+"folder_red.66f2d7c840bd3b9aed95.png","next.png":r.p+"next.4b695e6dc3fabdcc84b4.png","note.png":r.p+"note.8e112a51a84fa9c09b11.png","refresh.png":r.p+"refresh.7c9f0768269a6bbec081.png","trash.gif":r.p+"trash.3e03c195726c2cccdc94.gif","overdue.svg":r.p+"overdue.45d759abb485d88b78aa.svg"};var It=r(1504),Ct=r(3379),Tt=r.n(Ct),jt=r(7795),Bt=r.n(jt),Nt=r(569),St=r.n(Nt),Et=r(3565),Ft=r.n(Et),At=r(9216),Pt=r.n(At),Mt=r(4589),Dt=r.n(Mt),Zt=r(3190),zt={};zt.styleTagTransform=Dt(),zt.setAttributes=Ft(),zt.insert=St().bind(null,"head"),zt.domAPI=Bt(),zt.insertStyleElement=Pt();Tt()(Zt.Z,zt),Zt.Z&&Zt.Z.locals&&Zt.Z.locals;var Ht=r(5893);const Ot=(0,It.cn)("NavItem");var Lt=e=>{let{title:t,icon:r,selected:a,handleClick:n,children:i}=e;const o=Ot({selected:a});return(0,Ht.jsxs)("li",{className:o,onClick:n,children:[(0,Ht.jsx)("img",{className:"NavItem-Icon",src:r,alt:""}),(0,Ht.jsx)("a",{className:"NavItem-Title",href:"#",children:t}),i]})},Rt=r(247),Wt={};Wt.styleTagTransform=Dt(),Wt.setAttributes=Ft(),Wt.insert=St().bind(null,"head"),Wt.domAPI=Bt(),Wt.insertStyleElement=Pt();Tt()(Rt.Z,Wt),Rt.Z&&Rt.Z.locals&&Rt.Z.locals;var $t=function(e){const{className:t}=e;return(0,Ht.jsxs)("svg",{xmlSpace:"preserve",className:t,viewBox:"0 0 491.526 491.526",width:"100%",height:"100%",children:[(0,Ht.jsx)("path",{d:"M413.088 63.687c.024-11.819-9.677-21.421-21.668-21.446l-368.731-.757C10.697 41.459.957 51.021.933 62.841l-.139 67.856 412.154.846.14-67.856z",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M.794 130.697.26 390.609c-.024 11.82 9.677 21.421 21.668 21.446l368.731.757c11.991.024 21.731-9.537 21.755-21.357l.534-259.912-412.154-.846z",style:{fill:"#cee3ff",fillOpacity:1,stroke:"#64798a",strokeWidth:1}}),(0,Ht.jsx)("circle",{cx:"71.64",cy:"71.213",r:"19.543",style:{fill:"#d15241"}}),(0,Ht.jsx)("circle",{cx:"342.365",cy:"71.767",r:"19.543",style:{fill:"#d15241"}}),(0,Ht.jsx)("path",{d:"m71.784 0-.17 83.168c7.559.015 13.7-6.012 13.716-13.464l.115-56.183C85.46 6.07 79.343.016 71.784 0z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"m58.068 13.465-.115 56.183c-.015 7.452 6.1 13.505 13.66 13.52L71.784 0c-7.56-.015-13.7 6.013-13.716 13.465zm270.711.555-.115 56.183c-.016 7.452 6.101 13.505 13.66 13.521l.171-83.168c-7.56-.015-13.701 6.013-13.716 13.464z",style:{fill:"#ebf0f3"}}),(0,Ht.jsx)("path",{d:"m342.496.556-.171 83.168c7.559.015 13.7-6.013 13.716-13.465l.116-56.183c.014-7.451-6.103-13.505-13.661-13.52z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"M-226.246-196.869H-188v38.246h-38.246zm-68.602.028h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M324.914 159.282h38.246v38.246h-38.246z",transform:"rotate(-180 344.032 178.414)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M50.294 221.132H88.54v38.246H50.294z",transform:"rotate(-180 69.41 240.257)",style:{fill:"#adaeb6",fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M118.886 221.288h38.246v38.246h-38.246z",transform:"rotate(-180 138.003 240.415)",style:{fill:"#44c4a1"}}),(0,Ht.jsx)("path",{d:"M-226.24-259.282h38.246v38.246h-38.246zm-68.627-.022h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M324.76 221.695h38.246v38.246H324.76z",transform:"rotate(-180 343.877 240.826)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M-89.002-321.706h38.246v38.246h-38.246zm-68.618-.022h38.246v38.246h-38.246zm-68.613.034h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M-294.836-321.716h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#d5d6db",strokeWidth:1}}),(0,Ht.jsx)("path",{d:"M324.654 284.162H362.9v38.246h-38.246z",transform:"rotate(-180 343.772 303.29)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M-88.996-384.119h38.246v38.246h-38.246zm-68.592-.022h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("circle",{cx:"359.461",cy:"359.722",r:"131.804",style:{fill:"#64798a"}}),(0,Ht.jsx)("circle",{cx:"359.461",cy:"359.722",r:"107.571",style:{fill:"#ffffff"}}),(0,Ht.jsx)("path",{d:"M257.119 362.138c.119-57.965 47.205-104.859 105.171-104.74 57.524.118 104.119 46.496 104.71 103.853.006-.44.036-.875.037-1.317.122-59.42-47.949-107.689-107.371-107.812-59.42-.122-107.688 47.949-107.811 107.37-.122 59.421 47.949 107.69 107.369 107.812.442.001.877-.026 1.318-.03-57.356-.827-103.541-47.612-103.423-105.136z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"M414.117 416.177a2.392 2.392 0 0 1-1.692-.705l-69.65-69.937a2.396 2.396 0 1 1 3.396-3.382l69.649 69.937a2.395 2.395 0 0 1-1.703 4.087z",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"m363.062 349.464.116-56.548a3.597 3.597 0 0 0-3.587-3.603 3.598 3.598 0 0 0-3.603 3.588l-.116 56.548a10.904 10.904 0 0 0-6.174 5.452l-43.166-.088a4.79 4.79 0 0 0-4.803 4.783 4.79 4.79 0 0 0 4.783 4.803l43.166.088c1.775 3.615 5.454 6.134 9.745 6.143 6.02.013 10.925-4.874 10.938-10.893.01-4.754-3.054-8.77-7.299-10.273z",style:{fill:"#64798a"}}),(0,Ht.jsx)("circle",{cx:"359.463",cy:"359.667",r:"6.124",style:{fill:"#ffffff"}}),(0,Ht.jsx)("circle",{cx:"359.655",cy:"268.587",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"359.264",cy:"450.849",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"450.568",cy:"359.883",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"268.306",cy:"359.545",r:"5.381",style:{fill:"#3a556a"}})]})},Vt=function(e){let{children:t}=e;return(0,Ht.jsxs)("div",{className:"AppHeader",children:[(0,Ht.jsx)($t,{className:"AppHeader-Icon"}),(0,Ht.jsx)("h1",{className:"AppHeader-Title",children:"Мои Задачи"}),(0,Ht.jsx)("div",{className:"AppHeader-MenuButtonContainer",children:t})]})},Ut=r(795),Gt={};Gt.styleTagTransform=Dt(),Gt.setAttributes=Ft(),Gt.insert=St().bind(null,"head"),Gt.domAPI=Bt(),Gt.insertStyleElement=Pt();Tt()(Ut.Z,Gt),Ut.Z&&Ut.Z.locals&&Ut.Z.locals;var Kt=function(e){let{title:t}=e;return(0,Ht.jsx)("h2",{className:"NavHeader",children:t})},Xt=function(e){const{className:t}=e;return(0,Ht.jsxs)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",children:[(0,Ht.jsx)("path",{d:"M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,Ht.jsx)("path",{d:"M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,Ht.jsx)("path",{d:"M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})},Yt=function(e){const{className:t}=e;return(0,Ht.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",children:(0,Ht.jsx)("path",{d:"M4 17H20M4 12H20M4 7H20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},qt=function(e){const{className:t}=e;return(0,Ht.jsx)("svg",{className:t,width:"100%",height:"100%",viewBox:"0 0 24 24",children:(0,Ht.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",fill:"currentColor"})})},Jt=r(3229),Qt={};Qt.styleTagTransform=Dt(),Qt.setAttributes=Ft(),Qt.insert=St().bind(null,"head"),Qt.domAPI=Bt(),Qt.insertStyleElement=Pt();Tt()(Jt.Z,Qt),Jt.Z&&Jt.Z.locals&&Jt.Z.locals;var er=r(3791),tr={};tr.styleTagTransform=Dt(),tr.setAttributes=Ft(),tr.insert=St().bind(null,"head"),tr.domAPI=Bt(),tr.insertStyleElement=Pt();Tt()(er.Z,tr),er.Z&&er.Z.locals&&er.Z.locals;var rr=function(e){let{title:t}=e;return(0,Ht.jsx)("h2",{className:"TaskListHeader ellipsis",children:t})};const ar=()=>{};var nr=r(997),ir={};ir.styleTagTransform=Dt(),ir.setAttributes=Ft(),ir.insert=St().bind(null,"head"),ir.domAPI=Bt(),ir.insertStyleElement=Pt();Tt()(nr.Z,ir),nr.Z&&nr.Z.locals&&nr.Z.locals;const or=(0,It.cn)("AppHeaderNavMenuButton");var sr=function(e){let{isNavVisible:t=!1,toggleNavVisibility:r=ar,showToggleNavButton:a=!1}=e;const n=(t?"Скрыть":"Открыть")+" боковую панель";return(0,Ht.jsx)("button",{type:"button",title:n,onClick:r,className:or({hidden:!a}),children:t?(0,Ht.jsx)(qt,{}):(0,Ht.jsx)(Yt,{})})},dr=function(e){let{pageReload:t}=e;return(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,Ht.jsx)("button",{type:"button",onClick:t,children:"Перезагрузить страницу"})]})},cr=function(){return(0,Ht.jsx)(dr,{pageReload:A})};r(257);const lr=(0,xt.lazy)(P),ur=1e3,fr="loading-text",gr=e=>{e.data.type===Y.T1&&(vt.debug(`получили сообщение от сервис-воркера ${Y.T1} - перезагружаем страницу`),A())},yr=e=>{vt.debug("получили сообщение от сервис-воркера",e.data),te.apply((()=>{switch(e.data.type){case"create_category":Xe.addCategory(e.data.data);break;case"update_category":Xe.updateCategory(e.data.data);break;case"delete_category":Xe.deleteCategory(e.data.data);break;case"create_task":Xe.addTask(e.data.data);break;case"update_task":Xe.updateTask(e.data.data);break;case"delete_task":Xe.deleteTask(e.data.data)}}))};!async function(){j();try{!await async function(){vt.debug("настройка сервис-воркера...");let e=!1;if(!E())throw vt.debug("сервис-воркер не поддерживается"),new bt;vt.debug("сервис-воркер поддерживается");try{e=await W()}catch(e){$(e)}return e}()&&(await S(),await Z(),await N())}catch(e){!function(e){if(vt.error("ошибка при инициализации приложения",e),e instanceof bt)E()?F({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):F({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(e instanceof Error&&"Error"===e.name)return;F({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(e)}}()},9594:function(e,t,r){r.d(t,{H3:function(){return d},K_:function(){return l},R2:function(){return y},T1:function(){return u},UI:function(){return a},_4:function(){return g},bl:function(){return i},d:function(){return c},fv:function(){return f},lw:function(){return n},mr:function(){return s},ud:function(){return o}});const a="[ UI ]",n="[ APP ]",i="[ API ]",o="[ STORE ]",s="[ NOTIFY ]",d="[ LOCAL-STORAGE ]",c="[ USE-CASES ]",l={"Content-Type":"application/json; charset=utf-8"},u="RELOAD_PAGE",f="SKIP_WAITING",g="dark",y="light"},6769:function(e,t,r){r.d(t,{P:function(){return a}});const a=(0,r(8398).K)()},997:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".AppHeaderNavMenuButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--surfaceColor);border:initial;color:var(--light-text-color);cursor:pointer;display:block;max-height:var(--x8);max-width:var(--x8);padding:calc(var(--x)*(1 - var(--isTouch)))}.AppHeaderNavMenuButton:active,.AppHeaderNavMenuButton:hover{color:var(--text-color)}.AppHeaderNavMenuButton_hidden{display:none}",""]),t.Z=o},247:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".AppHeader{align-items:center;display:flex;padding-left:var(--x4);padding-right:var(--x4)}.AppHeader-Icon{height:var(--x8);vertical-align:text-bottom;width:var(--x8)}.AppHeader-Title{display:inline-block;flex:1;font-size:1.5rem;margin-left:var(--x4)}.AppHeader-MenuButtonContainer{max-height:var(--x10);max-width:var(--x10);overflow:hidden;padding:var(--x);padding-top:var(--x2)}@media only screen and (min-height:40.001rem){.AppHeader{height:5rem}}",""]),t.Z=o},795:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".NavHeader{background-color:var(--panel-surface-color);box-sizing:border-box;color:var(--panel-color);font-size:1.1rem;line-height:1.5rem;margin:0;padding:calc(var(--x2) + var(--x-touch)) var(--layout-paddings)}",""]),t.Z=o},3190:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".NavItem{align-items:center;border:.0625rem solid var(--border-color);border-top:0;cursor:pointer;display:flex}@media (hover:hover){.NavItem:hover{background-color:var(--select-hover-color)}}.NavItem_selected{background-color:var(--selection-color)}@media (hover:hover){.NavItem_selected:hover{background-color:var(--selection-color)}}.NavItem-Title{flex:1;margin-right:var(--x);overflow:hidden;-webkit-text-decoration:none;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.NavItem-Title:active{color:var(--text-color)}.NavItem-Icon{height:var(--x6);padding:var(--x2);padding-left:var(--layout-paddings);vertical-align:text-bottom;width:var(--x6)}@media (pointer:coarse){.NavItem-Icon{height:var(--x7);width:var(--x7)}}",""]),t.Z=o},3229:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".TaskListHeader{background-color:var(--selection-color);box-sizing:border-box;color:var(--panel-color);font-size:1.1rem;line-height:1.5rem;margin:0;padding:calc(var(--x2) + var(--x-touch)) var(--layout-paddings)}",""]),t.Z=o},3791:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),t.Z=o}},function(e){e.O(0,[568,169,514],(function(){return t=8811,e(e.s=t);var t}));e.O()}]);