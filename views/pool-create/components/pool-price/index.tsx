import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { CreatePoolForm } from '../../pool-create.types';
import PoolPrice from './pool-price-card';

const PoolPriceSection: FC = () => {
  const [tokensSelected, setTokensSelected] = useState(false);
  const { control } = useFormContext<CreatePoolForm>();

  const error = useWatch({ control, name: 'error' });
  const tokensList = useWatch({
    control,
    name: 'tokens',
  });

  useEffect(() => {
    setTokensSelected(
      tokensList.length >= 2 &&
        [0, 1].every(
          (i) => tokensList[i]?.type && Number(tokensList[i]?.value) > 0
        )
    );
  }, [tokensList]);

  if (!tokensSelected) return;

  if (error) return;

  return (
    <Div
      width="100%"
      display="grid"
      alignItems="center"
      gap={['1rem', '0.75rem']}
      justifyContent="space-between"
      gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 27.6875rem']}
    >
      <Div gap="0.5rem" display="flex" flexDirection="column">
        <P
          fontSize="1rem"
          color="#E5E7EB"
          fontWeight="600"
          fontFamily="Inter"
          lineHeight="1.75rem"
        >
          Pool price
        </P>
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontSize="0.75rem"
          fontFamily="Inter"
          lineHeight="1.25rem"
          width={['100%', '100%', '70%']}
        >
          Pool price depends on initial price of both tokens added.
        </P>
      </Div>
      <PoolPrice />
    </Div>
  );
};

export default PoolPriceSection;
