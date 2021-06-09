(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,h=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return t?r.a.createElement(h,c(c({ref:n},l),{},{components:t})):r.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},195:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/schema_overview-a671cd84cab723994cad92ec6fd2b3d3.png"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(119)),o=["components"],c={title:"Schema"},s={unversionedId:"getting_started/schema",id:"getting_started/schema",isDocsHomePage:!1,title:"Schema",description:"The schema is the core data structure that you need to understand to become a Synth wizard. Schemas are JSON files",source:"@site/docs/getting_started/schema.md",slug:"/getting_started/schema",permalink:"/synth/getting_started/schema",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/schema.md",version:"current",sidebar:"docsSidebar",previous:{title:"Core concepts",permalink:"/synth/getting_started/core-concepts"},next:{title:"Synth CLI",permalink:"/synth/getting_started/command-line"}},l=[{value:"JSON",id:"json",children:[]},{value:"Synth Schema Nodes",id:"synth-schema-nodes",children:[]},{value:"Writing Synth Schemas",id:"writing-synth-schemas",children:[]},{value:"A real life example",id:"a-real-life-example",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]}],p={toc:l};function b(e){var n=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"schema")," is the core data structure that you need to understand to become a Synth wizard. Schemas are JSON files\nthat encode the shape of the data you want to generate. All schemas are composed of ",Object(i.b)("inlineCode",{parentName:"p"},"generators")," that are assembled by\nthe user to create complex data structures."),Object(i.b)("p",null,"It's a little involved, so let's start with a simpler example: JSON!"),Object(i.b)("h3",{id:"json"},"JSON"),Object(i.b)("p",null,"If you've never actually seen how JSON is implemented under the hood, you may find this interesting."),Object(i.b)("p",null,"One of the reasons for JSON's popularity is just how simple of a data structure it is. JSON is a recursive data\nstructure (just a tree but let's pretend we're smart) and can be defined in 8 lines of code (if you're wondering, this\nis Rust's ",Object(i.b)("inlineCode",{parentName:"p"},"enum")," notation):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},'enum Value {\n    Null,                       // null\n    Bool(bool),                 // true\n    Number(Number),             // 42\n    String(String),             // "Synth"\n    Array(Vec<Value>),          // [0, true, "a", ...]\n    Object(Map<String, Value>), // { "name" : "Cynthia", "age" : 42 }\n}\n')),Object(i.b)("p",null,"So every node in a JSON tree, is one of 6 variants. Recursion occurs where ",Object(i.b)("inlineCode",{parentName:"p"},"Array"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"s can have children\nwhich are also one of 6 variants."),Object(i.b)("p",null,"We've based the Synth schema on the same design. But, what does this look like when you need to capture far more\ncomplexity than the JSON schema?"),Object(i.b)("h3",{id:"synth-schema-nodes"},"Synth Schema Nodes"),Object(i.b)("p",null,"Much like the ",Object(i.b)("inlineCode",{parentName:"p"},"Value")," node in a JSON tree, the ",Object(i.b)("inlineCode",{parentName:"p"},"Schema")," nodes in the synth Schema give us the recursive data structure\nwhich Synth can use to generate data."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"enum Schema {\n    Null,\n    Bool(BoolSchema),\n    Number(NumberSchema),\n    String(StringSchema), // here\n    Array(ArraySchema),\n    Object(ObjectSchema),\n    SameAs(SameAsSchema),\n    OneOf(OneOfSchema),\n}\n")),Object(i.b)("p",null,"Each of these ",Object(i.b)("inlineCode",{parentName:"p"},"Schema")," variants, cover a bunch of different types of ",Object(i.b)("inlineCode",{parentName:"p"},"Schema")," nodes, just to give an example,\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"StringSchema")," variant looks like this under the hood:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"enum StringSchema {\n    Pattern(RegexSchema),\n    DateTime(DateTimeSchema),\n    Categorical(Categorical<String>),\n    Faker(FakerSchema),\n}\n")),Object(i.b)("p",null,"Where ",Object(i.b)("inlineCode",{parentName:"p"},"String")," types can be generated from regular expressions, date time generators and so on. For a comprehensive list\nsee the ",Object(i.b)("a",{parentName:"p",href:"/synth/content/string"},"String")," docs."),Object(i.b)("h3",{id:"writing-synth-schemas"},"Writing Synth Schemas"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Schema")," nodes have different fields depending on the type of node. This makes sense, if you are generating Id's,\nyou're going to want to specify different parameters to if you are generating a date or a time."),Object(i.b)("p",null,"However, all ",Object(i.b)("inlineCode",{parentName:"p"},"Schema")," nodes follow a similar template."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"There is a boolean ",Object(i.b)("inlineCode",{parentName:"li"},"optional")," field, which tells Synth if a field is nullable or not."),Object(i.b)("li",{parentName:"ul"},"Next there is a ",Object(i.b)("inlineCode",{parentName:"li"},"type")," field, which specifies which top-level ",Object(i.b)("inlineCode",{parentName:"li"},"Schema")," type the node is (",Object(i.b)("inlineCode",{parentName:"li"},"string"),", ",Object(i.b)("inlineCode",{parentName:"li"},"number"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bool"),"\netc.). Fields can often have a ",Object(i.b)("inlineCode",{parentName:"li"},"subtype")," which disambiguates certain types (for example is a ",Object(i.b)("inlineCode",{parentName:"li"},"number")," a float ",Object(i.b)("inlineCode",{parentName:"li"},"f64")," or\nan unsigned integer ",Object(i.b)("inlineCode",{parentName:"li"},"u64"),".)"),Object(i.b)("li",{parentName:"ul"},"Finally, ",Object(i.b)("inlineCode",{parentName:"li"},"Schema")," nodes can have 0 or more fields which are specific to that node type. For more information refer to\nthe documentation for that type.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "number",\n  "subtype": "f64",\n  "range": {\n    "low": 274.4,\n    "high": 6597.5,\n    "step": 0.1\n  }\n}\n')),Object(i.b)("h3",{id:"a-real-life-example"},"A real life example"),Object(i.b)("p",null,"In our example schema we have a namespace ",Object(i.b)("inlineCode",{parentName:"p"},"my_app")," which has 2 collections - ",Object(i.b)("inlineCode",{parentName:"p"},"transactions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"users"),"."),Object(i.b)("p",null,"Below is a tree representation of the schema Schema tree:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"An example schema",src:t(195).default})),Object(i.b)("p",null,"The corresponding namespace can be broken into 2 collections. The first, ",Object(i.b)("inlineCode",{parentName:"p"},"transactions"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 1,\n      "high": 6,\n      "step": 1\n    }\n  },\n  "content": {\n    "type": "object",\n    "amount": {\n      "optional": false,\n      "type": "number",\n      "subtype": "f64",\n      "range": {\n        "low": 0,\n        "high": 1000,\n        "step": 0.01\n      }\n    },\n    "currency": {\n      "type": "one_of",\n      "variants": [\n        {\n          "type": "string",\n          "pattern": "USD"\n        },\n        {\n          "type": "string",\n          "pattern": "GBP"\n        }\n      ]\n    },\n    "timestamp": {\n      "type": "string",\n      "date_time": {\n        "format": "%Y-%m-%dT%H:%M:%S%z",\n        "begin": "2000-01-01T00:00:00+0000",\n        "end": "2020-01-01T00:00:00+0000"\n      }\n    },\n    "user_id": {\n      "type": "same_as",\n      "ref": "users.Schema.user_id"\n    }\n  }\n}\n')),Object(i.b)("p",null,"And the second, the ",Object(i.b)("inlineCode",{parentName:"p"},"users")," collection:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "range": {\n            "low": 1,\n            "high": 6,\n            "step": 1\n        }\n    },\n    "content": {\n        "type": "object",\n        "user_id": {\n            "type": "number",\n            "subtype": "u64",\n            "id": {\n                "start_at": 0\n            }\n        },\n        "user_email": {\n            "type": "string",\n            "faker": {\n                "generator": "email"\n            }\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"whats-next"},"What's next"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/synth/content/null"},"generators reference")," in this documentation is the best place to become familiar with all the\ndifferent variants of schema nodes. This will let you write schemas for any of the data you might need."))}b.isMDXComponent=!0}}]);