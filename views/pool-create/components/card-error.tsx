import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { AlertSVG } from '@/components/svg';

const CardError: FC = () => (
  <Box
    p="0.5rem"
    mt="0.5rem"
    gap="0.3rem"
    bg="#EF444433"
    display="flex"
    height="2.25rem"
    alignItems="center"
    borderRadius="0.75rem"
  >
    <AlertSVG
      width="100%"
      color="#EF4444"
      maxWidth="0.66rem"
      maxHeight="0.66rem"
    />
    <Typography
      size="small"
      variant="body"
      color="#EF4444"
      fontWeight="400"
      fontSize="0.7rem"
      fontFamily="Inter"
      whiteSpace="nowrap"
    >
      Initial price must be greater than 0
    </Typography>
  </Box>
);

export default CardError;
