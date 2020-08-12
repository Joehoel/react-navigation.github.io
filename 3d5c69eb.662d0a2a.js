/*! For license information please see 3d5c69eb.662d0a2a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),r=(n(0),n(489)),i=n(491),c=n(492),s={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},p={id:"version-5.x/hello-react-navigation",title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (`<a>`) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-5.x/hello-react-navigation.md",permalink:"/docs/hello-react-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/hello-react-navigation.md",version:"5.x",sidebar_label:"Hello React Navigation",sidebar:"version-5.x/docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Moving between screens",permalink:"/docs/navigating"}},l=[{value:"Installing the stack navigator library",id:"installing-the-stack-navigator-library",children:[{value:"Creating a stack navigator",id:"creating-a-stack-navigator",children:[]},{value:"Configuring the navigator",id:"configuring-the-navigator",children:[]},{value:"Specifying options",id:"specifying-options",children:[]},{value:"Passing additional props",id:"passing-additional-props",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Summary",id:"summary",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In a web browser, you can link to different pages using an anchor (",Object(r.b)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),Object(r.b)("p",null,"React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),Object(r.b)("p",null,"Lets start by demonstrating the most common navigator, ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(r.b)("h2",{id:"installing-the-stack-navigator-library"},"Installing the stack navigator library"),Object(r.b)("p",null,"The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the stack navigator, we need to install ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/stack"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-navigation/stack"))," :"),Object(r.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/stack\n"))),Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/stack\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/stack")," depends on ",Object(r.b)("inlineCode",{parentName:"p"},"@react-native-community/masked-view")," and the other libraries that we installed in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting started"),". If you haven't installed those yet, head over to that page and follow the installation instructions.")),Object(r.b)("h3",{id:"creating-a-stack-navigator"},"Creating a stack navigator"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator")," is a function that returns an object containing 2 properties: ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator"),". Both of them are React components used for configuring the navigator. The ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator")," should contain ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," elements as its children to define the configuration for routes."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NavigationContainer")," is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),"."),Object(r.b)("samp",{id:"hello-react-navigation"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/navigators/stack/basic_stack_nav.png",alt:"Basic app using stack navigator"}))),Object(r.b)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen")," component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",Object(r.b)("inlineCode",{parentName:"p"},"home")," or capitalized ",Object(r.b)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The only required configuration for a screen is the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"component")," props. You can read more about the other options available in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator"}),"stack navigator reference"),".")),Object(r.b)("h3",{id:"configuring-the-navigator"},"Configuring the navigator"),Object(r.b)("p",null,"All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration."),Object(r.b)("p",null,"Let's add a second screen to our stack navigator and configure the ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," screen to render first:"),Object(r.b)("samp",{id:"hello-react-navigation-full"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName="Home">\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(r.b)("p",null,"Now our stack has two ",Object(r.b)("em",{parentName:"p"},"routes"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," route and a ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," route. A route can be specified by using the ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," component. The ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," component accepts a ",Object(r.b)("inlineCode",{parentName:"p"},"name")," prop which corresponds to the name of the route we will use to navigate, and a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop which corresponds to the component it'll render."),Object(r.b)("p",null,"Here, the ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," route. Try changing it to ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," and reload the app (React Native's Fast Refresh won't update changes from ",Object(r.b)("inlineCode",{parentName:"p"},"initialRouteName"),", as you might expect), notice that you will now see the ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," screen. Then change it back to ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," and reload once more."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop accepts component, not a render function. Don't pass an inline function (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"component={() => <HomeScreen />}"),"), or your component will unmount and remount losing all state when the parent component re-renders. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#passing-additional-props"}),"Passing additional props")," for alternatives.")),Object(r.b)("h3",{id:"specifying-options"},"Specifying options"),Object(r.b)("p",null,"Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop for each screen component:"),Object(r.b)("samp",{id:"hello-react-navigation-with-options"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={{ title: 'Overview' }}\n/>\n")),Object(r.b)("p",null,"Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a ",Object(r.b)("inlineCode",{parentName:"p"},"screenOptions")," prop to the navigator."),Object(r.b)("h3",{id:"passing-additional-props"},"Passing additional props"),Object(r.b)("p",null,"Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React context")," and wrap the navigator with a context provider to pass data to the screens (recommended).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use a render callback for the screen instead of specifying a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen name="Home">\n  {props => <HomeScreen {...props} extraData={someData} />}\n</Stack.Screen>\n')))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactmemo"}),Object(r.b)("inlineCode",{parentName:"a"},"React.memo"))," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"React.PureComponent"))," for your screen components to avoid performance issues.")),Object(r.b)("h2",{id:"whats-next"},"What's next?"),Object(r.b)("p",null,'The natural question at this point is: "how do I go from the ',Object(r.b)("inlineCode",{parentName:"p"},"Home")," route to the ",Object(r.b)("inlineCode",{parentName:"p"},"Details"),' route?". That is covered in the ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigating"}),"next section"),"."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Stack.Navigator")," is a component that takes route configuration as its children with additional props for configuration and renders our content."),Object(r.b)("li",{parentName:"ul"},"Each ",Object(r.b)("inlineCode",{parentName:"li"},"Stack.Screen")," component takes a ",Object(r.b)("inlineCode",{parentName:"li"},"name")," prop which refers to the name of the route and ",Object(r.b)("inlineCode",{parentName:"li"},"component")," prop which specifies the component to render for the route. These are the 2 required props."),Object(r.b)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," as the prop for the navigator."),Object(r.b)("li",{parentName:"ul"},"To specify screen-specific options, we can pass an ",Object(r.b)("inlineCode",{parentName:"li"},"options")," prop to ",Object(r.b)("inlineCode",{parentName:"li"},"Stack.Screen"),", and for common options, we can pass ",Object(r.b)("inlineCode",{parentName:"li"},"screenOptions")," to ",Object(r.b)("inlineCode",{parentName:"li"},"Stack.Navigator"))))}u.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,c({ref:t},p,{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},490:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},491:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),o=n.n(a),r=n(490),i=n.n(r),c=n(120),s=n.n(c),p=37,l=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,b=Object(a.useState)(r),u=b[0],m=b[1],d=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},492:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);