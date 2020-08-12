(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(0),n(489)),i={id:"routers",title:"Routers",sidebar_label:"Routers"},c={id:"version-3.x/routers",title:"Routers",description:"Routers define a component's navigation state, and they allow the developer to define paths and actions that can be handled.",source:"@site/versioned_docs/version-3.x/routers.md",permalink:"/docs/3.x/routers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/routers.md",version:"3.x",sidebar_label:"Routers",sidebar:"version-3.x-docs",previous:{title:"Overview",permalink:"/docs/3.x/custom-navigator-overview"},next:{title:"Custom navigators",permalink:"/docs/3.x/custom-navigators"}},s=[{value:"Built-In Routers",id:"built-in-routers",children:[]},{value:"Using Routers",id:"using-routers",children:[]},{value:"Customizing Routers",id:"customizing-routers",children:[{value:"Custom Navigation Actions",id:"custom-navigation-actions",children:[]},{value:"Blocking Navigation Actions",id:"blocking-navigation-actions",children:[]},{value:"Handling Custom URIs",id:"handling-custom-uris",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Routers define a component's navigation state, and they allow the developer to define paths and actions that can be handled."),Object(o.b)("h2",{id:"built-in-routers"},"Built-In Routers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-navigation")," ships with a few standard routers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js"}),"StackRouter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/TabRouter.js"}),"TabRouter"))),Object(o.b)("h2",{id:"using-routers"},"Using Routers"),Object(o.b)("p",null,"To make a navigator manually, put a static ",Object(o.b)("inlineCode",{parentName:"p"},"router")," on a component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyNavigator extends React.Component {\n  static router = StackRouter(routes, config);\n  ...\n}\n")),Object(o.b)("p",null,"Now you can use this component as a ",Object(o.b)("inlineCode",{parentName:"p"},"screen")," in another navigator, and the navigation logic for ",Object(o.b)("inlineCode",{parentName:"p"},"MyNavigator")," will be defined by this ",Object(o.b)("inlineCode",{parentName:"p"},"StackRouter"),"."),Object(o.b)("h2",{id:"customizing-routers"},"Customizing Routers"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/custom-routers"}),"Custom Router API spec")," to learn about the API of ",Object(o.b)("inlineCode",{parentName:"p"},"StackRouter")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TabRouter"),". You can override the router functions as you see fit:"),Object(o.b)("h3",{id:"custom-navigation-actions"},"Custom Navigation Actions"),Object(o.b)("p",null,"To override navigation behavior, you can override the navigation state logic in ",Object(o.b)("inlineCode",{parentName:"p"},"getStateForAction"),", and manually manipulate the ",Object(o.b)("inlineCode",{parentName:"p"},"routes")," and ",Object(o.b)("inlineCode",{parentName:"p"},"index"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const MyApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\n\nconst defaultGetStateForAction = MyApp.router.getStateForAction;\n\nMyApp.router.getStateForAction = (action, state) => {\n  if (state && action.type === 'PushTwoProfiles') {\n    const routes = [\n      ...state.routes,\n      {key: 'A', routeName: 'Profile', params: { name: action.name1 }},\n      {key: 'B', routeName: 'Profile', params: { name: action.name2 }},\n    ];\n    return {\n      ...state,\n      routes,\n      index: routes.length - 1,\n    };\n  }\n  return defaultGetStateForAction(action, state);\n};\n")),Object(o.b)("h3",{id:"blocking-navigation-actions"},"Blocking Navigation Actions"),Object(o.b)("p",null,"Sometimes you may want to prevent some navigation activity, depending on your route."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation'\n\nconst MyStackRouter = StackRouter({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\n\nconst defaultGetStateForAction = MyStackRouter.router.getStateForAction;\n\nMyStackRouter.router.getStateForAction = (action, state) => {\n  if (\n    state &&\n    action.type === NavigationActions.BACK &&\n    state.routes[state.index].params.isEditing\n  ) {\n    // Returning null from getStateForAction means that the action\n    // has been handled/blocked, but there is not a new state\n    return null;\n  }\n\n  return defaultGetStateForAction(action, state);\n};\n")),Object(o.b)("h3",{id:"handling-custom-uris"},"Handling Custom URIs"),Object(o.b)("p",null,"Perhaps your app has a unique URI which the built-in routers cannot handle. You can always extend the router ",Object(o.b)("inlineCode",{parentName:"p"},"getActionForPathAndParams"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation'\n\nconst MyApp = createStackNavigator({\n  Home: { screen: HomeScreen },\n  Profile: { screen: ProfileScreen },\n}, {\n  initialRouteName: 'Home',\n})\nconst previousGetActionForPathAndParams = MyApp.router.getActionForPathAndParams;\n\nObject.assign(MyApp.router, {\n  getActionForPathAndParams(path, params) {\n    if (\n      path === 'my/custom/path' &&\n      params.magic === 'yes'\n    ) {\n      // returns a profile navigate action for /my/custom/path?magic=yes\n      return NavigationActions.navigate({\n        routeName: 'Profile',\n        action: NavigationActions.navigate({\n          // This child action will get passed to the child router\n          // ProfileScreen.router.getStateForAction to get the child\n          // navigation state.\n          routeName: 'Friends',\n        }),\n      });\n    }\n    return previousGetActionForPathAndParams(path, params);\n  },\n});\n")))}l.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,c({ref:t},u,{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);