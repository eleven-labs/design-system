import type { ColorSystemProps } from '@/types';

export const colorSystemProps: Record<keyof ColorSystemProps, readonly string[]> = {
  bg: ['background-color'],
  color: ['color'],
};
