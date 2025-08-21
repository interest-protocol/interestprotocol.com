import { FA_ADDRESSES, Network } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

import { InputProps } from './input.types';

const AmountInDollar: FC<InputProps> = ({ label }) => {
  const { control } = useFormContext();

  const type = FA_ADDRESSES[Network.MovementMainnet].MOVE.toString();
  const [value] = useWatch({
    control,
    name: [`pool.quoteValue`],
  });

  const { data: prices } = useCoinsPrice(type);

  if (label == 'token') return '--';

  if (!(prices?.length && value)) return '$0';

  return (
    <Div display="flex" gap="0.75rem" alignItems="center" flexWrap="wrap">
      <P fontSize="0.875rem" color="#D1D5DB">
        {prices && value
          ? formatDollars(
              +BigNumber(value)
                .times(BigNumber(prices[0].price))
                .toNumber()
                .toFixed(3)
            )
          : '--'}{' '}
      </P>
    </Div>
  );
};

export default AmountInDollar;
