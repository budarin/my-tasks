(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{7384:function(e,t,r){function n(e,t){const r=(0,i.useCallback)(t,[t]);(0,i.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function a(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}r.r(t),r.d(t,{default:function(){return $}});var o=r(1504),i=r(7294),s=r(6378),c=r(9051),u=r(1695);const l="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var d=r(193),p=r(348),m=r(8505),v=r(3379),h=r.n(v),y=r(7795),f=r.n(y),b=r(569),g=r.n(b),L=r(3565),w=r.n(L),x=r(9216),A=r.n(x),k=r(4589),C=r.n(k),E=r(5931),N={};N.styleTagTransform=C(),N.setAttributes=w(),N.insert=g().bind(null,"head"),N.domAPI=f(),N.insertStyleElement=A();h()(E.Z,N),E.Z&&E.Z.locals&&E.Z.locals;var R=r(5893);let S,T;const M="(width > 828px)",O=(0,o.cn)("AppLayout-Nav"),z=(0,o.cn)("AppLayout-Overlay"),H=(0,o.cn)("AppLayout-Content"),j=()=>matchMedia(M).matches,P=e=>{const t=a(e);return 1===t||0===t},X=e=>{e.style.visibility=""};var $=function(e){function t(e){f.current&&(f.current=!1,w.current.removeEventListener("touchmove",I),w.current.removeEventListener("touchstart",U),e.removeEventListener("touchstart",B),e.removeEventListener("touchmove",D),e.removeEventListener("touchend",W))}function r(){const e=A.current.getBoundingClientRect(),t=Math.min(w.current.clientHeight+1,w.current.firstChild.clientHeight),r=L.current.clientHeight-e.top;x.current.style.maxHeight=`${Math.max(t,r)}px`,x.current.style.minHeight=`${Math.min(t,r)}px`}const o=(0,i.useRef)(0),v=(0,i.useRef)(0),h=(0,i.useRef)(!1),y=(0,i.useRef)(0),f=(0,i.useRef)(!1),b=(0,i.useRef)(0),g=(0,i.useRef)(.001),L=(0,i.useRef)(null),w=(0,i.useRef)(null),x=(0,i.useRef)(null),A=(0,i.useRef)(null),k=(0,i.useRef)(null),C=function(e){const[t,r]=(0,i.useState)(!1);return n(e,(0,i.useCallback)((e=>{r(e)}),[])),t}(M),[E,N]=(0,i.useState)(!1),[$,_]=(0,i.useState)(!1),Z=d.B,V=(0,i.useCallback)((()=>{if(""===window.location.search)return;const e=function(e){const t=new URLSearchParams(window.location.search),r=t.get("type"),n=t.get("title"),a=t.get("key");switch(r){case s.M4:{const e=Number(a);return(0,s.Vz)({type:r,title:(0,p.D)(new Date(e)),key:e})}case s.Xz:{const e=Number(a);return(0,s.r9)({type:r,title:n,key:e})}case s.Lv:return(0,s.lO)({type:r,title:n,key:a});case s.th:return(0,s.Ci)({type:r,title:n,key:a});default:return{error:{message:"Значение фильтра в адресе не верное",data:{type:r,title:n,key:a}}}}}(window.location.pathname);if(e.result)(0,m.q)(e.result),r();else{const{message:t,data:r}=e.error;c.kg.error(t,r)}}),[]);(0,i.useEffect)((()=>(V(),window.addEventListener("popstate",V),()=>{window.removeEventListener("popstate",V)})),[V]);const B=(0,i.useCallback)((e=>{window.matchMedia(M).matches||w.current&&(clearTimeout(S),X(w.current),y.current=a(w.current),h.current=!0,b.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),g.current=Math.abs(0-b.current)/300,o.current=e.touches[0].clientX,v.current=e.touches[0].clientY,w.current.style.transition="")}),[]),D=(0,i.useCallback)((e=>{if(!h.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-o.current,a=r-o.current;if(w.current&&k.current){let e=Math.max(y.current+n,-w.current.offsetWidth);e>0&&(e=0),w.current.style.transform=`translateX(${e}px)`,k.current.style.opacity=(e*g.current+b.current).toString()}return a/n>.8?(e.stopPropagation(),!1):void 0}),[]),W=(0,i.useCallback)((e=>{if(h.current&&w.current&&k.current){h.current=!1;const t=e.changedTouches[0].clientX-o.current,r=y.current+t;if(0===t||Math.abs(t)<=8)return;t>0&&r>.85*-w.current.offsetWidth||t<0&&r>.15*-w.current.offsetWidth?(N(!0),_(!0),w.current.style.cssText="",k.current.style.cssText=""):(w.current.style.cssText="",k.current.style.cssText="",N(!1),_(!1),S=setTimeout(Y,1e3))}}),[]),I=(0,i.useCallback)((e=>{h.current||e.stopPropagation()}),[]),U=(0,i.useCallback)((e=>{e.stopPropagation()}),[]);n("(pointer: coarse)",(e=>{const r=A.current;if(r){if(e)return n=r,f.current||(f.current=!0,w.current.addEventListener("touchmove",I,{passive:!0}),w.current.addEventListener("touchstart",U,{passive:!0}),n.addEventListener("touchstart",B,{passive:!0}),n.addEventListener("touchmove",D,{passive:!0}),n.addEventListener("touchend",W,{passive:!0})),()=>{t(r)};t(r)}var n})),A.current&&r();const Y=()=>{P(w.current)||(w.current.style.visibility="hidden")};!function(e,t,r,n){const a=(0,i.useRef)(t);l((()=>{a.current=t}),[t]),(0,i.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r,n])}("resize",(e=>{if(w.current&&k.current){if(r(),X(w.current),!j()&&P(w.current)&&!$)return N(!0),void _(!0);clearTimeout(S),S=setTimeout(Y,1e3)}}),void 0,{passive:!0});const q=(0,i.useCallback)((()=>{w.current&&(clearTimeout(S),!j()&&P(w.current)&&(S=setTimeout(Y,1e3),N(!1),_(!1)))}),[]),F=(0,i.useCallback)((()=>{w.current&&(clearTimeout(S),j()||(P(w.current)||X(w.current),N((e=>!e)),_((e=>!e))))}),[]),G=()=>{w.current?.removeEventListener("transitionend",G),Z.isSupported?Z.apply(V):setTimeout((()=>{V()}),50)},J=(0,i.useCallback)(((e,t)=>{clearTimeout(T);const r=new URLSearchParams(window.location.search);for(const[e,n]of Object.entries(t))r.set(e,String(n));const{protocol:n,host:a,pathname:o}=window.location,i=`${n}//${a}${o}?${r.toString()}`;(0,u.b)()?history.replaceState(void 0,"",i):history.pushState(void 0,"",i),j()?(q(),Z.apply(V)):T=setTimeout((()=>{w.current?.addEventListener("transitionend",G),q()}),250)}),[V,q]),{header:K,nav:Q,content:ee}=(0,i.useMemo)((()=>e.children({isNavVisible:E,toggleNavVisibility:F,showToggleNavButton:!1===C,handleSelectNavItem:J})),[E,C,F,J]);return(0,R.jsxs)("main",{ref:L,className:"AppLayout",children:[(0,R.jsx)("header",{className:"AppLayout-Header",children:K}),(0,R.jsxs)("section",{ref:A,className:"AppLayout-Section",children:[(0,R.jsx)("nav",{ref:w,className:O({visible:E}),children:Q}),(0,R.jsx)("div",{ref:k,className:z({visible:$}),onClick:q}),(0,R.jsx)("div",{ref:x,className:H(),children:ee})]})]})}},5931:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppLayout{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-Header{width:100%}.AppLayout-Section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative;transition:height .3s ease}@media screen and (max-height:64rem){.AppLayout-Section{display:flex;flex:1}}.AppLayout-Nav{border-radius:0 var(--border-radius) var(--border-radius) 0;box-sizing:border-box;max-width:18.75rem;min-width:17.5rem;overflow-y:auto;position:absolute;transform:translateX(-100%);transition:transform .5s ease;will-change:transform;z-index:2}.AppLayout-Nav_visible{height:calc(100% - .0625rem);transform:translateX(.0625rem);transition:transform .5s ease;visibility:visible}.AppLayout-Content{box-sizing:border-box;overflow:hidden;position:relative;transition:left .3s ease;width:100%}.AppLayout-Content,.AppLayout-Nav{background:var(--background-color);left:0;right:0}.AppLayout-Overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-Overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout-Header>*{padding-left:0;padding-right:0}.AppLayout-Content,.AppLayout-Nav,.AppLayout-Overlay{border-radius:var(--border-radius)}.AppLayout-Content,.AppLayout-Overlay{border:.0625rem solid var(--border-color)}.AppLayout-Content{border-top:0}.AppLayout-Content>*{border-radius:var(--border-radius)}.AppLayout{max-height:calc(100% - var(--x2));padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{max-width:45rem}}@media screen and (min-width:51.751rem){.Root{--layout-paddings:var(--x3);padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-height:calc(100% - var(--x4));max-width:60rem}.AppLayout-Nav{max-width:18.75rem;transform:none}.AppLayout-Nav_visible{transform:none}.AppLayout-Overlay_visible{opacity:0}.AppLayout-Content{left:19.75rem;width:calc(100% - 19.75rem)}}",""]),t.Z=i}}]);