import classNames from 'classnames';
import React from 'react';

import type { AutocompleteProps } from '@/components';
import { Autocomplete, BurgerButton, Button, CloseButton, Link, Logo } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface HeaderProps {
  homeLink: ComponentPropsWithoutRef<'a'>;
  categories: ({
    label: React.ReactNode;
  } & ComponentPropsWithoutRef<'a'>)[];
  hasTutorial: boolean;
  tutorialLink: { label: React.ReactNode } & ComponentPropsWithoutRef<'a'>;
  contactLink: { label: React.ReactNode } & ComponentPropsWithoutRef<'a'>;
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
  <header
    className="
      relative flex items-center justify-between border-b
      border-ultra-light-grey bg-white px-m py-l
      md:[--header-logo-size:3.5rem]
    "
  >
    <a {...homeLink} className="text-primary">
      <Logo name="blog" className="text-(--header-logo-size,2rem)" />
    </a>
    <div
      className={cn(
        `
          hidden font-heading font-bold tracking-[0.5px] uppercase
          md:mx-xs md:flex md:gap-m
          lg:mx-0 lg:gap-xl
        `,
        `
          max-md:fixed max-md:inset-x-0 max-md:top-[80px] max-md:bottom-0
          max-md:z-10 max-md:flex-col max-md:border-t
          max-md:border-secondary-dark max-md:bg-white
        `,
        menuIsOpen && 'max-md:flex'
      )}
    >
      {categories.map(({ label, ...categoryLink }, index) => (
        <Link
          key={index}
          {...categoryLink}
          data-internal-link="category"
          className="
            self-center font-bold text-info no-underline
            hover:text-primary hover:no-underline
            max-md:border-b max-md:border-secondary-dark max-md:px-m
            max-md:py-xs
          "
        >
          {label}
        </Link>
      ))}
      {hasTutorial && (
        <>
          <div className="w-px bg-primary" />
          <a
            {...tutorialLink}
            data-internal-link="category"
            className="
              self-center font-bold text-info no-underline
              hover:text-primary hover:no-underline
              max-md:border-b max-md:border-secondary-dark max-md:px-m
              max-md:py-xs
            "
          >
            {tutorialLinkLabel}
          </a>
        </>
      )}
      <div
        className="
          mt-m flex items-center justify-center
          md:hidden
        "
      >
        <Button asChild>
          <a {...contactLink}>{contactLinkLabel}</a>
        </Button>
      </div>
    </div>
    <Autocomplete {...autocomplete} className={classNames('hidden md:block', autocomplete.className)} />
    {menuIsOpen ? (
      <CloseButton className="md:hidden" onClick={onToggleMenu} />
    ) : (
      <BurgerButton className="md:hidden" onClick={onToggleMenu} />
    )}
  </header>
);
