'use client';

import React, { Fragment } from 'react';

import { Icon } from '@/components';
import { cn } from '@/helpers';
import { DOTS, usePagination } from '@/hooks/usePagination';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
  currentPage: number;
  totalPages: number;
  getLink: (page: number) => ComponentPropsWithoutRef<'a'>;
  siblingCount?: number;
}

const paginationItemClassName =
  'flex size-12 items-center justify-center border-y border-r border-secondary-dark text-primary-dark';

const getPaginationItem = (options: {
  currentPage: number;
  getLink: (currentPage: number) => ComponentPropsWithoutRef<'a'>;
  disabled?: boolean;
  active?: boolean;
}): {
  element: 'a' | 'span';
  props: React.HTMLAttributes<HTMLSpanElement> | ComponentPropsWithoutRef<'a'>;
} => ({
  element: options.disabled ? 'span' : 'a',
  props: {
    ...(options.disabled ? {} : options.getLink(options.currentPage)),
    className: cn(paginationItemClassName, options.disabled && 'text-grey', options.active && 'text-info'),
  },
});

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  getLink,
  siblingCount = 0,
  className,
  ...props
}) => {
  const pagination = usePagination({ currentPage, totalPages, siblingCount });
  const previousPageItem = getPaginationItem({
    currentPage,
    disabled: currentPage === 1,
    getLink,
  });
  const nextPageItem = getPaginationItem({
    currentPage: currentPage + 1,
    disabled: currentPage === totalPages,
    getLink,
  });

  return (
    <nav {...props} className={cn('flex', className)}>
      {React.createElement(
        previousPageItem.element,
        { ...previousPageItem.props, className: cn('border-l', previousPageItem.props.className) },
        <Icon name="arrow" style={{ transform: 'rotate(180deg)' }} />
      )}
      {pagination.map((page: number, index: number) => (
        <Fragment key={index}>
          {page === DOTS && <span className={paginationItemClassName}>...</span>}
          {page !== DOTS &&
            (() => {
              const item = getPaginationItem({
                currentPage: page,
                active: currentPage === page,
                getLink,
              });
              return React.createElement(item.element, item.props, page);
            })()}
        </Fragment>
      ))}
      {React.createElement(nextPageItem.element, nextPageItem.props, <Icon name="arrow" />)}
    </nav>
  );
};
