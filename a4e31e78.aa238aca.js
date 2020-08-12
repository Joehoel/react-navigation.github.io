/*! For license information please see a4e31e78.aa238aca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),i=(n(0),n(489)),r=n(491),c=n(492),s={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l={id:"version-5.x/troubleshooting",title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.",source:"@site/versioned_docs/version-5.x/troubleshooting.md",permalink:"/docs/troubleshooting",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/troubleshooting.md",version:"5.x",sidebar_label:"Troubleshooting",sidebar:"version-5.x/docs",previous:{title:"Compatibility layer",permalink:"/docs/compatibility"},next:{title:"Limitations",permalink:"/docs/limitations"}},u=[{value:"I&#39;m getting an error &quot;Unable to resolve module&quot; after updating to the latest version",id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",children:[{value:"Stale cache of Metro bundler",id:"stale-cache-of-metro-bundler",children:[]},{value:"Missing peer dependency",id:"missing-peer-dependency",children:[]},{value:"Missing extensions in metro configuration",id:"missing-extensions-in-metro-configuration",children:[]}]},{value:"I&#39;m getting &quot;SyntaxError in @react-navigation/xxx/xxx.tsx&quot; or &quot;SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token&quot;",id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",children:[]},{value:"I&#39;m getting &quot;Module &#39;...&#39; has no exported member &#39;xxx&#39; when using TypeScript",id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",children:[]},{value:"I&#39;m getting an error &quot;null is not an object (evaluating &#39;RNGestureHandlerModule.default.Direction&#39;)&quot;",id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",children:[]},{value:"Nothing is visible on the screen after adding a <code>View</code>",id:"nothing-is-visible-on-the-screen-after-adding-a-view",children:[]},{value:"I get the warning &quot;Non-serializable values were found in the navigation state&quot;",id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",children:[]},{value:"I&#39;m getting &quot;Invalid hook call. Hooks can only be called inside of the body of a function component&quot;",id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",children:[]},{value:"Screens are unmounting/remounting during navigation",id:"screens-are-unmountingremounting-during-navigation",children:[]},{value:"App is not working properly when connected to Chrome Debugger",id:"app-is-not-working-properly-when-connected-to-chrome-debugger",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself."),Object(i.b)("p",null,"Before troubleshooting an issue, make sure that you have upgraded to ",Object(i.b)("strong",{parentName:"p"},"the latest available versions")," of the packages. You can install the latest versions by installing the packages again (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"npm install package-name"),")."),Object(i.b)("h2",{id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version"},'I\'m getting an error "Unable to resolve module" after updating to the latest version'),Object(i.b)("p",null,"This might happen for 3 reasons:"),Object(i.b)("h3",{id:"stale-cache-of-metro-bundler"},"Stale cache of Metro bundler"),Object(i.b)("p",null,"If the module points to a local file (i.e. the name of the module starts with ",Object(i.b)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to stale cache. To fix this, try the following solutions."),Object(i.b)("p",null,"If you're using Expo, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"expo start -c\n")),Object(i.b)("p",null,"If you're not using Expo, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx react-native start --reset-cache\n")),Object(i.b)("p",null,"If that doesn't work, you can also try the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf $TMPDIR/metro-bundler-cache-*\n")),Object(i.b)("h3",{id:"missing-peer-dependency"},"Missing peer dependency"),Object(i.b)("p",null,"If the module points to an npm package (i.e. the name of the module doesn't with ",Object(i.b)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to a missing peer dependency. To fix this, install the dependency in your project:"),Object(i.b)(r.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install name-of-the-module\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add name-of-the-module\n")))),Object(i.b)("p",null,"Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder and run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," again."),Object(i.b)("h3",{id:"missing-extensions-in-metro-configuration"},"Missing extensions in metro configuration"),Object(i.b)("p",null,"Sometimes the error may look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"\n')),Object(i.b)("p",null,"This can happen if you have a custom configuration for metro and haven't specified ",Object(i.b)("inlineCode",{parentName:"p"},"ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tsx")," as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a ",Object(i.b)("inlineCode",{parentName:"p"},"metro.config.js")," file in your project and check if you have specified the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/en/configuration#sourceexts"}),Object(i.b)("inlineCode",{parentName:"a"},"sourceExts"))," option. It should at least have the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sourceExts: ['js', 'json', 'ts', 'tsx'];\n")),Object(i.b)("p",null,"If it's missing these extensions, add them and then clear metro cache as shown in the section above."),Object(i.b)("h2",{id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token"},'I\'m getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"'),Object(i.b)("p",null,"This might happen if you have an old version of the ",Object(i.b)("inlineCode",{parentName:"p"},"metro-react-native-babel-preset")," package. The easiest way to fix it is to delete your ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," as well as lock file and reinstall your dependencies."),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf node_modules\nrm package-lock.json\nnpm install\n")),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf node_modules\nrm yarn.lock\nyarn\n")),Object(i.b)("p",null,"You might also need to clear Metro bundler's cache following the instructions earlier in the page."),Object(i.b)("h2",{id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript"},"I'm getting \"Module '","[...]","' has no exported member 'xxx' when using TypeScript"),Object(i.b)("p",null,"This might happen if you have an old version of TypeScript in your project. You can try upgrading it:"),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev typescript\n")),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev typescript\n")),Object(i.b)("h2",{id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection"},"I'm getting an error \"null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')\""),Object(i.b)("p",null,"This and some similar errors might occur if you didn't link the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," library."),Object(i.b)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"react-native unlink react-native-gesture-handler\n")),Object(i.b)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",Object(i.b)("inlineCode",{parentName:"p"},"pod install")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"ios/")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd ios\npod install\ncd ..\n")),Object(i.b)("p",null,"Now rebuild the app and test on your device or simulator."),Object(i.b)("h2",{id:"nothing-is-visible-on-the-screen-after-adding-a-view"},"Nothing is visible on the screen after adding a ",Object(i.b)("inlineCode",{parentName:"h2"},"View")),Object(i.b)("p",null,"If you wrap the container in a ",Object(i.b)("inlineCode",{parentName:"p"},"View"),", make sure the ",Object(i.b)("inlineCode",{parentName:"p"},"View")," stretches to fill the container using ",Object(i.b)("inlineCode",{parentName:"p"},"flex: 1"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <NavigationContainer>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),Object(i.b)("h2",{id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state"},'I get the warning "Non-serializable values were found in the navigation state"'),Object(i.b)("p",null,"This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/state-persistence"}),"state persistence"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deep-linking"}),"deep linking")," etc."),Object(i.b)("p",null,"Example of common use cases for passing functions in params are the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To pass a callback to use in a header button. This can be achieved using ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.setOptions")," instead. See the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/header-buttons#header-interaction-with-its-screen-component"}),"guide for header buttons")," for examples."),Object(i.b)("li",{parentName:"ul"},"To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")," instead. See the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/params"}),"guide for params")," for examples."),Object(i.b)("li",{parentName:"ul"},"To pass complex data to another screen. Instead of passing the data ",Object(i.b)("inlineCode",{parentName:"li"},"params"),", you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id.")),Object(i.b)("p",null,"If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"YellowBox.ignoreWarnings"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { YellowBox } from 'react-native';\n\nYellowBox.ignoreWarnings([\n  'Non-serializable values were found in the navigation state',\n]);\n")),Object(i.b)("h2",{id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component"},'I\'m getting "Invalid hook call. Hooks can only be called inside of the body of a function component"'),Object(i.b)("p",null,"This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator#header"}),Object(i.b)("inlineCode",{parentName:"a"},"header")," option in stack navigator")," expects a function returning a react element:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{ header: (props) => <MyHeader {...props} /> }}\n/>\n')),Object(i.b)("p",null,"If you directly pass a function here, you'll get this error when using hooks:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{\n    // This is not correct\n    header: MyHeader,\n  }}\n/>\n')),Object(i.b)("p",null,"The same applies to other options like ",Object(i.b)("inlineCode",{parentName:"p"},"headerLeft"),", ",Object(i.b)("inlineCode",{parentName:"p"},"headerRight"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarIcon")," etc. as well as props such as ",Object(i.b)("inlineCode",{parentName:"p"},"tabBar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"drawerContent")," etc."),Object(i.b)("h2",{id:"screens-are-unmountingremounting-during-navigation"},"Screens are unmounting/remounting during navigation"),Object(i.b)("p",null,"Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render."),Object(i.b)("p",null,"The simplest example is something like following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={() => {\n          return <SomeComponent />;\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used."),Object(i.b)("p",null,"Here, every time the component re-renders, a new function will be created and passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect."),Object(i.b)("p",null,"Another easy to identify example of this is when you create a component inside another component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"Or when you use a higher order component (such as ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," from Redux, or ",Object(i.b)("inlineCode",{parentName:"p"},"withX")," functions that accept a component) inside another component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={withSomeData(Home)} />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Home = () => {\n  return <SomeComponent />;\n};\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not."),Object(i.b)("h2",{id:"app-is-not-working-properly-when-connected-to-chrome-debugger"},"App is not working properly when connected to Chrome Debugger"),Object(i.b)("p",null,"When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),"React Native Debugger"),") you might encounter various issues related to timing."),Object(i.b)("p",null,"This can result in issues such as button presses taking a long time to register or not working at all, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2367"}),"gestures and animations being slow and buggy")," etc. There can be other functional issues such as promises not resolving, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/4470"}),"timeouts and intervals not working correctly")," etc. as well."),Object(i.b)("p",null,"The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues."),Object(i.b)("p",null,"So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/debugging#safari-developer-tools"}),"Safari to debug your app")," which debugs the app on the device directly and does not have these issues, though it has other downsides."))}b.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},490:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},491:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),o=n.n(a),i=n(490),r=n.n(i),c=n(120),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,p=Object(a.useState)(i),b=p[0],d=p[1],m=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:r()("tab-item",s.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},492:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);