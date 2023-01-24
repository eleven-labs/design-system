import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text } from '@/components';
import SocialIconsStories from '@/components/Molecules/SocialIcons/SocialIcons.stories';

import { Footer } from './Footer';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
  args: {
    introBlock: {
      title: 'Découvrez Eleven Labs',
      description: 'Notre site pour mieux nous connaître',
    },
    elevenLabsSiteLink: {
      // eslint-disable-next-line prettier/prettier
      label: `J'y vais`
    },
    contactTitle: 'Contact',
    contactList: [
      {
        title: 'Eleven Labs - Paris',
        description: (
          <>
            15 avenue de la grande armée
            <br />
            75116 <Text textTransform="uppercase">Paris</Text>
          </>
        ),
      },
      {
        title: 'Eleven Labs - Nantes',
        description: (
          <>
            24 mail des chantiers
            <br />
            844200 <Text textTransform="uppercase">Nantes</Text>
          </>
        ),
      },
      {
        title: 'business@eleven-labs.com',
        description: '0182831175',
      },
    ],
    socialLinks: SocialIconsStories.args!.links,
    languageLinks: [
      {
        active: true,
        name: 'fr',
        label: 'Français',
      },
      {
        name: 'en',
        label: 'English',
      },
    ],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Overview = Template.bind({});
