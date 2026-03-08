import classNames from 'classnames';
import React from 'react';

import { Icon } from '@/components';

export const newsletterCardVariant = ['horizontal', 'vertical'] as const;
export type NewsletterCardVariantType = (typeof newsletterCardVariant)[number];

export interface NewsletterCardProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  variant?: NewsletterCardVariantType;
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title,
  description,
  children,
  variant = 'vertical',
  className,
  ...props
}) => (
  <div
    {...props}
    className={classNames(
      'bg-primary bg-[url(/imgs/wave-background.png)] bg-right-bottom bg-no-repeat p-l text-white',
      'rounded-xs',
      {
        'flex flex-col': variant === 'vertical',
        'flex flex-col md:flex-row': variant === 'horizontal',
      },
      className
    )}
  >
    <div
      className={classNames('flex-1', {
        'mb-xl border-b border-black/20 pb-xl': variant === 'vertical',
        'mb-xl border-b border-black/20 pb-xl md:mb-0 md:mr-xl md:border-b-0 md:border-r md:pb-0 md:pr-xl':
          variant === 'horizontal',
      })}
    >
      <p className="typography-heading-m text-accent">{title}</p>
      <Icon name="underline" color="accent" width="56px" />
      <p className="mt-m">{description}</p>
    </div>
    <div className="flex-2">{children}</div>
  </div>
);
