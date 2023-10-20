import './Reminder.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';

export const reminderVariantList = [
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

export type ReminderVariantType = (typeof reminderVariantList)[number];

export interface ReminderProps extends BoxProps {
  variant: ReminderVariantType;
  title: React.ReactNode;
}

export const Reminder = polyRef<'div', ReminderProps>(({ variant, title, children, ...nativeProps }) => (
  <Box {...nativeProps} className={classNames('reminder', `reminder--${variant}`)}>
    <Text className="reminder__title">{title}</Text>
    <Box p="xxs">{children}</Box>
  </Box>
));
