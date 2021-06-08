(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(119)),c=["components"],i={title:"Core concepts"},s={unversionedId:"getting_started/core-concepts",id:"getting_started/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"This section covers the core concepts found in Synth.",source:"@site/docs/getting_started/core-concepts.md",slug:"/getting_started/core-concepts",permalink:"/synth/getting_started/core-concepts",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/getting_started/core-concepts.md",version:"current",sidebar:"docsSidebar",previous:{title:"Hello world",permalink:"/synth/getting_started/hello-world"},next:{title:"Schema",permalink:"/synth/getting_started/schema"}},l=[{value:"Workspaces",id:"workspaces",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Collections",id:"collections",children:[]},{value:"Field References",id:"field-references",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Importing Datasets",id:"importing-datasets",children:[]},{value:"Seeding Generation",id:"seeding-generation",children:[]}],p={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section covers the core concepts found in Synth."),Object(o.b)("h2",{id:"workspaces"},"Workspaces"),Object(o.b)("p",null,"Workspaces are marked by ",Object(o.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory. A workspace represents a set of synthetic data namespaces managed by\nSynth."),Object(o.b)("p",null,"A workspace can have ",Object(o.b)("em",{parentName:"p"},"zero or more namespaces"),", where the namespaces are just represented as subdirectories (as well as\nsome hidden state in ",Object(o.b)("inlineCode",{parentName:"p"},".synth/")," when using Synth in ",Object(o.b)("inlineCode",{parentName:"p"},"daemon")," mode). All information pertaining to a workspace is in its\ndirectory."),Object(o.b)("p",null,"Below is an example directory structure for a workspace with a single namespace, ",Object(o.b)("inlineCode",{parentName:"p"},"my_namepace"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u2514\u2500\u2500 my_namespace\n    \u251c\u2500\u2500 my_collection_1.json\n    \u2514\u2500\u2500 my_collection_2.json\n")),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"namespace")," is the top-level abstraction in Synth. Namespaces are the equivalent of ",Object(o.b)("em",{parentName:"p"},"Schemas")," in SQL-land. Fields\nin a namespace can refer to other fields in a namespace - but you cannot reference data across namespaces."),Object(o.b)("p",null,"Namespaces are represented as sub-directories in your workspace. For example, a workspace with single namespace ",Object(o.b)("inlineCode",{parentName:"p"},"some_namespace")," would have the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u2514\u2500\u2500 my_namespace\n")),Object(o.b)("p",null,"You can have as many namespaces as you like within a workspace, however they must have unique names:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u251c\u2500\u2500 some_namespace\n\u2514\u2500\u2500 some_other_namespace \n")),Object(o.b)("h2",{id:"collections"},"Collections"),Object(o.b)("p",null,"Every namespace has zero or more ",Object(o.b)("strong",{parentName:"p"},"collections"),". Collections are addressable by their name and correspond to tables in SQL-land. Strictly speaking, Collections are a super-set of tables\nas they are in fact arbitrarily deep document trees."),Object(o.b)("p",null,"Collections are represented in a workspace as ",Object(o.b)("inlineCode",{parentName:"p"},"json")," files. The ",Object(o.b)("em",{parentName:"p"},"name")," of a collection is its filename (without the extension). For example a file ",Object(o.b)("inlineCode",{parentName:"p"},"bank/transactions.json")," defines a collection ",Object(o.b)("inlineCode",{parentName:"p"},"transactions")," in the namespace ",Object(o.b)("inlineCode",{parentName:"p"},"bank"),"."),Object(o.b)("p",null,"For a more comprehensive example, let's imagine our namespace ",Object(o.b)("inlineCode",{parentName:"p"},"bank")," has a collection ",Object(o.b)("inlineCode",{parentName:"p"},"transactions")," and another collection ",Object(o.b)("inlineCode",{parentName:"p"},"users"),". The workspace structure then looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u2514\u2500\u2500 bank\n    \u251c\u2500\u2500 transactions.json\n    \u2514\u2500\u2500 users.json \n")),Object(o.b)("p",null,"Collections inside a namespace need to have unique names (you ",Object(o.b)("em",{parentName:"p"},"can")," however the same collection name spanning different namespaces, for example ",Object(o.b)("inlineCode",{parentName:"p"},"bank/transactions.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"forex/transactions.json"),")"),Object(o.b)("h2",{id:"field-references"},"Field References"),Object(o.b)("p",null,"Field References are a way to reference fields in the Schema. It's pretty intuitive."),Object(o.b)("p",null,"Field References take the form ",Object(o.b)("inlineCode",{parentName:"p"},"<collection>.<field>.<field>...")," (since Field References are confined to a namespace, the namespace is not specified in the reference.). Since collections in Synth are recursive and can be arbitrarily deep, so can field references be arbitrarily long."),Object(o.b)("p",null,"For a concrete example from the ",Object(o.b)("inlineCode",{parentName:"p"},"bank")," namespace above; let's assume that our ",Object(o.b)("inlineCode",{parentName:"p"},"users")," collection has a field ",Object(o.b)("inlineCode",{parentName:"p"},"id"),". This field can then be referenced from anywhere inside the namespace using the reference ",Object(o.b)("inlineCode",{parentName:"p"},"users.content.id"),"."),Object(o.b)("h2",{id:"schema"},"Schema"),Object(o.b)("p",null,"The schema is the core data structure that you need to understand to be productive with Synth. The schema represents\nyour data model, it tells Synth exactly how to generate data, which fields we need, what types and so on. This is a\nlittle involved so there is a section devoted to just the ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"Schema"),"."),Object(o.b)("h2",{id:"importing-datasets"},"Importing Datasets"),Object(o.b)("p",null,"Synth can ingest and build data models (aka Synth Schemas) on the fly - assuming it is fed a syntactically correct JSON\nobject."),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"synth import")," command to import data into a namespace."),Object(o.b)("p",null,"Not only will Synth automatically ",Object(o.b)("em",{parentName:"p"},"derive")," the Schema for you, inferring the types and topology of the content graph.\nSynth will also automatically adjust the Schema as new information is ingested."),Object(o.b)("h2",{id:"seeding-generation"},"Seeding Generation"),Object(o.b)("p",null,"Synth generates random data in a determinstic fashion. Running ",Object(o.b)("inlineCode",{parentName:"p"},"synth generate")," multiple times should yield the same output. Synth can also be seeded using ",Object(o.b)("inlineCode",{parentName:"p"},"--seed")," flag which takes an unsigned 64-bit integer as a parameter. If a seed is not specified, the seed will default to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"--random")," flag can be used to generate using a random seed."))}d.isMDXComponent=!0},119:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||o;return t?r.a.createElement(u,i(i({ref:n},l),{},{components:t})):r.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);