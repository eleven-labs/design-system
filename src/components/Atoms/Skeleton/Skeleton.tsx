import './Skeleton.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';

export interface SkeletonOptions {
  isLoading?: boolean;
}
export type SkeletonProps = BoxProps<'div'> & SkeletonOptions;

export const Skeleton = forwardRef<SkeletonProps, 'div'>(
  ({ as = 'div', isLoading = true, children, ...props }, ref) => (
    <>
      {isLoading ? (
        <Box
          {...props}
          as={as}
          ref={ref}
          bg="ultra-light-grey"
          className={classNames(classNames(isLoading ? ['skeleton', 'animate-pulse'] : undefined), props.className)}
        >
          {children ? (
            children
          ) : (
            <Box>
              <>&nbsp;</>
            </Box>
          )}
        </Box>
      ) : (
        children
      )}
    </>
  )
);

Skeleton.displayName = 'Skeleton';
