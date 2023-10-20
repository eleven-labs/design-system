import './Skeleton.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';

export interface SkeletonProps extends BoxProps {
  isLoading?: boolean;
}

export const Skeleton = polyRef<'div', SkeletonProps>(({ as = 'div', isLoading = true, children, ...props }, ref) => (
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
));

Skeleton.displayName = 'Skeleton';
