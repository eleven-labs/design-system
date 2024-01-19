import type { Meta, StoryObj } from '@storybook/react';

import { LastTutorialsBlock } from './LastTutorialsBlock';

const meta: Meta<typeof LastTutorialsBlock> = {
  component: LastTutorialsBlock,
  args: {
    title: 'Les tutoriels tech’ de nos astronautes !',
    description:
      'Avec nos tutoriels, apprenez pas à pas à créer de nouvelles features : créer un chat avec Mercure et Symfony, mettre en place un CI/CD avec GitLab-CI pour une application Javascript et bien plus encore. Suivez le guide !',
    tutorialLabel: 'Tutoriel',
    posts: Array.from({ length: 2 }).map((_, index) => ({
      contentType: 'tutorial',
      slug: `slug-${index}`,
      title: `Titre du tutoriel ${index + 1}`,
      date: '09 fév. 2021',
      readingTime: 24,
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
      link: {
        href: '#',
      },
    })),
    linkSeeMore: { label: 'Découvrir tous nos tutoriels', href: '#' },
  },
};

export default meta;
type Story = StoryObj<typeof LastTutorialsBlock>;

export const Overview: Story = {};
