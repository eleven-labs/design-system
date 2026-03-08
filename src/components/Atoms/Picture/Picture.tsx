import React from 'react';

import { cn } from '@/helpers';

export interface PictureProps extends React.ComponentPropsWithoutRef<'picture'> {
  img: React.ComponentPropsWithoutRef<'img'> & { fetchPriority?: 'high' | 'low' | 'auto' };
  sources?: React.ComponentPropsWithoutRef<'source'>[];
}

export const Picture: React.FC<PictureProps> = ({ img, sources, className, ...props }) => {
  const { fetchPriority, ...imgProps } = img;
  const fetchPriorityProps = fetchPriority ? ({ fetchpriority: fetchPriority } as Record<string, string>) : {};

  return (
    <picture {...props} className={cn('block', className)}>
      {sources?.map((source, key) => (
        <source key={key} {...source} />
      ))}
      <img {...imgProps} {...fetchPriorityProps} alt={img.alt} />
    </picture>
  );
};
