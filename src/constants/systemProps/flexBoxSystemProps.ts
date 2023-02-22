import type { FlexBoxSystemProps } from '@/types';

export const flexBoxSystemProps: Record<keyof FlexBoxSystemProps, readonly string[]> = {
  alignItems: ['align-items'],
  alignContent: ['align-content'],
  justifyContent: ['justify-content'],
  gap: ['gap'],
  gapX: ['row-gap'],
  gapY: ['col-gap'],
  flexDirection: ['flex-direction'],
  flexBasis: ['flex-basis'],
  flexWrap: ['flex-wrap'],
  flex: ['flex'],
  alignSelf: ['align-self'],
};
