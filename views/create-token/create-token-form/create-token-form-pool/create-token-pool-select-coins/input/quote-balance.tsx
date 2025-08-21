import {
  FA_ADDRESSES,
  Network,
  normalizeSuiAddress,
} from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProgressIndicator } from '@/components/progress-indicator';
import { SubtractBox } from '@/components/svg';
import { FixedPointMath } from '@/lib';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';
import { ICreateTokenForm } from '@/views/create-token/create-token.types';

import { MaxBadge } from './max-budget';

const QuoteBalance: FC = () => {
  const { coinsMap, loading } = useCoins();
  const { setValue } = useFormContext<ICreateTokenForm>();

  const type = FA_ADDRESSES[Network.MovementMainnet].MOVE.toString();
  const balance =
    coinsMap[normalizeSuiAddress(type)]?.balance ?? ZERO_BIG_NUMBER;

  const handleMax = () => {
    const value = balance.minus(FixedPointMath.toBigNumber(1));

    if (!value.isPositive()) {
      setValue(`pool.quoteValue`, '0');
      setValue(`pool.quoteValueBN`, ZERO_BIG_NUMBER);
      return;
    }

    setValue(`pool.quoteValue`, String(FixedPointMath.toNumber(value)));
    setValue(`pool.quoteValueBN`, value);
  };

  return (
    <Div display="flex" gap="0.5rem" alignItems="center">
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
        whiteSpace="nowrap"
      >
        {FixedPointMath.toNumber(balance) ?? '--'}
      </P>
      <MaxBadge handleMax={handleMax} />
      {loading && (
        <Div
          mx="0.5rem"
          mt="-1.7rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" justifySelf="flex-end">
            <ProgressIndicator variant="loading" size={12} />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default QuoteBalance;
