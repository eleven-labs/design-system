import classNames from 'classnames';
import React, { Fragment } from 'react';

import type { BoxProps } from '@/components';
import { Box, Flex, Icon } from '@/components';
import { DOTS, usePagination } from '@/hooks/usePagination';
import type { ComponentPropsWithoutRef, SpacingSystemProps } from '@/types';

import './Pagination.scss';

export interface PaginationProps extends SpacingSystemProps {
  currentPage: number;
  totalPages: number;
  getLink: (page: number) => ComponentPropsWithoutRef<'a'>;
  siblingCount?: number;
}

const getPaginationItem = (options: {
  currentPage: number;
  getLink: (currentPage: number) => ComponentPropsWithoutRef<'a'>;
  disabled?: boolean;
  active?: boolean;
}): BoxProps => ({
  ...(options.disabled ? { as: 'span' } : { as: 'a', ...options.getLink(options.currentPage) }),
  className: classNames(
    'pagination__item',
    { 'pagination__item--disabled': options.disabled },
    { 'pagination__item--active': options.active }
  ),
});

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  getLink,
  siblingCount = 1,
  ...props
}) => {
  const pagination = usePagination({ currentPage, totalPages, siblingCount });
  return (
    <Flex {...props} className="pagination">
      <Box
        {...getPaginationItem({
          currentPage: currentPage,
          disabled: currentPage === 1,
          getLink,
        })}
      >
        <Icon name="arrow" />
      </Box>
      {pagination.map((page: number, index: number) => (
        <Fragment key={index}>
          {page === DOTS && <Box className={classNames('pagination__item')}>...</Box>}
          {page !== DOTS && (
            <Box
              {...getPaginationItem({
                currentPage: page,
                active: currentPage === page,
                getLink,
              })}
            >
              {page}
            </Box>
          )}
        </Fragment>
      ))}
      <Box
        {...getPaginationItem({
          currentPage: currentPage + 1,
          disabled: currentPage === totalPages,
          getLink,
        })}
      >
        <Icon name="arrow" />
      </Box>
    </Flex>
  );
};
