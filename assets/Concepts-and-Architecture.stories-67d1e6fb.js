import{M as a}from"./chunk-PCJTTTQV-73e786e6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as n,a as t,F as c}from"./jsx-runtime-670450c2.js";import{u as l}from"./index-4fb8b842.js";import"./preload-helper-e58fefdf.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-150aa0e5.js";import"./index-96c5f47c.js";import"./isSymbol-69229716.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-975e6aef.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-2b733bc9.js";import"./chunk-RDJSMFWU-155fac78.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-7KVP4ZAY-197a3368.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function h(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?n(s,{...o,children:n(i,{})}):i();function i(){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",a:"a",img:"img",h3:"h3",pre:"pre",code:"code",h4:"h4",em:"em"},l(),o.components);return t(c,{children:[n(a,{title:"Concepts and Architecture"}),`
`,n(e.h1,{id:"concepts-and-architecture",children:"Concepts and Architecture"}),`
`,n(e.h2,{id:"concepts",children:"Concepts"}),`
`,t(e.p,{children:["This Design System will be based on ",n(e.strong,{children:"4 concepts"}),":"]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Design Tokens"})}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:["Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. ",n(e.a,{href:"https://www.lightningdesignsystem.com/design-tokens/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Salesforce, Lightning Design System"}),"."]}),`
`]}),`
`,t(e.p,{children:["Design Tokens originated at Salesforce, where ",n(e.a,{href:"Jina",children:"https://twitter.com/jina"})," and ",n(e.a,{href:"Jon",children:"https://twitter.com/jonnyl"})," coined the term. A good explanation can be found on ",n(e.a,{href:"https://www.youtube.com/watch?v=q5qIowMyVt8",target:"_blank",rel:"nofollow noopener noreferrer",children:"Jina Anne's Youtube"}),"."]}),`
`,t(e.p,{children:["The ",n(e.a,{href:"https://github.com/design-tokens/community-group",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Design Tokens Community Group"})," aims to establish a standard on which tools can rely on for sharing design tokens. This plugin aims to be W3C compliant so you could take your JSON and move to another tool someday."]}),`
`,t(e.p,{children:["Our design tokens will be designed by designers and developers in JSON files, we will just have to consume these tokens and transform them into ",n(e.strong,{children:"Sass and TypeScript files"})," using ",n(e.a,{href:"https://amzn.github.io/style-dictionary/",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.strong,{children:"Style Dictionary"})}),"."]}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:["For more explanation on the Design Token, I invite you to read this ",n(e.a,{href:"https://specifyapp.com/blog/introduction-to-design-tokens",target:"_blank",rel:"nofollow noopener noreferrer",children:"article"}),".",n("br",{}),`
How to manage your Design Tokens with `,n(e.strong,{children:"Style Dictionary"}),", I invite you to read this ",n(e.a,{href:"https://didoo.medium.com/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa",target:"_blank",rel:"nofollow noopener noreferrer",children:"article"}),"."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Atomic Design"})}),`
`,t(e.p,{children:[n(e.a,{href:"https://atomicdesign.bradfrost.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.strong,{children:"Atomic Design"})})," is a new approach to modular design conceived by ",n(e.a,{href:"https://bradfrost.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.strong,{children:"Brad Frost"})})," to create Design Systems from simpler components: atoms, molecules, organisms, templates and pages."]}),`
`,n(e.p,{children:"Like chemical atoms and molecules, the elements of the interface must be alive, evolving. This method would allow designers and developers to design coherent user interfaces (UI), better adapted to current needs and uses. Atomic design allows the client to see the design steps."}),`
`,n(e.p,{children:n(e.img,{src:"documentations/imgs/atomic-design-tokens.jpg",alt:"Atomic Design"})}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:["For more details you can read Brad Frost's article ",n(e.a,{href:"https://bradfrost.com/blog/post/extending-atomic-design/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"Utility classes and BEM"})}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:["For more details you can read an ",n(e.a,{href:"https://css-tricks.com/building-a-scalable-css-architecture-with-bem-and-utility-classes/",target:"_blank",rel:"nofollow noopener noreferrer",children:"article"})," on a Scalable CSS Architecture with ",n(e.strong,{children:"Utility Classes"})," and ",n(e.strong,{children:"BEM"}),".",n("br",{}),`
Here is an `,n(e.a,{href:"https://blog.logrocket.com/css-utility-classes-library-extendable-styles/",target:"_blank",rel:"nofollow noopener noreferrer",children:"article"})," that explains what ",n(e.strong,{children:"Utility Classes"})," are and their interest in a Design System"]}),`
`]}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.strong,{children:"System Props"})}),`
`,t(e.p,{children:["Inspired by ",n(e.strong,{children:"Chakra UI"}),", ",n(e.strong,{children:"System Props"})," allows you to add accessories to your components to modify their style, the only difference is that we do not use ",n(e.strong,{children:"CSS-in-JS"})," but ",n(e.strong,{children:"CSS Utility Classes"}),`.
`,n(e.strong,{children:"System Props"})," to improve reusability, predictability, and standardization across our design system."]}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:["Here are the two libraries that inspired the System Props, ",n(e.a,{href:"https://chakra-ui.com/docs/styled-system/style-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI"})," and ",n(e.a,{href:"https://system-props.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"System Props"})]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{id:"architecture",children:"Architecture"}),`
`,n(e.h3,{id:"directory-and-file-architecture-in-this-project",children:"Directory and file architecture in this project"}),`
`,n(e.pre,{children:n(e.code,{children:`└───src
│   └───assets
│   └───components
│   └───constants
│   └───designTokens
│   └───documentations
│   └───helpers
│   └───styles
│   └───types
`})}),`
`,n(e.h4,{id:"assets",children:"assets:"}),`
`,t(e.p,{children:["Here are the assets of the Design System, such as ",n(e.strong,{children:"fonts"}),", ",n(e.strong,{children:"logo"}),", ",n(e.strong,{children:"icons"})," ..."]}),`
`,n(e.h4,{id:"components",children:"components:"}),`
`,n(e.pre,{children:n(e.code,{children:`└───src
│   └───components
│   │   └───Atoms
│   │   └───Molecules
│   │   └───Organisms
`})}),`
`,n(e.p,{children:`This folder only contains UI components. Each of them must have an associated story.
These components must not have any business logic, nor state management (they can only be manipulated thanks to their properties).`}),`
`,n(e.p,{children:"What is essential to a component:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Define the ",n(e.strong,{children:"properties interface"})," and extend it with an already defined component or a native element if it's an html tag"]}),`
`,t(e.li,{children:["Have an associated ",n(e.strong,{children:"story"})," to be able to view it in ",n(e.strong,{children:"storybook"})]}),`
`]}),`
`,n(e.h4,{id:"constants",children:"constants:"}),`
`,t(e.p,{children:["This folder contains constants common to the whole Design System like ",n(e.strong,{children:"tokenNameList"}),", ",n(e.strong,{children:"cssProperties"}),", ",n(e.strong,{children:"systemProps"})," and documentation variables for the storybook."]}),`
`,n(e.h4,{id:"designtokens",children:"designTokens:"}),`
`,t(e.p,{children:["It contains all the design tokens that are used with style dictionary to generate ",n(e.strong,{children:"CSS Custom Properties"}),", ",n(e.strong,{children:"SCSS variables"})," and ",n(e.strong,{children:"Typescript variables"}),"."]}),`
`,n(e.h4,{id:"documentations",children:"documentations:"}),`
`,n(e.p,{children:"Here is all the documentation that will be used by the storybook."}),`
`,n(e.h4,{id:"helpers",children:"helpers:"}),`
`,n(e.p,{children:"Helper functions make complicated or repetitive tasks a bit easier, and keep your code DRY."}),`
`,n(e.h4,{id:"styles",children:"styles:"}),`
`,t(e.p,{children:["To write most of our stylesheets, we will take a utility-first approach CSS with ",n(e.strong,{children:"utility classes"})," and ",n(e.strong,{children:"BEM"}),"."]}),`
`,n(e.pre,{children:n(e.code,{children:`└───src
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
`,t(e.p,{children:["We split our stylesheets into separate files using ",n(e.em,{children:"Partials"}),". We then import our partials using an ",n(e.code,{children:"@use"})," directive, into one master stylesheet, in our case the ",n(e.code,{children:"common.scss"})," file."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"abstracts"})," folder will contain all mixins, functions, variables."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"utilities"})," folder will contain all utility classes."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"_base.scss"})," holds the boilerplate code for the project."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"_fonts.scss"})," contains all fonts face, this file is ",n(e.strong,{children:"autogenerated"})," and uses the ",n(e.strong,{children:"Design Tokens"}),"."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"_reset.scss"})," contains all a reset some HTML elements."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"_token-custom-properties.scss"})," contains all CSS variables, this file is ",n(e.strong,{children:"autogenerated"})," and uses the ",n(e.strong,{children:"Design Tokens"}),".."]}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"common.scss"})," must contain ONLY the imports of the above files, it's the entry point."]}),`
`,t(e.p,{children:["Each component can have its own stylesheet, if possible use the existing components with the ",n(e.strong,{children:"System Props"})," to avoid adding custom style."]}),`
`,n(e.p,{children:"This is essential for an SCSS stylesheet of a component:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["use ",n(e.strong,{children:"SASS"})," with a ",n(e.strong,{children:"BEM"})," approach to style the component and native CSS ",n(e.strong,{children:"pseudo classes"})," as much as possible."]}),`
`,t(e.li,{children:["never declare the same CSS property more than twice (width, height, etc...). Change their values using the global or internal ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.strong,{children:'"CSS Custom Properties"'})}),"."]}),`
`]}),`
`,n(e.h4,{id:"types",children:"types:"}),`
`,t(e.p,{children:["These are all common types related to the whole design system, ",n(e.strong,{children:"component property interfaces"})," should not be included."]})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Concepts and Architecture",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const I=["__page"];export{I as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=Concepts-and-Architecture.stories-67d1e6fb.js.map
