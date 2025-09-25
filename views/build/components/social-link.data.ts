import { FacebookSVG, InstagramSVG, LinkedinSVG, XSVG } from '@/components/svg';

import { ISocialLinkProps } from './social-link.types';

export const SOCIAL_LINK: ReadonlyArray<ISocialLinkProps> = [
  {
    title: 'Facebook',
    pathname: 'https://x.com/InterestDEX',
    Icon: FacebookSVG,
  },
  {
    title: 'X',
    pathname: 'https://x.com/InterestDEX',
    Icon: XSVG,
  },
  {
    title: 'Instagram',
    pathname: 'https://x.com/InterestDEX',
    Icon: InstagramSVG,
  },
  {
    title: 'Linkedin',
    pathname: 'https://discord.com/invite/interestprotocol',
    Icon: LinkedinSVG,
  },
];
