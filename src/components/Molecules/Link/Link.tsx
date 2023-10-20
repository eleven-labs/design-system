import './Link.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Flex, FlexProps, Icon, Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { IconNameType, TextSizeType } from '@/types';

export interface LinkProps extends FlexProps {
  size: TextSizeType;
  icon?: IconNameType;
}

export const Link = polyRef<'a', LinkProps>(({ as = 'a', size, icon, children, ...props }, ref) => (
  <Flex
    {...props}
    ref={ref}
    as={as}
    alignItems="center"
    color="amaranth"
    className={classNames('link', props.className)}
    textSize={size}
  >
    {icon && <Icon name={icon} />}
    <Text as="span">{children}</Text>
  </Flex>
));

Link.displayName = 'Link';
