import { ArgTypes } from '@storybook/csf';

import { flexBoxSystemPropsControls } from '@/constants/storybook/flexBoxSystemPropsControls';
import type { SystemProps } from '@/types';

import { colorSystemPropsControls } from './colorSystemPropsControls';
import { layoutSystemPropsControls } from './layoutSystemPropsControls';
import { spacingSystemPropsControls } from './spacingSystemPropsControls';
import { typographySystemPropsControls } from './typographySystemPropsControls';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...typographySystemPropsControls,
  ...flexBoxSystemPropsControls,
  ...colorSystemPropsControls,
  ...layoutSystemPropsControls,
};
