(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{1008:function(e,t,r){function n(e,t){const r=(0,i.useCallback)(t,[t]);(0,i.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}function a(e){return(0,N.jsx)(P,{children:e.children,setNavigationFilter:_.q,logger:s.kg})}r.r(t),r.d(t,{default:function(){return Z}});var i=r(7294),s=r(9051),c=r(1504),u=r(6378),l=r(1695);const d="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var p=r(193),v=r(9591),m=r(3379),h=r.n(m),f=r(7795),y=r.n(f),g=r(569),b=r.n(g),L=r(3565),w=r.n(L),x=r(9216),k=r.n(x),A=r(4589),C=r.n(A),E=r(5931),T={};T.styleTagTransform=C(),T.setAttributes=w(),T.insert=b().bind(null,"head"),T.domAPI=y(),T.insertStyleElement=k();h()(E.Z,T),E.Z&&E.Z.locals&&E.Z.locals,r(4151);var N=r(5893);let R,S;const H="(width > 828px)",M=(0,c.cn)("AppLayout-Nav"),z=(0,c.cn)("AppLayout-Overlay"),$=(0,c.cn)("AppLayout-Content"),j=()=>matchMedia(H).matches,O=e=>0===o(e),X=e=>{e.style.visibility=""};var P=function(e){const t=(0,i.useRef)(0),r=(0,i.useRef)(0),a=(0,i.useRef)(.001),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),m=(0,i.useRef)(0),h=(0,i.useRef)(!1),f=(0,i.useRef)(null),y=(0,i.useRef)(null),g=(0,i.useRef)(null),b=(0,i.useRef)(null),L=(0,i.useRef)(null),w=function(e){const[t,r]=(0,i.useState)(!1);return n(e,(0,i.useCallback)((e=>{r(e)}),[])),t}(H),[x,k]=(0,i.useState)(!1),[A,C]=(0,i.useState)(!1),E=p.B,{logger:T}=e,P=(0,i.useCallback)((()=>{if(""===window.location.search)return void e.setNavigationFilter({key:(new Date).getTime(),type:u.M4});const t=function(){const e=new URLSearchParams(window.location.search),t=e.get("key"),r=e.get("type");return t&&r?{result:{key:r===u.Xz?Number(t):t,type:r}}:{error:{message:"Не валидные значения фильтра в Url"}}}();if(t.error){const{message:e,data:r}=t.error;T.error(e,r)}else e.setNavigationFilter(t.result),setTimeout(B,0)}),[]),_=(0,i.useCallback)((e=>{window.matchMedia(H).matches||f.current&&(clearTimeout(R),X(f.current),m.current=o(f.current),s.current=!0,c.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),a.current=Math.abs(0-c.current)/302,t.current=e.touches[0].clientX,r.current=e.touches[0].clientY,f.current.style.transition="")}),[]),Z=(0,i.useCallback)((e=>{if(!s.current)return;if(e.touches.length>1)return;const r=e.touches[0].clientX,n=e.touches[0].clientY,o=r-t.current,i=n-t.current;if(f.current&&L.current){let e=Math.max(m.current+o,-f.current.offsetWidth);e>0&&(e=0),f.current.style.transform=`translateX(${e}px)`,L.current.style.opacity=(e*a.current+c.current).toString()}return i/o>.8?(e.stopPropagation(),!1):void 0}),[]),F=(0,i.useCallback)((e=>{if(s.current&&f.current&&L.current){s.current=!1;const r=e.changedTouches[0].clientX-t.current,n=m.current+r;if(0===r||Math.abs(r)<=8)return f.current.style.cssText="",void(L.current.style.cssText="");r>0&&n>.75*-f.current.offsetWidth||r<0&&n>.25*-f.current.offsetWidth?(k(!0),C(!0),f.current.style.cssText="",L.current.style.cssText=""):(f.current.style.cssText="",L.current.style.cssText="",k(!1),C(!1),R=setTimeout(D,1e3))}}),[]),U=(0,i.useCallback)((e=>{s.current||e.stopPropagation()}),[]),V=(0,i.useCallback)((e=>{h.current||(h.current=!0,f.current.addEventListener("touchmove",U,{passive:!0}),f.current.addEventListener("touchstart",v.c,{passive:!0}),e.addEventListener("touchstart",_,{passive:!0}),e.addEventListener("touchmove",Z,{passive:!0}),e.addEventListener("touchend",F,{passive:!0}))}),[]),W=(0,i.useCallback)((e=>{h.current&&(h.current=!1,f.current.removeEventListener("touchmove",U),f.current.removeEventListener("touchstart",v.c),e.removeEventListener("touchstart",_),e.removeEventListener("touchmove",Z),e.removeEventListener("touchend",F))}),[]),B=(0,i.useCallback)((()=>{const e=g.current.offsetHeight-y.current.offsetTop,t=f.current.firstChild.offsetHeight+2;if(document.body.clientHeight<=1024&&!j()){const t=`${e}px`;b.current.style.minHeight!==t&&(b.current.style.minHeight=t)}else{const e=`${t}px`;b.current.style.minHeight!==e&&(b.current.style.minHeight=`${t}px`)}}),[]),D=(0,i.useCallback)((()=>{O(f.current)||(f.current.style.visibility="hidden")}),[]),I=(0,i.useCallback)((()=>{f.current&&(clearTimeout(R),!j()&&O(f.current)&&(R=setTimeout(D,1e3),k(!1),C(!1)))}),[]),Y=(0,i.useCallback)((()=>{f.current&&(clearTimeout(R),j()||(O(f.current)||X(f.current),k((e=>!e)),C((e=>!e))))}),[]),q=(0,i.useCallback)((()=>{f.current?.removeEventListener("transitionend",q),E.isSupported?E.apply(P):setTimeout((()=>{P()}),50)}),[E,P]),G=(0,i.useCallback)(((e,t)=>{clearTimeout(S);const r=new URLSearchParams(window.location.search);r.set("key",String(t.key)),r.set("type",t.type);const{protocol:n,host:o,pathname:a}=window.location,i=`${n}//${o}${a}?${r.toString()}`;(0,l.b)()?history.replaceState(void 0,"",i):history.pushState(void 0,"",i),j()?(I(),E.apply(P)):S=setTimeout((()=>{f.current?.addEventListener("transitionend",q),I()}),250)}),[P,I]);n("(pointer: coarse)",(e=>{const t=y.current;if(t){if(e)return V(t),()=>{W(t)};W(t)}})),function(e,t,r,n){const o=(0,i.useRef)(t);d((()=>{o.current=t}),[t]),(0,i.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const a=e=>o.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r,n])}("resize",(e=>{if(f.current&&L.current){if(X(f.current),!j()&&O(f.current)&&!A)return k(!0),C(!0),void setTimeout(B,0);setTimeout(B,0),clearTimeout(R),R=setTimeout(D,1e3)}}),void 0,{passive:!0}),(0,i.useEffect)((()=>(P(),window.addEventListener("popstate",P),()=>{window.removeEventListener("popstate",P)})),[P]),(0,i.useEffect)((()=>{B()}),[]);const{header:J,nav:K,content:Q}=(0,i.useMemo)((()=>e.children({isNavVisible:x,toggleNavVisibility:Y,showToggleNavButton:!1===w,handleSelectNavItem:G})),[x,w,Y,G]);return(0,N.jsxs)("main",{ref:g,className:"AppLayout no-select",children:[(0,N.jsx)("header",{className:"AppLayout-Header",children:J}),(0,N.jsxs)("section",{ref:y,className:"AppLayout-Section",children:[(0,N.jsx)("nav",{ref:f,className:M({visible:x}),children:K}),(0,N.jsx)("div",{ref:L,className:z({visible:A}),onClick:I}),(0,N.jsx)("div",{ref:b,className:$(),children:Q})]})]})},_=r(8505),Z=i.memo(a)},5931:function(e,t,r){var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([e.id,".AppLayout{background-color:var(--background-color);box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-Header{width:100%}.AppLayout-Section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative;transition:height .3s ease}.AppLayout-Nav{border-radius:0 var(--border-radius) var(--border-radius) 0;box-sizing:border-box;height:calc(100% - .0625rem);overflow-y:auto;position:absolute;transform:translateX(-100%);transition:transform .35s ease;width:18.875rem;will-change:transform;z-index:2}.AppLayout-Nav_visible{height:100%;transform:translateX(0);transition:transform .25s ease;visibility:visible}.AppLayout-Content{box-sizing:border-box;display:flex;flex-direction:column;max-height:100%;min-height:12.5rem;overflow:hidden;position:relative;transition:left height .3s ease;width:100%}.AppLayout-Content,.AppLayout-Nav{background-color:var(--background-color);left:0;right:0}.AppLayout-Overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-Overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout{background-color:var(--panel-surface-color-hover);margin-bottom:var(--layout-paddings);padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}.AppLayout-Header>*{padding-left:0;padding-right:0}.AppLayout-Content,.AppLayout-Nav,.AppLayout-Overlay{border-radius:var(--border-radius)}.AppLayout-Content{border-top:0}.AppLayout-Content>*{border-radius:var(--border-radius)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{margin-bottom:var(--x4);max-width:45rem}}@media screen and (min-width:51.751rem){.Root{--layout-paddings:var(--x3);padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-width:60rem;padding-left:0;padding-right:0}.AppLayout-Nav{background-color:var(--panel-surface-color-hover);max-width:18.875rem;transform:none}.AppLayout-Nav_visible{transform:none}.AppLayout-Overlay_visible{opacity:0}.AppLayout-Content{left:19.875rem;width:calc(100% - 19.875rem)}}",""]),t.Z=i}}]);