import React from 'react';
import { Heading, Text, Box } from '@/components';

export interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: '.sbdocs {display:block;padding: 0;max-width: inherit;}' }} />
    <main>
      {title && (
          <Box
              bg="blue-navy"
              color="white"
              px="l"
              py="xxl"
          >
              <Heading as="p" size="xl">{title}</Heading>
              {description && (
                  <Text
                    mt="xxs"
                    size="m"
                    dangerouslySetInnerHTML={{__html: description }}
                  />
              )}
        </Box>
      )}
      <Box mt="s" px="l">
          {children}
      </Box>
    </main>
  </>
);
