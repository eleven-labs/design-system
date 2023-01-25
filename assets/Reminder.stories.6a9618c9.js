var i=Object.defineProperty;var n=(e,r)=>i(e,"name",{value:r,configurable:!0});import{e as m}from"./flexOrGridItemPropsControls.064eab83.js";import"./systemProps.7fe820c8.js";import{i as t,v as s}from"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import{j as o,F as a}from"./jsx-runtime.65a9abf3.js";import"./storybookHelper.e1a85a09.js";import"./iframe.6079259d.js";const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { spacingSystemPropsControls } from '@/constants/storybook';
import { Text, Reminder, variantReminderList } from '@/components';

export default {
  title: 'Components/Molecules/Reminder',
  component: Reminder,
  argTypes: {
    ...spacingSystemPropsControls,
  },
  args: {
    variant: 'note',
    title: 'Title',
    children: 'Lorem ipsum',
  },
} as ComponentMeta<typeof Reminder>;

const Template: ComponentStory<typeof Reminder> = (args) => <Reminder {...args} />;

export const Overview = Template.bind({});

export const All: ComponentStory<typeof Text> = () => (
  <>
    {variantReminderList.map((variant) => (
      <Reminder key={variant} variant={variant} title={variant} mb={{ xs: 'm' }}>
        Lorem ipsum
      </Reminder>
    ))}
  </>
);
`,locationsMap:{overview:{startLoc:{col:50,line:20},endLoc:{col:82,line:20},startBody:{col:50,line:20},endBody:{col:82,line:20}},all:{startLoc:{col:48,line:24},endLoc:{col:1,line:32},startBody:{col:48,line:24},endBody:{col:1,line:32}}}}},title:"Components/Molecules/Reminder",component:t,argTypes:{...m},args:{variant:"note",title:"Title",children:"Lorem ipsum"}},l=n(e=>o(t,{...e}),"Template"),u=l.bind({}),x=n(()=>o(a,{children:s.map(e=>o(t,{variant:e,title:e,mb:{xs:"m"},children:"Lorem ipsum"},e))}),"All"),C=["Overview","All"];export{x as All,u as Overview,C as __namedExportsOrder,g as default};
//# sourceMappingURL=Reminder.stories.6a9618c9.js.map
