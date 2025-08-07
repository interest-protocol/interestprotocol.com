import { Network } from '@interest-protocol/interest-aptos-v2';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import TokenIcon from '../token-icon';
import { StrategyProps } from './strategy.types';

const Strategy: FC<StrategyProps> = ({
  description,
  fee,
  pair,
  selected,
  isLoading,
  onSelect,
}) => {
  const network = useNetwork<Network>();

  return (
    <Box
      width="100%"
      cursor="pointer"
      transition="0.3s"
      onClick={onSelect}
      borderRadius="0.75rem"
      maxWidth={['100%', '100%', '16rem']}
      bg={selected ? '#212838' : '#1f2430'}
      nHover={{
        '& > div:first-child > div:first-child': {
          filter: 'grayscale(0%)',
          transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        border: '1px solid #B4C5FF',
      }}
      border={selected ? '1px solid #B4C5FF' : '1px solid transparent'}
    >
      <Box
        flex="1"
        py="0.75rem"
        width="100%"
        gap="0.5rem"
        display="flex"
        height="5rem"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
          transition="filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
          filter={selected ? 'grayscale(0%)' : 'grayscale(100%)'}
        >
          <Box
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="center"
          >
            {pair.map((symbol, index) => (
              <Box
                mr={index == 0 ? '-0.3rem' : 'unset'}
                ml={index == 1 ? '-0.3rem' : 'unset'}
                key={v4()}
              >
                {isLoading ? (
                  <Skeleton
                    width="1.875rem"
                    height="1.875rem"
                    borderRadius="100%"
                  />
                ) : (
                  <TokenIcon
                    withBg
                    size="1.129rem"
                    symbol={symbol}
                    network={network}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {isLoading
          ? fee != undefined && <Skeleton width="6rem" height="0.75rem" />
          : fee && (
              <Box display="flex" fontFamily="Inter" alignItems="center">
                <Typography
                  size="medium"
                  variant="body"
                  color="#9CA3AF"
                  fontWeight="400"
                  lineHeight="1rem"
                  fontFamily="Inter"
                  fontSize="0.875rem"
                >
                  Fee{' '}
                  <Typography
                    size="medium"
                    color={fee >= 1 ? '#FFF' : 'inherit'}
                    variant="body"
                    as="span"
                  >
                    {fee}
                  </Typography>
                  <Typography
                    size="medium"
                    color="#fff"
                    variant="body"
                    as="span"
                  >
                    %
                  </Typography>
                </Typography>
              </Box>
            )}
      </Box>

      <Box
        p="0.75rem"
        width="100%"
        borderBottomLeftRadius="0.75rem"
        borderBottomRightRadius="0.75rem"
        bg={selected ? '#2e3444' : '#2c313d'}
      >
        {isLoading ? (
          <Skeleton width="100%" height="1rem" />
        ) : (
          <Typography
            size="medium"
            variant="body"
            color="#FFFFFF"
            fontSize="1rem"
            fontWeight="500"
            fontFamily="Inter"
            lineHeight="1.5rem"
            textAlign="center"
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Strategy;
