#!/usr/bin/env node

import './formats/register';
import './transforms/register';

import type { File, TransformedToken } from 'style-dictionary';
import StyleDictionary from 'style-dictionary';

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
    'scss/variables': {
      buildPath: './src/styles/',
      transforms: ['attribute/cti'],
      files: [
        {
          format: 'scss/map-deep',
          filter: (token): boolean => token?.attributes?.category === 'color',
          destination: 'abstracts/variables/_variables.scss',
          mapName: 'variables',
          options: {
            outputReferences: true,
          },
        } as File,
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
