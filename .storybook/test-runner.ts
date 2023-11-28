import {TestRunnerConfig, waitForPageReady} from '@storybook/test-runner';
import {toMatchImageSnapshot} from 'jest-image-snapshot';

const config: TestRunnerConfig = {
  setup: () => {
    expect.extend({toMatchImageSnapshot})
  },
  postVisit: async (page, context) => {
    // // Awaits for the page to be loaded and available including assets (e.g., fonts)
    // await waitForPageReady(page);
    // Add a post-render delay in case page is still animating
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Generates a snapshot file based on the story identifier
    const screenshot = await page.locator('#storybook-root').screenshot();
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
    });
  },
  tags: {
    exclude: ['no-visual-regression-tests'],
  },
}

export default config;
