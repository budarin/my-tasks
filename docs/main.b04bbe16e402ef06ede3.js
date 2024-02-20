(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[792],{6552:function(t,e,r){function n(){return Boolean(document.startViewTransition)?t=>document.startViewTransition?.(t):a}r.d(e,{B:function(){return i}});const a=t=>t(),i={isSupported:Boolean(document.startViewTransition),apply:a,setEnabled:t=>{i.apply=t?n():a}};!function(){if("undefined"==typeof document)throw new Error("document is undefined");i.apply=n()}()},3341:function(t,e,r){function n(t,e,r,n,a){i=t,o=e,s=r,d=n,c=a}r.d(e,{$v:function(){return n},LD:function(){return s},me:function(){return o},nY:function(){return c},vF:function(){return i}});var a=r(4320);let i=(0,a.S)("logger"),s=(0,a.S)("useCases"),o=(0,a.S)("notify"),c=(0,a.S)("colorSchema"),d=(0,a.S)("storage")},4001:function(t,e,r){function n(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function a(t){return{type:D,key:t}}function i(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function s(t){return{type:V,key:(0,G.g)(t)}}function o(t){const{type:e,key:r}=t||{};return{type:e,key:r}}function c(t){return{type:tt,key:t}}function d(t){const{type:e,title:r,key:n}=t||{};return{type:e,key:n}}r.d(e,{_h:function(){return _},L0:function(){return V},vf:function(){return tt},Qy:function(){return X},QO:function(){return P},p5:function(){return D},FR:function(){return L},CD:function(){return m},cJ:function(){return v},GK:function(){return C},Tl:function(){return $},r:function(){return s},Tz:function(){return c},x7:function(){return a},je:function(){return U},gg:function(){return u.gg},hZ:function(){return q},Ro:function(){return Q},UB:function(){return j},o4:function(){return x},Yv:function(){return w},jG:function(){return B},pd:function(){return T},tG:function(){return Y},fg:function(){return nt},LR:function(){return M},qe:function(){return E}});var u=r(1727),l=r(2298),g=r(3756),f=r(9068),y=r(7128),p=r(3640),k=r(8708);const m="others",v="settings",h="Настройки",_="about",b="О приложении",C="store_state",I="Для разработчиков",w=[v,_,C],T={[v]:l.X["settings.svg"],[_]:l.X["help.svg"],[C]:l.X["state.svg"]},B={[v]:h,[_]:b,[C]:I},x={[v]:"Настройки приложения",[_]:"Описание всех плюшек приложения! 😊",[C]:"Актуальное состояние хранилища приложения"},S="Навигационный фильтр",F={key:{validators:[[g.K,(0,f.m)(S,"title")],[(0,y.Y)(w),(0,p.C)(S,"title")]],required:!0},type:{validators:[[g.K,(0,f.m)(S,"type")],[t=>t===m,`Поле "type: сущности ${S} не соответстует требуемому значению`]],required:!0}},E=t=>(0,k.U)(t,F,n,S),D="filter",L="inbox",O="Черновики",$="trash",N="Корзина",P="expired",R="Просроченные",X="completed",A="Завершённые",Q=[L,P,X,$],j={[L]:O,[$]:N,[P]:R,[X]:A},q={[L]:"Задачи с не определенной датой и временем выполнения",[$]:"Удаленные задачи",[P]:"Задачи, у которых срок исполнения просрочен",[X]:"Задачи, которые успешно завершены"},U={[L]:l.X["inbox.png"],[P]:l.X["expired.svg"],[X]:l.X["warning.png"],[$]:l.X["trash.gif"]},K="Навигационный фильтр",W={key:{validators:[[g.K,(0,f.m)(K,"title")],[(0,y.Y)(Q),(0,p.C)(K,"title")]],required:!0},type:{validators:[[g.K,(0,f.m)(K,"type")],[t=>t===D,`Поле "type: сущности ${K} не соответстует требуемому значению`]],required:!0}},M=t=>(0,k.U)(t,W,i,K);var G=r(648),H=r(4303),z=r(140);const V="calendar",J="Навигационный фильтр",Z={key:{validators:[[H.F,(0,z.a)(J,"key")]],required:!0},type:{validators:[[g.K,(0,f.m)(J,"type")],[t=>t===V,`Поле "type: сущности ${J} не соответстует требуемому значению`]],required:!0}},Y=t=>(0,k.U)(t,Z,o,J),tt="category",et="Навигационный фильтр",rt={key:{validators:[[H.F,(0,z.a)(et,"key")]],required:!0},type:{validators:[[g.K,(0,f.m)(et,"type")],[t=>t===tt,`Поле "type: сущности ${et} не соответстует требуемому значению`]],required:!0}},nt=t=>(0,k.U)(t,rt,d,et)},2356:function(t,e,r){r.d(e,{r:function(){return a}});var n=r(4001);const a=t=>(0,n.r)(t)},2868:function(t,e,r){function n(t){const e=s.C.getState();let r;switch(t.type){case"calendar":r=(0,i.tG)(t);break;case"filter":r=(0,i.LR)(t);break;case"category":r=(0,i.fg)(t);break;case"others":r=(0,i.qe)(t);break;default:return{error:{message:"Неверный тип навигационного фильтра",data:t}}}if(r.error)return r;const n=r.result;if(!1===(0,a.b)(n,e.navigationFilter)){if("category"===n.type&&!1===e.categories.ids.includes(n.key))return{error:{message:"Неверный идентификатор категории",data:n}};s.C.setState({...e,navigationFilter:n})}return{result:n}}r.d(e,{n:function(){return n}});var a=r(2677),i=r(4001),s=(r(9526),r(9714))},9714:function(t,e,r){function n(){u=(0,a.vt)()((()=>({...o.B5,tasks:{...o.B5.tasks,idsByCategoryId:{},idsByExpireDate:{},idsByFilterId:{[c.FR]:[],[c.QO]:[],[c.Qy]:[],[c.Tl]:[]}},navigationFilter:(0,d.r)(new Date((0,s.g)(new Date)))}))),(0,o.Uz)(u,i.v.child({layer:"[ DOMAIN ]"}))}r.d(e,{p:function(){return n},C:function(){return u}});var a=r(1621),i=r(9526),s=r(648),o=r(6169),c=r(4001),d=r(2356);let u},9526:function(t,e,r){function n(t){i=t.child({layer:a.er})}r.d(e,{c:function(){return n},v:function(){return i}});var a=r(5587);let i=(0,r(4320).S)("storeLogger")},8191:function(t,e,r){function n(t){return new Promise((e=>{setTimeout(e,t)}))}function a(t){const e=document.getElementById(t);e&&e.remove()}function i(t,e){const r=document.getElementById(t);r&&r.classList.remove(e)}function s(t,e,r){return async e=>{const n=(0,et.Z)();let a=await t({headers:{...J.yL},body:{id:n,method:r,params:e}});return a.error&&405===a.error.code?t({headers:{...J.yL},body:{id:n,method:r,params:e}}):a}}function o(t){void 0===t&&(t=[5]),(0,at.C)()&&"vibrate"in window.navigator&&window.navigator.vibrate(t)}function c(t){dt=function(e){e instanceof DOMException&&"NotAllowedError"===e.name||t.error({message:ut,error:e})},lt={off:()=>{gt=!0},on:()=>{gt=!1},info:t=>gt?Promise.resolve():n(0).then((()=>new Promise((e=>{nt.oR.info(t,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--info-color)",...st},onOpen:()=>{o()},onClose:()=>{e()}})})))),warn:t=>gt?Promise.resolve():n(0).then((()=>new Promise((e=>{nt.oR.warn(t,{autoClose:!1,style:{border:"1px solid var(--warn-color)",...st},onOpen:()=>{o()},onClose:()=>{e()}})})))),error:t=>gt?Promise.resolve():n(0).then((()=>new Promise((e=>{nt.oR.error(t,{autoClose:!1,style:{border:"1px solid var(--error-color)",...st},onOpen:()=>{n(250).then((()=>{ct?o():ot.play().catch(dt)}))},onClose:()=>{ot.pause(),e()}})})))),joyfullyGilling:t=>gt?Promise.resolve():n(0).then((()=>new Promise((e=>{nt.oR.success(t,{autoClose:5e3,hideProgressBar:!0,style:{border:"1px solid var(--success-color)",...st},onOpen:()=>{n(250).then((()=>{ot.play().catch(dt),o([100,30,100,30,100])}))},onClose:()=>{e()}})}))))}}function d(t){const{task_id:e,title:r,priority_id:n,category_id:a,description:i,expire_date_time:s,deleted:o=!1,completed:c=!1}=t;if(s){const t=Date.parse(s),d=new Date(t);d.setHours(0,0,0,0);return{task_id:e,title:r,priority_id:n,category_id:a,description:i,deleted:o,completed:c,expire_date_time:s,expire_date_ts:d.getTime(),expire_date_time_ts:t}}return{task_id:e,title:r,priority_id:n,category_id:a,description:i,deleted:o,completed:c,expire_date_time:void 0,expire_date_ts:void 0,expire_date_time_ts:void 0}}function u(t,e){const{tasks:r}=t;return!1===r.idsByFilterId[Ct.Tl].includes(e.task_id)?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ct.Tl]:[...r.idsByFilterId[Ct.Tl],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function l(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Ct.FR]:[...r.idsByFilterId[Ct.FR],e.task_id]}}}}function g(t){return void 0!==t.expire_date_time_ts&&t.expire_date_time_ts<Date.now()}function f(t,e){const{tasks:r}=t,{idsByExpireDate:n}=r;return e.expire_date_ts?{...t,tasks:{...r,idsByExpireDate:{...n,[e.expire_date_ts]:[...n[e.expire_date_ts]||[],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function y(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Ct.QO]:[...r.idsByFilterId[Ct.QO],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}}function p(t,e){const{tasks:r}=t;return{...t,tasks:{...t.tasks,idsByFilterId:{...r.idsByFilterId,[Ct.Qy]:[...r.idsByFilterId[Ct.Qy],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}}function k(t,e){const{tasks:r}=t;return e.category_id?{...t,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[e.category_id]:[...r.idsByCategoryId[e.category_id]||[],e.task_id].sort(((t,e)=>(r.byId[t].expire_date_time_ts||0)-(r.byId[e].expire_date_time_ts||0)))}}}:t}function m(t,e){let r=t;return e.deleted?u(r,e):(e.category_id&&(r=k(r,e)),e.expire_date_time?(r=f(r,e),g(e)&&(r=y(r,e))):r=l(r,e),!0===e.completed&&(r=p(r,e)),r)}function v(t,e){const{tasks:r}=t;return r.idsByFilterId[Ct.FR].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ct.FR]:r.idsByFilterId[Ct.FR].filter((t=>t!==e.task_id))}}}:t}function h(t,e){const{tasks:r}=t;return r.idsByFilterId[Ct.QO].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ct.QO]:r.idsByFilterId[Ct.QO].filter((t=>t!==e.task_id))}}}:t}function _(t,e){const{tasks:r}=t;return r.idsByFilterId[Ct.Qy].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ct.Qy]:r.idsByFilterId[Ct.Qy].filter((t=>t!==e.task_id))}}}:t}function b(t,e){const{tasks:r}=t;if(void 0!==e.expire_date_time&&void 0!==r.idsByExpireDate[e.expire_date_ts]){const n={...t,tasks:{...r,idsByExpireDate:{...r.idsByExpireDate,[e.expire_date_ts]:r.idsByExpireDate[e.expire_date_ts].filter((t=>t!==e.task_id))}}};if(0===n.tasks.idsByExpireDate[e.expire_date_ts].length){const{[e.expire_date_ts]:t,...r}=n.tasks.idsByExpireDate;n.tasks.idsByExpireDate=r}return n}return t}function C(t,e){const{tasks:r}=t,n=void 0!==e.category_id&&r.idsByCategoryId[e.category_id].includes(e.task_id);return e.category_id&&n?{...t,tasks:{...r,idsByCategoryId:{...r.idsByCategoryId,[e.category_id]:r.idsByCategoryId[e.category_id].filter((t=>t!==e.task_id))}}}:t}function I(t,e,r){const n=function(t,e){const{tasks:r}=t;return r.idsByFilterId[Ct.Tl].indexOf(e.task_id)>-1?{...t,tasks:{...r,idsByFilterId:{...r.idsByFilterId,[Ct.Tl]:r.idsByFilterId[Ct.Tl].filter((t=>t!==e.task_id))}}}:t}(t,e.byId[r.task_id]);return m(n,r)}function w(t){return"structuredClone"in globalThis?structuredClone(t):t}function T(t){return`${t.toLocaleDateString("ru-RU",Rt)}`}function B(t){return t.toLocaleDateString("ru-RU",{weekday:"short"})}function x(t,e,r){const n=t===r.navigationFilter.key;switch(e){case Ct.p5:{const a=t,i=r.tasks.idsByFilterId[a]||Nt;return{key:t,type:e,title:Ct.UB[a],altTitle:Ct.hZ[a],icon_url:Ct.je[a],selected:n,tasksCount:i.length}}case Ct.vf:{const a=t,i=r.categories.byId[a],s=r.icons.byId[i.icon_id],o=r.tasks.idsByCategoryId[a]||Nt;return{key:t,type:e,title:i.category_name,altTitle:`Категория задач "${i.category_name}"`,icon_url:Pt.X[s.file_name],selected:n,tasksCount:o.length}}case Ct.CD:{const r=t;return{key:t,type:e,title:Ct.jG[r],altTitle:Ct.o4[r],icon_url:Ct.pd[r],selected:n,tasksCount:0}}case Ct.L0:{const a=new Date(t),i=r.tasks.idsByExpireDate[t]||Nt;return{key:t,type:e,title:`${(0,Xt.Z)(B(a))}, ${T(a)}`,altTitle:"",icon_url:Pt.X["note5.png"],selected:n,tasksCount:i.length}}default:return{key:t,type:"",title:"",altTitle:"",icon_url:"",selected:!1,tasksCount:0}}}function S(t,e,r,n){Wt=t,Mt=e.child({layer:J.kA}),Ht=r,zt=n,Gt=window}function F(t,e){if(t.error){const{error:{message:r}}=t;Ht.error(e||r),Mt.error(r,t.error.data)}return t}function E(){const t=document.querySelector(":root");if(t){const e=document.querySelector('meta[name="theme-color"]'),r=getComputedStyle(t).getPropertyValue("--meta-theme-color").trim();e&&r&&e.getAttribute("content")!==r&&e.setAttribute("content",r)}}function D(){var t;$e=tt.child({layer:J.uq}),$e.info("🚀 Старт инициализации приложения"),$e.debug("инициализация провайдеров"),t=(0,V.WL)("/api"),tt.child({layer:J.nC}),rt={getTasks:s(t,0,J.Oz),createCategory:s(t,0,"create_category"),updateCategory:s(t,0,J.FS),deleteCategory:s(t,0,J.d5),createTask:s(t,0,J.v6),updateTask:s(t,0,J.c1),deleteTask:s(t,0,J.Cj),clearTasks:s(t,0,J.dR),importTasks:s(t,0,J.tC)},c(tt.child({layer:J.Wo}));const e=new z.V(tt.child({layer:J.Wd})),r=new H.E(J.Aq,tt.child({layer:J.$N})),n=new Oe(r,tt.child({layer:J.Eo}),(()=>document.documentElement));(0,kt.c)(tt),S(rt,tt,lt,e),(0,Le.$v)(tt.child({layer:J.UI}),lt,G,e,n)}function L(){!function(t,e){const r=document.getElementById(t);r&&r.classList.add(e)}("splash-screen","splash-screen_hidden"),setTimeout((()=>{["initialScript","colorThemeScript","resourseOnErrorScript","splashStyles","splash-screen","splashStyles"].forEach(a)}),1e3)}async function O(){globalThis.utilTimers.forEach(clearTimeout),await async function(){const t=Ne-(performance.now()-globalThis.htmlInitTime);t>0&&await n(t)}(),a("loading-text"),i("root","Root_hidden"),L()}async function $(){$e.debug("настройка приложения"),globalThis.beforeInstallPromptEvent&&$e.info("Приложение требует установки"),window.addEventListener("securitypolicyviolation",(t=>{$e.error("CSP Violation Detected:",{"Blocked URI":t.blockedURI,"Violated Directive":t.violatedDirective,"Original Policy":t.originalPolicy})})),window.addEventListener("appinstalled",(t=>{$e.info("Приложение было установлено",t)})),window.matchMedia("(display-mode: standalone)").addEventListener("change",(t=>{let e="browser";t.matches&&(e="standalone"),$e.debug("display-mode изменился:",e)})),window.addEventListener("unhandledrejection",(t=>{t.preventDefault(),$e.error("Unhandled promise rejection",t.reason)}))}function N(){return"serviceWorker"in navigator}function P(t){let{title:e,message:r,buttonText:n}=t;for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);const a=document.createElement("h3");if(a.textContent=e,document.body.appendChild(a),r){const t=document.createElement("p");t.textContent=r,document.body.appendChild(t)}if(n){const t=document.createElement("button");t.textContent=n,t.addEventListener("click",(()=>window.location.reload())),document.body.appendChild(t)}}function R(){window.location.reload()}function X(){return document.querySelector("#root")||function(){const t=document.createElement("div");return t.id="root",document.body.appendChild(t),t}()}async function A(){$e.debug("🦚 Старт рендера приложения");const t=X();!async function(t){if(!t.result)return void $e.error("Failed to create app store",t.error);const{icons:e,categories:r,priorities:n,tasks:a}=t.result;(0,vt.p)(),Xe.B.setEnabled(!1);try{Ae(e,Ut.addIcon),Ae(r,Ut.addCategory),Ae(n,Ut.addPriority),Ae(a,Ut.addTask)}catch(t){$e.error("Initialization error",t)}Xe.B.setEnabled(!0)}(await async function(){return $e.debug("предзагрузка данных для хранилища приложения"),rt.getTasks()}()),(0,Re.H)(t).render((0,Qe.jsx)(We,{}))}async function Q(t,e,r){return new Promise(((n,a)=>{t.state===e?n():t.onstatechange=async()=>{$e.debug("🔥 состояние регистрции сервис-воркера",JSON.stringify({installing:r?.installing?.state,waiting:r?.waiting?.state,active:r?.active?.state},null,2)),t.state===e?n():"redundant"===t.state&&($e.debug("сервис-воркер стал не нужным."),a())}}))}function j(){!function(t,e){const r=document.getElementById(t);r&&(r.textContent=e)}(Ge,"Загрузка обновлений ..."),i(Ge,"loading-text_hidden")}async function q(t,e){return!(!t.waiting||"installed"!==t.waiting.state)&&(await async function(t){const e=performance.now();!t&&e<Me&&($e.debug(`загрузка ассетов заняла меньше ${Me} мс - отображаем индикатор загрузки`),await n(Me-e))}(e),$e.debug(`отправляем сервис-воркеру сообщение: ${J.cM}`),t.waiting.postMessage({type:J.cM}),await Q(t.waiting,"activated",t),!0)}async function U(t){if(!t||!navigator.onLine)return!1;await t.update().then((async()=>{await n(0)})),navigator.serviceWorker.addEventListener("message",He);let e=await async function(t){return!!t.installing&&(j(),$e.debug("🔥🔥🔥 обнаружена новая версия сервис-воркера"),await Q(t.installing,"installed",t),!0)}(t);return e=await q(t,e),await async function(t){t.active&&($e.debug("сервис-воркер активируется"),await Q(t.active,"activated",t))}(t),!1===e&&navigator.serviceWorker.removeEventListener("message",He),e}function K(){globalThis.swRegistration=void 0}async function W(){if(globalThis.swRegistration){const t=await globalThis.swRegistration;if(t instanceof Error)throw K(),t;const e=await U(t);return e||(await async function(){if(navigator.storage&&navigator.storage.persist&&!1===await navigator.storage.persisted()){const t=await navigator.storage.persist(),e=t?"⭐️ ":"",r=t?"дал обещание":"отверг предложение";$e.debug(`${e}браузер ${r} сервис-воркеру хранить кэш персистентно`)}}(),navigator.serviceWorker.addEventListener("message",ze)),K(),e}return!1}function M(t){if(!t.message.includes(`${window.location.origin}/sw.js`)){if(!function(t){return navigator.serviceWorker&&null!==navigator.serviceWorker.controller&&t instanceof TypeError&&t.message.startsWith("Failed to update a ServiceWorker for scope")}(t))throw t;$e.error("Не удалось обновить сервис-воркер")}}var G={};r.r(G),r.d(G,{addCategory:function(){return Zt},addIcon:function(){return Vt},addPriority:function(){return Jt},addTask:function(){return ie},clearTasks:function(){return me},clearTrash:function(){return oe},createCategory:function(){return te},createTask:function(){return de},deleteCategory:function(){return re},deleteTask:function(){return le},exportTasks:function(){return ke},importTasks:function(){return _e},setNavigationFilterByCategoryId:function(){return we},setNavigationFilterByDate:function(){return be},setNavigationFilterByFilterId:function(){return Ce},setNavigationFilterByOthersId:function(){return Ie},undeleteTask:function(){return pe},updateCategory:function(){return ae},updateTask:function(){return fe},useAppStateJsonString:function(){return xe},useCalendarDate:function(){return Fe},useCategoryList:function(){return Be},useNavItem:function(){return Te},useNavigationFilter:function(){return Se},useTaskItem:function(){return De},useTaskList:function(){return Ee}});var H=r(9324),z=r(9755),V=r(1232),J=r(5587),Z=r(3788),Y=r(2768);let tt=Z.N;tt=new Y.X("/log");var et=r(2292);let rt;var nt=r(2845),at=r(5789),it=r.p+"error.8ad17092b67f41ed6f08.mp3";const st={lineHeight:1.45,color:"var(--text-color)",fontFamily:"inherit",backgroundColor:"var(--notify-surface-color)"},ot=new Audio(it);ot.preload="auto",ot.volume=.25;const ct=(0,at.C)()&&"vibrate"in navigator;let dt;const ut="Ошибка воспроизведения звука";let lt,gt=!1;var ft=r(6539),yt=r(2069),pt=r(4248),kt=r(9526),mt=r(3702),vt=r(9714);const ht=t=>{const e=(0,mt.A)(t);if(e.error){const{message:t,data:r}=e.error;return kt.v.error(t,r),e}const r=e.result,n=vt.C.getState(),a=function(t,e){const{category_id:r}=e;return{...t,tasks:{...t.tasks,idsByCategoryId:{...t.tasks.idsByCategoryId,[r]:[]}}}}(n,r);return a!==n&&vt.C.setState(a),{result:r}};var _t=r(4230);var bt=r(8787),Ct=r(4001);const It=t=>{const e=(0,bt.X)(t);if(e.error)return e;const r=e.result,n=vt.C.getState(),a=m(n,d(r));return n!==a&&vt.C.setState(a),{result:r}};var wt=r(2677),Tt=r(7730),Bt=r(9046);const xt=t=>{const e=vt.C.getState().tasks;if(!1===function(t,e){const r=(0,wt.b)((0,Ct.gg)(t),{...(0,Ct.gg)(e),deleted:!0});return void 0!==t&&void 0!==e&&!0===r&&!0===t.deleted&&!e.deleted}(t.task_id&&e.byId[Number(t.task_id)]||{},t)){const e={message:`${xt.name}: задача не найдена`,data:t};return kt.v.error(e.message,e.data),{error:e}}const r=(0,Bt.l)({...t,deleted:!1});if(r.error)return r;const n=r.result,a=vt.C.getState(),i=I(a,e,d(n));return i!==a&&vt.C.setState(i),{result:n}};var St=r(143);const Ft="Файл не содержит данных для импорта";var Et=r(2868);const Dt=t=>Dt(t);var Lt=r(2356);var Ot=r(6540),$t=r(9914);const Nt=[];var Pt=r(2298);const Rt={year:"numeric",month:"long",day:"numeric"};var Xt=r(9329);const At=t=>t.categories.ids,Qt=t=>{const{key:e,type:r}=t.navigationFilter;return x(e,r,t)};var jt=r(648);const qt=t=>{const{key:e,type:r}=t.navigationFilter;switch(r){case Ct.L0:return t.tasks.idsByExpireDate[e]||Nt;case Ct.p5:return t.tasks.idsByFilterId[e]||Nt;case Ct.vf:return t.tasks.idsByCategoryId[e]||Nt;default:return Nt}},Ut={addIcon:ft.X,addCategory:ht,deleteCategory:t=>{const e=(0,_t.K)(t);if(e.error){const{message:t,data:r}=e.error;return kt.v.error(t,r),e}const r=e.result,n=vt.C.getState(),a=function(t,e){const{category_id:r}=e,{[r]:n,...a}=t.tasks.idsByCategoryId;return{...t,tasks:{...t.tasks,idsByCategoryId:a}}}(n,r);return a!==n&&vt.C.setState(a),{result:r}},updateCategory:yt.s,addPriority:pt.m,createCalendarNavigationFilter:Lt.r,createCategoryNavigationFilter:t=>(0,Ct.Tz)(t),createFilterNavigationFilter:t=>(0,Ct.x7)(t),createOthersNavigationFilter:Dt,setNavigationFilter:Et.n,addTask:It,trashTask:function(t){const e=vt.C.getState(),{[Number(t.task_id)]:r,...n}=e.tasks.byId,a={...e,tasks:{...e.tasks,byId:n,ids:e.tasks.ids.filter((e=>e!==t.task_id)),idsByFilterId:{...e.tasks.idsByFilterId,[Ct.Tl]:e.tasks.idsByFilterId[Ct.Tl].filter((e=>e!==t.task_id))}}};return e!==a&&vt.C.setState(a),{result:t}},deleteTask:t=>{const e=vt.C.getState().tasks,r=t.task_id&&(0,Tt.gg)(e.byId[t.task_id]);if(!(0,wt.b)((0,Tt.gg)(t),r)){const e={message:"Задача не найдена",data:t};return kt.v.error(e.message,e.data),{error:e}}const n=(0,Bt.l)({...t,deleted:!0});if(n.error){const{message:t,data:e}=n.error;return kt.v.error(t,e),n}const a=n.result,i=vt.C.getState(),s=function(t,e,r){let n=t;return function(t,e){return t&&!t.deleted&&!0===e.deleted}(e.byId[r.task_id],r)&&(n=C(n,r),n=b(n,r),n=v(n,r),n=h(n,r),n=_(n,r),n=u(n,r)),n}(i,e,d(a));return s!==i&&vt.C.setState(s),{result:a}},undeleteTask:xt,updateTask:t=>{const{task_id:e}=t;let r=vt.C.getState();const n=r.tasks;if(e&&!0===n.byId[e].deleted){const e={message:"Нельзя обновить удаленную задачу",data:t};return kt.v.error(e.message,e.data),{error:e}}const a=(0,Bt.l)(t);if(a.error){const{message:t,data:e}=a.error;return kt.v.error(t,e),a}const i=a.result;r=vt.C.getState();const s=function(t,e,r){const n=e.byId[r.task_id];let a=t;return function(t,e){return void 0===t.category_id&&void 0!==e.category_id}(n,r)&&(a=k(a,r)),function(t,e){return void 0!==t.category_id&&void 0===e.category_id}(n,r)&&(a=C(a,n)),function(t,e){return t.category_id!==e.category_id}(n,r)&&(a=C(a,n),a=k(a,r)),function(t,e){return void 0===t.expire_date_time&&void 0!==e.expire_date_time}(n,r)&&(a=v(a,n),a=f(a,r),g(r)&&(a=y(a,r))),function(t,e){return void 0!==t.expire_date_time&&void 0===e.expire_date_time}(n,r)&&(a=b(a,n),a=h(a,r),a=l(a,r)),function(t,e){return void 0!==t.expire_date_time&&void 0!==e.expire_date_time&&t.expire_date_time!==e.expire_date_time}(n,r)&&(a=b(a,n),a=h(a,r),a=f(a,r),g(r)&&(a=y(a,r))),a=function(t,e){return!0===e.completed&&t.completed!==e.completed}(n,r)?p(a,r):_(a,r),a}(r,n,d(i));return s!==r&&vt.C.setState(s),{result:i}},exportTasks:()=>{const t=vt.C.getState();return{tasks:Object.values(t.tasks.byId).map((t=>(0,Tt.gg)(t))),categories:Object.values(t.categories.byId)}},clearTasks:()=>{const t=vt.C.getState().tasks.byId,e=w(Object.values(t));for(const[e,r]of Object.entries(t)){const t=(0,St.v)(r);if(t.error)return{error:t.error}}const r=vt.C.getState(),n=r.categories.ids.reduce(((t,e)=>({...t,[e]:[]})),{}),a={...r,tasks:{...r.tasks,idsByExpireDate:[],idsByCategoryId:n,idsByFilterId:{[Ct.FR]:[],[Ct.Tl]:[],[Ct.QO]:[],[Ct.Qy]:[]}}};return vt.C.setState(a),{result:e}},importTasks:t=>{if(!("categories"in t)||!("tasks"in t))return kt.v.error(Ft,t),{error:{message:Ft,data:t}};const{categories:e,tasks:r}=t;return e.forEach((t=>{ht(t)})),r.forEach((t=>{It(t)})),{result:t}},useAppStateJsonString:t=>{const e=(0,Ot.useCallback)((e=>JSON.stringify(e,null,t)),[t]);return(0,vt.C)(e)},useNavItem:(t,e)=>{const r=(0,Ot.useCallback)((r=>x(t,e,r)),[t,e]);return w((0,vt.C)((0,$t.k)(r)))},useCategoryList:()=>w((0,vt.C)(At)),getTasksInTrash:function(){const t=vt.C.getState();return t.tasks.idsByFilterId[Ct.Tl].map((e=>(0,Ct.gg)(t.tasks.byId[e])))},useNavigationFilter:()=>w((0,vt.C)((0,$t.k)(Qt))),useCalendarDate:t=>{const e=(0,jt.g)(t),r=Ot.useCallback((t=>({selected:t.navigationFilter.type===Ct.L0&&t.navigationFilter.key===e,tasks:t.tasks.idsByExpireDate[e]?.length||0})),[t]);return(0,vt.C)((0,$t.k)(r))},useTaskList:()=>w((0,vt.C)(qt)),useTaskItem:t=>{const e=(0,Ot.useCallback)((e=>e.tasks.byId[t]),[t]);return w((0,vt.C)(e))}};var Kt=r(4320);let Wt=(0,Kt.S)("api"),Mt=(0,Kt.S)("logger"),Gt=(0,Kt.S)("browser"),Ht=(0,Kt.S)("notify"),zt=(0,Kt.S)("storage");const Vt=t=>F(Ut.addIcon(t),"Ошибка добавления иконки"),Jt=t=>F(Ut.addPriority(t),"Ошибка добавления приоритета"),Zt=t=>F(Ut.addCategory(t),"Ошибка при добавлении категории"),Yt="Ошибка создания новой категории",te=async t=>{const e=await Wt.createCategory(t);if(e.error)return F(e,`${Yt} на сервере`);const r=Ut.addCategory(e.result);return r.error?F(e,Yt):r},ee="Ошибка удаления категории",re=async t=>{const e=await Wt.deleteCategory(t);if(e.error)return F(e,`${ee} на сервере`);const r=Ut.deleteCategory(e.result);return r.error?F(e,ee):r},ne="Ошибка обновления категории",ae=async t=>{const e=await Wt.updateCategory(t);if(e.error)return F(e,`${ne} на сервере`);const r=Ut.updateCategory(e.result);return r.error?F(e,ne):r},ie=t=>F(Ut.addTask(t),"Ошибка добавления задачи"),se="Ошибка очистки корзины",oe=async()=>{const t=await Promise.all(Ut.getTasksInTrash().map((async t=>{const e=await Wt.deleteTask(t);e.error&&Mt.error(`${se} на сервере`,e.error.data);const r=Ut.trashTask(t);return r.error&&Mt.error(se,r.error.data),r})));return t.find((t=>t.error))&&Ht.error(se),t},ce="Ошибка создания задачи",de=async t=>{const e=await Wt.createTask(t);if(e.error)return F(e,`${ce} на сервере`);const r=Ut.addTask(e.result);return r.error?F(e,ce):r},ue="Ошибка удаления задачи",le=async t=>{const e=await Wt.deleteTask(t);if(e.error)return F(e,`${ue} на сервере`);const r=Ut.deleteTask(e.result);return r.error?F(e,ue):r},ge="Ошибка обновления задачи",fe=async t=>{const e=await Wt.updateTask(t);if(e.error)return F(e,`${ge} на сервере`);const r=Ut.updateTask(e.result);return r.error?F(e,ge):r},ye="Ошибка восстановления задачи из корзины",pe=async t=>{const e=await Wt.updateTask({...t,deleted:!1});if(e.error)return F(e,`${ye} на сервере`);const r=Ut.updateTask(e.result);return r.error?F(e,ye):r},ke=()=>w(Ut.exportTasks()),me=async()=>{const t=await Wt.clearTasks();return t.error?F(t,"Ошибка удаления всех задач на сервере"):(Ut.clearTasks(),Ht.info("Все задачи удалены"),{result:J.Ok})},ve="Файл не содержит данных для импорта",he="Не удалось очистить задачи: ",_e=async function(t,e){if(void 0===e&&(e=!1),!("categories"in t)||!("tasks"in t))return Ht.error(ve),Mt.error(ve,t),{error:{message:ve,data:t}};if(e){const t=await Wt.clearTasks();if(t.error)return Ht.error(`${he}${t.error.message}`),t}const{categories:r,tasks:n}=t,a=await Wt.importTasks({categories:r,tasks:n});if(a.error)return Ht.error(`${he}${a.error.message}`),a;const i=a.result.imported;if(i.categories.length>0||i.tasks.length>0){const t=Ut.importTasks(a.result.imported);if(t.error)return Ht.error(`${he}${t.error.message}`),t}return Ht.info(`${a.result.imported.tasks.length} задач(и) импортировано`),a},be=t=>{const e=Ut.createCalendarNavigationFilter(t);Ut.setNavigationFilter(e)},Ce=t=>{const e=Ut.createFilterNavigationFilter(t);Ut.setNavigationFilter(e)},Ie=t=>{const e=Ut.createOthersNavigationFilter(t);Ut.setNavigationFilter(e)},we=t=>{const e=Ut.createCategoryNavigationFilter(t);Ut.setNavigationFilter(e)},Te=(t,e)=>Ut.useNavItem(t,e),Be=()=>Ut.useCategoryList(),xe=t=>Ut.useAppStateJsonString(t),Se=()=>Ut.useNavigationFilter(),Fe=t=>Ut.useCalendarDate(t),Ee=()=>Ut.useTaskList(),De=t=>Ut.useTaskItem(t);var Le=r(3341);class Oe{intervalId=null;constructor(t,e,r){this.kvStore=t,this.logger=e,this.elementSelector=r,this.mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this.mediaQueryList.addEventListener("change",this.handleColorSchemeChange),this.handleColorSchemeChange({matches:this.mediaQueryList.matches})}async setColorScheme(t){await this.kvStore.setItem(J.ux,t),this.handleColorSchemeChange({matches:this.mediaQueryList.matches}),o()}async getColorScheme(){return this.kvStore.getItem(J.ux)}startProcess=()=>{null===this.intervalId&&(this.intervalId=setInterval((()=>{this.handleIntervalChecks()}),J.CK))};stopProcess=()=>{null!==this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)};handleIntervalChecks=async()=>{const t=this.elementSelector();if(!t)return;const{classList:e}=t,r=await this.kvStore.getItem(J.ux),{themeByTime:n=J.XT,since:a=J.AH,to:i=J.$v}=r;if(r.theme===J.XL){const t=function(t,e){const r=new Date;let n=new Date,a=new Date;if(n.setHours(parseInt(t.split(":")[0],10),parseInt(t.split(":")[1],10),0,0),a.setHours(parseInt(e.split(":")[0],10),parseInt(e.split(":")[1],10),0,0),e<t){const t=new Date(r);t.setDate(t.getDate()+1),a.setDate(a.getDate()+1),r<n?(n.setDate(n.getDate()-1),a.setDate(a.getDate()-1)):r>=t&&(n.setDate(n.getDate()+1),a.setDate(a.getDate()+1))}return r>=n&&r<a}(a,i);t?(e.contains(J.BB)&&n!==J.BB&&e.remove(J.BB),e.contains(J.XT)&&n!==J.XT&&e.remove(J.XT),e.add(n)):this.mediaQueryList.matches?(e.add(J.XT),e.remove(J.BB)):(e.remove(J.XT),e.remove(J.BB))}else e.remove(n);E()};handleColorSchemeChange=async t=>{this.stopProcess();const e=this.elementSelector();if(!e)return;const{classList:r}=e,n=t.matches?"dark":"light",{theme:a}=await this.kvStore.getItem(J.ux),i=[J.XT,J.BB,J.XL].find((t=>t===a));i?(J.yK.includes(i)&&(i===J.BB?r.remove(J.XT):r.remove(J.BB),r.add(i)),i===J.XL&&(await this.handleIntervalChecks(),this.startProcess())):(r.remove(J.BB),n===J.XT?r.add(J.XT):r.remove(J.XT)),E()};destroy(){this.stopProcess(),this.mediaQueryList.removeEventListener("change",this.handleColorSchemeChange)}}let $e=(0,Kt.S)("appLogger");const Ne=1e3;class Pe extends Error{constructor(t){void 0===t&&(t="Сервис-воркер не поддерживается"),super(t),this.name="NoServiceWorkerError",Object.setPrototypeOf(this,Pe.prototype)}}var Re=r(5338),Xe=r(6552);const Ae=(t,e)=>{t.forEach((t=>{const r=e(t);r.error&&$e.error(r.error.message,t)}))};var Qe=r(4848);const je={padding:"var(--x4)",inlineSize:"100%"};var qe=function(t){let{pageReload:e}=t;return(0,Qe.jsxs)("div",{style:je,children:[(0,Qe.jsx)("p",{children:"Произошла ошибка загрузки приложения"}),(0,Qe.jsx)("button",{type:"button",onClick:e,children:"Перезагрузить страницу"})]})};const Ue=Ot.memo((()=>(0,Qe.jsx)(qe,{pageReload:R})));Ue.displayName="FailedLoadingAppContainer";var Ke=Ue;var We=(0,Ot.lazy)((()=>Promise.all([r.e(425),r.e(524)]).then(r.bind(r,4362)).catch((t=>($e.error("Ошибка загрузки компонента App",t),{default:Ke})))));const Me=1e3,Ge="loading-text",He=t=>{t.data.type===J.K$&&($e.debug(`получили сообщение от сервис-воркера ${J.K$} - перезагружаем страницу`),R())},ze=t=>{$e.debug("получили сообщение от сервис-воркера",t.data),Xe.B.apply((()=>{switch(t.data.type){case J.oQ:Ut.addCategory(t.data.data);break;case J.FS:Ut.updateCategory(t.data.data);break;case J.d5:Ut.deleteCategory(t.data.data);break;case J.v6:Ut.addTask(t.data.data);break;case J.c1:Ut.updateTask(t.data.data);break;case J.Cj:Ut.deleteTask(t.data.data);break;case J.dR:Ut.clearTasks();break;case J.tC:Ut.importTasks(t.data.data)}}))};!async function(){D();try{!await async function(){$e.debug("настройка сервис-воркера...");let t=!1;if(!N())throw $e.debug("сервис-воркер не поддерживается"),new Pe;$e.debug("сервис-воркер поддерживается");try{t=await W()}catch(t){M(t)}return t}()&&(await $(),await A(),await O())}catch(t){!function(t){if($e.error("ошибка при инициализации приложения",t),t instanceof Pe)N()?P({title:"Установка завершилась ошибкой",message:"удостовертесь в наличие сети и попробуте еще раз.",buttonText:"Перезагрузить страницу"}):P({title:"К сожалению, ваш браузер не поддерживает service worker!",message:"Попробуйте другой браузер или обновите данный браузер до последней версии."});else{if(t instanceof Error&&"Error"===t.name)return;P({title:"Произошла ошибка при инициализации приложения!",buttonText:"Перезагрузить страницу"})}}(t)}}()},5789:function(t,e,r){function n(){return window.matchMedia("(hover: none) and (pointer: coarse)").matches}r.d(e,{C:function(){return n}})},5587:function(t,e,r){r.d(e,{$N:function(){return d},$v:function(){return N},AH:function(){return $},Aq:function(){return E},BB:function(){return B},CK:function(){return L},CZ:function(){return O},Cj:function(){return C},Eo:function(){return u},FS:function(){return v},K$:function(){return y},Ok:function(){return n},Oz:function(){return k},UI:function(){return a},Wd:function(){return l},Wo:function(){return c},XL:function(){return S},XT:function(){return T},c1:function(){return b},cM:function(){return p},d5:function(){return h},dR:function(){return I},er:function(){return o},kA:function(){return g},nC:function(){return s},oQ:function(){return m},qU:function(){return x},tC:function(){return w},uq:function(){return i},ux:function(){return D},v6:function(){return _},yK:function(){return F},yL:function(){return f}});const n="Ok",a="[ UI ]",i="[ APP ]",s="[ API ]",o="[ STORE ]",c="[ NOTIFY ]",d="[ KV-STORE ]",u="[ THEME ]",l="[ LOCAL-STORAGE ]",g="[ USE-CASES ]",f={"Content-Type":"application/json; charset=utf-8"},y="RELOAD_PAGE",p="SKIP_WAITING",k="get_tasks",m="create_category",v="update_category",h="delete_category",_="create_task",b="update_task",C="delete_task",I="clear_tasks",w="import_tasks",T="dark",B="light",x="system",S="byTime",F=["dark","light"],E="kv-storage",D="colorSchema",L=3e4,O=864e5,$="20:00",N="07:00"},648:function(t,e,r){function n(t){return t.setHours(0,0,0,0),t.getTime()}r.d(e,{g:function(){return n}})},2298:function(t,e,r){r.d(e,{X:function(){return b}});var n=r.p+"alert.476b00abda902b398be7.png",a=r.p+"ball.3d996bafa729a1d3f580.png",i=r.p+"bug.83b52ad3ded9ef1fbd18.png",s=r.p+"cart.2d640112b4b86b627ff7.png",o=r.p+"favorite.7f0174c25660ef72df60.png",c=r.p+"home.3e40fe2b97b19c75dfaf.png",d=r.p+"inbox.58a834f614e341f9c578.png",u=r.p+"life.5896aaa56394aa0273b3.png",l=r.p+"mail.4a4239588f1b0d37bcfc.png",g=r.p+"other.66c872e04e2846cafa68.png",f=r.p+"page.9d1fc4484b1e5929b7ee.png",y=r.p+"today.141e3d87afbd71da541c.png",p=r.p+"twitter.5556cda0273e796d6a65.png",k=r.p+"warning.4f48c087dcbbdb3bd268.png",m=r.p+"folder_red.66f2d7c840bd3b9aed95.png",v=r.p+"next.4b695e6dc3fabdcc84b4.png",h=r.p+"note.8e112a51a84fa9c09b11.png",_=r.p+"note5.abc5ade9f6cd6928e96d.png";const b={"alert.png":n,"ball.png":a,"bug.png":i,"cart.png":s,"favorite.png":o,"home.png":c,"inbox.png":d,"life.png":u,"mail.png":l,"other.png":g,"page.png":f,"today.png":y,"twitter.png":p,"warning.png":k,"folder_red.png":m,"next.png":v,"note.png":h,"refresh.png":r.p+"refresh.7c9f0768269a6bbec081.png","trash.gif":r.p+"trash.3e03c195726c2cccdc94.gif","expired.svg":r.p+"expired.45d759abb485d88b78aa.svg","settings.svg":r.p+"settings.231ef2d68a51da6cad41.svg","state.svg":r.p+"state.c56984d48249544ade49.svg","help.svg":r.p+"help.83136d93df7a9872ae11.svg","share.svg":r.p+"share.ffc5f2b689d17d39785e.svg","note5.png":_}},9329:function(t,e,r){function n(t){return t[0].toUpperCase()+t.slice(1)}r.d(e,{Z:function(){return n}})},4320:function(t,e,r){r.d(e,{S:function(){return a}});var n=r(7270);const a=t=>(0,n.o)(`Попытка обратиться к неинициализированному сервису ${t}`)}},function(t){t.O(0,[425,12,644],(function(){return e=8191,t(t.s=e);var e}));t.O()}]);