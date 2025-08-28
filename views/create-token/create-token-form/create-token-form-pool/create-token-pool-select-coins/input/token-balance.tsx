import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SubtractBox } from '@/components/svg';
import { formatMoney } from '@/utils';
import { ICreateTokenForm } from '@/views/create-token/create-token.types';

import { MaxBadge } from './max-budget';

const TokenBalance: FC = () => {
  const { control, setValue } = useFormContext<ICreateTokenForm>();

  const supply = useWatch({ control, name: `supply` });

  const handleMax = () => setValue(`pool.tokenValue`, String(supply));

  return (
    <Div display="flex" alignItems="center" gap="0.5rem" onClick={handleMax}>
      <Div display={['none', 'block']} width="1.4rem" height="1.25rem">
        <SubtractBox
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
          height="100%"
        />
      </Div>
      <P
        color="#D1D5DB"
        fontWeight="400"
        fontSize="0.75rem"
        fontFamily="Inter"
        lineHeight="1rem"
        whiteSpace="nowrap"
      >
        {formatMoney(supply, 4)}
      </P>
      <MaxBadge handleMax={handleMax} />
    </Div>
  );
};

export default TokenBalance;
