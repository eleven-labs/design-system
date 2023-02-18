import './Link.scss';

import classNames from 'classnames';
import React from 'react';

import { Flex, Icon, Text, TextProps } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps, IconNameType } from '@/types';

export type LinkOptions = {
  icon?: IconNameType;
};

export type LinkProps<T extends As = 'a'> = Omit<TextProps<T>, 'color' | 'underline' | 'fontWeight'> & LinkOptions;

export const Link = forwardRef<LinkProps, 'a'>(({ as = 'a', size = 'm', icon, children, ...props }, ref) => (
  <Flex
    {...(props as AsProps)}
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
