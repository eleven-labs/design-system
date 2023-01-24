import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NewsletterBlockStories from '@/components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import { PostPreviewListWithPagination } from '@/components/Organisms/PostPreviewList/PostPreviewList.stories';
import PostPreviewListStories from '@/components/Organisms/PostPreviewList/PostPreviewList.stories';
import { LayoutTemplate, LayoutTemplateProps } from '@/templates';
import LayoutTemplateStories from '@/templates/LayoutTemplate/LayoutTemplate.stories';

import { AuthorPage } from './AuthorPage';

export default {
  title: 'Pages/Author',
  component: AuthorPage,
  args: {
    author: {
      username: 'jdoe',
      name: 'John Doe',
      avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Felix',
      description: 'Astronaute John Doe @ ElevenLabs_\uD83D\uDE80',
    },
    backLinkLabel: 'Retour',
    backLinkProps: {},
    postPreviewListTitle: 'Articles de l’auteur',
    posts: PostPreviewListStories.args?.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed: PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel: PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    newsletterBlockProps: NewsletterBlockStories.args,
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
} as ComponentMeta<typeof AuthorPage>;

const Template: ComponentStory<typeof AuthorPage> = (args) => <AuthorPage {...args} />;

export const Overview = Template.bind({});
