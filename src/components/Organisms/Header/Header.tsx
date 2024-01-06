import classNames from 'classnames';
import React from 'react';

import type { AutocompleteProps } from '@/components';
import { Autocomplete, Box, BurgerButton, Button, CloseButton, Flex, Link, Logo } from '@/components';

import './Header.scss';

export interface HeaderProps {
  homeLink: React.ComponentPropsWithoutRef<'a'>;
  categories: ({
    label: React.ReactNode;
  } & React.ComponentPropsWithoutRef<'a'>)[];
  hasTutorial: boolean;
  tutorialLink: { label: React.ReactNode } & React.ComponentPropsWithoutRef<'a'>;
  contactLink: { label: React.ReactNode } & React.ComponentPropsWithoutRef<'a'>;
  autocomplete: AutocompleteProps;
  onToggleMenu: () => void;
  menuIsOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  homeLink,
  categories,
  hasTutorial,
  tutorialLink: { label: tutorialLinkLabel, ...tutorialLink },
  contactLink: { label: contactLinkLabel, ...contactLink },
  autocomplete,
  onToggleMenu,
  menuIsOpen = false,
}) => (
  <Flex as="header" justifyContent="between" alignItems="center" bg="white" p="m" className="header">
    <Box as="a" {...homeLink} color="navy">
      <Logo name="blog" className="header__logo" />
    </Box>
    <Box className={classNames('header__menu', { 'header__menu--is-open': menuIsOpen })}>
      {categories.map(({ label, ...categoryLink }, index) => (
        <Link as="a" key={index} {...categoryLink} data-internal-link="category" className="header__menu-item">
          {label}
        </Link>
      ))}
      {hasTutorial && (
        <>
          <Box className="header__separator" />
          <Link as="a" {...tutorialLink} data-internal-link="category" className="header__menu-item">
            {tutorialLinkLabel}
          </Link>
        </>
      )}
      <Flex justifyContent="center" alignItems="center" mt="m" hiddenAbove="md">
        <Button as="a" {...contactLink}>
          {contactLinkLabel}
        </Button>
      </Flex>
    </Box>
    <Autocomplete hiddenBelow="md" {...autocomplete} />
    {menuIsOpen ? (
      <CloseButton hiddenAbove="md" onClick={onToggleMenu} />
    ) : (
      <BurgerButton hiddenAbove="md" onClick={onToggleMenu} />
    )}
  </Flex>
);
