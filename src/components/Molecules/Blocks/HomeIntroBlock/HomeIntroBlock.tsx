import React from 'react';

import { Button } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface HomeIntroBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  intro: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  elevenLabsLink: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const HomeIntroBlock: React.FC<HomeIntroBlockProps> = ({
  intro,
  title,
  description,
  elevenLabsLink: { label: elevelLabsLinkLabel, ...elevenLabsLink },
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      `
        bg-white
        md:flex
      `,
      className
    )}
  >
    <div
      className="
        mx-auto flex max-w-[90vw] flex-1 flex-col items-baseline
        md:ml-[5vw] md:max-w-none md:py-xl
      "
    >
      <p className="typography-heading-s text-info uppercase">{intro}</p>
      <h1 className="mt-m typography-heading-xl text-primary">{title}</h1>
      <p className="mt-l">{description}</p>
      <Button asChild className="mt-l">
        <a {...elevenLabsLink}>{elevelLabsLinkLabel}</a>
      </Button>
    </div>
    <div
      className="
        hidden flex-1 bg-contain bg-top-right bg-no-repeat
        md:block
      "
      style={{ backgroundImage: "url('/imgs/home-intro-block.png')" }}
    />
  </div>
);
