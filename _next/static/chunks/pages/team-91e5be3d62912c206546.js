_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{MfLU:function(e,t,n){var o={"./badges-data":["OQ4D",6],"./badges-data.json":["OQ4D",6],"./events":["QuJF",7],"./events.json":["QuJF",7],"./socialMediaHandles":["jaLc",9],"./socialMediaHandles.json":["jaLc",9],"./sponsors":["NPz5",10],"./sponsors.json":["NPz5",10],"./team":["pFiY",11],"./team.json":["pFiY",11],"./team/android-team":["zFCo",12],"./team/android-team.json":["zFCo",12],"./team/content-team":["PIZv",13],"./team/content-team.json":["PIZv",13],"./team/design-team":["QoPt",14],"./team/design-team.json":["QoPt",14],"./team/management-team":["3B11",15],"./team/management-team.json":["3B11",15],"./team/ml-team":["nNlT",16],"./team/ml-team.json":["nNlT",16],"./team/web-team":["UJS8",17],"./team/web-team.json":["UJS8",17]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,3)}))}i.keys=function(){return Object.keys(o)},i.id="MfLU",e.exports=i},"R/K7":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n("Ti8R")}])},Ti8R:function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),i=n("q1tI"),a=n("vOnD"),r=n("8Kt/"),c=n.n(r),d=n("v7au"),l=n("Ab+f"),s=a.c.div.withConfig({displayName:"MemberCard__Card",componentId:"sc-10ofxo8-0"})(["background:",";border:1px solid ",";border-radius:5px;padding:2rem;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);cursor:pointer;-webkit-tap-highlight-color:transparent;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),m=a.c.img.withConfig({displayName:"MemberCard__Image",componentId:"sc-10ofxo8-1"})(["width:90px;height:90px;border-radius:50%;object-fit:cover;"]),j=a.c.div.withConfig({displayName:"MemberCard__ImageWrapper",componentId:"sc-10ofxo8-2"})(["display:flex;justify-content:center;margin-bottom:2em;"]),b=a.c.div.withConfig({displayName:"MemberCard__Name",componentId:"sc-10ofxo8-3"})(["font-weight:700;font-size:18px;text-align:center;margin-bottom:1rem;"]),f=a.c.div.withConfig({displayName:"MemberCard__Title",componentId:"sc-10ofxo8-4"})(["color:",";font-size:18px;text-align:center;"],(function(e){return e.theme.color.subText})),p=function(e){var t=e.member,n=e.handleModalToggle,i=void 0===n?null:n;return Object(o.jsxs)(s,{onClick:function(){return i(t)},children:[Object(o.jsx)(j,{children:Object(o.jsx)(m,{src:t.profile})}),Object(o.jsx)(b,{children:t.name}),t.title&&Object(o.jsx)(f,{children:t.title})]})},g=n("LjP0"),h=a.c.div.withConfig({displayName:"MemberModal__Overlay",componentId:"sc-1dic6q1-0"})(["background:rgba(0,0,0,0.8);width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:1001;"]),x=a.c.div.withConfig({displayName:"MemberModal__Card",componentId:"sc-1dic6q1-1"})(["background:",";border:1px solid ",";border-radius:5px;padding:2rem;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1002;max-width:30rem;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),u=a.c.img.withConfig({displayName:"MemberModal__Image",componentId:"sc-1dic6q1-2"})(["width:140px;height:140px;border-radius:50%;object-fit:cover;@media (max-width:","){width:100px;height:100px;}"],(function(e){return e.theme.screen.sm})),O=a.c.div.withConfig({displayName:"MemberModal__ImageWrapper",componentId:"sc-1dic6q1-3"})(["display:flex;justify-content:center;margin-bottom:2em;"]),w=a.c.div.withConfig({displayName:"MemberModal__Name",componentId:"sc-1dic6q1-4"})(["font-weight:700;font-size:25px;text-align:center;margin-bottom:1rem;"]),_=a.c.div.withConfig({displayName:"MemberModal__Title",componentId:"sc-1dic6q1-5"})(["color:",";font-size:20px;text-align:center;"],(function(e){return e.theme.color.subText})),v=a.c.div.withConfig({displayName:"MemberModal__Bio",componentId:"sc-1dic6q1-6"})(["color:",";font-size:16px;"],(function(e){return e.theme.color.subText})),M=a.c.div.withConfig({displayName:"MemberModal__Flex",componentId:"sc-1dic6q1-7"})(["display:flex;justify-content:space-around;margin-top:3rem;"]),y=a.c.div.withConfig({displayName:"MemberModal__Icon",componentId:"sc-1dic6q1-8"})(["background:#ffffff;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.2);padding:1rem;border-radius:50%;font-size:25px;margin:1rem;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;}@media (max-width:","){font-size:20px;margin:0.6rem;}"],(function(e){return e.theme.screen.sm})),C=function(e){var t=e.member,n=e.handleModalToggle;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{onClick:function(){return n(null)}}),Object(o.jsxs)(x,{children:[Object(o.jsx)(O,{children:Object(o.jsx)(u,{src:t.profile})}),Object(o.jsx)(w,{children:t.name}),t.title&&Object(o.jsx)(_,{children:t.title}),t.bio&&Object(o.jsx)(v,{children:t.bio}),Object(o.jsxs)(M,{children:[t.social.medium&&Object(o.jsx)("a",{href:t.social.medium,target:"_blank",children:Object(o.jsx)(y,{children:Object(o.jsx)(g.f,{color:"#000000"})})}),t.social.twitter&&Object(o.jsx)("a",{href:t.social.twitter,target:"_blank",children:Object(o.jsx)(y,{children:Object(o.jsx)(g.g,{color:"#55acee"})})}),t.social.github&&Object(o.jsx)("a",{href:t.social.github,target:"_blank",children:Object(o.jsx)(y,{children:Object(o.jsx)(g.c,{color:"#333"})})}),t.social.linkedin&&Object(o.jsx)("a",{href:t.social.linkedin,target:"_blank",children:Object(o.jsx)(y,{children:Object(o.jsx)(g.e,{color:"#0077b5"})})})]})]})]})},T=n("FaW0"),N=function(e){var t=e.title,a=e.handleModalToggle,r=e.relativeLocation,c=Object(i.useState)([]),l=c[0],s=c[1],m=Object(i.useState)(!0),j=m[0],b=m[1];return n("MfLU")("./".concat(r)).then((function(e){s(e.default.team)})),Object(o.jsxs)(I,{children:[Object(o.jsxs)(k,{onClick:function(){return b(!j)},children:[Object(o.jsx)(L,{children:t}),j?Object(o.jsx)(d.a,{}):Object(o.jsx)(d.b,{})]}),j&&Object(o.jsx)(z,{children:l.map((function(e,t){return Object(o.jsx)(p,{member:e,handleModalToggle:a},t)}))})]})},I=a.c.div.withConfig({displayName:"team__SectionStyled",componentId:"sc-1ccjr8u-0"})(["padding-top:2.5rem;display:flex;flex-direction:column;gap:2rem;"]),k=a.c.div.withConfig({displayName:"team__HeaderStyled",componentId:"sc-1ccjr8u-1"})(["display:flex;font-size:2.2rem;justify-content:space-between;cursor:pointer;"]),L=a.c.div.withConfig({displayName:"team__TitleStyled",componentId:"sc-1ccjr8u-2"})(["font-size:1.7rem;font-weight:bold;"]),z=a.c.div.withConfig({displayName:"team__GridStyled",componentId:"sc-1ccjr8u-3"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2rem;@media (max-width:","){grid-template-columns:1fr 1fr 1fr;}@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:","){grid-template-columns:1fr 1fr;grid-column-gap:.6rem;}"],(function(e){return e.theme.screen.md}),(function(e){return e.theme.screen.sm}),(function(e){return e.theme.screen.xs}));t.default=function(){var e=Object(i.useState)(null),t=e[0],n=e[1],a=function(e){n(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)(c.a,{children:Object(o.jsx)("title",{children:"DSC VIT Bhopal - Team"})}),t&&Object(o.jsx)(C,{member:t,handleModalToggle:a}),Object(o.jsx)(N,{title:"Core Team",handleModalToggle:a,relativeLocation:"team.json"}),Object(o.jsx)(N,{title:"Web Team",handleModalToggle:a,relativeLocation:"team/web-team.json"}),Object(o.jsx)(N,{title:"ML Team",handleModalToggle:a,relativeLocation:"team/ml-team.json"}),Object(o.jsx)(N,{title:"Android Team",handleModalToggle:a,relativeLocation:"team/android-team.json"}),Object(o.jsx)(N,{title:"Design Team",handleModalToggle:a,relativeLocation:"team/design-team.json"}),Object(o.jsx)(N,{title:"Content Team",handleModalToggle:a,relativeLocation:"team/content-team.json"}),Object(o.jsx)(N,{title:"Management Team",handleModalToggle:a,relativeLocation:"team/management-team.json"})]}),Object(o.jsx)(T.a,{})]})}}},[["R/K7",0,1,4,8,2,3]]]);