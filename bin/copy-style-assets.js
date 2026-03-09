#!/usr/bin/env node

import { cpSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'src/styles');
const outputDir = path.join(rootDir, 'dist');

mkdirSync(outputDir, { recursive: true });
cpSync(sourceDir, outputDir, {
  recursive: true,
  filter: (filepath) => filepath.endsWith('.css') || !filepath.includes('.'),
});
