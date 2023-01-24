import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import React, { useMemo } from 'react';

import { Text, TextProps } from '@/components';

export interface TextHighlightProps extends Omit<TextProps, 'children'> {
  text: string;
  textQuery?: string;
}

export const TextHighlight: React.FC<TextHighlightProps> = ({ text, textQuery = '', ...textProps }) => {
  const parts = useMemo(() => {
    const matches = match(text, textQuery, { findAllOccurrences: true });
    return parse(text, matches);
  }, [text, textQuery]);

  return (
    <Text {...textProps}>
      {parts.map((part, index) => (
        <Text
          as="span"
          key={index}
          weight={part.highlight ? 'medium' : 'regular'}
          color={part.highlight ? 'amaranth' : 'black'}
        >
          {part.text}
        </Text>
      ))}
    </Text>
  );
};
