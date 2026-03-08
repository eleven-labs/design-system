import React from 'react';

import type { NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import { NewsletterCard } from '@/components/Molecules/Cards/NewsletterCard';
import { AuthorPageContent } from '@/pages';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import type { AuthorPageContentProps } from './AuthorPageContent';

export interface AuthorPageProps extends AuthorPageContentProps {
  newsletterCard: NewsletterCardProps;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({ newsletterCard, ...authorPageContent }) => (
  <LayoutContentWithSidebar
    className="[&_svg.icon]:rounded-[6px]"
    content={<AuthorPageContent {...authorPageContent} />}
    sidebar={<NewsletterCard {...newsletterCard} />}
  />
);
