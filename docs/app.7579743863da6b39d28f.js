(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{3707:function(e,t,r){function n(e,t){const r=(0,i.useCallback)(t,[t]);(0,i.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}function a(e){return(0,R.jsx)(_,{children:e.children,setNavigationFilter:s.q})}r.r(t),r.d(t,{default:function(){return Z}});var i=r(7294),s=r(8505),c=r(1504),u=r(6378),l=r(9051),d=r(1695);const p="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var v=r(193),h=r(348),m=r(3379),f=r.n(m),y=r(7795),g=r.n(y),b=r(569),L=r.n(b),w=r(3565),x=r.n(w),k=r(9216),A=r.n(k),C=r(4589),E=r.n(C),T=r(5931),N={};N.styleTagTransform=E(),N.setAttributes=x(),N.insert=L().bind(null,"head"),N.domAPI=g(),N.insertStyleElement=A();f()(T.Z,N),T.Z&&T.Z.locals&&T.Z.locals,r(4151);var R=r(5893);let S,H;const M="(width > 828px)",z=(0,c.cn)("AppLayout-Nav"),O=(0,c.cn)("AppLayout-Overlay"),j=(0,c.cn)("AppLayout-Content"),$=()=>matchMedia(M).matches,P=e=>0===o(e),X=e=>{e.style.visibility=""};var _=function(e){function t(e){g.current&&(g.current=!1,b.current.removeEventListener("touchmove",B),b.current.removeEventListener("touchstart",F),e.removeEventListener("touchstart",V),e.removeEventListener("touchmove",D),e.removeEventListener("touchend",W))}function r(){const e=w.current.offsetHeight-L.current.offsetTop,t=b.current.firstChild.offsetHeight+2;if(document.body.clientHeight<=1024&&!$()){const t=`${e}px`;x.current.style.minHeight!==t&&(x.current.style.minHeight=t)}else{const e=`${t}px`;x.current.style.minHeight!==e&&(x.current.style.minHeight=`${t}px`)}}const a=(0,i.useRef)(0),s=(0,i.useRef)(0),c=(0,i.useRef)(.001),m=(0,i.useRef)(!1),f=(0,i.useRef)(0),y=(0,i.useRef)(0),g=(0,i.useRef)(!1),b=(0,i.useRef)(null),L=(0,i.useRef)(null),w=(0,i.useRef)(null),x=(0,i.useRef)(null),k=(0,i.useRef)(null),A=function(e){const[t,r]=(0,i.useState)(!1);return n(e,(0,i.useCallback)((e=>{r(e)}),[])),t}(M),[C,E]=(0,i.useState)(!1),[T,N]=(0,i.useState)(!1),_=v.B,Z=(0,i.useCallback)((()=>{if(""===window.location.search)return;const t=function(e){const t=new URLSearchParams(window.location.search),r=t.get("type"),n=t.get("title"),o=t.get("key");switch(r){case u.M4:{const e=Number(o);return(0,u.Vz)({type:r,title:(0,h.D)(new Date(e)),key:e})}case u.Xz:{const e=Number(o);return(0,u.r9)({type:r,title:n,key:e})}case u.Lv:return(0,u.lO)({type:r,title:n,key:o});case u.th:return(0,u.Ci)({type:r,title:n,key:o});default:return{error:{message:"Значение фильтра в адресе не верное",data:{type:r,title:n,key:o}}}}}(window.location.pathname);if(t.result)e.setNavigationFilter(t.result),setTimeout(r,0);else{const{message:e,data:r}=t.error;l.kg.error(e,r)}}),[]);(0,i.useEffect)((()=>(Z(),window.addEventListener("popstate",Z),()=>{window.removeEventListener("popstate",Z)})),[Z]);const V=(0,i.useCallback)((e=>{window.matchMedia(M).matches||b.current&&(clearTimeout(S),X(b.current),y.current=o(b.current),m.current=!0,f.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),c.current=Math.abs(0-f.current)/302,a.current=e.touches[0].clientX,s.current=e.touches[0].clientY,b.current.style.transition="")}),[]),D=(0,i.useCallback)((e=>{if(!m.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-a.current,o=r-a.current;if(b.current&&k.current){let e=Math.max(y.current+n,-b.current.offsetWidth);e>0&&(e=0),b.current.style.transform=`translateX(${e}px)`,k.current.style.opacity=(e*c.current+f.current).toString()}return o/n>.8?(e.stopPropagation(),!1):void 0}),[]),W=(0,i.useCallback)((e=>{if(m.current&&b.current&&k.current){m.current=!1;const t=e.changedTouches[0].clientX-a.current,r=y.current+t;if(0===t||Math.abs(t)<=8)return b.current.style.cssText="",void(k.current.style.cssText="");t>0&&r>.7*-b.current.offsetWidth||t<0&&r>.3*-b.current.offsetWidth?(E(!0),N(!0),b.current.style.cssText="",k.current.style.cssText=""):(b.current.style.cssText="",k.current.style.cssText="",E(!1),N(!1),S=setTimeout(I,1e3))}}),[]),B=(0,i.useCallback)((e=>{m.current||e.stopPropagation()}),[]),F=(0,i.useCallback)((e=>{e.stopPropagation()}),[]);n("(pointer: coarse)",(e=>{const r=L.current;if(r){if(e)return n=r,g.current||(g.current=!0,b.current.addEventListener("touchmove",B,{passive:!0}),b.current.addEventListener("touchstart",F,{passive:!0}),n.addEventListener("touchstart",V,{passive:!0}),n.addEventListener("touchmove",D,{passive:!0}),n.addEventListener("touchend",W,{passive:!0})),()=>{t(r)};t(r)}var n})),(0,i.useEffect)((()=>{r()}),[]);const I=(0,i.useCallback)((()=>{P(b.current)||(b.current.style.visibility="hidden")}),[]);!function(e,t,r,n){const o=(0,i.useRef)(t);p((()=>{o.current=t}),[t]),(0,i.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const a=e=>o.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r,n])}("resize",(e=>{if(b.current&&k.current){if(X(b.current),!$()&&P(b.current)&&!T)return E(!0),N(!0),void setTimeout(r,0);setTimeout(r,0),clearTimeout(S),S=setTimeout(I,1e3)}}),void 0,{passive:!0});const U=(0,i.useCallback)((()=>{b.current&&(clearTimeout(S),!$()&&P(b.current)&&(S=setTimeout(I,1e3),E(!1),N(!1)))}),[]),Y=(0,i.useCallback)((()=>{b.current&&(clearTimeout(S),$()||(P(b.current)||X(b.current),E((e=>!e)),N((e=>!e))))}),[]),q=(0,i.useCallback)((()=>{b.current?.removeEventListener("transitionend",q),_.isSupported?_.apply(Z):setTimeout((()=>{Z()}),50)}),[_,Z]),G=(0,i.useCallback)(((e,t)=>{clearTimeout(H);const r=new URLSearchParams(window.location.search);for(const[e,n]of Object.entries(t))r.set(e,String(n));const{protocol:n,host:o,pathname:a}=window.location,i=`${n}//${o}${a}?${r.toString()}`;(0,d.b)()?history.replaceState(void 0,"",i):history.pushState(void 0,"",i),$()?(U(),_.apply(Z)):H=setTimeout((()=>{b.current?.addEventListener("transitionend",q),U()}),250)}),[Z,U]),{header:J,nav:K,content:Q}=(0,i.useMemo)((()=>e.children({isNavVisible:C,toggleNavVisibility:Y,showToggleNavButton:!1===A,handleSelectNavItem:G})),[C,A,Y,G]);return(0,R.jsxs)("main",{ref:w,className:"AppLayout no-select",children:[(0,R.jsx)("header",{className:"AppLayout-Header",children:J}),(0,R.jsxs)("section",{ref:L,className:"AppLayout-Section",children:[(0,R.jsx)("nav",{ref:b,className:z({visible:C}),children:K}),(0,R.jsx)("div",{ref:k,className:O({visible:T}),onClick:U}),(0,R.jsx)("div",{ref:x,className:j(),children:Q})]})]})},Z=i.memo(a)},5931:function(e,t,r){var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([e.id,".AppLayout{background-color:var(--background-color);box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-Header{width:100%}.AppLayout-Section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative;transition:height .3s ease}.AppLayout-Nav{border-radius:0 var(--border-radius) var(--border-radius) 0;box-sizing:border-box;height:calc(100% - .0625rem);overflow-y:auto;position:absolute;transform:translateX(-100%);transition:transform .5s ease;width:18.875rem;will-change:transform;z-index:2}.AppLayout-Nav_visible{height:100%;transform:translateX(0);transition:transform .5s ease;visibility:visible}.AppLayout-Content{box-sizing:border-box;display:flex;flex-direction:column;max-height:100%;min-height:12.5rem;overflow:hidden;position:relative;transition:left height .3s ease;width:100%}.AppLayout-Content,.AppLayout-Nav{background-color:var(--background-color);left:0;right:0}.AppLayout-Overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-Overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout{background-color:var(--panel-surface-color-hover);max-height:calc(100% - var(--layout-paddings));padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}.AppLayout-Header>*{padding-left:0;padding-right:0}.AppLayout-Content,.AppLayout-Nav,.AppLayout-Overlay{border-radius:var(--border-radius)}.AppLayout-Content{border-top:0}.AppLayout-Content>*{border-radius:var(--border-radius)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{margin-bottom:var(--x4);max-width:45rem}}@media screen and (min-width:51.751rem){.Root{--layout-paddings:var(--x3);padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-width:60rem}.AppLayout-Nav{background-color:var(--panel-surface-color-hover);max-width:18.875rem;transform:none}.AppLayout-Nav_visible{transform:none}.AppLayout-Overlay_visible{opacity:0}.AppLayout-Content{left:19.875rem;width:calc(100% - 19.875rem)}}",""]),t.Z=i}}]);