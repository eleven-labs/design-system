var l=Object.defineProperty;var r=(t,n)=>l(t,"name",{value:n,configurable:!0});import"./jsx-runtime.8d827842.js";import{c as e,A as d,M as c}from"./Props.10eeb717.js";import"./iframe.90672fd8.js";import"./string.ce803d68.js";import"./es.map.constructor.cb922823.js";import"./es.number.to-fixed.66c83ae9.js";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},i.apply(this,arguments)}r(i,"_extends");const m={},u="wrapper";function p({components:t,...n}){return e(u,i({},m,n,{components:t,mdxType:"MDXLayout"}),e(c,{title:"Foundations/Design Tokens/About",mdxType:"Meta"}),e("h1",null,"Design Tokens"),e("p",null,"Design tokens are the abstract concepts our system is built on: color, spacing, typography and the like."),e("p",null,"They are represented as data, in our case json, and are used instead of hard-coded values to ensure the flexibility and unity of all our product experiences."),e("p",null,"Design tokens are directly integrated into our component library."),e("p",null,"The design tokens are directly integrated into our component library, so we use ",e("a",{parentName:"p",href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary")," to generate ",e("inlineCode",{parentName:"p"},"CSS"),", ",e("inlineCode",{parentName:"p"},"SCSS")," and ",e("inlineCode",{parentName:"p"},"TypeScript")," variables from a single source, removing roadblocks, errors, and inefficiencies across our workflow."),e("h2",null,"Directory and file architecture of the Design Tokens"),e("pre",null,e("code",{parentName:"pre"},`design_system
\u2514\u2500\u2500\u2500bin
\u2502   \u2514\u2500\u2500\u2500build-design-tokens
\u2514\u2500\u2500\u2500src
\u2502   \u2514\u2500\u2500\u2500designTokens
\u2502   \u2502   \u2514\u2500\u2500\u2500asset
\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500font.tokens.json
\u2502   \u2502   \u2514\u2500\u2500\u2500typography
\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500heading.tokens.json
\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500text.tokens.json
\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500typography.tokens.json
\u2502   \u2502   \u2514\u2500\u2500\u2500breakpoint.tokens.json
\u2502   \u2502   \u2514\u2500\u2500\u2500color.token.json
\u2502   \u2502   \u2514\u2500\u2500\u2500spacing.token.json
`)),e("p",null,"In the ",e("inlineCode",{parentName:"p"},"bin/build-design-tokens")," directory is the command to generate the ",e("inlineCode",{parentName:"p"},"CSS"),", ",e("inlineCode",{parentName:"p"},"SCSS")," and ",e("inlineCode",{parentName:"p"},"TypeScript")," files."),e("p",null,"The command is:"),e("pre",null,e("code",{parentName:"pre"},`yarn build:design-tokens
`)),e("p",null,"Then in the ",e("inlineCode",{parentName:"p"},"src/designTokens")," folder is the definition of the tokens."))}r(p,"MDXContent");p.isMDXComponent=!0;const y=r(()=>{throw new Error("Docs-only story")},"__page");y.parameters={docsOnly:!0};const o={title:"Foundations/Design Tokens/About",includeStories:["__page"]},g={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:g,mdxComponentAnnotations:o},e(p,null))};const D=["__page"];export{D as __namedExportsOrder,y as __page,o as default};
//# sourceMappingURL=About.stories.7604f163.js.map
