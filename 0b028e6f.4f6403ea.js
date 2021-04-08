(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{227:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(227)),o={id:"ranking",title:"Ranking System",sidebar_label:"Ranking System"},s={unversionedId:"ranking",id:"ranking",isDocsHomePage:!1,title:"Ranking System",description:"Description",source:"@site/docs/ranking.md",slug:"/ranking",permalink:"/docs/ranking",editUrl:"https://portal-bot.xyz/docs/ranking.md",version:"current",sidebar_label:"Ranking System",sidebar:"docs",previous:{title:"if",permalink:"/docs/interpreter/objects/structures/detailed/if"}},l=[{value:"Description",id:"description",children:[{value:"Ranking Speed",id:"ranking-speed",children:[]},{value:"Voice channel points are given as follows",id:"voice-channel-points-are-given-as-follows",children:[]},{value:"Points per message are given as follows",id:"points-per-message-are-given-as-follows",children:[]},{value:"Leveling",id:"leveling",children:[]},{value:"Setting up the Ranking System",id:"setting-up-the-ranking-system",children:[]},{value:"Get Ranking Information",id:"get-ranking-information",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Portal's leveling system tracks messages sent and minutes spent in server's voice channels.",Object(i.b)("br",null),"\nDifferent actions ammount to different points that give you levels which then give you roles."),Object(i.b)("h3",{id:"ranking-speed"},"Ranking Speed"),Object(i.b)("p",null,"There are four ranking speeds."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"none"),", ",Object(i.b)("em",{parentName:"li"},"ranking is disabled")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"slow"),", ",Object(i.b)("em",{parentName:"li"},"members have to engage more to rank up")," and the ",Object(i.b)("em",{parentName:"li"},"multiplier is 0.05")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"default"),", ",Object(i.b)("em",{parentName:"li"},"the normal mode")," and the ",Object(i.b)("em",{parentName:"li"},"multiplier is 0.10")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"fast"),", ",Object(i.b)("em",{parentName:"li"},"members get levels faster")," and the ",Object(i.b)("em",{parentName:"li"},"multiplier is 0.15"))),Object(i.b)("h3",{id:"voice-channel-points-are-given-as-follows"},"Voice channel points are given as follows"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"seconds spent")," x speed-multiplier x 0.50",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"minutes spent")," x speed-multiplier x 30 x 1.15",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"hours spent")," x speed-multiplier x 30 x 30 x 1.25"),Object(i.b)("h3",{id:"points-per-message-are-given-as-follows"},"Points per message are given as follows"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"message characters")," x speed-multiplier",Object(i.b)("br",null),"\n",Object(i.b)("em",{parentName:"p"},"(maximum amount of points per message is 5)")),Object(i.b)("h3",{id:"leveling"},"Leveling"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Tier")," is a ranking bucket you are in. As you level you up, you will reach higher tiers.\nHigher tiers mean harder level-ups, as they factor in the leveling point thresholds."),Object(i.b)("p",null,"When ",Object(i.b)("strong",{parentName:"p"},"points")," are greater than ",Object(i.b)("strong",{parentName:"p"},"tier x 2500"),", you level up. After a level-up your points are reset.\nEvery fifth level-up your ",Object(i.b)("strong",{parentName:"p"},"tier")," increases by one, which means it is harder to level up every 5th level,\nfor the next five levels.",Object(i.b)("br",null)),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(Leveling from 1-5 is easier than 5-10 and so on)")),Object(i.b)("h3",{id:"setting-up-the-ranking-system"},"Setting up the Ranking System"),Object(i.b)("p",null,"You must use command ",Object(i.b)("a",{parentName:"p",href:"commands/detailed/set_ranks"},"set_ranks")," in order to set the Ranking System in place.\nThe ranking system is set once and if something must be added, you have to re-write the system.\nIn order to see the the current ranking system use command ",Object(i.b)("a",{parentName:"p",href:"commands/detailed/ranks"},"ranks"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Roles that are destributed are not remove upon Ranking System update."))),Object(i.b)("h3",{id:"get-ranking-information"},"Get Ranking Information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To see the server leaderboard use command ",Object(i.b)("a",{parentName:"li",href:"commands/detailed/leaderboard"},"leaderboard")),Object(i.b)("li",{parentName:"ul"},"To see your current ranking stats use command ",Object(i.b)("a",{parentName:"li",href:"commands/detailed/level"},"level")),Object(i.b)("li",{parentName:"ul"},"To see what role you get at what level use command ",Object(i.b)("a",{parentName:"li",href:"commands/detailed/ranks"},"ranks"))))}p.isMDXComponent=!0}}]);