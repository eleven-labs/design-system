import type {
  AlignContentType,
  AlignItemsType,
  JustifyContentType,
  SpacingType,
  TypeWithMediaQueriesType,
} from '@/types';

export interface FlexOrGridBoxSystemProps {
  /**
   * align-items (including breakpoints modifiers)
   */
  alignItems?: AlignItemsType | TypeWithMediaQueriesType<AlignItemsType>;
  /**
   * align-content (including breakpoints modifiers)
   */
  alignContent?: AlignContentType | TypeWithMediaQueriesType<AlignContentType>;
  /**
   * Defines horizontal alignment along the main axis (including breakpoints modifiers)
   */
  justifyContent?: JustifyContentType | TypeWithMediaQueriesType<JustifyContentType>;
  /**
   * Defines gap for col and row (including breakpoints modifiers)
   */
  gap?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * Defines row gap (including breakpoints modifiers)
   */
  gapX?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * Defines col gap (including breakpoints modifiers)
   */
  gapY?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
}
