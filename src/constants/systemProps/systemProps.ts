import { SystemProps } from '@/types';

import { colorSystemProps } from './colorSystemProps';
import { flexBoxSystemProps } from './flexBoxSystemProps';
import { hiddenSystemProps } from './hiddenSystemProps';
import { layoutSystemProps } from './layoutSystemProps';
import { spacingSystemProps } from './spacingSystemProps';
import { typographySystemProps } from './typographySystemProps';

export const systemProps: Record<keyof SystemProps, readonly string[]> = {
  ...spacingSystemProps,
  ...flexBoxSystemProps,
  ...colorSystemProps,
  ...typographySystemProps,
  ...layoutSystemProps,
  ...hiddenSystemProps,
};
