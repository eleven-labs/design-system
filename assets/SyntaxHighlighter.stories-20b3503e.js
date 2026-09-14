import{j}from"./jsx-runtime-ffb262ed.js";import{S as H}from"./SyntaxHighlighter-db610ffa.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";const P={component:H,args:{language:"typescript",children:"import React from React;"},argTypes:{language:{control:"select",options:["bash","c","css","csv","diff","docker","gherkin","go","graphql","hcl","html","http","ini","java","javascript","json","jsx","lua","markdown","mermaid","objectivec","php","powershell","protobuf","python","ruby","scss","sh","shell","sql","swift","toml","tsx","twig","typescript","uri","xml","yaml"]}}},t=f=>j.jsx(H,{...f}),o=t.bind({}),r=t.bind({});r.args={language:"bash",children:`git clone https://github.com/eleven-labs/design-system.git
cd design-system
npm install
npm run start:storybook`};const e=t.bind({});e.args={language:"python",children:`import os


def main() -> None:
    print(os.name)`};const s=t.bind({});s.args={language:"http",children:`GET /api/v1/articles
POST /api/v1/articles HTTP/1.1
Content-Type: application/json

{ "title": "Hello" }`};const a=t.bind({});a.args={language:"graphql",children:`query products {
  products {
    id
    name
    reviews {
      rating
    }
  }
}`};var i,n,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <SyntaxHighlighter {...args} />",...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"args => <SyntaxHighlighter {...args} />",...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,h,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"args => <SyntaxHighlighter {...args} />",...(d=(h=e.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,y,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"args => <SyntaxHighlighter {...args} />",...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,b,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"args => <SyntaxHighlighter {...args} />",...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Overview","Bash","Python","Http","GraphQL"];export{r as Bash,a as GraphQL,s as Http,o as Overview,e as Python,E as __namedExportsOrder,P as default};
