!function(){"use strict";var e={793:function(e){function t(e){try{return JSON.stringify(e)}catch(e){return'"[Circular]"'}}e.exports=function(e,r,s){var n=s&&s.stringify||t;if("object"==typeof e&&null!==e){var i=r.length+1;if(1===i)return e;var a=new Array(i);a[0]=n(e);for(var o=1;o<i;o++)a[o]=n(r[o]);return a.join(" ")}if("string"!=typeof e)return e;var c=r.length;if(0===c)return e;for(var l="",d=0,u=-1,g=e&&e.length||0,f=0;f<g;){if(37===e.charCodeAt(f)&&f+1<g){switch(u=u>-1?u:0,e.charCodeAt(f+1)){case 100:case 102:if(d>=c)break;if(null==r[d])break;u<f&&(l+=e.slice(u,f)),l+=Number(r[d]),u=f+2,f++;break;case 105:if(d>=c)break;if(null==r[d])break;u<f&&(l+=e.slice(u,f)),l+=Math.floor(Number(r[d])),u=f+2,f++;break;case 79:case 111:case 106:if(d>=c)break;if(void 0===r[d])break;u<f&&(l+=e.slice(u,f));var p=typeof r[d];if("string"===p){l+="'"+r[d]+"'",u=f+2,f++;break}if("function"===p){l+=r[d].name||"<anonymous>",u=f+2,f++;break}l+=n(r[d]),u=f+2,f++;break;case 115:if(d>=c)break;u<f&&(l+=e.slice(u,f)),l+=String(r[d]),u=f+2,f++;break;case 37:u<f&&(l+=e.slice(u,f)),l+="%",u=f+2,f++,d--}++d}++f}if(-1===u)return e;u<g&&(l+=e.slice(u));return l}},874:function(e,t,r){const s=r(793);e.exports=u;const n=function(){function e(e){return void 0!==e&&e}try{return"undefined"!=typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{},i={mapHttpRequest:y,mapHttpResponse:y,wrapRequestSerializer:h,wrapResponseSerializer:h,wrapErrorSerializer:h,req:y,res:y,err:m,errWithCause:m};function a(e,t){return"silent"===e?1/0:t.levels.values[e]}const o=Symbol("pino.logFuncs"),c=Symbol("pino.hierarchy"),l={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function d(e,t){const r={logger:t,parent:e[c]};t[c]=r}function u(e){(e=e||{}).browser=e.browser||{};const t=e.browser.transmit;if(t&&"function"!=typeof t.send)throw Error("pino: transmit option must have a send function");const r=e.browser.write||n;e.browser.write&&(e.browser.asObject=!0);const s=e.serializers||{},i=function(e,t){if(Array.isArray(e))return e.filter((function(e){return"!stdSerializers.err"!==e}));return!0===e&&Object.keys(t)}(e.browser.serialize,s);let c=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(c=!1);const m=Object.keys(e.customLevels||{}),y=["error","fatal","warn","info","debug","trace"].concat(m);"function"==typeof r&&y.forEach((function(e){r[e]=r})),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");const h=e.level||"info",v=Object.create(r);v.log||(v.log=_),function(e,t,r){const s={};t.forEach((e=>{s[e]=r[e]?r[e]:n[e]||n[l[e]||"log"]||_})),e[o]=s}(v,y,r),d({},v),Object.defineProperty(v,"levelVal",{get:function(){return a(this.level,this)}}),Object.defineProperty(v,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,g(this,w,v,"error"),g(this,w,v,"fatal"),g(this,w,v,"warn"),g(this,w,v,"info"),g(this,w,v,"debug"),g(this,w,v,"trace"),m.forEach((e=>{g(this,w,v,e)}))}});const w={transmit:t,serialize:i,asObject:e.browser.asObject,formatters:e.browser.formatters,levels:y,timestamp:b(e)};return v.levels=function(e){const t=e.customLevels||{},r=Object.assign({},u.levels.values,t),s=Object.assign({},u.levels.labels,function(e){const t={};return Object.keys(e).forEach((function(r){t[e[r]]=r})),t}(t));return{values:r,labels:s}}(e),v.level=h,v.setMaxListeners=v.getMaxListeners=v.emit=v.addListener=v.on=v.prependListener=v.once=v.prependOnceListener=v.removeListener=v.removeAllListeners=v.listeners=v.listenerCount=v.eventNames=v.write=v.flush=_,v.serializers=s,v._serialize=i,v._stdErrSerialize=c,v.child=function(r,n){if(!r)throw new Error("missing bindings for child Pino");n=n||{},i&&r.serializers&&(n.serializers=r.serializers);const a=n.serializers;if(i&&a){var o=Object.assign({},s,a),c=!0===e.browser.serialize?Object.keys(o):i;delete r.serializers,f([r],c,o,this._stdErrSerialize)}function l(e){this._childLevel=1+(0|e._childLevel),this.bindings=r,o&&(this.serializers=o,this._serialize=c),t&&(this._logEvent=p([].concat(e._logEvent.bindings,r)))}l.prototype=this;const u=new l(this);return d(this,u),u.level=this.level,u},t&&(v._logEvent=p()),v}function g(e,t,r,i){if(e[i]=a(e.level,r)>a(i,r)?_:r[o][i],!t.transmit&&e[i]===_)return;e[i]=function(e,t,r,i){return c=e[o][i],function(){const o=t.timestamp(),l=new Array(arguments.length),d=Object.getPrototypeOf&&Object.getPrototypeOf(this)===n?n:this;for(var u=0;u<l.length;u++)l[u]=arguments[u];if(t.serialize&&!t.asObject&&f(l,this._serialize,this.serializers,this._stdErrSerialize),t.asObject||t.formatters?c.call(d,function(e,t,r,n,i={}){const{level:a=(()=>e.levels.values[t]),log:o=(e=>e)}=i;e._serialize&&f(r,e._serialize,e.serializers,e._stdErrSerialize);const c=r.slice();let l=c[0];const d={};n&&(d.time=n),d.level=a(t,e.levels.values[t]);let u=1+(0|e._childLevel);if(u<1&&(u=1),null!==l&&"object"==typeof l){for(;u--&&"object"==typeof c[0];)Object.assign(d,c.shift());l=c.length?s(c.shift(),c):void 0}else"string"==typeof l&&(l=s(c.shift(),c));return void 0!==l&&(d.msg=l),o(d)}(this,i,l,o,t.formatters)):c.apply(d,l),t.transmit){const s=t.transmit.level||e._level,n=r.levels.values[s],c=r.levels.values[i];if(c<n)return;!function(e,t,r){const s=t.send,n=t.ts,i=t.methodLevel,a=t.methodValue,o=t.val,c=e._logEvent.bindings;f(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=n,e._logEvent.messages=r.filter((function(e){return-1===c.indexOf(e)})),e._logEvent.level.label=i,e._logEvent.level.value=a,s(i,e._logEvent,o),e._logEvent=p(c)}(this,{ts:o,methodLevel:i,methodValue:c,transmitLevel:s,transmitValue:r.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:a(e._level,r)},l)}};var c}(e,t,r,i);const l=function(e){const t=[];e.bindings&&t.push(e.bindings);let r=e[c];for(;r.parent;)r=r.parent,r.logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==l.length&&(e[i]=function(e,t){return function(){return t.apply(this,[...e,...arguments])}}(l,e[i]))}function f(e,t,r,s){for(const n in e)if(s&&e[n]instanceof Error)e[n]=u.stdSerializers.err(e[n]);else if("object"==typeof e[n]&&!Array.isArray(e[n]))for(const s in e[n])t&&t.indexOf(s)>-1&&s in r&&(e[n][s]=r[s](e[n][s]))}function p(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function m(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)void 0===t[r]&&(t[r]=e[r]);return t}function b(e){return"function"==typeof e.timestamp?e.timestamp:!1===e.timestamp?v:w}function y(){return{}}function h(e){return e}function _(){}function v(){return!1}function w(){return Date.now()}u.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},u.stdSerializers=i,u.stdTimeFunctions=Object.assign({},{nullTime:v,epochTime:w,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),e.exports.default=u,e.exports.pino=u}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var n=s.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=s[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){const e=self,t=200,s=206,n="handleGetRequest:",i="assets",a="Content-Security-Policy";const o="/api/",c="get_tasks",l="[ SW ]",d={"Content-Type":"application/json; charset=utf-8"},u="RELOAD_PAGE",g="SKIP_WAITING",f="create_category",p="update_category",m="delete_category",b="create_task",y="update_task",h="delete_task",_="clear_tasks",v="import_tasks";const w="tasks",k="kv-storage";async function j(t){if(t.icons&&t.icons.length>0){let r;const s=JSON.stringify(t),n=await caches.open(k),i=await n.match(w);void 0!==i&&(r=await i.text()),void 0!==i&&r===s||(e.logger.debug("📥 сохраняем состояние в кэш",t),await n.put(w,new Response(s,{headers:new Headers({...d,"Content-Length":String(s.length)})})))}}let S={tasks:[],categories:[],priorities:[],icons:[]};function x(){return e.logger.debug("getState",S),S}async function O(t){S=t,e.logger.debug("setState",t),await j(t)}function E(e){const t=new Date;return t.setDate(t.getDate()+e),t.toISOString()}const $={icons:[{icon_id:1,file_name:"page.png"},{icon_id:2,file_name:"home.png"},{icon_id:3,file_name:"other.png"},{icon_id:4,file_name:"warning.png"},{icon_id:5,file_name:"alert.png"},{icon_id:6,file_name:"ball.png"},{icon_id:7,file_name:"bug.png"},{icon_id:8,file_name:"cart.png"},{icon_id:9,file_name:"favorite.png"},{icon_id:10,file_name:"inbox.png"},{icon_id:11,file_name:"life.png"},{icon_id:12,file_name:"mail.png"},{icon_id:13,file_name:"twitter.png"},{icon_id:14,file_name:"note.png"}],priorities:[{priority_id:1,priority_name:"низкий"},{priority_id:2,priority_name:"нормальный"},{priority_id:3,priority_name:"повышенный"},{priority_id:4,priority_name:"высокий"}],categories:[{category_id:1,icon_id:3,category_name:"Работа"},{category_id:2,icon_id:2,category_name:"Дом"},{category_id:3,icon_id:6,category_name:"Здоровье"},{category_id:4,icon_id:7,category_name:"Фигня"}],tasks:[{task_id:1,priority_id:1,category_id:1,title:"Todo1",deleted:!1},{task_id:2,priority_id:2,category_id:2,title:"Hover your mouse over a project or item and click the icon on the right side of the item for more",expire_date_time:E(-1)},{task_id:3,priority_id:3,category_id:3,title:"Todo3",expire_date_time:function(e){const t=new Date;return t.setMinutes(t.getMinutes()+e),t.toISOString()}(1)},{task_id:4,priority_id:4,category_id:1,title:"Todo4",expire_date_time:E(1),completed:!0,deleted:!1},{task_id:5,priority_id:4,title:"Todo5"},{task_id:6,category_id:4,priority_id:4,title:"Todo6",completed:!0,deleted:!1},{task_id:7,priority_id:2,title:"Todo7",completed:!0,deleted:!0}]};async function z(){let t=x();const r=await caches.open(k),s=await r.match(w);if(t.icons&&0===t.icons.length){if(e.logger.debug("в хранилище sw нет данных"),void 0!==s){e.logger.debug("данные sw обнаружены в кэше");const r=await s.json();if(e.logger.debug("получили данные хранилища sw из кэша",r),r)return t=r,await O(t),t}if(e.logger.debug("в кэше нет данныx хранилища sw"),t.icons&&0===t.icons.length)return e.logger.debug("загрузкаем в хранилище данные sw по-умолчанию"),await O($),$}return s||await j(t),t}async function I(){await async function(){const t=await caches.open(i);let r=(await t.keys()).map((e=>new URL(e.url).pathname));const s=r.filter((t=>!e.assets.includes(t)));s.length>0&&(e.logger.debug("activate: найденные кэше assets",r),await Promise.all(s.map((async s=>{e.logger.debug("activate: удаляем asset, которого нет в новой версии сервис-воркера",s),await t.delete(s),r=r.filter((e=>e!==s))}))));const n=e.assets.filter((e=>!r.includes(e)));n.length>0&&(e.logger.debug("activate: загрузкаем assets в кэш",n),await t.addAll(n),e.logger.debug("activate: ✅ загрузка assets в кэш завершена"))}(),await z(),e.logger.debug(`activated: version: ${e.VERSION} id: ${e.id}`),await async function(){e.logger.debug(`отправляем сообщение всем клиентам ${u}`),e.clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({type:u})))}))}()}var T=r(874);const L="debug",A=()=>{};function R(e,t,r){const s="matchMedia"in globalThis&&globalThis.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return[r.length>0?r.map((e=>Object.values(e))).flat().map((e=>`%c${e}`)).join(""):"",...r.length>0?r.map((e=>Object.values(e))).flat().map((r=>`color: ${e[r]?.[t||s]||"black"}; font-weight: bold;`)):""].filter(Boolean)}const{info:q,warn:N,error:C,debug:W}=console,P={debug:W,info:q,warn:N,error:C};class D{pinoInstance;colorSchema;defaultLightSchema;constructor(e,t,r,s){if(void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r=void 0),void 0===s&&(s=void 0),this.colorSchema=t,this.defaultLightSchema=r,s)this.pinoInstance=s;else{const t=(0,T.pino)({browser:{serialize:!1,asObject:!1,transmit:{level:L,send:(e,t)=>{const r=T.pino.levels.values[this.pinoInstance.level];if(T.pino.levels.values[e]>=r){const r=t.messages.flat();!function(e,t,r){const s=P[e];s&&(t.length>0?s(...t,...r):s(...r))}(e,R(this.colorSchema,this.defaultLightSchema,t.bindings),r)}}},write:A}});this.pinoInstance=e?t.child(e):t}this.pinoInstance.level=L}info(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.pinoInstance.info(t)}warn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.pinoInstance.warn(t)}error(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.pinoInstance.error(t)}debug(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.pinoInstance.debug(t)}child(e){const t=this.pinoInstance.child(e);return new D(e,this.colorSchema,this.defaultLightSchema,t)}}const U=e=>{const t=()=>{throw new Error(e||"Попытка обратиться к неинициализированному сервису.")};return new Proxy((()=>{}),{get:t,apply:t})};let J=U(`Попытка обратиться к неинициализированному сервису ${"swLogger"}`);J=new D({layer:l},{[l]:{light:"#007aff",dark:"#9982f6"}},void 0);let M=(e=>U(`Попытка обратиться к неинициализированному DI сервиса ${e}`))("browser");const V=["/my-tasks/alert.476b00abda902b398be7.png","/my-tasks/android-chrome-192x192.1cfc30bbcbf340fc741d.png","/my-tasks/android-chrome-512x512.558e975c145ffb2a28fd.png","/my-tasks/android-chrome-maskable-192x192.126708023a549b771f76.png","/my-tasks/android-chrome-maskable-512x512.d40a692f812ed7f5e7e3.png","/my-tasks/app.c53f2bf26fb176ef21ef.js","/my-tasks/apple-touch-icon.7cb6aa9a5fc2e73f0df5.png","/my-tasks/ball.3d996bafa729a1d3f580.png","/my-tasks/budarin.579fe5ae40e48f359c5f.js","/my-tasks/bug.83b52ad3ded9ef1fbd18.png","/my-tasks/cart.2d640112b4b86b627ff7.png","/my-tasks/error.8ad17092b67f41ed6f08.mp3","/my-tasks/expired.45d759abb485d88b78aa.svg","/my-tasks/favicon-32x32.88ac8115acd8f90a85e8.png","/my-tasks/favicon.31159ba4d345a313888e.ico","/my-tasks/favorite.7f0174c25660ef72df60.png","/my-tasks/folder_red.66f2d7c840bd3b9aed95.png","/my-tasks/help.83136d93df7a9872ae11.svg","/my-tasks/home.3e40fe2b97b19c75dfaf.png","/my-tasks/icon.3e6067cba439e4ebbe1b.svg","/my-tasks/inbox.58a834f614e341f9c578.png","/my-tasks/install-pwa.3d7d93affc3b234a02a9.png","/my-tasks/life.5896aaa56394aa0273b3.png","/my-tasks/mail.4a4239588f1b0d37bcfc.png","/my-tasks/main.98d335d6ad22ea899585.js","/my-tasks/next.4b695e6dc3fabdcc84b4.png","/my-tasks/note.8e112a51a84fa9c09b11.png","/my-tasks/note5.abc5ade9f6cd6928e96d.png","/my-tasks/npms.7150913d063fac613b5d.js","/my-tasks/other.66c872e04e2846cafa68.png","/my-tasks/page.9d1fc4484b1e5929b7ee.png","/my-tasks/react.0e395b1e4effc40cc25d.js","/my-tasks/refresh.7c9f0768269a6bbec081.png","/my-tasks/runtime.e7d4b2f4686797651066.js","/my-tasks/settings.231ef2d68a51da6cad41.svg","/my-tasks/share.ffc5f2b689d17d39785e.svg","/my-tasks/state.c56984d48249544ade49.svg","/my-tasks/today.141e3d87afbd71da541c.png","/my-tasks/trash.3e03c195726c2cccdc94.gif","/my-tasks/twitter.5556cda0273e796d6a65.png","/my-tasks/warning.4f48c087dcbbdb3bd268.png","/my-tasks/manifest.c1704a973f934cb56785f497f5fb9683.webmanifest","/my-tasks/offline.1ce1f2bfe85a277747f1ec0d6d82a4b2.html"];function B(t){e.logger.error("не обработанная ошибка сервисворкера",t)}function G(e,t,r){return new Response(JSON.stringify({id:e,error:{code:500,message:t,data:r}}),{headers:d,status:200})}function Z(){return M.navigator.userAgent.toLowerCase().includes("chrome")||M.navigator.userAgent.toLowerCase().includes("chromium")}const H="/my-tasks/",K=e=>e.startsWith(`${H}offline.`)&&e.endsWith(".html"),F="default-src 'none'; base-uri 'none'; object-src 'none'; connect-src 'self'; media-src 'self'; manifest-src 'self'; img-src 'self' data: ; worker-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha384-oULjRiaR7R6nvCPg6Sw2W1cQSG9-IB1d3pMwNafpGnxROqD92PL8swF7h4tYVBuv' 'sha384-Ul13hXxd26CuGKdSBqjdxgWgvOJ0LujQd8PL_Qms8nl8pC94Ey-zBvlEhpvMv9Na' 'sha384-TMg2vXCz1pe78f0G_8B9RdKdv-7zh9C3kUwiuVJ3dEq9f-662JOGLGwxDgfWZq1q' 'sha384-WRZ93G5O-srWhZtk7GNU2jKBvvDxjmybCdIhtYW5i6-ksBApjgBXSWFTbzz0uTo1' 'sha384-bYkYCMxw_9t2TKqcoxdJAsTWc2ASc3EVpKc4-algjE-VZN67KRSeOdDcuZ6RjENv' 'sha384-TZEZHIBS8ZqwhEoOEzW8xa5IkpcdeydqdCZn3H_v3aCxcSHCiXR1hrnctJDnL90k' 'sha384-8Wl-NqzOMpToEc3N2iF52P0PBiJT_SzcPGluZ17n0wPxlK-XDUqrU5w_xWraKAJB' 'sha384-GjQCLM3ybowjVNhmO4YE2UloyIZZm6Q8EOz1dXh0UV5RdIcHZxjJ5IreOg2Q7nJA'; font-src 'self' data:; require-trusted-types-for 'script'; trusted-types webpack-tt svg-policy default;";async function Q(r,o,c){const l=await caches.open(i),d=await l.match(o);if(d){if(K(o)&&!d.headers.get(a)){const t=d.clone(),r=new Headers(d.headers);r.set(a,F);try{let e=await d.text();Z()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""));const s=new Response(e,{status:t.status,statusText:t.statusText,headers:r});return await l.put(o,s.clone()),s}catch(t){return e.logger.error("Ошибка при обновлении CSP для кэшированного ответа:",t),d}}return d}return e.logger.debug(n,"не удалось найти в кэше - загрузкаем с сервера",c),async function(r,o){let c;const l=await fetch(r,{keepalive:!0});if(null===l.body)return l;const d=new Headers(l.headers);if(l.status===s){const e=await l.blob(),t=await e.arrayBuffer();c=new Response(t,{headers:d})}else{let e;K(r)?(e=await l.text(),d.set(a,F),Z()&&(e=e.replace(/<script id="tt"[\s\S]*?<\/script>/gi,""))):e=await l.blob(),c=new Response(e,{headers:d,status:l.status,statusText:l.statusText})}e.logger.debug(n,"загрузили ресурс с сервера",o);const u=c.status===t;if(!1===u)return e.logger.debug("⛔️",n,"статус загруженного ресурса не валиден",o,"-",l.status),l;u&&e.assets.includes(o)&&(e.logger.debug(n,"ресурс из assest - кладем в кэш",o),(await caches.open(i)).put(r,c.clone()));return e.logger.debug(n,"отдаем ресурс браузеру",o),c}(o,c)}function X(e){void 0===e&&(e=Date.now());const t=new Uint8Array(10);!function(e){if(void 0!==globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues)return globalThis.crypto.getRandomValues(e);if("function"==typeof require){const t=require("crypto").randomBytes(e.length);return e.set(t),e}throw new Error("Secure random number generation is not supported in this environment.")}(t);const r=e.toString(16).padStart(12,"0"),s=function(e){let t="";for(let r=0;r<e.length;r++){const s=e[r].toString(16);t+=2===s.length?s:"0"+s}return t}(t);return`${r.substring(0,8)}-${r.substring(8)}-${s.substring(0,4)}-${s.substring(4,8)}-${s.substring(8)}`}function Y(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()}function ee(e){return"number"==typeof e&&Number.isInteger(e)}const te=(e,t)=>`Свойство сущности ${e} "${t}" должно быть целым числом`;function re(e,t){return void 0===t&&(t=65536),r=>"string"==typeof r&&r.length>=e&&r.length<=t}const se=(e,t,r,s)=>`Свойство сущности ${e} "${t}" должно быть строкой длиной от ${r} до ${s} символов`;const ne=(e,t,r,s)=>{const n={error:{message:`Сущность "${s}" должна быть объектом`,data:e}};if(!1===function(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}(e))return n;const i=r(e);if(void 0===i)return n;const a=Object.keys(t);for(let r=0;r<a.length;r++){const n=a[r],o=t[n];if(!0===o.required&&void 0===i[n])return{error:{message:`Свойство "${n}" сущности ${s} отсутствует`,data:e}};for(let t=0;t<o.validators.length;t++){const r=o.validators[t];if(!1===r[0](i[n]))return{error:{message:r[1],data:e}}}}return{result:i}},ie="Категория";function ae(e){const{icon_id:t,category_name:r}=e||{};return{icon_id:Number(t),category_name:Y(r)}}const oe={icon_id:{validators:[[ee,te(ie,"icon_id")]],required:!0},category_name:{validators:[[re(3,20),se(ie,"category_name",3,20)]],required:!0}},ce=e=>ne(e,oe,ae,ie);function le(e){const{category_id:t,icon_id:r,category_name:s}=e||{};return{category_id:Number(t),icon_id:Number(r),category_name:Y(s)}}const de={category_id:{validators:[[ee,te(ie,"category_id")]],required:!0},...oe},ue=e=>ne(e,de,le,ie);function ge(e){return t=>void 0===t||e(t)}function fe(e){return"boolean"==typeof e}function pe(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или boolean`}const me="Задача",be=1e3;function ye(e){const{title:t,priority_id:r,category_id:s,description:n,expire_date_time:i,deleted:a,completed:o}=e||{};return{title:Y(t),priority_id:Number(r),category_id:s?Number(s):void 0,description:n,expire_date_time:i,deleted:a,completed:o}}const he={title:{validators:[[re(3,100),se(me,"title",3,100)]],required:!0},priority_id:{validators:[[ee,te(me,"priority_id")]],required:!0},category_id:{validators:[[ge(ee),function(e,t){return`Свойство сущности ${e} "${t}" должно быть undefined или целым числом`}(me,"category_id")]]},description:{validators:[[ge(re(3,be)),se(me,"description",3,be)]]},expire_date_time:{validators:[[ge((function(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e)})),`Свойство сущности ${me} "expire_date_time" должно быть датой в формате ISO`]]},deleted:{validators:[[ge(fe),pe(me,"deleted")]]},completed:{validators:[[ge(fe),pe(me,"completed")]]}},_e=e=>ne(e,he,ye,me);function ve(e){const{task_id:t,title:r,priority_id:s,category_id:n,description:i,expire_date_time:a,deleted:o,completed:c}=e||{};return{task_id:Number(t),title:Y(r),priority_id:Number(s),category_id:n?Number(n):void 0,description:i,expire_date_time:a,deleted:o,completed:c}}const we={task_id:{validators:[[ee,te(me,"task_id")]],required:!0},...he},ke=e=>ne(e,we,ve,me);var je=r.p+"476b00abda902b398be7.png",Se=r.p+"3d996bafa729a1d3f580.png",xe=r.p+"83b52ad3ded9ef1fbd18.png",Oe=r.p+"2d640112b4b86b627ff7.png",Ee=r.p+"7f0174c25660ef72df60.png",$e=r.p+"3e40fe2b97b19c75dfaf.png",ze=r.p+"58a834f614e341f9c578.png",Ie=r.p+"5896aaa56394aa0273b3.png",Te=r.p+"4a4239588f1b0d37bcfc.png",Le=r.p+"66c872e04e2846cafa68.png",Ae=r.p+"9d1fc4484b1e5929b7ee.png",Re=r.p+"141e3d87afbd71da541c.png",qe=r.p+"5556cda0273e796d6a65.png",Ne=r.p+"4f48c087dcbbdb3bd268.png",Ce=r.p+"66f2d7c840bd3b9aed95.png",We=r.p+"4b695e6dc3fabdcc84b4.png",Pe=r.p+"8e112a51a84fa9c09b11.png",De=r.p+"abc5ade9f6cd6928e96d.png";r.p,r.p,r.p,r.p,r.p,r.p,r.p;function Ue(e){return"string"==typeof e}function Je(e,t){return`Свойство сущности ${e} "${t}" должно быть строкой`}function Me(e){return t=>e.includes(t)}function Ve(e,t){return`Свойство сущности ${e} "${t}" должно быть значением из списка`}const Be="others",Ge="settings",Ze="about",He="store_state",Ke=[Ge,Ze,He];const Fe="Навигационный фильтр",Qe=(Je(Fe,"title"),Me(Ke),Ve(Fe,"title"),Je(Fe,"type"),"filter"),Xe="inbox",Ye="trash",et="expired",tt="completed",rt=[Xe,et,tt,Ye];const st="Навигационный фильтр",nt=(Je(st,"title"),Me(rt),Ve(st,"title"),Je(st,"type"),"calendar");const it="Навигационный фильтр",at=(te(it,"key"),Je(it,"type"),"category");const ot="Навигационный фильтр";te(ot,"key"),Je(ot,"type");function ct(e,t,r){return void 0===r&&(r=200),new Response(JSON.stringify({id:e,result:t}),{headers:d,status:r})}class lt{constructor(e,t){this.type=e,this.data=t}}async function dt(t,r){e.logger.debug("отправляем сообщение всем клиентам об изменении данных",r),e.clients.matchAll().then((e=>{e.forEach((e=>{e.id!==t&&e.postMessage(r)}))}))}const ut=`${b}:`;function gt(e,t){const r=_e(t);if(!r.error){const s=r.result;if(!e.priorities.find((e=>e.priority_id===s.priority_id)))return{error:{message:"Не известный идентификатор приоритета",data:t}};if(s.category_id){if(!e.categories.find((e=>e.category_id===s.category_id)))return{error:{message:"Не известный идентификатор категории",data:t}}}const n=e.tasks.at(-1)?.task_id||0,i={...s,task_id:n+1};return e.tasks.push(i),{result:i}}return r}const ft=`${y}:`;async function pt(t){const{request:r}=t;e.logger.debug(ft);const s=x(),{id:n,params:i}=await r.json(),a=function(e,t){const r=ke(t);if(r.result){const s=r.result,n=e.tasks.findIndex((e=>e.task_id===s.task_id));return-1===n?{error:{message:"Задача не найдена",data:t}}:e.priorities.find((e=>e.priority_id===s.priority_id))?s.category_id&&!e.categories.find((e=>e.category_id===s.category_id))?{error:{message:"Не известный идентификатор категории",data:t}}:(e.tasks[n]=s,{result:s}):{error:{message:"Не известный идентификатор приоритета",data:t}}}return r}(s,i);if(a.result){const r=a.result;return await O(s),e.logger.debug(`${ft} задача обновлена`,r),await dt(t.clientId,new lt(y,r)),ct(n,r)}return G(n,a.error.message,a.error.data)}function mt(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),s=Object.keys(t);return r.length===s.length&&r.every((r=>s.includes(r)&&mt(e[r],t[r])))}const bt=`${h}:`;async function yt(t){const{request:r}=t;e.logger.debug(bt);const s=x(),{id:n,params:i}=await r.json(),a=function(e,t){const r=ke(t);if(r.result){const s=r.result,n=e.tasks.findIndex((e=>mt(ve(e),ve(s))));return-1===n?{error:{message:"Задача не найдена",data:t}}:(e.tasks.splice(n,1),{result:s})}return r}(s,i);if(a.result){const r=a.result;return await O(s),e.logger.debug(`${bt} задача удалена`,r),await dt(t.clientId,new lt(h,r)),ct(n,r)}return G(n,a.error.message,a.error.data)}const ht="createCategory:";function _t(e,t){const r=ce(t);if(r.result){const s=r.result,n=e.categories.find((e=>e.category_name===s.category_name));if(n)return{error:{message:"Категория с таким именем уже существует",data:t}};if(!e.icons.find((e=>e.icon_id===s.icon_id)))return{error:{message:"Не известный идентификатор иконки",data:t}};const i=e.categories.at(-1)?.category_id||0,a={...s,category_id:i+1};return e.categories.push(a),{result:a}}return r}const vt="updateCategory:";async function wt(t){const{request:r}=t;e.logger.debug(vt);const s=x(),{id:n,params:i}=await r.json(),a=function(e,t){const r=ue(t);if(r.result){const s=r.result;let n=e.categories.findIndex((e=>e.category_id===s.category_id));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.categories.find((e=>e.category_name===s.category_name&&e.category_id!==s.category_id))?{error:{message:"Категория с таким именем уже существует",data:t}}:e.icons.find((e=>e.icon_id===s.icon_id))?(n=e.categories.findIndex((e=>e.category_id===s.category_id)),e.categories[n]=s,{result:s}):{error:{message:"Не известный идентификатор иконки",data:t}}}return r}(s,i);if(a.result){const r=a.result;return O(s),e.logger.debug(vt,"категория обновлена",r),await dt(t.clientId,new lt("update_category",r)),ct(n,r)}return G(n,a.error.message,a.error.data)}const kt="deleteCategory:";async function jt(t){const{request:r}=t;e.logger.debug(kt);const s=x(),{id:n,params:i}=await r.json(),a=function(e,t){const r=ue(t);if(r.result){const s=r.result,n=e.categories.findIndex((e=>mt(e,s)));return-1===n?{error:{message:"Категория не найдена",data:t}}:e.tasks.find((e=>e.category_id===s.category_id))?{error:{message:"Категория используется в задачах",data:t}}:(e.categories.splice(n,1),{result:s})}return r}(s,i);if(a.result){const r=a.result;return O(s),e.logger.debug(kt,"категория удалена",r),await dt(t.clientId,new lt("delete_category",r)),ct(n,r)}return G(n,a.error.message,a.error.data)}function St(e){const t=(r=e.tasks,"structuredClone"in globalThis?M.structuredClone(r):r);var r;return e.tasks=[],{result:t}}const xt=`${_}:`;const Ot=`${v}:`;function Et(t,r){switch(r){case c:return async function(e){const{request:t}=e,r=await z(),s=t.headers.get("x-request-id");return new Response(JSON.stringify({id:s,result:r}),{headers:d,status:200})}(t);case f:return async function(t){const{request:r}=t;e.logger.debug(ht,r);const s=x(),{id:n,params:i}=await r.json(),a=_t(s,i);if(a.result){const r=a.result;return await O(s),e.logger.debug(`${ht} категория создана`,r),await dt(t.clientId,new lt("create_category",r)),ct(n,r)}return G(n,a.error.message,a.error.data)}(t);case p:return wt(t);case m:return jt(t);case b:return async function(t){const{request:r}=t;e.logger.debug(ut);const s=x(),{id:n,params:i}=await r.json(),a=gt(s,i);if(a.result){const r=a.result;return await O(s),e.logger.debug(`${ut} задача создана`,r),await dt(t.clientId,new lt(b,r)),ct(n,r)}return G(n,a.error.message,a.error.data)}(t);case y:return pt(t);case h:return yt(t);case _:return async function(t){const{request:r}=t;e.logger.debug(xt);const s=x(),{id:n}=await r.json(),i=St(s);if(i.result){const r=i.result;return await O(s),e.logger.debug(`${xt} задачи удалены`,r),await dt(t.clientId,new lt(_)),ct(n,r)}return G(n,i.error.message,i.error.data)}(t);case v:return async function(t){const{request:r}=t,s={failed:{categories:[],tasks:[]},imported:{categories:[],tasks:[]}},n={categories:[]},{id:i,params:a}=await r.json();if(e.logger.debug(Ot,a),a){const e=x(),{tasks:r,categories:o}=a;if(!(r&&Array.isArray(r)&&o&&Array.isArray(o)))return G(i,"Не валидные данные");for(let t=0;t<r.length;t++){const i=r[t];let a;if(i.category_id){const t=o.find((e=>e.category_id===i.category_id));t&&(n.categories.includes(t.category_name)||(a=_t(e,t),a.error?s.failed.categories.push(a.error):s.imported.categories.push(a.result),n.categories.push(t.category_name)))}e.tasks.find((e=>e.title===i.title&&e.description===i.description&&e.priority_id===i.priority_id&&e.category_id===i.category_id&&e.completed==i.completed&&e.deleted==i.deleted&&e.expire_date_time==i.expire_date_time))?s.failed.tasks.push({message:"Задача уже существует",data:i}):(a=gt(e,i),a.error?s.failed.tasks.push(a.error):s.imported.tasks.push(a.result))}(s.imported.categories.length>0||s.imported.tasks.length>0)&&O(e);const c=s.imported;return(c.categories.length>0||c.tasks.length>0)&&await dt(t.clientId,new lt(v,s.imported)),ct(i,s)}return G(i,"Не удалось импортировать задачи")}(t);case"/log/info":case"/log/warn":case"/log/error":return async function(e){const{request:t}=e,r=(await t.json()).id||X();return new Response(JSON.stringify({id:r,result:"Ok"}),{headers:d,status:200})}(t);default:return Promise.resolve(new Response(JSON.stringify({error:{code:404,error:"Not found"}}),{headers:d,status:200}))}}var $t;$t=globalThis,M=$t,e.id=Date.now(),e.VERSION="1.11.23",e.assets=V,e.isRepearing=!1,e.logger=J,e.onerror=B,e.logger.debug("✅ init","version:",e.VERSION,"id:",e.id),e.addEventListener("message",(function(t){t.data&&t.data.type===g&&(e.logger.debug(`получил сообщение: ${g}`),e.skipWaiting())})),e.addEventListener("fetch",(async function(t){const r=t.request,s=function(e){const{pathname:t}=new URL(e);return t.startsWith(o)?t.slice(o.length):t}(r.url);switch(e.logger.debug("handleFetchEvent",{id:e.id,method:r.method,url:r.url}),r.method){case"GET":return async function(){const t=await caches.open(i),r=(await t.keys()).map((e=>new URL(e.url).pathname)),s=e.assets.filter((e=>!r.includes(e)&&!e.startsWith("/offline.")));if(s.length>0&&!e.isRepearing){e.isRepearing=!0,e.logger.warn("🆘 Кэш assets поврежден! Отсутствующие ресурсы: ",s);try{await t.addAll(s),e.logger.debug("✅ Кэш assets восстановлен!")}finally{e.isRepearing=!1}}}(),void await async function(t,r){if(e.logger.debug(n,r),"document"!==t.request.destination||r!==H)e.assets.includes(r)&&t.respondWith(Q(0,t.request.url,r));else{const r=e.assets.find((e=>e.startsWith(`${H}offline.`)&&e.endsWith(".html")))||"";t.respondWith(Q(0,r,r))}}(t,s);case"POST":return 0===x().icons.length&&await z(),void await async function(t,r){const s=Et(t,r);try{t.respondWith(s)}catch(t){e.logger.error("Ошибка ответа сервиса",t)}}(t,s);default:e.logger.error("Не допустимый http метод",t),t.respondWith(G(-1,"Не допустимый http метод"))}})),e.addEventListener("install",(async function(t){t.waitUntil(async function(){const t=await caches.open(i),r=(await t.keys()).map((e=>new URL(e.url).pathname));e.logger.debug("install: найденные кэше assets",r);const s=e.assets.filter((e=>!r.includes(e)));e.loadedAssets=s,s.length>0&&(e.logger.debug("install: загрузкаем assets в кэш",s),await t.addAll(s),e.logger.debug("install: ✅ загрузка assets в кэш завершена")),e.logger.debug(`installed: version: ${e.VERSION} id: ${e.id}`)}())})),e.addEventListener("activate",(async function(t){t.waitUntil(I()),t.waitUntil(e.clients.claim())}))}()}();