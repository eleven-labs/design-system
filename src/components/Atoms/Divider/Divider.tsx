import React from 'react';

import { Box } from '@/components';
import type { MarginSystemProps } from '@/types';

import './Divider.scss';

export interface DividerProps extends React.ComponentPropsWithoutRef<'hr'>, MarginSystemProps {}

export const Divider: React.FC<DividerProps> = (props) => <Box {...props} as="hr" className="divider" />;
