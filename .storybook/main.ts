import tailwindcss from '@tailwindcss/vite';
import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/';
    }

    if (config.plugins) {
      config.plugins = config.plugins.filter((plugin) =>
        Array.isArray(plugin) ? plugin : !['peer-deps-external', 'vite:dts'].includes((plugin as { name: string }).name)
      );
    }

    return mergeConfig(config, {
      plugins: [
        tailwindcss(),
        {
          name: 'fix-storybook-file-url',
          enforce: 'post' as const,
          resolveId(id: string) {
            if (id.startsWith('file:///')) {
              return { id: id.slice('file://'.length), external: false };
            }
            if (id.startsWith('file://./')) {
              return { id: resolve(process.cwd(), id.slice('file://./'.length)), external: false };
            }
          },
          transform(code: string) {
            if (!code.includes('file://')) return null;
            const cwd = process.cwd();
            const fixed = code
              .replace(/(['"])file:\/\/\//g, '$1/')
              .replace(/(['"])file:\/\/\.\//g, `$1${cwd}/`);
            if (fixed === code) return null;
            return { code: fixed, map: null };
          },
        },
      ],
      resolve: {
        alias: [
          {
            find: '@/storybook',
            replacement: resolve(__dirname),
          },
          {
            find: '@',
            replacement: resolve(__dirname, '../src'),
          },
        ],
      },
    });
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
