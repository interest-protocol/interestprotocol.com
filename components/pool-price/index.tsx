import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { PoolPriceProps } from './pool-price.types';

const PoolPrice: FC<PoolPriceProps> = ({
  tokenPair,
  priceTokenPair,
  poolTokenPriceUSD,
  isLoading,
}) => {
  const { tokenA, tokenB } = tokenPair;

  return (
    <Box
      p="1rem"
      height="5rem"
      display="flex"
      bg="#9CA3AF1A"
      position="relative"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
      justifyContent="space-between"
    >
      <Box gap="0.25rem" display="flex" flexDirection="column">
        <Typography
          size="medium"
          variant="body"
          fontSize="1rem"
          color="#FFFFFF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
        >
          {isLoading ? (
            <Skeleton width={80} height={16} />
          ) : (
            priceTokenPair.toFixed(2)
          )}
        </Typography>

        <Typography
          size="medium"
          variant="body"
          color="#9CA3AF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
          fontSize="0.875rem"
        >
          {isLoading ? (
            <Skeleton width={60} height={14} />
          ) : (
            <>
              {tokenA}
              <Typography size="medium" variant="body" as="span">
                /
              </Typography>
              <Typography size="medium" variant="body" as="span">
                {tokenB}
              </Typography>
            </>
          )}
        </Typography>
      </Box>

      <Box
        top="50%"
        left="50%"
        bg="#FFFFFF"
        width="0.25rem"
        height="0.25rem"
        borderRadius="100px"
        position="absolute"
        transform="translate(-50%, -50%)"
      />

      <Box
        gap="0.25rem"
        display="flex"
        textAlign="right"
        flexDirection="column"
      >
        <Typography
          size="medium"
          variant="body"
          fontSize="1rem"
          color="#FFFFFF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
        >
          {isLoading ? (
            <Skeleton width={80} height={16} />
          ) : (
            poolTokenPriceUSD.toFixed(2)
          )}
        </Typography>

        <Typography
          size="medium"
          variant="body"
          color="#9CA3AF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
          fontSize="0.875rem"
        >
          {isLoading ? <Skeleton width={40} height={14} /> : 'USD'}
        </Typography>
      </Box>
    </Box>
  );
};

export default PoolPrice;
