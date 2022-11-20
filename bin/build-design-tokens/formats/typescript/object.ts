import { TransformedToken } from 'style-dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';
import { TransformedTokens } from 'style-dictionary/types/TransformedToken';

import { getDefaultHeader } from '../../helpers';
import * as StyleDictionary from 'style-dictionary';

const processJsonNode = (transformedTokens: TransformedTokens, depth: number): string => {
  let output = '';

  if (transformedTokens?.['value']) {
    const transformedToken = transformedTokens as TransformedToken;
    const indent = '\t'.repeat(depth + 1);

    output += '{\n';
    output += Object.entries(transformedToken.original)
        .map(([key, value]) => (
            `${indent}${key === 'comment' ? 'description' : key}: ${Array.isArray(value) ? `["${value.join('", "')}"]` : `"${value}"`}`)
        ).join(',\n');
    output += `\n${'\t'.repeat(depth)}}`;
  } else {
    output += '{\n';
    output += Object.keys(transformedTokens)
      .map((key) => {
        const newProp = transformedTokens[key];
        const indent = '\t'.repeat(depth + 1);
        if (key === 'comment' && typeof newProp === 'string') {
          return `${indent}description: '${newProp}'`;
        }
        return `${indent}'${key}': ${processJsonNode(newProp, depth + 1)}`;
      })
      .join(',\n');
    output += `\n${'\t'.repeat(depth)}}`;
  }

  return output;
};

const typescriptObject = ({ dictionary }: FormatterArguments): string => {
  let output = getDefaultHeader();
  output += `export const tokenVariables = ${processJsonNode(dictionary.properties, 0)}`;
  return output;
};

StyleDictionary.registerFormat({
  name: 'typescript/object',
  formatter: typescriptObject,
});
