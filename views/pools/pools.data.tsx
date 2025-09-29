import { Span } from '@stylin.js/elements';
import Link from 'next/link';

import { HeaderInfoProps } from '@/components/header-info/header-info.types';
import PoolName from '@/components/pool-name';
import { Routes, RoutesEnum } from '@/constants';

import { SegmentedControlOptionItemProps } from '../../components/segmented-control/segmented-control.types';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '../../components/table/table.types';
import OverviewTooltip from './components/overview-tooltip';

export const SEGMENTED_CONTROL_DATA: ReadonlyArray<SegmentedControlOptionItemProps> =
  [
    {
      label: '1Y',
      value: '1Y',
    },
    {
      label: '24H',
      value: '24H',
    },
    {
      label: '7D',
      value: '7D',
    },
  ];

export const HEADER_DATA: ReadonlyArray<HeaderInfoProps> = [
  {
    title: 'TVL',
    value: 12500000,
    symbol: 'USD',
    date: 'May 15, 2025',
  },
  {
    title: 'Total Volume',
    value: 12500000,
    symbol: 'USD',
    date: 'May 15, 2025',
  },
  {
    title: 'Total Fees',
    value: 450000,
    symbol: 'USD',
    date: 'May 15, 2025',
  },
];

export const VERIFIED_POOLS_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> =
  [
    { description: 'Pool' },
    { description: 'TVL' },
    { description: 'Volume' },
    { description: 'APR' },
    { description: '' },
    { description: '' },
  ];

export const FEATURES_POOLS_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> =
  [
    { description: 'Pool' },
    { description: 'TVL' },
    { description: 'Volume' },
    { description: 'APR' },
    { description: '' },
    { description: '' },
  ];

export const VERIFIED_POOLS_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      { Title: '$1.53M' },
      { Title: '$234.06K' },
      { Title: '2%' },
      { Content: <OverviewTooltip /> },
      {
        Content: (
          <Link href={Routes[RoutesEnum.PoolDetails]} target="_self">
            <Span
              width="100%"
              color="#B4C5FF"
              display="block"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              Add Liquidity
            </Span>
          </Link>
        ),
      },
    ],
  },
  {
    cells: [
      {
        Content: (
          <PoolName
            name="USDT.e • MOVE (v3)"
            tags={['earn', 'curve', 'stable']}
          />
        ),
      },
      { Title: '$1.53M' },
      { Title: '$234.06K' },
      { Title: '2%' },
      { Content: <OverviewTooltip /> },
      {
        Content: (
          <Link href={`${Routes[RoutesEnum.PoolDetails]}/v3`} target="_self">
            <Span
              width="100%"
              color="#B4C5FF"
              display="block"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              Add Liquidity
            </Span>
          </Link>
        ),
      },
    ],
  },
  {
    cells: [
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      { Title: '$1.53M' },
      { Title: '$234.06K' },
      { Title: '2%' },
      { Content: <OverviewTooltip /> },
      {
        Content: (
          <Link href={Routes[RoutesEnum.PoolDetails]} target="_self">
            <Span
              width="100%"
              color="#B4C5FF"
              display="block"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              Add Liquidity
            </Span>
          </Link>
        ),
      },
    ],
  },
];

export const FEATURES_POOLS_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      { Title: '1', color: '#FFFFFF80' },
      { Title: '$1.53M' },
      { Title: '$234.06K' },
      { Title: '2%', color: '#157F3D' },
      { Title: 'Overview', color: '#B4C5FF' },
      { Title: 'Add Liquidity', color: '#B4C5FF' },
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
