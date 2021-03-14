(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(207)),b={id:"description",title:"Description",sidebar_label:"Description"},c={unversionedId:"interpreter/description",id:"interpreter/description",isDocsHomePage:!1,title:"Description",description:"Text Interpreter is a program used by Portal when asked to generate",source:"@site/docs/interpreter/description.md",slug:"/interpreter/description",permalink:"/docs/interpreter/description",editUrl:"https://portal-bot.xyz/docs/interpreter/description.md",version:"current",sidebar_label:"Description",sidebar:"docs",previous:{title:"whoami",permalink:"/docs/commands/detailed/whoami"},next:{title:"Attributes",permalink:"/docs/interpreter/objects/attributes/description"}},o=[{value:"Variables",id:"variables",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Pipes",id:"pipes",children:[]},{value:"Structures",id:"structures",children:[]},{value:"Combined",id:"combined",children:[]}],l={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Text Interpreter is a program used by Portal when asked to generate\na channel's name. For example if you have set your voices name to\n",Object(i.b)("inlineCode",{parentName:"p"},"./set v.regex $status_list")," portal knows thats ",Object(i.b)("inlineCode",{parentName:"p"},"status_list")," is a\nvariable, as it is proceded by the symbol ",Object(i.b)("em",{parentName:"p"},"$"),"  (portal can read variables,\nattributes, pipes and structures as seen bellow).",Object(i.b)("br",null),"\nSo lets say you are playing Counter Strike, your channel's name will be\n",Object(i.b)("strong",{parentName:"p"},"CS:GO"),"."),Object(i.b)("h3",{id:"variables"},Object(i.b)("a",{parentName:"h3",href:"objects/variables/description"},"Variables")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Format"),Object(i.b)("th",{parentName:"tr",align:"center"},"Example ",Object(i.b)("inlineCode",{parentName:"th"},"$status_list")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$"),Object(i.b)("td",{parentName:"tr",align:"center"},"Variables are immutable and live data that return information"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"$variable")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"CS:GO"),Object(i.b)("br",null),"or",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"CS:GO, Apex"))))),Object(i.b)("h3",{id:"attributes"},Object(i.b)("a",{parentName:"h3",href:"objects/attributes/description"},"Attributes")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Format"),Object(i.b)("th",{parentName:"tr",align:"center"},"Example ",Object(i.b)("inlineCode",{parentName:"th"},"@g.locale")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"&"),Object(i.b)("td",{parentName:"tr",align:"center"},"Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"&attribute")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"gr"))))),Object(i.b)("h3",{id:"pipes"},Object(i.b)("a",{parentName:"h3",href:"objects/pipes/description"},"Pipes")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Format"),Object(i.b)("th",{parentName:"tr",align:"center"},"Example @g.locale ","|"," upperCase"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"|"),Object(i.b)("td",{parentName:"tr",align:"center"},"Pipes are mini functions you can pass text or Variables to manipulate their outcome"),Object(i.b)("td",{parentName:"tr",align:"center"},"|","pipe"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"GR"))))),Object(i.b)("h3",{id:"structures"},Object(i.b)("a",{parentName:"h3",href:"objects/structures/description"},"Structures")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"prefix"),Object(i.b)("th",{parentName:"tr",align:"center"},"sufix"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"{{"),Object(i.b)("td",{parentName:"tr",align:"center"},"}}"),Object(i.b)("td",{parentName:"tr",align:"center"},"Structures are conditional flow manipulators")))),Object(i.b)("h3",{id:"combined"},"Combined"),Object(i.b)("p",null,"Combining everything in one naming guideline it would look something like this:",Object(i.b)("br",null)),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$status_list / &g.locale / &g.locale|upperCase\n")),Object(i.b)("p",null,"will become"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"CS:GO / gr / GR\n")))}p.isMDXComponent=!0},207:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,u=s["".concat(b,".").concat(m)]||s[m]||d[m]||i;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,b=new Array(i);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<i;l++)b[l]=r[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);