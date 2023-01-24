var a=Object.defineProperty;var o=(n,e)=>a(n,"name",{value:e,configurable:!0});import{a as r}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{m as i}from"./systemProps.7fe820c8.js";import{j as s}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";const v={title:"Components/Atoms/Button",component:r,argTypes:{...i},args:{children:"Button Label"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';
import { marginSystemProps } from '@/constants';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    children: 'Button Label',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
  
  children: 'J\\'y vais'
};

export const ButtonPrimaryGhost = Template.bind({});
ButtonPrimaryGhost.args = {
  variant: 'primary-ghost',
  children: 'Voir plus',
};

export const ButtonForm = Template.bind({});
ButtonForm.args = {
  variant: 'form',
  children: 'Je d\xE9couvre',
};
`,locationsMap:{overview:{startLoc:{col:48,line:21},endLoc:{col:78,line:21},startBody:{col:48,line:21},endBody:{col:78,line:21}},"button-primary":{startLoc:{col:48,line:21},endLoc:{col:78,line:21},startBody:{col:48,line:21},endBody:{col:78,line:21}},"button-primary-ghost":{startLoc:{col:48,line:21},endLoc:{col:78,line:21},startBody:{col:48,line:21},endBody:{col:78,line:21}},"button-form":{startLoc:{col:48,line:21},endLoc:{col:78,line:21},startBody:{col:48,line:21},endBody:{col:78,line:21}}}},layout:"centered"}},t=o(n=>s(r,{...n}),"Template"),h=t.bind({}),m=t.bind({});m.args={variant:"primary",children:"J'y vais"};const c=t.bind({});c.args={variant:"primary-ghost",children:"Voir plus"};const l=t.bind({});l.args={variant:"form",children:"Je d\xE9couvre"};const b=["Overview","ButtonPrimary","ButtonPrimaryGhost","ButtonForm"];export{l as ButtonForm,m as ButtonPrimary,c as ButtonPrimaryGhost,h as Overview,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories.2c815f1d.js.map
