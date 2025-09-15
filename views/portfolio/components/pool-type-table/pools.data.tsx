import { Div } from '@stylin.js/elements';

import { ExternalLinkSVG } from '@/components/svg';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '@/components/table/table.types';
import Tag from '@/components/tag';
import Manage from '@/views/components/manage';
import PoolName from '@/views/components/pool-name';
import PriceRange from '@/views/components/price-range';

export const POOL_EMPTY_DATA: ReadonlyArray<TableRowProps> = [];

export const POOL_TYPE_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        Content: (
          <PoolName
            name="USDT.e • MOVE"
            tags={[{ type: 'earn' }, { type: 'curve' }, { type: 'stable' }]}
          />
        ),
      },
      {
        Content: <PriceRange price="0.0997-0.998 per USDC.e" />,
      },
      {
        Title: '$25,12K',
        position: 'right',
      },
      {
        Title: '0.00984Kx',
        position: 'right',
        color: '#34D399',
      },
      {
        Title: '$38.36',
        position: 'right',
      },
      {
        Content: <Manage url="portfolio/details/1" />,
      },
    ],
  },
  {
    cells: [
      {
        Content: (
          <PoolName
            name="USDT.e • MOVE"
            tags={[{ type: 'earn' }, { type: 'curve' }, { type: 'stable' }]}
          />
        ),
      },
      {
        Content: <PriceRange price="0.0997-0.998 per USDC.e" />,
      },
      {
        Title: '$25,12K',
        position: 'right',
      },
      {
        Title: '0.00984Kx',
        position: 'right',
        color: '#34D399',
      },
      {
        Title: '$38.36',
        position: 'right',
      },
      {
        Content: <Manage url="portfolio/details/1" />,
      },
    ],
  },
];

export const TRANSACTION_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        Title: '16m ago',
      },
      {
        Content: (
          <Div display="flex" justifyContent="center" width="100%">
            <Tag label="Claimed" type="success" />
          </Div>
        ),
      },
      {
        Title: '$2.17M',
        position: 'right',
      },
      {
        Title: '671.13K',
        position: 'right',
      },
      {
        Content: (
          <Div
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ExternalLinkSVG
              maxHeight="1rem"
              maxWidth="1rem"
              color="#FFF"
              width="100%"
            />
          </Div>
        ),
      },
    ],
  },
  {
    cells: [
      {
        Title: '16m ago',
      },
      {
        Content: (
          <Div display="flex" justifyContent="center" width="100%">
            <Tag label="Staked" type="staked" />
          </Div>
        ),
      },
      {
        Title: '$2.17M',
        position: 'right',
      },
      {
        Title: '671.13K',
        position: 'right',
      },
      {
        Content: (
          <Div
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ExternalLinkSVG
              maxWidth="1rem"
              maxHeight="1rem"
              width="100%"
              color="#FFF"
            />
          </Div>
        ),
      },
    ],
  },
];

export const POOL_TYPE_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> = [
  { description: 'Pool' },
  { description: 'Price Range', position: 'right' },
  { description: 'Liquidity', position: 'right' },
  { description: 'Leverage', position: 'right' },
  { description: 'Earnings', position: 'right' },
  { description: '' },
];

export const TRANSACTION_HEADER_DATA: ReadonlyArray<TableHeaderTitleProps> = [
  { description: 'Time' },
  { description: 'Action', position: 'center' },
  { description: 'Pool', position: 'right' },
  { description: 'Details', position: 'right' },
  { description: '' },
];
