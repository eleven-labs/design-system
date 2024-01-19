import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as u,H as d,F as x,n as p}from"./Blockquote-4ce37ee2.js";import"./SyntaxHighlighter-645ec89b.js";import{S as m}from"./ShareLinks-5b2d998e.js";const a=({title:i,date:l,readingTime:n,authors:r,shareLinks:t,...s})=>e.jsxs(u,{...s,textSize:"xs",children:[e.jsx(d,{as:"h1",size:"xl",color:"primary",children:i}),e.jsxs(x,{flexDirection:{xs:"column",md:"row"},justifyContent:"between",gap:"xs",mt:"m",children:[e.jsx(p,{variant:"secondary",date:l,readingTime:n,authors:r}),e.jsx(m,{...t})]})]});try{a.displayName="PostHeader",a.__docgenInfo={description:"",displayName:"PostHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!0,type:{name:"number"}},authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:'{ username: string; name: string; link: ComponentPropsWithoutRef<"a">; }[]'}},shareLinks:{defaultValue:null,description:"",name:"shareLinks",required:!0,type:{name:"ShareLinksProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"margin (including breakpoints modifiers)",name:"m",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},mt:{defaultValue:null,description:"margin-top (including breakpoints modifiers)",name:"mt",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},mr:{defaultValue:null,description:"margin-right (including breakpoints modifiers)",name:"mr",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},mb:{defaultValue:null,description:"margin-bottom (including breakpoints modifiers)",name:"mb",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},ml:{defaultValue:null,description:"margin-left (including breakpoints modifiers)",name:"ml",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},mx:{defaultValue:null,description:"horizontal margin: margin-left and margin-right (including breakpoints modifiers)",name:"mx",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},my:{defaultValue:null,description:"vertical margin: margin-top and margin-bottom (including breakpoints modifiers)",name:"my",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3" | "auto">'}},p:{defaultValue:null,description:"padding (including breakpoints modifiers)",name:"p",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},pt:{defaultValue:null,description:"padding-top (including breakpoints modifiers)",name:"pt",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},pr:{defaultValue:null,description:"padding-right (including breakpoints modifiers)",name:"pr",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},pb:{defaultValue:null,description:"padding-bottom (including breakpoints modifiers)",name:"pb",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},pl:{defaultValue:null,description:"padding-left (including breakpoints modifiers)",name:"pl",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},px:{defaultValue:null,description:"horizontal padding: padding-left and padding-right (including breakpoints modifiers)",name:"px",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},py:{defaultValue:null,description:"vertical padding: padding-top and padding-bottom (including breakpoints modifiers)",name:"py",required:!1,type:{name:'TypeWithMediaQueriesType<"s" | "m" | "xs" | "0" | "xxs-3" | "xxs-2" | "xxs" | "l" | "xl" | "xxl" | "xxl-2" | "xxl-3">'}},bg:{defaultValue:null,description:"background-color",name:"bg",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"primary-dark"'},{value:'"primary-very-dark"'},{value:'"secondary"'},{value:'"secondary-dark"'},{value:'"info"'},{value:'"accent"'},{value:'"ultra-light-grey"'},{value:'"light-grey"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"ultra-dark-grey"'},{value:'"black"'},{value:'"white"'}]}},color:{defaultValue:null,description:"color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"primary-dark"'},{value:'"primary-very-dark"'},{value:'"secondary"'},{value:'"secondary-dark"'},{value:'"info"'},{value:'"accent"'},{value:'"ultra-light-grey"'},{value:'"light-grey"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"ultra-dark-grey"'},{value:'"black"'},{value:'"white"'}]}},textAlign:{defaultValue:null,description:"text-align (including breakpoints modifiers)",name:"textAlign",required:!1,type:{name:'TypeWithMediaQueriesType<"center" | "left" | "right" | "justify">'}},fontWeight:{defaultValue:null,description:"font-weight",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semi-bold"'},{value:'"bold"'}]}},italic:{defaultValue:null,description:"font-style italic",name:"italic",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"text-decoration underline",name:"underline",required:!1,type:{name:"boolean"}},textTransform:{defaultValue:null,description:"text-transform",name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"capitalize"'},{value:'"lowercase"'}]}},textSize:{defaultValue:null,description:"text-size",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xs"'}]}},display:{defaultValue:null,description:"display (including breakpoints modifiers)",name:"display",required:!1,type:{name:'TypeWithMediaQueriesType<"grid" | "inline" | "flex" | "block" | "inline-block" | "inline-flex" | "inline-grid">'}},width:{defaultValue:null,description:"width (including breakpoints modifiers)",name:"width",required:!1,type:{name:'TypeWithMediaQueriesType<"full" | "screen" | "content-container">'}},height:{defaultValue:null,description:"height (including breakpoints modifiers)",name:"height",required:!1,type:{name:'TypeWithMediaQueriesType<"full" | "screen">'}},hiddenAbove:{defaultValue:null,description:'Defines hidden above strategy with media queries (is similar to "min-width") (including breakpoints modifiers)',name:"hiddenAbove",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},hiddenBelow:{defaultValue:null,description:'Defines hidden below strategy with media queries (is similar to "max-width") (including breakpoints modifiers)',name:"hiddenBelow",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},alignSelf:{defaultValue:null,description:"Defines a align self (including breakpoints modifiers)",name:"alignSelf",required:!1,type:{name:'TypeWithMediaQueriesType<"center" | "auto" | "start" | "end" | "stretch" | "baseline">'}},flexBasis:{defaultValue:null,description:"Defines a flex basis, auto or number (including breakpoints modifiers)",name:"flexBasis",required:!1,type:{name:'TypeWithMediaQueriesType<"0" | "auto" | "25" | "33" | "50" | "75" | "100">'}},flex:{defaultValue:null,description:"Defines a flex (including breakpoints modifiers)",name:"flex",required:!1,type:{name:'TypeWithMediaQueriesType<"auto" | "none" | "1" | "initial">'}}}}}catch{}export{a as P};
