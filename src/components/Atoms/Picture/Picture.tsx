import React from 'react';

import { Box } from '@/components';
import type { SpacingSystemProps } from '@/types';

export interface PictureProps extends SpacingSystemProps {
  img: React.ComponentPropsWithoutRef<'img'>;
  sources?: React.ComponentPropsWithoutRef<'source'>[];
}

export const Picture: React.FC<PictureProps> = ({ img, sources, ...props }) => (
  <Box as="picture" display="block" {...props}>
    {sources?.map((source, key) => <source key={key} {...source} />)}
    <img {...img} alt={img.alt} />
  </Box>
);
