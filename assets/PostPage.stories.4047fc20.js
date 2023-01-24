var n=Object.defineProperty;var o=(e,s)=>n(e,"name",{value:s,configurable:!0});import i from"./RichText.stories.b370fefa.js";import m from"./NewsletterBlock.stories.e92da3d2.js";import a from"./RelatedPostList.stories.5e2086f1.js";import{L as l,a as p}from"./LayoutTemplate.stories.cf9a09fa.js";import{P as r}from"./PostPage.6fdff264.js";import{j as t}from"./jsx-runtime.8d827842.js";import"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";import"./Autocomplete.stories.dc6747db.js";import"./index.353672de.js";import"./make-decorator.d8288801.js";import"./flexOrGridItemPropsControls.4879272c.js";import"./storybookHelper.b4ed8ce7.js";import"./Footer.stories.bfe77f59.js";import"./SocialIcons.stories.7df88038.js";import"./Header.stories.ff7bee56.js";const M={title:"Pages/Post",component:r,args:{slug:"les-femmes-dans-l-informatique",title:"Les femmes dans l\u2019informatique",date:"08 f\xE9v. 2021",readingTime:"24mn",authors:[{username:"jdoe",name:"John Doe",nameWithInitial:"J. Doe",avatarImageUrl:"https://api.dicebear.com/5.x/avataaars/svg?seed=Felix",description:"Astronaute John Doe @ ElevenLabs_\u{1F680}"},{username:"jdupont",name:"Jeane Dupont",nameWithInitial:"J. Dupont",avatarImageUrl:"https://api.dicebear.com/5.x/avataaars/svg?seed=Lola",description:"Astronaute Jeane Dupont @ ElevenLabs_\u{1F680}"}],coverImage:"https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",content:i.args.content,postFooterTitle:"\xE9crit par",newsletterBlockProps:m.args,relatedPostListTitle:a.args.relatedPostListTitle,relatedPosts:a.args.posts,authorLinkProps:()=>({}),backLinkLabel:"Retour"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    title: 'Les femmes dans l\u2019informatique',
    date: '08 f\xE9v. 2021',
    readingTime: '24mn',
    authors: [
      {
        username: 'jdoe',
        name: 'John Doe',
        nameWithInitial: 'J. Doe',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Felix',
        description: 'Astronaute John Doe @ ElevenLabs_\\uD83D\\uDE80',
      },
      {
        username: 'jdupont',
        name: 'Jeane Dupont',
        nameWithInitial: 'J. Dupont',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Lola',
        description: 'Astronaute Jeane Dupont @ ElevenLabs_\\uD83D\\uDE80',
      },
    ],
    coverImage:
      'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    content: RichTextStories.args!.content,
    postFooterTitle: '\xE9crit par',
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
`,locationsMap:{overview:{startLoc:{col:50,line:61},endLoc:{col:82,line:61},startBody:{col:50,line:61},endBody:{col:82,line:61}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[e=>t(l,{...p.args,children:t(e,{})})]},c=o(e=>t(r,{...e}),"Template"),E=c.bind({}),I=["Overview"];export{E as Overview,I as __namedExportsOrder,M as default};
//# sourceMappingURL=PostPage.stories.4047fc20.js.map
