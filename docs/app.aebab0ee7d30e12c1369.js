(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{7384:function(e,t,r){function n(e,t){const r=(0,i.useCallback)(t,[t]);(0,i.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function a(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}r.r(t),r.d(t,{default:function(){return _}});var o=r(1504),i=r(7294),s=r(6378),c=r(9051),u=r(1695);const l="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var d=r(193),p=r(348),h=r(8505),m=r(3379),v=r.n(m),f=r(7795),y=r.n(f),g=r(569),b=r.n(g),L=r(3565),w=r.n(L),x=r(9216),A=r.n(x),k=r(4589),E=r.n(k),C=r(5931),T={};T.styleTagTransform=E(),T.setAttributes=w(),T.insert=b().bind(null,"head"),T.domAPI=y(),T.insertStyleElement=A();v()(C.Z,T),C.Z&&C.Z.locals&&C.Z.locals,r(4151);var N=r(5893);let R,S;const M="(width > 828px)",O="(width >= 640px) and (width <= 828px)",z=(0,o.cn)("AppLayout-Nav"),H=(0,o.cn)("AppLayout-Overlay"),$=(0,o.cn)("AppLayout-Content"),j=()=>matchMedia(M).matches,P=e=>0===a(e),X=e=>{e.style.visibility=""};var _=function(e){function t(e){b.current&&(b.current=!1,L.current.removeEventListener("touchmove",U),L.current.removeEventListener("touchstart",Y),e.removeEventListener("touchstart",W),e.removeEventListener("touchmove",B),e.removeEventListener("touchend",I))}function r(){const e=x.current.offsetHeight,t=e-w.current.offsetTop,r=L.current.firstChild.offsetHeight+1;if(matchMedia(O).matches&&e<=1024){const e=`${r}px`;A.current.style.minHeight!==e&&(A.current.style.minHeight=`${r}px`)}else{const e=`${t}px`;A.current.style.minHeight!==e&&(A.current.style.minHeight=e)}}const o=(0,i.useRef)(0),m=(0,i.useRef)(0),v=(0,i.useRef)(.001),f=(0,i.useRef)(!1),y=(0,i.useRef)(0),g=(0,i.useRef)(0),b=(0,i.useRef)(!1),L=(0,i.useRef)(null),w=(0,i.useRef)(null),x=(0,i.useRef)(null),A=(0,i.useRef)(null),k=(0,i.useRef)(null),E=function(e){const[t,r]=(0,i.useState)(!1);return n(e,(0,i.useCallback)((e=>{r(e)}),[])),t}(M),[C,T]=(0,i.useState)(!1),[_,Z]=(0,i.useState)(!1),V=d.B,D=(0,i.useCallback)((()=>{if(""===window.location.search)return;const e=function(e){const t=new URLSearchParams(window.location.search),r=t.get("type"),n=t.get("title"),a=t.get("key");switch(r){case s.M4:{const e=Number(a);return(0,s.Vz)({type:r,title:(0,p.D)(new Date(e)),key:e})}case s.Xz:{const e=Number(a);return(0,s.r9)({type:r,title:n,key:e})}case s.Lv:return(0,s.lO)({type:r,title:n,key:a});case s.th:return(0,s.Ci)({type:r,title:n,key:a});default:return{error:{message:"Значение фильтра в адресе не верное",data:{type:r,title:n,key:a}}}}}(window.location.pathname);if(e.result)(0,h.q)(e.result),setTimeout(r,0);else{const{message:t,data:r}=e.error;c.kg.error(t,r)}}),[]);(0,i.useEffect)((()=>(D(),window.addEventListener("popstate",D),()=>{window.removeEventListener("popstate",D)})),[D]);const W=(0,i.useCallback)((e=>{window.matchMedia(M).matches||L.current&&(clearTimeout(R),X(L.current),g.current=a(L.current),f.current=!0,y.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),v.current=Math.abs(0-y.current)/302,o.current=e.touches[0].clientX,m.current=e.touches[0].clientY,L.current.style.transition="")}),[]),B=(0,i.useCallback)((e=>{if(!f.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-o.current,a=r-o.current;if(L.current&&k.current){let e=Math.max(g.current+n,-L.current.offsetWidth);e>0&&(e=0),L.current.style.transform=`translateX(${e}px)`,k.current.style.opacity=(e*v.current+y.current).toString()}return a/n>.8?(e.stopPropagation(),!1):void 0}),[]),I=(0,i.useCallback)((e=>{if(f.current&&L.current&&k.current){f.current=!1;const t=e.changedTouches[0].clientX-o.current,r=g.current+t;if(0===t||Math.abs(t)<=8)return L.current.style.cssText="",void(k.current.style.cssText="");t>0&&r>.85*-L.current.offsetWidth||t<0&&r>.15*-L.current.offsetWidth?(T(!0),Z(!0),L.current.style.cssText="",k.current.style.cssText=""):(L.current.style.cssText="",k.current.style.cssText="",T(!1),Z(!1),R=setTimeout(q,1e3))}}),[]),U=(0,i.useCallback)((e=>{f.current||e.stopPropagation()}),[]),Y=(0,i.useCallback)((e=>{e.stopPropagation()}),[]);n("(pointer: coarse)",(e=>{const r=w.current;if(r){if(e)return n=r,b.current||(b.current=!0,L.current.addEventListener("touchmove",U,{passive:!0}),L.current.addEventListener("touchstart",Y,{passive:!0}),n.addEventListener("touchstart",W,{passive:!0}),n.addEventListener("touchmove",B,{passive:!0}),n.addEventListener("touchend",I,{passive:!0})),()=>{t(r)};t(r)}var n})),(0,i.useEffect)((()=>{r()}),[]);const q=()=>{P(L.current)||(L.current.style.visibility="hidden")};!function(e,t,r,n){const a=(0,i.useRef)(t);l((()=>{a.current=t}),[t]),(0,i.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r,n])}("resize",(e=>{if(L.current&&k.current){if(X(L.current),!j()&&P(L.current)&&!_)return T(!0),Z(!0),void setTimeout(r,0);clearTimeout(R),R=setTimeout(q,1e3)}}),void 0,{passive:!0});const F=(0,i.useCallback)((()=>{L.current&&(clearTimeout(R),!j()&&P(L.current)&&(R=setTimeout(q,1e3),T(!1),Z(!1)))}),[]),G=(0,i.useCallback)((()=>{L.current&&(clearTimeout(R),j()||(P(L.current)||X(L.current),T((e=>!e)),Z((e=>!e))))}),[]),J=()=>{L.current?.removeEventListener("transitionend",J),V.isSupported?V.apply(D):setTimeout((()=>{D()}),50)},K=(0,i.useCallback)(((e,t)=>{clearTimeout(S);const r=new URLSearchParams(window.location.search);for(const[e,n]of Object.entries(t))r.set(e,String(n));const{protocol:n,host:a,pathname:o}=window.location,i=`${n}//${a}${o}?${r.toString()}`;(0,u.b)()?history.replaceState(void 0,"",i):history.pushState(void 0,"",i),j()?(F(),V.apply(D)):S=setTimeout((()=>{L.current?.addEventListener("transitionend",J),F()}),250)}),[D,F]),{header:Q,nav:ee,content:te}=(0,i.useMemo)((()=>e.children({isNavVisible:C,toggleNavVisibility:G,showToggleNavButton:!1===E,handleSelectNavItem:K})),[C,E,G,K]);return(0,N.jsxs)("main",{ref:x,className:"AppLayout no-select",children:[(0,N.jsx)("header",{className:"AppLayout-Header",children:Q}),(0,N.jsxs)("section",{ref:w,className:"AppLayout-Section",children:[(0,N.jsx)("nav",{ref:L,className:z({visible:C}),children:ee}),(0,N.jsx)("div",{ref:k,className:H({visible:_}),onClick:F}),(0,N.jsx)("div",{ref:A,className:$(),children:te})]})]})}},5931:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppLayout{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-Header{width:100%}.AppLayout-Section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative;transition:height .3s ease}.AppLayout-Nav{border-radius:0 var(--border-radius) var(--border-radius) 0;box-sizing:border-box;height:calc(100% - .0625rem);overflow-y:auto;position:absolute;transform:translateX(-100%);transition:transform .5s ease;width:18.875rem;will-change:transform;z-index:2}.AppLayout-Nav_visible{height:100%;transform:translateX(0);transition:transform .5s ease;visibility:visible}.AppLayout-Content{box-sizing:border-box;display:flex;flex-direction:column;max-height:100%;min-height:12.5rem;overflow:hidden;position:relative;transition:left .3s ease;width:100%}.AppLayout-Content,.AppLayout-Nav{background:var(--background-color);left:0;right:0}.AppLayout-Overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-Overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout-Header>*{padding-left:0;padding-right:0}.AppLayout-Content,.AppLayout-Nav,.AppLayout-Overlay{border-radius:var(--border-radius)}.AppLayout-Content,.AppLayout-Overlay{border:.0625rem solid var(--border-color)}.AppLayout-Content{border-top:0}.AppLayout-Content>*{border-radius:var(--border-radius)}.AppLayout{max-height:calc(100% - var(--x2));padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{max-width:45rem}}@media screen and (min-width:51.751rem){.Root{--layout-paddings:var(--x3);padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-height:calc(100% - var(--x4));max-width:60rem}.AppLayout-Nav{max-width:18.875rem;transform:none}.AppLayout-Nav_visible{transform:none}.AppLayout-Overlay_visible{opacity:0}.AppLayout-Content{left:19.875rem;width:calc(100% - 19.875rem)}}",""]),t.Z=i}}]);