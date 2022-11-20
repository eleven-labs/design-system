import { ArgTypes } from '@storybook/csf';

import { colorSystemPropsControls, spacingSystemPropsControls } from '@/constants';
import type { SystemProps } from '@/types';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...colorSystemPropsControls,
};
