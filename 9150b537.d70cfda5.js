(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(489)),o={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},s={id:"version-4.x/state-persistence",title:"State persistence",description:"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-4.x/state-persistence.md",permalink:"/docs/4.x/state-persistence",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/state-persistence.md",version:"4.x",sidebar_label:"State persistence",sidebar:"version-4.x-docs",previous:{title:"Themes",permalink:"/docs/4.x/themes"},next:{title:"Type checking with TypeScript",permalink:"/docs/4.x/typescript"}},c=[{value:"Usage",id:"usage",children:[{value:"Development Mode",id:"development-mode",children:[]},{value:"Loading View",id:"loading-view",children:[]}]},{value:"Warning: Serializable State",id:"warning-serializable-state",children:[]},{value:"Warning: Route/Router definition changes",id:"warning-routerouter-definition-changes",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You may want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."),Object(r.b)("p",null,"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: This feature is currently considered experimental, because of the warnings listed at the end of this page. Use with caution!")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"You can enable persistence for your top-level navigator by rendering it with ",Object(r.b)("inlineCode",{parentName:"p"},"persistNavigationState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"loadNavigationState")," props:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"persistNavigationState")," is an async function that receives single argument - the navigation state object. The function should persist it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loadNavigationState")," is an async function that does the inverse - it should load the persisted navigation state and return a Promise that resolves with the navigation state object. If the function rejects, React Navigation will start as if no state was provided.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const AppNavigator = createStackNavigator({...});\nconst persistenceKey = "persistenceKey"\nconst persistNavigationState = async (navState) => {\n  try {\n    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))\n  } catch(err) {\n    // handle the error according to your needs\n  }\n}\nconst loadNavigationState = async () => {\n  const jsonString = await AsyncStorage.getItem(persistenceKey)\n  return JSON.parse(jsonString)\n}\n\nconst App = () => <AppNavigator persistNavigationState={persistNavigationState} loadNavigationState={loadNavigationState} />;\n')),Object(r.b)("h3",{id:"development-mode"},"Development Mode"),Object(r.b)("p",null,"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const AppNavigator = createStackNavigator({...});\nfunction getPersistenceFunctions() {\n  return __DEV__ ? {\n    persistNavigationState: ...,\n    loadNavigationState: ...,\n  } : undefined;\n}\nconst App = () => <AppNavigator {...getPersistenceFunctions()} />;\n")),Object(r.b)("h3",{id:"loading-view"},"Loading View"),Object(r.b)("p",null,"Because the state is loaded asynchronously, the app must render an empty/loading view for a moment before the ",Object(r.b)("inlineCode",{parentName:"p"},"loadNavigationState")," function returns. To customize the loading view that is rendered during this time, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"renderLoadingExperimental")," prop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<AppNavigator\n  persistNavigationState={...}\n  loadNavigationState={...}\n  renderLoadingExperimental={() => <ActivityIndicator />}\n/>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: This API may change in the future, which is why it is labeled experimental")),Object(r.b)("h2",{id:"warning-serializable-state"},"Warning: Serializable State"),Object(r.b)("p",null,"Each param, route, and navigation state must be fully serializable for this feature to work. Typically, you would serialize the state as a JSON string. This means that your routes and params must contain no functions, class instances, or recursive data structures."),Object(r.b)("p",null,"If you need to modify the nav state object, you may do so in the ",Object(r.b)("inlineCode",{parentName:"p"},"loadNavigationState")," / ",Object(r.b)("inlineCode",{parentName:"p"},"persistNavigationState")," functions, but note that if your ",Object(r.b)("inlineCode",{parentName:"p"},"loadNavigationState")," provides an invalid object (an object from which the navigation state cannot be recovered), React Navigation may not be able to handle the situation gracefully."),Object(r.b)("h2",{id:"warning-routerouter-definition-changes"},"Warning: Route/Router definition changes"),Object(r.b)("p",null,"When your application code changes to support new routes or different routers for a given route in your navigation state, the app may break when presented with the old navigation state."),Object(r.b)("p",null,"This may happen regularly during development as you re-configure your routes and navigator hierarchy. But it also may happen in production when you release a new version of your app!"),Object(r.b)("p",null,"The conservative behavior is to wipe the navigation state when the app has been updated. The easiest way to do this is to refer to a different persistence key for each version that you release to users."),Object(r.b)("p",null,"React Navigation uses React's ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidCatch")," functionality to attempt to mitigate crashes caused by route definition changes, but this is considered experimental and may not catch all errors."))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?i.a.createElement(h,s({ref:t},l,{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);