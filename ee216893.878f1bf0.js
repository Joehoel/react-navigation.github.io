(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{455:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(9),o=(t(0),t(489)),i={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},c={id:"version-2.x/drawer-based-navigation",title:"Drawer navigation",description:"```js",source:"@site/versioned_docs/version-2.x/drawer-based-navigation.md",permalink:"/docs/2.x/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/drawer-based-navigation.md",version:"2.x",sidebar_label:"Drawer navigation",sidebar:"version-2.x-docs",previous:{title:"Tab navigation",permalink:"/docs/2.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/2.x/auth-flow"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>\n      </View>\n    );\n  }\n}\n\nconst DrawerNavigator = createDrawerNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    drawerBackgroundColor: 'rgba(255,255,255,.9)',\n    contentOptions: {\n      activeTintColor: '#fff',\n      activeBackgroundColor: '#6b52ae',\n    },\n  }\n);\n\nexport default createAppContainer(DrawerNavigator);\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/basic-drawer-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("p",null,"To open and close drawer, use the following helpers to open and close the drawer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n")),Object(o.b)("p",null,"If you would like to toggle the drawer you call the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.toggleDrawer();\n")),Object(o.b)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n")))}p.isMDXComponent=!0},489:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(g,c({ref:n},l,{components:t})):a.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);