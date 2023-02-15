import * as StyleDictionary from 'style-dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';
import type { Options } from 'style-dictionary/types/Options';
import type { TransformedToken } from 'style-dictionary/types/TransformedToken';

import { getDefaultHeader } from '../../helpers';

type TransformedTokenWithAttributeFont = TransformedToken & {
  attributes: {
    name: string;
    family: string;
    weight: string;
    style: string;
    display: string;
    extensions: 'woff2' | 'woff' | 'ttf' | 'otf'[];
  };
};

const processJsonNode = (
  transformedTokens: TransformedTokenWithAttributeFont[],
  options: Options & { fontPathPrefix?: string; injectToHead?: string[] }
): string => {
  const fontPathPrefix = options.fontPathPrefix || '../';
  let output = [`@use 'sass:map';\n`, `@use 'sass:string';\n`].join('');

  if (options?.injectToHead) {
    output += options.injectToHead.join('\n');
  }

  output += '\n\n';

  const fontVariables = transformedTokens
    .reduce<string[]>((currentFontVariables, prop) => {
      const {
        attributes: { name, family, weight, style, display, extensions },
        value: path,
      } = prop;

      const fontVariable = [
        `\t'${name}': (`,
        `\n\t\t'path': "${fontPathPrefix}${path}",`,
        `\n\t\t'family': "${family}",`,
        `\n\t\t'weight': ${weight},`,
      ];

      if (style) {
        fontVariable.push(`\n\t\t'style': ${style},`);
      }
      if (display) {
        fontVariable.push(`\n\t\t'display': ${display},`);
      }
      if (extensions) {
        fontVariable.push(`\n\t\t'extensions': ${extensions},`);
      }

      currentFontVariables.push(fontVariable.concat('\n\t)').join(''));

      return currentFontVariables;
    }, [])
    .join(',\n');

  output += `$fonts: (\n${fontVariables}\n);\n\n`;

  /* eslint-disable prettier/prettier */
  output += [
    '@mixin font-face($path, $family, $weight, $style: normal, $display: swap, $extensions: woff2 woff) {',
    `\n\t$src: null;`,
    `\n\t@each $extension in $extensions {`,
    `\n\t\t$pathWithExtension: string.quote($path + "." + $extension);`,
    `\n\t\t$src: append($src, url($pathWithExtension) format(string.quote($extension)), comma);`,
    `\n\t}`,
    '\n\t@font-face {',
    '\n\t\tfont-family: #{string.quote($family)};',
    '\n\t\tfont-style: $style;',
    '\n\t\tfont-weight: $weight;',
    '\n\t\tfont-display: $display;',
    '\n\t\tsrc: $src;',
    '\n\t}',
    '\n}',
    '\n\n',
    '@each $font-name, $font-value in $fonts {',
    `\n\t@include font-face(`,
    `\n\t\tmap.get($font-value, 'path'),`,
    `\n\t\tmap.get($font-value, 'family'),`,
    `\n\t\tmap.get($font-value, 'weight'),`,
    '\n\t\tif(map.has-key($font-value, \'style\'), map-get($font-value, \'style\'), \'normal\'),',
    '\n\t\tif(map.has-key($font-value, \'display\'), map-get($font-value, \'display\'), \'swap\'),',
    '\n\t\tif(map.has-key($font-value, \'extensions\'), map-get($font-value, \'extensions\'), woff2 woff),',
    '\n\t);',
    '\n}',
  ].join('');
  /* eslint-enable prettier/prettier */

  return output;
};

const fontFace = ({ dictionary, options }: FormatterArguments): string => {
  let output = getDefaultHeader();
  output += processJsonNode(dictionary.allTokens as TransformedTokenWithAttributeFont[], options);
  return output;
};

StyleDictionary.registerFormat({
  name: 'scss/font-face',
  formatter: fontFace,
});
