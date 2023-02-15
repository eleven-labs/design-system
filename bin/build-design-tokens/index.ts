#!/usr/bin/env node

import './formats/register';
import './transforms/register';

import * as StyleDictionary from 'style-dictionary';
import { TransformedToken } from 'style-dictionary/types/TransformedToken';

const filterExcludesCategories = (token: TransformedToken, categories: string[]): boolean =>
  token?.attributes?.category ? !categories.includes(token.attributes.category) : false;

const styleDictionary = StyleDictionary.extend({
  source: ['src/designTokens/**/*.tokens.json'],
  platforms: {
    'css/variables': {
      buildPath: './src/styles/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'name/cti/kebab-only-category-item'],
      transformGroup: 'css',
      files: [
        {
          format: 'css/variables',
          filter: (token): boolean => filterExcludesCategories(token, ['asset', 'breakpoint']),
          destination: '_token-custom-properties.scss',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    'scss/token-variables': {
      buildPath: './src/styles/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'name/cti/kebab-only-category-item'],
      files: [
        {
          format: 'scss/map-deep-with-css-variables',
          filter: (token): boolean => filterExcludesCategories(token, ['asset']),
          destination: 'abstracts/variables/_token-variables.scss',
          options: {
            outputReferences: true,
          },
        },
      ],
      options: {
        categoriesWithNotCssVariables: ['breakpoint'],
        injectVariables: {
          'cdn-path': process.env.CDN_PATH || '/',
        },
      },
    },
    'scss/font-face': {
      buildPath: './src/styles/',
      transforms: ['attribute/font'],
      files: [
        {
          format: 'scss/font-face',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font',
            },
          },
          destination: '_fonts.scss',
          options: {
            outputReferences: true,
          },
        },
      ],
      options: {
        fontPathPrefix: `#{map.get($token-variables, 'cdn-path')}`,
        injectToHead: [`@use 'abstracts' as *;`],
      },
    },
    'typescript/token-variables': {
      buildPath: './src/',
      transforms: ['attribute/cti'],
      files: [
        {
          format: 'typescript/object',
          destination: 'constants/tokenVariables.ts',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

styleDictionary.buildAllPlatforms();
