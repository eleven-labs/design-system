import './AutocompleteSearch.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Flex, Icons, Input, InputProps } from '@/components';

export interface AutocompleteSearchProps extends BoxProps {
  /**
   * The input props of autocomplete field
   */
  inputProps: InputProps;
  buttonCloseProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonSearchProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const AutocompleteSearch: React.FC<AutocompleteSearchProps> = ({
  inputProps,
  buttonCloseProps = {},
  buttonSearchProps = {},
  ...boxProps
}) => (
  <Box {...boxProps} className={classNames('autocomplete-search', boxProps?.className)}>
    <Input {...inputProps} variant="search" className="autocomplete-search__input" />
    <Flex justifyContent="center" alignItems="center" className="autocomplete-search__button-container">
      {inputProps.value && <button {...buttonCloseProps} className="autocomplete-search__button-close" />}
      <button {...buttonSearchProps} className="autocomplete-search__button-search">
        <Icons.Search className="autocomplete-search__icon" />
      </button>
    </Flex>
  </Box>
);
