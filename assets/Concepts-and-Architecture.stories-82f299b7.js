import{M as c}from"./chunk-MA2MUXQN-1bdcebce.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as o}from"./index-4fb8b842.js";import"./preload-helper-e58fefdf.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-4b8a78e3.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-69aec036.js";import"./chunk-XHUUYXNA-ee4a27d1.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-ee2f7c9c.js";import"./index-2232e45b.js";import"./index-25c606c1.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";function l(t={}){const{wrapper:i}=Object.assign({},o(),t.components);return i?e.jsx(i,{...t,children:e.jsx(r,{})}):r();function r(){const s=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",a:"a",img:"img",h3:"h3",pre:"pre",code:"code",h4:"h4",em:"em"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Concepts and Architecture"}),`
`,e.jsx(s.h1,{children:"Concepts and Architecture"}),`
`,e.jsx(s.h2,{children:"Concepts"}),`
`,e.jsxs(s.p,{children:["This Design System will be based on ",e.jsx(s.strong,{children:"4 concepts"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Design Tokens"})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. ",e.jsx(s.a,{href:"https://www.lightningdesignsystem.com/design-tokens/",children:"Salesforce, Lightning Design System"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Design Tokens originated at Salesforce, where ",e.jsx(s.a,{href:"Jina",children:"https://twitter.com/jina"})," and ",e.jsx(s.a,{href:"Jon",children:"https://twitter.com/jonnyl"})," coined the term. A good explanation can be found on ",e.jsx(s.a,{href:"https://www.youtube.com/watch?v=q5qIowMyVt8",children:"Jina Anne's Youtube"}),"."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://github.com/design-tokens/community-group",children:"W3C Design Tokens Community Group"})," aims to establish a standard on which tools can rely on for sharing design tokens. This plugin aims to be W3C compliant so you could take your JSON and move to another tool someday."]}),`
`,e.jsxs(s.p,{children:["Our design tokens will be designed by designers and developers in JSON files, we will just have to consume these tokens and transform them into ",e.jsx(s.strong,{children:"Sass and TypeScript files"})," using ",e.jsx(s.a,{href:"https://amzn.github.io/style-dictionary/",children:e.jsx(s.strong,{children:"Style Dictionary"})}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For more explanation on the Design Token, I invite you to read this ",e.jsx(s.a,{href:"https://specifyapp.com/blog/introduction-to-design-tokens",children:"article"}),".",e.jsx("br",{}),`
How to manage your Design Tokens with `,e.jsx(s.strong,{children:"Style Dictionary"}),", I invite you to read this ",e.jsx(s.a,{href:"https://didoo.medium.com/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa",children:"article"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Atomic Design"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://atomicdesign.bradfrost.com/",children:e.jsx(s.strong,{children:"Atomic Design"})})," is a new approach to modular design conceived by ",e.jsx(s.a,{href:"https://bradfrost.com/",children:e.jsx(s.strong,{children:"Brad Frost"})})," to create Design Systems from simpler components: atoms, molecules, organisms, templates and pages."]}),`
`,e.jsx(s.p,{children:"Like chemical atoms and molecules, the elements of the interface must be alive, evolving. This method would allow designers and developers to design coherent user interfaces (UI), better adapted to current needs and uses. Atomic design allows the client to see the design steps."}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"documentations/imgs/atomic-design-tokens.jpg",alt:"Atomic Design"})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For more details you can read Brad Frost's article ",e.jsx(s.a,{href:"https://bradfrost.com/blog/post/extending-atomic-design/",children:"here"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Utility classes and BEM"})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For more details you can read an ",e.jsx(s.a,{href:"https://css-tricks.com/building-a-scalable-css-architecture-with-bem-and-utility-classes/",children:"article"})," on a Scalable CSS Architecture with ",e.jsx(s.strong,{children:"Utility Classes"})," and ",e.jsx(s.strong,{children:"BEM"}),".",e.jsx("br",{}),`
Here is an `,e.jsx(s.a,{href:"https://blog.logrocket.com/css-utility-classes-library-extendable-styles/",children:"article"})," that explains what ",e.jsx(s.strong,{children:"Utility Classes"})," are and their interest in a Design System"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"System Props"})}),`
`,e.jsxs(s.p,{children:["Inspired by ",e.jsx(s.strong,{children:"Chakra UI"}),", ",e.jsx(s.strong,{children:"System Props"})," allows you to add accessories to your components to modify their style, the only difference is that we do not use ",e.jsx(s.strong,{children:"CSS-in-JS"})," but ",e.jsx(s.strong,{children:"CSS Utility Classes"}),`.
`,e.jsx(s.strong,{children:"System Props"})," to improve reusability, predictability, and standardization across our design system."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Here are the two libraries that inspired the System Props, ",e.jsx(s.a,{href:"https://chakra-ui.com/docs/styled-system/style-props",children:"Chakra UI"})," and ",e.jsx(s.a,{href:"https://system-props.com/",children:"System Props"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{children:"Architecture"}),`
`,e.jsx(s.h3,{children:"Directory and file architecture in this project"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`└───src
│   └───assets
│   └───components
│   └───constants
│   └───designTokens
│   └───documentations
│   └───helpers
│   └───styles
│   └───types
`})}),`
`,e.jsx(s.h4,{children:"assets:"}),`
`,e.jsxs(s.p,{children:["Here are the assets of the Design System, such as ",e.jsx(s.strong,{children:"fonts"}),", ",e.jsx(s.strong,{children:"logo"}),", ",e.jsx(s.strong,{children:"icons"})," ..."]}),`
`,e.jsx(s.h4,{children:"components:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`└───src
│   └───components
│   │   └───Atoms
│   │   └───Molecules
│   │   └───Organisms
`})}),`
`,e.jsx(s.p,{children:`This folder only contains UI components. Each of them must have an associated story.
These components must not have any business logic, nor state management (they can only be manipulated thanks to their properties).`}),`
`,e.jsx(s.p,{children:"What is essential to a component:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Define the ",e.jsx(s.strong,{children:"properties interface"})," and extend it with an already defined component or a native element if it's an html tag"]}),`
`,e.jsxs(s.li,{children:["Have an associated ",e.jsx(s.strong,{children:"story"})," to be able to view it in ",e.jsx(s.strong,{children:"storybook"})]}),`
`]}),`
`,e.jsx(s.h4,{children:"constants:"}),`
`,e.jsxs(s.p,{children:["This folder contains constants common to the whole Design System like ",e.jsx(s.strong,{children:"tokenNameList"}),", ",e.jsx(s.strong,{children:"cssProperties"}),", ",e.jsx(s.strong,{children:"systemProps"})," and documentation variables for the storybook."]}),`
`,e.jsx(s.h4,{children:"designTokens:"}),`
`,e.jsxs(s.p,{children:["It contains all the design tokens that are used with style dictionary to generate ",e.jsx(s.strong,{children:"CSS Custom Properties"}),", ",e.jsx(s.strong,{children:"SCSS variables"})," and ",e.jsx(s.strong,{children:"Typescript variables"}),"."]}),`
`,e.jsx(s.h4,{children:"documentations:"}),`
`,e.jsx(s.p,{children:"Here is all the documentation that will be used by the storybook."}),`
`,e.jsx(s.h4,{children:"helpers:"}),`
`,e.jsx(s.p,{children:"Helper functions make complicated or repetitive tasks a bit easier, and keep your code DRY."}),`
`,e.jsx(s.h4,{children:"styles:"}),`
`,e.jsxs(s.p,{children:["To write most of our stylesheets, we will take a utility-first approach CSS with ",e.jsx(s.strong,{children:"utility classes"})," and ",e.jsx(s.strong,{children:"BEM"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`└───src
│   └───styles
│   │   └───abstracts
│   │   │   └───functions
│   │   │   └───mixins
│   │   │   └───variables
│   │   └───utilities
│   │   └───_base.scss
│   │   └───_fonts.scss
│   │   └───_reset.scss
│   │   └───_token-custom-properties.scss
│   │   └───common.scss
`})}),`
`,e.jsxs(s.p,{children:["We split our stylesheets into separate files using ",e.jsx(s.em,{children:"Partials"}),". We then import our partials using an ",e.jsx(s.code,{children:"@use"})," directive, into one master stylesheet, in our case the ",e.jsx(s.code,{children:"common.scss"})," file."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"abstracts"})," folder will contain all mixins, functions, variables."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"utilities"})," folder will contain all utility classes."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"_base.scss"})," holds the boilerplate code for the project."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"_fonts.scss"})," contains all fonts face, this file is ",e.jsx(s.strong,{children:"autogenerated"})," and uses the ",e.jsx(s.strong,{children:"Design Tokens"}),"."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"_reset.scss"})," contains all a reset some HTML elements."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"_token-custom-properties.scss"})," contains all CSS variables, this file is ",e.jsx(s.strong,{children:"autogenerated"})," and uses the ",e.jsx(s.strong,{children:"Design Tokens"}),".."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"common.scss"})," must contain ONLY the imports of the above files, it's the entry point."]}),`
`,e.jsxs(s.p,{children:["Each component can have its own stylesheet, if possible use the existing components with the ",e.jsx(s.strong,{children:"System Props"})," to avoid adding custom style."]}),`
`,e.jsx(s.p,{children:"This is essential for an SCSS stylesheet of a component:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["use ",e.jsx(s.strong,{children:"SASS"})," with a ",e.jsx(s.strong,{children:"BEM"})," approach to style the component and native CSS ",e.jsx(s.strong,{children:"pseudo classes"})," as much as possible."]}),`
`,e.jsxs(s.li,{children:["never declare the same CSS property more than twice (width, height, etc...). Change their values using the global or internal ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:e.jsx(s.strong,{children:'"CSS Custom Properties"'})}),"."]}),`
`]}),`
`,e.jsx(s.h4,{children:"types:"}),`
`,e.jsxs(s.p,{children:["These are all common types related to the whole design system, ",e.jsx(s.strong,{children:"component property interfaces"})," should not be included."]})]})}}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const n={title:"Concepts and Architecture",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:l};const P=["__page"];export{P as __namedExportsOrder,a as __page,n as default};
//# sourceMappingURL=Concepts-and-Architecture.stories-82f299b7.js.map
