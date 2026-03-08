import classNames from 'classnames';
import React from 'react';

import type { AuthorCardProps } from '@/components';
import { AuthorCard } from '@/components';

export interface PostFooterProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  authors: AuthorCardProps[];
}

export const PostFooter: React.FC<PostFooterProps> = ({ title, authors, className, ...props }) => (
  <div {...props} className={classNames(className)}>
    <h2 className="mb-xxs typography-heading-m text-primary">{title}</h2>
    <div className="mt-l flex flex-col gap-s">
      {authors.map((author, authorIndex) => (
        <AuthorCard key={authorIndex} {...author} />
      ))}
    </div>
  </div>
);
