var i=Object.defineProperty;var r=(e,n)=>i(e,"name",{value:n,configurable:!0});import p from"./NewsletterBlock.stories.e92da3d2.js";import m from"./SearchNotFound.stories.5a6174e6.js";import l,{PostPreviewListWithPagination as t}from"./PostPreviewList.stories.4360048f.js";import{L as c,a as u}from"./LayoutTemplate.stories.cf9a09fa.js";import{S as s}from"./SearchPage.a47fb03c.js";import{j as o}from"./jsx-runtime.8d827842.js";import"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";import"./flexOrGridItemPropsControls.4879272c.js";import"./storybookHelper.b4ed8ce7.js";import"./index.353672de.js";import"./make-decorator.d8288801.js";import"./Autocomplete.stories.dc6747db.js";import"./Footer.stories.bfe77f59.js";import"./SocialIcons.stories.7df88038.js";import"./Header.stories.ff7bee56.js";var a;const W={title:"Pages/Search",component:s,args:{backLinkLabel:"Retour",backLinkProps:{},numberOfSearchLabel:"26 r\xE9sultats",description:"tri\xE9s par pertinence",posts:(a=l.args)==null?void 0:a.posts,textNumberOfItems:t.args.textNumberOfItems,percentageOfItemDisplayed:t.args.percentageOfItemDisplayed,loadMoreButtonLabel:t.args.loadMoreButtonLabel,searchNotFoundProps:m.args,newsletterBlockProps:p.args},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
//# sourceMappingURL=SearchPage.stories.9c80b734.js.map
