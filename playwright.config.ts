import { defineConfig, devices } from '@playwright/test';

const PORT = 6109;
const BASE_URL = process.env.STORYBOOK_BASE_URL ?? `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './__tests__/visual-regression',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    viewport: { width: 1440, height: 900 },
  },
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: process.env.STORYBOOK_BASE_URL
    ? undefined
    : {
        command: `pnpm exec storybook dev -p ${PORT} --exact-port --no-open`,
        url: `${BASE_URL}/iframe.html`,
        reuseExistingServer: false,
        timeout: 180_000,
      },
});
