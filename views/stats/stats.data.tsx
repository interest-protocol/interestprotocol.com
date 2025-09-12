import { TokenIcon } from '@/components';
import { DownSVG, UpSVG } from '@/components/svg';
import { Network } from '@/constants';

import { TableRowProps } from '../../components/table/table.types';
import PoolName from './components/pool-name';
import TransactionType from './components/transaction-type';

export const TOKENS_STATS_HEADER_DATA = [
  '#',
  'Token Name',
  'Price',
  '1 hour',
  '1 day',
  'FDV',
  'Volume',
];

export const POOLS_STATS_HEADER_DATA = [
  '#',
  'Token Name',
  'Transactions',
  'TVL',
  '24h Volume',
  '7D Volume',
  '1D APR',
];

export const TRANSACTION_STATS_HEADER_DATA = [
  'Time',
  'Type',
  'USD Amount',
  'Token Amount',
  'Token Amount',
  'Wallet',
];

export const TOKEN_STATS_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Prefix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: 'MOVE',
      },
      {
        Title: '$0.9897',
      },
      {
        Prefix: (
          <UpSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#157F3D"
          />
        ),
        Title: '+0.00%',
        color: '#157F3D',
      },
      {
        Prefix: (
          <DownSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#EF4444"
          />
        ),
        Title: '-0.00%',
        color: '#EF4444',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '2',
      },
      {
        Prefix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: 'USDT.e',
      },
      {
        Title: '$0.9897',
      },
      {
        Prefix: (
          <DownSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#EF4444"
          />
        ),
        Title: '-0.00%',
        color: '#EF4444',
      },
      {
        Prefix: (
          <UpSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#157F3D"
          />
        ),
        Title: '+0.00%',
        color: '#157F3D',
      },
      {
        Title: '100',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Prefix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: 'MOVE',
      },
      {
        Title: '$0.9897',
      },
      {
        Prefix: (
          <UpSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#157F3D"
          />
        ),
        Title: '+0.00%',
        color: '#157F3D',
      },
      {
        Prefix: (
          <DownSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#EF4444"
          />
        ),
        Title: '-0.00%',
        color: '#EF4444',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '2',
      },
      {
        Prefix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: 'USDT.e',
      },
      {
        Title: '$0.9897',
      },
      {
        Prefix: (
          <DownSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#EF4444"
          />
        ),
        Title: '-0.00%',
        color: '#EF4444',
      },
      {
        Prefix: (
          <UpSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            color="#157F3D"
          />
        ),
        Title: '+0.00%',
        color: '#157F3D',
      },
      {
        Title: '100',
      },
      {
        Title: '$1.00',
      },
    ],
  },
];

export const POOL_STATS_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Title: '176.7k',
      },
      {
        Title: '-',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Title: '176.7k',
      },
      {
        Title: '-',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Title: '176.7k',
      },
      {
        Title: '-',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Title: '176.7k',
      },
      {
        Title: '-',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '1',
      },
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Title: '176.7k',
      },
      {
        Title: '-',
      },
      {
        Title: '-',
      },
      {
        Title: '$1.00',
      },
    ],
  },
];

export const TRANSACTION_STATS_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '51min ago',
      },
      {
        Content: (
          <TransactionType category="remove" tokenIn="MOVE" tokenOut="USDT.e" />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Title: '0x6beas...4af82766',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '51min ago',
      },
      {
        Content: (
          <TransactionType category="added" tokenIn="MOVE" tokenOut="USDT.e" />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Title: '0x6beas...4af82766',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '51min ago',
      },
      {
        Content: (
          <TransactionType category="remove" tokenIn="MOVE" tokenOut="USDT.e" />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Title: '0x6beas...4af82766',
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF80',
        Title: '51min ago',
      },
      {
        Content: (
          <TransactionType category="added" tokenIn="MOVE" tokenOut="USDT.e" />
        ),
      },
      {
        Title: '$0.9897',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Suffix: (
          <TokenIcon
            withBg
            size="12.05px"
            symbol="USDT.e"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: '4.93',
      },
      {
        Title: '0x6beas...4af82766',
      },
    ],
  },
];
