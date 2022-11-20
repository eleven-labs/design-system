#!/usr/bin/env node

import { exec } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { basename, extname, resolve } from 'node:path';

const srcDir = resolve(process.cwd(), 'src/assets/fonts');
const outputDir = resolve(process.cwd(), 'public/fonts');
const unicodesByLang = {
  fr: 'U+20-5F,U+61-7A,U+7C,U+A0,U+A7,U+A9,U+AB,U+B2-B3,U+BB,U+C0,U+C2,U+C6-CB,U+CE-CF,U+D4,U+D9,U+DB-DC,U+E0,U+E2,U+E6-EB,U+EE-EF,U+F4,U+F9,U+FB-FC,U+FF,U+152-153,U+178,U+2B3,U+2E2,U+1D48-1D49,U+2010-2011,U+2013-2014,U+2019,U+201C-201D,U+2020-2021,U+2026,U+202F-2030,U+20AC,U+2212',
};
const flavors = ['woff', 'woff2'];
const fontPaths = ['OpenSans-Light.ttf', 'OpenSans-Regular.ttf', 'OpenSans-SemiBold.ttf'];

const getFileSizeInBytes = (filePath: string): string => {
  const stats = statSync(filePath);
  return `${stats.size / 1000} kB`;
};

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

for (const fontPath of fontPaths) {
  const filePath = resolve(srcDir, fontPath);
  const filenameWithoutExtension = basename(fontPath, extname(fontPath));

  const fileSizeOrigin = getFileSizeInBytes(filePath);

  for (const flavor of flavors) {
    const outputFilePath = resolve(outputDir, `${filenameWithoutExtension}.${flavor}`);

    const args = [
      filePath,
      `--output-file="${outputFilePath}"`,
      `--flavor=${flavor}`,
      '--layout-features=""',
      `--unicodes="${unicodesByLang['fr']}"`,
    ];
    exec(`pyftsubset ${args.join(' \\\n')}`, (error): void => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      const fileSizeCompressed = getFileSizeInBytes(outputFilePath);
      console.log(
        `The ${filenameWithoutExtension} font compressed in ${flavor.toUpperCase()} format,original size: ${fileSizeOrigin},compressed size: ${fileSizeCompressed}`
      );
    });
  }
}
