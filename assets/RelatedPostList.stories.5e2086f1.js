var i=Object.defineProperty;var o=(e,t)=>i(e,"name",{value:t,configurable:!0});import{g as s}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{j as n}from"./jsx-runtime.8d827842.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";const p={title:"Components/Molecules/Post/RelatedPostList",component:s,args:{relatedPostListTitle:"Articles sur le m\xEAme th\xE8me",posts:Array.from({length:3}).map((e,t)=>({slug:`titre-article-${t}`,title:`Titre de l'article ${t}`,date:"09 f\xE9v. 2021",readingTime:"24mn",authors:[{username:"jdoe",nameWithInitial:"J. Doe"}],excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.",postLinkProps:{}}))},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RelatedPostList } from '@/components';

export default {
  title: 'Components/Molecules/Post/RelatedPostList',
  component: RelatedPostList,
  args: {
    relatedPostListTitle: 'Articles sur le m\xEAme th\xE8me',
    posts: Array.from({ length: 3 }).map((_, index) => ({
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
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof RelatedPostList>;

const Template: ComponentStory<typeof RelatedPostList> = (args) => <RelatedPostList {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:57,line:35},endLoc:{col:96,line:35},startBody:{col:57,line:35},endBody:{col:96,line:35}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},r=o(e=>n(s,{...e}),"Template"),v=r.bind({}),f=["Overview"];export{v as Overview,f as __namedExportsOrder,p as default};
//# sourceMappingURL=RelatedPostList.stories.5e2086f1.js.map
