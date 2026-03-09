import path from 'node:path';

import StyleDictionary from 'style-dictionary';
import type { FormatterArguments } from 'style-dictionary/types/Format';

import { getDefaultHeader, objectToTsLiteral, sanitizeTokenTree } from '../../helpers';

export const typescriptObject = ({ dictionary, file }: FormatterArguments): string => {
  const exportName = path.basename(file.destination ?? 'tokenVariables.ts', '.ts');
  const tokens = sanitizeTokenTree(dictionary.tokens ?? dictionary.properties);

  return `${getDefaultHeader()}export const ${exportName} = ${objectToTsLiteral(tokens)};\n`;
};

StyleDictionary.registerFormat({
  name: 'typescript/object',
  formatter: typescriptObject,
});
