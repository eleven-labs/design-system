var r=Object.defineProperty;var n=(e,s)=>r(e,"name",{value:s,configurable:!0});import{b as t,F as l}from"./BackLink.92d5e765.js";import{b as m,j as x,l as i,e as a}from"./flexOrGridItemPropsControls.65b2d59f.js";import{b as p,j as o}from"./jsx-runtime.41925e4a.js";import"./iframe.3e7fe7b4.js";const b={title:"Components/Atoms/Layout/Flex/FlexItem",component:t,args:{p:"xxs",bg:"blue-navy",color:"white",align:"center",children:"Flex Item"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex, FlexItem } from '@/components';
import { flexBasisList, flexOrGridItemPropsControls, systemPropsControls } from '@/constants';
import { createDescription } from '@/helpers/storybookHelper';

export default {
  title: 'Components/Atoms/Layout/Flex/FlexItem',
  component: FlexItem,
  args: {
    p: 'xxs',
    bg: 'blue-navy',
    color: 'white',
    align: 'center',
    children: 'Flex Item',
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
  argTypes: {
    ...systemPropsControls,
    ...flexOrGridItemPropsControls,
    basis: {
      options: flexBasisList,
      description: createDescription({
        cssProperties: ['flex-basis'],
      }),
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <Flex gap={{ xs: 'xxs', sm: 's' }} bg="ultra-light-grey" justifyContent="center" alignContent="center" p="xxs">
        <FlexItem bg="azure" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 1
        </FlexItem>
        <FlexItem bg="azure" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 2
        </FlexItem>
        <Story />
        <FlexItem bg="azure" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 4
        </FlexItem>
      </Flex>
    ),
  ],
} as ComponentMeta<typeof FlexItem>;

const Template: ComponentStory<typeof FlexItem> = (args) => <FlexItem {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:50,line:49},endLoc:{col:82,line:49},startBody:{col:50,line:49},endBody:{col:82,line:49}}}},controls:{exclude:["children"]}},argTypes:{...m,...x,basis:{options:i,description:a({cssProperties:["flex-basis"]})}},decorators:[e=>p(l,{gap:{xs:"xxs",sm:"s"},bg:"ultra-light-grey",justifyContent:"center",alignContent:"center",p:"xxs",children:[o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 1"}),o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 2"}),o(e,{}),o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 4"})]})]},c=n(e=>o(t,{...e}),"Template"),f=c.bind({}),u=["Overview"];export{f as Overview,u as __namedExportsOrder,b as default};
//# sourceMappingURL=FlexItem.stories.6a0fc7e2.js.map
