var r=Object.defineProperty;var o=(e,n)=>r(e,"name",{value:n,configurable:!0});import{s as a}from"./flexOrGridItemPropsControls.4879272c.js";import"./systemProps.7fe820c8.js";import{d as t}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{j as p}from"./jsx-runtime.8d827842.js";import"./storybookHelper.b4ed8ce7.js";import"./iframe.90672fd8.js";const d={title:"Components/Molecules/ChoiceChipGroup",component:t,argTypes:{...a},args:{choices:[{name:"all",label:"Tous"},{name:"javascript",label:"Javascript"},{name:"php",label:"PHP"},{name:"agile",label:"Agile"},{name:"architecture",label:"Architecture"},{name:"best-practices",label:"Bonnes pratiques"}]},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants/storybook';

import { ChoiceChipGroup } from '@/components';

export default {
  title: 'Components/Molecules/ChoiceChipGroup',
  component: ChoiceChipGroup,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    choices: [
      { name: 'all', label: 'Tous' },
      { name: 'javascript', label: 'Javascript' },
      { name: 'php', label: 'PHP' },
      { name: 'agile', label: 'Agile' },
      { name: 'architecture', label: 'Architecture' },
      { name: 'best-practices', label: 'Bonnes pratiques' },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    layout: 'centered',
    backgrounds: {
      default: 'primary-light',
    },
  },
} as ComponentMeta<typeof ChoiceChipGroup>;

const Template: ComponentStory<typeof ChoiceChipGroup> = (args) => <ChoiceChipGroup {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:57,line:35},endLoc:{col:96,line:35},startBody:{col:57,line:35},endBody:{col:96,line:35}}}},viewport:{defaultViewport:"extraSmallScreen"},layout:"centered",backgrounds:{default:"primary-light"}}},i=o(e=>p(t,{...e}),"Template"),y=i.bind({}),f=["Overview"];export{y as Overview,f as __namedExportsOrder,d as default};
//# sourceMappingURL=ChoiceChipGroup.stories.37bb224b.js.map
