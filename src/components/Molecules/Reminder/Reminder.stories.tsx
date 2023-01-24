import { ComponentMeta, ComponentStory } from '@storybook/react';
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
