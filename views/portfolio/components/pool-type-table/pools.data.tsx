import { Div, Span } from '@stylin.js/elements';
import Link from 'next/link';
import { v4 } from 'uuid';

import { Button } from '@/components/Button';
import { ExternalLinkSVG } from '@/components/svg';
import {
  TableHeaderTitleProps,
  TableRowProps,
} from '@/components/table/table.types';
import PoolName from '@/views/stats/components/pool-name';
import { TAG_COLOR } from '@/views/stats/components/pool-name/pool-name.data';

export const POOL_TYPE_DATA: ReadonlyArray<TableRowProps> = [
  {
    cells: [
      {
        Content: (
          <PoolName name="USDT.e • MOVE" tags={['earn', 'curve', 'stable']} />
        ),
      },
      {
        Content: (
          <Div
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexWrap="wrap"
            gap={['1rem']}
            width="100%"
          >
            <Span color="#FFFFFF" textAlign="right">
              {' '}
              0.0997-0.998 per USDC.e
            </Span>
            <Button
              key={v4()}
              px="0.5rem"
              py="0.25rem"
              variant="filled"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.75rem"
              border="1px solid"
              bg={TAG_COLOR['success'].bg}
              textTransform="capitalize"
              color={TAG_COLOR['success'].color}
              borderColor={TAG_COLOR['success'].color}
              nHover={{
                borderColor: TAG_COLOR['success'].bg,
              }}
            >
              In Range
            </Button>
          </Div>
        ),
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
        Content: (
          <Div display="flex" justifyContent="flex-end" width="100%">
            <Link href="portfolio/details/1" title="pool name">
              <Span
                color="#B4C5FF"
                width="100%"
                display="block"
                fontWeight="400"
                fontFamily="Inter"
                fontSize="0.875rem"
                lineHeight="1.12rem"
              >
                Manage
              </Span>
            </Link>
          </Div>
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
      {
        Content: (
          <Div
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexWrap="wrap"
            gap={['1rem']}
            width="100%"
          >
            <Span color="#FFFFFF" textAlign="right">
              {' '}
              0.0997-0.998 per USDC.e
            </Span>
            <Button
              key={v4()}
              px="0.5rem"
              py="0.25rem"
              variant="filled"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.75rem"
              border="1px solid"
              bg={TAG_COLOR['success'].bg}
              textTransform="capitalize"
              color={TAG_COLOR['success'].color}
              borderColor={TAG_COLOR['success'].color}
              nHover={{
                borderColor: TAG_COLOR['success'].bg,
              }}
            >
              In Range
            </Button>
          </Div>
        ),
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
        Content: (
          <Div display="flex" justifyContent="flex-end" width="100%">
            <Link href="portfolio/details/1" title="pool name">
              <Span
                color="#B4C5FF"
                width="100%"
                display="block"
                fontWeight="400"
                fontFamily="Inter"
                fontSize="0.875rem"
                lineHeight="1.12rem"
              >
                Manage
              </Span>
            </Link>
          </Div>
        ),
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
            <Button
              key={v4()}
              px="0.5rem"
              py="0.25rem"
              variant="filled"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.75rem"
              border="1px solid"
              bg={TAG_COLOR['success'].bg}
              textTransform="capitalize"
              color={TAG_COLOR['success'].color}
              borderColor={TAG_COLOR['success'].color}
              nHover={{
                borderColor: TAG_COLOR['success'].bg,
              }}
            >
              Claimed
            </Button>
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
  {
    cells: [
      {
        Title: '16m ago',
      },
      {
        Content: (
          <Div display="flex" justifyContent="center" width="100%">
            <Button
              key={v4()}
              px="0.5rem"
              py="0.25rem"
              variant="filled"
              fontWeight="500"
              lineHeight="1rem"
              fontSize="0.75rem"
              border="1px solid"
              bg={TAG_COLOR['staked'].bg}
              textTransform="capitalize"
              color={TAG_COLOR['staked'].color}
              borderColor={TAG_COLOR['staked'].color}
              nHover={{
                borderColor: TAG_COLOR['staked'].bg,
              }}
            >
              Staked
            </Button>
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
