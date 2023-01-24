var l=Object.defineProperty;var t=(n,i)=>l(n,"name",{value:i,configurable:!0});import{m as s,T as o}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import c from"./SocialIcons.stories.7df88038.js";import{b as r,F as a,j as e}from"./jsx-runtime.8d827842.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";import"./flexOrGridItemPropsControls.4879272c.js";import"./storybookHelper.b4ed8ce7.js";const g={title:"Components/Organisms/Footer",component:s,args:{introBlock:{title:"D\xE9couvrez Eleven Labs",description:"Notre site pour mieux nous conna\xEEtre"},elevenLabsSiteLink:{label:"J'y vais"},contactTitle:"Contact",contactList:[{title:"Eleven Labs - Paris",description:r(a,{children:["15 avenue de la grande arm\xE9e",e("br",{}),"75116 ",e(o,{textTransform:"uppercase",children:"Paris"})]})},{title:"Eleven Labs - Nantes",description:r(a,{children:["24 mail des chantiers",e("br",{}),"844200 ",e(o,{textTransform:"uppercase",children:"Nantes"})]})},{title:"business@eleven-labs.com",description:"0182831175"}],socialLinks:c.args.links,languageLinks:[{active:!0,name:"fr",label:"Fran\xE7ais"},{name:"en",label:"English"}]},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text } from '@/components';
import SocialIconsStories from '@/components/Molecules/SocialIcons/SocialIcons.stories';

import { Footer } from './Footer';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
  args: {
    introBlock: {
      title: 'D\xE9couvrez Eleven Labs',
      description: 'Notre site pour mieux nous conna\xEEtre',
    },
    elevenLabsSiteLink: {
      
      label: \`J'y vais\`
    },
    contactTitle: 'Contact',
    contactList: [
      {
        title: 'Eleven Labs - Paris',
        description: (
          <>
            15 avenue de la grande arm\xE9e
            <br />
            75116 <Text textTransform="uppercase">Paris</Text>
          </>
        ),
      },
      {
        title: 'Eleven Labs - Nantes',
        description: (
          <>
            24 mail des chantiers
            <br />
            844200 <Text textTransform="uppercase">Nantes</Text>
          </>
        ),
      },
      {
        title: 'business@eleven-labs.com',
        description: '0182831175',
      },
    ],
    socialLinks: SocialIconsStories.args!.links,
    languageLinks: [
      {
        active: true,
        name: 'fr',
        label: 'Fran\xE7ais',
      },
      {
        name: 'en',
        label: 'English',
      },
    ],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:48,line:69},endLoc:{col:78,line:69},startBody:{col:48,line:69},endBody:{col:78,line:69}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},m=t(n=>e(s,{...n}),"Template"),T=m.bind({}),E=["Overview"];export{T as Overview,E as __namedExportsOrder,g as default};
//# sourceMappingURL=Footer.stories.bfe77f59.js.map
