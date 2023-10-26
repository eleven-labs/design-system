import{M as c}from"./chunk-PCJTTTQV-642ce772.js";import{j as e}from"./jsx-runtime-94f6e698.js";import{u as i}from"./index-1d576ef5.js";import"./iframe-54704e92.js";import"../sb-preview/runtime.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-02b7423d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(s={}){const{wrapper:r}=Object.assign({},i(),s.components);return r?e.jsx(r,{...s,children:e.jsx(t,{})}):t();function t(){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Design Tokens/About"}),`
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
`,e.jsxs(n.p,{children:["Then in the ",e.jsx(n.code,{children:"src/designTokens"})," folder is the definition of the tokens."]})]})}}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const o={title:"Foundations/Design Tokens/About",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const b=["__page"];export{b as __namedExportsOrder,a as __page,o as default};
//# sourceMappingURL=About.stories-7552f761.js.map
