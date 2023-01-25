var i=Object.defineProperty;var r=(e,n)=>i(e,"name",{value:n,configurable:!0});import m from"./NewsletterBlock.stories.c37475d7.js";import p,{PostPreviewListWithPagination as t}from"./PostPreviewList.stories.f50ec160.js";import{L as l,a as u}from"./LayoutTemplate.stories.c2d6ed60.js";import{A as s}from"./AuthorPage.0266b372.js";import{j as o}from"./jsx-runtime.65a9abf3.js";import"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import"./systemProps.7fe820c8.js";import"./iframe.6079259d.js";import"./index.0e6e90a6.js";import"./make-decorator.6a2e537e.js";import"./Autocomplete.stories.4e08e21b.js";import"./flexOrGridItemPropsControls.064eab83.js";import"./storybookHelper.e1a85a09.js";import"./Footer.stories.c99f98b7.js";import"./SocialIcons.stories.ffe3eccd.js";import"./Header.stories.84a22766.js";var a;const I={title:"Pages/Author",component:s,args:{author:{username:"jdoe",name:"John Doe",avatarImageUrl:"https://api.dicebear.com/5.x/avataaars/svg?seed=Felix",description:"Astronaute John Doe @ ElevenLabs_\u{1F680}"},backLinkLabel:"Retour",backLinkProps:{},postPreviewListTitle:"Articles de l\u2019auteur",posts:(a=p.args)==null?void 0:a.posts,textNumberOfItems:t.args.textNumberOfItems,percentageOfItemDisplayed:t.args.percentageOfItemDisplayed,loadMoreButtonLabel:t.args.loadMoreButtonLabel,newsletterBlockProps:m.args},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
      description: 'Astronaute John Doe @ ElevenLabs_\\uD83D\\uDE80',
    },
    backLinkLabel: 'Retour',
    backLinkProps: {},
    postPreviewListTitle: 'Articles de l\u2019auteur',
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
`,locationsMap:{overview:{startLoc:{col:52,line:46},endLoc:{col:86,line:46},startBody:{col:52,line:46},endBody:{col:86,line:46}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[e=>o(l,{...u.args,children:o(e,{})})]},c=r(e=>o(s,{...e}),"Template"),N=c.bind({}),M=["Overview"];export{N as Overview,M as __namedExportsOrder,I as default};
//# sourceMappingURL=AuthorPage.stories.bc37ef98.js.map
