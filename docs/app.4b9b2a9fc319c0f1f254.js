(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[143],{6119:function(e,t,r){function n(e,t){const r=(0,s.useCallback)(t,[t]);(0,s.useEffect)((()=>{function t(){r(n.matches)}if("undefined"==typeof window)return;const n=window.matchMedia(e);return n.addEventListener("change",t),t(),()=>{n.removeEventListener("change",t)}}),[e,r])}function a(e){const[t,r]=(0,s.useState)(!1);return n(e,(0,s.useCallback)((e=>{r(e)}),[])),t}function o(e){const t=window.getComputedStyle(e);return new DOMMatrixReadOnly(t.transform).m41}r.r(t),r.d(t,{default:function(){return z}});var i=r(1504),s=r(7294);r(9051);const u="undefined"!=typeof window?s.useLayoutEffect:s.useEffect;var c=r(3379),d=r.n(c),l=r(7795),p=r.n(l),v=r(569),m=r.n(v),h=r(3565),f=r.n(h),y=r(9216),b=r.n(y),g=r(4589),L=r.n(g),x=r(5931),A={};A.styleTagTransform=L(),A.setAttributes=f(),A.insert=m().bind(null,"head"),A.domAPI=p(),A.insertStyleElement=b();d()(x.Z,A),x.Z&&x.Z.locals&&x.Z.locals;var w=r(5893);let E;const k="(width > 828px)",C=(0,i.cn)("AppLayout-nav"),T=(0,i.cn)("AppLayout-overlay"),R=(0,i.cn)("AppLayout-content"),N=e=>{e.style.visibility=""};var z=function(e){function t(e){v.current&&(v.current=!1,f.current.removeEventListener("touchmove",P),f.current.removeEventListener("touchstart",Z),e.removeEventListener("touchstart",j),e.removeEventListener("touchmove",X),e.removeEventListener("touchend",_))}function r(){L&&(y.current.style.height=`${f.current.firstChild.offsetHeight+1}px`)}const i=(0,s.useRef)(0),c=(0,s.useRef)(0),d=(0,s.useRef)(!1),l=(0,s.useRef)(!1),p=(0,s.useRef)(0),v=(0,s.useRef)(!1),m=(0,s.useRef)(0),h=(0,s.useRef)(.001),f=(0,s.useRef)(null),y=(0,s.useRef)(null),b=(0,s.useRef)(null),g=a(k),L=a("(height > 1024px)"),[x,A]=(0,s.useState)(!1),[z,M]=(0,s.useState)(!1),S=!1===g,j=(0,s.useCallback)((e=>{window.matchMedia(k).matches||f.current&&(clearTimeout(E),N(f.current),p.current=o(f.current),d.current=!0,m.current=Number(getComputedStyle(document.documentElement).getPropertyValue("--overlay-opacity").trim()),h.current=Math.abs(0-m.current)/300,i.current=e.touches[0].clientX,c.current=e.touches[0].clientY,f.current.style.transition="")}),[]),X=(0,s.useCallback)((e=>{if(!d.current)return;if(e.touches.length>1)return;const t=e.touches[0].clientX,r=e.touches[0].clientY,n=t-i.current;if(!((r-i.current)/n>.8)){if(f.current&&b.current){let e=Math.max(p.current+n,-f.current.offsetWidth);e>0&&(e=0),f.current.style.transform=`translateX(${e}px)`,b.current.style.opacity=(e*h.current+m.current).toString()}return e.stopPropagation(),!1}}),[]),_=(0,s.useCallback)((e=>{if(d.current&&f.current&&b.current){d.current=!1;const t=e.changedTouches[0].clientX-i.current,r=p.current+t;if(0===t||Math.abs(t)<=8)return;t>0&&r>.85*-f.current.offsetWidth||t<0&&r>.15*-f.current.offsetWidth?(A(!0),M(!0),f.current.style.cssText="",b.current.style.cssText=""):(f.current.style.cssText="",b.current.style.cssText="",A(!1),M(!1),E=setTimeout(V,1e3))}}),[]),P=(0,s.useCallback)((e=>{d.current||e.stopPropagation()}),[]),Z=(0,s.useCallback)((e=>{e.stopPropagation()}),[]);n("(pointer: coarse)",(e=>{const r=y.current;if(r){if(e)return n=r,v.current||(v.current=!0,f.current.addEventListener("touchmove",P,{passive:!1}),f.current.addEventListener("touchstart",Z),n.addEventListener("touchstart",j,{passive:!0}),n.addEventListener("touchmove",X,{passive:!0}),n.addEventListener("touchend",_,{passive:!0})),()=>{t(r)};t(r)}var n})),L&&y.current&&!1===l.current&&(l.current=!0,r());const V=()=>{0!==o(f.current)&&(f.current.style.visibility="hidden")};!function(e,t,r,n){const a=(0,s.useRef)(t);u((()=>{a.current=t}),[t]),(0,s.useEffect)((()=>{const t=r?.current??window;if(!t||!t.addEventListener)return;const o=e=>a.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r,n])}("resize",(e=>{if(f.current&&b.current){if(r(),N(f.current),!1===g){if(0===o(f.current)&&!1===z)return A(!0),void M(!0)}clearTimeout(E),E=setTimeout(V,1e3)}}),void 0,{passive:!0});const W=(0,s.useCallback)((e=>{f.current&&(clearTimeout(E),!1===g&&x&&(E=setTimeout(V,1e3),A(!1),M(!1)))}),[g,x]),O=(0,s.useCallback)((e=>{f.current&&(clearTimeout(E),!1===g&&(x||N(f.current),A((e=>!e)),M((e=>!e))))}),[g,x]),{header:Y,nav:$,content:B}=e.children({isNavVisible:x,toggleNavVisibility:O,showToggleNavButton:S,closeNav:W});return(0,w.jsxs)("main",{className:"AppLayout",children:[(0,w.jsx)("header",{className:"AppLayout-header",children:Y}),(0,w.jsxs)("section",{ref:y,className:"AppLayout-section",children:[(0,w.jsx)("nav",{ref:f,className:C({visible:x}),children:$}),(0,w.jsx)("div",{ref:b,className:T({visible:z}),onClick:W}),(0,w.jsx)("div",{className:R(),children:B})]})]})}},5931:function(e,t,r){var n=r(8081),a=r.n(n),o=r(3645),i=r.n(o)()(a());i.push([e.id,".AppLayout{box-sizing:border-box;display:flex;flex:1;flex-direction:column;max-height:100%;width:100%}.AppLayout-header{width:100%}.AppLayout-section{box-sizing:border-box;max-height:100%;overflow:hidden;position:relative}@media screen and (max-height:64rem){.AppLayout-section{display:flex;flex:1}}.AppLayout-nav{border:.0625rem solid var(--border-color);border-radius:0 var(--border-radius) var(--border-radius) 0;max-width:18.75rem;min-width:17.5rem;position:absolute;transform:translateX(-100%);transition:transform .5s ease;z-index:2}@media screen and (min-height:64.001rem){.AppLayout-nav{border-bottom:0}}.AppLayout-nav_visible{transform:translateX(0);transition:transform .5s ease;visibility:visible}.AppLayout-content{position:relative;transition:left .3s ease;width:100%}.AppLayout-content,.AppLayout-nav{background:var(--background-color);box-sizing:border-box;height:100%;left:0;overflow-y:auto;right:0}.AppLayout-overlay{background-color:var(--overlay-color);bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.AppLayout-overlay_visible{opacity:var(--overlay-opacity);pointer-events:auto}@media screen and (min-width:31.251rem){:root{--layout-paddings:var(--x4)}.AppLayout-header>*{padding-left:0;padding-right:0}.AppLayout-content,.AppLayout-nav,.AppLayout-overlay{border-radius:var(--border-radius)}.AppLayout-content,.AppLayout-overlay{border:.0625rem solid var(--border-color)}.AppLayout-content>*{border-radius:var(--border-radius);box-sizing:border-box}.AppLayout{max-height:calc(100% - var(--x2));padding-left:var(--layout-paddings);padding-right:var(--layout-paddings)}}@media screen and (min-width:31.25rem) and (max-width:51.75rem){.AppLayout{max-width:45rem}}@media screen and (min-width:51.751rem){.Root{padding-bottom:0;padding-left:var(--x4);padding-right:var(--x4);padding-top:0}.AppLayout{max-height:calc(100% - var(--x4));max-width:60rem}.AppLayout-nav{max-width:18.75rem;transform:none}.AppLayout-nav_visible{transform:none}.AppLayout-overlay_visible{opacity:0}.AppLayout-content{left:19.75rem;width:calc(100% - 19.75rem)}}",""]),t.Z=i}}]);