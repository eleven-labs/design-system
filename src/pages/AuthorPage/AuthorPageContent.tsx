import React from 'react';

import { Divider, Icon, Link } from '@/components';

export type SocialNetworkName = 'github' | 'twitter' | 'linkedin';

export type AuthorPageContentProps = {
  author: {
    username: string;
    name: string;
    avatarImageUrl?: string;
    content: React.ReactNode;
    socialNetworks?: {
      name: SocialNetworkName;
      url: string;
      username: string;
    }[];
  };
  title: React.ReactNode;
  postCardList: React.ReactNode;
};

export const AuthorPageContent: React.FC<AuthorPageContentProps> = ({ author, title, postCardList }) => (
  <>
    <div
      className="
        flex flex-col items-center justify-center text-center
        md:flex-row md:text-left
      "
    >
      {author.avatarImageUrl ? (
        <img src={author.avatarImageUrl} alt={author.name} className="size-[120px] rounded-full object-cover" />
      ) : (
        <div
          className="size-[120px] rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/imgs/astronaut.png')" }}
        />
      )}
      <div className="mt-s ml-s">
        <p className="typography-text-m font-medium text-info">{author.name}</p>
        <div>{author.content}</div>
        {author.socialNetworks && (
          <div
            className="
              author-page__social_networks mt-s flex flex-col items-center
              sm:flex-row
              md:justify-start
            "
          >
            {author.socialNetworks.map((socialNetwork, index) => (
              <React.Fragment key={socialNetwork.name}>
                <div className="flex gap-1">
                  <Icon name={socialNetwork.name} size="24px" />{' '}
                  <Link href={socialNetwork.url} target="_blank">
                    {socialNetwork.username}
                  </Link>
                </div>
                {index !== (author.socialNetworks?.length ?? 0) - 1 && <span className="mx-xxs">•</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
    <Divider />
    <p className="typography-text-m font-medium">{title}</p>
    {postCardList}
  </>
);
