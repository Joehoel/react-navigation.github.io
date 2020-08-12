(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{473:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(489)),o={id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},s={id:"version-5.x/handling-safe-area",title:"Supporting safe areas",description:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:",source:"@site/versioned_docs/version-5.x/handling-safe-area.md",permalink:"/docs/handling-safe-area",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/handling-safe-area.md",version:"5.x",sidebar_label:"Supporting safe areas",sidebar:"version-5.x/docs",previous:{title:"Authentication flows",permalink:"/docs/auth-flow"},next:{title:"Hiding tab bar in specific screens",permalink:"/docs/hiding-tabbar-in-screens"}},c=[{value:"Hidden/Custom Header or Tab Bar",id:"hiddencustom-header-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Use the hook for more control",id:"use-the-hook-for-more-control",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Physical notches"),Object(r.b)("li",{parentName:"ul"},"Status bar overlay"),Object(r.b)("li",{parentName:"ul"},"Home activity indicator on iOS"),Object(r.b)("li",{parentName:"ul"},"Navigation bar on Android")),Object(r.b)("p",null,'The area not overlapped by such items is referred to as "safe area".'),Object(r.b)("p",null,"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),Object(r.b)("p",null,"While React Navigation handles safe areas for the built-in UI elements by default, your own content also needs to handle it to ensure that content isn't hidden by these items."),Object(r.b)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/00-intro.png",alt:"Notch on the iPhone X"}))),Object(r.b)("p",null,"While React Native exports a ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component, it has some inherent issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. In addition, this component only supports iOS 10+ with no support for older iOS versions or Android. We recommend to use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),"react-native-safe-area-context")," library to handle safe areas in a more reliable way."),Object(r.b)("p",null,"The rest of this guide gives more information on how to support safe areas in React Navigation."),Object(r.b)("h2",{id:"hiddencustom-header-or-tab-bar"},"Hidden/Custom Header or Tab Bar"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/01-iphonex-default.png",alt:"Default React Navigation Behavior"}))),Object(r.b)("p",null,"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."),Object(r.b)("p",null,"For example, if I render nothing for the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," or ",Object(r.b)("inlineCode",{parentName:"p"},"tabBar"),", nothing renders"),Object(r.b)("samp",{id:"hidden-components"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName=\"Home\" headerMode=\"none\">\n        <Stack.Screen name=\"Home\">\n          {() => (\n            <Tab.Navigator initialRouteName=\"Analytics\" tabBar={() => null}>\n              <Tab.Screen name=\"Analytics\" component={Demo} />\n              <Tab.Screen name=\"Profile\" component={Demo} />\n            </Tab.Navigator>\n          )}\n        </Stack.Screen>\n\n        <Stack.Screen name=\"Settings\" component={Demo} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/02-iphonex-content-hidden.png",alt:"Text hidden by iPhoneX UI elements"}))),Object(r.b)("p",null,"To fix this issue you can apply safe area insets on your content. This can be achieved easily by using the ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component from the ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," library:"),Object(r.b)("samp",{id:"safe-area-example"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  return (\n    <SafeAreaView\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </SafeAreaView>\n  );\n}\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>{/*(...) */}</NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n")),Object(r.b)("p",null,"Make sure to wrap your app in ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaProvider")," as per the instructions ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context#usage"}),"here"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/03-iphonex-content-fixed.png",alt:"Content spaced correctly with safe area insets"}))),Object(r.b)("p",null,"This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements."),Object(r.b)("h2",{id:"landscape-mode"},"Landscape Mode"),Object(r.b)("p",null,"Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/04-iphonex-landscape-hidden.png",alt:"App in landscape mode with text hidden"}))),Object(r.b)("p",null,"To fix this you can, once again, apply safe area insets to your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/iphoneX/05-iphonex-landscape-fixed.png",alt:"App in landscape mode with text visible"}))),Object(r.b)("h2",{id:"use-the-hook-for-more-control"},"Use the hook for more control"),Object(r.b)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",Object(r.b)("inlineCode",{parentName:"p"},"style")," object:"),Object(r.b)("samp",{id:"use-safe-area"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n")),Object(r.b)("p",null,"Similarly, you could apply these paddings in ",Object(r.b)("inlineCode",{parentName:"p"},"contentContainerStyle")," of ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Don't wrap your whole app in ",Object(r.b)("inlineCode",{parentName:"li"},"SafeAreaView"),", instead wrap content inside your screens"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"useSafeAreaInsets")," hook for more control over where the insets are applied")))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(h,s({ref:t},l,{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);