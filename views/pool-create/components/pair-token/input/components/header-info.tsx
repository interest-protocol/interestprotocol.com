import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import {
  CreatePoolForm,
  InputProps,
} from '@/views/pool-create/pool-create.types';

const HeaderInfo: FC<InputProps> = ({ index }) => {
  const { control } = useFormContext<CreatePoolForm>();

  const symbol = useWatch({ control, name: `tokens.${index}.symbol` });

  return (
    <Div
      alignItems="flex-end"
      display={['flex', 'none']}
      justifyContent="space-between"
    >
      <Span
        fontWeight="400"
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {symbol}
      </Span>
    </Div>
  );
};

export default HeaderInfo;
