import classNames from 'classnames';
import React from 'react';

import type { BoxProps } from '@/components';
import { Box, Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';

import './Reminder.scss';

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

export const Reminder = polyRef<'div', ReminderProps>(({ as = 'div', variant, title, children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} bg="white" className={classNames('reminder', `reminder--${variant}`)}>
    <Text className="reminder__title">{title}</Text>
    <Box p="xxs">{children}</Box>
  </Box>
));
