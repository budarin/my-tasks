(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[792],{6552:function(t,e,r){function n(){return Boolean(document.startViewTransition)?t=>document.startViewTransition?.(t):a}r.d(e,{B:function(){return i}});const a=t=>t(),i={isSupported:Boolean(document.startViewTransition),apply:a,setEnabled:t=>{i.apply=t?n():a}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");i.apply=n()}()},3341:function(t,e,r){function n(t,e,r,n,a){i=t,o=e,s=r,d=n,c=a}r.d(e,{$v:function(){return n},LD:function(){return s},me:function(){return o},nY:function(){return c},vF:function(){return i}});var a=r(8327);let i=(0,a.b)("logger"),s=(0,a.b)("useCases"),o=(0,a.b)("notify"),c=(0,a.b)("colorSchema"),d=(0,a.b)("storage")},4001:function(t,e,r){function n(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function a(t){return{type:L,key:t}}function i(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function s(t){return{type:Z,key:(0,G.g)(t)}}function o(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function c(t){return{type:tt,key:t}}function d(t){const{type:e,title:r,key:n}=t||{};return{type:e,key:n}}r.d(e,{_h:function(){return b},L0:function(){return Z},vf:function(){return tt},Qy:function(){return X},QO:function(){return P},p5:function(){return L},FR:function(){return D},CD:function(){return m},cJ:function(){return v},GK:function(){return C},Tl:function(){return $},r:function(){return s},Tz:function(){return c},x7:function(){return a},je:function(){return U},gg:function(){return u.gg},hZ:function(){return q},Ro:function(){return Q},UB:function(){return j},o4:function(){return x},Yv:function(){return w},jG:function(){return B},pd:function(){return T},tG:function(){return Y},fg:function(){return nt},LR:function(){return M},qe:function(){return E}});var u=r(1727),l=r(2298),g=r(3756),f=r(9068),y=r(7128),p=r(3640),k=r(8708);const m="others",v="settings",h="Настройки",b="about",_="О приложении",C="store_state",I="Для разработчиков",w=[v,b,C],T={[v]:l.X["settings.svg"],[b]:l.X["help.svg"],[C]:l.X["state.svg"]},B={[v]:h,[b]:_,[C]:I},x={[v]:"Настройки приложения",[b]:"Описание всех плюшек приложения! 😊",[C]:"Актуальное состояние хранилища приложения"},F="Навигационный фильтр",S={key:{validators:[[g.K,(0,f.m)(F,"title")],[(0,y.Y)(w),(0,p.C)(F,"title")]],required:!0},type:{validators:[[g.K,(0,f.m)(F,"type")],[t=>t===m,`Поле "type: сущности ${F} не соответстует требуемому значению`]],required:!0}},E=t=>(0,k.U)(t,S,n,F),L="filter",D="inbox",O="Черновики",$="trash",N="Корзина",P="expired",R="Просроченные",X="completed",A="Завершённые",Q=[D,P,X,$],j={[D]:O,[$]:N,[P]:R,[X]:A},q={[D]:"Задачи с не определенной датой и временем выполнения",[$]:"Удаленные задачи",[P]:"Задачи, у которых срок исполнения просрочен",[X]:"Задачи, которые успешно завершены"},U={[D]:l.X["inbox.png"],[P]:l.X["expired.svg"],[X]:l.X["warning.png"],[$]:l.X["trash.gif"]},K="Навигационный фильтр",W={key:{validators:[[g.K,(0,f.m)(K,"title")],[(0,y.Y)(Q),(0,p.C)(K,"title")]],required:!0},type:{validators:[[g.K,(0,f.m)(K,"type")],[t=>t===L,`Поле "type: сущности ${K} не соответстует требуемому значению`]],required:!0}},M=t=>(0,k.U)(t,W,i,K);var G=r(648),H=r(4303),V=r(140);const Z="calendar",z="Навигационный фильтр",J={key:{validators:[[H.F,(0,V.a)(z,"key")]],required:!0},type:{validators:[[g.K,(0,f.m)(z,"type")],[t=>t===Z,`Поле "type: сущности ${z} не соответстует требуемому значению`]],required:!0}},Y=t=>(0,k.U)(t,J,o,z),tt="category",et="Навигационный фильтр",rt={key:{validators:[[H.F,(0,V.a)(et,"key")]],required:!0},type:{validators:[[g.K,(0,f.m)(et,"type")],[t=>t===tt,`Поле "type: сущности ${et} не соответстует требуемому значению`]],required:!0}},nt=t=>(0,k.U)(t,rt,d,et)},2356:function(t,e,r){r.d(e,{r:function(){return a}});var n=r(4001);const a=t=>(0,n.r)(t)},2868:function(t,e,r){function n(t){const e=s.C.getState();let r;switch(t.type){case"calendar":r=(0,i.tG)(t);break;case"filter":r=(0,i.LR)(t);break;case"category":r=(0,i.fg)(t);break;case"others":r=(0,i.qe)(t);break;default:return{error:{message:"Неверный тип навигационного фильтра",data:t}}}if(r.error)return r;const n=r.result;if(!1===(0,a.b)(n,e.navigationFilter)){if("category"===n.type&&!1===e.categories.ids.includes(n.key))return{error:{message:"Неверный идентификатор категории",data:n}};s.C.setState({...e,navigationFilter:n})}return{result:n}}r.d(e,{n:function(){return n}});var a=r(2677),i=r(4001),s=(r(9526),r(9714))},9714:function(t,e,r){function n(){u=(0,a.vt)()((()=>({...o.B5,tasks:{...o.B5.tasks,idsByCategoryId:{},idsByExpireDate:{},idsByFilterId:{[c.FR]:[],[c.QO]:[],[c.Qy]:[],[c.Tl]:[]}},navigationFilter:(0,d.r)(new Date((0,s.g)(new Date)))}))),(0,o.Uz)(u,i.v.child({layer:"[ DOMAIN ]"}))}r.d(e,{p:function(){return n},C:function(){return u}});var a=r(1621),i=r(9526),s=r(648),o=r(6169),c=r(4001),d=r(2356);let u},9526:function(t,e,r){function n(t){i=t.child({layer:a.er})}r.d(e,{c:function(){return n},v:function(){return i}});var a=r(5587);let i=(0,r(8327).b)("storeLogger")},5659:function(t,e,r){function n(t){return new Promise((e=>{setTimeout(e,t)}))}function a(t){const e=document.getElementById(t);e&&e.remove()}function i(t,e){const r=document.getElementById(t);r&&r.classList.remove(e)}function s(t){void 0===t&&(t=[5]),(0,st.C)()&&"vibrate"in window.navigator&&window.navigator.vibrate(t)}function o(t){lt=function(e){e instanceof DOMException&&"NotAllowedError"===e.name||t.error({message:gt,error:e})},yt={off:()=>{ft=!0},on:()=>{ft=!1},info:t=>ft?Promise.resolve():n(0).then((()=>new Promise((e=>{it.oR.info(t,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...ct},onOpen:()=>{s()},onClose:()=>{e()}})})))),warn:t=>ft?Promise.resolve():n(0).then((()=>new Promise((e=>{it.oR.warn(t,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...ct},onOpen:()=>{s()},onClose:()=>{e()}})})))),error:t=>ft?Promise.resolve():n(0).then((()=>new Promise((e=>{it.oR.error(t,{autoClose:!1,style:{border:"1px solid var(--error-color)",...ct},onOpen:()=>{n(250).then((()=>{ut?s():dt.play().catch(lt)}))},onClose:()=>{dt.pause(),e()}})})))),joyfullyGilling:t=>ft?Promise.resolve():n(0).then((()=>new Promise((e=>{it.oR.success(t,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...ct},onOpen:()=>{n(250).then((()=>{dt.play().catch(lt),s([100,30,100,30,100])}))},onClose:()=>{e()}})}))))}}function c(t){return"structuredClone"in globalThis?structuredClone(t):t}function d(t){const{task_id:e,title:r,priority_id:n,category_id:a,description:i,expire_date_time:s,deleted:o=!1,completed:c=!1}=t;if(s){const t=Date.parse(s),d=new Date(t);d.setHours(0,0,0,0);return{task_id:e,title:r,priority_id:n,category_id:a,description:i,deleted:o,completed:c,expire_date_time:s,expire_date_ts:d.getTime(),expire_date_time_ts:t}}return{task_id:e,title:r,priority_id:n,category_id:a,description:i,deleted:o,completed:c,expire_date_time:void 0,expire_date_ts:void 0,expire_date_time_ts:void 0}}function u(t,e){const{tasks:r}=t;return!1===r.idsByFilterId[Bt.Tl].includes(e.task_id)?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Bt.Tl]:[...r.idsByFilterId[Bt.Tl],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function l(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Bt.FR]:[...r.idsByFilterId[Bt.FR],e.task_id]}}}}function g(t){return void 0!==t.expire_date_time_ts&&t.expire_date_time_ts<Date.now()}function f(t,e){const{tasks:r}=t,{idsByExpireDate:n}=r;return e.expire_date_ts?{...t,tasks:{...r,idsByExpireDate:{...n,[e.expire_date_ts]:[...n[e.expire_date_ts]||[],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function y(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Bt.QO]:[...r.idsByFilterId[Bt.QO],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}}function p(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Bt.Qy]:[...r.idsByFilterId[Bt.Qy],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}}function k(t,e){const{tasks:r}=t;return e.category_id?{...t,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[e.category_id]:[...r.idsByCategoryId[e.category_id]||[],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function m(t,e){let r=t;return e.deleted?u(r,e):(e.category_id&&(r=k(r,e)),e.expire_date_time?(r=f(r,e),g(e)&&(r=y(r,e))):r=l(r,e),!0===e.completed&&(r=p(r,e)),r)}function v(t,e){const{tasks:r}=t;return r.idsByFilterId[Bt.FR].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Bt.FR]:r.idsByFilterId[Bt.FR].filter((t=>t!==e.task_id))}}}:t}function h(t,e){const{tasks:r}=t;return r.idsByFilterId[Bt.QO].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Bt.QO]:r.idsByFilterId[Bt.QO].filter((t=>t!==e.task_id))}}}:t}function b(t,e){const{tasks:r}=t;return r.idsByFilterId[Bt.Qy].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Bt.Qy]:r.idsByFilterId[Bt.Qy].filter((t=>t!==e.task_id))}}}:t}function _(t,e){const{tasks:r}=t;if(void 0!==e.expire_date_time&&void 0!==r.idsByExpireDate[e.expire_date_ts]){const n={...t,tasks:{...r,idsByExpireDate:{...r.idsByExpireDate,[e.expire_date_ts]:r.idsByExpireDate[e.expire_date_ts].filter((t=>t!==e.task_id))}}};if(0===n.tasks.idsByExpireDate[e.expire_date_ts].length){const{[e.expire_date_ts]:t,...r}=n.tasks.idsByExpireDate;n.tasks.idsByExpireDate=r}return n}return t}function C(t,e){const{tasks:r}=t,n=void 0!==e.category_id&&r.idsByCategoryId[e.category_id].includes(e.task_id);return e.category_id&&n?{...t,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[e.category_id]:r.idsByCategoryId[e.category_id].filter((t=>t!==e.task_id))}}}:t}function I(t,e,r){const n=function(t,e){const{tasks:r}=t;return r.idsByFilterId[Bt.Tl].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Bt.Tl]:r.idsByFilterId[Bt.Tl].filter((t=>t!==e.task_id))}}}:t}(t,e.byId[r.task_id]);return m(n,r)}function w(t){return`${t.toLocaleDateString("ru-RU",Qt)}`}function T(t){return t.toLocaleDateString("ru-RU",{weekday:"short"})}function B(t,e,r){const n=t===r.navigationFilter.key;switch(e){case Bt.p5:{const a=t,i=r.tasks.idsByFilterId[a]||Xt;return{key:t,type:e,title:Bt.UB[a],altTitle:Bt.hZ[a],icon_url:Bt.je[a],selected:n,tasksCount:i.length}}case Bt.vf:{const a=t,i=r.categories.byId[a],s=r.icons.byId[i.icon_id],o=r.tasks.idsByCategoryId[a]||Xt;return{key:t,type:e,title:i.category_name,altTitle:`Категория задач "${i.category_name}"`,icon_url:At.X[s.file_name],selected:n,tasksCount:o.length}}case Bt.CD:{const r=t;return{key:t,type:e,title:Bt.jG[r],altTitle:Bt.o4[r],icon_url:Bt.pd[r],selected:n,tasksCount:0}}case Bt.L0:{const a=new Date(t),i=r.tasks.idsByExpireDate[t]||Xt;return{key:t,type:e,title:`${(0,jt.Z)(T(a))}, ${w(a)}`,altTitle:"",icon_url:At.X["note5.png"],selected:n,tasksCount:i.length}}default:return{key:t,type:"",title:"",altTitle:"",icon_url:"",selected:!1,tasksCount:0}}}function x(t,e,r,n){Gt=t,Ht=e.child({layer:Z.kA}),Zt=r,zt=n,Vt=window}function F(t,e){if(t.error){const{error:{message:r}}=t;Zt.error(e||r),Ht.error(r,t.error.data)}return t}function S(){const t=document.querySelector(":root");if(t){const e=document.querySelector('meta[name="theme-color"]'),r=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim();e&&r&&e.getAttribute("content")!==r&&e.setAttribute("content",r)}}function E(){Re=tt.child({layer:Z.uq}),Re.info("🚀 Старт инициализации приложения"),Re.debug("инициализация провайдеров"),function(t,e){at=nt(t,e)}((0,V.WL)("/api"),tt.child({layer:Z.nC})),o(tt.child({layer:Z.Wo}));const t=new H.V(tt.child({layer:Z.Wd})),e=new G.E(Z.Aq,tt.child({layer:Z.$N})),r=new Pe(e,tt.child({layer:Z.Eo}),(()=>document.documentElement));(0,ht.c)(tt),x(at,tt,yt,t),(0,Ne.$v)(tt.child({layer:Z.UI}),yt,M,t,r)}function L(){!function(t,e){const r=document.getElementById(t);r&&r.classList.add(e)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(a)}),1e3)}async function D(){globalThis.utilTimers.forEach(clearTimeout),await async function(){const t=Xe-(performance.now()-globalThis.htmlInitTime);t>0&&await n(t)}(),a("loading-text"),i("root","Root_hidden"),L()}async function O(){Re.debug("настройка приложения"),globalThis.beforeInstallPromptEvent&&Re.info("Приложение требует установки"),window.addEventListener("securitypolicyviolation",(t=>{Re.error("CSP Violation Detected:",{"Blocked URI":t.blockedURI,"Violated Directive":t.violatedDirective,"Original Policy":t.originalPolicy})})),window.addEventListener("appinstalled",(t=>{Re.info("Приложение было установлено",t)})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(t=>{let e="browser";t.matches&&(e="standalone"),Re.debug("display-mode изменился:",e)})),window.addEventListener("unhandledrejection",(t=>{t.preventDefault(),Re.error("Unhandled promise rejection",t.reason)}))}function $(){return"serviceWorker"in navigator}function N(t){let{title:e,message:r,buttonText:n}=t;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const a=document.createElement("h3");if(a.textContent=e,document.body.appendChild(a),r){const t=document.createElement("p");t.textContent=r,document.body.appendChild(t)}if(n){const t=document.createElement("button");t.textContent=n,t.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(t)}}function P(){window.location.reload()}function R(){return document.querySelector("#root")||function(){const t=document.createElement("div");return t.id="root",document.body.appendChild(t),t}()}async function X(){Re.debug("🦚 Старт рендера приложения");const t=R();!async function(t){if(!t.result)return void Re.error("Failed to create app store",t.error);const{icons:e,categories:r,priorities:n,tasks:a}=t.result;(0,bt.p)(),je.B.setEnabled(!1);try{qe(e,Mt.addIcon),qe(r,Mt.addCategory),qe(n,Mt.addPriority),qe(a,Mt.addTask)}catch(t){Re.error("Initialization error",t)}je.B.setEnabled(!0)}(await async function(){return Re.debug("предзагрузка данных для хранилища приложения"),at.getTasks()}()),(0,Qe.H)(t).render((0,Ue.jsx)(He,{}))}async function A(t,e,r){return new Promise(((n,a)=>{t.state===e?n():t.onstatechange=async()=>{Re.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),t.state===e?n():"redundant"===t.state&&(Re.debug("сервис-воркер стал не нужным."),a())}}))}function Q(){!function(t,e){const r=document.getElementById(t);r&&(r.textContent=e)}(Ze,"Загрузка обновлений ..."),i(Ze,"loading-text_hidden")}async function j(t,e){return!(!t.waiting||"installed"!==t.waiting.state)&&(await async function(t){const e=performance.now();!t&&e<Ve&&(Re.debug(`загрузка ассетов заняла меньше ${Ve} мс - отображаем индикатор загрузки`),await n(Ve-e))}(e),Re.debug(`отправляем сервис-воркеру сообщение: ${Z.cM}`),t.waiting.postMessage({type:Z.cM}),await A(t.waiting,"activated",t),!0)}async function q(t){if(!t||!navigator.onLine)return!1;await t.update().then((async()=>{await n(0)})),navigator.serviceWorker.addEventListener("message",ze);let e=await async function(t){return!!t.installing&&(Q(),Re.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await A(t.installing,"installed",t),!0)}(t);return e=await j(t,e),await async function(t){t.active&&(Re.debug("сервис-воркер активируется"),await A(t.active,"activated",t))}(t),!1===e&&navigator.serviceWorker.removeEventListener("message",ze),e}function U(){globalThis.swRegistration=void 0}async function K(){if(globalThis.swRegistration){const t=await globalThis.swRegistration;if(t instanceof Error)throw U(),t;const e=await q(t);return e||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const t=await navigator.storage.persist(),e=t?"⭐️ ":"",r=t?"дал обещание":"отверг предложение";Re.debug(`${e}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",Je)),U(),e}return!1}function W(t){if(!t.message.includes(`${window.location.origin}/sw.js`)){if(!function(t){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&t instanceof TypeError&&t.message.startsWith("Failed to update a ServiceWorker for scope")}(t))throw t;Re.error("Не удалось обновить сервис-воркер")}}var M={};r.r(M),r.d(M,{addCategory:function(){return ee},addIcon:function(){return Jt},addPriority:function(){return te},addTask:function(){return ce},clearTasks:function(){return be},clearTrash:function(){return ue},createCategory:function(){return ne},createTask:function(){return ge},deleteCategory:function(){return ie},deleteTask:function(){return ye},exportTasks:function(){return he},importTasks:function(){return Ie},setNavigationFilterByCategoryId:function(){return xe},setNavigationFilterByDate:function(){return we},setNavigationFilterByFilterId:function(){return Te},setNavigationFilterByOthersId:function(){return Be},undeleteTask:function(){return ve},updateCategory:function(){return oe},updateTask:function(){return ke},useAppStateJsonString:function(){return Ee},useCalendarDate:function(){return De},useCategoryList:function(){return Se},useIconList:function(){return Yt},useNavItem:function(){return Fe},useNavigationFilter:function(){return Le},useTaskItem:function(){return $e},useTaskList:function(){return Oe}});var G=r(9324),H=r(9755),V=r(1232),Z=r(5587),z=(r(3788),r(2768)),J=r(7270);const Y=t=>(0,J.o)(`Попытка обратиться к неинициализированному сервису ${t}`);let tt=Y("logger");tt=new z.X("/log");var et=r(2292),rt=r(8327);const nt=(t,e)=>new Proxy({},{get(e,r){return async e=>{const n=(0,et.Z)(),a=r.replace(/([A-Z])/g,(t=>`_${t.toLowerCase()}`));const i=await t({headers:{...Z.yL},body:{id:n,method:a,params:e}});return i.error&&405===i.error.code?t({headers:{...Z.yL},body:{id:n,method:a,params:e}}):i}}});let at=(0,rt.b)("api");var it=r(2845),st=r(5789),ot=r.p+"error.8ad17092b67f41ed6f08.mp3";const ct={lineHeight:1.45,color:"var(--text-color)",fontFamily:"inherit",backgroundColor:"var(--notify-surface-color)"},dt=new Audio(ot);dt.preload="auto",dt.volume=.25;const ut=(0,st.C)()&&"vibrate"in navigator;let lt;const gt="Ошибка воспроизведения звука";let ft=!1,yt=(0,rt.b)("notify");var pt=r(6539),kt=r(2069),mt=r(4248),vt=r(9914),ht=r(9526),bt=r(9714);const _t=t=>Object.values(t.icons.byId);var Ct=r(3702);const It=t=>{const e=(0,Ct.A)(t);if(e.error){const{message:t,data:r}=e.error;return ht.v.error(t,r),e}const r=e.result,n=bt.C.getState(),a=function(t,e){const{category_id:r}=e;return{...t,tasks:{...t.tasks,idsByCategoryId:{...t.tasks.idsByCategoryId,[r]:[]}}}}(n,r);return a!==n&&bt.C.setState(a),{result:r}};var wt=r(4230);var Tt=r(8787),Bt=r(4001);const xt=t=>{const e=(0,Tt.X)(t);if(e.error)return e;const r=e.result,n=bt.C.getState(),a=m(n,d(r));return n!==a&&bt.C.setState(a),{result:r}};var Ft=r(2677),St=r(7730),Et=r(9046);const Lt=t=>{const e=bt.C.getState().tasks;if(!1===function(t,e){const r=(0,Ft.b)((0,Bt.gg)(t),{...(0,Bt.gg)(e),deleted:!0});return void 0!==t&&void 0!==e&&!0===r&&!0===t.deleted&&!e.deleted}(t.task_id&&e.byId[Number(t.task_id)]||{},t)){const e={message:`${Lt.name}: задача не найдена`,data:t};return ht.v.error(e.message,e.data),{error:e}}const r=(0,Et.l)({...t,deleted:!1});if(r.error)return r;const n=r.result,a=bt.C.getState(),i=I(a,e,d(n));return i!==a&&bt.C.setState(i),{result:n}};var Dt=r(143);const Ot="Файл не содержит данных для импорта";var $t=r(2868);const Nt=t=>Nt(t);var Pt=r(2356);var Rt=r(6540);const Xt=[];var At=r(2298);const Qt={year:"numeric",month:"long",day:"numeric"};var jt=r(9329);const qt=t=>t.categories.ids,Ut=t=>{const{key:e,type:r}=t.navigationFilter;return B(e,r,t)};var Kt=r(648);const Wt=t=>{const{key:e,type:r}=t.navigationFilter;switch(r){case Bt.L0:return t.tasks.idsByExpireDate[e]||Xt;case Bt.p5:return t.tasks.idsByFilterId[e]||Xt;case Bt.vf:return t.tasks.idsByCategoryId[e]||Xt;default:return Xt}},Mt={addIcon:pt.X,useIconList:()=>c((0,bt.C)((0,vt.k)(_t))),addCategory:It,deleteCategory:t=>{const e=(0,wt.K)(t);if(e.error){const{message:t,data:r}=e.error;return ht.v.error(t,r),e}const r=e.result,n=bt.C.getState(),a=function(t,e){const{category_id:r}=e,{[r]:n,...a}=t.tasks.idsByCategoryId;return{...t,tasks:{...t.tasks,idsByCategoryId:a}}}(n,r);return a!==n&&bt.C.setState(a),{result:r}},updateCategory:kt.s,getCategoryById:function(t){return bt.C.getState().categories.byId[t]},addPriority:mt.m,createCalendarNavigationFilter:Pt.r,createCategoryNavigationFilter:t=>(0,Bt.Tz)(t),createFilterNavigationFilter:t=>(0,Bt.x7)(t),createOthersNavigationFilter:Nt,setNavigationFilter:$t.n,addTask:xt,trashTask:function(t){const e=bt.C.getState(),{[Number(t.task_id)]:r,...n}=e.tasks.byId,a={...e,tasks:{...e.tasks,byId:n,ids:e.tasks.ids.filter((e=>e!==t.task_id)),idsByFilterId:{...e.tasks.idsByFilterId,[Bt.Tl]:e.tasks.idsByFilterId[Bt.Tl].filter((e=>e!==t.task_id))}}};return e!==a&&bt.C.setState(a),{result:t}},deleteTask:t=>{const e=bt.C.getState().tasks,r=t.task_id&&(0,St.gg)(e.byId[t.task_id]);if(!(0,Ft.b)((0,St.gg)(t),r)){const e={message:"Задача не найдена",data:t};return ht.v.error(e.message,e.data),{error:e}}const n=(0,Et.l)({...t,deleted:!0});if(n.error){const{message:t,data:e}=n.error;return ht.v.error(t,e),n}const a=n.result,i=bt.C.getState(),s=function(t,e,r){let n=t;return function(t,e){return t&&!t.deleted&&!0===e.deleted}(e.byId[r.task_id],r)&&(n=C(n,r),n=_(n,r),n=v(n,r),n=h(n,r),n=b(n,r),n=u(n,r)),n}(i,e,d(a));return s!==i&&bt.C.setState(s),{result:a}},undeleteTask:Lt,updateTask:t=>{const{task_id:e}=t;let r=bt.C.getState();const n=r.tasks;if(e&&!0===n.byId[e].deleted){const e={message:"Нельзя обновить удаленную задачу",data:t};return ht.v.error(e.message,e.data),{error:e}}const a=(0,Et.l)(t);if(a.error){const{message:t,data:e}=a.error;return ht.v.error(t,e),a}const i=a.result;r=bt.C.getState();const s=function(t,e,r){const n=e.byId[r.task_id];let a=t;return function(t,e){return void 0===t.category_id&&void 0!==e.category_id}(n,r)&&(a=k(a,r)),function(t,e){return void 0!==t.category_id&&void 0===e.category_id}(n,r)&&(a=C(a,n)),function(t,e){return t.category_id!==e.category_id}(n,r)&&(a=C(a,n),a=k(a,r)),function(t,e){return void 0===t.expire_date_time&&void 0!==e.expire_date_time}(n,r)&&(a=v(a,n),a=f(a,r),g(r)&&(a=y(a,r))),function(t,e){return void 0!==t.expire_date_time&&void 0===e.expire_date_time}(n,r)&&(a=_(a,n),a=h(a,r),a=l(a,r)),function(t,e){return void 0!==t.expire_date_time&&void 0!==e.expire_date_time&&t.expire_date_time!==e.expire_date_time}(n,r)&&(a=_(a,n),a=h(a,r),a=f(a,r),g(r)&&(a=y(a,r))),a=function(t,e){return!0===e.completed&&t.completed!==e.completed}(n,r)?p(a,r):b(a,r),a}(r,n,d(i));return s!==r&&bt.C.setState(s),{result:i}},exportTasks:()=>{const t=bt.C.getState();return{tasks:Object.values(t.tasks.byId).map((t=>(0,St.gg)(t))),categories:Object.values(t.categories.byId)}},clearTasks:()=>{const t=bt.C.getState().tasks.byId,e=c(Object.values(t));for(const[e,r]of Object.entries(t)){const t=(0,Dt.v)(r);if(t.error)return{error:t.error}}const r=bt.C.getState(),n=r.categories.ids.reduce(((t,e)=>({...t,[e]:[]})),{}),a={...r,tasks:{...r.tasks,idsByExpireDate:[],idsByCategoryId:n,idsByFilterId:{[Bt.FR]:[],[Bt.Tl]:[],[Bt.QO]:[],[Bt.Qy]:[]}}};return bt.C.setState(a),{result:e}},importTasks:t=>{if(!("categories"in t)||!("tasks"in t))return ht.v.error(Ot,t),{error:{message:Ot,data:t}};const{categories:e,tasks:r}=t;return e.forEach((t=>{It(t)})),r.forEach((t=>{xt(t)})),{result:t}},getTasksInTrash:function(){const t=bt.C.getState();return t.tasks.idsByFilterId[Bt.Tl].map((e=>t.tasks.byId[e]))},useAppStateJsonString:t=>{const e=(0,Rt.useCallback)((e=>JSON.stringify(e,null,t)),[t]);return(0,bt.C)(e)},useNavItem:(t,e)=>{const r=(0,Rt.useCallback)((r=>B(t,e,r)),[t,e]);return c((0,bt.C)((0,vt.k)(r)))},useCategoryList:()=>c((0,bt.C)(qt)),useNavigationFilter:()=>c((0,bt.C)((0,vt.k)(Ut))),useCalendarDate:t=>{const e=(0,Kt.g)(t),r=Rt.useCallback((t=>({selected:t.navigationFilter.type===Bt.L0&&t.navigationFilter.key===e,tasks:t.tasks.idsByExpireDate[e]?.length||0})),[e]);return(0,bt.C)((0,vt.k)(r))},useTaskList:()=>c((0,bt.C)(Wt)),useTaskItem:t=>{const e=(0,Rt.useCallback)((e=>e.tasks.byId[t]),[t]);return c((0,bt.C)(e))}};let Gt=(0,rt.b)("api"),Ht=(0,rt.b)("logger"),Vt=(0,rt.b)("browser"),Zt=(0,rt.b)("notify"),zt=(0,rt.b)("storage");const Jt=t=>F(Mt.addIcon(t),"Ошибка добавления иконки"),Yt=()=>Mt.useIconList(),te=t=>F(Mt.addPriority(t),"Ошибка добавления приоритета"),ee=t=>F(Mt.addCategory(t),"Ошибка при добавлении категории"),re="Ошибка создания новой категории",ne=async t=>{const e=await Gt.createCategory(t);if(e.error)return F(e,`${re} на сервере`);const r=Mt.addCategory(e.result);return r.error?F(e,re):r},ae="Ошибка удаления категории",ie=async t=>{const e=await Gt.deleteCategory(t);if(e.error)return F(e,`${ae} на сервере`);const r=Mt.deleteCategory(e.result);return r.error?F(e,ae):r},se="Ошибка обновления категории",oe=async t=>{const e=await Gt.updateCategory(t);if(e.error)return F(e,`${se} на сервере`);const r=Mt.updateCategory(e.result);return r.error?F(e,se):r},ce=t=>F(Mt.addTask(t),"Ошибка добавления задачи"),de="Ошибка очистки корзины",ue=async()=>{const t=await Promise.all(Mt.getTasksInTrash().map((async t=>{const e=await Gt.deleteTask(t);e.error&&Ht.error(`${de} на сервере`,e.error.data);const r=Mt.trashTask(t);return r.error&&Ht.error(de,r.error.data),r})));return t.find((t=>t.error))&&Zt.error(de),t},le="Ошибка создания задачи",ge=async t=>{const e=await Gt.createTask(t);if(e.error)return F(e,`${le} на сервере`);const r=Mt.addTask(e.result);return r.error?F(e,le):r},fe="Ошибка удаления задачи",ye=async t=>{const e=await Gt.deleteTask(t);if(e.error)return F(e,`${fe} на сервере`);const r=Mt.deleteTask(e.result);return r.error?F(e,fe):r},pe="Ошибка обновления задачи",ke=async t=>{const e=await Gt.updateTask(t);if(e.error)return F(e,`${pe} на сервере`);const r=Mt.updateTask(e.result);return r.error?F(e,pe):r},me="Ошибка восстановления задачи из корзины",ve=async t=>{const e=await Gt.updateTask({...t,deleted:!1});if(e.error)return F(e,`${me} на сервере`);const r=Mt.updateTask(e.result);return r.error?F(e,me):r},he=()=>c(Mt.exportTasks()),be=async()=>{const t=await Gt.clearTasks();return t.error?F(t,"Ошибка удаления всех задач на сервере"):(Mt.clearTasks(),Zt.info("Все задачи удалены"),{result:Z.Ok})},_e="Файл не содержит данных для импорта",Ce="Не удалось очистить задачи: ",Ie=async function(t,e){if(void 0===e&&(e=!1),!("categories"in t)||!("tasks"in t))return Zt.error(_e),Ht.error(_e,t),{error:{message:_e,data:t}};if(e){const t=await Gt.clearTasks();if(t.error)return Zt.error(`${Ce}${t.error.message}`),t}const{categories:r,tasks:n}=t,a=await Gt.importTasks({categories:r,tasks:n});if(a.error)return Zt.error(`${Ce}${a.error.message}`),a;const i=a.result.imported;if(i.categories.length>0||i.tasks.length>0){const t=Mt.importTasks(a.result.imported);if(t.error)return Zt.error(`${Ce}${t.error.message}`),t}return Zt.info(`${a.result.imported.tasks.length} задач(и) импортировано`),a},we=t=>{const e=Mt.createCalendarNavigationFilter(t);Mt.setNavigationFilter(e)},Te=t=>{const e=Mt.createFilterNavigationFilter(t);Mt.setNavigationFilter(e)},Be=t=>{const e=Mt.createOthersNavigationFilter(t);Mt.setNavigationFilter(e)},xe=t=>{const e=Mt.createCategoryNavigationFilter(t);Mt.setNavigationFilter(e)},Fe=(t,e)=>Mt.useNavItem(t,e),Se=()=>Mt.useCategoryList(),Ee=t=>Mt.useAppStateJsonString(t),Le=()=>Mt.useNavigationFilter(),De=t=>Mt.useCalendarDate(t),Oe=()=>Mt.useTaskList(),$e=t=>Mt.useTaskItem(t);var Ne=r(3341);class Pe{intervalId=null;constructor(t,e,r){this.kvStore=t,this.logger=e,this.elementSelector=r,this.mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this.mediaQueryList.addEventListener("change",this.handleColorSchemeChange),this.handleColorSchemeChange({matches:this.mediaQueryList.matches})}async setColorScheme(t){await this.kvStore.setItem(Z.ux,t),this.handleColorSchemeChange({matches:this.mediaQueryList.matches}),s()}async getColorScheme(){return this.kvStore.getItem(Z.ux)}startProcess=()=>{null===this.intervalId&&(this.intervalId=setInterval((()=>{this.handleIntervalChecks()}),Z.CK))};stopProcess=()=>{null!==this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)};handleIntervalChecks=async()=>{const t=this.elementSelector();if(!t)return;const{classList:e}=t,r=await this.kvStore.getItem(Z.ux),{themeByTime:n=Z.XT,since:a=Z.AH,to:i=Z.$v}=r;if(r.theme===Z.XL){const t=function(t,e){const r=new Date;let n=new Date,a=new Date;if(n.setHours(parseInt(t.split(":")[0],10),parseInt(t.split(":")[1],10),0,0),a.setHours(parseInt(e.split(":")[0],10),parseInt(e.split(":")[1],10),0,0),e<t){const t=new Date(r);t.setDate(t.getDate()+1),a.setDate(a.getDate()+1),r<n?(n.setDate(n.getDate()-1),a.setDate(a.getDate()-1)):r>=t&&(n.setDate(n.getDate()+1),a.setDate(a.getDate()+1))}return r>=n&&r<a}(a,i);t?(e.contains(Z.BB)&&n!==Z.BB&&e.remove(Z.BB),e.contains(Z.XT)&&n!==Z.XT&&e.remove(Z.XT),e.add(n)):this.mediaQueryList.matches?(e.add(Z.XT),e.remove(Z.BB)):(e.remove(Z.XT),e.remove(Z.BB))}else e.remove(n);S()};handleColorSchemeChange=async t=>{this.stopProcess();const e=this.elementSelector();if(!e)return;const{classList:r}=e,n=t.matches?"dark":"light",{theme:a}=await this.kvStore.getItem(Z.ux),i=[Z.XT,Z.BB,Z.XL].find((t=>t===a));i?(Z.yK.includes(i)&&(i===Z.BB?r.remove(Z.XT):r.remove(Z.BB),r.add(i)),i===Z.XL&&(await this.handleIntervalChecks(),this.startProcess())):(r.remove(Z.BB),n===Z.XT?r.add(Z.XT):r.remove(Z.XT)),S()};destroy(){this.stopProcess(),this.mediaQueryList.removeEventListener("change",this.handleColorSchemeChange)}}let Re=Y("appLogger");const Xe=1e3;class Ae extends Error{constructor(t){void 0===t&&(t="Сервис-воркер не поддерживается"),super(t),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,Ae.prototype)}}var Qe=r(5338),je=r(6552);const qe=(t,e)=>{t.forEach((t=>{const r=e(t);r.error&&Re.error(r.error.message,t)}))};var Ue=r(4848);const Ke={padding:"var(--x4)",inlineSize:"100%"};var We=function(t){let{pageReload:e}=t;return(0,Ue.jsxs)("div",{style:Ke,children:[(0,Ue.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,Ue.jsx)("button",{type:"button",onClick:e,children:"Перезагрузить страницу"})]})};const Me=Rt.memo((()=>(0,Ue.jsx)(We,{pageReload:P})));Me.displayName="FailedLoadingAppContainer";var Ge=Me;var He=(0,Rt.lazy)((()=>Promise.all([r.e(425),r.e(524)]).then(r.bind(r,2226)).catch((t=>(Re.error("Ошибка загрузки компонента App",t),{default:Ge})))));const Ve=1e3,Ze="loading-text",ze=t=>{t.data.type===Z.K$&&(Re.debug(`получили сообщение от сервис-воркера ${Z.K$} - перезагружаем страницу`),P())},Je=t=>{Re.debug("получили сообщение от сервис-воркера",t.data),je.B.apply((()=>{switch(t.data.type){case Z.oQ:Mt.addCategory(t.data.data);break;case Z.FS:Mt.updateCategory(t.data.data);break;case Z.d5:Mt.deleteCategory(t.data.data);break;case Z.v6:Mt.addTask(t.data.data);break;case Z.c1:Mt.updateTask(t.data.data);break;case Z.Cj:Mt.deleteTask(t.data.data);break;case Z.dR:Mt.clearTasks();break;case Z.tC:Mt.importTasks(t.data.data)}}))};!async function(){E();try{!await async function(){Re.debug("настройка сервис-воркера...");let t=!1;if(!$())throw Re.debug("сервис-воркер не поддерживается"),new Ae;Re.debug("сервис-воркер поддерживается");try{t=await K()}catch(t){W(t)}return t}()&&(await O(),await X(),await D())}catch(t){!function(t){if(Re.error("ошибка при инициализации приложения",t),t instanceof Ae)$()?N({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):N({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(t instanceof Error&&"Error"===t.name)return;N({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(t)}}()},5789:function(t,e,r){function n(){return window.matchMedia("(hover: none) and (pointer: coarse)").matches}r.d(e,{C:function(){return n}})},5587:function(t,e,r){r.d(e,{$N:function(){return d},$v:function(){return $},AH:function(){return O},Aq:function(){return S},BB:function(){return T},CK:function(){return L},CZ:function(){return D},Cj:function(){return _},Eo:function(){return u},FS:function(){return m},K$:function(){return y},Ok:function(){return n},UI:function(){return a},Wd:function(){return l},Wo:function(){return c},XL:function(){return x},XT:function(){return w},c1:function(){return b},cM:function(){return p},d5:function(){return v},dR:function(){return C},er:function(){return o},kA:function(){return g},nC:function(){return s},oQ:function(){return k},qU:function(){return B},tC:function(){return I},uq:function(){return i},ux:function(){return E},v6:function(){return h},yK:function(){return F},yL:function(){return f}});const n="Ok",a="[ UI ]",i="[ APP ]",s="[ API ]",o="[ STORE ]",c="[ NOTIFY ]",d="[ KV-STORE ]",u="[ THEME ]",l="[ LOCAL-STORAGE ]",g="[ USE-CASES ]",f={"Content-Type":"application/json; charset=utf-8"},y="RELOAD_PAGE",p="SKIP_WAITING",k="create_category",m="update_category",v="delete_category",h="create_task",b="update_task",_="delete_task",C="clear_tasks",I="import_tasks",w="dark",T="light",B="system",x="byTime",F=["dark","light"],S="kv-storage",E="colorSchema",L=3e4,D=864e5,O="20:00",$="07:00"},648:function(t,e,r){function n(t){return t.setHours(0,0,0,0),t.getTime()}r.d(e,{g:function(){return n}})},2298:function(t,e,r){r.d(e,{X:function(){return _}});var n=r.p+"alert.476b00abda902b398be7.png",a=r.p+"ball.3d996bafa729a1d3f580.png",i=r.p+"bug.83b52ad3ded9ef1fbd18.png",s=r.p+"cart.2d640112b4b86b627ff7.png",o=r.p+"favorite.7f0174c25660ef72df60.png",c=r.p+"home.3e40fe2b97b19c75dfaf.png",d=r.p+"inbox.58a834f614e341f9c578.png",u=r.p+"life.5896aaa56394aa0273b3.png",l=r.p+"mail.4a4239588f1b0d37bcfc.png",g=r.p+"other.66c872e04e2846cafa68.png",f=r.p+"page.9d1fc4484b1e5929b7ee.png",y=r.p+"today.141e3d87afbd71da541c.png",p=r.p+"twitter.5556cda0273e796d6a65.png",k=r.p+"warning.4f48c087dcbbdb3bd268.png",m=r.p+"folder_red.66f2d7c840bd3b9aed95.png",v=r.p+"next.4b695e6dc3fabdcc84b4.png",h=r.p+"note.8e112a51a84fa9c09b11.png",b=r.p+"note5.abc5ade9f6cd6928e96d.png";const _={"alert.png":n,"ball.png":a,"bug.png":i,"cart.png":s,"favorite.png":o,"home.png":c,"inbox.png":d,"life.png":u,"mail.png":l,"other.png":g,"page.png":f,"today.png":y,"twitter.png":p,"warning.png":k,"folder_red.png":m,"next.png":v,"note.png":h,"refresh.png":r.p+"refresh.7c9f0768269a6bbec081.png","trash.gif":r.p+"trash.3e03c195726c2cccdc94.gif","expired.svg":r.p+"expired.45d759abb485d88b78aa.svg","settings.svg":r.p+"settings.231ef2d68a51da6cad41.svg","state.svg":r.p+"state.c56984d48249544ade49.svg","help.svg":r.p+"help.83136d93df7a9872ae11.svg","share.svg":r.p+"share.ffc5f2b689d17d39785e.svg","note5.png":b}},9329:function(t,e,r){function n(t){return t[0].toUpperCase()+t.slice(1)}r.d(e,{Z:function(){return n}})},8327:function(t,e,r){r.d(e,{b:function(){return a}});var n=r(7270);const a=t=>(0,n.o)(`Попытка обратиться к неинициализированному DI сервиса ${t}`)}},function(t){t.O(0,[425,12,644],(function(){return e=5659,t(t.s=e);var e}));t.O()}]);