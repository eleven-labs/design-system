var r=Object.defineProperty;var t=(e,s)=>r(e,"name",{value:s,configurable:!0});import{l as o}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{s as i}from"./flexOrGridItemPropsControls.4879272c.js";import"./systemProps.7fe820c8.js";import{j as n}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";import"./storybookHelper.b4ed8ce7.js";const y={title:"Components/Molecules/TextHighlight",component:o,argTypes:{...i},args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.",textQuery:"Lorem ipsum"},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TextHighlight } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Molecules/TextHighlight',
  component: TextHighlight,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    text: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.\`,
    textQuery: 'Lorem ipsum',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'grey-ultra-light',
    },
  },
} as ComponentMeta<typeof TextHighlight>;

const Template: ComponentStory<typeof TextHighlight> = (args) => <TextHighlight {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:55,line:25},endLoc:{col:92,line:25},startBody:{col:55,line:25},endBody:{col:92,line:25}}}},layout:"centered",backgrounds:{default:"grey-ultra-light"}}},l=t(e=>n(o,{...e}),"Template"),x=l.bind({}),v=["Overview"];export{x as Overview,v as __namedExportsOrder,y as default};
//# sourceMappingURL=TextHighlight.stories.1d3b7e77.js.map
