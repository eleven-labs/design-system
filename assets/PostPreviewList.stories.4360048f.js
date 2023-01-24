var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{a}from"./index.353672de.js";import{o as i,B as l}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{j as o}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";import"./make-decorator.d8288801.js";import"./systemProps.7fe820c8.js";const g={title:"Components/Organisms/PostPreviewList",component:i,args:{posts:Array.from({length:7}).map((e,t)=>({slug:`titre-article-${t}`,title:`Titre de l'article ${t}`,date:"09 f\xE9v. 2021",readingTime:"24mn",authors:[{username:"jdoe",nameWithInitial:"J. Doe"}],excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.",postLinkProps:{}})),onLoadMore:a("onLoadMore")},parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box, PostPreviewList } from '@/components';

export default {
  title: 'Components/Organisms/PostPreviewList',
  component: PostPreviewList,
  args: {
    posts: Array.from({ length: 7 }).map((_, index) => ({
      slug: \`titre-article-\${index}\`,
      title: \`Titre de l'article \${index}\`,
      date: '09 f\xE9v. 2021',
      readingTime: '24mn',
      authors: [
        {
          username: 'jdoe',
          nameWithInitial: 'J. Doe',
        },
      ],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
      postLinkProps: {},
    })),
    onLoadMore: action('onLoadMore'),
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <Box px="m" py="xl">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof PostPreviewList>;

const Template: ComponentStory<typeof PostPreviewList> = (args) => <PostPreviewList {...args} />;

export const Overview = Template.bind({});

export const PostPreviewListWithPagination = Template.bind({});
PostPreviewListWithPagination.args = {
  textNumberOfItems: '6/156 affich\xE9s',
  percentageOfItemDisplayed: 26,
  loadMoreButtonLabel: 'Afficher plus',
};
`,locationsMap:{overview:{startLoc:{col:57,line:43},endLoc:{col:96,line:43},startBody:{col:57,line:43},endBody:{col:96,line:43}},"post-preview-list-with-pagination":{startLoc:{col:57,line:43},endLoc:{col:96,line:43},startBody:{col:57,line:43},endBody:{col:96,line:43}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}},decorators:[e=>o(l,{px:"m",py:"xl",children:o(e,{})})]},r=n(e=>o(i,{...e}),"Template"),x=r.bind({}),m=r.bind({});m.args={textNumberOfItems:"6/156 affich\xE9s",percentageOfItemDisplayed:26,loadMoreButtonLabel:"Afficher plus"};const w=["Overview","PostPreviewListWithPagination"];export{x as Overview,m as PostPreviewListWithPagination,w as __namedExportsOrder,g as default};
//# sourceMappingURL=PostPreviewList.stories.4360048f.js.map
