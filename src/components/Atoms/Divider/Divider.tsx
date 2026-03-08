import React from 'react';

import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {}

export const Divider: React.FC<DividerProps> = (props) => (
  <hr {...props} className={cn('h-px w-full border-none bg-secondary-dark', props.className)} />
);
