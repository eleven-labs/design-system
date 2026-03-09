export const getDefaultHeader = (): string => {
  const defaultHeader = ['Do not edit directly', `Generated on ${new Date().toUTCString()}`];
  const lineSeparator = '\n';
  const prefix = ' * ';
  const header = `/**${lineSeparator}`;
  const footer = `${lineSeparator} */${lineSeparator}${lineSeparator}`;

  return `${header}${defaultHeader.map((line) => `${prefix}${line}`).join(lineSeparator)}${footer}`;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const pickTokenMetadata = (value: unknown): Record<string, unknown> => {
  if (!isRecord(value)) {
    return {};
  }

  const metadataEntries = Object.entries(value).filter(([key]) => key !== 'value');
  return Object.fromEntries(metadataEntries);
};

export const sanitizeTokenTree = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((entry) => sanitizeTokenTree(entry));
  }

  if (!isRecord(value)) {
    return value;
  }

  if ('value' in value) {
    const originalMetadata = pickTokenMetadata(value.original);
    const metadata = {
      ...originalMetadata,
      ...('comment' in value ? { comment: value.comment } : {}),
      ...('description' in value ? { description: value.description } : {}),
    };

    if (typeof metadata.comment === 'string' && typeof metadata.description !== 'string') {
      metadata.description = metadata.comment;
    }

    return {
      value: sanitizeTokenTree(value.value),
      ...Object.fromEntries(
        Object.entries(metadata)
          .filter(([key]) => key !== 'value')
          .map(([key, entryValue]) => [key, sanitizeTokenTree(entryValue)])
      ),
    };
  }

  return Object.fromEntries(Object.entries(value).map(([key, entryValue]) => [key, sanitizeTokenTree(entryValue)]));
};

export const objectToTsLiteral = (value: unknown, depth = 0): string => {
  const indent = '\t'.repeat(depth);
  const childIndent = '\t'.repeat(depth + 1);

  if (Array.isArray(value)) {
    return `[${value.map((item) => objectToTsLiteral(item, depth)).join(', ')}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);

    if (entries.length === 0) {
      return '{}';
    }

    return `\{\n${entries
      .map(([key, entryValue]) => `${childIndent}'${key}': ${objectToTsLiteral(entryValue, depth + 1)}`)
      .join(',\n')}\n${indent}}`;
  }

  return JSON.stringify(value);
};
