import * as React from 'react';

import { Icons, Link, LinkProps, Text } from '../../Atoms';

export interface BackLinkProps extends Omit<LinkProps, 'children'> {
  label: string;
}

export const BackLink: React.FC<BackLinkProps> = ({ label, ...linkProps }) => (
  <Link mb={{ xs: 'm' }} {...linkProps}>
    <Icons.Back width="18px" height="18px" />
    <Text
      as="span"
      ml={{ xs: 'xxs' }}
      size={{ xs: 'xs', md: 's' }}
      weight="medium"
      textTransform="capitalize"
    >
      {label}
    </Text>
  </Link>
);
