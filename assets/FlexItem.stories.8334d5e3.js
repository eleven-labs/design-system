var r=Object.defineProperty;var n=(e,s)=>r(e,"name",{value:s,configurable:!0});import{b as t,F as l}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import{s as m,c as i,d as x}from"./flexOrGridItemPropsControls.4879272c.js";import{a}from"./storybookHelper.b4ed8ce7.js";import{b as p,j as o}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";const u={title:"Components/Atoms/Layout/Flex/FlexItem",component:t,args:{p:"xxs",bg:"navy",color:"white",align:"center",children:"Flex Item"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex, FlexItem } from '@/components';
import { flexBasisList } from '@/constants';
import { flexOrGridItemPropsControls, systemPropsControls } from '@/constants/storybook';
import { createDescription } from '@/helpers/storybookHelper';

export default {
  title: 'Components/Atoms/Layout/Flex/FlexItem',
  component: FlexItem,
  args: {
    p: 'xxs',
    bg: 'navy',
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
`,locationsMap:{overview:{startLoc:{col:50,line:50},endLoc:{col:82,line:50},startBody:{col:50,line:50},endBody:{col:82,line:50}}}},controls:{exclude:["children"]}},argTypes:{...m,...i,basis:{options:x,description:a({cssProperties:["flex-basis"]})}},decorators:[e=>p(l,{gap:{xs:"xxs",sm:"s"},bg:"ultra-light-grey",justifyContent:"center",alignContent:"center",p:"xxs",children:[o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 1"}),o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 2"}),o(e,{}),o(t,{bg:"azure",color:"white",p:{xs:"xxs",sm:"m"},children:"Flex Item 4"})]})]},c=n(e=>o(t,{...e}),"Template"),C=c.bind({}),w=["Overview"];export{C as Overview,w as __namedExportsOrder,u as default};
//# sourceMappingURL=FlexItem.stories.8334d5e3.js.map
