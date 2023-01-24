var o=Object.defineProperty;var t=(e,i)=>o(e,"name",{value:i,configurable:!0});import{R as n}from"./SubHeader.0b0fa522.js";import{j as l}from"./jsx-runtime.8d827842.js";import"./Link.a50d5e23.js";import"./systemProps.7fe820c8.js";import"./iframe.90672fd8.js";const d={title:"Components/Atoms/RichText",component:n,args:{content:`
      <h1>Heading level 1</h1>
      <h2>Heading level 2</h2>
      <h3>Heading level 3</h3>
      <h4>Heading level 4</h4>
      <h5>Heading level 5</h5>
      <h6>Heading level 6</h6>
      <br />
      <p>I really like using Markdown.</p>
      <p>This is the first line.<br>And this is the second line.</p>
      <p>I just love <strong>bold text</strong>.</p>
      <p>Italicized text is the <em>cat's meow</em>.</p>
      <blockquote>
        <p>Dorothy followed her through many of the beautiful rooms in her castle.</p>
      </blockquote>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ul>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ol>
      <img src="https://eleven-labs.com/static/images/planets/astro-donut.png" alt="astro donut" />
      <a href="https://blog.eleven-labs.com/">Blog Eleven Labs</a>
      <pre>
        <code class="language-typescript">const hello = (name: string = 'world') => \`hello \${name} !\`;</code>
      </pre>
      <div class="admonition note">
        <p class="admonition-title">Title</p>
        Lorem ipsum
      </div>
    `},parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RichText } from './RichText';

export default {
  title: 'Components/Atoms/RichText',
  component: RichText,
  args: {
    content: \`
      <h1>Heading level 1</h1>
      <h2>Heading level 2</h2>
      <h3>Heading level 3</h3>
      <h4>Heading level 4</h4>
      <h5>Heading level 5</h5>
      <h6>Heading level 6</h6>
      <br />
      <p>I really like using Markdown.</p>
      <p>This is the first line.<br>And this is the second line.</p>
      <p>I just love <strong>bold text</strong>.</p>
      <p>Italicized text is the <em>cat's meow</em>.</p>
      <blockquote>
        <p>Dorothy followed her through many of the beautiful rooms in her castle.</p>
      </blockquote>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ul>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ol>
      <img src="https://eleven-labs.com/static/images/planets/astro-donut.png" alt="astro donut" />
      <a href="https://blog.eleven-labs.com/">Blog Eleven Labs</a>
      <pre>
        <code class="language-typescript">const hello = (name: string = 'world') => \\\`hello \\\${name} !\\\`;</code>
      </pre>
      <div class="admonition note">
        <p class="admonition-title">Title</p>
        Lorem ipsum
      </div>
    \`,
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => <RichText {...args} />;

export const Overview = Template.bind({});
`,locationsMap:{overview:{startLoc:{col:50,line:55},endLoc:{col:82,line:55},startBody:{col:50,line:55},endBody:{col:82,line:55}}}},viewport:{defaultViewport:"extraSmallScreen"}}},r=t(e=>l(n,{...e}),"Template"),g=r.bind({}),u=["Overview"];export{g as Overview,u as __namedExportsOrder,d as default};
//# sourceMappingURL=RichText.stories.b370fefa.js.map
