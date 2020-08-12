(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),i=(n(0),n(489)),r={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},c={id:"version-5.x/headers",title:"Configuring the header bar",description:"We've seen how to configure the header title already, but let's go over that again before moving on to some other options &mdash; repetition is key to learning!",source:"@site/versioned_docs/version-5.x/headers.md",permalink:"/docs/headers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/headers.md",version:"5.x",sidebar_label:"Configuring the header bar",sidebar:"version-5.x/docs",previous:{title:"Passing parameters to routes",permalink:"/docs/params"},next:{title:"Header buttons",permalink:"/docs/header-buttons"}},l=[{value:"Setting the header title",id:"setting-the-header-title",children:[]},{value:"Using params in the title",id:"using-params-in-the-title",children:[]},{value:"Updating <code>options</code> with <code>setOptions</code>",id:"updating-options-with-setoptions",children:[]},{value:"Adjusting header styles",id:"adjusting-header-styles",children:[]},{value:"Sharing common <code>options</code> across screens",id:"sharing-common-options-across-screens",children:[]},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",children:[]},{value:"Additional configuration",id:"additional-configuration",children:[]},{value:"Summary",id:"summary",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We've seen how to configure the header title already, but let's go over that again before moving on to some other options ","\u2014"," repetition is key to learning!"),Object(i.b)("h2",{id:"setting-the-header-title"},"Setting the header title"),Object(i.b)("p",null,"A Screen component accepts ",Object(i.b)("inlineCode",{parentName:"p"},"options")," prop which is either an object or a function that returns an object, that contains various configuration options. The one we use for the header title is ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", as shown in the following example."),Object(i.b)("samp",{id:"basic-header-config"},"header title"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{ title: 'My home' }}\n      />\n    </Stack.Navigator>\n  );\n}\n")),Object(i.b)("h2",{id:"using-params-in-the-title"},"Using params in the title"),Object(i.b)("p",null,"In order to use params in the title, we need to make ",Object(i.b)("inlineCode",{parentName:"p"},"options")," prop for the screen a function that returns a configuration object. It might be tempting to try to use ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," inside of ",Object(i.b)("inlineCode",{parentName:"p"},"options"),", but because it is defined before the component is rendered, ",Object(i.b)("inlineCode",{parentName:"p"},"this")," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",Object(i.b)("inlineCode",{parentName:"p"},"options")," a function then React Navigation will call it with an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"{ navigation, route }")," - in this case, all we care about is ",Object(i.b)("inlineCode",{parentName:"p"},"route"),", which is the same object that is passed to your screen props as ",Object(i.b)("inlineCode",{parentName:"p"},"route")," prop. You may recall that we can get the params through ",Object(i.b)("inlineCode",{parentName:"p"},"route.params"),", and so we do this below to extract a param and use it as a title."),Object(i.b)("samp",{id:"params-in-title"},"params in title"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={{ title: \'My home\' }}\n      />\n      <Stack.Screen\n        name="Profile"\n        component={ProfileScreen}\n        options={({ route }) => ({ title: route.params.name })}\n      />\n    </Stack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"The argument that is passed in to the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," function is an object with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation")," - The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/navigation-prop"}),"navigation prop")," for the screen."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"route")," - The ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/route-prop"}),"route prop")," for the screen")),Object(i.b)("p",null,"We only needed the ",Object(i.b)("inlineCode",{parentName:"p"},"route")," prop in the above example but you may in some cases want to use ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," as well."),Object(i.b)("h2",{id:"updating-options-with-setoptions"},"Updating ",Object(i.b)("inlineCode",{parentName:"h2"},"options")," with ",Object(i.b)("inlineCode",{parentName:"h2"},"setOptions")),Object(i.b)("p",null,"It's often necessary to update the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," configuration for the active screen from the mounted screen component itself. We can do this using ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.setOptions")),Object(i.b)("samp",{id:"updating-options-with-setoptions"},"updating navigation options"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* Inside of render() of React class */\n<Button\n  title=\"Update the title\"\n  onPress={() => navigation.setOptions({ title: 'Updated!' })}\n/>\n")),Object(i.b)("h2",{id:"adjusting-header-styles"},"Adjusting header styles"),Object(i.b)("p",null,"There are three key properties to use when customizing the style of your header: ",Object(i.b)("inlineCode",{parentName:"p"},"headerStyle"),", ",Object(i.b)("inlineCode",{parentName:"p"},"headerTintColor"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerStyle"),": a style object that will be applied to the ",Object(i.b)("inlineCode",{parentName:"li"},"View")," that wraps the header. If you set ",Object(i.b)("inlineCode",{parentName:"li"},"backgroundColor")," on it, that will be the color of your header."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerTintColor"),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",Object(i.b)("inlineCode",{parentName:"li"},"#fff"),") so the back button and the header title would be white."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headerTitleStyle"),": if we want to customize the ",Object(i.b)("inlineCode",{parentName:"li"},"fontFamily"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fontWeight")," and other ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," style properties for the title, we can use this to do it.")),Object(i.b)("samp",{id:"header-styles"},"header styles"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          title: 'My home',\n          headerStyle: {\n            backgroundColor: '#f4511e',\n          },\n          headerTintColor: '#fff',\n          headerTitleStyle: {\n            fontWeight: 'bold',\n          },\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/headers/custom_headers.png",alt:"Custom header styles"}))),Object(i.b)("p",null,"There are a couple of things to notice here:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/status-bar"}),"as described in the status bar guide"),"."),Object(i.b)("li",{parentName:"ol"},"The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",Object(i.b)("inlineCode",{parentName:"li"},"options")," between screens now.")),Object(i.b)("h2",{id:"sharing-common-options-across-screens"},"Sharing common ",Object(i.b)("inlineCode",{parentName:"h2"},"options")," across screens"),Object(i.b)("p",null,"It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using in our running example, and you'll notice that when you navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen")," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," header style properties from ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," to ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen"),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the stack navigator under the prop ",Object(i.b)("inlineCode",{parentName:"p"},"screenOptions"),"."),Object(i.b)("samp",{id:"sharing-header-styles"},"sharing header styles"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function StackScreen() {\n  return (\n    <Stack.Navigator\n      screenOptions={{\n        headerStyle: {\n          backgroundColor: '#f4511e',\n        },\n        headerTintColor: '#fff',\n        headerTitleStyle: {\n          fontWeight: 'bold',\n        },\n      }}\n    >\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{ title: 'My home' }}\n      />\n    </Stack.Navigator>\n  );\n}\n")),Object(i.b)("p",null,"Now, any screen that belongs to the ",Object(i.b)("inlineCode",{parentName:"p"},"StackScreen")," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"),Object(i.b)("h2",{id:"replacing-the-title-with-a-custom-component"},"Replacing the title with a custom component"),Object(i.b)("p",null,"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."),Object(i.b)("samp",{id:"custom-header-title-component"},"custom header title component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function LogoTitle() {\n  return (\n    <Image\n      style={{ width: 50, height: 50 }}\n      source={require('@expo/snack-static/react-native-logo.png')}\n    />\n  );\n}\n\nfunction StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{ headerTitle: props => <LogoTitle {...props} /> }}\n      />\n    </Stack.Navigator>\n  );\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You might be wondering, why ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," when we provide a component and not ",Object(i.b)("inlineCode",{parentName:"p"},"title"),", like before? The reason is that ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," is a property that is specific to a stack navigator, the ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," defaults to a ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component that displays the ",Object(i.b)("inlineCode",{parentName:"p"},"title"),".")),Object(i.b)("h2",{id:"additional-configuration"},"Additional configuration"),Object(i.b)("p",null,"You can read the full list of available ",Object(i.b)("inlineCode",{parentName:"p"},"options")," for screens inside of a stack navigator in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator#navigationoptions-used-by-stacknavigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createStackNavigator")," reference"),"."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can customize the header inside of the ",Object(i.b)("inlineCode",{parentName:"li"},"options")," prop of your screen components. Read the full list of options ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/stack-navigator#navigationoptions-used-by-stacknavigator"}),"in the API reference"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"options")," prop can be an object or a function. When it is a function, it is provided with an object with the ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," and ",Object(i.b)("inlineCode",{parentName:"li"},"route")," prop."),Object(i.b)("li",{parentName:"ul"},"You can also specify shared ",Object(i.b)("inlineCode",{parentName:"li"},"screenOptions")," in the stack navigator configuration when you initialize it. The prop takes precedence over that configuration.")))}p.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(r,".").concat(h)]||b[h]||d[h]||i;return n?o.a.createElement(u,c({ref:t},s,{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);