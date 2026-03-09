import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { CloseButton } from '@/components';
import { Icon } from '@/components';
import { cn } from '@/helpers';

type SearchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false };
type SearchButtonAsChildProps = { asChild: true; children: React.ReactElement };

export interface SearchFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  input: React.InputHTMLAttributes<HTMLInputElement>;
  buttonSearch: SearchButtonProps | SearchButtonAsChildProps;
  buttonClose?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const SearchField = React.forwardRef<HTMLDivElement, SearchFieldProps>(
  ({ input, buttonClose = {}, buttonSearch, className, ...props }, ref) => {
    const searchButton = buttonSearch.asChild ? (
      <Slot className="search-field__button-action">{buttonSearch.children}</Slot>
    ) : (
      <button {...buttonSearch} className={cn('border-none bg-transparent', buttonSearch.className)}>
        <Icon name="search" color="primary" size="2.5rem" className="mx-xs" />
      </button>
    );

    return (
      <div {...props} className={cn('relative', className)} ref={ref}>
        <input
          {...input}
          className={cn(
            `
              w-full rounded-[22px] border-2 border-transparent bg-secondary
              p-xs pr-[calc(var(--spacing-xxl)+var(--spacing-xl))]
              [font-family:var(--font-family-base)] typography-text-xs
              leading-(--line-height-large) text-primary
              placeholder:text-primary
              focus-visible:border-primary
              focus-visible:shadow-[0_4px_30px_rgb(0_0_0/6%)]
              focus-visible:outline-none
            `,
            input.className
          )}
        />
        <div
          className="
            absolute top-0 right-0 flex h-full items-center justify-center
            py-xxs
          "
        >
          {Boolean(input.value) && (
            <CloseButton {...buttonClose} variant="secondary" className="border-none bg-transparent" />
          )}
          {searchButton}
        </div>
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';
