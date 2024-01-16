import { Canvas } from '@storybook/addon-docs';
import React from 'react';

import { Box, Heading, Text } from '@/components';

export interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '.sbdocs-wrapper {padding: 0;} .docs-story > div {margin: 0; padding: 0;} .sbdocs-content {max-width: inherit;} .sbdocs-preview {margin: 0; border: none;border-radius: 0;box-shadow: none;} .docs-story > div:nth-child(2) {display: none;} .docs-story .innerZoomElementWrapper > div {max-width: inherit; border-width:0px !important;}',
      }}
    />
    <Canvas>
      <main>
        {title && (
          <Box bg="primary" color="white" px="l" py="xxl">
            <Heading as="p" size="xl">
              {title}
            </Heading>
            {description && <Text mt="xxs" size="m" dangerouslySetInnerHTML={{ __html: description }} />}
          </Box>
        )}
        <Box mt="s" px="l">
          {children}
        </Box>
      </main>
    </Canvas>
  </>
);
