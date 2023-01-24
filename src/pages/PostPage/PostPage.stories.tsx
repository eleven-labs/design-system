import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RichTextStories from '@/components/Atoms/RichText/RichText.stories';
import NewsletterBlockStories from '@/components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import RelatedPostListStories from '@/components/Molecules/Post/RelatedPostList/RelatedPostList.stories';
import { LayoutTemplate, LayoutTemplateProps } from '@/templates';
import LayoutTemplateStories from '@/templates/LayoutTemplate/LayoutTemplate.stories';

import { PostPage } from './PostPage';

export default {
  title: 'Pages/Post',
  component: PostPage,
  args: {
    slug: 'les-femmes-dans-l-informatique',
    title: 'Les femmes dans l’informatique',
    date: '08 fév. 2021',
    readingTime: '24mn',
    authors: [
      {
        username: 'jdoe',
        name: 'John Doe',
        nameWithInitial: 'J. Doe',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Felix',
        description: 'Astronaute John Doe @ ElevenLabs_\uD83D\uDE80',
      },
      {
        username: 'jdupont',
        name: 'Jeane Dupont',
        nameWithInitial: 'J. Dupont',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Lola',
        description: 'Astronaute Jeane Dupont @ ElevenLabs_\uD83D\uDE80',
      },
    ],
    coverImage:
      'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    content: RichTextStories.args!.content,
    postFooterTitle: 'écrit par',
    newsletterBlockProps: NewsletterBlockStories.args,
    relatedPostListTitle: RelatedPostListStories.args!.relatedPostListTitle,
    relatedPosts: RelatedPostListStories.args!.posts,
    authorLinkProps: () => ({}),
    backLinkLabel: 'Retour',
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <LayoutTemplate {...(LayoutTemplateStories.args as LayoutTemplateProps)}>
        <Story />
      </LayoutTemplate>
    ),
  ],
} as ComponentMeta<typeof PostPage>;

const Template: ComponentStory<typeof PostPage> = (args) => <PostPage {...args} />;

export const Overview = Template.bind({});
