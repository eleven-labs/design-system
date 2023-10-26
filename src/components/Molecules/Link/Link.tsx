import classNames from 'classnames';
import * as React from 'react';

import { Box, Flex, Icon, Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import type { IconNameType } from '@/types';

import './Link.scss';

export interface LinkProps {
  className?: string;
  icon?: IconNameType;
  children: React.ReactNode;
}

export const Link = polyRef<'a', LinkProps>(({ as = 'a', icon, className, children, ...props }, ref) =>
  icon ? (
    <Flex {...props} ref={ref} as={as} alignItems="center" color="amaranth" className={classNames('link', className)}>
      {icon && <Icon name={icon} />}
      <Text as="span">{children}</Text>
    </Flex>
  ) : (
    <Box {...props} ref={ref} as={as} color="amaranth" className={classNames('link', className)}>
      {children}
    </Box>
  )
);

Link.displayName = 'Link';
