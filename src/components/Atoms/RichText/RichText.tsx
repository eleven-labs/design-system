import parse, * as HTMLReactParser from 'html-react-parser';
import React from 'react';

import { getReminderByDomNode, getSyntaxHighlighterByDomNode } from '@/helpers/richTextHelper';

import { Box, BoxProps, Heading, HeadingProps, Link, Text } from '..';

export interface RichTextProps extends BoxProps {
  content: string;
}

const htmlReactParserOptions: HTMLReactParser.HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof HTMLReactParser.Element) {
      if (domNode.attribs?.class?.match('admonition')) {
        return getReminderByDomNode(domNode, htmlReactParserOptions);
      }

      if (domNode.tagName === 'pre') {
        return getSyntaxHighlighterByDomNode(domNode, htmlReactParserOptions);
      }

      const children = HTMLReactParser.domToReact(domNode.children, htmlReactParserOptions);
      const props = HTMLReactParser.attributesToProps(domNode.attribs);

      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(domNode.tagName)) {
        let headingProps: HeadingProps = {};
        switch (domNode.tagName) {
          case 'h2':
            headingProps = {
              size: 'l',
              mt: { xs: 'l', md: 'xl' },
              mb: { xs: 'xxs', md: 'l' },
            };
            break;
          case 'h3':
            headingProps = {
              size: 'm',
              mt: { xs: 'xs', md: 'l' },
              mb: { xs: 'xxs', md: 's' },
            };
            break;
          case 'h4':
            headingProps = {
              size: 's',
              mt: { xs: 'xs', md: 'l' },
              mb: { xs: 'xxs', md: 's' },
            };
            break;
        }
        return (
          <Heading {...headingProps} as={domNode.tagName as React.ElementType}>
            {children}
          </Heading>
        );
      }

      if (['p', 'li'].includes(domNode.tagName)) {
        return (
          <Text as={domNode.tagName as React.ElementType} size="s" mb={{ xs: 'xxs' }}>
            {children}
          </Text>
        );
      }

      if (domNode.tagName === 'a') {
        return <Link {...props}>{children}</Link>;
      }

      if (domNode.tagName === 'img') {
        return React.createElement('img', {
          ...props,
          style: {
            display: 'block',
            maxWidth: '100%',
            margin: 'var(--spacing-xs) auto',
          },
        });
      }
    }
  },
};

export const RichText: React.FC<RichTextProps> = ({ content, ...nativeProps }) => (
  <Box {...nativeProps} className="rich-text">
    {parse(content, htmlReactParserOptions)}
  </Box>
);
