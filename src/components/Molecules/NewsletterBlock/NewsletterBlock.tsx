import './NewsletterBlock.scss';

import * as React from 'react';

import { BoxProps, Button, ButtonProps, Flex, FlexItem, Heading, Text } from '@/components';

export interface NewsletterBlockProps extends BoxProps {
  title: string;
  description: string;
  subscribeButtonProps: Omit<ButtonProps, 'children'> & { label: string };
}

export const NewsletterBlock: React.FC<NewsletterBlockProps> = ({
  title,
  description,
  subscribeButtonProps: { label: subscribeButtonLabel, ...subscribeButtonProps },
  ...nativeProps
}) => (
  <Flex
    {...nativeProps}
    p={{ xs: 'l' }}
    direction={{ xs: 'column', md: 'row' }}
    justifyContent="center"
    alignItems="center"
    textAlign={{ xs: 'center', md: 'left' }}
    className="newsletter-block"
  >
    <img src="/imgs/newsletter.png" alt="" className="newsletter-block__img" />
    <FlexItem>
      <Text size="s" mt={{ xs: 's', md: '0' }}>
        {title}
      </Text>
      <Heading size="l">{description}</Heading>
      <Button {...subscribeButtonProps} variant="form" mt={{ xs: 'm', md: 'l' }}>
        {subscribeButtonLabel}
      </Button>
    </FlexItem>
  </Flex>
);
