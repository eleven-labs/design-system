import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import * as React from 'react';

import { Text, TextOptions } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps, HiddenSystemProps, MarginSystemProps } from '@/types';

export type TextHighlightOptions = {
  text: string;
  textQuery?: string;
};

export type TextHighlightProps<T extends As = 'p'> = AsProps<T> &
  MarginSystemProps &
  HiddenSystemProps &
  TextOptions &
  TextHighlightOptions;

export const TextHighlight = forwardRef<TextHighlightProps, 'p'>(({ text, textQuery = '', ...props }, ref) => {
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
