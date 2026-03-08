import React from 'react';

import { Divider } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export const SummaryCardVariant = ['primary', 'secondary'] as const;
export type SummaryCardVariantType = (typeof SummaryCardVariant)[number];

export interface SummaryCardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: SummaryCardVariantType;
  title: string;
  sectionActive?: string;
  sections: ({ name: string; label: string } & ComponentPropsWithoutRef<'a'>)[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  variant = 'primary',
  title,
  sectionActive,
  sections,
  className,
  ...props
}) => {
  const activeIndex = sections.findIndex(({ name }) => name === sectionActive);

  return (
    <div {...props} className={cn('rounded-xs bg-white p-m', className)}>
      <p className="typography-heading-m text-primary">{title}</p>
      <div className="mt-m flex flex-col">
        {sections.map(({ name, label, ...link }, index) => {
          const isActive = sectionActive === name;
          const isAfterActive = activeIndex !== -1 && index > activeIndex;

          return (
            <React.Fragment key={index}>
              <a
                className={cn(
                  'flex gap-s font-semibold',
                  variant === 'primary' && 'text-black',
                  variant === 'secondary' && !isActive && !isAfterActive && 'text-grey',
                  variant === 'secondary' && isActive && 'text-primary',
                  variant === 'secondary' && isAfterActive && 'text-black'
                )}
                {...link}
              >
                <span className={variant === 'primary' ? 'text-info' : undefined}>
                  {variant === 'secondary' ? index + 1 : '•'}
                </span>
                <span>{label}</span>
              </a>
              {index !== sections.length - 1 && <Divider className="my-xxs" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
