(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(208)),i={id:"music",title:"music",sidebar_label:"music"},o={unversionedId:"commands/detailed/music",id:"commands/detailed/music",isDocsHomePage:!1,title:"music",description:"|                              Description                              |               Argument                | Accessible | Cooldown |",source:"@site/docs/commands/detailed/music.md",slug:"/commands/detailed/music",permalink:"/docs/commands/detailed/music",editUrl:"https://portal-bot.xyz/docs/commands/detailed/music.md",version:"current",sidebar_label:"music",sidebar:"docs",previous:{title:"level",permalink:"/docs/commands/detailed/level"},next:{title:"ping",permalink:"/docs/commands/detailed/ping"}},l=[{value:"Examples",id:"examples",children:[]}],m={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(c.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(c.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Creates a new music channel or sets",Object(c.b)("br",null),"the current channel as music"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"td"},"!channel ","|"," @category")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"admin")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to create a new music channel, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./music music_player\n")),Object(c.b)("p",{parentName:"li"},"  This would create a new music channel called ",Object(c.b)("em",{parentName:"p"},"music_player"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to create a new music channel under a category, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./music music_player | music\n")),Object(c.b)("p",{parentName:"li"},"  This would create a new music channel called ",Object(c.b)("em",{parentName:"p"},"music_player")," under category ",Object(c.b)("em",{parentName:"p"},"music"),"."))))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||u[b]||c;return n?a.a.createElement(d,o(o({ref:t},m),{},{components:n})):a.a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<c;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);