var f=Object.defineProperty;var s=(e,r)=>f(e,"name",{value:r,configurable:!0});import{L as y,a as w}from"./LayoutTemplate.stories.c2d6ed60.js";import"./PostPage.a18a04a2.js";import"./AuthorPage.0266b372.js";import{D as S,p as v,B as b,H as B,o as O,N as T}from"./SubHeader.1779d5f5.js";import"./Link.55ad4bc3.js";import{b as i,F as h,j as t}from"./jsx-runtime.65a9abf3.js";import"./SearchPage.ab681d5e.js";import x from"./NewsletterBlock.stories.c37475d7.js";import C,{PostPreviewListWithPagination as a}from"./PostPreviewList.stories.f50ec160.js";import N from"./SubHeader.stories.fe4be3e4.js";import"./Autocomplete.stories.4e08e21b.js";import"./index.0e6e90a6.js";import"./iframe.6079259d.js";import"./make-decorator.6a2e537e.js";import"./flexOrGridItemPropsControls.064eab83.js";import"./systemProps.7fe820c8.js";import"./storybookHelper.e1a85a09.js";import"./Footer.stories.c99f98b7.js";import"./SocialIcons.stories.ffe3eccd.js";import"./Header.stories.84a22766.js";const o=s(({introBlock:e,choiceCategoryLabel:r,choiceCategories:n,choiceCategoryActive:l,postPreviewListContainerProps:p,postPreviewListTitle:m,posts:u,textNumberOfItems:c,percentageOfItemDisplayed:d,loadMoreButtonLabel:P,onLoadMore:g,newsletterBlockProps:L})=>i(h,{children:[t(S,{m:"0",bg:"white"}),t(v,{introBlock:e,choiceCategories:n,choiceCategoryLabel:r,choiceCategoryActive:l}),i(b,{as:"main",className:"container-content",children:[t(B,{mb:"l",size:"m",weight:"medium",children:m}),t(O,{postPreviewListContainerProps:p,posts:u,textNumberOfItems:c,percentageOfItemDisplayed:d,loadMoreButtonLabel:P,onLoadMore:g}),t(T,{my:{xs:"xl",md:"xxl"},...L})]})]}),"PostListPage");try{o.displayName="PostListPage",o.__docgenInfo={description:"",displayName:"PostListPage",props:{postPreviewListTitle:{defaultValue:null,description:"",name:"postPreviewListTitle",required:!0,type:{name:"string"}},newsletterBlockProps:{defaultValue:null,description:"",name:"newsletterBlockProps",required:!0,type:{name:"NewsletterBlockProps"}},posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:"({ slug: string; } & PostPreviewProps)[]"}},textNumberOfItems:{defaultValue:null,description:"",name:"textNumberOfItems",required:!1,type:{name:"string"}},percentageOfItemDisplayed:{defaultValue:null,description:"",name:"percentageOfItemDisplayed",required:!1,type:{name:"number"}},loadMoreButtonLabel:{defaultValue:null,description:"",name:"loadMoreButtonLabel",required:!1,type:{name:"string"}},onLoadMore:{defaultValue:null,description:"",name:"onLoadMore",required:!1,type:{name:"(() => void)"}},postPreviewListContainerProps:{defaultValue:null,description:"",name:"postPreviewListContainerProps",required:!1,type:{name:'BoxProps<"div">'}},introBlock:{defaultValue:null,description:"",name:"introBlock",required:!0,type:{name:"{ title: string; description: string; }"}},choiceCategoryLabel:{defaultValue:null,description:"",name:"choiceCategoryLabel",required:!0,type:{name:"string"}},choiceCategoryActive:{defaultValue:null,description:"",name:"choiceCategoryActive",required:!1,type:{name:"string"}},choiceCategories:{defaultValue:null,description:"",name:"choiceCategories",required:!0,type:{name:'({ name: string; label: string; } & Omit<ChoiceChipProps<"button">, "isActive" | "children">)[]'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/pages/PostListPage/PostListPage.tsx#PostListPage"]={docgenInfo:o.__docgenInfo,name:"PostListPage",path:"src/pages/PostListPage/PostListPage.tsx#PostListPage"})}catch{}const Z={title:"Pages/PostList",component:o,args:{postPreviewListTitle:"Tous nos articles",posts:C.args.posts,textNumberOfItems:a.args.textNumberOfItems,percentageOfItemDisplayed:a.args.percentageOfItemDisplayed,loadMoreButtonLabel:a.args.loadMoreButtonLabel,...N.args,newsletterBlockProps:x.args},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LayoutTemplate, LayoutTemplateProps } from '@/templates';
import { PostListPage } from '@/pages';
import NewsletterBlockStories from '@/components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import PreviewPostsStories, {
  PostPreviewListWithPagination,
} from '@/components/Organisms/PostPreviewList/PostPreviewList.stories';
import LayoutTemplateStories from '@/templates/LayoutTemplate/LayoutTemplate.stories';
import SubHeaderStories from '@/components/Organisms/SubHeader/SubHeader.stories';


export default {
  title: 'Pages/PostList',
  component: PostListPage,
  args: {
    postPreviewListTitle: 'Tous nos articles',
    posts: PreviewPostsStories!.args!.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed: PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel: PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    ...SubHeaderStories.args,
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
} as ComponentMeta<typeof PostListPage>;

const Template: ComponentStory<typeof PostListPage> = (args) => <PostListPage {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:54,line:41},endLoc:{col:90,line:41},startBody:{col:54,line:41},endBody:{col:90,line:41}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[e=>t(y,{...w.args,children:t(e,{})})]},_=s(e=>t(o,{...e}),"Template"),$=_.bind({}),ee=["Overview"];export{$ as Overview,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=PostListPage.stories.2f1d9c90.js.map
