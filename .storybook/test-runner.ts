import type { TestRunnerConfig } from '@storybook/test-runner';
import { waitForPageReady } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const customSnapshotsDir = `${process.cwd()}/.storybook/visual-regression/__screenshots__`;
const customDiffDir = `${process.cwd()}/.storybook/visual-regression/__diff_output__`;
const customReceivedDir = `${process.cwd()}/.storybook/visual-regression/__received_output__`;
const storyRootSelector = '#storybook-root';

const matchesStoryFilter = (storyId: string): boolean => {
  const targetStoryId = process.env.STORYBOOK_STORY_ID;
  if (targetStoryId) {
    return storyId === targetStoryId;
  }

  const includePrefixes = (process.env.STORYBOOK_INCLUDE_PREFIXES ?? '')
    .split(',')
    .map((prefix) => prefix.trim())
    .filter(Boolean);

  const excludePrefixes = (process.env.STORYBOOK_EXCLUDE_PREFIXES ?? '')
    .split(',')
    .map((prefix) => prefix.trim())
    .filter(Boolean);

  if (includePrefixes.length > 0 && !includePrefixes.some((prefix) => storyId.startsWith(prefix))) {
    return false;
  }

  return !excludePrefixes.some((prefix) => storyId.startsWith(prefix));
};

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          transition-duration: 0s !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          caret-color: transparent !important;
        }
      `,
    });
  },
  async postVisit(page, context) {
    if (!matchesStoryFilter(context.id)) {
      return;
    }

    await waitForPageReady(page);
    await page.waitForTimeout(150);

    const screenshot = await page.locator(storyRootSelector).screenshot();

    expect(screenshot).toMatchImageSnapshot({
      customSnapshotsDir,
      customDiffDir,
      customReceivedDir,
      customSnapshotIdentifier: context.id,
    });
  },
  tags: {
    exclude: ['skip-test', 'no-visual-regression-tests'],
  },
};

export default config;
