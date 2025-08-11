import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

import { InputProps } from '../input.types';

const HeaderInfo: FC<InputProps> = ({ index }) => {
  const { getValues } = useFormContext<CreatePoolForm>();

  const symbol = getValues(`tokens.${index}.symbol`);

  return (
    <Box
      display="flex"
      color="onSurface"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Typography
        as="span"
        size="small"
        variant="body"
        fontFamily="Inter"
        fontSize="0.875rem"
        fontWeight="400"
        lineHeight="1.25rem"
        display={['inline-block', 'none']}
      >
        {symbol}
      </Typography>
    </Box>
  );
};

export default HeaderInfo;
