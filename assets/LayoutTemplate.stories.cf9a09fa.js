var c=Object.defineProperty;var n=(e,r)=>c(e,"name",{value:r,configurable:!0});import{n as d,m as u,B as y}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import f,{OpenSearch as S}from"./Autocomplete.stories.dc6747db.js";import g from"./Footer.stories.bfe77f59.js";import a from"./Header.stories.ff7bee56.js";import{b as s,F as l,j as o}from"./jsx-runtime.8d827842.js";const t=n(({headerProps:e,footerProps:r,children:i})=>s(l,{children:[o(d,{...e}),i,o(u,{...r})]}),"LayoutTemplate");try{t.displayName="LayoutTemplate",t.__docgenInfo={description:"",displayName:"LayoutTemplate",props:{headerProps:{defaultValue:null,description:"",name:"headerProps",required:!0,type:{name:"HeaderProps"}},footerProps:{defaultValue:null,description:"",name:"footerProps",required:!0,type:{name:"FooterProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/templates/LayoutTemplate/LayoutTemplate.tsx#LayoutTemplate"]={docgenInfo:t.__docgenInfo,name:"LayoutTemplate",path:"src/templates/LayoutTemplate/LayoutTemplate.tsx#LayoutTemplate"})}catch{}const T={title:"Templates/Layout",component:t,args:{headerProps:a.args,footerProps:g.args,children:o(y,{as:"main",className:"container-content",pt:"xl",pb:"xxl-2",textAlign:"center",children:"content"})},decorators:[e=>s(l,{children:[o("style",{dangerouslySetInnerHTML:{__html:"#root { display: flex; flex-direction: column; height: 100vh; } #root main { flex: 1; }"}}),o(e,{})]})],parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box, HeaderProps } from '@/components';
import * as AutocompleteStories from '@/components/Molecules/Autocomplete/Autocomplete.stories';
import FooterStories from '@/components/Organisms/Footer/Footer.stories';
import HeaderStories from '@/components/Organisms/Header/Header.stories';
import { LayoutTemplate } from '@/templates';

export default {
  title: 'Templates/Layout',
  component: LayoutTemplate,
  args: {
    headerProps: HeaderStories.args,
    footerProps: FooterStories.args,
    children: (
      <Box as="main" className="container-content" pt="xl" pb="xxl-2" textAlign="center">
        content
      </Box>
    ),
  },
  decorators: [
    (Story): JSX.Element => (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: '#root { display: flex; flex-direction: column; height: 100vh; } #root main { flex: 1; }',
          }}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof LayoutTemplate>;

const Template: ComponentStory<typeof LayoutTemplate> = (args) => <LayoutTemplate {...args} />;

export const Overview = Template.bind({});

export const OpenSearch = Template.bind({});
OpenSearch.args = {
  headerProps: {
    ...HeaderStories.args,
    autocompleteDisplayed: true,
    autocompleteProps: {
      ...AutocompleteStories.default.args,
      ...AutocompleteStories.OpenSearch.args,
    },
  } as HeaderProps,
};
`,locationsMap:{overview:{startLoc:{col:56,line:42},endLoc:{col:94,line:42},startBody:{col:56,line:42},endBody:{col:94,line:42}},"open-search":{startLoc:{col:56,line:42},endLoc:{col:94,line:42},startBody:{col:56,line:42},endBody:{col:94,line:42}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},p=n(e=>o(t,{...e}),"Template"),h=p.bind({}),m=p.bind({});m.args={headerProps:{...a.args,autocompleteDisplayed:!0,autocompleteProps:{...f.args,...S.args}}};const x=["Overview","OpenSearch"],H=Object.freeze(Object.defineProperty({__proto__:null,default:T,Overview:h,OpenSearch:m,__namedExportsOrder:x},Symbol.toStringTag,{value:"Module"}));export{t as L,T as a,H as b};
//# sourceMappingURL=LayoutTemplate.stories.cf9a09fa.js.map
