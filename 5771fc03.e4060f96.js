(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(149)),c={id:"command_focus",title:"focus",sidebar_label:"focus"},i={unversionedId:"commands/command_focus",id:"commands/command_focus",isDocsHomePage:!1,title:"focus",description:"|                       Description                       |      Argument       | Accessible | Cooldown |",source:"@site/docs/commands/focus.md",slug:"/commands/command_focus",permalink:"/docs/commands/command_focus",editUrl:"https://portal-bot.xyz/docs/commands/focus.md",version:"current",sidebar_label:"focus",sidebar:"docs",previous:{title:"dj",permalink:"/docs/commands/command_dj"},next:{title:"force",permalink:"/docs/commands/command_force"}},l=[{value:"Examples",id:"examples",children:[]}],m={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Description"),Object(o.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(o.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(o.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Creates focus channel for you and your requested member"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"td"},"!username @time")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"everyone")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"none"))))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If duration is not specified the channel will live until everyone has left"))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Lets say you want to talk with a member called Mallory with id (228666893068795905), you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"    ./focus 228666893068795905\n")),Object(o.b)("p",{parentName:"li"},"or"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"    ./focus Mallory\n")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Mallory will be asked if shed want to talk with you."),Object(o.b)("li",{parentName:"ol"},"If she replies with yes, a new channel will be made called ",Object(o.b)("inlineCode",{parentName:"li"},"PR")," (Private Room)",Object(o.b)("br",null),Object(o.b)("em",{parentName:"li"},"as no time was specified, for chatroom to autodestract")),Object(o.b)("li",{parentName:"ol"},"After the time has ended, you will be moved to your previous channel"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Lets say you want to talk with a member called Mallory with id (228666893068795905) for 23 minutes, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"    ./focus Mallory | 23\n")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Mallory will be asked if shed want to talk with you."),Object(o.b)("li",{parentName:"ol"},"If she replies with yes, a new channel will be made called ",Object(o.b)("inlineCode",{parentName:"li"},"PR-23' 12:45/01:08"),Object(o.b)("em",{parentName:"li"},"note that first part is current time and second part is expiration time")),Object(o.b)("li",{parentName:"ol"},"After the time you gave has ended (11') has ended, you will be both moved<br ",">","\nto your previous channel and the focus channel will be deleted\n",Object(o.b)("em",{parentName:"li"},"note that the name would have been ",Object(o.b)("inlineCode",{parentName:"em"},"PR-23' 01:05/01:08")," as 10 minutes will have passed"))))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In case two members have the same name, it will select the first one it spots"))))}b.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),b=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,u=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return a?r.a.createElement(u,i(i({ref:t},m),{},{components:a})):r.a.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<o;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);