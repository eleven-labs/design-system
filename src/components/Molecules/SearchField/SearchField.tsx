import './SearchField.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps, Flex, Icon } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { AsProps } from '@/types';

export type SearchFieldOptions = {
  input: React.ComponentPropsWithRef<'input'>;
  buttonSearch: AsProps<'button'>;
  buttonClose?: AsProps<'button'>;
};

export type SearchFieldProps = BoxProps & SearchFieldOptions;

export const SearchField = forwardRef<SearchFieldProps, 'div'>(
  ({ input, buttonClose, buttonSearch, ...props }, ref) => (
    <Box
      className={classNames('search-field', { 'search-field--has-value': Boolean(input.value) }, props.className)}
      ref={ref}
    >
      <Box {...(input as AsProps)} as="input" className="search-field__input" />
      <Flex justifyContent="center" alignItems="center" className="search-field__actions-container">
        {Boolean(input.value) && (
          <Box as="button" className="search-field__button-action" {...(buttonClose as AsProps)}>
            <Icon name="close" color="grey" size="1.5rem" />
          </Box>
        )}
        <Box className="search-field__separator-button" ml="xs" />
        <Box as="button" className="search-field__button-action" {...(buttonSearch as AsProps)}>
          <Icon name="search" color="amaranth" size="2.5rem" mx="xs" />
        </Box>
      </Flex>
    </Box>
  )
);

SearchField.displayName = 'SearchField';
