import type { HiddenSystemProps } from '@/types';

export const hiddenSystemProps: Record<keyof HiddenSystemProps, readonly string[]> = {
  hiddenBelow: ['display'],
  hiddenAbove: ['display'],
};
