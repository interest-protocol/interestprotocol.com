import { Button } from '@/components/button';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '@/components/table/table.types';
import Tag from '@/components/tag';
import { noop } from '@/utils';

export const MY_POSITION_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> = [
  { description: 'My positions' },
  { description: 'Liquidity', position: 'right' },
  { description: 'Pending Yield', position: 'right' },
];

export const MY_POSITION_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '0.0997-0.998 per USDC.e',
        Prefix: <Tag label="In" type="success" />,
        Suffix: <Tag label="20.00Kx" type="staked" />,
      },
      {
        color: '#FFFFFF',
        Title: '$6.17K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Button
            p="unset"
            mx="auto"
            gap="0.2rem"
            border="none"
            variant="text"
            color="#B4C5FF"
            onClick={noop}
            nHover={{
              color: '#b4c6ffc1',
            }}
          >
            Claim
          </Button>
        ),
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '0.0997-0.998 per USDC.e',
        Prefix: <Tag label="In" type="success" />,
        Suffix: <Tag label="20.00Kx" type="staked" />,
      },
      {
        color: '#FFFFFF',
        Title: '$6.17K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Button
            p="unset"
            mx="auto"
            gap="0.2rem"
            border="none"
            variant="text"
            color="#B4C5FF"
            onClick={noop}
            nHover={{
              color: '#b4c6ffc1',
            }}
          >
            Claim
          </Button>
        ),
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '0.0997-0.998 per USDC.e',
        Prefix: <Tag label="In" type="success" />,
        Suffix: <Tag label="20.00Kx" type="staked" />,
      },
      {
        color: '#FFFFFF',
        Title: '$6.17K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Button
            p="unset"
            mx="auto"
            gap="0.2rem"
            border="none"
            variant="text"
            color="#B4C5FF"
            onClick={noop}
            nHover={{
              color: '#b4c6ffc1',
            }}
          >
            Claim
          </Button>
        ),
      },
    ],
  },
];

export const LIQUIDITY_DATA = [
  { price: 3.7, liquidity: 50 },
  { price: 3.8, liquidity: 80 },
  { price: 3.9, liquidity: 65 },
  { price: 4.0, liquidity: 100 },
  { price: 4.1, liquidity: 70 },
  { price: 4.2, liquidity: 160 },
  { price: 5.1, liquidity: 30 },
  { price: 5.5, liquidity: 50 },
];
