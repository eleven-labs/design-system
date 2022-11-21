var r=Object.defineProperty;var e=(o,t)=>r(o,"name",{value:t,configurable:!0});import{b as a,h as s}from"./flexOrGridItemPropsControls.65b2d59f.js";import{t as p}from"./typographyPropsControls.0c189de7.js";import{H as n}from"./BackLink.92d5e765.js";import{j as i}from"./jsx-runtime.41925e4a.js";import"./iframe.3e7fe7b4.js";const f={title:"Components/Atoms/Typography/Heading",component:n,argTypes:{...a,...p(s)},args:{children:"Example Heading"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { headingSizeTokenNameList, systemPropsControls, typographyPropsControls } from '@/constants';

import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls(headingSizeTokenNameList),
  },
  args: {
    children: 'Example Heading',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}}}},layout:"centered"}},m=e(o=>i(n,{...o}),"Template"),C=m.bind({}),h=["Overview"];export{C as Overview,h as __namedExportsOrder,f as default};
//# sourceMappingURL=Heading.stories.31ff7404.js.map
