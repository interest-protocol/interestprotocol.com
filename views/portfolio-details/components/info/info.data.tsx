import { TokenIcon } from '@/components';
import Tag from '@/components/tag';
import { Network } from '@/constants';

import { CollapseCardInfoLineProps } from '../../../components/collapse-card-info/collapse-card-info.types';

export const POSITION_OVERVIEW_DATA: ReadonlyArray<CollapseCardInfoLineProps> =
  [
    {
      info: { description: 'Your Position' },
      value: { description: '$19.72K' },
    },
    {
      info: { description: 'Position Range' },
      value: {
        description: '0.9974 USDC - 0.9976 USDT',
        Suffix: (
          <TokenIcon
            withBg
            symbol="USDT.e"
            size="0.606rem"
            network={Network.MovementMainnet}
          />
        ),
      },
    },
    {
      info: {
        description: 'Current Price',
      },
      value: {
        description: '0.9974 per USDC',
        Suffix: (
          <TokenIcon
            withBg
            rounded
            symbol="USDC.e"
            size="0.606rem"
            network={Network.MovementMainnet}
          />
        ),
      },
    },
    {
      info: {
        description: 'Leverage',
      },
      value: { description: '20Kx', type: 'success' },
    },
  ];

export const EARNINGS_FEES_DATA: ReadonlyArray<CollapseCardInfoLineProps> = [
  {
    info: {
      description: 'Pooled USDT',
      Suffix: (
        <>
          <TokenIcon
            withBg
            rounded
            symbol="USDT.e"
            size="0.606rem"
            network={Network.MovementMainnet}
          />
          <Tag type="success" label="Rewards" small />
        </>
      ),
    },
    value: {
      description: '0.4521',
    },
  },
  {
    info: {
      description: 'Pooled USDT',
      Suffix: (
        <>
          <TokenIcon
            withBg
            rounded
            symbol="MOVE"
            size="0.606rem"
            network={Network.MovementMainnet}
          />
          <Tag type="staked" label="Fees" small />
        </>
      ),
    },
    value: { description: '0.1521' },
  },
  {
    info: {
      description: 'Pooled USDT',
      Suffix: (
        <>
          <TokenIcon
            withBg
            rounded
            symbol="MOVE"
            size="0.606rem"
            network={Network.MovementMainnet}
          />
          <Tag type="staked" label="Fees" small />
        </>
      ),
    },
    value: { description: '0.8521' },
  },
];
