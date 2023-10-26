import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import * as React from 'react';

import type { TextProps } from '@/components';
import { Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';

export interface TextHighlightProps extends TextProps {
  text: string;
  textQuery?: string;
}

export const TextHighlight = polyRef<'p', TextHighlightProps>(({ text, textQuery = '', ...props }, ref) => {
  const parts = React.useMemo(() => {
    const matches = match(text, textQuery, { findAllOccurrences: true });
    return parse(text, matches);
  }, [text, textQuery]);

  return (
    <Text {...props} ref={ref}>
      {parts.map((part, index) => (
        <Text
          as="span"
          key={index}
          fontWeight={part.highlight ? 'medium' : 'regular'}
          color={part.highlight ? 'amaranth' : 'black'}
        >
          {part.text}
        </Text>
      ))}
    </Text>
  );
});

TextHighlight.displayName = 'TextHighlight';
