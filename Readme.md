# Welcome to the Eleven Labs Design System

## What is a Design System ?

An ecosystem, including graphic and visual elements but also typography, color codes and common rules of use.

Fundamentals:
- Must contain only presentation components
- Does not contain business logic
- Independent of the data and its loading
- Documentations and examples of use

## Why create a Design System ?

Its role is to improve the UI and especially to have a graphic and functional consistency. It should be the reference and the source of truth for the brand.

Subsequently, it should also allow to be faster in the developments and thus limit the expenses in the Design.


## Install

Using NPM:
```
npm install @eleven-labs/design-system

```

Using Yarn:
```
yarn add @eleven-labs/design-system
```

## Documentation of Design System

To see the different components of the Design System please visit [website](https://eleven-labs.github.io/design-system/).

## Visual Regression Tests (Storybook + Playwright)

Install Playwright browser (once):
```bash
pnpm exec playwright install chromium
```

Run visual regression tests:
```bash
pnpm test:visual:storybook
```

Run visual regression test on a single story:
```bash
STORYBOOK_STORY_ID=components-atoms-button--button-with-variant-primary pnpm test:visual:storybook:story
```

Update visual snapshots:
```bash
pnpm test:visual:storybook:update
```

Snapshots are stored in:
```text
__tests__/visual-regression/__screenshots__/
```

When you intentionally change UI rendering, run the update command and commit the updated screenshots.
