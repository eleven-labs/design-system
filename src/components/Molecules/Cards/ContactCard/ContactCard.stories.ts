import type { Meta, StoryObj } from '@storybook/react';

import { ContactCard } from './ContactCard';

const meta: Meta<typeof ContactCard> = {
  component: ContactCard,
  args: {
    title: 'Vous avez un projet ?',
    subtitle: 'Contactez nous !',
    description: `Vous souhaitez en savoir plus sur le sujet ? Organisons un échange !<br />Notre équipe d'experts répond à toutes vos questions.`,
    link: {
      label: 'Nous contacter',
      href: '#',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactCard>;

export const Overview: Story = {};
