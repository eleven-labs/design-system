import { resolve } from 'node:path';
import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }

    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@', replacement: resolve(__dirname, '../src')
          },
          {
            find: '@storybook-components', replacement: resolve(__dirname, './components')
          },
        ]
      },
    });
  },
};

export default config;
