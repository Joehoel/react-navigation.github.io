/*! For license information please see 6fc7b633.81087b0b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),i=(n(0),n(489)),r=n(491),c=n(492),s={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},b={id:"version-5.x/tab-based-navigation",title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-5.x/tab-based-navigation.md",permalink:"/docs/tab-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/tab-based-navigation.md",version:"5.x",sidebar_label:"Tab navigation",sidebar:"version-5.x/docs",previous:{title:"Limitations",permalink:"/docs/limitations"},next:{title:"Drawer navigation",permalink:"/docs/drawer-based-navigation"}},l=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",children:[]},{value:"Customizing the appearance",id:"customizing-the-appearance",children:[]},{value:"Add badges to icons",id:"add-badges-to-icons",children:[]},{value:"Jumping between tabs",id:"jumping-between-tabs",children:[]},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",children:[]},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:[]},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:[]}],m={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."),Object(i.b)("p",null,"This guide covers ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),". You may also use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/material-bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/material-top-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," to add tabs to your application."),Object(i.b)("p",null,"Before continuing, first install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),":"),Object(i.b)(r.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/bottom-tabs\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/bottom-tabs\n")))),Object(i.b)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),Object(i.b)("samp",{id:"tab-based-navigation-minimal"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),Object(i.b)("p",null,"This is similar to how you would customize a stack navigator ","\u2014"," there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",Object(i.b)("inlineCode",{parentName:"p"},"options"),"."),Object(i.b)("samp",{id:"tab-based-navigation-icons"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// (...)\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator\n        screenOptions={({ route }) => ({\n          tabBarIcon: ({ focused, color, size }) => {\n            let iconName;\n\n            if (route.name === 'Home') {\n              iconName = focused\n                ? 'ios-information-circle'\n                : 'ios-information-circle-outline';\n            } else if (route.name === 'Settings') {\n              iconName = focused ? 'ios-list-box' : 'ios-list';\n            }\n\n            // You can return any component that you like here!\n            return <Ionicons name={iconName} size={size} color={color} />;\n          },\n        })}\n        tabBarOptions={{\n          activeTintColor: 'tomato',\n          inactiveTintColor: 'gray',\n        }}\n      >\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("p",null,"Let's dissect this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a supported option in bottom tab navigator. So we know we can use it on our screen components in the ",Object(i.b)("inlineCode",{parentName:"li"},"options")," prop, but in this case chose to put it in the ",Object(i.b)("inlineCode",{parentName:"li"},"screenOptions")," prop of ",Object(i.b)("inlineCode",{parentName:"li"},"Tab.Navigator")," in order to centralize the icon configuration for convenience."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state, ",Object(i.b)("inlineCode",{parentName:"li"},"color"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"size")," params. If you take a peek further down in the configuration you will see ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarOptions")," and ",Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," and ",Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",Object(i.b)("inlineCode",{parentName:"li"},"color")," that is passed through to the ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state (focused is active). The ",Object(i.b)("inlineCode",{parentName:"li"},"size")," is the size of the icon expected by the tab bar."),Object(i.b)("li",{parentName:"ul"},"Read the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/bottom-tab-navigator"}),"full API reference")," for further information on ",Object(i.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration options.")),Object(i.b)("h2",{id:"add-badges-to-icons"},"Add badges to icons"),Object(i.b)("p",null,"Sometimes we want to add badges to some icons. You can use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/bottom-tab-navigator#tabbarbadge"}),Object(i.b)("inlineCode",{parentName:"a"},"tabBarBadge")," option")," to do it:"),Object(i.b)("samp",{id:"tab-based-navigation-badges"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />\n')),Object(i.b)("p",null,"From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React Context"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mobx.js.org/"}),"MobX")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js"}),"event emitters"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/navigators/tabs/tabs-badges.png",alt:"Tabs with badges"}))),Object(i.b)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),Object(i.b)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.navigate"),"."),Object(i.b)("samp",{id:"tab-based-navigation-switching"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n    </View>\n  );\n}\n")),Object(i.b)("h2",{id:"a-stack-navigator-for-each-tab"},"A stack navigator for each tab"),Object(i.b)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),Object(i.b)("samp",{id:"tab-based-navigation-stack"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Details!</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nconst HomeStack = createStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n}\n\nconst SettingsStack = createStackNavigator();\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen name=\"Settings\" component={SettingsScreen} />\n      <SettingsStack.Screen name=\"Details\" component={DetailsScreen} />\n    </SettingsStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeStackScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),Object(i.b)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),Object(i.b)("p",null,'For example, React Navigation\'s tab navigator takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),Object(i.b)("h2",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hiding-tabbar-in-screens"}),"See the documentation here")))}u.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(r,".").concat(p)]||m[p]||u[p]||i;return n?o.a.createElement(d,c({ref:t},b,{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},490:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},491:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),o=n.n(a),i=n(490),r=n.n(i),c=n(120),s=n.n(c),b=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,m=Object(a.useState)(i),u=m[0],p=m[1],d=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:r()("tab-item",s.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},492:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);