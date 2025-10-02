import { Button } from '@/components/button';
import { HeaderInfoProps } from '@/components/header-info/header-info.types';
import { CopySVG } from '@/components/svg';

import { SegmentedControlOptionItemProps } from '../../components/segmented-control/segmented-control.types';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '../../components/table/table.types';
import { CollapseCardInfoLineProps } from '../components/collapse-card-info/collapse-card-info.types';

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

export const FARM_INFORMATION_DATA: ReadonlyArray<CollapseCardInfoLineProps> = [
  {
    info: { description: 'Staked Balance' },
    value: { description: '617,280.02' },
  },
  {
    info: { description: 'Address' },
    value: {
      description: '0x54c8...b285',
      Suffix: (
        <Button
          p="unset"
          border="none"
          color="#fff"
          variant="text"
          nHover={{
            color: '#B4C5FF',
          }}
        >
          <CopySVG maxWidth="1rem" maxHeight="1rem" width="1rem" />
        </Button>
      ),
    },
  },
];
