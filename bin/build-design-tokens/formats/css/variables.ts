import StyleDictionary from 'style-dictionary';

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: ({ dictionary, file, options = {} }) => {
    let output = '';

    if (options.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file });
    }

    const variables = StyleDictionary.formatHelpers.formattedVariables({
      dictionary,
      outputReferences: options.outputReferences,
      format: 'css',
      formatting: {
        prefix: '--',
        indentation: '\t\t',
        separator: ':',
      },
    });

    const rootBlock = [options.selector ?? ':root', '{', variables, '}'].join('\n');

    if (options.mediaQueryMinWidth) {
      output += `@media (min-width: ${options.mediaQueryMinWidth}px) {\n${rootBlock}\n}\n`;
      return output;
    }

    output += `${rootBlock}\n`;
    return output;
  },
});
