# Eleven Labs Design System

## What is a Design System ?

An ecosystem including graphic and visual elements, typography, color tokens and common rules of use.

Fundamentals:
- Must contain only presentation components
- Does not contain business logic
- Independent of the data and its loading
- Includes documentation and examples of use

## Install

Using NPM:
```bash
npm install @eleven-labs/design-system
```

Using Yarn:
```bash
yarn add @eleven-labs/design-system
```

Tailwind CSS v4 must be installed in the consuming application:
```bash
pnpm add tailwindcss
```

## Documentation

To browse the Design System documentation, visit [website](https://eleven-labs.github.io/design-system/).

## Tokens and styling

- Runtime styling is based on Tailwind CSS v4.
- Token source files live in `src/designTokens`.
- Style Dictionary is kept as the source-of-truth build pipeline for tokens.
- Token artifacts consumed by the library are committed in the repository:
  - `src/styles/_token-custom-properties.css`
  - `src/styles/_token-custom-properties-desktop.css`
  - `src/styles/_tailwind-theme.css`
  - `src/styles/theme.css`
  - `src/styles/tailwind.css`
  - `src/tokens/*`
- No Sass token artifacts are generated anymore.

### Consuming styles

For an application that compiles Tailwind itself, import the raw Tailwind entry from the package and add a source to the design system files in `node_modules`:

```css
@import "tailwindcss";
@import "@eleven-labs/design-system/tailwind.css";
@import "@eleven-labs/design-system/global.css";

@source "../node_modules/@eleven-labs/design-system/dist/**/*.{js,mjs,cjs}";
@source "./src/**/*.{ts,tsx}";
```

Generate token artifacts:
```bash
pnpm build:design-tokens
```

## Visual Regression Tests (Storybook + Playwright)

Install Playwright browser (once):
```bash
pnpm exec playwright install chromium
```

Run all visual regression tests:
```bash
pnpm test:visual:storybook
```

Run one visual regression story:
```bash
STORYBOOK_STORY_ID=components-atoms-button--button-with-variant-primary pnpm test:visual:storybook:story
```

Run component stories only:
```bash
pnpm test:visual:storybook:components
```

Update all visual snapshots:
```bash
pnpm test:visual:storybook:update
```

Update component snapshots only:
```bash
pnpm test:visual:storybook:components:update
```

Snapshots are stored in:
```text
__tests__/visual-regression/__screenshots__/
```
