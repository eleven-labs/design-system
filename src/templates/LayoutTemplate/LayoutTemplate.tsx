import React from 'react';

import type { FooterProps, HeaderProps } from '@/components';
import { Flex, Footer, Header } from '@/components';

export type LayoutTemplateProps = {
  header: HeaderProps;
  footer: FooterProps;
  children: React.ReactNode;
};

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ header, footer, children }) => (
  <Flex flexDirection="column" minHeight="screen">
    <Header {...header} />
    {children}
    <Footer {...footer} />
  </Flex>
);
