import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ insertTypesEntry: true }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/abstracts',
          dest: 'scss',
        },
      ],
    }),
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
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
