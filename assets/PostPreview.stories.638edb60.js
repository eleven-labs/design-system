var i=Object.defineProperty;var o=(e,r)=>i(e,"name",{value:r,configurable:!0});import{h as s}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{j as a}from"./jsx-runtime.8d827842.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";const P={title:"Components/Molecules/PostPreview",component:s,args:{slug:"titre-article",title:"Titre de l'article",date:"09 f\xE9v. 2021",readingTime:"24mn",authors:[{username:"jdoe",nameWithInitial:"J. Doe"}],excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.",postLinkProps:{}},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PostPreview } from '@/components';

export default {
  title: 'Components/Molecules/PostPreview',
  component: PostPreview,
  args: {
    slug: 'titre-article',
    title: \`Titre de l'article\`,
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
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof PostPreview>;

const Template: ComponentStory<typeof PostPreview> = (args) => <PostPreview {...args} />;

export const Overview = Template.bind({});

export const PostPreviewHasMask = Template.bind({});
PostPreviewHasMask.args = {
  hasMask: true,
};

export const PostPreviewIsRelated = Template.bind({});
PostPreviewIsRelated.parameters = {
  backgrounds: {
    default: 'grey-ultra-light',
  },
};
PostPreviewIsRelated.args = {
  isRelated: true,
};
`,locationsMap:{overview:{startLoc:{col:53,line:31},endLoc:{col:88,line:31},startBody:{col:53,line:31},endBody:{col:88,line:31}},"post-preview-has-mask":{startLoc:{col:53,line:31},endLoc:{col:88,line:31},startBody:{col:53,line:31},endBody:{col:88,line:31}},"post-preview-is-related":{startLoc:{col:53,line:31},endLoc:{col:88,line:31},startBody:{col:53,line:31},endBody:{col:88,line:31}}}},viewport:{defaultViewport:"extraSmallScreen"}}},t=o(e=>a(s,{...e}),"Template"),w=t.bind({}),l=t.bind({});l.args={hasMask:!0};const n=t.bind({});n.parameters={backgrounds:{default:"grey-ultra-light"}};n.args={isRelated:!0};const g=["Overview","PostPreviewHasMask","PostPreviewIsRelated"];export{w as Overview,l as PostPreviewHasMask,n as PostPreviewIsRelated,g as __namedExportsOrder,P as default};
//# sourceMappingURL=PostPreview.stories.638edb60.js.map
