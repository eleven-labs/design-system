import type { SpacingType, TypeWithMediaQueriesType } from '@/types';

export interface MarginSystemProps {
  /**
   * margin (including breakpoints modifiers)
   */
  m?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-top (including breakpoints modifiers)
   */
  mt?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-right (including breakpoints modifiers)
   */
  mr?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-bottom (including breakpoints modifiers)
   */
  mb?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-left (including breakpoints modifiers)
   */
  ml?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal margin: margin-left and margin-right (including breakpoints modifiers)
   */
  mx?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical margin: margin-top and margin-bottom (including breakpoints modifiers)
   */
  my?: TypeWithMediaQueriesType<SpacingType>;
}

export interface PaddingSystemProps {
  /**
   * padding (including breakpoints modifiers)
   */
  p?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-top (including breakpoints modifiers)
   */
  pt?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-right (including breakpoints modifiers)
   */
  pr?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-bottom (including breakpoints modifiers)
   */
  pb?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-left (including breakpoints modifiers)
   */
  pl?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal padding: padding-left and padding-right (including breakpoints modifiers)
   */
  px?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical padding: padding-top and padding-bottom (including breakpoints modifiers)
   */
  py?: TypeWithMediaQueriesType<SpacingType>;
}

export interface SpacingSystemProps extends MarginSystemProps, PaddingSystemProps {}
