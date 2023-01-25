var s=Object.defineProperty;var n=(o,r)=>s(o,"name",{value:r,configurable:!0});import{B as t,H as m}from"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import{s as a}from"./flexOrGridItemPropsControls.064eab83.js";import"./systemProps.7fe820c8.js";import{j as e}from"./jsx-runtime.65a9abf3.js";import"./iframe.6079259d.js";import"./storybookHelper.e1a85a09.js";const f={title:"Components/Atoms/Layout/Box",component:t,args:{p:"m",bg:"azure",color:"white",children:e(m,{textAlign:"center",children:"I'm a div Box ;"})},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Heading } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

import { Box } from './Box';

export default {
  title: 'Components/Atoms/Layout/Box',
  component: Box,
  args: {
    p: 'm',
    bg: 'azure',
    color: 'white',
    children: <Heading textAlign="center">I'm a div Box ;</Heading>,
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
  argTypes: {
    ...systemPropsControls,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:45,line:26},endLoc:{col:72,line:26},startBody:{col:45,line:26},endBody:{col:72,line:26}}}},controls:{exclude:["children"]}},argTypes:{...a}},i=n(o=>e(t,{...o}),"Template"),u=i.bind({}),v=["Overview"];export{u as Overview,v as __namedExportsOrder,f as default};
//# sourceMappingURL=Box.stories.5e6db915.js.map
