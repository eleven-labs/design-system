import type { AlignSelfType, TypeWithMediaQueriesType } from '@/types';

export interface FlexOrGridBoxItemSystemProps {
  /**
   * Defines a align self (including breakpoints modifiers)
   */
  align?: AlignSelfType | TypeWithMediaQueriesType<AlignSelfType>;
}
