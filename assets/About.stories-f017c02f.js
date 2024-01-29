import{M as i}from"./chunk-HLWAVYOI-84a53831.js";import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as r}from"./index-a1cf9e47.js";import"./iframe-70df942a.js";import"../sb-preview/runtime.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-236157c6.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundations/Design Tokens/About"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"Design tokens are the abstract concepts our system is built on: color, spacing, typography and the like."}),`
`,e.jsx(n.p,{children:"They are represented as data, in our case json, and are used instead of hard-coded values to ensure the flexibility and unity of all our product experiences."}),`
`,e.jsx(n.p,{children:"Design tokens are directly integrated into our component library."}),`
`,e.jsxs(n.p,{children:["The design tokens are directly integrated into our component library, so we use ",e.jsx(n.a,{href:"https://amzn.github.io/style-dictionary/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Style Dictionary"})," to generate ",e.jsx(n.code,{children:"CSS"}),", ",e.jsx(n.code,{children:"SCSS"})," and ",e.jsx(n.code,{children:"TypeScript"})," variables from a single source, removing roadblocks, errors, and inefficiencies across our workflow."]}),`
`,e.jsx(n.h2,{id:"directory-and-file-architecture-of-the-design-tokens",children:"Directory and file architecture of the Design Tokens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`design_system
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
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"bin/build-design-tokens"})," directory is the command to generate the ",e.jsx(n.code,{children:"CSS"}),", ",e.jsx(n.code,{children:"SCSS"})," and ",e.jsx(n.code,{children:"TypeScript"})," files."]}),`
`,e.jsx(n.p,{children:"The command is:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`yarn build:design-tokens
`})}),`
`,e.jsxs(n.p,{children:["Then in the ",e.jsx(n.code,{children:"src/designTokens"})," folder is the definition of the tokens."]})]})}function c(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const s={title:"Foundations/Design Tokens/About",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:c};const b=["__page"];export{b as __namedExportsOrder,d as __page,s as default};
