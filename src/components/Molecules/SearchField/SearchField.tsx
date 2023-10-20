import './SearchField.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps, Flex, Icon } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { PropsPolymorphicWithoutRef } from '@/types';

export interface SearchFieldProps extends BoxProps {
  input: PropsPolymorphicWithoutRef<'input', BoxProps>;
  buttonSearch: PropsPolymorphicWithoutRef<'button', BoxProps>;
  buttonClose?: PropsPolymorphicWithoutRef<'button', BoxProps>;
}

export const SearchField = polyRef<'div', SearchFieldProps>(
  ({ input, buttonClose = {}, buttonSearch, className, ...props }, ref) => (
    <Box
      className={classNames('search-field', { 'search-field--has-value': Boolean(input.value) }, className)}
      ref={ref}
    >
      <Box {...input} as="input" className="search-field__input" />
      <Flex justifyContent="center" alignItems="center" className="search-field__actions-container">
        {Boolean(input.value) && (
          <Box {...{ as: 'button', ...buttonClose }} className="search-field__button-action">
            <Icon name="close" color="grey" size="1.5rem" />
          </Box>
        )}
        <Box className="search-field__separator-button" ml="xs" />
        <Box {...{ as: 'button', ...buttonSearch }} className="search-field__button-action">
          <Icon name="search" color="amaranth" size="2.5rem" mx="xs" />
        </Box>
      </Flex>
    </Box>
  )
);

SearchField.displayName = 'SearchField';
