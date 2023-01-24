import './AutocompleteResult.scss';

import classNames from 'classnames';
import React from 'react';

import {
  Box,
  BoxProps,
  Divider,
  Link,
  LinkProps,
  SearchNotFound,
  SearchNotFoundProps,
  TextHighlight,
} from '@/components';

export interface AutocompleteItem {
  id: string;
  title: string;
  description: string;
}

export interface AutocompleteResultProps extends BoxProps {
  /**
   * The items of autocomplete field
   */
  items: (AutocompleteItem & Omit<BoxProps, 'children'>)[];
  searchValue?: string;
  searchNotFoundProps: SearchNotFoundProps;
  seeAllSearchLinkProps?: Omit<LinkProps, 'children'> & { label: string };
  highlightedIndex?: number;
}

export const AutocompleteResult: React.FC<AutocompleteResultProps> = ({
  items,
  searchValue,
  searchNotFoundProps,
  seeAllSearchLinkProps: { label: seeAllSearchLinkLabel, ...seeAllSearchLinkProps } = {},
  highlightedIndex = 0,
  ...boxProps
}) => (
  <Box {...boxProps} className={classNames('autocomplete-result', boxProps?.className)}>
    {items.length === 0 ? (
      <SearchNotFound {...searchNotFoundProps} pb={{ xs: 'xl' }} />
    ) : (
      <>
        {items.map(({ id, title, description, ...itemLinkProps }, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <React.Fragment key={id}>
              <Box
                as="a"
                {...itemLinkProps}
                key={id}
                pt={{ xs: 'xxs' }}
                pb={{ xs: 'xs' }}
                px={{ xs: 'm' }}
                className={classNames('autocomplete-result__item', {
                  'autocomplete-result__item--is-highlighted': isHighlighted,
                })}
              >
                <TextHighlight size="xs" text={title} textQuery={searchValue} />
                <TextHighlight size="xs" text={description} textQuery={searchValue} hiddenDown="sm" />
              </Box>
              {items.length - 1 !== index && <Divider my="0" hiddenUp="sm" />}
            </React.Fragment>
          );
        })}
        {seeAllSearchLinkProps && seeAllSearchLinkLabel && (
          <Box
            pt={{ xs: 's', md: 'm' }}
            pb={{ xs: 'm', md: 'l' }}
            size={{ xs: 'xxs', md: 'xs' }}
            weight="medium"
            textAlign="center"
          >
            <Link {...seeAllSearchLinkProps}>{seeAllSearchLinkLabel}</Link>
          </Box>
        )}
      </>
    )}
  </Box>
);
