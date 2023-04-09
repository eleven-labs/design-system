import React from 'react';
import { AsProps, ColorSystemProps, MarginSystemProps } from '../../../types';
export type BlockquoteProps = AsProps<'blockquote'> & MarginSystemProps & Pick<ColorSystemProps, 'bg'>;
export declare const Blockquote: React.FC<BlockquoteProps>;
