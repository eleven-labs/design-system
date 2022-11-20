import type { SpacingType, TypeWithMediaQueriesType } from '@/types';

export interface MarginSystemProps {
  /**
   * margin (including breakpoints modifiers)
   */
  m?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-top (including breakpoints modifiers)
   */
  mt?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-right (including breakpoints modifiers)
   */
  mr?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-bottom (including breakpoints modifiers)
   */
  mb?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-left (including breakpoints modifiers)
   */
  ml?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal margin: margin-left and margin-right (including breakpoints modifiers)
   */
  mx?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical margin: margin-top and margin-bottom (including breakpoints modifiers)
   */
  my?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
}

export interface PaddingSystemProps {
  /**
   * padding (including breakpoints modifiers)
   */
  p?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-top (including breakpoints modifiers)
   */
  pt?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-right (including breakpoints modifiers)
   */
  pr?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-bottom (including breakpoints modifiers)
   */
  pb?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-left (including breakpoints modifiers)
   */
  pl?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal padding: padding-left and padding-right (including breakpoints modifiers)
   */
  px?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical padding: padding-top and padding-bottom (including breakpoints modifiers)
   */
  py?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
}

export interface SpacingSystemProps extends MarginSystemProps, PaddingSystemProps {}
