import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { InputProps } from '../input.types';

const HeaderInfo: FC<InputProps> = ({ index }) => {
  const symbol = useWatch({ name: `tokens.${index}.symbol` });

  return (
    <Box
      color="onSurface"
      alignItems="flex-end"
      justifyContent="space-between"
      display={['flex', 'none']}
    >
      <Typography
        as="span"
        size="small"
        variant="body"
        fontFamily="Inter"
        fontSize="0.875rem"
        fontWeight="400"
        lineHeight="1.25rem"
      >
        {symbol}
      </Typography>
    </Box>
  );
};

export default HeaderInfo;
