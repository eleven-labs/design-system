#!/usr/bin/env node

import { rmSync } from 'node:fs';

import type { Config, TransformedToken } from 'style-dictionary';
import StyleDictionary from 'style-dictionary';

import './formats/register';
import './transforms/register';

const defaultFilter = (token: TransformedToken) => token.type !== 'scale';

const filterExcludesCategories = (token: TransformedToken, categories: string[]): boolean =>
  token.attributes?.category ? !categories.includes(token.attributes.category) : false;

const cleanLegacyOutputs = () => {
  [
    'src/constants/tokenVariables.ts',
    'src/constants/tokenVariablesDesktop.ts',
    'src/styles/_token-custom-properties.scss',
    'src/styles/_token-custom-properties-desktop.scss',
    'src/styles/abstracts/variables/_variables.scss',
    'src/styles/abstracts/variables/_token-variables.scss',
  ].forEach((filepath) => rmSync(filepath, { force: true }));
};

const sdConfigs: Config[] = [
  {
    source: ['src/designTokens/**/!(*.desktop).tokens.json'],
    platforms: {
      'css/variables': {
        buildPath: './src/styles/',
        transforms: ['attribute/cti', 'name/cti/kebab', 'name/cti/kebab-only-category-item', 'math', 'size/px'],
        files: [
          {
            format: 'css/variables',
            filter: (token) => defaultFilter(token) && filterExcludesCategories(token, ['asset', 'breakpoint']),
            destination: '_token-custom-properties.css',
          },
        ],
      },
      'css/tailwind-theme': {
        buildPath: './src/styles/',
        transforms: ['attribute/cti', 'name/cti/kebab', 'name/cti/kebab-only-category-item', 'math', 'size/px'],
        files: [
          {
            format: 'css/tailwind-theme',
            filter: (token) => defaultFilter(token) && ['breakpoint', 'color', 'radius', 'spacing'].includes(token.attributes?.category ?? ''),
            destination: '_tailwind-theme.css',
          },
        ],
      },
      'typescript/token-variables': {
        buildPath: './src/tokens/',
        transforms: ['attribute/cti', 'name/cti/kebab', 'math', 'size/px'],
        files: [
          {
            format: 'typescript/object',
            filter: defaultFilter,
            destination: 'tokenVariables.ts',
          },
        ],
      },
    },
  },
  {
    include: ['src/designTokens/**/!(*.desktop).tokens.json'],
    source: ['src/designTokens/**/*.desktop.tokens.json'],
    platforms: {
      'css/variables': {
        buildPath: './src/styles/',
        transforms: ['attribute/cti', 'name/cti/kebab', 'name/cti/kebab-only-category-item', 'math', 'size/px'],
        files: [
          {
            format: 'css/variables',
            filter: (token) => defaultFilter(token) && filterExcludesCategories(token, ['asset', 'breakpoint']),
            destination: '_token-custom-properties-desktop.css',
            options: {
              mediaQueryMinWidth: 1001,
            },
          },
        ],
      },
      'typescript/token-variables': {
        buildPath: './src/tokens/',
        transforms: ['attribute/cti', 'name/cti/kebab', 'math', 'size/px'],
        files: [
          {
            format: 'typescript/object',
            filter: defaultFilter,
            destination: 'tokenVariablesDesktop.ts',
          },
        ],
      },
    },
  },
];

cleanLegacyOutputs();

for (const sdConfig of sdConfigs) {
  StyleDictionary.extend(sdConfig).buildAllPlatforms();
}
