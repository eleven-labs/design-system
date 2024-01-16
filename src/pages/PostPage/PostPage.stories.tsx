import type { Meta, StoryObj } from '@storybook/react';

import BreadcrumbStories from '@/components/Atoms/Breadcrumb/Breadcrumb.stories';
import ContactCardStories from '@/components/Molecules/Cards/ContactCard/ContactCard.stories';
import * as SummaryCardStories from '@/components/Molecules/Cards/SummaryCard/SummaryCard.stories';
import PostFooterStories from '@/pages/PostPage/PostFooter/PostFooter.stories';
import PostHeaderStories from '@/pages/PostPage/PostHeader/PostHeader.stories';
import RelatedPostListStories from '@/pages/PostPage/RelatedPostList/RelatedPostList.stories';
import { LayoutTemplateDecorator } from '@/storybook/decorators';

import { PostPage } from './PostPage';

import type { PostPageProps } from './PostPage';

const meta: Meta<typeof PostPage> = {
  component: PostPage,
  args: {
    variant: 'article',
    breadcrumb: BreadcrumbStories.args as PostPageProps['breadcrumb'],
    header: PostHeaderStories.args as PostPageProps['header'],
    children: 'content',
    footer: PostFooterStories.args as PostPageProps['footer'],
    contactCard: ContactCardStories.args as PostPageProps['contactCard'],
    relatedPostList: RelatedPostListStories.args as PostPageProps['relatedPostList'],
    summary: {
      title: SummaryCardStories.default.args?.title,
      sections: SummaryCardStories.default.args?.sections,
    } as PostPageProps['summary'],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [LayoutTemplateDecorator],
};

export default meta;
type Story = StoryObj<typeof PostPage>;

export const Overview: Story = {};

export const WithVariantTutorial: Story = {};
WithVariantTutorial.args = {
  variant: 'tutorial',
  summary: {
    title: SummaryCardStories.WithVariantSecondary.args?.title,
    sections: SummaryCardStories.WithVariantSecondary.args?.sections,
    sectionActive: SummaryCardStories.WithVariantSecondary.args?.sectionActive,
  } as PostPageProps['summary'],
  previousLink: {
    label: 'Précédent',
  },
  nextLink: {
    label: 'Suivant',
  },
};
