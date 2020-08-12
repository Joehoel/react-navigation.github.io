(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{409:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(489)),o={id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},c={id:"version-2.x/switch-navigator",title:"createSwitchNavigator",description:"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.",source:"@site/versioned_docs/version-2.x/switch-navigator.md",permalink:"/docs/2.x/switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/switch-navigator.md",version:"2.x",sidebar_label:"createSwitchNavigator",sidebar:"version-2.x-api",previous:{title:"createStackNavigator",permalink:"/docs/2.x/stack-navigator"},next:{title:"createDrawerNavigator",permalink:"/docs/2.x/drawer-navigator"}},l=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.\nThis is the exact behavior that we want from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/auth-flow"}),"authentication flow"),"."),Object(i.b)("h2",{id:"api-definition"},"API Definition"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n")),Object(i.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(i.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"stack-navigator.html#routeconfigs"}),"example")," from ",Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(i.b)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),Object(i.b)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial route? If yes, set to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",Object(i.b)("inlineCode",{parentName:"li"},"none"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"none")," behavior.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See an example of this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/auth-flow"}),"on Snack"),"."))}u.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,h=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?r.a.createElement(h,c({ref:t},s,{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);