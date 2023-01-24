var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{s}from"./flexOrGridItemPropsControls.4879272c.js";import"./systemProps.7fe820c8.js";import{j as a,k as o}from"./SubHeader.0b0fa522.js";import{j as c}from"./jsx-runtime.8d827842.js";import"./storybookHelper.b4ed8ce7.js";import"./Link.a50d5e23.js";import"./iframe.90672fd8.js";const I={title:"Components/Molecules/SocialIcons",component:a,argTypes:{...s},args:{links:[{socialName:o.RSS},{socialName:o.FACEBOOK},{socialName:o.TWITTER},{socialName:o.LINKEDIN},{socialName:o.WELCOME_TO_JUNGLE}]},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants/storybook';

import { SocialIcons, SocialNameType } from './SocialIcons';

export default {
  title: 'Components/Molecules/SocialIcons',
  component: SocialIcons,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    links: [
      {
        socialName: SocialNameType.RSS,
      },
      {
        socialName: SocialNameType.FACEBOOK,
      },
      {
        socialName: SocialNameType.TWITTER,
      },
      {
        socialName: SocialNameType.LINKEDIN,
      },
      {
        socialName: SocialNameType.WELCOME_TO_JUNGLE,
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    layout: 'centered',
    backgrounds: {
      default: 'primary-dark',
    },
  },
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = (args) => <SocialIcons {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:53,line:44},endLoc:{col:88,line:44},startBody:{col:53,line:44},endBody:{col:88,line:44}}}},viewport:{defaultViewport:"extraSmallScreen"},layout:"centered",backgrounds:{default:"primary-dark"}}},l=n(e=>c(a,{...e}),"Template"),f=l.bind({}),u=["Overview"];export{f as Overview,u as __namedExportsOrder,I as default};
//# sourceMappingURL=SocialIcons.stories.7df88038.js.map
