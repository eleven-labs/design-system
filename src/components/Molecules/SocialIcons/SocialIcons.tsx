import * as React from 'react';

import { Flex, FlexProps, Icons, Link, LinkProps } from '@/components';

export const enum SocialNameType {
  RSS = 'rss',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  WELCOME_TO_JUNGLE = 'welcome-to-jungle',
}

export interface SocialIconsProps extends FlexProps {
  links: Omit<LinkProps, 'children'> & { socialName: SocialNameType }[];
}

const getIconBySocialName = (socialName: SocialNameType): JSX.Element => {
  const iconSvgProps: React.SVGProps<SVGSVGElement> = {
    height: '32px',
    width: '32px',
  };
  switch (socialName) {
    case SocialNameType.RSS:
      return <Icons.Rss {...iconSvgProps} color="#FFF" />;
    case SocialNameType.FACEBOOK:
      return <Icons.Facebook {...iconSvgProps} />;
    case SocialNameType.TWITTER:
      return <Icons.Twitter {...iconSvgProps} />;
    case SocialNameType.LINKEDIN:
      return <Icons.Linkedin {...iconSvgProps} />;
    case SocialNameType.WELCOME_TO_JUNGLE:
      return <Icons.Welcometothejungle {...iconSvgProps} />;
  }
};

export const SocialIcons: React.FC<SocialIconsProps> = ({ links, ...flexProps }) => (
  <Flex {...flexProps} gapY={'s'}>
    {links.map(({ socialName, ...linkProps }) => (
      <Link key={socialName} {...linkProps}>
        {getIconBySocialName(socialName)}
      </Link>
    ))}
  </Flex>
);
