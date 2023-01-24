var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{a as r}from"./index.353672de.js";import{A as s,F as l}from"./SubHeader.0b0fa522.js";import"./Link.a50d5e23.js";import{s as c}from"./flexOrGridItemPropsControls.4879272c.js";import"./systemProps.7fe820c8.js";import{j as t}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";import"./make-decorator.d8288801.js";import"./storybookHelper.b4ed8ce7.js";const x={title:"Components/Molecules/Autocomplete",component:s,argTypes:{...c},args:{inputProps:{placeholder:"Rechercher par nom d\u2019article ou d\u2019auteur"},buttonCloseProps:{onClick:r("onClearSearch")},buttonSearchProps:{onClick:r("onSearch")},searchNotFoundProps:{title:"Aucun r\xE9sultat en vue...",description:"V\xE9rifiez les termes de votre recherche avant de r\xE9essayer"},seeAllSearchLinkProps:{label:"Voir tous les r\xE9sultats"},items:[{id:"react-ssr-fr",title:"React SSR",description:"Lorem ipsum dolor sit react, consectetur adipiscing elit. In nec blandit neque"},{id:"react-ssg-fr",title:"React SSG",description:"Mauris semper venenatis dolor vel posuere. Fusce imperdiet react purus euismod fermentum"},{id:"react-astro-fr",title:"React + Astro",description:"Ut velit elit, finibus eu turpis quis, luctus sodales elit"},{id:"react-nextjs-fr",title:"React + NextJS",description:"Quisque ac consectetur massa. Praesent pellentesque, orci sit amet cursus venenatis"},{id:"react-apollo-fr",title:"React + Apollo Client",description:"Phasellus ac sodales mi. Ut egestas dui react enim vehicula pulvinar"},{id:"react-vs-vue-fr",title:"React vs Vue",description:"Suspendisse potenti. Etiam egestas lacus velit, et tempor metus mollis react. Donec ut vulputate leo"}]},decorators:[e=>t(l,{justifyContent:"center",children:t(e,{})})],parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Autocomplete, Flex } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Molecules/Autocomplete',
  component: Autocomplete,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    inputProps: {
      placeholder: 'Rechercher par nom d\u2019article ou d\u2019auteur',
    },
    buttonCloseProps: {
      onClick: action('onClearSearch'),
    },
    buttonSearchProps: {
      onClick: action('onSearch'),
    },
    searchNotFoundProps: {
      title: 'Aucun r\xE9sultat en vue...',
      description: 'V\xE9rifiez les termes de votre recherche avant de r\xE9essayer',
    },
    seeAllSearchLinkProps: {
      label: 'Voir tous les r\xE9sultats',
    },
    items: [
      {
        id: 'react-ssr-fr',
        title: 'React SSR',
        description: 'Lorem ipsum dolor sit react, consectetur adipiscing elit. In nec blandit neque',
      },
      {
        id: 'react-ssg-fr',
        title: 'React SSG',
        description: 'Mauris semper venenatis dolor vel posuere. Fusce imperdiet react purus euismod fermentum',
      },
      {
        id: 'react-astro-fr',
        title: 'React + Astro',
        description: 'Ut velit elit, finibus eu turpis quis, luctus sodales elit',
      },
      {
        id: 'react-nextjs-fr',
        title: 'React + NextJS',
        description: 'Quisque ac consectetur massa. Praesent pellentesque, orci sit amet cursus venenatis',
      },
      {
        id: 'react-apollo-fr',
        title: 'React + Apollo Client',
        description: 'Phasellus ac sodales mi. Ut egestas dui react enim vehicula pulvinar',
      },
      {
        id: 'react-vs-vue-fr',
        title: 'React vs Vue',
        description:
          'Suspendisse potenti. Etiam egestas lacus velit, et tempor metus mollis react. Donec ut vulputate leo',
      },
    ],
  },
  decorators: [
    (Story): JSX.Element => (
      <Flex justifyContent="center">
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    backgrounds: {
      default: 'grey-ultra-light',
    },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const Overview = Template.bind({});

export const OpenSearch = Template.bind({});
OpenSearch.args = {
  isOpen: true,
  inputProps: {
    value: 'React',
  },
};

export const NoResult = Template.bind({});
NoResult.args = {
  isOpen: true,
  items: [],
  inputProps: {
    value: 'Ember',
  },
};
`,locationsMap:{overview:{startLoc:{col:54,line:82},endLoc:{col:90,line:82},startBody:{col:54,line:82},endBody:{col:90,line:82}},"open-search":{startLoc:{col:54,line:82},endLoc:{col:90,line:82},startBody:{col:54,line:82},endBody:{col:90,line:82}},"no-result":{startLoc:{col:54,line:82},endLoc:{col:90,line:82},startBody:{col:54,line:82},endBody:{col:90,line:82}}}},viewport:{defaultViewport:"extraSmallScreen"},backgrounds:{default:"grey-ultra-light"}}},n=o(e=>t(s,{...e}),"Template"),C=n.bind({}),u=n.bind({});u.args={isOpen:!0,inputProps:{value:"React"}};const p=n.bind({});p.args={isOpen:!0,items:[],inputProps:{value:"Ember"}};const P=["Overview","OpenSearch","NoResult"];export{p as NoResult,u as OpenSearch,C as Overview,P as __namedExportsOrder,x as default};
//# sourceMappingURL=Autocomplete.stories.dc6747db.js.map
