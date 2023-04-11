import{M as d}from"./chunk-PCJTTTQV-73e786e6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as n,a as o,F as a}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./preload-helper-e58fefdf.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-150aa0e5.js";import"./index-96c5f47c.js";import"./isSymbol-69229716.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-975e6aef.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-2b733bc9.js";import"./chunk-RDJSMFWU-155fac78.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-7KVP4ZAY-197a3368.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function p(t={}){const{wrapper:i}=Object.assign({},c(),t.components);return i?n(i,{...t,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},c(),t.components);return o(a,{children:[n(d,{title:"Foundations/Design Tokens/About"}),`
`,n(e.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,n(e.p,{children:"Design tokens are the abstract concepts our system is built on: color, spacing, typography and the like."}),`
`,n(e.p,{children:"They are represented as data, in our case json, and are used instead of hard-coded values to ensure the flexibility and unity of all our product experiences."}),`
`,n(e.p,{children:"Design tokens are directly integrated into our component library."}),`
`,o(e.p,{children:["The design tokens are directly integrated into our component library, so we use ",n(e.a,{href:"https://amzn.github.io/style-dictionary/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Style Dictionary"})," to generate ",n(e.code,{children:"CSS"}),", ",n(e.code,{children:"SCSS"})," and ",n(e.code,{children:"TypeScript"})," variables from a single source, removing roadblocks, errors, and inefficiencies across our workflow."]}),`
`,n(e.h2,{id:"directory-and-file-architecture-of-the-design-tokens",children:"Directory and file architecture of the Design Tokens"}),`
`,n(e.pre,{children:n(e.code,{children:`design_system
└───bin
│   └───build-design-tokens
└───src
│   └───designTokens
│   │   └───asset
│   │   │   └───font.tokens.json
│   │   └───typography
│   │   │   └───heading.tokens.json
│   │   │   └───text.tokens.json
│   │   │   └───typography.tokens.json
│   │   └───breakpoint.tokens.json
│   │   └───color.token.json
│   │   └───spacing.token.json
`})}),`
`,o(e.p,{children:["In the ",n(e.code,{children:"bin/build-design-tokens"})," directory is the command to generate the ",n(e.code,{children:"CSS"}),", ",n(e.code,{children:"SCSS"})," and ",n(e.code,{children:"TypeScript"})," files."]}),`
`,n(e.p,{children:"The command is:"}),`
`,n(e.pre,{children:n(e.code,{children:`yarn build:design-tokens
`})}),`
`,o(e.p,{children:["Then in the ",n(e.code,{children:"src/designTokens"})," folder is the definition of the tokens."]})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const r={title:"Foundations/Design Tokens/About",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:p};const A=["__page"];export{A as __namedExportsOrder,l as __page,r as default};
//# sourceMappingURL=About.stories-0f5d636a.js.map
