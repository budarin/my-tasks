(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[12],{2768:function(t,e,n){n.d(e,{X:function(){return c}});var r=n(2292),i=n(4874);const o=()=>{};class c{endpoint;pinoInstance;logLevel="info";constructor(t,e,n){if(void 0===e&&(e=void 0),void 0===n&&(n=void 0),this.endpoint=t,n)this.pinoInstance=n;else{const n=(0,i.pino)({formatters:{level:t=>({level:t.toUpperCase()})},browser:{serialize:!1,asObject:!1,transmit:{send:async(e,n)=>{const o=i.pino.levels.values[this.logLevel];i.pino.levels.values[e]>=o&&await fetch(`${t}/${e}`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({id:(0,r.Z)(),method:e,params:n})})}},write:o}});this.pinoInstance=e?n.child(e):n,this.pinoInstance.level=this.logLevel}}setLevel(t){this.logLevel=t,this.pinoInstance.level=t}info(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.pinoInstance.info(e)}warn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.pinoInstance.warn(e)}error(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.pinoInstance.error(e)}debug(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.pinoInstance.debug(e)}child(t){const e=this.pinoInstance.child(t);return new c(this.endpoint,t,e)}}},9324:function(t,e,n){n.d(e,{E:function(){return i}});const r={debug:()=>{}};class i{storeName;logger;constructor(t,e){void 0===e&&(e=r),this.storeName=t,this.logger=e}async setItem(t,e){const n=await globalThis.caches.open(this.storeName),r=new Response(JSON.stringify(e),{headers:{"Content-Type":"application/json; charset=utf-8"}});await n.put(t,r)}async getItem(t){const e=await globalThis.caches.open(this.storeName),n=await e.match(t);if(n){return await n.json()}return{}}async removeItem(t){const e=await globalThis.caches.open(this.storeName);return await e.delete(t)}async clear(t){return await globalThis.caches.delete(t)}}},2677:function(t,e,n){function r(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const n=Object.keys(t),i=Object.keys(e);return n.length===i.length&&n.every((n=>i.includes(n)&&r(t[n],e[n])))}n.d(e,{b:function(){return r}})},1232:function(t,e,n){n.d(e,{WL:function(){return o}});const r="x-request-id",i="application/json; charset=utf-8",o=t=>async e=>{const n=e.body.id;try{const o=await fetch(`${t}/${e.body.method}`,{...e,method:"POST",body:JSON.stringify(e.body),headers:{...e?.headers,[r]:String(n),"content-type":i,accept:i}});if(!1===o.ok)return{id:n,error:{code:o.status,message:o.statusText}};const c=await o.json();if(!function(t){if(function(t){return"id"in t&&"result"in t&&!("error"in t)}(t))return!0;if(function(t){return"id"in t&&"error"in t&&!("result"in t)}(t)){const{error:e}=t;return!("number"!=typeof e.code||"string"!=typeof e.message||"data"in e&&"object"!=typeof e.data||"stack"in e&&"string"!=typeof e.stack)}return!1}(c))throw new Error("Структура данных в ответе сервера не соответствует формату JSON-RPC");return c}catch(t){return{id:n,error:{code:-1,message:t.message,stack:t.stack}}}}},9755:function(t,e,n){n.d(e,{V:function(){return i}});const r={debug:()=>{}};class i{logger;constructor(t){void 0===t&&(t=r),this.logger=t}setItem(t,e){localStorage.setItem(t,encodeURIComponent(JSON.stringify(e)))}getItem(t){return JSON.parse(decodeURIComponent(localStorage.getItem(t)))}removeItem(t){localStorage.removeItem(t)}clear(){localStorage.clear()}}},3788:function(t,e,n){const r=()=>{};new Proxy({},{get:()=>r})},7270:function(t,e,n){n.d(e,{o:function(){return r}});const r=t=>{const e=()=>{throw new Error(t||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:e,apply:e})}},4460:function(t,e,n){function r(t){const{category_id:e,icon_id:n,category_name:r}=t||{};return{category_id:Number(e),icon_id:Number(n),category_name:(0,o.Z)(r.trim())}}n.d(e,{Ij:function(){return y},zo:function(){return _}});var i=n(5681),o=n(2593),c=n(4303),s=n(140),u=n(6412),a=n(9977),d=n(8708);const f="Категория",l="Название категории",y={category_id:{title:"Идентификатор категории",name:"category_id",type:"number",min:1,required:!0},icon_id:{title:"Идентификатор иконки",name:"icon_id",type:"number",min:1,required:!0},category_name:{title:l,name:"category_name",type:"text",required:!0,minLength:3,maxLength:20,placeholder:l,autoComplete:"off",onInput:i.e,onInvalid:(0,i.V)(l,3,20)}},g={icon_id:{validators:[[c.F,(0,s.a)(f,"icon_id")]],required:!0},category_name:{validators:[[(0,u.y)(3,20),(0,a.P)(f,"category_name",3,20)]],required:!0}},p={category_id:{validators:[[c.F,(0,s.a)(f,"category_id")]],required:!0},...g},_=t=>(0,d.U)(t,p,r,f)},1727:function(t,e,n){n.d(e,{gg:function(){return r.gg}});var r=n(7730)},7730:function(t,e,n){function r(t){return e=>void 0===e||t(e)}function i(t){return"boolean"==typeof t}function o(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или boolean`}function c(t){const{task_id:e,title:n,priority_id:r,category_id:i,description:o,expire_date_time:c,deleted:s,completed:u}=t||{};return{task_id:Number(e),title:(0,p.Z)(n.trim()),priority_id:Number(r),category_id:i?Number(i):void 0,description:o,expire_date_time:c,deleted:s,completed:u}}n.d(e,{gg:function(){return c},tv:function(){return I},iX:function(){return $}});var s=n(6412),u=n(9977),a=n(4303),d=n(140),f=n(3756),l=n(9068),y=n(8708),g=n(5681),p=n(2593);const _="Задача",m=100,b=1e3,v="Название задачи",h="Описание задачи",I={task_id:{title:"Идентификатор задачи",name:"task_id",type:"number",min:1,required:!0},title:{title:v,name:"title",type:"text",required:!0,minLength:3,maxLength:m,placeholder:v,autoComplete:"off",onInput:g.e,onInvalid:(0,g.V)(v,3,m)},priority_id:{title:"Идентификатор приоритета",name:"priority_id",type:"number",min:1,required:!0},category_id:{title:"Идентификатор категории",name:"category_id",type:"number",min:1},description:{title:h,name:"description",type:"text",placeholder:"Подробное описание задачи",minLength:3,maxLength:b,onInput:g.e,onInvalid:(0,g.V)(h,3,b)}},k={title:{validators:[[(0,s.y)(3,m),(0,u.P)(_,"title",3,m)]],required:!0},priority_id:{validators:[[a.F,(0,d.a)(_,"priority_id")]],required:!0},category_id:{validators:[[r(a.F),function(t,e){return`Свойство сущности ${t} "${e}" должно быть undefined или целым числом`}(_,"category_id")]]},description:{validators:[[r((0,s.y)(3,b)),(0,u.P)(_,"description",3,b)]]},expire_date_time:{validators:[[r(f.K),(0,l.m)(_,"expire_date_time")],[r((function(t){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(t)})),`Свойство сущности ${_} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[r(i),o(_,"deleted")]]},completed:{validators:[[r(i),o(_,"completed")]]}},S={task_id:{validators:[[a.F,(0,d.a)(_,"task_id")]],required:!0},...k},$=t=>(0,y.U)(t,S,c,_)},2593:function(t,e,n){function r(t){if(t)return t[0].toUpperCase()+t.slice(1).toLowerCase()}n.d(e,{Z:function(){return r}})},5681:function(t,e,n){n.d(e,{V:function(){return i},e:function(){return r}});const r=t=>{t.currentTarget.setCustomValidity("")},i=(t,e,n)=>r=>{const i=r.currentTarget,o=i.value?`"${t}" должно содержать от ${e} до ${n} символов`:`Поле "${t}" обязательно для заполнения`;i.setCustomValidity(o)}},6624:function(t,e,n){function r(t,e){return function(n){const r=t(n);return r.error?(i.vF.error(r.error.message,r.error.data),r):e(n)}}n.d(e,{R:function(){return r}});var i=n(6169)},5896:function(t,e,n){function r(t,e){return i.vF.error(e,t),{error:{message:e,data:t}}}n.d(e,{H:function(){return r}});var i=n(6169)},3702:function(t,e,n){n.d(e,{A:function(){return a}});var r=n(6169),i=n(5896),o=n(4460),c=n(924),s=n(6624),u=n(1188);const a=(0,s.R)(o.zo,(function(t){const e=r.M_.getState();if(function(t,e){return Boolean(t.categories.byId[e.category_id])}(e,t))return(0,i.H)(t,"Добавление дубликата категории");if((0,u.h)(e,t))return(0,i.H)(t,"Добавление категории с уже существующим именем категории");if((0,c.$)(e,t))return(0,i.H)(t,"Добавление категории с не существующей иконкой");const n=function(t,e){const{category_id:n}=e;return{...t,categories:{...t.categories,ids:[...t.categories.ids,n],byId:{...t.categories.byId,[n]:e}}}}(e,t);return n!==e&&r.M_.setState(n),{result:t}}))},4230:function(t,e,n){n.d(e,{K:function(){return s}});var r=n(6169),i=n(5896),o=n(4460),c=n(3402);const s=(0,n(6624).R)(o.zo,(function(t){const e=r.M_.getState();if(function(t,e){return Boolean(void 0===t.categories.byId[e.category_id])||!(0,c.x)(t.categories.byId[e.category_id],e)}(e,t))return(0,i.H)(t,"Категория не найдена");if(function(t,e){return Boolean(Object.values(t.tasks.byId).find((t=>t.category_id===e.category_id)))}(e,t))return(0,i.H)(t,"Удаление категории, которая используется");const n=function(t,e){const{category_id:n}=e,{[n]:r,...i}=t.categories.byId;return{...t,categories:{...t.categories,ids:t.categories.ids.filter((t=>t!==n)),byId:{...i}}}}(e,t);return n!==e&&r.M_.setState(n),{result:t}}))},1188:function(t,e,n){function r(t,e){for(const n in t.categories.byId)if(t.categories.byId[n].category_name===e.category_name&&Number(n)!==e.category_id)return!0;return!1}n.d(e,{h:function(){return r}})},924:function(t,e,n){function r(t,e){return Boolean(void 0===t.icons.byId[e.icon_id])}n.d(e,{$:function(){return r}})},2069:function(t,e,n){n.d(e,{s:function(){return d}});var r=n(3402),i=n(6169),o=n(5896),c=n(4460),s=n(6624),u=n(924),a=n(1188);const d=(0,s.R)(c.zo,(function(t){const e=i.M_.getState();if((0,r.x)(t,e.categories.byId[t.category_id]))return{result:t};if(function(t,e){return Boolean(void 0===t.categories.byId[e.category_id])}(e,t))return(0,o.H)(t,"Категория не найдена");if((0,u.$)(e,t))return(0,o.H)(t,"Модификация категории с не существующей иконкой");if((0,a.h)(e,t))return(0,o.H)(t,"Попытка изменить имя категории на имя уже существующей категории");const n=function(t,e){const{category_id:n}=e;return{...t,categories:{...t.categories,byId:{...t.categories.byId,[n]:e}}}}(e,t);return n!==e&&i.M_.setState(n),{result:t}}))},6539:function(t,e,n){function r(t){const{icon_id:e,file_name:n}=t||{};return{icon_id:Number(e),file_name:n}}n.d(e,{X:function(){return y}});var i=n(6169),o=n(4303),c=n(140),s=n(6412),u=n(9977),a=n(8708);const d="Иконка",f={icon_id:{validators:[[o.F,(0,c.a)(d,"icon_id")]],required:!0},file_name:{validators:[[(0,s.y)(3,20),(0,u.P)(d,"fole_name",3,20)]],required:!0}};var l=n(5896);const y=(0,n(6624).R)((t=>(0,a.U)(t,f,r,d)),(function(t){const e=i.M_.getState();if(function(t,e){return Boolean(t.icons.ids.indexOf(e.icon_id)>-1)}(e,t))return(0,l.H)(t,"Добавление дубликата идентификатора иконки");if(function(t,e){for(const n in t.icons.byId)if(t.icons.byId[n].file_name===e.file_name)return!0;return!1}(e,t))return(0,l.H)(t,"Добавление иконки с уже существующим именем файла иконки");const n=function(t,e){const{icon_id:n}=e;return{...t,icons:{...t.icons,ids:[...t.icons.ids,n],byId:{...t.icons.byId,[n]:e}}}}(e,t);return n!==e&&i.M_.setState(n),{result:t}}))},6169:function(t,e,n){function r(t,e){c=t,s=e}n.d(e,{B5:function(){return o},M_:function(){return c},Uz:function(){return r},vF:function(){return s}});var i=n(7270);const o={icons:{byId:{},ids:[]},priorities:{byId:{},ids:[]},categories:{byId:{},ids:[]},tasks:{byId:{},ids:[]}};let c=(0,i.o)("Попытка использовать TasksStore до его инициализации!"),s=(0,i.o)("Попытка использовать logger в TasksStore до его инициализации!")},4248:function(t,e,n){function r(t){const{priority_id:e,priority_name:n}=t||{};return{priority_id:Number(e),priority_name:n}}n.d(e,{m:function(){return l}});var i=n(6169),o=n(5896),c=n(4303),s=n(140),u=n(8708);const a=["низкий","нормальный","повышенный","высокий"],d="Приоритет",f={priority_id:{validators:[[c.F,(0,s.a)(d,"priority_id")]],required:!0},priority_name:{validators:[[t=>a.includes(t),`Свойство сущности ${d} "priority_name" должно быть одним из ${JSON.stringify(a)}`]],required:!0}};const l=(0,n(6624).R)((t=>(0,u.U)(t,f,r,d)),(function(t){const e=i.M_.getState();if(function(t,e){return Boolean(t.priorities.ids.indexOf(e.priority_id)>-1)}(e,t))return(0,o.H)(t,"Добавление дубликата приоритета");if(function(t,e){for(const n in t.priorities.byId)if(t.priorities.byId[n].priority_name===e.priority_name)return!0;return!1}(e,t))return(0,o.H)(t,"Добавление приоритета с уже существующим именем");const n=function(t,e){const{priority_id:n}=e;return{...t,priorities:{...t.priorities,ids:[...t.priorities.ids,n],byId:{...t.priorities.byId,[n]:e}}}}(e,t);return n!==e&&i.M_.setState(n),{result:t}}))},8787:function(t,e,n){n.d(e,{X:function(){return a}});var r=n(6169),i=n(7730),o=n(5896),c=n(1529),s=n(565),u=n(9756);const a=(0,n(6624).R)(i.iX,(function(t){const e=r.M_.getState();if(function(t,e){return Boolean(t.tasks.byId[e.task_id])}(e,t))return(0,o.H)(t,"Добавление дубликата задачи");if((0,c.S)(e,t))return(0,o.H)(t,"Добавление задачи с не существующим приоритетом");if((0,s.E)(e,t))return(0,o.H)(t,"Добавление задачи с не существующей категорией");const n=function(t,e){const{tasks:n}=t,{task_id:r}=e,i=(0,u.z)(e);return{...t,tasks:{...n,ids:[...n.ids,r],byId:{...n.byId,[r]:i}}}}(e,t);return n!==e&&r.M_.setState(n),{result:t}}))},143:function(t,e,n){n.d(e,{v:function(){return s}});var r=n(6169),i=n(7730),o=n(5896),c=n(3402);const s=(0,n(6624).R)(i.iX,(function(t){const e=r.M_.getState();if(function(t,e){return void 0===t.tasks.byId[e.task_id]||!(0,c.x)(t.tasks.byId[e.task_id],e)}(e,t))return(0,o.H)(t,"Задача не найдена");const n=function(t,e){const{tasks:n}=t,{task_id:r}=e,i=n.ids.filter((t=>t!==r)),{[r]:o,...c}=n.byId;return{...t,tasks:{...n,ids:[...i],byId:{...c}}}}(e,t);return n!==e&&r.M_.setState(n),{result:t}}))},9756:function(t,e,n){function r(t){const{task_id:e,title:n,priority_id:r,category_id:i,description:o,expire_date_time:c,deleted:s,completed:u}=t;if(c){const e=Date.parse(c),n=new Date(e);n.setHours(0,0,0,0);const r=n.getTime();return{...t,expire_date_time:c,expire_date_ts:r,expire_date_time_ts:e}}return{task_id:e,title:n,priority_id:r,category_id:i,description:o,deleted:s,completed:u,expire_date_time:void 0,expire_date_ts:void 0,expire_date_time_ts:void 0}}n.d(e,{z:function(){return r}})},565:function(t,e,n){function r(t,e){return Boolean(void 0!==e.category_id&&void 0===t.categories.byId[e.category_id])}n.d(e,{E:function(){return r}})},1529:function(t,e,n){function r(t,e){return Boolean(void 0===t.priorities.byId[e.priority_id])}n.d(e,{S:function(){return r}})},9046:function(t,e,n){n.d(e,{l:function(){return d}});var r=n(6169),i=n(7730),o=n(5896),c=n(1529),s=n(565),u=n(6624),a=n(9756);const d=(0,u.R)(i.iX,(function(t){const e=r.M_.getState();if(function(t,e){return void 0===t.tasks.byId[e.task_id]}(e,t))return(0,o.H)(t,"Задача не найдена");if((0,c.S)(e,t))return(0,o.H)(t,"Обновление задачи с не существующим приоритетом");if((0,s.E)(e,t))return(0,o.H)(t,"Обновление задачи с не существующей категорией");const n=function(t,e){const{tasks:n}=t,{task_id:r}=e;return{...t,tasks:{...n,byId:{...n.byId,[r]:(0,a.z)(e)}}}}(e,t);return n!==e&&r.M_.setState(n),{result:t}}))},2292:function(t,e,n){function r(t){void 0===t&&(t=Date.now());const e=new Uint8Array(10);!function(t){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(t);if("function"==typeof require){const e=require("crypto").randomBytes(t.length);return t.set(e),t}throw new Error("Secure random number generation is not supported in this environment.")}(e);const n=t.toString(16).padStart(12,"0"),r=function(t){let e="";for(let n=0;n<t.length;n++){const r=t[n].toString(16);e+=2===r.length?r:"0"+r}return e}(e);return`${n.substring(0,8)}-${n.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}n.d(e,{Z:function(){return r}})},4303:function(t,e,n){function r(t){const e=Number(t);return"number"==typeof e&&Number.isInteger(e)}n.d(e,{F:function(){return r}})},3756:function(t,e,n){function r(t){return"string"==typeof t}n.d(e,{K:function(){return r}})},7128:function(t,e,n){function r(t){return e=>{if("string"!=typeof e)return!1;const n=e.trim();return t.includes(n)}}n.d(e,{Y:function(){return r}})},6412:function(t,e,n){function r(t,e){return void 0===e&&(e=65536),n=>{if("string"!=typeof n)return!1;const r=String(n).trim();return r.length>=t&&r.length<=e}}n.d(e,{y:function(){return r}})},140:function(t,e,n){n.d(e,{a:function(){return r}});const r=(t,e)=>`Свойство сущности ${t} "${e}" должно быть целым числом`},3640:function(t,e,n){function r(t,e){return`Свойство сущности ${t} "${e}" должно быть значением из списка`}n.d(e,{C:function(){return r}})},9068:function(t,e,n){function r(t,e){return`Свойство сущности ${t} "${e}" должно быть строкой`}n.d(e,{m:function(){return r}})},9977:function(t,e,n){n.d(e,{P:function(){return r}});const r=(t,e,n,r)=>`Свойство сущности ${t} "${e}" должно быть строкой длиной от ${n} до ${r} символов`},8708:function(t,e,n){n.d(e,{U:function(){return r}});const r=(t,e,n,r)=>{const i={error:{message:`Сущность "${r}" должна быть объектом`,data:t}};if(void 0===t)return i;if(!1===function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}(t))return i;const o=t,c=Object.keys(e);for(let t=0;t<c.length;t++){const n=c[t],i=e[n];if(!0===i.required&&void 0===o[n])return{error:{message:`Свойство "${n}" сущности ${r} отсутствует`,data:o}};for(let t=0;t<i.validators.length;t++){const e=i.validators[t];if(!1===e[0](o[n]))return{error:{message:e[1],data:o}}}}return{result:n(o)}}}}]);