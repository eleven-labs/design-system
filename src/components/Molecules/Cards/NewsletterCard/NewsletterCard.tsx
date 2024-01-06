import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex, Heading, Text } from '@/components';

import './NewsletterCard.scss';

export interface NewsletterCardProps extends Omit<FlexProps, 'title'> {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({ title, description, children, ...props }) => (
  <Flex {...props} flexDirection="column" p="l" bg="navy" color="white" className="newsletter-card">
    <Box className="newsletter-card__intro">
      <Heading as="p" size="l" color="yellow" dangerouslySetInnerHTML={{ __html: title }} />
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="5" viewBox="0 0 58 5" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 4.41476L4.16476 1.25L1 4.41476Z" fill="white" />
        <path d="M1 4.41476L4.16476 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.50304 4.41476L7.6678 1.25L4.50304 4.41476Z" fill="white" />
        <path d="M4.50304 4.41476L7.6678 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00607 4.41476L11.1708 1.25L8.00607 4.41476Z" fill="white" />
        <path d="M8.00607 4.41476L11.1708 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5091 4.41476L14.6739 1.25L11.5091 4.41476Z" fill="white" />
        <path d="M11.5091 4.41476L14.6739 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0121 4.41476L18.1769 1.25L15.0121 4.41476Z" fill="white" />
        <path d="M15.0121 4.41476L18.1769 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.5152 4.41476L21.6799 1.25L18.5152 4.41476Z" fill="white" />
        <path d="M18.5152 4.41476L21.6799 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M22.0182 4.41476L25.183 1.25L22.0182 4.41476Z" fill="white" />
        <path d="M22.0182 4.41476L25.183 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25.5213 4.41476L28.686 1.25L25.5213 4.41476Z" fill="white" />
        <path d="M25.5213 4.41476L28.686 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M29.0243 4.41476L32.1891 1.25L29.0243 4.41476Z" fill="white" />
        <path d="M29.0243 4.41476L32.1891 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M32.5273 4.41476L35.6921 1.25L32.5273 4.41476Z" fill="white" />
        <path d="M32.5273 4.41476L35.6921 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M36.0304 4.41476L39.1951 1.25L36.0304 4.41476Z" fill="white" />
        <path d="M36.0304 4.41476L39.1951 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M39.5334 4.41476L42.6982 1.25L39.5334 4.41476Z" fill="white" />
        <path d="M39.5334 4.41476L42.6982 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M43.0364 4.41476L46.2012 1.25L43.0364 4.41476Z" fill="white" />
        <path d="M43.0364 4.41476L46.2012 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M46.5395 4.41476L49.7042 1.25L46.5395 4.41476Z" fill="white" />
        <path d="M46.5395 4.41476L49.7042 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M50.0425 4.41476L53.2073 1.25L50.0425 4.41476Z" fill="white" />
        <path d="M50.0425 4.41476L53.2073 1.25" stroke="#F8FA9B" strokeLinecap="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M53.5455 4.41476L56.7103 1.25L53.5455 4.41476Z" fill="white" />
        <path d="M53.5455 4.41476L56.7103 1.25" stroke="#F8FA9B" strokeLinecap="round" />
      </svg>
      <Text mt="m" dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
    <Box>{children}</Box>
  </Flex>
);
