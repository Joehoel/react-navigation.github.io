(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{431:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),o=(a(0),a(489)),i={id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},s={id:"version-5.x/MST-integration",title:"Integrating with MobX State Tree",description:"> TODO: This guide is incomplete. Please help improve this by sending pull requests.",source:"@site/versioned_docs/version-5.x/MST-integration.md",permalink:"/docs/MST-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/MST-integration.md",version:"5.x",sidebar_label:"MobX State Tree integration",sidebar:"version-5.x/docs",previous:{title:"Redux integration",permalink:"/docs/redux-integration"},next:{title:"Localization",permalink:"/docs/localization"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Guide",id:"guide",children:[{value:"Navigation params",id:"navigation-params",children:[]}]},{value:"Summary",id:"summary",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO: This guide is incomplete. Please help improve this by sending pull requests.")),Object(o.b)("p",null,"This guide explores possible way to use React Navigation in a React Native project that uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mobxjs/mobx-state-tree"}),"MobX State Tree"),"(MST) for state management. The guide is accompanied by a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-mst-demo"}),"sample app"),". Parts of the guide may be relevant also for users of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mobxjs/mobx"}),"MobX")," but please be aware of the fact that MobX does not come with a built-in solution for (de)serializing its state."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please note that in this guide, Mobx State Tree is not used to manage the navigation state itself - just the navigation params!")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Our goal with this guide is to use MST with React Navigation and achieve optimal developer experience. In the scope of this guide, this means allowing us to do a full JS reload and be brought back to the state before the reload happened."),Object(o.b)("p",null,"We will do this by persisting the navigation state using the React Navigation's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/state-persistence"}),"built-in mechanism"),". We also need to persist the app state and navigation params - that way, when you're working on a screen in your app and do a full JS reload, you will be brought back to the same screen, with the same data in it."),Object(o.b)("h2",{id:"guide"},"Guide"),Object(o.b)("p",null,"First, start by creating initial navigation structure and React components. When you're done with that, continue with modelling your state in MST. If you want to learn more about this, check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://egghead.io/lessons/react-describe-your-application-domain-using-mobx-state-tree-mst-models"}),"egghead.io course"),"."),Object(o.b)("p",null,"At this point, you're probably wondering how to connect your MST objects with the components. The answer is in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mobxjs/mobx-react"}),"mobx-react package")," that contains React bindings for MobX (they also work for MST). You will likely be using the ",Object(o.b)("inlineCode",{parentName:"p"},"Provider")," component and the ",Object(o.b)("inlineCode",{parentName:"p"},"inject")," and ",Object(o.b)("inlineCode",{parentName:"p"},"observer")," functions."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Provider")," to wrap what you return from your root component's render method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<Provider myObject={this.myObject}>\n  <NavigationContainer>{/* Screen configuration */}</NavigationContainer>\n</Provider>\n")),Object(o.b)("p",null,"this will allow you to access ",Object(o.b)("inlineCode",{parentName:"p"},"myObject")," from any React component in the application through the ",Object(o.b)("inlineCode",{parentName:"p"},"inject")," function which can be quite useful."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"observer")," function to wrap all components that render observable data. This will make sure the components re-render once the data they render changes."),Object(o.b)("h3",{id:"navigation-params"},"Navigation params"),Object(o.b)("p",null,"Screens in your application often depend on params. React Navigation allows you to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/params"}),"send params")," from one screen to another. These params are stored in the navigation state. However, in order to persist the navigation state, it needs to be serializable. This requirement does not play well with MST, because the MST objects are complex objects and React Navigation doesn't know how to (de)serialize them. In this guide, we will work around this by storing the navigation params ourselves."),Object(o.b)("p",null,"This means that rather than sending the params from one screen to another (eg. with ",Object(o.b)("inlineCode",{parentName:"p"},"props.navigation.navigate('MyScreen', { complexMSTObject })"),") we will store the params to a navigation store, then navigate without sending any params, and on the target screen, we'll pick the params up from the navigation store."),Object(o.b)("p",null,"To give an example, the navigation store may look similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { types, onSnapshot, getRoot } from 'mobx-state-tree';\nimport { Product } from '../models/Product';\nimport { User } from '../models/User';\n\nexport const NavigationStore = types\n  .model('NavigationStore', {\n    productDetailScreenParams: types.map(\n      types.model('ProductDetailScreenParams', {\n        product: types.optional(types.safeReference(Product)),\n      })\n    ),\n    userProfileScreenParams: types.model('UserProfileScreenParams', {\n      user: types.maybe(types.safeReference(User)),\n    }),\n  })\n  .actions(self => ({\n    ...\n  }));\n")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"userProfileScreenParams")," is a simple model with a ",Object(o.b)("inlineCode",{parentName:"p"},"user")," entry, while ",Object(o.b)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map of ",Object(o.b)("inlineCode",{parentName:"p"},"ProductDetailScreenParams")," model. The reason we chose this shape of data is that we only have a single user profile screen in our app which reads its params from ",Object(o.b)("inlineCode",{parentName:"p"},"userProfileScreenParams"),". ",Object(o.b)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map because the app can have several product screens on a stack. Each screen points to a ",Object(o.b)("inlineCode",{parentName:"p"},"Product")," instance saved in the map. The keys into the map are the React Navigation ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"navigation-key.md#usage-with-the-navigate-navigation-actionshtml-navigate-call"}),"keys"),": think of the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," as of an identifier of the route."),Object(o.b)("p",null,"Your navigation store may also be just one map where for each screen (regardless if it is a product or user profile screen), we store its navigation params. This is the approach taken in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-mst-demo"}),"sample app"),"."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"you can use React Navigation with MobX State Tree in a React Native app"),Object(o.b)("li",{parentName:"ul"},"use the ",Object(o.b)("inlineCode",{parentName:"li"},"Provider")," component and the ",Object(o.b)("inlineCode",{parentName:"li"},"inject")," and ",Object(o.b)("inlineCode",{parentName:"li"},"observer")," functions to wire up MobX or MST with React"),Object(o.b)("li",{parentName:"ul"},"it's possible to persist the entire application state and restore it upon JS reload")))}l.isMDXComponent=!0},489:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(d,s({ref:t},p,{components:a})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);