import React from 'react';

import type { FooterProps } from '@/components';
import { Footer } from '@/components';

export type LayoutTemplateProps = {
  header: React.ReactNode;
  footer: FooterProps;
  children: React.ReactNode;
};

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ header, footer, children }) => (
  <div className="flex min-h-(--height-screen) flex-col">
    {header}
    {children}
    <Footer {...footer} />
  </div>
);
