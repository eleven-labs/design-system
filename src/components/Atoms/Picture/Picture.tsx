import React from 'react';

export interface PictureProps {
  img: React.ComponentPropsWithoutRef<'img'>;
  sources?: React.ComponentPropsWithoutRef<'source'>[];
}

export const Picture: React.FC<PictureProps> = ({ img, sources }) => (
  <picture>
    {sources?.map((source, key) => <source key={key} {...source} />)}
    <img {...img} alt={img.alt} />
  </picture>
);
