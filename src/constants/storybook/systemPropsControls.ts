import { ArgTypes } from '@storybook/csf';

import { colorSystemPropsControls } from './colorSystemPropsControls';
import { spacingSystemPropsControls } from './spacingSystemPropsControls';
import type { SystemProps } from '@/types';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...colorSystemPropsControls,
};
