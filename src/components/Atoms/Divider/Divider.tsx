import React from 'react';

import { Box } from '@/components';
import type { ComponentPropsWithoutRef, MarginSystemProps } from '@/types';

import './Divider.scss';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'>, MarginSystemProps {}

export const Divider: React.FC<DividerProps> = (props) => <Box {...props} as="hr" className="divider" />;
