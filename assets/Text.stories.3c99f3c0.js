var n=Object.defineProperty;var t=(o,r)=>n(o,"name",{value:r,configurable:!0});import{s}from"./flexOrGridItemPropsControls.064eab83.js";import{t as p}from"./typographyPropsControls.edf9394e.js";import{T as e}from"./SubHeader.1779d5f5.js";import{j as m}from"./jsx-runtime.65a9abf3.js";import"./systemProps.7fe820c8.js";import"./storybookHelper.e1a85a09.js";import"./Link.55ad4bc3.js";import"./iframe.6079259d.js";const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls, typographyPropsControls } from '@/constants/storybook';

import { Text } from './Text';

export default {
  title: 'Components/Atoms/Typography/Text',
  component: Text,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls,
  },
  args: {
    size: 'm',
    children: 'Example Text',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:46,line:21},endLoc:{col:74,line:21},startBody:{col:46,line:21},endBody:{col:74,line:21}}}}},title:"Components/Atoms/Typography/Text",component:e,argTypes:{...s,...p},args:{size:"m",children:"Example Text"}},a=t(o=>m(e,{...o}),"Template"),v=a.bind({}),h=["Overview"];export{v as Overview,h as __namedExportsOrder,g as default};
//# sourceMappingURL=Text.stories.3c99f3c0.js.map
