import './Link.scss';

import classNames from 'classnames';
import React from 'react';

import { Text, TextProps } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps } from '@/types';

export type LinkProps<T extends As = 'a'> = Omit<TextProps<T>, 'color' | 'underline'>;

export const Link = forwardRef<LinkProps, 'a'>(({ as = 'a', size = 'm', children, ...props }, ref) => (
  <Text
    {...(props as AsProps)}
    as={as}
    color="amaranth"
    ref={ref}
    size={size}
    className={classNames('link', props.className)}
  >
    {children}
  </Text>
));

Link.displayName = 'Link';
