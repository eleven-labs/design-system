import React from 'react';

import type { FooterProps } from '@/components';
import { Flex, Footer } from '@/components';

export type LayoutTemplateProps = {
  header: React.ReactNode;
  footer: FooterProps;
  children: React.ReactNode;
};

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ header, footer, children }) => (
  <Flex flexDirection="column" minHeight="screen">
    {header}
    {children}
    <Footer {...footer} />
  </Flex>
);
