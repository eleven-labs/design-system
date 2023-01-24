import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NewsletterBlockStories from '@/components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import SearchNotFoundStories from '@/components/Molecules/SearchNotFound/SearchNotFound.stories';
import PostPreviewListStories, {
  PostPreviewListWithPagination,
} from '@/components/Organisms/PostPreviewList/PostPreviewList.stories';
import { LayoutTemplate, LayoutTemplateProps } from '@/templates';
import LayoutTemplateStories from '@/templates/LayoutTemplate/LayoutTemplate.stories';

import { SearchPage } from './SearchPage';

export default {
  title: 'Pages/Search',
  component: SearchPage,
  args: {
    backLinkLabel: 'Retour',
    backLinkProps: {},
    numberOfSearchLabel: '26 résultats',
    description: 'triés par pertinence',
    posts: PostPreviewListStories.args?.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed: PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel: PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    searchNotFoundProps: SearchNotFoundStories.args,
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
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = (args) => <SearchPage {...args} />;

export const Overview = Template.bind({});
