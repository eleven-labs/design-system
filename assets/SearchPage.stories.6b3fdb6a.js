var i=Object.defineProperty;var r=(e,n)=>i(e,"name",{value:n,configurable:!0});import p from"./NewsletterBlock.stories.c37475d7.js";import m from"./SearchNotFound.stories.0af83e89.js";import l,{PostPreviewListWithPagination as t}from"./PostPreviewList.stories.f50ec160.js";import{L as c,a as u}from"./LayoutTemplate.stories.c2d6ed60.js";import{S as s}from"./SearchPage.ab681d5e.js";import{j as o}from"./jsx-runtime.65a9abf3.js";import"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import"./systemProps.7fe820c8.js";import"./iframe.6079259d.js";import"./flexOrGridItemPropsControls.064eab83.js";import"./storybookHelper.e1a85a09.js";import"./index.0e6e90a6.js";import"./make-decorator.6a2e537e.js";import"./Autocomplete.stories.4e08e21b.js";import"./Footer.stories.c99f98b7.js";import"./SocialIcons.stories.ffe3eccd.js";import"./Header.stories.84a22766.js";var a;const W={title:"Pages/Search",component:s,args:{backLinkLabel:"Retour",backLinkProps:{},numberOfSearchLabel:"26 r\xE9sultats",description:"tri\xE9s par pertinence",posts:(a=l.args)==null?void 0:a.posts,textNumberOfItems:t.args.textNumberOfItems,percentageOfItemDisplayed:t.args.percentageOfItemDisplayed,loadMoreButtonLabel:t.args.loadMoreButtonLabel,searchNotFoundProps:m.args,newsletterBlockProps:p.args},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    numberOfSearchLabel: '26 r\xE9sultats',
    description: 'tri\xE9s par pertinence',
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
`,locationsMap:{overview:{startLoc:{col:52,line:44},endLoc:{col:86,line:44},startBody:{col:52,line:44},endBody:{col:86,line:44}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[e=>o(c,{...u.args,children:o(e,{})})]},P=r(e=>o(s,{...e}),"Template"),C=P.bind({}),D=["Overview"];export{C as Overview,D as __namedExportsOrder,W as default};
//# sourceMappingURL=SearchPage.stories.6b3fdb6a.js.map
