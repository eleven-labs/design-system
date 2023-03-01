import './SearchField.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps, Flex, Icon } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { AsProps } from '@/types';

export type SearchFieldOptions = {
  input: React.ComponentPropsWithRef<'input'>;
  buttonSearch: Omit<AsProps<'svg'>, 'name'>;
  buttonClose?: Omit<AsProps<'svg'>, 'name'>;
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
        {Boolean(input.value) && <Icon {...buttonClose} name="close" color="grey" size="1.5rem" />}
        <Box className="search-field__separator-button" ml="xs" />
        <Icon {...buttonSearch} name="search" color="amaranth" size="2.5rem" mx="xs" />
      </Flex>
    </Box>
  )
);

SearchField.displayName = 'SearchField';
