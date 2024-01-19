import type { TypeWithMediaQueriesType } from '@/types';
import type { AlignSelfType } from '@/types';

export interface FlexOrGridItemSystemProps {
  /**
   * Defines a align self (including breakpoints modifiers)
   */
  alignSelf?: TypeWithMediaQueriesType<AlignSelfType>;
}
