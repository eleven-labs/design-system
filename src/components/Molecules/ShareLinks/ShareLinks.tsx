import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

import { Flex, Icon, Text } from '@/components';
import { useCopyText } from '@/hooks/useCopyToClipboard';
import type { MarginSystemProps } from '@/types';

import './ShareLinks.scss';

export interface ShareLinksProps extends MarginSystemProps {
  urlToShare: string;
  shares: {
    copyLink?: boolean;
    twitter?: boolean;
    facebook?: boolean;
    linkedIn?: boolean;
    reddit?: boolean;
  };
  copiedLabel?: string;
}

export const ShareLinks: React.FC<ShareLinksProps> = ({ copiedLabel, urlToShare, shares, ...flexProps }) => {
  const [copy, copied] = useCopyText(urlToShare, 2000);

  return (
    <Flex {...flexProps} alignItems="center" gap="xs" className="share-links">
      {shares.copyLink &&
        copiedLabel &&
        (copied ? (
          <Text size="xs" fontWeight="medium">
            {copiedLabel}
          </Text>
        ) : (
          <Icon
            name="link"
            size="26"
            color="black"
            className="share-links__copy-icon"
            onClick={copy}
            tabIndex={0}
            role="button"
            data-button="copyLink"
          />
        ))}
      {shares.twitter && (
        <TwitterShareButton url={urlToShare} data-share-link data-sharing="twitter">
          <Icon name="twitter" size={26} className="share-links__social-media-icon" />
        </TwitterShareButton>
      )}
      {shares.facebook && (
        <FacebookShareButton url={urlToShare} data-share-link data-sharing="facebook">
          <Icon name="facebook" size={26} className="share-links__social-media-icon" />
        </FacebookShareButton>
      )}
      {shares.linkedIn && (
        <LinkedinShareButton url={urlToShare} data-share-link data-sharing="linkedIn">
          <Icon name="linkedin" size={26} className="share-links__social-media-icon" />
        </LinkedinShareButton>
      )}
      {shares.reddit && (
        <RedditShareButton url={urlToShare} data-share-link data-sharing="reddit">
          <RedditIcon size={26} className="share-links__social-media-icon" />
        </RedditShareButton>
      )}
    </Flex>
  );
};
