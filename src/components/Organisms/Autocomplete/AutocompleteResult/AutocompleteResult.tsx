import React from 'react';

import { PostMetadata } from '@/components';
import { Link, TextHighlight } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface AutocompleteItem {
  slug: string;
  title: string;
  date: string;
  authors?: { username: string; name: string }[];
  link: ComponentPropsWithoutRef<'a'>;
}

export type AutocompleteResultOptions = {
  isOpen?: boolean;
  items: AutocompleteItem[];
  searchValue?: string;
  searchLink?: ComponentPropsWithoutRef<'a'> & { label: string };
  searchNotFound?: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
  highlightedIndex?: number;
};

export interface AutocompleteResultProps extends React.ComponentPropsWithoutRef<'div'>, AutocompleteResultOptions {}

export const AutocompleteResult = React.forwardRef<HTMLDivElement, AutocompleteResultProps>(
  (
    {
      isOpen = false,
      items,
      searchValue,
      searchLink: { label: searchLinkLabel, ...searchLinkProps } = {},
      searchNotFound,
      highlightedIndex = 0,
      ...props
    },
    ref
  ) => (
    <div
      {...props}
      className={cn(
        `
          absolute left-0 z-2 mt-s w-screen bg-white px-s pt-s
          filter-[drop-shadow(0_4px_14px_rgb(0_0_0/25%))]
          md:mt-[-24px] md:w-full md:rounded-b-xs md:px-0 md:pt-l
        `,
        props.className
      )}
      ref={ref}
      hidden={!isOpen}
    >
      {items.length > 0 && (
        <>
          {items.map(({ slug, title, date, authors, link }, index) => {
            const isHighlighted = highlightedIndex === index;
            return (
              <React.Fragment key={slug}>
                <div
                  className={cn(
                    'relative flex items-center gap-xxs px-m pt-xxs pb-xs',
                    isHighlighted && 'bg-secondary'
                  )}
                >
                  <Link
                    {...link}
                    className="
                      relative line-clamp-4 text-black
                      before:absolute before:top-0 before:left-0 before:z-1
                      before:block before:size-full before:content-['']
                      md:line-clamp-2
                    "
                  >
                    <TextHighlight size="s" text={title} textQuery={searchValue} />
                  </Link>
                  <PostMetadata
                    className="mt-xxs-3"
                    date={date}
                    authors={authors}
                    displayedFields={['date', 'authors']}
                  />
                </div>
              </React.Fragment>
            );
          })}
          {searchLinkProps && searchLinkLabel && (
            <div
              className="
                pt-s pb-m text-center typography-text-s font-medium
                md:pt-m md:pb-l
              "
            >
              <Link {...searchLinkProps}>{searchLinkLabel}</Link>
            </div>
          )}
        </>
      )}
      {items.length === 0 && searchNotFound && (
        <div className="px-xl py-m text-center">
          <div
            className="
              h-[135px] w-full bg-[url('/imgs/not-found.png')] bg-center
              bg-no-repeat
            "
          />
          <p className="mt-s typography-heading-m">{searchNotFound.title}</p>
          <p className="mt-xxs typography-text-xs">{searchNotFound.description}</p>
        </div>
      )}
    </div>
  )
);

AutocompleteResult.displayName = 'AutocompleteResult';
