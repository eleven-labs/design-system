import type { LayoutSystemProps } from '@/types';

export const layoutSystemProps: Record<keyof LayoutSystemProps, readonly string[]> = {
  display: ['display'],
  width: ['width'],
  height: ['height'],
  minWidth: ['min-width'],
  maxWidth: ['max-width'],
  minHeight: ['min-height'],
  maxHeight: ['max-height'],
};
