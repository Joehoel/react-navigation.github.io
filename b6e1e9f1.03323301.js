(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{390:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(489)),o={id:"switch-navigator",title:"createSwitchNavigator",sidebar_label:"createSwitchNavigator"},c={id:"version-3.x/switch-navigator",title:"createSwitchNavigator",description:"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.",source:"@site/versioned_docs/version-3.x/switch-navigator.md",permalink:"/docs/3.x/switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/switch-navigator.md",version:"3.x",sidebar_label:"createSwitchNavigator",sidebar:"version-3.x-docs",previous:{title:"createStackNavigator",permalink:"/docs/3.x/stack-navigator"},next:{title:"createAnimatedSwitchNavigator",permalink:"/docs/3.x/animated-switch-navigator"}},l=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away.\nThis is the exact behavior that we want from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/auth-flow"}),"authentication flow"),"."),Object(r.b)("h2",{id:"api-definition"},"API Definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n")),Object(r.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"stack-navigator.html#routeconfigs"}),"example")," from ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(r.b)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),Object(r.b)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"backBehavior")," - ",Object(r.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial route, ",Object(r.b)("inlineCode",{parentName:"li"},"order")," to return to previous route, ",Object(r.b)("inlineCode",{parentName:"li"},"history")," to return to last visited route, or ",Object(r.b)("inlineCode",{parentName:"li"},"none"),".")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"See an example of this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/auth-flow-v3"}),"on Snack"),"."))}u.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||r;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);