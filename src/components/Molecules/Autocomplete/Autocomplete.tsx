import './Autocomplete.scss';

import React from 'react';

import { Box, BoxProps } from '@/components';

import { AutocompleteResult, AutocompleteResultProps } from './AutocompleteResult';
import { AutocompleteSearch, AutocompleteSearchProps } from './AutocompleteSearch';

export interface AutocompleteProps extends AutocompleteSearchProps, AutocompleteResultProps, BoxProps {
  isOpen?: boolean;
  buttonCloseProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonSearchProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      inputProps,
      items = [],
      searchNotFoundProps,
      seeAllSearchLinkProps,
      isOpen = false,
      highlightedIndex,
      buttonCloseProps = {},
      buttonSearchProps = {},
      ...boxProps
    },
    ref
  ) => (
    <Box {...boxProps} ref={ref} className="autocomplete">
      <AutocompleteSearch
        inputProps={inputProps}
        buttonCloseProps={buttonCloseProps}
        buttonSearchProps={buttonSearchProps}
      />
      {isOpen && (
        <AutocompleteResult
          items={items}
          highlightedIndex={highlightedIndex}
          searchValue={inputProps?.value as string | undefined}
          searchNotFoundProps={searchNotFoundProps}
          seeAllSearchLinkProps={seeAllSearchLinkProps}
        />
      )}
    </Box>
  )
);
