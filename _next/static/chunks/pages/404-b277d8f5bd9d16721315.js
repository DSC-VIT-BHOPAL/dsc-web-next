_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{BdxU:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=(t("q1tI"),t("8Kt/")),c=t.n(o),a=t("YFqc"),u=t.n(a),i=t("FaW0");n.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"DSC VIT Bhopal - 404 Not Found"})}),"Not Found",Object(r.jsx)(u.a,{href:"/",children:"Home"}),Object(r.jsx)(i.a,{})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),f={};function s(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,w=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var _=c.Children.only(v),g=_&&"object"===typeof _&&_.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),m=r(E,2),j=m[0],M=m[1],N=c.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,c.useEffect)((function(){var e=M&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,M,w,n,t]);var O={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,b,y,w)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};return(e.passHref||"a"===_.type&&!("href"in _.props))&&(O.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof w?w:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(_,O)};n.default=l},i67r:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("BdxU")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),f=(0,c.useState)(!1),s=r(f,2),l=s[0],d=s[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){u||l||(0,a.default)((function(){return d(!0)}))}),[l]),[p,l]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map}},[["i67r",0,1,4,2,5,3]]]);