import { Div } from '@stylin.js/elements';

import { ExternalLinkSVG } from '@/components/svg';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '@/components/table/table.types';

import { VolumeDetailItemProps } from './pool.types';

export const VOLUME_DETAILS_DATA: ReadonlyArray<VolumeDetailItemProps> = [
  {
    label: 'TVL',
    amount: '$17.34M',
  },
  {
    label: '24H Volume',
    amount: '$10.75M',
  },
  {
    label: '24H Fees',
    amount: '$42.80',
  },
  {
    label: 'Total APR',
    amount: '16.93%',
  },
];

export const TRANSACTION_POOL_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '16m ago',
      },
      {
        color: '#9CA3AF',
        Title: 'Deposit USDC and USD₮0',
      },
      {
        color: '#FFFFFF',
        Title: '$2.17M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '1.50M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Div
            mx="auto"
            width="1rem"
            height="1rem"
            color="#fff"
            transition="all 300ms ease-in-out"
            nHover={{
              color: '#B4C5FF',
            }}
          >
            <ExternalLinkSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
        ),
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '16m ago',
      },
      {
        color: '#9CA3AF',
        Title: 'Deposit USDC and USD₮0',
      },
      {
        color: '#FFFFFF',
        Title: '$2.17M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '1.50M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Div
            mx="auto"
            width="1rem"
            height="1rem"
            color="#fff"
            transition="all 300ms ease-in-out"
            nHover={{
              color: '#B4C5FF',
            }}
          >
            <ExternalLinkSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
        ),
      },
    ],
  },
  {
    cells: [
      {
        color: '#FFFFFF',
        Title: '16m ago',
      },
      {
        color: '#9CA3AF',
        Title: 'Deposit USDC and USD₮0',
      },
      {
        color: '#FFFFFF',
        Title: '$2.17M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '671.13K',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Title: '1.50M',
        position: 'right',
      },
      {
        color: '#FFFFFF',
        Content: (
          <Div
            mx="auto"
            width="1rem"
            height="1rem"
            color="#fff"
            transition="all 300ms ease-in-out"
            nHover={{
              color: '#B4C5FF',
            }}
          >
            <ExternalLinkSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
        ),
      },
    ],
  },
];

export const TRANSACTION_POOL_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> =
  [
    { description: 'Time' },
    { description: 'Type' },
    { description: 'USD', position: 'right' },
    { description: 'USDC', position: 'right' },
    { description: 'USDT', position: 'right' },
  ];
