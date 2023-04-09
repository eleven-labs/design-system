import{jsx as r,jsxs as o,Fragment as p}from"react/jsx-runtime";import{B as s,H as x,T as a}from"./TextHighlight-f81efc9d.js";import"./SyntaxHighlighter-544e951a.js";import{a as g}from"./systemPropsControls-90dfba94.js";import"./_commonjsHelpers-042e6b4d.js";import"react";import"./matchMediaQueryList-ff8b1607.js";import"./cssProperties-7e3c2fb7.js";import"./storybookHelper-cf67483b.js";const H={title:"Components/Atoms/Layout/Box",component:s,args:{p:"m",bg:"azure",color:"white",children:r(x,{textAlign:"center",children:"I'm a div Box ;"})},parameters:{layout:"centered",controls:{exclude:["as","children"]}},argTypes:{...g}},u=h=>r(s,{...h}),e=u.bind({}),t=()=>o(p,{children:[o(s,{hiddenAbove:"md",children:['This text hides at the "md" value screen width or'," ",r(a,{as:"span",fontWeight:"bold",children:"greater"})]}),o(s,{hiddenBelow:"sm",children:['This text hides at the "sm" value screen width and'," ",r(a,{as:"span",fontWeight:"bold",children:"smaller"})]})]});var d,i,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Box {...args} />",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): JSX.Element => <>
    <Box hiddenAbove="md">
      This text hides at the "md" value screen width or{' '}
      <Text as="span" fontWeight="bold">
        greater
      </Text>
    </Box>
    <Box hiddenBelow="sm">
      This text hides at the "sm" value screen width and{' '}
      <Text as="span" fontWeight="bold">
        smaller
      </Text>
    </Box>
  </>`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const W=["Overview","HiddenSystemProps"];export{t as HiddenSystemProps,e as Overview,W as __namedExportsOrder,H as default};
//# sourceMappingURL=Box.stories-fe16dd15.js.map
