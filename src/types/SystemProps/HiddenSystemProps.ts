import { MediaQueryType } from '@/types';

export interface HiddenSystemProps {
  /**
   * Defines hidden strategy with media queries (down) (including breakpoints modifiers)
   */
  hiddenDown?: MediaQueryType;
  /**
   * Defines hidden strategy with media queries (up) (including breakpoints modifiers)
   */
  hiddenUp?: MediaQueryType;
}
