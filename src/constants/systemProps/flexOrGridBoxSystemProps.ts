import type { FlexOrGridBoxSystemProps } from '@/types';

export const flexOrGridBoxSystemProps: Record<keyof FlexOrGridBoxSystemProps, string[]> = {
  alignItems: ['align-items'],
  alignContent: ['align-content'],
  justifyContent: ['justify-content'],
  gap: ['gap'],
  gapX: ['row-gap'],
  gapY: ['col-gap'],
};
