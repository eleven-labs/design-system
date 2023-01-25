var r=Object.defineProperty;var o=(e,n)=>r(e,"name",{value:n,configurable:!0});import{s as a}from"./flexOrGridItemPropsControls.064eab83.js";import"./systemProps.7fe820c8.js";import{d as t}from"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import{j as p}from"./jsx-runtime.65a9abf3.js";import"./storybookHelper.e1a85a09.js";import"./iframe.6079259d.js";const d={title:"Components/Molecules/ChoiceChipGroup",component:t,argTypes:{...a},args:{choices:[{name:"all",label:"Tous"},{name:"javascript",label:"Javascript"},{name:"php",label:"PHP"},{name:"agile",label:"Agile"},{name:"architecture",label:"Architecture"},{name:"best-practices",label:"Bonnes pratiques"}]},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
//# sourceMappingURL=ChoiceChipGroup.stories.cf1559e3.js.map
