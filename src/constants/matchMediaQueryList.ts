import { tokenVariables } from '@/constants/tokenVariables';

export const matchMediaQueryList = {
  mobile: `(max-width: ${parseInt(tokenVariables.breakpoint.sm.value, 10) - 1}px)`,
  aboveMobile: `(min-width:${parseInt(tokenVariables.breakpoint.sm.value, 10)}px)`,
  tablet: `(min-width:${parseInt(tokenVariables.breakpoint.sm.value, 10)}px) and (max-width: ${
    parseInt(tokenVariables.breakpoint.md.value, 10) - 1
  }px)`,
  aboveTablet: `(min-width:${parseInt(tokenVariables.breakpoint.md.value, 10)}px)`,
  desktop: `(min-width:${parseInt(tokenVariables.breakpoint.md.value, 10)}px) and (max-width: ${
    parseInt(tokenVariables.breakpoint.lg.value, 10) - 1
  }px)`,
  aboveDesktop: `(min-width:${parseInt(tokenVariables.breakpoint.lg.value, 10)}px)`,
  large: `(min-width:${parseInt(tokenVariables.breakpoint.lg.value, 10)}px)`,
};
