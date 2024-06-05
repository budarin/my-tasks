(globalThis.webpackChunkmy_tasks=globalThis.webpackChunkmy_tasks||[]).push([[12],{2768:(e,t,r)=>{r.d(t,{X:()=>s});var n=r(2292),i=r(4874);const o=()=>{};class s{endpoint;pinoInstance;logLevel="info";constructor(e,t=void 0,r=void 0){if(this.endpoint=e,r)this.pinoInstance=r;else{const r=(0,i.pino)({formatters:{level:e=>({level:e.toUpperCase()})},browser:{serialize:!1,asObject:!1,transmit:{send:async(t,r)=>{const o=i.pino.levels.values[this.logLevel];i.pino.levels.values[t]>=o&&await fetch(`${e}/${t}`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({id:(0,n.Z)(),method:t,params:r})})}},write:o}});this.pinoInstance=t?r.child(t):r,this.pinoInstance.level=this.logLevel}}setLevel(e){this.logLevel=e,this.pinoInstance.level=e}info(...e){this.pinoInstance.info(e)}warn(...e){this.pinoInstance.warn(e)}error(...e){this.pinoInstance.error(e)}debug(...e){this.pinoInstance.debug(e)}child(e){const t=this.pinoInstance.child(e);return new s(this.endpoint,e,t)}}},9324:(e,t,r)=>{r.d(t,{E:()=>i});const n={debug:()=>{}};class i{storeName;logger;constructor(e,t=n){this.storeName=e,this.logger=t}async setItem(e,t){const r=await globalThis.caches.open(this.storeName),n=new Response(JSON.stringify(t),{headers:{"Content-Type":"application/json; charset=utf-8"}});await r.put(e,n)}async getItem(e){const t=await globalThis.caches.open(this.storeName),r=await t.match(e);if(r){return await r.json()}return{}}async removeItem(e){const t=await globalThis.caches.open(this.storeName);return await t.delete(e)}async clear(e){return await globalThis.caches.delete(e)}}},2677:(e,t,r)=>{function n(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&r.every((r=>i.includes(r)&&n(e[r],t[r])))}r.d(t,{b:()=>n})},1232:(e,t,r)=>{r.d(t,{WL:()=>o});const n="x-request-id",i="application/json; charset=utf-8",o=e=>async t=>{const r=t.body.id;try{const o=await fetch(`${e}/${t.body.method}`,{...t,method:"POST",body:JSON.stringify(t.body),headers:{...t?.headers,[n]:String(r),"content-type":i,accept:i}});if(!1===o.ok)return{id:r,error:{code:o.status,message:o.statusText}};const s=await o.json();if(!function(e){if(function(e){return"id"in e&&"result"in e&&!("error"in e)}(e))return!0;if(function(e){return"id"in e&&"error"in e&&!("result"in e)}(e)){const{error:t}=e;return!("number"!=typeof t.code||"string"!=typeof t.message||"data"in t&&"object"!=typeof t.data||"stack"in t&&"string"!=typeof t.stack)}return!1}(s))throw new Error("Структура данных в ответе сервера не соответствует формату JSON-RPC");return s}catch(e){return{id:r,error:{code:-1,message:e.message,stack:e.stack}}}}},9755:(e,t,r)=>{r.d(t,{V:()=>i});const n={debug:()=>{}};class i{logger;constructor(e=n){this.logger=e}setItem(e,t){localStorage.setItem(e,encodeURIComponent(JSON.stringify(t)))}getItem(e){return JSON.parse(decodeURIComponent(localStorage.getItem(e)))}removeItem(e){localStorage.removeItem(e)}clear(){localStorage.clear()}}},3788:(e,t,r)=>{const n=()=>{};new Proxy({},{get:()=>n})},7270:(e,t,r)=>{r.d(t,{o:()=>n});const n=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})}},4460:(e,t,r)=>{function n(e){const{category_id:t,icon_id:r,category_name:n}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:(0,o.Z)(n.trim())}}r.d(t,{Ij:()=>y,zo:()=>b});var i=r(5681),o=r(2593),s=r(4303),a=r(140),c=r(6412),d=r(9977),u=r(8708);const l="Категория",f="Название категории",y={category_id:{title:"Идентификатор категории",name:"category_id",required:!0},icon_id:{title:"Идентификатор иконки",name:"icon_id",required:!0},category_name:{title:f,name:"category_name",type:"text",pattern:"^[a-zA-Zа-яА-Я0-9]{3}.*",spellCheck:!1,required:!0,minLength:3,maxLength:20,placeholder:f,autoComplete:"off",onInput:i.e,onInvalid:(0,i.V)(f,3,20)}},g={icon_id:{validators:[[s.F,(0,a.a)(l,"icon_id")]],required:!0},category_name:{validators:[[(0,c.y)(3,20),(0,d.P)(l,"category_name",3,20)]],required:!0}},_={category_id:{validators:[[s.F,(0,a.a)(l,"category_id")]],required:!0},...g},b=e=>(0,u.U)(e,_,n,l)},1727:(e,t,r)=>{r.d(t,{tb:()=>n.tb});var n=r(7730)},7730:(e,t,r)=>{function n(e){return t=>void 0===t||e(t)}function i(e){return"boolean"==typeof e}function o(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}function s(e){const{task_id:t,title:r,priority_id:n,category_id:i,description:o,expire_date_time:s,deleted:a,completed:c}=e||{};return{task_id:Number(t),title:(0,_.Z)(r.trim()),priority_id:Number(n),category_id:i?Number(i):void 0,description:o,expire_date_time:s,deleted:a,completed:c}}r.d(t,{tb:()=>s,tv:()=>v,iX:()=>k});var a=r(6412),c=r(9977),d=r(4303),u=r(140),l=r(3756),f=r(9068),y=r(8708),g=r(5681),_=r(2593);const b="Задача",p=100,m="Название задачи",v={task_id:{title:"Идентификатор задачи",name:"task_id",required:!0},task_date:{title:"Дата выполнения задачи",name:"task_date",type:"date"},task_time:{title:"Время выполнения задачи",name:"task_time",type:"time"},title:{title:m,name:"title",type:"text",pattern:"^[a-zA-Zа-яА-Я0-9]{3}.*",required:!0,minLength:3,maxLength:p,placeholder:m,autoComplete:"off",spellCheck:!1,onInput:g.e,onInvalid:(0,g.V)(m,3,p)},priority_id:{title:"Идентификатор приоритета",name:"priority_id",required:!0},category_id:{title:"Идентификатор категории",name:"category_id"},description:{title:"Описание задачи",name:"description",placeholder:"Подробное описание задачи",maxLength:500}},h={title:{validators:[[(0,a.y)(3,p),(0,c.P)(b,"title",3,p)]],required:!0},priority_id:{validators:[[d.F,(0,u.a)(b,"priority_id")]],required:!0},category_id:{validators:[[n(d.F),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(b,"category_id")]]},expire_date_time:{validators:[[n(l.K),(0,f.m)(b,"expire_date_time")],[n((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${b} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[n(i),o(b,"deleted")]]},completed:{validators:[[n(i),o(b,"completed")]]}},I={task_id:{validators:[[d.F,(0,u.a)(b,"task_id")]],required:!0},...h},k=e=>(0,y.U)(e,I,s,b)},2593:(e,t,r)=>{function n(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}r.d(t,{Z:()=>n})},5681:(e,t,r)=>{r.d(t,{V:()=>i,e:()=>n});const n=e=>{e.currentTarget.setCustomValidity("")},i=(e,t,r)=>n=>{const i=n.currentTarget;let o=`Поле "${e}" обязательно для заполнения`;const s=i.value.replace(/\n/gm,"").trim();return i.validity.patternMismatch?(o=`Поле "${e}" должно начинаться с минимум ${t} символов, исключая спецсимволы и пробелы`,void i.setCustomValidity(o)):s&&(s.length<t||s.length>r)?(o=`Поле "${e}" должно содержать минимум ${t} и максимум ${r} символов`,void i.setCustomValidity(o)):void i.setCustomValidity(o)}},6624:(e,t,r)=>{function n(e,t){return function(r){const n=e(r);return n.error?(i.vF.error(n.error.message,n.error.data),n):t(r)}}r.d(t,{R:()=>n});var i=r(6169)},5896:(e,t,r)=>{function n(e,t){return i.vF.error(t,e),Object.freeze({error:{message:t,data:e}})}r.d(t,{H:()=>n});var i=r(6169)},3702:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(6169),i=r(5896),o=r(4460),s=r(924),a=r(6624),c=r(1188);const d=(0,a.R)(o.zo,(function(e){const t=n.M_.getState();if(function(e,t){return Boolean(e.categories.byId[t.category_id])}(t,e))return(0,i.H)(e,"Добавление дубликата категории");if((0,c.h)(t,e))return(0,i.H)(e,"Добавление категории с уже существующим именем категории");if((0,s.$)(t,e))return(0,i.H)(e,"Добавление категории с не существующей иконкой");const r=function(e,t){const{category_id:r}=t;return{...e,categories:{...e.categories,ids:[...e.categories.ids,r],byId:{...e.categories.byId,[r]:t}}}}(t,e);return r!==t&&n.M_.setState(r),Object.freeze({result:e})}))},4230:(e,t,r)=>{r.d(t,{K:()=>a});var n=r(6169),i=r(5896),o=r(4460),s=r(3402);const a=(0,r(6624).R)(o.zo,(function(e){const t=n.M_.getState();if(function(e,t){return Boolean(void 0===e.categories.byId[t.category_id])||!(0,s.x)(e.categories.byId[t.category_id],t)}(t,e))return(0,i.H)(e,"Категория не найдена");if(function(e,t){return Boolean(Object.values(e.tasks.byId).find((e=>e.category_id===t.category_id)))}(t,e))return(0,i.H)(e,"Удаление категории, которая используется");const r=function(e,t){const{category_id:r}=t,{[r]:n,...i}=e.categories.byId;return{...e,categories:{...e.categories,ids:e.categories.ids.filter((e=>e!==r)),byId:{...i}}}}(t,e);return r!==t&&n.M_.setState(r),Object.freeze({result:e})}))},5370:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(6169);const i=()=>Object.freeze(Object.values(n.M_.getState().categories.byId))},2694:(e,t,r)=>{r.d(t,{p:()=>i});var n=r(6169);const i=e=>{const t=n.M_.getState().categories.byId[e];return Object.freeze(t)}},5114:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(6169);const i=()=>{const e=n.M_.getState().categories.ids;return Object.freeze(e)}},1188:(e,t,r)=>{function n(e,t){for(const r in e.categories.byId)if(e.categories.byId[r].category_name===t.category_name&&Number(r)!==t.category_id)return!0;return!1}r.d(t,{h:()=>n})},924:(e,t,r)=>{function n(e,t){return Boolean(void 0===e.icons.byId[t.icon_id])}r.d(t,{$:()=>n})},2069:(e,t,r)=>{r.d(t,{s:()=>u});var n=r(3402),i=r(6169),o=r(5896),s=r(4460),a=r(6624),c=r(924),d=r(1188);const u=(0,a.R)(s.zo,(function(e){const t=i.M_.getState();if((0,n.x)(e,t.categories.byId[e.category_id]))return{result:e};if(function(e,t){return Boolean(void 0===e.categories.byId[t.category_id])}(t,e))return(0,o.H)(e,"Категория не найдена");if((0,c.$)(t,e))return(0,o.H)(e,"Модификация категории с не существующей иконкой");if((0,d.h)(t,e))return(0,o.H)(e,"Попытка изменить имя категории на имя уже существующей категории");const r=function(e,t){const{category_id:r}=t;return{...e,categories:{...e.categories,byId:{...e.categories.byId,[r]:t}}}}(t,e);return r!==t&&i.M_.setState(r),Object.freeze({result:e})}))},9777:(e,t,r)=>{r.d(t,{C:()=>s});var n=r(9914),i=r(6169);const o=e=>Object.values(e.categories.byId),s=()=>Object.freeze((0,i.M_)((0,n.k)(o)))},3057:(e,t,r)=>{r.d(t,{e:()=>o});var n=r(6540),i=r(6169);const o=e=>{const t=(0,n.useCallback)((t=>t.categories.byId[e]),[e]);return Object.freeze((0,i.M_)(t))}},5989:(e,t,r)=>{r.d(t,{k:()=>o});var n=r(6169);const i=e=>e.categories.ids,o=()=>Object.freeze((0,n.M_)(i))},6539:(e,t,r)=>{function n(e){const{icon_id:t,file_name:r}=e||{};return{icon_id:Number(t),file_name:r}}r.d(t,{X:()=>y});var i=r(6169),o=r(4303),s=r(140),a=r(6412),c=r(9977),d=r(8708);const u="Иконка",l={icon_id:{validators:[[o.F,(0,s.a)(u,"icon_id")]],required:!0},file_name:{validators:[[(0,a.y)(3,20),(0,c.P)(u,"fole_name",3,20)]],required:!0}};var f=r(5896);const y=(0,r(6624).R)((e=>(0,d.U)(e,l,n,u)),(function(e){const t=i.M_.getState();if(function(e,t){return Boolean(e.icons.ids.indexOf(t.icon_id)>-1)}(t,e))return(0,f.H)(e,"Добавление дубликата идентификатора иконки");if(function(e,t){for(const r in e.icons.byId)if(e.icons.byId[r].file_name===t.file_name)return!0;return!1}(t,e))return(0,f.H)(e,"Добавление иконки с уже существующим именем файла иконки");const r=function(e,t){const{icon_id:r}=t;return{...e,icons:{...e.icons,ids:[...e.icons.ids,r],byId:{...e.icons.byId,[r]:t}}}}(t,e);return r!==t&&i.M_.setState(r),Object.freeze({result:e})}))},3621:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(6169);const i=e=>{const t=n.M_.getState().icons.byId[e];return Object.freeze(t)}},9881:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(6169);const i=()=>{const e=n.M_.getState().icons.ids;return Object.freeze(e)}},224:(e,t,r)=>{r.d(t,{v:()=>i});var n=r(6169);const i=()=>Object.freeze(Object.values(n.M_.getState().icons.byId))},6026:(e,t,r)=>{r.d(t,{b:()=>o});var n=r(6540),i=r(6169);const o=e=>{const t=(0,n.useCallback)((t=>t.icons.byId[e]),[e]);return Object.freeze((0,i.M_)(t))}},8558:(e,t,r)=>{r.d(t,{b:()=>o});var n=r(6169);const i=e=>e.icons.ids,o=()=>Object.freeze((0,n.M_)(i))},8345:(e,t,r)=>{r.d(t,{s:()=>s});var n=r(9914),i=r(6169);const o=e=>Object.values(e.icons.byId),s=()=>Object.freeze((0,i.M_)((0,n.k)(o)))},6169:(e,t,r)=>{function n(e,t){s=e,a=t}r.d(t,{B5:()=>o,M_:()=>s,Uz:()=>n,vF:()=>a});var i=r(7270);const o={icons:{byId:{},ids:[]},priorities:{byId:{},ids:[]},categories:{byId:{},ids:[]},tasks:{byId:{},ids:[]}};let s=(0,i.o)("Попытка использовать TasksStore до его инициализации!"),a=(0,i.o)("Попытка использовать logger в TasksStore до его инициализации!")},4248:(e,t,r)=>{function n(e){const{priority_id:t,priority_name:r}=e||{};return{priority_id:Number(t),priority_name:r}}r.d(t,{m:()=>f});var i=r(6169),o=r(5896),s=r(4303),a=r(140),c=r(8708);const d=["низкий","нормальный","повышенный","высокий"],u="Приоритет",l={priority_id:{validators:[[s.F,(0,a.a)(u,"priority_id")]],required:!0},priority_name:{validators:[[e=>d.includes(e),`Свойство сущности ${u} "priority_name" должно быть одним из ${JSON.stringify(d)}`]],required:!0}};const f=(0,r(6624).R)((e=>(0,c.U)(e,l,n,u)),(function(e){const t=i.M_.getState();if(function(e,t){return Boolean(e.priorities.ids.indexOf(t.priority_id)>-1)}(t,e))return(0,o.H)(e,"Добавление дубликата приоритета");if(function(e,t){for(const r in e.priorities.byId)if(e.priorities.byId[r].priority_name===t.priority_name)return!0;return!1}(t,e))return(0,o.H)(e,"Добавление приоритета с уже существующим именем");const r=function(e,t){const{priority_id:r}=t;return{...e,priorities:{...e.priorities,ids:[...e.priorities.ids,r],byId:{...e.priorities.byId,[r]:t}}}}(t,e);return r!==t&&i.M_.setState(r),Object.freeze({result:e})}))},2406:(e,t,r)=>{r.d(t,{l:()=>i});var n=r(6169);const i=()=>Object.freeze(Object.values(n.M_.getState().priorities.byId))},6826:(e,t,r)=>{r.d(t,{d:()=>i});var n=r(6169);const i=e=>{const t=n.M_.getState().priorities.byId[e];return Object.freeze(t)}},3310:(e,t,r)=>{r.d(t,{V:()=>i});var n=r(6169);const i=()=>{const e=n.M_.getState().priorities.ids;return Object.freeze(e)}},7753:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(9914),i=r(6169);const o=e=>Object.values(e.priorities.byId),s=()=>Object.freeze((0,i.M_)((0,n.k)(o)))},9145:(e,t,r)=>{r.d(t,{g:()=>o});var n=r(6540),i=r(6169);const o=e=>{const t=(0,n.useCallback)((t=>t.priorities.byId[e]),[e]);return Object.freeze((0,i.M_)(t))}},1277:(e,t,r)=>{r.d(t,{_:()=>o});var n=r(6169);const i=e=>e.priorities.ids,o=()=>Object.freeze((0,n.M_)(i))},8787:(e,t,r)=>{r.d(t,{X:()=>d});var n=r(6169),i=r(7730),o=r(5896),s=r(1529),a=r(565),c=r(9756);const d=(0,r(6624).R)(i.iX,(function(e){const t=n.M_.getState();if(function(e,t){return Boolean(e.tasks.byId[t.task_id])}(t,e))return(0,o.H)(e,"Добавление дубликата задачи");if((0,s.S)(t,e))return(0,o.H)(e,"Добавление задачи с не существующим приоритетом");if((0,a.E)(t,e))return(0,o.H)(e,"Добавление задачи с не существующей категорией");const r=function(e,t){const{tasks:r}=e,{task_id:n}=t,i=(0,c.z)(t);return{...e,tasks:{...r,ids:[...r.ids,n],byId:{...r.byId,[n]:i}}}}(t,e);return r!==t&&n.M_.setState(r),Object.freeze({result:e})}))},143:(e,t,r)=>{r.d(t,{v:()=>a});var n=r(6169),i=r(7730),o=r(5896),s=r(3402);const a=(0,r(6624).R)(i.iX,(function(e){const t=n.M_.getState();if(function(e,t){return void 0===e.tasks.byId[t.task_id]||!(0,s.x)(e.tasks.byId[t.task_id],t)}(t,e))return(0,o.H)(e,"Задача не найдена");const r=function(e,t){const{tasks:r}=e,{task_id:n}=t,i=r.ids.filter((e=>e!==n)),{[n]:o,...s}=r.byId;return{...e,tasks:{...r,ids:[...i],byId:{...s}}}}(t,e);return r!==t&&n.M_.setState(r),Object.freeze({result:e})}))},2085:(e,t,r)=>{r.d(t,{g:()=>i});var n=r(6169);const i=e=>{const t=n.M_.getState().tasks.byId[e];return Object.freeze(t)}},4361:(e,t,r)=>{r.d(t,{u:()=>i});var n=r(6169);const i=()=>{const e=n.M_.getState().tasks.ids;return Object.freeze(e)}},9232:(e,t,r)=>{r.d(t,{x:()=>i});var n=r(6169);const i=()=>Object.freeze(Object.values(n.M_.getState().tasks.byId))},9756:(e,t,r)=>{function n(e){const{task_id:t,title:r,priority_id:n,category_id:i,description:o,expire_date_time:s,deleted:a,completed:c}=e;if(s){const t=Date.parse(s),r=new Date(t);r.setHours(0,0,0,0);const n=r.getTime();return{...e,expire_date_time:s,expire_date_ts:n,expire_date_time_ts:t}}return{task_id:t,title:r,priority_id:n,category_id:i,description:o,deleted:a,completed:c,expire_date_time:void 0,expire_date_ts:void 0,expire_date_time_ts:void 0}}r.d(t,{z:()=>n})},565:(e,t,r)=>{function n(e,t){return Boolean(void 0!==t.category_id&&void 0===e.categories.byId[t.category_id])}r.d(t,{E:()=>n})},1529:(e,t,r)=>{function n(e,t){return Boolean(void 0===e.priorities.byId[t.priority_id])}r.d(t,{S:()=>n})},9046:(e,t,r)=>{r.d(t,{l:()=>u});var n=r(6169),i=r(7730),o=r(5896),s=r(1529),a=r(565),c=r(6624),d=r(9756);const u=(0,c.R)(i.iX,(function(e){const t=n.M_.getState();if(function(e,t){return void 0===e.tasks.byId[t.task_id]}(t,e))return(0,o.H)(e,"Задача не найдена");if((0,s.S)(t,e))return(0,o.H)(e,"Обновление задачи с не существующим приоритетом");if((0,a.E)(t,e))return(0,o.H)(e,"Обновление задачи с не существующей категорией");const r=function(e,t){const{tasks:r}=e,{task_id:n}=t;return{...e,tasks:{...r,byId:{...r.byId,[n]:(0,d.z)(t)}}}}(t,e);return r!==t&&n.M_.setState(r),Object.freeze({result:e})}))},6806:(e,t,r)=>{r.d(t,{b:()=>o});var n=r(6540),i=r(6169);const o=e=>{const t=(0,n.useCallback)((t=>t.tasks.byId[e]),[e]);return Object.freeze((0,i.M_)(t))}},1034:(e,t,r)=>{r.d(t,{R:()=>o});var n=r(6169);const i=e=>e.tasks.ids,o=()=>Object.freeze((0,n.M_)(i))},733:(e,t,r)=>{r.d(t,{s:()=>s});var n=r(9914),i=r(6169);const o=e=>Object.values(e.tasks.byId),s=()=>Object.freeze((0,i.M_)((0,n.k)(o)))},2292:(e,t,r)=>{function n(e=Date.now()){const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),n=function(e){let t="";for(let r=0;r<e.length;r++){const n=e[r].toString(16);t+=2===n.length?n:"0"+n}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${n.substring(0,4)}-${n.substring(4,8)}-${n.substring(8)}`}r.d(t,{Z:()=>n})},4303:(e,t,r)=>{function n(e){const t=Number(e);return"number"==typeof t&&Number.isInteger(t)}r.d(t,{F:()=>n})},3756:(e,t,r)=>{function n(e){return"string"==typeof e}r.d(t,{K:()=>n})},7128:(e,t,r)=>{function n(e){return t=>{if("string"!=typeof t)return!1;const r=t.trim();return e.includes(r)}}r.d(t,{Y:()=>n})},6412:(e,t,r)=>{function n(e,t=65536){return r=>{if("string"!=typeof r)return!1;const n=String(r).trim();return n.length>=e&&n.length<=t}}r.d(t,{y:()=>n})},140:(e,t,r)=>{r.d(t,{a:()=>n});const n=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`},3640:(e,t,r)=>{function n(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}r.d(t,{C:()=>n})},9068:(e,t,r)=>{function n(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}r.d(t,{m:()=>n})},9977:(e,t,r)=>{r.d(t,{P:()=>n});const n=(e,t,r,n)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${n} символов`},8708:(e,t,r)=>{r.d(t,{U:()=>n});const n=(e,t,r,n)=>{const i={error:{message:`Сущность "${n}" должна быть объектом`,data:e}};if(void 0===e)return i;if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return i;const o=e,s=Object.keys(t);for(let e=0;e<s.length;e++){const r=s[e],i=t[r];if(!0===i.required&&void 0===o[r])return{error:{message:`Свойство "${r}" сущности ${n} отсутствует`,data:o}};for(let e=0;e<i.validators.length;e++){const t=i.validators[e];if(!1===t[0](o[r]))return{error:{message:t[1],data:o}}}}return{result:r(o)}}}}]);