import { ISidebarSection } from './sidebar.types';

export const SIDEBAR_SECTIONS: ReadonlyArray<ISidebarSection> = [
  {
    title: 'Other Products',
    items: [
      { label: 'Memez.gg', href: 'https://memez.gg', isExternal: true },
      {
        label: 'Winter Walrus',
        href: 'https://winterwalrus.com',
        isExternal: true,
      },
      { label: 'Sui Coins', href: 'https://suicoins.com', isExternal: true },
      {
        label: 'Sui Coins Terminal',
        href: 'https://terminal.suicoins.com/',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Need Help?',
    items: [
      {
        label: 'Documentation',
        href: 'https://docs.platform.com',
        isExternal: true,
      },
      {
        label: 'Security Audits',
        href: 'https://docs.interestprotocol.com/overview/audits',
        isExternal: true,
      },
      { label: 'Brand Assets', href: '/brand-assets', isExternal: true },
    ],
  },
];
