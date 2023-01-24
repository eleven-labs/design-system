var o=Object.defineProperty;var a=(e,r)=>o(e,"name",{value:r,configurable:!0});import{p as t}from"./SubHeader.0b0fa522.js";import{j as n}from"./jsx-runtime.8d827842.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";const b={title:"Components/Organisms/SubHeader",component:t,args:{introBlock:{title:"Ravi de te voir",description:"Explorons de nouveaux savoirs"},choiceCategoryLabel:"Quels articles veux-tu lire ?",choiceCategories:[{name:"all",label:"Tous"},{name:"javascript",label:"Javascript"},{name:"php",label:"PHP"},{name:"agile",label:"Agile"},{name:"architecture",label:"Architecture"},{name:"best-practices",label:"Bonnes pratiques"}]},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SubHeader } from './SubHeader';

export default {
  title: 'Components/Organisms/SubHeader',
  component: SubHeader,
  args: {
    introBlock: {
      title: 'Ravi de te voir',
      description: 'Explorons de nouveaux savoirs',
    },
    choiceCategoryLabel: 'Quels articles veux-tu lire ?',
    choiceCategories: [
      { name: 'all', label: 'Tous' },
      { name: 'javascript', label: 'Javascript' },
      { name: 'php', label: 'PHP' },
      { name: 'agile', label: 'Agile' },
      { name: 'architecture', label: 'Architecture' },
      { name: 'best-practices', label: 'Bonnes pratiques' },
    ],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = (args) => <SubHeader {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:51,line:32},endLoc:{col:84,line:32},startBody:{col:51,line:32},endBody:{col:84,line:32}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},l=a(e=>n(t,{...e}),"Template"),d=l.bind({}),v=["Overview"];export{d as Overview,v as __namedExportsOrder,b as default};
//# sourceMappingURL=SubHeader.stories.f3f6e6fc.js.map
