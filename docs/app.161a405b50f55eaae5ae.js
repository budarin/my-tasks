(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{9566:function(e,t,r){function n(e,t){const r=(0,i.useCallback)(t,[t]);(0,i.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}function a(e){return(0,T.jsx)(O,{children:e.children,setNavigationFilter:X.q,logger:s.kg})}r.r(t),r.d(t,{default:function(){return P}});var i=r(7294),s=r(9051),c=r(1504),u=r(6378);const l="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var d=r(193),p=r(9591),m=r(3379),v=r.n(m),h=r(7795),y=r.n(h),f=r(569),b=r.n(f),g=r(3565),L=r.n(g),w=r(9216),x=r.n(w),k=r(4589),A=r.n(k),E=r(5931),C={};C.styleTagTransform=A(),C.setAttributes=L(),C.insert=b().bind(null,"head"),C.domAPI=y(),C.insertStyleElement=x();v()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals,r(4151);var T=r(5893);let N,S;const R="(width > 828px)",M=(0,c.cn)("AppLayout-Nav"),H=(0,c.cn)("AppLayout-Overlay"),z=(0,c.cn)("AppLayout-Content"),B=()=>matchMedia(R).matches,$=e=>0===o(e),j=e=>{e.style.visibility=""};var O=function(e){const t=(0,i.useRef)(0),r=(0,i.useRef)(0),a=(0,i.useRef)(.001),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),m=(0,i.useRef)(0),v=(0,i.useRef)(!1),h=(0,i.useRef)(null),y=(0,i.useRef)(null),f=(0,i.useRef)(null),b=(0,i.useRef)(null),g=(0,i.useRef)(null),L=function(e){const[t,r]=(0,i.useState)(!1);return n(e,(0,i.useCallback)((e=>{r(e)}),[])),t}(R),[w,x]=(0,i.useState)(!1),[k,A]=(0,i.useState)(!1),E=d.B,{logger:C}=e,O=(0,i.useCallback)((()=>{if(""===window.location.search)return void e.setNavigationFilter({key:(new Date).getTime(),type:u.M4});const t=function(){const e=new URLSearchParams(window.location.search),t=e.get("key"),r=e.get("type");return t&&r?{result:{key:r===u.Xz||r===u.M4?Number(t):t,type:r}}:{error:{message:"Не валидные значения фильтра в Url"}}}();if(t.error){const{message:e,data:r}=t.error;C.error(e,r)}else e.setNavigationFilter(t.result),setTimeout(V,0)}),[]),X=(0,i.useCallback)((e=>{window.matchMedia(R).matches||h.current&&(clearTimeout(N),j(h.current),m.current=o(h.current),s.current=!0,c.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),a.current=Math.abs(0-c.current)/302,t.current=e.touches[0].clientX,r.current=e.touches[0].clientY,h.current.style.transition="")}),[]),P=(0,i.useCallback)((e=>{if(!s.current)return;if(e.touches.length>1)return;const r=e.touches[0].clientX,n=e.touches[0].clientY,o=r-t.current,i=n-t.current;if(h.current&&g.current){let e=Math.max(m.current+o,-h.current.offsetWidth);e>0&&(e=0),h.current.style.transform=`translateX(${e}px)`,g.current.style.opacity=(e*a.current+c.current).toString()}return i/o>.8?(e.stopPropagation(),!1):void 0}),[]),_=(0,i.useCallback)((e=>{if(s.current&&h.current&&g.current){s.current=!1;const r=e.changedTouches[0].clientX-t.current,n=m.current+r;if(0===r||Math.abs(r)<=8)return h.current.style.cssText="",void(g.current.style.cssText="");r>0&&n>.8*-h.current.offsetWidth||r<0&&n>.3*-h.current.offsetWidth?(x(!0),A(!0),h.current.style.cssText="",g.current.style.cssText=""):(h.current.style.cssText="",g.current.style.cssText="",x(!1),A(!1),N=setTimeout(W,1e3))}}),[]),Z=(0,i.useCallback)((e=>{s.current||e.stopPropagation()}),[]),F=(0,i.useCallback)((e=>{v.current||(v.current=!0,h.current.addEventListener("touchmove",Z,{passive:!0}),h.current.addEventListener("touchstart",p.c,{passive:!0}),e.addEventListener("touchstart",X,{passive:!0}),e.addEventListener("touchmove",P,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}))}),[]),U=(0,i.useCallback)((e=>{v.current&&(v.current=!1,h.current.removeEventListener("touchmove",Z),h.current.removeEventListener("touchstart",p.c),e.removeEventListener("touchstart",X),e.removeEventListener("touchmove",P),e.removeEventListener("touchend",_))}),[]),V=(0,i.useCallback)((()=>{const e=f.current.offsetHeight-y.current.offsetTop,t=h.current.firstChild.offsetHeight;if(e<t||document.body.clientHeight<=1024&&!B()){const t=`${e}px`;h.current.style.borderBlockEnd&&(h.current.style.borderBlockEnd="",h.current.style.borderBlockStart=""),b.current.style.minHeight!==t&&(b.current.style.minHeight=t)}else{const e=`${t}px`;h.current.style.borderBlockEnd||(h.current.style.borderBlockEnd="0",h.current.style.borderBlockStart="0"),b.current.style.minHeight!==e&&(b.current.style.minHeight=`${t}px`)}}),[]),W=(0,i.useCallback)((()=>{$(h.current)||(h.current.style.visibility="hidden")}),[]),D=(0,i.useCallback)((()=>{h.current&&(clearTimeout(N),!B()&&$(h.current)&&(N=setTimeout(W,1e3),x(!1),A(!1)))}),[]),I=(0,i.useCallback)((()=>{h.current&&(clearTimeout(N),B()||($(h.current)||j(h.current),x((e=>!e)),A((e=>!e))))}),[]),Y=(0,i.useCallback)((()=>{h.current?.removeEventListener("transitionend",Y),E.isSupported?E.apply(O):setTimeout((()=>{O()}),50)}),[E,O]),q=(0,i.useCallback)(((e,t)=>{clearTimeout(S);const r=new URLSearchParams(window.location.search);r.set("key",String(t.key)),r.set("type",t.type);const{protocol:n,host:o,pathname:a}=window.location,i=`${n}//${o}${a}?${r.toString()}`;window.matchMedia("(pointer: coarse)").matches?history.replaceState(void 0,"",i):history.pushState(void 0,"",i),B()?(D(),E.apply(O)):S=setTimeout((()=>{h.current?.addEventListener("transitionend",Y),D()}),250)}),[O,D]);n("(pointer: coarse)",(e=>{const t=y.current;if(t){if(e)return F(t),()=>{U(t)};U(t)}})),function(e,t,r,n){const o=(0,i.useRef)(t);l((()=>{o.current=t}),[t]),(0,i.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const a=e=>o.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r,n])}("resize",(e=>{if(h.current&&g.current){if(j(h.current),!B()&&$(h.current)&&!k)return x(!0),A(!0),void setTimeout(V,0);setTimeout(V,0),clearTimeout(N),N=setTimeout(W,1e3)}}),void 0,{passive:!0}),(0,i.useEffect)((()=>(O(),window.addEventListener("popstate",O),()=>{window.removeEventListener("popstate",O)})),[O]),(0,i.useEffect)((()=>{V()}),[]);const{header:G,nav:J,content:K}=(0,i.useMemo)((()=>e.children({isNavVisible:w,toggleNavVisibility:I,showToggleNavButton:!1===L,handleSelectNavItem:q})),[w,L,I,q]);return(0,T.jsxs)("main",{ref:f,className:"AppLayout no-select",children:[(0,T.jsx)("header",{className:"AppLayout-Header",children:G}),(0,T.jsxs)("section",{ref:y,className:"AppLayout-Section",children:[(0,T.jsx)("nav",{ref:h,className:M({visible:w}),children:J}),(0,T.jsx)("div",{ref:g,className:H({visible:k}),onClick:D}),(0,T.jsx)("div",{ref:b,className:z(),children:K})]})]})},X=r(8505),P=i.memo(a)},5931:function(e,t,r){var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([e.id,".AppLayout{background-color:var(--background-color);box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-Header{width:100%}.AppLayout-Section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative;transition:height .3s ease}.AppLayout-Nav{border-bottom:.0625rem solid var(--border-color);border-radius:0 var(--border-radius) var(--border-radius) 0;border-top:.0625rem solid var(--border-color);box-sizing:border-box;height:100%;overflow-y:auto;padding-bottom:var(--x5);position:absolute;transform:translateX(-100%);transition:transform .35s ease;width:18.875rem;will-change:transform;z-index:2}.AppLayout-Nav_visible{height:100%;transform:translateX(0);transition:transform .25s ease;visibility:visible}.AppLayout-Content{box-sizing:border-box;display:flex;flex-direction:column;max-height:100%;min-height:12.5rem;overflow:hidden;position:relative;transition:left height .3s ease;width:100%}.AppLayout-Content,.AppLayout-Nav{background-color:var(--background-color);left:0;right:0}.AppLayout-Overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-Overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:40.001rem){:root{--layout-paddings:var(--x4)}.AppLayout{background-color:var(--panel-surface-color-hover);margin-bottom:var(--layout-paddings);padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}.AppLayout-Header>*{padding-left:0;padding-right:0}.AppLayout-Nav{padding-bottom:0}.AppLayout-Content,.AppLayout-Nav,.AppLayout-Overlay{border-radius:var(--border-radius)}.AppLayout-Content{border-top:0}.AppLayout-Content>*{border-radius:var(--border-radius)}}@media screen and (min-width:40rem) and (max-width:51.75rem){.AppLayout{margin-bottom:var(--x4);max-width:45rem}}@media screen and (min-width:51.751rem){.Root{--layout-paddings:var(--x3);padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-width:60rem;padding-left:0;padding-right:0}.AppLayout-Nav{background-color:var(--panel-surface-color-hover);max-width:18.875rem;transform:none}.AppLayout-Nav_visible{transform:none}.AppLayout-Overlay_visible{opacity:0}.AppLayout-Content{left:19.875rem;width:calc(100% - 19.875rem)}}",""]),t.Z=i}}]);