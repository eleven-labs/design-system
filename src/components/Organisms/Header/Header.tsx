import './Header.scss';

import React from 'react';

import { Autocomplete, AutocompleteProps, Box, BoxProps, Flex, FlexProps, Icons, Text } from '@/components';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export interface HeaderProps {
  title: string;
  subtitle: string;
  homeLinkProps: FlexProps;
  onClickOpenSearch: () => void;
  onClickCloseSearch: () => void;
  autocompleteDisplayed?: boolean;
  autocompleteProps: AutocompleteProps;
  headerContainerProps?: BoxProps;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  homeLinkProps,
  autocompleteDisplayed = false,
  onClickOpenSearch,
  onClickCloseSearch,
  autocompleteProps,
  headerContainerProps = {},
}) => {
  const isNotTablet = useMediaQuery('upTablet');
  return (
    <Box {...headerContainerProps} as="header" bg="azure" className="header">
      <Flex justifyContent={{ xs: 'between' }} alignItems="center" py={{ xs: 's' }} px={{ xs: 'm', md: 'l' }}>
        {(!autocompleteDisplayed || isNotTablet) && (
          <>
            <Flex as="a" {...homeLinkProps} alignItems="center" color="white">
              <Icons.Logo className="header__logo" />
              <Box ml={{ xs: 'xxs' }} size={{ xs: 'xxs', md: 'm' }}>
                <Text weight="medium">{title}</Text>
                <Text weight="bold">{subtitle}</Text>
              </Box>
            </Flex>
            <Icons.Search
              width="18px"
              height="18px"
              color="white"
              className="header__icon-for-mobile"
              onClick={onClickOpenSearch}
            />
          </>
        )}
        {(autocompleteDisplayed || isNotTablet) && (
          <>
            <Icons.Back
              width="18px"
              height="18px"
              color="white"
              className="header__icon-for-mobile"
              onClick={onClickCloseSearch}
            />
            <Autocomplete {...autocompleteProps} />
          </>
        )}
      </Flex>
    </Box>
  );
};
