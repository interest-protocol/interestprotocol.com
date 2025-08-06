import { Network } from '@interest-protocol/interest-aptos-v2';
import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import TokenIcon from '../token-icon';
import { StrategyProps } from './strategy.types';

const Strategy: FC<StrategyProps> = ({
  name,
  fee,
  symbol,
  iconUrl1,
  iconUrl2,
  selected,
  isLoading,
}) => {
  const network = useNetwork<Network>();

  return (
    <Button
      p="0"
      m="0"
      height="8rem"
      bg="#9CA3AF1A"
      variant="outline"
      width={['100%', '16.44rem']}
      nFocus={{
        boxShadow: 'none',
        borderColor: '1px solid #B4C5FF1A',
        '& > div > div:first-child > div:first-child': {
          opacity: '1',
        },
      }}
      nHover={{
        '& > div > div:first-child > div:first-child': {
          opacity: '1',
        },
      }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          flex="1"
          p="0.5rem"
          width="100%"
          gap="0.5rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderTopLeftRadius="0.75rem"
          borderTopRightRadius="0.75rem"
        >
          <Box
            display="flex"
            height="1.875rem"
            alignItems="center"
            justifyContent="center"
            position="relative"
            opacity={selected ? '1' : '0.2'}
          >
            <Box
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box mr="-0.3rem" zIndex="1">
                <TokenIcon
                  rounded
                  url={iconUrl1}
                  size="1.129rem"
                  symbol={symbol}
                  network={network}
                />
              </Box>
              <Box ml="-0.3rem" zIndex="2">
                <TokenIcon
                  rounded
                  url={iconUrl2}
                  size="1.129rem"
                  symbol={symbol}
                  network={network}
                />
              </Box>
            </Box>
          </Box>

          {fee ? (
            <Box display="flex" fontFamily="Inter" alignItems="center">
              {isLoading ? (
                <>
                  <Typography
                    size="large"
                    color="#9CA3AF"
                    variant="label"
                    fontWeight="400"
                    fontFamily="Inter"
                    fontSize="0.875rem"
                  >
                    Fee
                  </Typography>
                  <Typography
                    ml="0.2rem"
                    as="span"
                    size="large"
                    variant="label"
                    fontWeight="400"
                    fontFamily="Inter"
                    color={fee >= 1 ? '#FFFFFF' : '#9CA3AF'}
                  >
                    {fee}
                  </Typography>
                  <Typography
                    as="span"
                    size="large"
                    variant="label"
                    color="#FFFFFF"
                    fontWeight="400"
                    fontFamily="Inter"
                  >
                    %
                  </Typography>
                </>
              ) : (
                <Skeleton width="6rem" height="0.5rem" />
              )}
            </Box>
          ) : null}
        </Box>
        <Box
          width="100%"
          height="3rem"
          flexShrink="0"
          display="flex"
          bg="#9CA3AF1A"
          padding="0.75rem"
          alignItems="center"
          justifyContent="center"
          borderBottomLeftRadius="0.75rem"
          borderBottomRightRadius="0.75rem"
        >
          {isLoading ? (
            <Typography
              size="large"
              variant="label"
              fontSize="1rem"
              fontWeight="500"
              color="#FFFFFF"
              fontFamily="Inter"
              lineHeight="1.5rem"
            >
              {name}
            </Typography>
          ) : (
            <Skeleton width="6rem" height="1rem" />
          )}
        </Box>
      </Box>
    </Button>
  );
};

export default Strategy;
