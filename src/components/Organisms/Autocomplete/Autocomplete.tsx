'use client';

import type { UseComboboxProps } from 'downshift';
import { useCombobox } from 'downshift';
import React from 'react';

import { Icon, SearchField } from '@/components';
import { cn } from '@/helpers';

import { AutocompleteResult } from './AutocompleteResult';

import type { AutocompleteItem, AutocompleteResultOptions } from './AutocompleteResult';

export type AutocompleteOptions = {
  placeholder: string;
  searchLink: Exclude<AutocompleteResultOptions['searchLink'], undefined>;
  defaultValue?: string;
  onEnter?: (value: string) => void;
};

export type AutocompleteProps = React.ComponentPropsWithoutRef<'div'> &
  AutocompleteOptions &
  Omit<AutocompleteResultOptions, 'highlightedIndex' | 'searchLink'> &
  Pick<UseComboboxProps<AutocompleteItem>, 'onInputValueChange' | 'onSelectedItemChange' | 'isOpen'>;

export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      placeholder,
      defaultValue,
      items = [],
      searchLink: { label: searchLinkLabel, ...searchLinkProps },
      searchNotFound,
      onInputValueChange,
      onSelectedItemChange,
      onEnter,
      isOpen: defaultIsOpen,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (onEnter && event.key === 'Enter') {
        onEnter(event.currentTarget.value);
      }
    };

    const { getInputProps, getMenuProps, getItemProps, selectItem, toggleMenu, isOpen, inputValue, highlightedIndex } =
      useCombobox<AutocompleteItem>({
        defaultInputValue: defaultValue,
        onInputValueChange,
        onSelectedItemChange,
        items,
        itemToString: (item) => (item ? item.title : ''),
        isOpen: defaultIsOpen,
      });

    const onClose = (): void => selectItem(null);

    const itemsWithDownshiftProps = React.useMemo(
      () =>
        items.map((item, index) => ({
          ...item,
          ...getItemProps({ item, index }),
        })),
      [items, getItemProps]
    );

    return (
      <div {...props} className={cn('md:relative', props.className)} ref={ref}>
        <SearchField
          input={getInputProps({ placeholder, onKeyDown: handleKeyDown })}
          buttonSearch={{
            asChild: true,
            children: (
              <a {...searchLinkProps}>
                <Icon name="search" color="primary" size="2.5rem" className="mx-xs" />
              </a>
            ),
          }}
          buttonClose={{ onClick: onClose }}
          className="autocomplete__input z-10"
        />
        <AutocompleteResult
          isOpen={isOpen && inputValue.length > 0}
          {...getMenuProps()}
          items={itemsWithDownshiftProps}
          highlightedIndex={highlightedIndex === -1 ? 0 : highlightedIndex}
          searchValue={inputValue}
          searchLink={{
            label: searchLinkLabel,
            ...searchLinkProps,
            onClick: toggleMenu,
          }}
          searchNotFound={searchNotFound}
        />
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
