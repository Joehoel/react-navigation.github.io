(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),i=(n(0),n(510)),r={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},c={unversionedId:"headers",id:"version-3.x/headers",isDocsHomePage:!1,title:"Configuring the header bar",description:"By now you're probably tired of seeing a blank grey bar on the top of your screen &mdash; you're ready for some flair. So let's jump in to configuring the header bar.",source:"@site/versioned_docs/version-3.x/headers.md",slug:"/headers",permalink:"/docs/3.x/headers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/headers.md",version:"3.x",sidebar_label:"Configuring the header bar",sidebar:"version-3.x-docs",previous:{title:"Passing parameters to routes",permalink:"/docs/3.x/params"},next:{title:"Header buttons",permalink:"/docs/3.x/header-buttons"}},s=[{value:"Setting the header title",id:"setting-the-header-title",children:[]},{value:"Using params in the title",id:"using-params-in-the-title",children:[]},{value:"Updating <code>navigationOptions</code> with <code>setParams</code>",id:"updating-navigationoptions-with-setparams",children:[]},{value:"Adjusting header styles",id:"adjusting-header-styles",children:[]},{value:"Sharing common <code>navigationOptions</code> across screens",id:"sharing-common-navigationoptions-across-screens",children:[]},{value:"Overriding shared <code>navigationOptions</code>",id:"overriding-shared-navigationoptions",children:[]},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",children:[]},{value:"Additional configuration",id:"additional-configuration",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By now you're probably tired of seeing a blank grey bar on the top of your screen ","\u2014"," you're ready for some ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg"}),"flair"),". So let's jump in to configuring the header bar."),Object(i.b)("h2",{id:"setting-the-header-title"},"Setting the header title"),Object(i.b)("p",null,"A screen component can have a static property called ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," which is either an object or a function that returns an object that contains various configuration options. The one we use for the header title is ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", as demonstrated in the following example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n  };\n\n  /* render function, etc */\n}\n\nclass DetailsScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Details',\n  };\n\n  /* render function, etc */\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-title-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator")," uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned.")),Object(i.b)("h2",{id:"using-params-in-the-title"},"Using params in the title"),Object(i.b)("p",null,"In order to use params in the title, we need to make ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," a function that returns a configuration object. It might be tempting to try to use ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," inside of ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),", but because it is a static property of the component, ",Object(i.b)("inlineCode",{parentName:"p"},"this")," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," a function then React Navigation will call it with an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"{ navigation, navigationOptions, screenProps }")," -- in this case, all we care about is ",Object(i.b)("inlineCode",{parentName:"p"},"navigation"),", which is the same object that is passed to your screen props as ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation"),". You may recall that we can get the params from ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," through ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.getParam")," or ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.state.params"),", and so we do this below to extract a param and use it as a title."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    return {\n      title: navigation.getParam('otherParam', 'A Nested Details Screen'),\n    };\n  };\n\n  /* render function, etc */\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/using-params-in-title-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"The argument that is passed in to the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," function is an object with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation")," - The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/3.x/navigation-prop"}),"navigation prop")," for the screen, with the screen's route at ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.state"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenProps")," - The props passing from above the navigator component"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," - The default or previous options that would be used if new values are not provided")),Object(i.b)("p",null,"We only needed the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop in the above example but you may in some cases want to use ",Object(i.b)("inlineCode",{parentName:"p"},"screenProps")," or ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),"."),Object(i.b)("h2",{id:"updating-navigationoptions-with-setparams"},"Updating ",Object(i.b)("inlineCode",{parentName:"h2"},"navigationOptions")," with ",Object(i.b)("inlineCode",{parentName:"h2"},"setParams")),Object(i.b)("p",null,"It's often necessary to update the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," configuration for the active screen from the mounted screen component itself. We can do this using ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.setParams")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  /* Inside of render() */\n  <Button\n    title=\"Update the title\"\n    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}\n  />\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/updating-navigationoptions-with-setparams-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"adjusting-header-styles"},"Adjusting header styles"),Object(i.b)("p",null,"There are three key properties to use when customizing the style of your header: ",Object(i.b)("inlineCode",{parentName:"p"},"headerStyle"),", ",Object(i.b)("inlineCode",{parentName:"p"},"headerTintColor"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerStyle"),": a style object that will be applied to the ",Object(i.b)("inlineCode",{parentName:"li"},"View")," that wraps the header. If you set ",Object(i.b)("inlineCode",{parentName:"li"},"backgroundColor")," on it, that will be the color of your header."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerTintColor"),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",Object(i.b)("inlineCode",{parentName:"li"},"#fff"),") so the back button and the header title would be white."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerTitleStyle"),": if we want to customize the ",Object(i.b)("inlineCode",{parentName:"li"},"fontFamily"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fontWeight")," and other ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style properties for the title, we can use this to do it.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  };\n\n  /* render function, etc */\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-styles-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"There are a couple of things to notice here:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/3.x/status-bar"}),"as described in the status bar guide"),"."),Object(i.b)("li",{parentName:"ol"},"The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," between screens now.")),Object(i.b)("h2",{id:"sharing-common-navigationoptions-across-screens"},"Sharing common ",Object(i.b)("inlineCode",{parentName:"h2"},"navigationOptions")," across screens"),Object(i.b)("p",null,"It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen")," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," header style properties from ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," to ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen"),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the stack navigator under the property ",Object(i.b)("inlineCode",{parentName:"p"},"defaultNavigationOptions"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    /* No more header config here! */\n  };\n\n  /* render function, etc */\n}\n\n/* other code... */\n\nconst RootStack = createStackNavigator(\n  {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n  {\n    initialRouteName: 'Home',\n    /* The header config from HomeScreen is now here */\n    defaultNavigationOptions: {\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    },\n  }\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/sharing-header-styles-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"Now, any screen that belongs to the ",Object(i.b)("inlineCode",{parentName:"p"},"RootStack")," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: In v2 and below, the property you would want to use to do this is ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),". In v3 we've renamed this to ",Object(i.b)("inlineCode",{parentName:"p"},"defaultNavigationOptions"),".")),Object(i.b)("p",null,"The property ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," can be used to configure the navigator itself:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Home = createStackNavigator(\n  {\n    Feed: ExampleScreen,\n    Profile: ExampleScreen,\n  }, {\n    defaultNavigationOptions: {\n      headerTintColor: '#fff',\n      headerStyle: {\n        backgroundColor: '#000',\n      },\n    },\n    navigationOptions: {\n      tabBarLabel: 'Home!',\n    },\n  }\n);\n\nconst Tabs = createBottomTabNavigator({ Home });\n\n")),Object(i.b)("a",{href:"https://snack.expo.io/@notbrent/belligerent-pizza",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"overriding-shared-navigationoptions"},"Overriding shared ",Object(i.b)("inlineCode",{parentName:"h2"},"navigationOptions")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," specified on your screen component are merged together with the default navigation options of its parent stack navigator, with the options on the screen component taking precedence. Let's use this knowledge to invert the background and tint colors on the details screen."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation, navigationOptions }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n      /* These values are used instead of the shared configuration! */\n      headerStyle: {\n        backgroundColor: navigationOptions.headerTintColor,\n      },\n      headerTintColor: navigationOptions.headerStyle.backgroundColor,\n    };\n  };\n\n  /* render function, etc */\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/overriding-shared-header-styles-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"replacing-the-title-with-a-custom-component"},"Replacing the title with a custom component"),Object(i.b)("p",null,"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class LogoTitle extends React.Component {\n  render() {\n    return (\n      <Image\n        source={require('./spiro.png')}\n        style={{ width: 30, height: 30 }}\n      />\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    // headerTitle instead of title\n    headerTitle: <LogoTitle />,\n  };\n\n  /* render function, etc */\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/custom-header-title-component-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You might be wondering, why ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," when we provide a component and not ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", like before? The reason is that ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," is a property that is specific to a stack navigator, the ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," defaults to a ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component that displays the ",Object(i.b)("inlineCode",{parentName:"p"},"title"),".")),Object(i.b)("h2",{id:"additional-configuration"},"Additional configuration"),Object(i.b)("p",null,"You can read the full list of available ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," for screens inside of a stack navigator in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/stack-navigator#navigationoptions-used-by-stacknavigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createStackNavigator")," reference"),"."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can customize the header inside of the ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," static property on your screen components. Read the full list of options ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/3.x/stack-navigator#navigationoptions-used-by-stacknavigator"}),"in the API reference"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," static property can be an object or a function. When it is a function, it is provided with an object with the ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop, ",Object(i.b)("inlineCode",{parentName:"li"},"screenProps"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," on it."),Object(i.b)("li",{parentName:"ul"},"You can also specify shared ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," in the stack navigator configuration when you initialize it. The static property takes precedence over that configuration."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/custom-header-title-component-v3"}),"Full source of what we have built so far"),".")))}p.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(r,".").concat(h)]||b[h]||d[h]||i;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);