var a=Object.defineProperty;var o=(e,n)=>a(e,"name",{value:n,configurable:!0});import{a as t}from"./index.353672de.js";import i from"./Autocomplete.stories.dc6747db.js";import{n as r}from"./SubHeader.0b0fa522.js";import{j as l}from"./jsx-runtime.8d827842.js";import"./iframe.90672fd8.js";import"./make-decorator.d8288801.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import"./flexOrGridItemPropsControls.4879272c.js";import"./storybookHelper.b4ed8ce7.js";const y={title:"Components/Organisms/Header",component:r,args:{title:"Eleven Labs",subtitle:"Le blog",onClickOpenSearch:t("onClickOpenSearch"),onClickCloseSearch:t("onClickCloseSearch"),autocompleteProps:i.args,homeLinkProps:{href:"#"}},parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AutocompleteStories from '@/components/Molecules/Autocomplete/Autocomplete.stories';
import { Header } from './Header';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  args: {
    title: 'Eleven Labs',
    subtitle: 'Le blog',
    onClickOpenSearch: action('onClickOpenSearch'),
    onClickCloseSearch: action('onClickCloseSearch'),
    autocompleteProps: AutocompleteStories.args,
    homeLinkProps: {
      href: '#',
    },
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:48,line:29},endLoc:{col:78,line:29},startBody:{col:48,line:29},endBody:{col:78,line:29}}}},layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},p=o(e=>l(r,{...e}),"Template"),b=p.bind({}),g=["Overview"];export{b as Overview,g as __namedExportsOrder,y as default};
//# sourceMappingURL=Header.stories.ff7bee56.js.map
