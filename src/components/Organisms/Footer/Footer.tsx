import React from 'react';

import { Button, Icon, Link, Logo } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef, IconNameType } from '@/tokens';

export interface FooterProps {
  introBlock: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
  elevenLabsSiteLink: ComponentPropsWithoutRef<'a'>;
  addressList: { title?: React.ReactNode; description: React.ReactNode }[];
  contactLink: { label: React.ReactNode } & ComponentPropsWithoutRef<'a'>;
  socialLinks: ({
    iconName: Extract<IconNameType, 'rss' | 'facebook' | 'twitter' | 'linkedin' | 'welcometothejungle'>;
  } & ComponentPropsWithoutRef<'a'>)[];
  languageLinks: ({
    label: React.ReactNode;
    isActive?: boolean;
  } & ComponentPropsWithoutRef<'a'>)[];
}

export const Footer: React.FC<FooterProps> = ({
  introBlock,
  elevenLabsSiteLink,
  contactLink: { label: contactLabel, ...contactLink },
  addressList,
  socialLinks,
  languageLinks,
}) => (
  <footer
    className="
      bg-primary-dark typography-text-s text-white
      md:text-left
    "
  >
    <div
      className="
        footer__intro flex flex-col items-center justify-center gap-s
        bg-primary-very-dark py-m
        md:flex-row md:items-end
      "
    >
      <p className="typography-heading-s">{introBlock.title}</p>
      <a {...elevenLabsSiteLink} className="text-white underline">
        {introBlock.description}
      </a>
    </div>
    <div
      className="
        mx-s flex flex-col items-center justify-around py-l
        md:flex-row md:py-xl
      "
    >
      <div className="mb-xl">
        <div
          className="
            mb-xxs flex items-center justify-center
            md:justify-start
          "
        >
          <Logo name="website" size="2.5em" />
        </div>
      </div>
      <div>
        <div
          className="
            flex flex-col
            md:flex-row md:gap-xl
          "
        >
          {addressList.map((currentContact, contactIndex) => (
            <div key={contactIndex} className="mb-m">
              {currentContact.title && <p className="mb-xxs-2 font-bold">{currentContact.title}</p>}
              {currentContact.description}
            </div>
          ))}
        </div>
        <div
          className="
            flex flex-wrap items-center justify-center gap-s
            md:justify-start
          "
        >
          {socialLinks.map(({ iconName, ...linkProps }, socialLinkIndex) => (
            <a
              key={socialLinkIndex}
              {...linkProps}
              target="_blank"
              {...(iconName === 'rss'
                ? {
                    'data-rss-link': true,
                  }
                : {
                    'data-social-link': iconName,
                  })}
            >
              <Icon
                name={iconName}
                size="36px"
                color={iconName === 'twitter' ? 'black' : 'white'}
                className="rounded-[6px]"
              />
            </a>
          ))}
          <Button asChild>
            <a {...contactLink}>{contactLabel}</a>
          </Button>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center border-t border-black/20 py-s">
      <div className="mr-xxs">
        <Icon size="28px" name="language" />
      </div>
      {languageLinks.map(({ label, isActive, ...linkProps }, index) => (
        <React.Fragment key={index}>
          {isActive ? (
            <span className="font-bold">{label}</span>
          ) : (
            <Link
              {...linkProps}
              data-internal-link="home"
              className={cn(`
                text-white
                hover:text-white
              `)}
            >
              {label}
            </Link>
          )}
          {languageLinks.length - 1 !== index && <div className="mx-s" />}
        </React.Fragment>
      ))}
    </div>
  </footer>
);
