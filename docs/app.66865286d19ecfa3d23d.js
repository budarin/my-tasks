(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{6119:function(e,t,r){function n(e,t){const r=(0,s.useCallback)(t,[t]);(0,s.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function a(e){const[t,r]=(0,s.useState)(!1);return n(e,(0,s.useCallback)((e=>{r(e)}),[])),t}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}r.r(t),r.d(t,{default:function(){return N}});var i=r(1504),s=r(7294);r(9051);const c="undefined"!=typeof window?s.useLayoutEffect:s.useEffect;var u=r(3379),d=r.n(u),l=r(7795),p=r.n(l),m=r(569),h=r.n(m),f=r(3565),v=r.n(f),y=r(9216),b=r.n(y),x=r(4589),g=r.n(x),L=r(5931),w={};w.styleTagTransform=g(),w.setAttributes=v(),w.insert=h().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=b();d()(L.Z,w),L.Z&&L.Z.locals&&L.Z.locals;var A=r(5893);const E=(0,i.cn)("AppLayout-nav"),k=(0,i.cn)("AppLayout-overlay"),C=(0,i.cn)("AppLayout-content"),R="(width > 828px)";var N=function(e){function t(e){m.current&&(m.current=!1,v.current.removeEventListener("touchmove",j),e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",S),e.removeEventListener("touchend",X))}function r(){g&&(y.current.style.height=`${v.current.firstChild.offsetHeight+1}px`)}const i=(0,s.useRef)(0),u=(0,s.useRef)(0),d=(0,s.useRef)(!1),l=(0,s.useRef)(!1),p=(0,s.useRef)(0),m=(0,s.useRef)(!1),h=(0,s.useRef)(0),f=(0,s.useRef)(.001),v=(0,s.useRef)(null),y=(0,s.useRef)(null),b=(0,s.useRef)(null),x=a(R),g=a("(height > 1024px)"),[L,w]=(0,s.useState)(!1),[N,T]=(0,s.useState)(!1),M=!1===x,z=(0,s.useCallback)((e=>{window.matchMedia(R).matches||v.current&&(p.current=o(v.current),d.current=!0,h.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),f.current=Math.abs(0-h.current)/300,i.current=e.touches[0].clientX,u.current=e.touches[0].clientY,v.current.style.transition="")}),[]),S=(0,s.useCallback)((e=>{if(!d.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-i.current;if(!((r-i.current)/n>.8)){if(v.current&&b.current){let e=Math.max(p.current+n,-v.current.offsetWidth);e>0&&(e=0),v.current.style.transform=`translateX(${e}px)`,b.current.style.opacity=(e*f.current+h.current).toString()}return e.preventDefault(),e.stopPropagation(),!1}}),[]),X=(0,s.useCallback)((e=>{if(d.current&&v.current&&b.current){d.current=!1;const t=e.changedTouches[0].clientX-i.current,r=p.current+t;if(0===t||Math.abs(t)<=8)return;t>0&&r>.85*-v.current.offsetWidth||t<0&&r>.15*-v.current.offsetWidth?(w(!0),T(!0),v.current.style.cssText="",b.current.style.cssText=""):(v.current.style.cssText="",b.current.style.cssText="",w(!1),T(!1))}}),[]),j=(0,s.useCallback)((e=>{if(d.current&&v.current&&b.current){d.current=!1;const t=e.changedTouches[0].clientX-i.current;if(0===t||Math.abs(t)<=8)return void e.stopPropagation()}}),[]);n("(pointer: coarse)",(e=>{const r=y.current;if(r){if(e)return n=r,m.current||(m.current=!0,v.current.addEventListener("touchmove",j,{passive:!1}),n.addEventListener("touchstart",z,{passive:!0}),n.addEventListener("touchmove",S),n.addEventListener("touchend",X,{passive:!0})),()=>{t(r)};t(r)}var n})),g&&y.current&&!1===l.current&&(l.current=!0,r()),function(e,t,r,n){const a=(0,s.useRef)(t);c((()=>{a.current=t}),[t]),(0,s.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r,n])}("resize",(e=>{if(r(),v.current&&b.current&&!1===x){0===o(v.current)&&!1===N&&(w(!0),T(!0))}}),void 0,{passive:!0});const P=(0,s.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),!1===x&&L&&(w(!1),T(!1))}),[x,L]),_=(0,s.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),!1===x&&(w((e=>!e)),T((e=>!e)))}),[x]),{header:Z,nav:D,content:V}=e.children({isNavVisible:L,toggleNavVisibility:_,showToggleNavButton:M,closeNav:P});return(0,A.jsxs)("main",{className:"AppLayout",children:[(0,A.jsx)("header",{className:"AppLayout-header",children:Z}),(0,A.jsxs)("section",{ref:y,className:"AppLayout-section",children:[(0,A.jsx)("nav",{ref:v,className:E({visible:L}),children:D}),(0,A.jsx)("div",{ref:b,className:k({visible:N}),onClick:P}),(0,A.jsx)("div",{className:C(),children:V})]})]})}},5931:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppLayout{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-header{width:100%}.AppLayout-section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative}@media screen and (max-height:64rem){.AppLayout-section{display:flex;flex:1}}.AppLayout-nav{border:.0625rem solid var(--border-color);border-radius:0 var(--border-radius) var(--border-radius) 0;border-top:0;max-width:18.75rem;min-width:17.5rem;position:absolute;transform:translateX(-100%);transition:transform .3s ease;z-index:2}@media screen and (min-height:64.001rem){.AppLayout-nav{border-bottom:0}}.AppLayout-nav_visible{transform:translateX(0);transition:transform .5s ease}.AppLayout-content{position:relative;transition:left .3s ease;width:100%}.AppLayout-content,.AppLayout-nav{background:var(--background-color);box-sizing:border-box;height:100%;left:0;overflow-y:auto;right:0}.AppLayout-overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:45.001rem){:root{--layout-paddings:var(--x2)}.AppLayout-content,.AppLayout-nav{border-radius:var(--border-radius)}.AppLayout-content>*,.AppLayout-nav>*{border:.0625rem solid var(--border-color);border-radius:var(--border-radius);border-top:none;box-sizing:border-box}.AppLayout{max-height:calc(100% - var(--x2))}}@media screen and (min-width:45rem) and (max-width:51.75rem){.AppLayout{max-width:45rem}}@media screen and (min-width:45.75rem){.AppLayout-header>*{padding-left:0;padding-right:0}}@media screen and (min-width:51.751rem){.Root{padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-height:calc(100% - var(--x4));max-width:60rem}.AppLayout-nav{max-width:17.5rem;transform:none}.AppLayout-nav_visible{transform:none}.AppLayout-overlay_visible{opacity:0}.AppLayout-content{left:18.5rem;width:calc(100% - 18.5rem)}}@media screen and (min-width:56.001rem){.AppLayout-nav{max-width:18.75rem}.AppLayout-content{left:19.75rem;width:calc(100% - 19.75rem)}}",""]),t.Z=i}}]);