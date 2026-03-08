import { expect, test } from '@playwright/test';

interface StorybookIndexEntry {
  id: string;
  type: string;
  tags?: string[];
}

interface StorybookIndex {
  entries?: Record<string, StorybookIndexEntry>;
}

const REDUCED_MOTION_STYLE = `
  *, *::before, *::after {
    transition-duration: 0s !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    caret-color: transparent !important;
  }
`;

const withTimeout = async <T>(fn: () => Promise<T>, timeoutMs: number, label: string): Promise<T> => {
  let timer: NodeJS.Timeout | undefined;

  try {
    return await Promise.race([
      fn(),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
          reject(new Error(`Timeout after ${timeoutMs}ms on ${label}`));
        }, timeoutMs);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
};

test.describe('Storybook visual regression', () => {
  test('@visual-regression all stories should match screenshots', async ({ page, baseURL }) => {
    test.setTimeout(15 * 60 * 1000);

    const indexResponse = await page.request.get(`${baseURL}/index.json`);
    expect(indexResponse.ok()).toBeTruthy();

    const indexData = (await indexResponse.json()) as StorybookIndex;

    const stories = Object.values(indexData.entries ?? {})
      .filter((entry) => entry.type === 'story')
      .filter((entry) => !(entry.tags ?? []).includes('skip-test'));

    expect(stories.length).toBeGreaterThan(0);

    const targetStoryId = process.env.STORYBOOK_STORY_ID;
    const filteredStories = targetStoryId ? stories.filter((story) => story.id === targetStoryId) : stories;

    expect(filteredStories.length).toBeGreaterThan(0);

    for (const [index, story] of filteredStories.entries()) {
      await test.step(`screenshot ${story.id}`, async () => {
        console.log(`[visual] ${index + 1}/${filteredStories.length} ${story.id}`);

        await withTimeout(
          async () => {
            await page.goto(`${baseURL}/iframe.html?id=${story.id}&viewMode=story`, { waitUntil: 'domcontentloaded' });

            await page.addStyleTag({ content: REDUCED_MOTION_STYLE });
            await page.waitForSelector('#storybook-root, #root', { state: 'visible' });

            await page.evaluate(async () => {
              if ('fonts' in document) {
                await (document as Document & { fonts?: { ready: Promise<void> } }).fonts?.ready;
              }
            });

            await page.waitForTimeout(150);

            const storyRoot = page.locator('#storybook-root, #root').first();
            const rect = await storyRoot.evaluate((el) => {
              const visibleElementRect = [...el.children]
                .map((child) => child.getBoundingClientRect())
                .find((childRect) => childRect.width > 0 && childRect.height > 0);

              if (visibleElementRect) {
                return {
                  x: visibleElementRect.x,
                  y: visibleElementRect.y,
                  width: visibleElementRect.width,
                  height: visibleElementRect.height,
                };
              }

              const range = document.createRange();
              range.selectNodeContents(el);
              const textRect = range.getBoundingClientRect();

              if (textRect.width > 0 && textRect.height > 0) {
                return {
                  x: textRect.x,
                  y: textRect.y,
                  width: textRect.width,
                  height: textRect.height,
                };
              }

              const rootRect = el.getBoundingClientRect();
              if (rootRect.width > 0 && rootRect.height > 0) {
                return {
                  x: rootRect.x,
                  y: rootRect.y,
                  width: rootRect.width,
                  height: rootRect.height,
                };
              }

              return null;
            });
            expect(rect).toBeTruthy();

            const viewport = page.viewportSize();
            expect(viewport).toBeTruthy();

            const padding = 24;
            const clipX = Math.max(0, Math.floor((rect?.x ?? 0) - padding));
            const clipY = Math.max(0, Math.floor((rect?.y ?? 0) - padding));
            const maxWidth = (viewport?.width ?? 0) - clipX;
            const maxHeight = (viewport?.height ?? 0) - clipY;
            const clipWidth = Math.max(1, Math.min(maxWidth, Math.ceil((rect?.width ?? 1) + padding * 2)));
            const clipHeight = Math.max(1, Math.min(maxHeight, Math.ceil((rect?.height ?? 1) + padding * 2)));

            await expect(page).toHaveScreenshot(`${story.id}.png`, {
              clip: {
                x: clipX,
                y: clipY,
                width: clipWidth,
                height: clipHeight,
              },
              animations: 'disabled',
              scale: 'device',
              maxDiffPixels: 5,
              timeout: 5000,
            });
          },
          45_000,
          `story ${story.id}`
        );
      });
    }
  });
});
