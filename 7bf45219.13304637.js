(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{313:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(489)),o={id:"drawer-navigator",title:"DrawerNavigator reference",sidebar_label:"DrawerNavigator"},l={id:"version-1.x/drawer-navigator",title:"DrawerNavigator reference",description:"```js",source:"@site/versioned_docs/version-1.x/drawer-navigator.md",permalink:"/docs/1.x/drawer-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/drawer-navigator.md",version:"1.x",sidebar_label:"DrawerNavigator",sidebar:"api",previous:{title:"TabNavigator reference",permalink:"/docs/1.x/tab-navigator"},next:{title:"withNavigation",permalink:"/docs/1.x/with-navigation"}},c=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"DrawerNavigatorConfig",id:"drawernavigatorconfig",children:[]},{value:"Providing a custom <code>contentComponent</code>",id:"providing-a-custom-contentcomponent",children:[]},{value:"<code>contentOptions</code> for <code>DrawerItems</code>",id:"contentoptions-for-draweritems",children:[]},{value:"Screen Navigation Options",id:"screen-navigation-options",children:[]},{value:"Navigator Props",id:"navigator-props",children:[]},{value:"Nesting <code>DrawerNavigation</code>",id:"nesting-drawernavigation",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)\n")),Object(i.b)("h3",{id:"routeconfigs"},"RouteConfigs"),Object(i.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator.html#routeconfigs"}),"example")," from ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator"),"."),Object(i.b)("h3",{id:"drawernavigatorconfig"},"DrawerNavigatorConfig"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"drawerWidth")," - Width of the drawer or a function returning it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"drawerPosition")," - Options are ",Object(i.b)("inlineCode",{parentName:"li"},"left")," or ",Object(i.b)("inlineCode",{parentName:"li"},"right"),". Default is ",Object(i.b)("inlineCode",{parentName:"li"},"left")," position."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contentComponent")," - Component used to render the content of the drawer, for example, navigation items. Receives the ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop for the drawer. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"DrawerItems"),". For more information, see below."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contentOptions")," - Configure the drawer content, see below."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useNativeAnimations")," - Enable native animations. Default is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"drawerBackgroundColor")," - Use the Drawer background for some color. The Default is ",Object(i.b)("inlineCode",{parentName:"li"},"white"),".")),Object(i.b)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial route."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the drawer items."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause switch to the initial route? If yes, set to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",Object(i.b)("inlineCode",{parentName:"li"},"none"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute")," behavior.")),Object(i.b)("h3",{id:"providing-a-custom-contentcomponent"},"Providing a custom ",Object(i.b)("inlineCode",{parentName:"h3"},"contentComponent")),Object(i.b)("p",null,"The default component for the drawer is scrollable and only contains links for the routes in the RouteConfig. You can easily override the default component to add a header, footer, or other content to the drawer. By default the drawer is scrollable and supports iPhone X safe area. If you customize the content, be sure to wrap the content in a SafeAreaView:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { DrawerItems, SafeAreaView } from 'react-navigation';\n\nconst CustomDrawerContentComponent = (props) => (\n  <ScrollView>\n    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>\n      <DrawerItems {...props} />\n    </SafeAreaView>\n  </ScrollView>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n});\n")),Object(i.b)("h3",{id:"contentoptions-for-draweritems"},Object(i.b)("inlineCode",{parentName:"h3"},"contentOptions")," for ",Object(i.b)("inlineCode",{parentName:"h3"},"DrawerItems")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"items")," - the array of routes, can be modified or overridden"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeItemKey")," - key identifying the active route"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," - label and icon color of the active label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - background color of the active label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - label and icon color of the inactive label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - background color of the inactive label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onItemPress(route)")," - function to be invoked when an item is pressed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"itemsContainerStyle")," - style object for the content section"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"itemStyle")," - style object for the single item, which can contain an Icon and/or a Label"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"labelStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style inside content section, when your label is a string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iconContainerStyle")," - style object to overwrite ",Object(i.b)("inlineCode",{parentName:"li"},"View")," icon container styles.")),Object(i.b)("h4",{id:"example"},"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contentOptions: {\n  activeTintColor: '#e91e63',\n  itemsContainerStyle: {\n    marginVertical: 0,\n  },\n  iconContainerStyle: {\n    opacity: 1\n  }\n}\n")),Object(i.b)("h3",{id:"screen-navigation-options"},"Screen Navigation Options"),Object(i.b)("h4",{id:"title"},Object(i.b)("inlineCode",{parentName:"h4"},"title")),Object(i.b)("p",null,"Generic title that can be used as a fallback for ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"drawerLabel")),Object(i.b)("h4",{id:"drawerlabel"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerLabel")),Object(i.b)("p",null,"String, React Element or a function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar. When undefined, scene ",Object(i.b)("inlineCode",{parentName:"p"},"title")," is used"),Object(i.b)("h4",{id:"drawericon"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerIcon")),Object(i.b)("p",null,"React Element or a function, that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in drawer sidebar"),Object(i.b)("h4",{id:"drawerlockmode"},Object(i.b)("inlineCode",{parentName:"h4"},"drawerLockMode")),Object(i.b)("p",null,"Specifies the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/drawerlayoutandroid.html#drawerlockmode"}),"lock mode")," of the drawer. This can also update dynamically by using screenProps.drawerLockMode on your top level router."),Object(i.b)("h3",{id:"navigator-props"},"Navigator Props"),Object(i.b)("p",null,"The navigator component created by ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerNavigator(...)")," takes the following props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenProps")," - Pass down extra options to child screens, for example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const DrawerNav = DrawerNavigator({\n  // config\n});\n\n<DrawerNav\n  screenProps={/* this prop will get passed to the screen components and nav options as props.screenProps */}\n/>\n")),Object(i.b)("h3",{id:"nesting-drawernavigation"},"Nesting ",Object(i.b)("inlineCode",{parentName:"h3"},"DrawerNavigation")),Object(i.b)("p",null,"Please bear in mind that if you nest the DrawerNavigation, the drawer will show below the parent navigation."))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);