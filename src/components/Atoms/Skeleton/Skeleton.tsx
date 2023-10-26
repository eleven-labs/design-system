import classNames from 'classnames';
import React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';

import './Skeleton.scss';

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
        className={classNames(isLoading ? ['skeleton', 'animate-pulse'] : undefined, props.className)}
      >
        {children ?? (
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
