import{R as e}from"./index-f1f749bf.js";import{B as s,H as h,T as a}from"./Button-cbc8de45.js";import{a as p}from"./systemPropsControls-da15362a.js";import"./_commonjsHelpers-042e6b4d.js";import"./cssProperties-d8c95686.js";import"./storybookHelper-bf52d42d.js";const b={title:"Components/Atoms/Layout/Box",component:s,args:{p:"m",bg:"azure",color:"white",children:e.createElement(h,{textAlign:"center"},"I'm a div Box ;")},parameters:{layout:"centered",controls:{exclude:["as","children"]}},argTypes:{...p}},x=c=>e.createElement(s,{...c}),t=x.bind({}),r=()=>e.createElement(e.Fragment,null,e.createElement(s,{hiddenAbove:"md"},'This text hides at the "md" value screen width or'," ",e.createElement(a,{as:"span",fontWeight:"bold"},"greater")),e.createElement(s,{hiddenBelow:"sm"},'This text hides at the "sm" value screen width and'," ",e.createElement(a,{as:"span",fontWeight:"bold"},"smaller")));var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Box {...args} />",...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(): JSX.Element => <>
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
  </>`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};t.parameters={storySource:{source:"args => <Box {...args} />"},...t.parameters};r.parameters={storySource:{source:`(): JSX.Element => <>
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
  </>`},...r.parameters};const f=["Overview","HiddenSystemProps"];export{r as HiddenSystemProps,t as Overview,f as __namedExportsOrder,b as default};
//# sourceMappingURL=Box.stories-579867a8.js.map
