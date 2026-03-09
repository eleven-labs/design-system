import classNames from 'classnames';
import React from 'react';

import type { ComponentPropsWithoutRef } from '@/tokens';

export type LayoutContentWithSidebarProps = Omit<ComponentPropsWithoutRef<'main'>, 'content'> & {
  content: React.ReactNode;
  sidebar: React.ReactNode;
};

export const LayoutContentWithSidebar: React.FC<LayoutContentWithSidebarProps> = ({
  content,
  sidebar,
  className,
  ...props
}) => (
  <div
    {...props}
    className={classNames(
      'container-content mx-s my-xl flex min-w-0 flex-col gap-xl md:mx-auto md:flex-row',
      className
    )}
  >
    <main
      className="
        flex min-w-0 flex-1 flex-col gap-xl
        md:w-[calc(70%-var(--spacing-xl))]
      "
    >
      {content}
    </main>
    <aside
      className="
        flex min-w-0 flex-col gap-xl
        md:w-[30%]
      "
    >
      {sidebar}
    </aside>
  </div>
);
