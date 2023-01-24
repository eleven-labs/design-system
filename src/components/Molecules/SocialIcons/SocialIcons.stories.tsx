import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants/storybook';

import { SocialIcons, SocialNameType } from './SocialIcons';

export default {
  title: 'Components/Molecules/SocialIcons',
  component: SocialIcons,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    links: [
      {
        socialName: SocialNameType.RSS,
      },
      {
        socialName: SocialNameType.FACEBOOK,
      },
      {
        socialName: SocialNameType.TWITTER,
      },
      {
        socialName: SocialNameType.LINKEDIN,
      },
      {
        socialName: SocialNameType.WELCOME_TO_JUNGLE,
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    layout: 'centered',
    backgrounds: {
      default: 'primary-dark',
    },
  },
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = (args) => <SocialIcons {...args} />;

export const Overview = Template.bind({});
