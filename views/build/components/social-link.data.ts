import { DiscordSVG, InstagramSVG, LinkedinSVG, XSVG } from '@/components/svg';

import { ISocialLinkProps } from './social-link.types';

export const SOCIAL_LINK: ReadonlyArray<ISocialLinkProps> = [
  {
    title: 'Discord',
    pathname: 'https://discord.com/invite/interestlabs',
    Icon: DiscordSVG,
  },
  {
    title: 'X',
    pathname: 'https://x.com/InterestDEX',
    Icon: XSVG,
  },
  {
    title: 'Instagram',
    pathname: 'https://www.instagram.com/interest.protocol',
    Icon: InstagramSVG,
  },
  {
    title: 'Linkedin',
    pathname: 'https://www.linkedin.com/company/interest-protocol',
    Icon: LinkedinSVG,
  },
];
