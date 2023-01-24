#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs'

const readdirRecursiveSync = (dir: string, relativeDir?: string): string[] => {
  let fileNames: string[] = [];
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  dirents.forEach(dirent => {
    if (dirent.isDirectory()) {
      fileNames = [...fileNames, ...readdirRecursiveSync(`${dir}/${dirent.name}`, relativeDir || dir)];
    } else {
      fileNames.push(path.relative(relativeDir || dir, `${dir}/${dirent.name}`));
    }
  });

  return fileNames;
};

const copyFileRecursiveSync = (srcDir: string, outputDir: string): void => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const fileNames = readdirRecursiveSync(srcDir);
  fileNames.forEach(fileName => {
    const srcFile = path.resolve(srcDir, fileName)
    const ouputFile = path.resolve(outputDir, fileName)
    const ouputCurrentDir = path.dirname(ouputFile)

    if (!fs.existsSync(ouputCurrentDir)) {
      fs.mkdirSync(ouputCurrentDir, { recursive: true });
    }

    fs.copyFileSync(
      srcFile,
      ouputFile,
    )
  });
}

const copyScssOutputDist = () => {
  console.log('Copy SCSS to dist ...')

  try {
    const srcDir = path.resolve(process.cwd(), 'src/styles/abstracts')
    const outputDir = path.resolve(process.cwd(), 'dist/scss/abstracts')

    copyFileRecursiveSync(srcDir, outputDir)
    console.log('Copy SCSS to dist is finished')
  } catch (error) {
    throw new Error(`Error on copy SCSS to dist: ${(error as Error).message}`)
  }

}

copyScssOutputDist()

