(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(119)),i=["components"],c={},p={unversionedId:"content/number",id:"content/number",isDocsHomePage:!1,title:"number",description:"Synth's number type mirror the supported number types in JSON. All number nodes must have subtype field whose",source:"@site/docs/content/number.md",slug:"/content/number",permalink:"/synth/content/number",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/content/number.md",version:"current",sidebar:"docsSidebar",previous:{title:"bool",permalink:"/synth/content/bool"},next:{title:"string",permalink:"/synth/content/string"}},l=[{value:"range",id:"range",children:[]},{value:"constant",id:"constant",children:[]},{value:"id",id:"id",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth's ",Object(o.b)("inlineCode",{parentName:"p"},"number")," type mirror the supported number types in JSON. All ",Object(o.b)("inlineCode",{parentName:"p"},"number")," nodes must have ",Object(o.b)("inlineCode",{parentName:"p"},"subtype")," field whose\nvalue is one of ",Object(o.b)("inlineCode",{parentName:"p"},"u64"),", ",Object(o.b)("inlineCode",{parentName:"p"},"i64")," and ",Object(o.b)("inlineCode",{parentName:"p"},"f64"),"."),Object(o.b)("h2",{id:"range"},"range"),Object(o.b)("p",null,"Defines a range over a semi-open interval ",Object(o.b)("inlineCode",{parentName:"p"},"[low, high)")," with a specified ",Object(o.b)("inlineCode",{parentName:"p"},"step"),". Values are generated by sampling a\nrandom non-negative integer ",Object(o.b)("inlineCode",{parentName:"p"},"n")," and computing ",Object(o.b)("inlineCode",{parentName:"p"},"low + n*step"),"."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "number",\n  "subtype": "f64",\n  "range": {\n      "high": 15000000.0, // temperature at sun\'s core in Celcius\n      "low": -273.15,     // 0 Kelvin\n      "step": 0.01\n  }\n}\n')),Object(o.b)("h2",{id:"constant"},"constant"),Object(o.b)("p",null,"A constant number type. This will always evaluate to the same number."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "number",\n  "subtype": "f64",\n  "constant": 3.14159  // pi\n}\n')),Object(o.b)("h2",{id:"id"},"id"),Object(o.b)("p",null,"A monotonically increasing number type, most commonly used as a unique row identifier. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"start")," field\ndefaults to 0 if unspecified."),Object(o.b)("p",null,"Synth currently supports ",Object(o.b)("inlineCode",{parentName:"p"},"u64")," ids."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "constant": 5\n  },\n  "content": {\n    "type": "number",\n    "subtype": "u64",\n    "id": {\n      "start_at": 10\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);