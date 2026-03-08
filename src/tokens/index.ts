import type { ElementType } from 'react';
import type React from 'react';

export { tokenVariables } from './tokenVariables';
export { tokenVariablesDesktop } from './tokenVariablesDesktop';

import { tokenVariables } from './tokenVariables';

export type ComponentPropsWithoutRef<T extends ElementType> = Omit<React.ComponentPropsWithoutRef<T>, 'color'>;

export type ColorType = keyof (typeof tokenVariables)['color'];
export type IconNameType = keyof (typeof tokenVariables)['asset']['icon'];
export type HeadingSizeType = keyof (typeof tokenVariables)['typography']['heading'];
export type TextSizeType = keyof (typeof tokenVariables)['typography']['text'];

export const iconTokenNameList = Object.keys(tokenVariables.asset.icon) as ReadonlyArray<IconNameType>;
export const headingSizeTokenNameList = Object.keys(
  tokenVariables.typography.heading
) as ReadonlyArray<HeadingSizeType>;
export const textSizeTokenNameList = Object.keys(tokenVariables.typography.text) as ReadonlyArray<TextSizeType>;

export const matchMediaQueryList = {
  mobile: `(max-width: ${Number.parseInt(tokenVariables.breakpoint.sm.value, 10) - 1}px)`,
  aboveMobile: `(min-width:${Number.parseInt(tokenVariables.breakpoint.sm.value, 10)}px)`,
  tablet: `(min-width:${Number.parseInt(tokenVariables.breakpoint.sm.value, 10)}px) and (max-width: ${
    Number.parseInt(tokenVariables.breakpoint.md.value, 10) - 1
  }px)`,
  aboveTablet: `(min-width:${Number.parseInt(tokenVariables.breakpoint.md.value, 10)}px)`,
  desktop: `(min-width:${Number.parseInt(tokenVariables.breakpoint.md.value, 10)}px) and (max-width: ${
    Number.parseInt(tokenVariables.breakpoint.lg.value, 10) - 1
  }px)`,
  aboveDesktop: `(min-width:${Number.parseInt(tokenVariables.breakpoint.lg.value, 10)}px)`,
  large: `(min-width:${Number.parseInt(tokenVariables.breakpoint.lg.value, 10)}px)`,
} as const;
