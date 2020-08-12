(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),i=(n(0),n(489)),r={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},c={id:"version-3.x/modal",title:"Opening a full-screen modal",description:"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:",source:"@site/versioned_docs/version-3.x/modal.md",permalink:"/docs/3.x/modal",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/modal.md",version:"3.x",sidebar_label:"Opening a full-screen modal",sidebar:"version-3.x-docs",previous:{title:"App containers",permalink:"/docs/3.x/app-containers"},next:{title:"Next steps",permalink:"/docs/3.x/next-steps"}},s=[{value:"Creating a modal stack",id:"creating-a-modal-stack",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dictionary.com provides no satisfactory definition of modal as it relates to user interfaces, but semantic UI describes it as follows:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A modal displays content that temporarily blocks interactions with the main view")),Object(i.b)("p",null,"This sounds about right. A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),Object(i.b)("p",null,"The purpose of explaining this as part of the React Navigation fundamentals is not only because this is a common use case, but also because the implementation requires knowledge of ",Object(i.b)("em",{parentName:"p"},"nesting navigators"),", which is an important part of React Navigation."),Object(i.b)("h2",{id:"creating-a-modal-stack"},"Creating a modal stack"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerLeft: (\n        <Button\n          onPress={() => navigation.navigate('MyModal')}\n          title=\"Info\"\n          color=\"#fff\"\n        />\n      ),\n      /* the rest of this config is unchanged */\n    };\n  };\n\n  /* render function, etc */\n}\n\nclass ModalScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n        <Button\n          onPress={() => this.props.navigation.goBack()}\n          title=\"Dismiss\"\n        />\n      </View>\n    );\n  }\n}\n\nconst MainStack = createStackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,\n    },\n    Details: {\n      screen: DetailsScreen,\n    },\n  },\n  {\n    /* Same configuration as before */\n  }\n);\n\nconst RootStack = createStackNavigator(\n  {\n    Main: {\n      screen: MainStack,\n    },\n    MyModal: {\n      screen: ModalScreen,\n    },\n  },\n  {\n    mode: 'modal',\n    headerMode: 'none',\n  }\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/full-screen-modal-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"There are some important things to notice here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As we know, the stack navigator function returns a React component (remember we render ",Object(i.b)("inlineCode",{parentName:"p"},"<RootStack />")," in our ",Object(i.b)("inlineCode",{parentName:"p"},"App")," component). This same component can be used as a screen component! By doing this, we are nesting a stack navigator inside of another stack navigator. In this case, this is useful for us because we want to use a different transition style for the modal, and we want to disable the header across the entire stack. In the future this will be important because for tab navigation, for example, each tab will likely have its own stack! Intuitively, this is what you expect: when you are on tab A and switch to tab B, you would like tab A to maintain its navigation state as you continue to explore tab B. Look at this diagram to visualize the structure of navigation in this example:\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/modal/tree.png",alt:"tree diagram"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"mode")," configuration for stack navigator can be either ",Object(i.b)("inlineCode",{parentName:"p"},"card")," (default) or ",Object(i.b)("inlineCode",{parentName:"p"},"modal"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"modal")," behavior slides the screen in from the bottom on iOS and allows the user to swipe down from the top to dismiss it. The ",Object(i.b)("inlineCode",{parentName:"p"},"modal")," configuration has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When we call ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," we don't have to specify anything except the route that we'd like to navigate to. There is no need to qualify which stack it belongs to (the arbitrarily named 'root' or the 'main' stack) ","\u2014"," React Navigation attempts to find the route on the closest navigator and then performs the action there. To visualize this, look again at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/assets/modal/tree.png"}),"this diagram")," and imagine the ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," action flowing up from ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," to ",Object(i.b)("inlineCode",{parentName:"p"},"MainStack"),", we know that ",Object(i.b)("inlineCode",{parentName:"p"},"MainStack")," can't handle the route ",Object(i.b)("inlineCode",{parentName:"p"},"MyModal"),", so it then flows it up to ",Object(i.b)("inlineCode",{parentName:"p"},"RootStack"),", which can handle that route and so it does."),Object(i.b)("h2",Object(a.a)({parentName:"li"},{id:"summary"}),"Summary"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",Object(i.b)("inlineCode",{parentName:"li"},"mode")," configuration. When set to ",Object(i.b)("inlineCode",{parentName:"li"},"modal"),", all screens animate-in from bottom to top rather than right to left. This applies to that entire stack navigator, so to use right to left transitions on other screens, we add another navigation stack with the default configuration."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.props.navigation.navigate")," traverses up the navigator tree to find a navigator that can handle the ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")," action."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/full-screen-modal-v3"}),"Full source of what we have built so far"))))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);