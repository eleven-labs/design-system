var i=Object.defineProperty;var n=(e,o)=>i(e,"name",{value:o,configurable:!0});import{F as r,b as p}from"./SubHeader.0b0fa522.js";import"./systemProps.7fe820c8.js";import{s as l,f as a,a as c,b as m}from"./flexOrGridItemPropsControls.4879272c.js";import{a as t}from"./storybookHelper.b4ed8ce7.js";import{j as s}from"./jsx-runtime.8d827842.js";import"./Link.a50d5e23.js";import"./iframe.90672fd8.js";const P={title:"Components/Atoms/Layout/Flex",component:r,args:{bg:"ultra-light-grey",p:"xxs",gap:"m",justifyContent:"center",children:Array.from({length:3}).map((e,o)=>s(p,{p:"m",bg:"azure",color:"white",children:(o+1).toString().padStart(2,"0")},o))},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from '@/components/Atoms/Layout/Flex/Flex';
import { FlexItem } from '@/components/Atoms/Layout/Flex/FlexItem';
import { flexDirectionList, flexWrapList } from '@/constants';
import { systemPropsControls } from '@/constants/storybook';
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
`,locationsMap:{overview:{startLoc:{col:46,line:53},endLoc:{col:74,line:53},startBody:{col:46,line:53},endBody:{col:74,line:53}}}},controls:{exclude:["children"]}},argTypes:{...l,...a,inline:{type:"boolean",description:t({cssProperties:["display"],cssValues:["inline-flex","flex"]})},direction:{options:c,description:t({cssProperties:["flex-direction"]})},wrap:{options:m,description:t({cssProperties:["flex-wrap"]})}}},x=n(e=>s(r,{...e}),"Template"),h=x.bind({}),L=["Overview"];export{h as Overview,L as __namedExportsOrder,P as default};
//# sourceMappingURL=Flex.stories.b0728cd0.js.map
