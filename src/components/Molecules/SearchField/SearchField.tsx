import classNames from 'classnames';
import * as React from 'react';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphed';

import type { BoxProps } from '@/components';
import { Box, Flex, Icon } from '@/components';
import { polyRef } from '@/helpers/polyRef';

import './SearchField.scss';

export interface SearchFieldProps extends BoxProps {
  input: Omit<PolymorphicPropsWithoutRef<'input', {}>, keyof BoxProps>;
  buttonSearch: Omit<PolymorphicPropsWithoutRef<'button', {}>, keyof BoxProps>;
  buttonClose?: Omit<PolymorphicPropsWithoutRef<'button', {}>, keyof BoxProps>;
}

export const SearchField = polyRef<'div', SearchFieldProps>(
  ({ input, buttonClose = {}, buttonSearch, className, ...props }, ref) => (
    <Box
      {...props}
      className={classNames('search-field', { 'search-field--has-value': Boolean(input.value) }, className)}
      ref={ref}
    >
      <Box {...{ as: 'input', ...input }} className="search-field__input" />
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
