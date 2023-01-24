import { ComponentMeta, ComponentStory } from '@storybook/react';
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
