import StyleDictionary from 'style-dictionary';
import type { FormatterArguments } from 'style-dictionary/types/Format';

import { getDefaultHeader, sanitizeTokenTree } from '../../helpers';

type TokenLeaf = {
  value: string | number;
};

type TokenGroup = Record<string, TokenLeaf>;

const formatThemeLines = (entries: Array<string>) => entries.map((entry) => `  ${entry}`).join('\n');

const asTokenGroup = (value: unknown): TokenGroup => (value && typeof value === 'object' ? (value as TokenGroup) : {});

const withPxUnit = (value: string | number): string => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
};

const tailwindThemeFormatter = ({ dictionary }: FormatterArguments): string => {
  const tokens = sanitizeTokenTree(dictionary.tokens ?? dictionary.properties) as Record<string, unknown>;
  const breakpoints = asTokenGroup(tokens.breakpoint);
  const colors = asTokenGroup(tokens.color);
  const radii = asTokenGroup(tokens.radius);
  const spacing = asTokenGroup(tokens.spacing);

  const breakpointLines = Object.entries(breakpoints)
    .filter(([name]) => name !== 'xs')
    .map(([name, token]) => `--breakpoint-${name}: ${withPxUnit(token.value)};`);

  const colorNames = Object.keys(colors);
  const colorLines = colorNames.map((name) => `--color-${name}: var(--color-${name});`);
  const radiusLines = Object.keys(radii).map((name) => `--radius-${name}: var(--radius-${name});`);
  const spacingLines = Object.keys(spacing).map((name) => `--spacing-${name}: var(--spacing-${name});`);

  return [
    getDefaultHeader(),
    '@theme {',
    formatThemeLines([...breakpointLines, '--breakpoint-xl: initial;', '--breakpoint-2xl: initial;']),
    '}',
    '',
    '@theme inline {',
    formatThemeLines([...colorLines, ...radiusLines, ...spacingLines]),
    '}',
    '',
  ].join('\n');
};

StyleDictionary.registerFormat({
  name: 'css/tailwind-theme',
  formatter: tailwindThemeFormatter,
});
