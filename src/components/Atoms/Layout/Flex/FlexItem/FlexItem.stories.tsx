import { ComponentMeta, ComponentStory } from '@storybook/react';
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
