import{M as c}from"./chunk-MA2MUXQN-1bdcebce.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as i}from"./index-4fb8b842.js";import"./preload-helper-e58fefdf.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-69aec036.js";import"./chunk-XHUUYXNA-ee4a27d1.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-ee2f7c9c.js";import"./index-2232e45b.js";import"./index-25c606c1.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";function d(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?e.jsx(s,{...t,children:e.jsx(r,{})}):r();function r(){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Design Tokens/About"}),`
`,e.jsx(n.h1,{children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"Design tokens are the abstract concepts our system is built on: color, spacing, typography and the like."}),`
`,e.jsx(n.p,{children:"They are represented as data, in our case json, and are used instead of hard-coded values to ensure the flexibility and unity of all our product experiences."}),`
`,e.jsx(n.p,{children:"Design tokens are directly integrated into our component library."}),`
`,e.jsxs(n.p,{children:["The design tokens are directly integrated into our component library, so we use ",e.jsx(n.a,{href:"https://amzn.github.io/style-dictionary/",children:"Style Dictionary"})," to generate ",e.jsx(n.code,{children:"CSS"}),", ",e.jsx(n.code,{children:"SCSS"})," and ",e.jsx(n.code,{children:"TypeScript"})," variables from a single source, removing roadblocks, errors, and inefficiencies across our workflow."]}),`
`,e.jsx(n.h2,{children:"Directory and file architecture of the Design Tokens"}),`
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
`,e.jsxs(n.p,{children:["Then in the ",e.jsx(n.code,{children:"src/designTokens"})," folder is the definition of the tokens."]})]})}}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const o={title:"Foundations/Design Tokens/About",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const E=["__page"];export{E as __namedExportsOrder,a as __page,o as default};
//# sourceMappingURL=About.stories-e147e43d.js.map
