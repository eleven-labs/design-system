import './Blockquote.scss';

import classNames from 'classnames';
import React from 'react';

import { Box } from '@/components';
import { AsProps, ColorSystemProps, MarginSystemProps } from '@/types';

export type BlockquoteProps = AsProps<'blockquote'> & MarginSystemProps & Pick<ColorSystemProps, 'bg'>;

export const Blockquote: React.FC<BlockquoteProps> = (props) => (
  <Box {...(props as AsProps)} as="blockquote" className={classNames('blockquote', props.className)} />
);
