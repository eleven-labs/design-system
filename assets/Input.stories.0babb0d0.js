var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{I as e}from"./BackLink.92d5e765.js";import{m as p}from"./flexOrGridItemPropsControls.65b2d59f.js";import{j as s}from"./jsx-runtime.41925e4a.js";import"./iframe.3e7fe7b4.js";const g={title:"Components/Atoms/Input",component:e,argTypes:{...p},args:{placeholder:"Rechercher par nom d\u2019article ou d\u2019auteur"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Input } from '@/components';
import { marginSystemProps } from '@/constants';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    placeholder: 'Rechercher par nom d\u2019article ou d\u2019auteur',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'ultra-light-grey',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Overview = Template.bind({});

export const InputSearch = Template.bind({});
InputSearch.args = {
  variant: 'search',
};

export const InputForm = Template.bind({});
InputForm.args = {
  variant: 'form',
};
`,locationsMap:{overview:{startLoc:{col:47,line:24},endLoc:{col:76,line:24},startBody:{col:47,line:24},endBody:{col:76,line:24}},"input-search":{startLoc:{col:47,line:24},endLoc:{col:76,line:24},startBody:{col:47,line:24},endBody:{col:76,line:24}},"input-form":{startLoc:{col:47,line:24},endLoc:{col:76,line:24},startBody:{col:47,line:24},endBody:{col:76,line:24}}}},layout:"centered",backgrounds:{default:"ultra-light-grey"}}},t=o(n=>s(e,{...n}),"Template"),I=t.bind({}),c=t.bind({});c.args={variant:"search"};const m=t.bind({});m.args={variant:"form"};const f=["Overview","InputSearch","InputForm"];export{m as InputForm,c as InputSearch,I as Overview,f as __namedExportsOrder,g as default};
//# sourceMappingURL=Input.stories.0babb0d0.js.map
