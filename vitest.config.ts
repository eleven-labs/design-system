import react from '@vitejs/plugin-react';
import path from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-test.ts'],
    include: ['**/*.test.cjs', '**/*.test.ts', '**/*.test.tsx'],
    watch: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'bin/**',
        'coverage/**',
        'dist/**',
        '.storybook/**',
        '__tests__/visual-regression/**',
        'src/**/*.stories.*',
        'src/documentations/**',
        'src/index.ts',
        'vite.config.ts',
        'vitest.config.ts',
        'playwright.config.ts',
        '*.config.*',
      ],
    },
  },
});
