var i=Object.defineProperty;var n=(e,o)=>i(e,"name",{value:o,configurable:!0});import{F as r,b as l}from"./BackLink.92d5e765.js";import{b as p,d as a,e as t,g as c,i as m}from"./flexOrGridItemPropsControls.65b2d59f.js";import{j as s}from"./jsx-runtime.41925e4a.js";import"./iframe.3e7fe7b4.js";const F={title:"Components/Atoms/Layout/Flex",component:r,args:{bg:"ultra-light-grey",p:"xxs",gap:"m",justifyContent:"center",children:Array.from({length:3}).map((e,o)=>s(l,{p:"m",bg:"azure",color:"white",children:(o+1).toString().padStart(2,"0")},o))},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from '@/components/Atoms/Layout/Flex/Flex';
import { FlexItem } from '@/components/Atoms/Layout/Flex/FlexItem';
import { flexDirectionList, flexWrapList, systemPropsControls } from '@/constants';
import { flexOrGridPropsControls } from '@/constants/storybook/flexOrGridPropsControls';
import { createDescription } from '@/helpers/storybookHelper';

export default {
  title: 'Components/Atoms/Layout/Flex',
  component: Flex,
  args: {
    bg: 'ultra-light-grey',
    p: 'xxs',
    gap: 'm',
    justifyContent: 'center',
    children: Array.from({ length: 3 }).map((v, index) => (
      <FlexItem key={index} p="m" bg="azure" color="white">
        {(index + 1).toString().padStart(2, '0')}
      </FlexItem>
    )),
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
  argTypes: {
    ...systemPropsControls,
    ...flexOrGridPropsControls,
    inline: {
      type: 'boolean',
      description: createDescription({
        cssProperties: ['display'],
        cssValues: ['inline-flex', 'flex'],
      }),
    },
    direction: {
      options: flexDirectionList,
      description: createDescription({
        cssProperties: ['flex-direction'],
      }),
    },
    wrap: {
      options: flexWrapList,
      description: createDescription({
        cssProperties: ['flex-wrap'],
      }),
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:46,line:52},endLoc:{col:74,line:52},startBody:{col:46,line:52},endBody:{col:74,line:52}}}},controls:{exclude:["children"]}},argTypes:{...p,...a,inline:{type:"boolean",description:t({cssProperties:["display"],cssValues:["inline-flex","flex"]})},direction:{options:c,description:t({cssProperties:["flex-direction"]})},wrap:{options:m,description:t({cssProperties:["flex-wrap"]})}}},x=n(e=>s(r,{...e}),"Template"),C=x.bind({}),b=["Overview"];export{C as Overview,b as __namedExportsOrder,F as default};
//# sourceMappingURL=Flex.stories.d85e1151.js.map
