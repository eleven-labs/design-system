import type { MediaQueryType } from '@/types';

export interface HiddenSystemProps {
  /**
   * Defines hidden above strategy with media queries (is similar to "min-width") (including breakpoints modifiers)
   */
  hiddenAbove?: MediaQueryType;
  /**
   * Defines hidden below strategy with media queries (is similar to "max-width") (including breakpoints modifiers)
   */
  hiddenBelow?: MediaQueryType;
}
