import react from '@vitejs/plugin-react';
import * as path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

export default defineConfig({
  plugins: [
    peerDepsExternal(),
    react(),
    tsconfigPaths(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      include: ['src'],
      exclude: [
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*.spec.ts',
        'src/**/*.spec.tsx',
        'src/documentations/**',
        '__tests__/**',
        '.storybook/**',
      ],
    }),
    visualizer({ filename: `reports/bundle-stats.html`, gzipSize: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: packageJson.name,
      formats: ['es', 'umd'],
      fileName: (format) => `[name].${format}.${format === 'umd' ? 'cjs' : 'js'}`,
    },
  },
});
