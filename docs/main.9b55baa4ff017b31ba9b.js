(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[179],{9051:function(e,t,r){function a(e,t,r,a){i=e.child({layer:n.UI}),s=t,o=r,d=a}r.d(t,{bZ:function(){return a}});var n=r(9594);r(6769);let i=null,o=null,s=null,d=null},4981:function(e,t,r){function a(e){return new Promise((t=>{setTimeout(t,e)}))}function n(e){const t=document.getElementById(e);t&&t.remove()}function i(e,t){const r=document.getElementById(e);r&&r.classList.remove(t)}function o(e,t,r){return async t=>{const a=(0,ee.S)();return e({headers:{...J.K_},body:{id:a,method:r,params:t}})}}function s(){return Boolean(document.startViewTransition)?e=>document.startViewTransition?.(e):re}function d(e){function t(){a(250).then((()=>{de?ce():se.play().catch(le)}))}function r(){a(250).then((()=>{se.play().catch(le),ce([100,30,100,30,100])}))}le=function(t){t instanceof DOMException&&"NotAllowedError"===t.name||e.error({message:ue,error:t})},fe={off:()=>{ge=!0},on:()=>{ge=!1},info:e=>ge?Promise.resolve():a(0).then((()=>new Promise((t=>{ne.Am.info(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...oe},onClose:()=>{t()}})})))),warn:e=>ge?Promise.resolve():a(0).then((()=>new Promise((t=>{ne.Am.warn(e,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...oe},onClose:()=>{t()}})})))),error:e=>ge?Promise.resolve():a(0).then((()=>new Promise((r=>{ne.Am.error(e,{autoClose:!1,style:{border:"1px solid var(--error-color)",...oe},onOpen:t,onClose:()=>{se.pause(),r()}})})))),joyfullyGilling:e=>ge?Promise.resolve():a(0).then((()=>new Promise((t=>{ne.Am.success(e,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...oe},onOpen:r,onClose:()=>{t()}})}))))}}function l(e,t,r,a,n){ke=e,be=t.child({layer:J.ud}),_e=t.child({layer:J.d}),we=r,Ie=a,xe=n}function c(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function u(e){const{task_id:t,title:r,priority_id:a,category_id:n,description:i,due_date_time:o,deleted:s=!1,completed:d=!1}=e;if(o){const e=Date.parse(o),l=new Date(e);return{task_id:t,title:r,priority_id:a,category_id:n,description:i,deleted:s,completed:d,due_date_time:o,due_date_ts:new Date(l.getFullYear(),l.getMonth(),l.getDay()).valueOf(),due_date_time_ts:e}}return{task_id:t,title:r,priority_id:a,category_id:n,description:i,deleted:s,completed:d,due_date_time:void 0,due_date_ts:void 0,due_date_time_ts:void 0}}function f(e){return void 0!==e.due_date_time_ts&&e.due_date_time_ts<Date.now()}function g(e,t){const{tasks:r}=e,{idsByDueDate:a}=r;return t.due_date_ts?{...e,tasks:{...r,idsByDueDate:{...a,[t.due_date_ts]:[...a[t.due_date_ts]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function y(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[Ae]:[...r.idsByFilterId[Ae],t.task_id]}}}}function p(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[De]:[...r.idsByFilterId[De],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function h(e,t){const{tasks:r}=e;return{...e,tasks:{...e.tasks,idsByFilterId:{...r.idsByFilterId,[ze]:[...r.idsByFilterId[ze],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}}function v(e,t){const{tasks:r}=e;return t.category_id?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:[...r.idsByCategoryId[t.category_id]||[],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function m(e,t){const{tasks:r}=e;return!1===r.idsByFilterId[Ze].includes(t.task_id)?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ze]:[...r.idsByFilterId[Ze],t.task_id].sort(((e,t)=>(r.byId[e].due_date_time_ts||0)-(r.byId[t].due_date_time_ts||0)))}}}:e}function k(e,t){let r=e;return t.deleted?m(r,t):(t.category_id&&(r=v(r,t)),t.due_date_time?(r=g(r,t),f(t)&&(r=p(r,t))):r=y(r,t),!0===t.completed&&(r=h(r,t)),r)}function b(e,t){const{tasks:r}=e;return r.idsByFilterId[Ae].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ae]:r.idsByFilterId[Ae].filter((e=>e!==t.task_id))}}}:e}function _(e,t){const{tasks:r}=e;return r.idsByFilterId[De].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[De]:r.idsByFilterId[De].filter((e=>e!==t.task_id))}}}:e}function x(e,t){const{tasks:r}=e;return r.idsByFilterId[ze].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[ze]:r.idsByFilterId[ze].filter((e=>e!==t.task_id))}}}:e}function w(e,t){const{tasks:r}=e;if(void 0!==t.due_date_time&&void 0!==r.idsByDueDate[t.due_date_ts]){const a={...e,tasks:{...r,idsByDueDate:{...r.idsByDueDate,[t.due_date_ts]:r.idsByDueDate[t.due_date_ts].filter((e=>e!==t.task_id))}}};if(0===a.tasks.idsByDueDate[t.due_date_ts].length){const{[t.due_date_ts]:e,...r}=a.tasks.idsByDueDate;a.tasks.idsByDueDate=r}return a}return e}function I(e,t){const{tasks:r}=e,a=void 0!==t.category_id&&r.idsByCategoryId[t.category_id].includes(t.task_id);return t.category_id&&a?{...e,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[t.category_id]:r.idsByCategoryId[t.category_id].filter((e=>e!==t.task_id))}}}:e}function C(e,t,r){const a=function(e,t){const{tasks:r}=e;return r.idsByFilterId[Ze].indexOf(t.task_id)>-1?{...e,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ze]:r.idsByFilterId[Ze].filter((e=>e!==t.task_id))}}}:e}(e,t.byId[r.task_id]);return k(a,r)}function T(e,t){if(e.error){const{error:{message:r}}=e;we.error(t||r),_e.error(r,e.error.data)}return e}function j(){var e;bt=Q.child({layer:J.lw}),bt.info("🚀 Старт инициализации приложения"),bt.debug("инициализация провайдеров"),e=(0,X.hG)("/api"),Q.child({layer:J.bl}),te={getTasks:o(e,0,"get_tasks"),createCategory:o(e,0,"create_category"),updateCategory:o(e,0,"update_category"),deleteCategory:o(e,0,"delete_category"),createTask:o(e,0,"create_task"),updateTask:o(e,0,"update_task"),deleteTask:o(e,0,"delete_task")},d(Q.child({layer:J.mr}));const t=new K.j(Q.child({layer:J.H3}));(0,kt.bZ)(Q,fe,G,t),l(te,Q,fe,t,ae)}function B(){!function(e,t){const r=document.getElementById(e);r&&r.classList.add(t)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(n)}),1e3)}async function N(){globalThis.utilTimers.forEach((e=>{clearTimeout(e)})),await async function(){const e=_t-(performance.now()-globalThis.htmlInitTime);e>0&&await a(e)}(),n("loading-text"),i("root","Root_hidden"),B()}async function S(){bt.debug("настройка приложения"),window.addEventListener("securitypolicyviolation",(e=>{bt.error("CSP Violation Detected:",{"Blocked URI":e.blockedURI,"Violated Directive":e.violatedDirective,"Original Policy":e.originalPolicy})})),window.addEventListener("appinstalled",(e=>{bt.info("Приложение было установлено",e)})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(e=>{let t="browser";e.matches&&(t="standalone"),bt.debug("display-mode изменился:",t)})),function(){function e(e){const t=localStorage.getItem("colorScheme");if(void 0===[J._4,J.R2].find((e=>e===t))){const t=document.documentElement,r=t.classList;e.matches?(r.add(J._4),r.remove(J.R2)):(r.add(J.R2),r.remove(J._4));const a=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim(),n=document.querySelector('meta[name="theme-color"]');n&&a&&n.setAttribute("content",a)}}const t=window.matchMedia("(prefers-color-scheme: dark)");e(t),t.addEventListener("change",e)}(),window.addEventListener("unhandledrejection",(e=>{e.preventDefault(),bt.error("Unhandled promise rejection",e.reason)}))}function E(){return"serviceWorker"in navigator}function A(e){let{title:t,message:r,buttonText:a}=e;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const n=document.createElement("h3");if(n.textContent=t,document.body.appendChild(n),r){const e=document.createElement("p");e.textContent=r,document.body.appendChild(e)}if(a){const e=document.createElement("button");e.textContent=a,e.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(e)}}function F(e){let{onCloseNavebar:t,children:r}=e;return(0,Ht.jsx)("ul",{className:"NavBar",children:r({onCloseNavebar:t})})}function Z(){window.location.reload()}async function P(){try{return await r.e(143).then(r.bind(r,6119))}catch(e){return bt.error("Ошибка загрузки компонента App"),{default:mr}}}async function D(e){if(!e.result)return void bt.error("Failed to create app store",e.error);Re=(0,Te.Ue)()((()=>({...je.VE,tasks:{...je.VE.tasks,idsByCategoryId:{},idsByDueDate:{},idsByFilterId:{[Ae]:[],[De]:[],[ze]:[],[Ze]:[]}},navigationFilter:We(c(new Date))}))),(0,je.eR)(Re,be.child({layer:"[ DOMAIN ]"})),ae.setEnabled(!1);const t=(e,t)=>{e.forEach((e=>{const r=t(e);r.error&&bt.error(r.error.message,e)}))},{icons:r,categories:a,priorities:n,tasks:i}=e.result;try{t(r,qe.addIcon),t(a,qe.addCategory),t(n,qe.addPriority),t(i,qe.addTask)}catch(e){bt.error("Initialization error",e)}finally{ae.setEnabled(!0)}}function M(){return document.querySelector("#root")||function(){const e=document.createElement("div");return e.id="root",document.body.appendChild(e),e}()}function z(e){e.stopPropagation()}async function L(){const e=M();D(await async function(){return bt.debug("предзагрузка данных для хранилища приложения"),te.getTasks()}()),bt.debug("🦚 Старт рендера приложения"),(0,wt.s)(e).render((0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)(It.StrictMode,{children:(0,Ht.jsx)(kr,{children:e=>({header:(0,Ht.jsx)(er,{children:(0,Ht.jsx)(pr,{...e,children:e.isNavVisible?(0,Ht.jsx)(ar,{}):(0,Ht.jsx)(rr,{})})}),nav:(0,Ht.jsx)(Yt,{onCloseNavebar:e.closeNav,children:e=>{let{onCloseNavebar:t}=e;return(0,Ht.jsxs)(Gt,{title:"Календарь",children:[(0,Ht.jsx)(Rt,{title:"Дела по дому",icon:Ct["home.png"],selected:!1,handleClick:t,children:(0,Ht.jsx)("button",{className:"IconButton",title:"Открыть меню",onClick:z,children:(0,Ht.jsx)(tr,{})})}),(0,Ht.jsx)(Rt,{title:"Спорт",icon:Ct["ball.png"],selected:!1,handleClick:t,children:(0,Ht.jsx)("button",{className:"IconButton",title:"Открыть меню",onClick:z,children:(0,Ht.jsx)(tr,{})})})]})}}),content:(0,Ht.jsx)("div",{style:{height:"100%",background:"var(--background-color)"},children:(0,Ht.jsx)(dr,{title:"Список задач"})})})})}),(0,Ht.jsx)(ne.Ix,{draggablePercent:30,role:"alert"})]}))}async function O(e,t,r){return new Promise(((a,n)=>{e.state===t?a():e.onstatechange=async()=>{bt.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),e.state===t?a():"redundant"===e.state&&(bt.debug("сервис-воркер стал не нужным"),n())}}))}function H(){!function(e,t){const r=document.getElementById(e);r&&(r.textContent=t)}(_r,"Загрузка обновлений ..."),i(_r,"loading-text_hidden")}async function W(e,t){return!(!e.waiting||"installed"!==e.waiting.state)&&(await async function(e){const t=performance.now();!e&&t<br&&(bt.debug(`загрузка ассетов заняла меньше ${br} мс - отображаем индикатор загрузки`),await a(br-t))}(t),bt.debug(`отправляем сервис-воркеру сообщение: ${J.fv}`),e.waiting.postMessage({type:J.fv}),await O(e.waiting,"activated",e),!0)}async function R(e){if(!e||!navigator.onLine)return!1;await e.update().then((async()=>{await a(0)})),navigator.serviceWorker.addEventListener("message",xr);let t=await async function(e){return!!e.installing&&(H(),bt.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await O(e.installing,"installed",e),!0)}(e);return t=await W(e,t),await async function(e){e.active&&(bt.debug("сервис-воркер активируется"),await O(e.active,"activated",e))}(e),!1===t&&navigator.serviceWorker.removeEventListener("message",xr),t}function $(){globalThis.swRegistration=void 0}async function V(){if(globalThis.swRegistration){const e=await globalThis.swRegistration;if(e instanceof Error)throw $(),e;const t=await R(e);return t||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const e=await navigator.storage.persist(),t=e?"⭐️ ":"",r=e?"дал обещание":"отверг предложение";bt.debug(`${t}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",wr)),$(),t}return!1}function U(e){if(!e.message.includes(`${window.location.origin}/sw.js`)){if(!function(e){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&e instanceof TypeError&&e.message.startsWith("Failed to update a ServiceWorker for scope")}(e))throw e;bt.error("Не удалось обновить сервис-воркер")}}var G={};r.r(G),r.d(G,{addCategory:function(){return et},addIcon:function(){return Je},addPriority:function(){return Qe},addTask:function(){return st},clearTrash:function(){return lt},createCategory:function(){return rt},createTask:function(){return ut},deleteCategory:function(){return nt},deleteTask:function(){return gt},undeleteTask:function(){return pt},updateCategory:function(){return ot},updateTask:function(){return vt},useAppState:function(){return mt}});var K=r(7258),X=r(335),Y=r(7849),q=r(1990),J=r(9594);let Q=Y.G;Q=new q.G("/log");var ee=r(7029);let te;const re=e=>e(),ae={apply:re,setEnabled:e=>{ae.apply=e?s():re}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");ae.apply=s()}();var ne=r(1277),ie=r.p+"error.8ad17092b67f41ed6f08.mp3";const oe={lineHeight:1.45,color:"var(--text-color)",fontFamily:"robotoregular",backgroundColor:"var(--notify-surface-color)"},se=new Audio(ie);se.preload="auto",se.volume=.25;const de=!0===window.matchMedia("(hover: none) and (pointer: coarse)").matches&&"vibrate"in navigator;let le;const ce=function(e){void 0===e&&(e=[5]),de&&window.navigator.vibrate(e)},ue="Ошибка воспроизведения звука";let fe,ge=!1;var ye=r(4321),pe=r(8850),he=r(4687),ve=r(8975),me=r(6769);let ke=me.P,be=me.P,_e=me.P,xe=null,we=me.P,Ie=null;var Ce=r(1),Te=r(270),je=r(6790),Be=r(2182);const Ne="filter",Se="category",Ee="calendar",Ae="inbox",Fe="Черновики",Ze="trash",Pe="Корзина",De="overdue",Me="Просроченные",ze="completed",Le="Завершенные",Oe={[Ae]:Fe,[Ze]:Pe,[De]:Me,[ze]:Le},He={year:"numeric",month:"long",day:"numeric"},We=e=>{return t=`${e.toLocaleDateString("ru-Ru",He)}`,r=c(e).valueOf(),{type:Ee,title:t,key:r};var t,r};let Re;var $e=r(9976);var Ve=r(3538);var Ue=r(5096),Ge=r(9882),Ke=r(1276);const Xe=e=>{const t=Re.getState().tasks;if(!1===function(e,t){const r=(0,Ue.v)((0,Be._X)(e),{...(0,Be._X)(t),deleted:!0});return void 0!==e&&void 0!==t&&!0===r&&!0===e.deleted&&!t.deleted}(e.task_id&&t.byId[Number(e.task_id)]||{},e)){const t={message:`${Xe.name}: задача не найдена`,data:e};return be.error(t.message,t.data),{error:t}}const r=(0,Ke.x)({...e,deleted:!1});if(r.error)return r;const a=r.result,n=Re.getState(),i=C(n,t,u(a));return i!==n&&Re.setState(i),{result:a}},Ye=e=>e,qe={addIcon:ye.U,addCategory:e=>{const t=(0,Ce.i)(e);if(t.error){const{message:e,data:r}=t.error;return be.error(e,r),t}const r=t.result,a=Re.getState(),n=function(e,t){const{category_id:r}=t;return{...e,tasks:{...e.tasks,idsByCategoryId:{...e.tasks.idsByCategoryId,[r]:[]}}}}(a,r);return n!==a&&Re.setState(n),{result:r}},deleteCategory:e=>{const t=(0,$e.u)(e);if(t.error){const{message:e,data:r}=t.error;return be.error(e,r),t}const r=t.result,a=Re.getState(),n=function(e,t){const{category_id:r}=t,{[r]:a,...n}=e.tasks.idsByCategoryId;return{...e,tasks:{...e.tasks,idsByCategoryId:n}}}(a,r);return n!==a&&Re.setState(n),{result:r}},updateCategory:pe.y,addPriority:he.O,createCalendarNavigationFilter:We,createCategoryNavigationFilter:(e,t)=>function(e,t){return{type:Se,title:t,key:e}}(e,t),createFilterNavigationFilter:e=>{return{type:Ne,title:Oe[t=e],key:t};var t},setNavigationFilter:function(e){const t=Re.getState();return Re.setState({...t,navigationFilter:e}),{result:e}},addTask:e=>{const t=(0,Ve.g)(e);if(t.error)return t;const r=t.result,a=Re.getState(),n=k(a,u(r));return a!==n&&Re.setState(n),{result:r}},trashTask:function(e){const t=Re.getState(),{[Number(e.task_id)]:r,...a}=t.tasks.byId,n={...t,tasks:{...t.tasks,byId:a,ids:t.tasks.ids.filter((t=>t!==e.task_id)),idsByFilterId:{...t.tasks.idsByFilterId,[Ze]:t.tasks.idsByFilterId[Ze].filter((t=>t!==e.task_id))}}};return t!==n&&(Re.setState(n),be.debug("clearTrash")),{result:e}},deleteTask:e=>{const t=Re.getState().tasks,r=e.task_id&&(0,Ge._X)(t.byId[e.task_id]);if(!(0,Ue.v)((0,Ge._X)(e),r)){const t={message:"Задача не найдена",data:e};return be.error(t.message,t.data),{error:t}}const a=(0,Ke.x)({...e,deleted:!0});if(a.error){const{message:e,data:t}=a.error;return be.error(e,t),a}const n=a.result,i=Re.getState(),o=function(e,t,r){let a=e;return function(e,t){return e&&!e.deleted&&!0===t.deleted}(t.byId[r.task_id],r)&&(a=I(a,r),a=w(a,r),a=b(a,r),a=_(a,r),a=x(a,r),a=m(a,r)),a}(i,t,u(n));return o!==i&&Re.setState(o),{result:n}},undeleteTask:Xe,updateTask:e=>{const{task_id:t}=e;let r=Re.getState();const a=r.tasks;if(t&&!0===a.byId[t].deleted){const t={message:"Нельзя обновить удаленную задачу",data:e};return be.error(t.message,t.data),{error:t}}const n=(0,Ke.x)(e);if(n.error){const{message:e,data:t}=n.error;return be.error(e,t),n}const i=n.result;r=Re.getState();const o=function(e,t,r){const a=t.byId[r.task_id];let n=e;return function(e,t){return void 0===e.category_id&&void 0!==t.category_id}(a,r)&&(n=v(n,r)),function(e,t){return void 0!==e.category_id&&void 0===t.category_id}(a,r)&&(n=I(n,a)),function(e,t){return e.category_id!==t.category_id}(a,r)&&(n=I(n,a),n=v(n,r)),function(e,t){return void 0===e.due_date_time&&void 0!==t.due_date_time}(a,r)&&(n=b(n,a),n=g(n,r),f(r)&&(n=p(n,r))),function(e,t){return void 0!==e.due_date_time&&void 0===t.due_date_time}(a,r)&&(n=w(n,a),n=_(n,r),n=y(n,r)),function(e,t){return void 0!==e.due_date_time&&void 0!==t.due_date_time&&e.due_date_time!==t.due_date_time}(a,r)&&(n=w(n,a),n=_(n,r),n=g(n,r),f(r)&&(n=p(n,r))),n=function(e,t){return!0===t.completed&&e.completed!==t.completed}(a,r)?h(n,r):x(n,r),n}(r,a,u(i));return o!==r&&Re.setState(o),{result:i}},useAppState:()=>Re(Ye),getCategotyById:e=>Re.getState().categories.byId[e],getTaskInTrash:ve.B},Je=e=>T(qe.addIcon(e),"Ошибка добавления иконки"),Qe=e=>T(qe.addPriority(e),"Ошибка добавления приоритета"),et=e=>T(qe.addCategory(e),"Ошибка при добавлении категории"),tt="Ошибка создания новой категории",rt=async e=>{const t=await ke.createCategory(e);if(t.error)return T(t,`${tt} на сервере`);const r=qe.addCategory(t.result);return r.error?T(t,tt):r},at="Ошибка удаления категории",nt=async e=>{const t=await ke.deleteCategory(e);if(t.error)return T(t,`${at} на сервере`);const r=qe.deleteCategory(t.result);return r.error?T(t,at):r},it="Ошибка обновления категории",ot=async e=>{const t=await ke.updateCategory(e);if(t.error)return T(t,`${it} на сервере`);const r=qe.updateCategory(t.result);return r.error?T(t,it):r},st=e=>T(qe.addTask(e),"Ошибка добавления задачи"),dt="Ошибка очистки корзины",lt=async()=>{const e=await Promise.all(qe.getTaskInTrash().map((async e=>{const t=await ke.deleteTask(e);t.error&&_e.error(`${dt} на сервере`,t.error.data);const r=qe.trashTask(e);return r.error&&_e.error(dt,r.error.data),r})));return e.find((e=>e.error))&&we.error(dt),e},ct="Ошибка создания задачи",ut=async e=>{const t=await ke.createTask(e);if(t.error)return T(t,`${ct} на сервере`);const r=qe.addTask(t.result);return r.error?T(t,ct):r},ft="Ошибка удаления задачи",gt=async e=>{const t=await ke.deleteTask(e);if(t.error)return T(t,`${ft} на сервере`);const r=qe.deleteTask(t.result);return r.error?T(t,ft):r},yt="Ошибка восстановления задачи из корзины",pt=async e=>{const t=await ke.updateTask({...e,deleted:!1});if(t.error)return T(t,`${yt} на сервере`);const r=qe.updateTask(t.result);return r.error?T(t,yt):r},ht="Ошибка обновления задачи",vt=async e=>{const t=await ke.updateTask(e);if(t.error)return T(t,`${ht} на сервере`);const r=qe.updateTask(t.result);return r.error?T(t,ht):r},mt=()=>{var e;return e=qe.useAppState(),"structuredClone"in window?structuredClone(e):e};var kt=r(9051);let bt=me.P;const _t=1e3;class xt extends Error{constructor(e){void 0===e&&(e="Сервис-воркер не поддерживается"),super(e),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,xt.prototype)}}var wt=r(745),It=r(7294);const Ct={"alert.png":r.p+"alert.476b00abda902b398be7.png","ball.png":r.p+"ball.3d996bafa729a1d3f580.png","bug.png":r.p+"bug.83b52ad3ded9ef1fbd18.png","cart.png":r.p+"cart.2d640112b4b86b627ff7.png","favorite.png":r.p+"favorite.7f0174c25660ef72df60.png","home.png":r.p+"home.3e40fe2b97b19c75dfaf.png","inbox.png":r.p+"inbox.58a834f614e341f9c578.png","life.png":r.p+"life.5896aaa56394aa0273b3.png","mail.png":r.p+"mail.4a4239588f1b0d37bcfc.png","other.png":r.p+"other.66c872e04e2846cafa68.png","page.png":r.p+"page.9d1fc4484b1e5929b7ee.png","today.png":r.p+"today.141e3d87afbd71da541c.png","twitter.png":r.p+"twitter.5556cda0273e796d6a65.png","warning.png":r.p+"warning.4f48c087dcbbdb3bd268.png","folder_red.png":r.p+"folder_red.66f2d7c840bd3b9aed95.png","next.png":r.p+"next.4b695e6dc3fabdcc84b4.png","note.png":r.p+"note.8e112a51a84fa9c09b11.png","refresh.png":r.p+"refresh.7c9f0768269a6bbec081.png","trash.gif":r.p+"trash.3e03c195726c2cccdc94.gif","overdue.svg":r.p+"overdue.45d759abb485d88b78aa.svg"};var Tt=r(1504),jt=r(3379),Bt=r.n(jt),Nt=r(7795),St=r.n(Nt),Et=r(569),At=r.n(Et),Ft=r(3565),Zt=r.n(Ft),Pt=r(9216),Dt=r.n(Pt),Mt=r(4589),zt=r.n(Mt),Lt=r(3190),Ot={};Ot.styleTagTransform=zt(),Ot.setAttributes=Zt(),Ot.insert=At().bind(null,"head"),Ot.domAPI=St(),Ot.insertStyleElement=Dt();Bt()(Lt.Z,Ot),Lt.Z&&Lt.Z.locals&&Lt.Z.locals;var Ht=r(5893);const Wt=(0,Tt.cn)("NavItem");var Rt=e=>{let{title:t,icon:r,selected:a,handleClick:n,children:i}=e;const o=Wt({selected:a});return(0,Ht.jsxs)("li",{className:o,onClick:n,children:[(0,Ht.jsx)("img",{className:"NavItem-Icon",src:r,alt:""}),(0,Ht.jsx)("a",{className:"NavItem-Title",href:"#",children:t}),i]})},$t=r(795),Vt={};Vt.styleTagTransform=zt(),Vt.setAttributes=Zt(),Vt.insert=At().bind(null,"head"),Vt.domAPI=St(),Vt.insertStyleElement=Dt();Bt()($t.Z,Vt),$t.Z&&$t.Z.locals&&$t.Z.locals;var Ut=function(e){let{title:t}=e;return(0,Ht.jsx)("h2",{className:"NavHeader",children:t})},Gt=function(e){let{title:t,children:r}=e;return(0,Ht.jsxs)("li",{children:[(0,Ht.jsx)(Ut,{title:t}),(0,Ht.jsx)("ul",{children:r})]})},Kt=r(8395),Xt={};Xt.styleTagTransform=zt(),Xt.setAttributes=Zt(),Xt.insert=At().bind(null,"head"),Xt.domAPI=St(),Xt.insertStyleElement=Dt();Bt()(Kt.Z,Xt),Kt.Z&&Kt.Z.locals&&Kt.Z.locals;F.NavSection=Gt;var Yt=F,qt=function(e){return(0,Ht.jsxs)("svg",{...e,xmlSpace:"preserve",viewBox:"0 0 491.526 491.526",width:"100%",height:"100%",children:[e.title&&(0,Ht.jsx)("title",{children:e.title}),(0,Ht.jsx)("path",{d:"M413.088 63.687c.024-11.819-9.677-21.421-21.668-21.446l-368.731-.757C10.697 41.459.957 51.021.933 62.841l-.139 67.856 412.154.846.14-67.856z",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M.794 130.697.26 390.609c-.024 11.82 9.677 21.421 21.668 21.446l368.731.757c11.991.024 21.731-9.537 21.755-21.357l.534-259.912-412.154-.846z",style:{fill:"#cee3ff",fillOpacity:1,stroke:"#64798a",strokeWidth:1}}),(0,Ht.jsx)("circle",{cx:"71.64",cy:"71.213",r:"19.543",style:{fill:"#d15241"}}),(0,Ht.jsx)("circle",{cx:"342.365",cy:"71.767",r:"19.543",style:{fill:"#d15241"}}),(0,Ht.jsx)("path",{d:"m71.784 0-.17 83.168c7.559.015 13.7-6.012 13.716-13.464l.115-56.183C85.46 6.07 79.343.016 71.784 0z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"m58.068 13.465-.115 56.183c-.015 7.452 6.1 13.505 13.66 13.52L71.784 0c-7.56-.015-13.7 6.013-13.716 13.465zm270.711.555-.115 56.183c-.016 7.452 6.101 13.505 13.66 13.521l.171-83.168c-7.56-.015-13.701 6.013-13.716 13.464z",style:{fill:"#ebf0f3"}}),(0,Ht.jsx)("path",{d:"m342.496.556-.171 83.168c7.559.015 13.7-6.013 13.716-13.465l.116-56.183c.014-7.451-6.103-13.505-13.661-13.52z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"M-226.246-196.869H-188v38.246h-38.246zm-68.602.028h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M324.914 159.282h38.246v38.246h-38.246z",transform:"rotate(-180 344.032 178.414)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M50.294 221.132H88.54v38.246H50.294z",transform:"rotate(-180 69.41 240.257)",style:{fill:"#adaeb6",fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M118.886 221.288h38.246v38.246h-38.246z",transform:"rotate(-180 138.003 240.415)",style:{fill:"#44c4a1"}}),(0,Ht.jsx)("path",{d:"M-226.24-259.282h38.246v38.246h-38.246zm-68.627-.022h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M324.76 221.695h38.246v38.246H324.76z",transform:"rotate(-180 343.877 240.826)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M-89.002-321.706h38.246v38.246h-38.246zm-68.618-.022h38.246v38.246h-38.246zm-68.613.034h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("path",{d:"M-294.836-321.716h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#d5d6db",strokeWidth:1}}),(0,Ht.jsx)("path",{d:"M324.654 284.162H362.9v38.246h-38.246z",transform:"rotate(-180 343.772 303.29)",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"M-88.996-384.119h38.246v38.246h-38.246zm-68.592-.022h38.246v38.246h-38.246z",transform:"rotate(-179.885)",style:{fill:"#adaeb6",strokeWidth:1,fillOpacity:1}}),(0,Ht.jsx)("circle",{cx:"359.461",cy:"359.722",r:"131.804",style:{fill:"#64798a"}}),(0,Ht.jsx)("circle",{cx:"359.461",cy:"359.722",r:"107.571",style:{fill:"#ffffff"}}),(0,Ht.jsx)("path",{d:"M257.119 362.138c.119-57.965 47.205-104.859 105.171-104.74 57.524.118 104.119 46.496 104.71 103.853.006-.44.036-.875.037-1.317.122-59.42-47.949-107.689-107.371-107.812-59.42-.122-107.688 47.949-107.811 107.37-.122 59.421 47.949 107.69 107.369 107.812.442.001.877-.026 1.318-.03-57.356-.827-103.541-47.612-103.423-105.136z",style:{fill:"#e1e6e9"}}),(0,Ht.jsx)("path",{d:"M414.117 416.177a2.392 2.392 0 0 1-1.692-.705l-69.65-69.937a2.396 2.396 0 1 1 3.396-3.382l69.649 69.937a2.395 2.395 0 0 1-1.703 4.087z",style:{fill:"#e56353"}}),(0,Ht.jsx)("path",{d:"m363.062 349.464.116-56.548a3.597 3.597 0 0 0-3.587-3.603 3.598 3.598 0 0 0-3.603 3.588l-.116 56.548a10.904 10.904 0 0 0-6.174 5.452l-43.166-.088a4.79 4.79 0 0 0-4.803 4.783 4.79 4.79 0 0 0 4.783 4.803l43.166.088c1.775 3.615 5.454 6.134 9.745 6.143 6.02.013 10.925-4.874 10.938-10.893.01-4.754-3.054-8.77-7.299-10.273z",style:{fill:"#64798a"}}),(0,Ht.jsx)("circle",{cx:"359.463",cy:"359.667",r:"6.124",style:{fill:"#ffffff"}}),(0,Ht.jsx)("circle",{cx:"359.655",cy:"268.587",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"359.264",cy:"450.849",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"450.568",cy:"359.883",r:"5.381",style:{fill:"#3a556a"}}),(0,Ht.jsx)("circle",{cx:"268.306",cy:"359.545",r:"5.381",style:{fill:"#3a556a"}})]})},Jt=r(247),Qt={};Qt.styleTagTransform=zt(),Qt.setAttributes=Zt(),Qt.insert=At().bind(null,"head"),Qt.domAPI=St(),Qt.insertStyleElement=Dt();Bt()(Jt.Z,Qt),Jt.Z&&Jt.Z.locals&&Jt.Z.locals;var er=function(e){let{children:t}=e;return(0,Ht.jsxs)("div",{className:"AppHeader",children:[(0,Ht.jsx)(qt,{className:"AppHeader-Icon"}),(0,Ht.jsx)("h1",{className:"AppHeader-Title",children:"Мои Задачи"}),(0,Ht.jsx)("div",{className:"AppHeader-MenuButtonContainer",children:t})]})},tr=function(e){return(0,Ht.jsxs)("svg",{fill:"none",...e,width:"100%",height:"100%",viewBox:"0 0 24 24",children:[e.title&&(0,Ht.jsx)("title",{children:e.title}),(0,Ht.jsx)("path",{d:"M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Ht.jsx)("path",{d:"M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Ht.jsx)("path",{d:"M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},rr=function(e){return(0,Ht.jsxs)("svg",{...e,width:"100%",height:"100%",viewBox:"0 0 24 24",children:[e.title&&(0,Ht.jsx)("title",{children:e.title}),(0,Ht.jsx)("path",{d:"M4 17H20M4 12H20M4 7H20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},ar=function(e){return(0,Ht.jsxs)("svg",{...e,width:"100%",height:"100%",viewBox:"0 0 24 24",children:[e.title&&(0,Ht.jsx)("title",{children:e.title}),(0,Ht.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",fill:"currentColor"})]})},nr=r(3229),ir={};ir.styleTagTransform=zt(),ir.setAttributes=Zt(),ir.insert=At().bind(null,"head"),ir.domAPI=St(),ir.insertStyleElement=Dt();Bt()(nr.Z,ir),nr.Z&&nr.Z.locals&&nr.Z.locals;var or=r(3791),sr={};sr.styleTagTransform=zt(),sr.setAttributes=Zt(),sr.insert=At().bind(null,"head"),sr.domAPI=St(),sr.insertStyleElement=Dt();Bt()(or.Z,sr),or.Z&&or.Z.locals&&or.Z.locals;var dr=function(e){let{title:t}=e;return(0,Ht.jsx)("h2",{className:"TaskListHeader ellipsis",children:t})};const lr=()=>{};var cr=r(997),ur={};ur.styleTagTransform=zt(),ur.setAttributes=Zt(),ur.insert=At().bind(null,"head"),ur.domAPI=St(),ur.insertStyleElement=Dt();Bt()(cr.Z,ur),cr.Z&&cr.Z.locals&&cr.Z.locals;var fr=r(1272),gr={};gr.styleTagTransform=zt(),gr.setAttributes=Zt(),gr.insert=At().bind(null,"head"),gr.domAPI=St(),gr.insertStyleElement=Dt();Bt()(fr.Z,gr),fr.Z&&fr.Z.locals&&fr.Z.locals;const yr=(0,Tt.cn)("AppHeaderNavMenuButton");var pr=function(e){let{isNavVisible:t=!1,toggleNavVisibility:r=lr,showToggleNavButton:a=!1}=e;const n=(t?"Скрыть":"Открыть")+" боковую панель";return(0,Ht.jsx)("button",{type:"button",title:n,onClick:r,className:yr({hidden:!a})+" IconButton",children:t?(0,Ht.jsx)(ar,{title:"Закрыть панель навигации"}):(0,Ht.jsx)(rr,{title:"Открыть панель навигации"})})};const hr={padding:"var(--x4)",inlineSize:"100%"};var vr=function(e){let{pageReload:t}=e;return(0,Ht.jsxs)("div",{style:hr,children:[(0,Ht.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,Ht.jsx)("button",{type:"button",onClick:t,children:"Перезагрузить страницу"})]})},mr=function(){return(0,Ht.jsx)(vr,{pageReload:Z})};r(257);const kr=(0,It.lazy)(P),br=1e3,_r="loading-text",xr=e=>{e.data.type===J.T1&&(bt.debug(`получили сообщение от сервис-воркера ${J.T1} - перезагружаем страницу`),Z())},wr=e=>{bt.debug("получили сообщение от сервис-воркера",e.data),ae.apply((()=>{switch(e.data.type){case"create_category":qe.addCategory(e.data.data);break;case"update_category":qe.updateCategory(e.data.data);break;case"delete_category":qe.deleteCategory(e.data.data);break;case"create_task":qe.addTask(e.data.data);break;case"update_task":qe.updateTask(e.data.data);break;case"delete_task":qe.deleteTask(e.data.data)}}))};!async function(){j();try{!await async function(){bt.debug("настройка сервис-воркера...");let e=!1;if(!E())throw bt.debug("сервис-воркер не поддерживается"),new xt;bt.debug("сервис-воркер поддерживается");try{e=await V()}catch(e){U(e)}return e}()&&(await S(),await L(),await N())}catch(e){!function(e){if(bt.error("ошибка при инициализации приложения",e),e instanceof xt)E()?A({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):A({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(e instanceof Error&&"Error"===e.name)return;A({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(e)}}()},9594:function(e,t,r){r.d(t,{H3:function(){return d},K_:function(){return c},R2:function(){return y},T1:function(){return u},UI:function(){return a},_4:function(){return g},bl:function(){return i},d:function(){return l},fv:function(){return f},lw:function(){return n},mr:function(){return s},ud:function(){return o}});const a="[ UI ]",n="[ APP ]",i="[ API ]",o="[ STORE ]",s="[ NOTIFY ]",d="[ LOCAL-STORAGE ]",l="[ USE-CASES ]",c={"Content-Type":"application/json; charset=utf-8"},u="RELOAD_PAGE",f="SKIP_WAITING",g="dark",y="light"},6769:function(e,t,r){r.d(t,{P:function(){return a}});const a=(0,r(8398).K)()},997:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".AppHeaderNavMenuButton{display:inline;display:initial}.AppHeaderNavMenuButton_hidden{display:none}",""]),t.Z=o},247:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".AppHeader{align-items:center;display:flex;gap:var(--x4);padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}.AppHeader-Icon{height:var(--x8);vertical-align:text-bottom;width:var(--x8)}.AppHeader-Title{display:inline-block;flex:1;font-size:1.5rem}.AppHeader-MenuButtonContainer{padding-top:var(--x)}@media only screen and (min-height:40.001rem){.AppHeader{height:5rem}}",""]),t.Z=o},795:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".NavHeader{background-color:var(--panel-surface-color);box-sizing:border-box;color:var(--panel-color);font-size:1.1rem;line-height:1.5rem;margin:0;padding:var(--x2) var(--x2) var(--x2) var(--layout-paddings)}",""]),t.Z=o},3190:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".NavItem{align-items:center;border-bottom:.0625rem solid var(--border-color);border-top:0;cursor:pointer;display:flex;gap:var(--x2);padding-left:var(--layout-paddings);padding-right:0;-webkit-tap-highlight-color:transparent}.NavItem:active{background-color:var(--select-hover-color)}@media (hover:hover){.NavItem:hover{background-color:var(--select-hover-color)}}.NavItem_selected{background-color:var(--selection-color)}@media (hover:hover){.NavItem_selected:hover{background-color:var(--selection-color)}}.NavItem-Title{flex:1;overflow:hidden;-webkit-text-decoration:none;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.NavItem-Title,.NavItem-Title:active,.NavItem-Title:hover,.NavItem-Title:visited{color:var(--text-color)}.NavItem-Icon{height:calc(var(--x5) + var(--x-touch));padding:var(--x2);padding-left:0;vertical-align:text-bottom;width:calc(var(--x5) + var(--x-touch))}",""]),t.Z=o},8395:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".NavBar,.NavBar ul{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0}",""]),t.Z=o},3229:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".TaskListHeader{background-color:var(--selection-color);box-sizing:border-box;color:var(--panel-color);font-size:1.1rem;line-height:1.5rem;margin:0;padding:var(--x2) var(--layout-paddings)}",""]),t.Z=o},3791:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),t.Z=o},1272:function(e,t,r){var a=r(8081),n=r.n(a),i=r(3645),o=r.n(i)()(n());o.push([e.id,".IconButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--surface-color);border:initial;border-radius:var(--x);color:var(--light-text-color);cursor:pointer;height:calc(var(--x10) - var(--x)*(1 - var(--isTouch)));padding:var(--x2);width:calc(var(--x10) - var(--x)*(1 - var(--isTouch)));-webkit-tap-highlight-color:transparent}.IconButton:active{background-color:var(--panel-surface-color-hover);color:var(--text-color)}@media (hover:hover){.IconButton:hover{background-color:var(--panel-surface-color-hover);color:var(--text-color)}}",""]),t.Z=o}},function(e){e.O(0,[568,169,514],(function(){return t=4981,e(e.s=t);var t}));e.O()}]);