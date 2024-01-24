(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[568],{1990:function(t,n,e){e.d(n,{G:function(){return c}});var r=e(7029),i=e(6559);const o=()=>{};class c{endpoint;pinoInstance;constructor(t,n,e){if(void 0===n&&(n=void 0),void 0===e&&(e=void 0),this.endpoint=t,e)this.pinoInstance=e;else{const e=(0,i.pino)({formatters:{level:t=>({level:t.toUpperCase()})},browser:{serialize:!1,asObject:!1,transmit:{send:async(n,e)=>{const o=i.pino.levels.values[this.pinoInstance.level];i.pino.levels.values[n]>=o&&await fetch(`${t}/${n}`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({id:(0,r.S)(),method:n,params:e})})}},write:o}});this.pinoInstance=n?e.child(n):e}}info(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.pinoInstance.info(n)}warn(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.pinoInstance.warn(n)}error(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.pinoInstance.error(n)}debug(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];this.pinoInstance.debug(n)}child(t){const n=this.pinoInstance.child(t);return new c(this.endpoint,t,n)}}},7574:function(t,n,e){e.d(n,{E:function(){return i}});const r={debug:()=>{}};class i{storeName;logger;constructor(t,n){void 0===n&&(n=r),this.storeName=t,this.logger=n}async setItem(t,n){const e=await globalThis.caches.open(this.storeName),r=new Response(JSON.stringify(n),{headers:{"Content-Type":"application/json; charset=utf-8"}});await e.put(t,r)}async getItem(t){const n=await globalThis.caches.open(this.storeName),e=await n.match(t);return e?e.json():{}}async removeItem(t){const n=await globalThis.caches.open(this.storeName);return await n.delete(t)}async clear(t){return await globalThis.caches.delete(t)}}},5096:function(t,n,e){function r(t,n){if(t===n)return!0;if("object"!=typeof t||null===t||"object"!=typeof n||null===n)return!1;const e=Object.keys(t),i=Object.keys(n);return e.length===i.length&&e.every((e=>i.includes(e)&&r(t[e],n[e])))}e.d(n,{v:function(){return r}})},335:function(t,n,e){e.d(n,{hG:function(){return i}});const r="application/json; charset=utf-8",i=t=>async n=>{const e=n.body.id;try{const i=await fetch(`${t}/${n.body.method}`,{...n,method:"POST",body:JSON.stringify(n.body),headers:{...n?.headers,"x-request-id":String(e),"content-type":r,accept:r}});if(!1===i.ok)return{id:e,error:{code:i.status,message:i.statusText}};const o=await i.json();if(!function(t){if(function(t){return"id"in t&&"result"in t&&!("error"in t)}(t))return!0;if(function(t){return"id"in t&&"error"in t&&!("result"in t)}(t)){const{error:n}=t;return!("number"!=typeof n.code||"string"!=typeof n.message||"data"in n&&"object"!=typeof n.data||"stack"in n&&"string"!=typeof n.stack)}return!1}(o))throw new Error("Структура данных в ответе сервера не соответствует формату JSON-RPC");return o}catch(t){return{id:e,error:{code:-1,message:t.message,stack:t.stack}}}}},7258:function(t,n,e){e.d(n,{j:function(){return i}});const r={debug:()=>{}};class i{logger;constructor(t){void 0===t&&(t=r),this.logger=t}setItem(t,n){localStorage.setItem(t,encodeURIComponent(JSON.stringify(n)))}getItem(t){return JSON.parse(decodeURIComponent(localStorage.getItem(t)))}removeItem(t){localStorage.removeItem(t)}clear(){localStorage.clear()}}},7849:function(t,n,e){e.d(n,{G:function(){return i}});const r=()=>{},i=new Proxy({},{get:()=>r})},8398:function(t,n,e){e.d(n,{K:function(){return r}});const r=t=>{const n=()=>{throw new Error(t||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:n,apply:n})}},7669:function(t,n,e){function r(t){const{category_id:n,icon_id:e,category_name:r}=t||{};return{category_id:n,icon_id:e,category_name:r}}e.d(n,{Hm:function(){return l}});var i=e(8803),o=e(6113),c=e(8511),s=e(4241),u=e(1856);const a="Категория",d={icon_id:{validators:[[i.U,(0,o.n)(a,"icon_id")]],required:!0},category_name:{validators:[[(0,c.X)(3,20),(0,s.u)(a,"category_name",3,20)]],required:!0}},f={category_id:{validators:[[i.U,(0,o.n)(a,"category_id")]],required:!0},...d},l=t=>(0,u.W)(t,f,r,a)},2182:function(t,n,e){e.d(n,{_X:function(){return r._X}});var r=e(9882)},9882:function(t,n,e){function r(t){return n=>void 0===n||t(n)}function i(t){return"boolean"==typeof t}function o(t,n){return`Свойство сущности ${t} "${n}" должно быть undefined или boolean`}function c(t){const{task_id:n,title:e,priority_id:r,category_id:i,description:o,expire_date_time:c,deleted:s,completed:u}=t||{};return{task_id:n,title:e,priority_id:r,category_id:i,description:o,expire_date_time:c,deleted:s,completed:u}}e.d(n,{_X:function(){return c},h4:function(){return p}});var s=e(8511),u=e(4241),a=e(8803),d=e(6113),f=e(1856);const l="Задача",y={title:{validators:[[(0,s.X)(3,100),(0,u.u)(l,"title",3,100)]],required:!0},priority_id:{validators:[[a.U,(0,d.n)(l,"priority_id")]],required:!0},category_id:{validators:[[r(a.U),function(t,n){return`Свойство сущности ${t} "${n}" должно быть undefined или целым числом`}(l,"category_id")]]},description:{validators:[[r((0,s.X)(3,1e3)),(0,u.u)(l,"description",3,1e3)]]},expire_date_time:{validators:[[r((function(t){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(t)})),`Свойство сущности ${l} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[r(i),o(l,"deleted")]]},completed:{validators:[[r(i),o(l,"completed")]]}},g={task_id:{validators:[[a.U,(0,d.n)(l,"task_id")]],required:!0},...y},p=t=>(0,f.W)(t,g,c,l)},3776:function(t,n,e){function r(t,n){return function(e){const r=t(e);return r.error?(i.kg.error(r.error.message,r.error.data),r):n(e)}}e.d(n,{$:function(){return r}});var i=e(6790)},1578:function(t,n,e){function r(t,n){return i.kg.error(n,t),{error:{message:n,data:t}}}e.d(n,{S:function(){return r}});var i=e(6790)},1:function(t,n,e){e.d(n,{i:function(){return a}});var r=e(6790),i=e(1578),o=e(7669),c=e(4478),s=e(3776),u=e(3600);const a=(0,s.$)(o.Hm,(function(t){const n=r.h.getState();if(function(t,n){return Boolean(t.categories.byId[n.category_id])}(n,t))return(0,i.S)(t,"Добавление дубликата категории");if((0,u.t)(n,t))return(0,i.S)(t,"Добавление категории с уже существующим именем категории");if((0,c.I)(n,t))return(0,i.S)(t,"Добавление категории с не существующей иконкой");const e=function(t,n){const{category_id:e}=n;return{...t,categories:{...t.categories,ids:[...t.categories.ids,e],byId:{...t.categories.byId,[e]:n}}}}(n,t);return e!==n&&r.h.setState(e),{result:t}}))},9976:function(t,n,e){e.d(n,{u:function(){return s}});var r=e(6790),i=e(1578),o=e(7669),c=e(5096);const s=(0,e(3776).$)(o.Hm,(function(t){const n=r.h.getState();if(function(t,n){return Boolean(void 0===t.categories.byId[n.category_id])||!(0,c.v)(t.categories.byId[n.category_id],n)}(n,t))return(0,i.S)(t,"Категория не найдена");if(function(t,n){return Boolean(Object.values(t.tasks.byId).find((t=>t.category_id===n.category_id)))}(n,t))return(0,i.S)(t,"Удаление категории, которая используется");const e=function(t,n){const{category_id:e}=n,{[e]:r,...i}=t.categories.byId;return{...t,categories:{...t.categories,ids:t.categories.ids.filter((t=>t!==e)),byId:{...i}}}}(n,t);return e!==n&&r.h.setState(e),{result:t}}))},3600:function(t,n,e){function r(t,n){for(const e in t.categories.byId)if(t.categories.byId[e].category_name===n.category_name&&Number(e)!==n.category_id)return!0;return!1}e.d(n,{t:function(){return r}})},4478:function(t,n,e){function r(t,n){return Boolean(void 0===t.icons.byId[n.icon_id])}e.d(n,{I:function(){return r}})},8850:function(t,n,e){e.d(n,{y:function(){return d}});var r=e(5096),i=e(6790),o=e(1578),c=e(7669),s=e(3776),u=e(4478),a=e(3600);const d=(0,s.$)(c.Hm,(function(t){const n=i.h.getState();if((0,r.v)(t,n.categories.byId[t.category_id]))return{result:t};if(function(t,n){return Boolean(void 0===t.categories.byId[n.category_id])}(n,t))return(0,o.S)(t,"Категория не найдена");if((0,u.I)(n,t))return(0,o.S)(t,"Модификация категории с не существующей иконкой");if((0,a.t)(n,t))return(0,o.S)(t,"Попытка изменить имя категории на имя уже существующей категории");const e=function(t,n){const{category_id:e}=n;return{...t,categories:{...t.categories,byId:{...t.categories.byId,[e]:n}}}}(n,t);return e!==n&&i.h.setState(e),{result:t}}))},4321:function(t,n,e){function r(t){const{icon_id:n,file_name:e}=t||{};return{icon_id:n,file_name:e}}e.d(n,{U:function(){return y}});var i=e(6790),o=e(8803),c=e(6113),s=e(8511),u=e(4241),a=e(1856);const d="Иконка",f={icon_id:{validators:[[o.U,(0,c.n)(d,"icon_id")]],required:!0},file_name:{validators:[[(0,s.X)(3,20),(0,u.u)(d,"fole_name",3,20)]],required:!0}};var l=e(1578);const y=(0,e(3776).$)((t=>(0,a.W)(t,f,r,d)),(function(t){const n=i.h.getState();if(function(t,n){return Boolean(t.icons.ids.indexOf(n.icon_id)>-1)}(n,t))return(0,l.S)(t,"Добавление дубликата идентификатора иконки");if(function(t,n){for(const e in t.icons.byId)if(t.icons.byId[e].file_name===n.file_name)return!0;return!1}(n,t))return(0,l.S)(t,"Добавление иконки с уже существующим именем файла иконки");const e=function(t,n){const{icon_id:e}=n;return{...t,icons:{...t.icons,ids:[...t.icons.ids,e],byId:{...t.icons.byId,[e]:n}}}}(n,t);return e!==n&&i.h.setState(e),{result:t}}))},6790:function(t,n,e){function r(t,n){c=t,s=n}e.d(n,{VE:function(){return o},eR:function(){return r},h:function(){return c},kg:function(){return s}});var i=e(8398);const o={icons:{byId:{},ids:[]},priorities:{byId:{},ids:[]},categories:{byId:{},ids:[]},tasks:{byId:{},ids:[]}};let c=(0,i.K)("Попытка использовать TasksStore до его инициализации!"),s=(0,i.K)("Попытка использовать logger в TasksStore до его инициализации!")},4687:function(t,n,e){function r(t){return/^#([0-9A-Fa-f]{3}){1,2}$/.test(t)}function i(t){const{priority_id:n,priority_name:e,color:r}=t||{};return{priority_id:n,priority_name:e,color:r}}e.d(n,{O:function(){return g}});var o=e(6790),c=e(1578),s=e(8803),u=e(6113);const a=t=>`Свойство сущности ${t} "color" должно содержать описание цвета в формате HEX`;var d=e(1856);const f=["низкий","нормальный","повышенный","высокий"],l="Приоритет",y={priority_id:{validators:[[s.U,(0,u.n)(l,"priority_id")]],required:!0},priority_name:{validators:[[t=>f.includes(t),`Свойство сущности ${l} "priority_name" должно быть одним из ${JSON.stringify(f)}`]],required:!0},color:{validators:[(t=>[r,a(t)])(l)],required:!0}};const g=(0,e(3776).$)((t=>(0,d.W)(t,y,i,l)),(function(t){const n=o.h.getState();if(function(t,n){return Boolean(t.priorities.ids.indexOf(n.priority_id)>-1)}(n,t))return(0,c.S)(t,"Добавление дубликата приоритета");if(function(t,n){for(const e in t.priorities.byId)if(t.priorities.byId[e].priority_name===n.priority_name)return!0;return!1}(n,t))return(0,c.S)(t,"Добавление приоритета с уже существующим именем");const e=function(t,n){const{priority_id:e}=n;return{...t,priorities:{...t.priorities,ids:[...t.priorities.ids,e],byId:{...t.priorities.byId,[e]:n}}}}(n,t);return e!==n&&o.h.setState(e),{result:t}}))},3538:function(t,n,e){e.d(n,{g:function(){return a}});var r=e(6790),i=e(9882),o=e(1578),c=e(5371),s=e(3022),u=e(7561);const a=(0,e(3776).$)(i.h4,(function(t){const n=r.h.getState();if(function(t,n){return Boolean(t.tasks.byId[n.task_id])}(n,t))return(0,o.S)(t,"Добавление дубликата задачи");if((0,c.M)(n,t))return(0,o.S)(t,"Добавление задачи с не существующим приоритетом");if((0,s.Q)(n,t))return(0,o.S)(t,"Добавление задачи с не существующей категорией");const e=function(t,n){const{tasks:e}=t,{task_id:r}=n,i=(0,u.f)(n);return{...t,tasks:{...e,ids:[...e.ids,r],byId:{...e.byId,[r]:i}}}}(n,t);return e!==n&&r.h.setState(e),{result:t}}))},7561:function(t,n,e){function r(t){const{task_id:n,title:e,priority_id:r,category_id:i,description:o,expire_date_time:c,deleted:s,completed:u}=t;if(c){const n=Date.parse(c),e=new Date(n),r=new Date(e.getFullYear(),e.getMonth(),e.getDay()).valueOf();return{...t,expire_date_time:c,expire_date_ts:r,expire_date_time_ts:n}}return{task_id:n,title:e,priority_id:r,category_id:i,description:o,deleted:s,completed:u,expire_date_time:void 0,expire_date_ts:void 0,expire_date_time_ts:void 0}}e.d(n,{f:function(){return r}})},3022:function(t,n,e){function r(t,n){return Boolean(void 0!==n.category_id&&void 0===t.categories.byId[n.category_id])}e.d(n,{Q:function(){return r}})},5371:function(t,n,e){function r(t,n){return Boolean(void 0===t.priorities.byId[n.priority_id])}e.d(n,{M:function(){return r}})},1276:function(t,n,e){e.d(n,{x:function(){return d}});var r=e(6790),i=e(9882),o=e(1578),c=e(5371),s=e(3022),u=e(3776),a=e(7561);const d=(0,u.$)(i.h4,(function(t){const n=r.h.getState();if(function(t,n){return void 0===t.tasks.byId[n.task_id]}(n,t))return(0,o.S)(t,"Задача не найдена");if((0,c.M)(n,t))return(0,o.S)(t,"Обновление задачи с не существующим приоритетом");if((0,s.Q)(n,t))return(0,o.S)(t,"Обновление задачи с не существующей категорией");const e=function(t,n){const{tasks:e}=t,{task_id:r}=n;return{...t,tasks:{...e,byId:{...e.byId,[r]:(0,a.f)(n)}}}}(n,t);return e!==n&&r.h.setState(e),{result:t}}))},7029:function(t,n,e){function r(t){void 0===t&&(t=Date.now());const n=new Uint8Array(10);!function(t){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(t);if("function"==typeof require){const n=require("crypto").randomBytes(t.length);return t.set(n),t}throw new Error("Secure random number generation is not supported in this environment.")}(n);const e=t.toString(16).padStart(12,"0"),r=function(t){let n="";for(let e=0;e<t.length;e++){const r=t[e].toString(16);n+=2===r.length?r:"0"+r}return n}(n);return`${e.substring(0,8)}-${e.substring(8)}-${r.substring(0,4)}-${r.substring(4,8)}-${r.substring(8)}`}e.d(n,{S:function(){return r}})},8803:function(t,n,e){function r(t){return"number"==typeof t&&Number.isInteger(t)}e.d(n,{U:function(){return r}})},4793:function(t,n,e){function r(t){return"string"==typeof t}e.d(n,{H:function(){return r}})},6307:function(t,n,e){function r(t){return n=>t.includes(n)}e.d(n,{K:function(){return r}})},8511:function(t,n,e){function r(t,n){return void 0===n&&(n=65536),e=>"string"==typeof e&&e.length>=t&&e.length<=n}e.d(n,{X:function(){return r}})},6113:function(t,n,e){e.d(n,{n:function(){return r}});const r=(t,n)=>`Свойство сущности ${t} "${n}" должно быть целым числом`},2772:function(t,n,e){function r(t,n){return`Свойство сущности ${t} "${n}" должно быть значением из списка`}e.d(n,{G:function(){return r}})},2244:function(t,n,e){function r(t,n){return`Свойство сущности ${t} "${n}" должно быть строкой`}e.d(n,{E:function(){return r}})},4241:function(t,n,e){e.d(n,{u:function(){return r}});const r=(t,n,e,r)=>`Свойство сущности ${t} "${n}" должно быть строкой длиной от ${e} до ${r} символов`},1856:function(t,n,e){e.d(n,{W:function(){return r}});const r=(t,n,e,r)=>{if(!1===function(t){return"object"==typeof t&&null!==t}(t))return{error:{message:`Сущность "${r}" должна быть объектом`,data:t}};const i=t,o=Object.keys(n);for(let e=0;e<o.length;e++){const c=o[e],s=n[c];if(!0===s.required&&void 0===i[c])return{error:{message:`Свойство "${c}" сущности ${r} отсутствует`,data:t}};for(let n=0;n<s.validators.length;n++){const e=s.validators[n];if(!1===e[0](i[c]))return{error:{message:e[1],data:t}}}}return{result:e(i)}}}}]);