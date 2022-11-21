var s=Object.defineProperty;var n=(o,r)=>s(o,"name",{value:r,configurable:!0});import{B as e,H as a}from"./BackLink.92d5e765.js";import{b as m}from"./flexOrGridItemPropsControls.65b2d59f.js";import{j as t}from"./jsx-runtime.41925e4a.js";import"./iframe.3e7fe7b4.js";const y={title:"Components/Atoms/Layout/Box",component:e,args:{p:"m",bg:"azure",color:"white",children:t(a,{textAlign:"center",children:"I'm a div Box ;"})},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Heading } from '@/components';
import { systemPropsControls } from '@/constants';

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
`,locationsMap:{overview:{startLoc:{col:45,line:26},endLoc:{col:72,line:26},startBody:{col:45,line:26},endBody:{col:72,line:26}}}},controls:{exclude:["children"]}},argTypes:{...m}},i=n(o=>t(e,{...o}),"Template"),B=i.bind({}),g=["Overview"];export{B as Overview,g as __namedExportsOrder,y as default};
//# sourceMappingURL=Box.stories.067223ba.js.map
