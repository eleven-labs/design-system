import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  viteFinal: (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/';
    }
    return mergeConfig(config, {
      resolve: {
        alias: [{
          find: '@',
          replacement: resolve(__dirname, '../src')
        }, {
          find: '@storybook-components',
          replacement: resolve(__dirname, './components')
        }]
      }
    });
  },
  docs: {
    autodocs: true
  }
};
export default config;
