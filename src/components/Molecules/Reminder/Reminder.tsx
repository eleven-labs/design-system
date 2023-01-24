import './Reminder.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Text } from '@/components';
import { SpacingSystemProps } from '@/types';

export const variantReminderList = [
  'note',
  'summary',
  'info',
  'tip',
  'success',
  'question',
  'warning',
  'failure',
  'danger',
  'bug',
  'example',
  'quote',
] as const;

export type VariantReminderType = typeof variantReminderList[number];

export interface ReminderProps extends SpacingSystemProps, BoxProps {
  variant: VariantReminderType;
  title: string;
  children: React.ReactNode;
}

export const Reminder: React.FC<ReminderProps> = ({ variant, title, children, ...nativeProps }) => (
  <Box {...nativeProps} className={classNames('reminder', `reminder--${variant}`)} size={{ xs: 's', md: 'm' }}>
    <Text className="reminder__title" p={{ xs: 'xxs' }}>
      {title}
    </Text>
    <Text p={{ xs: 'xxs' }}>{children}</Text>
  </Box>
);
