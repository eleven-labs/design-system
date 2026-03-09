'use client';

import { Slot } from '@radix-ui/react-slot';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import * as React from 'react';

import { cn } from '@/helpers';
import type { TextSizeType } from '@/tokens';

export interface TextHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
  size?: TextSizeType;
  text: string;
  textQuery?: string;
}

export const TextHighlight = React.forwardRef<HTMLSpanElement, TextHighlightProps>(
  ({ asChild = false, text, textQuery = '', size, className, ...props }, ref) => {
    const parts = React.useMemo(() => {
      const matches = match(text, textQuery, { findAllOccurrences: true });
      return parse(text, matches);
    }, [text, textQuery]);

    const Comp = asChild ? Slot : 'span';

    return (
      <Comp {...props} ref={ref} className={cn(size && `text-${size}`, className)}>
        {parts.map((part, index) => (
          <span key={index} className={cn(part.highlight ? 'font-medium text-info' : 'font-normal text-black')}>
            {part.text}
          </span>
        ))}
      </Comp>
    );
  }
);

TextHighlight.displayName = 'TextHighlight';
