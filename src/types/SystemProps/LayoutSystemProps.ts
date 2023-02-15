import { DisplayType, HeightType, TypeWithMediaQueriesType, WidthType } from '@/types';

export interface LayoutSystemProps {
  /**
   * display (including breakpoints modifiers)
   */
  display?: TypeWithMediaQueriesType<DisplayType>;
  /**
   * width (including breakpoints modifiers)
   */
  width?: TypeWithMediaQueriesType<WidthType>;
  /**
   * height (including breakpoints modifiers)
   */
  height?: TypeWithMediaQueriesType<HeightType>;
  /**
   * min-width (including breakpoints modifiers)
   */
  minWidth?: TypeWithMediaQueriesType<WidthType>;
  /**
   * max-width (including breakpoints modifiers)
   */
  maxWidth?: TypeWithMediaQueriesType<WidthType>;
  /**
   * min-height (including breakpoints modifiers)
   */
  minHeight?: TypeWithMediaQueriesType<HeightType>;
  /**
   * max-height (including breakpoints modifiers)
   */
  maxHeight?: TypeWithMediaQueriesType<HeightType>;
}
