import { Div, P } from '@stylin.js/elements';

import { TokenIcon } from '@/components';
import { Button } from '@/components/Button';
import { DownSVG, UpSVG } from '@/components/svg';
import { Network } from '@/constants';

import { TableRowProps } from './table/table.types';

export const TAG_COLOR: Record<string, Record<'color' | 'bg', string>> = {
  curve: {
    bg: '#8888FF33',
    color: '#8888FF',
  },
  stable: {
    bg: '#FFAAAA33',
    color: '#FFAAAA',
  },
  earn: {
    bg: '#157F3D33',
    color: '#157F3D',
  },
};

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
            size="13px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title:
          'MOVE fsdsfsdfsdf fsdsfsdfsdf fsdsfsdfsdf fsdsfsdfsdf fsdsfsdfsdf fsdsfsdfsdf fsdsfsdfsdf',
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
            size="13px"
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
            size="13px"
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
            size="13px"
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
            size="13px"
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
            size="13px"
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
            size="13px"
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
            size="13px"
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
        Prefix: (
          <TokenIcon
            withBg
            size="20px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: (
          <Div>
            <P
              color="#fff"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              USDT.e • MOVE
            </P>
            <Div display="flex" gap="0.25rem" mt="0.25rem">
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['earn'].bg}
                color={TAG_COLOR['earn'].color}
                borderColor={TAG_COLOR['earn'].color}
                nHover={{
                  borderColor: TAG_COLOR['earn'].bg,
                  fontWeight: 'bold',
                }}
              >
                Earn
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['curve'].bg}
                color={TAG_COLOR['curve'].color}
                borderColor={TAG_COLOR['curve'].color}
                nHover={{
                  borderColor: TAG_COLOR['curve'].bg,
                  fontWeight: 'bold',
                }}
              >
                Curve
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['stable'].bg}
                color={TAG_COLOR['stable'].color}
                borderColor={TAG_COLOR['stable'].color}
                nHover={{
                  borderColor: TAG_COLOR['stable'].bg,
                  fontWeight: 'bold',
                }}
              >
                Stable
              </Button>
            </Div>
          </Div>
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
        Prefix: (
          <TokenIcon
            withBg
            size="20px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: (
          <Div>
            <P
              color="#fff"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              USDT.e • MOVE
            </P>
            <Div display="flex" gap="0.25rem" mt="0.25rem">
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['earn'].bg}
                color={TAG_COLOR['earn'].color}
                borderColor={TAG_COLOR['earn'].color}
                nHover={{
                  borderColor: TAG_COLOR['earn'].bg,
                  fontWeight: 'bold',
                }}
              >
                Earn
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['curve'].bg}
                color={TAG_COLOR['curve'].color}
                borderColor={TAG_COLOR['curve'].color}
                nHover={{
                  borderColor: TAG_COLOR['curve'].bg,
                  fontWeight: 'bold',
                }}
              >
                Curve
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['stable'].bg}
                color={TAG_COLOR['stable'].color}
                borderColor={TAG_COLOR['stable'].color}
                nHover={{
                  borderColor: TAG_COLOR['stable'].bg,
                  fontWeight: 'bold',
                }}
              >
                Stable
              </Button>
            </Div>
          </Div>
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
        Prefix: (
          <TokenIcon
            withBg
            size="20px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: (
          <Div>
            <P
              color="#fff"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              USDT.e • MOVE
            </P>
            <Div display="flex" gap="0.25rem" mt="0.25rem">
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['earn'].bg}
                color={TAG_COLOR['earn'].color}
                borderColor={TAG_COLOR['earn'].color}
                nHover={{
                  borderColor: TAG_COLOR['earn'].bg,
                  fontWeight: 'bold',
                }}
              >
                Earn
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['curve'].bg}
                color={TAG_COLOR['curve'].color}
                borderColor={TAG_COLOR['curve'].color}
                nHover={{
                  borderColor: TAG_COLOR['curve'].bg,
                  fontWeight: 'bold',
                }}
              >
                Curve
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['stable'].bg}
                color={TAG_COLOR['stable'].color}
                borderColor={TAG_COLOR['stable'].color}
                nHover={{
                  borderColor: TAG_COLOR['stable'].bg,
                  fontWeight: 'bold',
                }}
              >
                Stable
              </Button>
            </Div>
          </Div>
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
        Prefix: (
          <TokenIcon
            withBg
            size="20px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: (
          <Div>
            <P
              color="#fff"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              USDT.e • MOVE
            </P>
            <Div display="flex" gap="0.25rem" mt="0.25rem">
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['earn'].bg}
                color={TAG_COLOR['earn'].color}
                borderColor={TAG_COLOR['earn'].color}
                nHover={{
                  borderColor: TAG_COLOR['earn'].bg,
                  fontWeight: 'bold',
                }}
              >
                Earn
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['curve'].bg}
                color={TAG_COLOR['curve'].color}
                borderColor={TAG_COLOR['curve'].color}
                nHover={{
                  borderColor: TAG_COLOR['curve'].bg,
                  fontWeight: 'bold',
                }}
              >
                Curve
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['stable'].bg}
                color={TAG_COLOR['stable'].color}
                borderColor={TAG_COLOR['stable'].color}
                nHover={{
                  borderColor: TAG_COLOR['stable'].bg,
                  fontWeight: 'bold',
                }}
              >
                Stable
              </Button>
            </Div>
          </Div>
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
        Prefix: (
          <TokenIcon
            withBg
            size="20px"
            symbol="MOVE"
            rounded={true}
            network={Network.MovementMainnet}
          />
        ),
        Title: (
          <Div>
            <P
              color="#fff"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.12rem"
            >
              USDT.e • MOVE
            </P>
            <Div display="flex" gap="0.25rem" mt="0.25rem">
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['earn'].bg}
                color={TAG_COLOR['earn'].color}
                borderColor={TAG_COLOR['earn'].color}
                nHover={{
                  borderColor: TAG_COLOR['earn'].bg,
                  fontWeight: 'bold',
                }}
              >
                Earn
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['curve'].bg}
                color={TAG_COLOR['curve'].color}
                borderColor={TAG_COLOR['curve'].color}
                nHover={{
                  borderColor: TAG_COLOR['curve'].bg,
                  fontWeight: 'bold',
                }}
              >
                Curve
              </Button>
              <Button
                px="0.5rem"
                py="0.25rem"
                variant="filled"
                fontWeight="500"
                lineHeight="1rem"
                fontSize="0.75rem"
                border="1px solid"
                bg={TAG_COLOR['stable'].bg}
                color={TAG_COLOR['stable'].color}
                borderColor={TAG_COLOR['stable'].color}
                nHover={{
                  borderColor: TAG_COLOR['stable'].bg,
                  fontWeight: 'bold',
                }}
              >
                Stable
              </Button>
            </Div>
          </Div>
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
