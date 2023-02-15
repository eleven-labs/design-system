import type {
  AlignContentType,
  AlignItemsType,
  JustifyContentType,
  SpacingType,
  TypeWithMediaQueriesType,
} from '@/types';
import { AlignSelfType, FlexBasisType, FlexDirectionType, FlexWrapType } from '@/types';

export interface FlexBoxSystemProps {
  /**
   * flex-direction (including breakpoints modifiers)
   */
  flexDirection?: TypeWithMediaQueriesType<FlexDirectionType>;
  /**
   * Can flex items wrap onto multiple lines (including breakpoints modifiers)
   */
  flexWrap?: TypeWithMediaQueriesType<FlexWrapType>;
  /**
   * align-items (including breakpoints modifiers)
   */
  alignItems?: TypeWithMediaQueriesType<AlignItemsType>;
  /**
   * align-content (including breakpoints modifiers)
   */
  alignContent?: TypeWithMediaQueriesType<AlignContentType>;
  /**
   * Defines horizontal alignment along the main axis (including breakpoints modifiers)
   */
  justifyContent?: TypeWithMediaQueriesType<JustifyContentType>;
  /**
   * Defines a align self (including breakpoints modifiers)
   */
  alignSelf?: TypeWithMediaQueriesType<AlignSelfType>;
  /**
   * Defines gap for col and row (including breakpoints modifiers)
   */
  gap?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * Defines row gap (including breakpoints modifiers)
   */
  gapX?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * Defines col gap (including breakpoints modifiers)
   */
  gapY?: TypeWithMediaQueriesType<SpacingType>;
  /**
   * Defines a flex basis, auto or number (including breakpoints modifiers)
   */
  flexBasis?: TypeWithMediaQueriesType<FlexBasisType>;
}
