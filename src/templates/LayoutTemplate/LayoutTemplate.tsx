import React from 'react';

import { Footer, FooterProps, Header, HeaderProps } from '@/components';

export interface LayoutTemplateProps {
  headerProps: HeaderProps;
  footerProps: FooterProps;
  children: React.ReactNode;
}

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ headerProps, footerProps, children }) => (
  <>
    <Header {...headerProps} />
    {children}
    <Footer {...footerProps} />
  </>
);
