(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{6119:function(e,t,r){function n(e,t){const r=(0,s.useCallback)(t,[t]);(0,s.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function a(e){const[t,r]=(0,s.useState)(!1);return n(e,(0,s.useCallback)((e=>{r(e)}),[])),t}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}r.r(t),r.d(t,{default:function(){return j}});var i=r(1504),s=r(7294),c=r(6378);const u="undefined"!=typeof window?s.useLayoutEffect:s.useEffect;var d=r(348),l=r(8505),p=r(3379),h=r.n(p),m=r(7795),v=r.n(m),f=r(569),y=r.n(f),b=r(3565),g=r.n(b),L=r(9216),w=r.n(L),x=r(4589),A=r.n(x),k=r(5931),E={};E.styleTagTransform=A(),E.setAttributes=g(),E.insert=y().bind(null,"head"),E.domAPI=v(),E.insertStyleElement=w();h()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;var C=r(5893);let R;const T="(width > 828px)",M=(0,i.cn)("AppLayout-nav"),N=(0,i.cn)("AppLayout-overlay"),S=(0,i.cn)("AppLayout-content"),z=e=>{e.style.visibility=""};var j=function(e){function t(e){f.current&&(f.current=!1,g.current.removeEventListener("touchmove",O),g.current.removeEventListener("touchstart",V),e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",_),e.removeEventListener("touchend",Z))}function r(){A&&(L.current.style.height=`${g.current.firstChild.offsetHeight+1}px`)}const i=(0,s.useRef)(0),p=(0,s.useRef)(0),h=(0,s.useRef)(!1),m=(0,s.useRef)(!1),v=(0,s.useRef)(0),f=(0,s.useRef)(!1),y=(0,s.useRef)(0),b=(0,s.useRef)(.001),g=(0,s.useRef)(null),L=(0,s.useRef)(null),w=(0,s.useRef)(null),x=a(T),A=a("(height > 1024px)"),[k,E]=(0,s.useState)(!1),[j,P]=(0,s.useState)(!1),X=(0,s.useCallback)((()=>{g.current?.removeEventListener("transitionend",X);if(""===window.location.search)return;const e=function(e){const t=new URLSearchParams(window.location.search),r=t.get("type"),n=t.get("title"),a=t.get("key");switch(r){case c.M4:{const e=Number(a);return(0,c.Vz)({type:r,title:(0,d.D)(new Date(e)),key:e})}case c.Xz:{const e=Number(a);return(0,c.r9)({type:r,title:n,key:e})}case c.Lv:return(0,c.lO)({type:r,title:n,key:a});case c.th:return(0,c.Ci)({type:r,title:n,key:a});default:return{error:{message:"Значение фильтра в адресе не верное",data:{type:r,title:n,key:a}}}}}(window.location.pathname);e.result&&(0,l.q)(e.result)}),[]);(0,s.useEffect)((()=>(X(),window.addEventListener("popstate",X),()=>{window.removeEventListener("popstate",X)})),[X]);const $=(0,s.useCallback)((e=>{window.matchMedia(T).matches||g.current&&(clearTimeout(R),z(g.current),v.current=o(g.current),h.current=!0,y.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),b.current=Math.abs(0-y.current)/300,i.current=e.touches[0].clientX,p.current=e.touches[0].clientY,g.current.style.transition="")}),[]),_=(0,s.useCallback)((e=>{if(!h.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-i.current;if(!((r-i.current)/n>.8)){if(g.current&&w.current){let e=Math.max(v.current+n,-g.current.offsetWidth);e>0&&(e=0),g.current.style.transform=`translateX(${e}px)`,w.current.style.opacity=(e*b.current+y.current).toString()}return e.stopPropagation(),!1}}),[]),Z=(0,s.useCallback)((e=>{if(h.current&&g.current&&w.current){h.current=!1;const t=e.changedTouches[0].clientX-i.current,r=v.current+t;if(0===t||Math.abs(t)<=8)return;t>0&&r>.85*-g.current.offsetWidth||t<0&&r>.15*-g.current.offsetWidth?(E(!0),P(!0),g.current.style.cssText="",w.current.style.cssText=""):(g.current.style.cssText="",w.current.style.cssText="",E(!1),P(!1),R=setTimeout(D,1e3))}}),[]),O=(0,s.useCallback)((e=>{h.current||e.stopPropagation()}),[]),V=(0,s.useCallback)((e=>{e.stopPropagation()}),[]);n("(pointer: coarse)",(e=>{const r=L.current;if(r){if(e)return n=r,f.current||(f.current=!0,g.current.addEventListener("touchmove",O,{passive:!1}),g.current.addEventListener("touchstart",V),n.addEventListener("touchstart",$,{passive:!0}),n.addEventListener("touchmove",_,{passive:!0}),n.addEventListener("touchend",Z,{passive:!0})),()=>{t(r)};t(r)}var n})),A&&L.current&&!1===m.current&&(m.current=!0,r());const D=()=>{0!==o(g.current)&&(g.current.style.visibility="hidden")};!function(e,t,r,n){const a=(0,s.useRef)(t);u((()=>{a.current=t}),[t]),(0,s.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r,n])}("resize",(e=>{if(g.current&&w.current){r(),z(g.current);if(!1===matchMedia(T).matches){if(0===o(g.current)&&!1===j)return E(!0),void P(!0)}clearTimeout(R),R=setTimeout(D,1e3)}}),void 0,{passive:!0});const W=(0,s.useCallback)((e=>{if(g.current){clearTimeout(R);const e=0===o(g.current);!1===matchMedia(T).matches&&e&&(R=setTimeout(D,1e3),E(!1),P(!1))}}),[]),I=(0,s.useCallback)((e=>{if(g.current){clearTimeout(R);const e=0!==o(g.current);!1===matchMedia(T).matches&&(e&&z(g.current),E((e=>!e)),P((e=>!e)))}}),[]),U=(0,s.useCallback)(((e,t)=>{const r=new URLSearchParams(window.location.search);for(const[e,n]of Object.entries(t))r.set(e,String(n));const{protocol:n,host:a,pathname:o}=window.location,i=`${n}//${a}${o}?${r.toString()}`;history.pushState({},"",i),W(e);matchMedia(T).matches?X():g.current?.addEventListener("transitionend",X)}),[X,W]),{header:Y,nav:q,content:B}=(0,s.useMemo)((()=>e.children({isNavVisible:k,toggleNavVisibility:I,showToggleNavButton:!1===x,handleSelectNavItem:U})),[k,x,I,U]);return(0,C.jsxs)("main",{className:"AppLayout",children:[(0,C.jsx)("header",{className:"AppLayout-header",children:Y}),(0,C.jsxs)("section",{ref:L,className:"AppLayout-section",children:[(0,C.jsx)("nav",{ref:g,className:M({visible:k}),children:q}),(0,C.jsx)("div",{ref:w,className:N({visible:j}),onClick:W}),(0,C.jsx)("div",{className:S(),children:B})]})]})}},5931:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppLayout{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-header{width:100%}.AppLayout-section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative}@media screen and (max-height:64rem){.AppLayout-section{display:flex;flex:1}}.AppLayout-nav{border:.0625rem solid var(--border-color);border-radius:0 var(--border-radius) var(--border-radius) 0;max-width:18.75rem;min-width:17.5rem;position:absolute;transform:translateX(-100%);transition:transform .5s ease;z-index:2}@media screen and (min-height:64.001rem){.AppLayout-nav{border-bottom:0}}.AppLayout-nav_visible{transform:translateX(0);transition:transform .5s ease;visibility:visible}.AppLayout-content{position:relative;transition:left .3s ease;width:100%}.AppLayout-content,.AppLayout-nav{background:var(--background-color);box-sizing:border-box;height:100%;left:0;overflow-y:auto;right:0}.AppLayout-overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout-header>*{padding-left:0;padding-right:0}.AppLayout-content,.AppLayout-nav,.AppLayout-overlay{border-radius:var(--border-radius)}.AppLayout-content,.AppLayout-overlay{border:.0625rem solid var(--border-color)}.AppLayout-content>*{border-radius:var(--border-radius);box-sizing:border-box}.AppLayout{max-height:calc(100% - var(--x2));padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{max-width:45rem}}@media screen and (min-width:51.751rem){.Root{padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-height:calc(100% - var(--x4));max-width:60rem}.AppLayout-nav{max-width:18.75rem;transform:none}.AppLayout-nav_visible{transform:none}.AppLayout-overlay_visible{opacity:0}.AppLayout-content{left:19.75rem;width:calc(100% - 19.75rem)}}",""]),t.Z=i}}]);