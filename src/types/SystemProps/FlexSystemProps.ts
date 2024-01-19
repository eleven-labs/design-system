import type { TypeWithMediaQueriesType } from '@/types';
import type { FlexDirectionType, FlexWrapType } from '@/types';

export interface FlexSystemProps {
  /**
   * flex-direction (including breakpoints modifiers)
   */
  flexDirection?: TypeWithMediaQueriesType<FlexDirectionType>;
  /**
   * Can flex items wrap onto multiple lines (including breakpoints modifiers)
   */
  flexWrap?: TypeWithMediaQueriesType<FlexWrapType>;
}
