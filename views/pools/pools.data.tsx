import {
  TableHeaderTitleProps,
  TableRowProps,
} from '../../components/table/table.types';

export const VERIFIED_POOLS_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> =
  [
    { description: 'Pool' },
    { description: 'TVL', position: 'right' },
    { description: 'Volume', position: 'right' },
    { description: 'APR', position: 'right' },
    { description: '', position: 'right' },
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
