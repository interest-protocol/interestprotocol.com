import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const CoinCardSkeleton: FC = () => (
  <Box
    py="0.75rem"
    flex="1"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <Typography size="medium" variant="body">
      <Skeleton width="4rem" />
    </Typography>
    <Box
      px="1rem"
      py="0.5rem"
      display="flex"
      borderRadius="0.5rem"
      bg="lowContainer"
      color="#E2E2E6"
      alignItems="center"
      justifyContent="space-between"
      width="10rem"
    >
      <Box width="100%">
        <Skeleton width="100%" />
      </Box>
    </Box>
  </Box>
);

export default CoinCardSkeleton;
