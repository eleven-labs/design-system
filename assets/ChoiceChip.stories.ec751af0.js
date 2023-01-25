var r=Object.defineProperty;var o=(e,i)=>r(e,"name",{value:i,configurable:!0});import{m as c}from"./systemProps.7fe820c8.js";import{C as t}from"./SubHeader.1779d5f5.js";import{j as s}from"./jsx-runtime.65a9abf3.js";import"./Link.55ad4bc3.js";import"./iframe.6079259d.js";const y={title:"Components/Atoms/ChoiceChip",component:t,argTypes:{...c},args:{children:"Choice Chip Label"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { marginSystemProps } from '@/constants';

import { ChoiceChip } from './ChoiceChip';

export default {
  title: 'Components/Atoms/ChoiceChip',
  component: ChoiceChip,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    children: 'Choice Chip Label',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'primary-light',
    },
  },
} as ComponentMeta<typeof ChoiceChip>;

const Template: ComponentStory<typeof ChoiceChip> = (args) => <ChoiceChip {...args} />;

export const Overview = Template.bind({});

export const ChoiceChipIsActice = Template.bind({});
ChoiceChipIsActice.args = {
  isActive: true,
};
`,locationsMap:{overview:{startLoc:{col:52,line:25},endLoc:{col:86,line:25},startBody:{col:52,line:25},endBody:{col:86,line:25}},"choice-chip-is-actice":{startLoc:{col:52,line:25},endLoc:{col:86,line:25},startBody:{col:52,line:25},endBody:{col:86,line:25}}}},layout:"centered",backgrounds:{default:"primary-light"}}},n=o(e=>s(t,{...e}),"Template"),g=n.bind({}),p=n.bind({});p.args={isActive:!0};const f=["Overview","ChoiceChipIsActice"];export{p as ChoiceChipIsActice,g as Overview,f as __namedExportsOrder,y as default};
//# sourceMappingURL=ChoiceChip.stories.ec751af0.js.map
