import type { ColorSystemProps } from './ColorSystemProps';
import type { FlexBoxSystemProps } from './FlexBoxSystemProps';
import type { HiddenSystemProps } from './HiddenSystemProps';
import type { LayoutSystemProps } from './LayoutSystemProps';
import type { SpacingSystemProps } from './SpacingSystemProps';
import type { TypographySystemProps } from './TypographySystemProps';

export interface SystemProps
  extends SpacingSystemProps,
    ColorSystemProps,
    TypographySystemProps,
    LayoutSystemProps,
    FlexBoxSystemProps,
    HiddenSystemProps {}
