import { Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useCoinsPrice } from '@/hooks';
import { formatDollars, formatMoney } from '@/utils';

import { SwapForm } from '../../swap.types';
import { AdditionalInfoHeaderProps } from './additional-info.types';

const AdditionalInfoHeader: FC<AdditionalInfoHeaderProps> = ({ toggle }) => {
  const { watch } = useFormContext<SwapForm>();

  const [fromValue, toValue, fromSymbol, toSymbol, toType] = watch([
    'from.value',
    'to.value',
    'from.symbol',
    'to.symbol',
    'to.type',
  ]);

  const quote = fromValue ? Number(toValue) / Number(fromValue) : null;

  const { data: price } = useCoinsPrice(toType);

  return (
    <Div
      display="flex"
      cursor="pointer"
      onClick={toggle}
      justifyContent="space-between"
    >
      <P
        fontWeight="400"
        fontSize="0.875rem"
        lineHeight="1.125rem"
        fontFamily="Inter"
        letterSpacing="-0.035rem"
        color="#B8C4C4"
      >
        1 {fromSymbol} ={' '}
        {`${quote ? formatMoney(Number(quote)) : '--'} ${toSymbol} `}
        <Span
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1.125rem"
          letterSpacing="-0.035rem"
          fontFamily="Inter"
          color="#949E9E"
        >
          (
          {quote && price
            ? price?.length && price[0].price
              ? formatDollars(
                  +BigNumber(quote)
                    .times(BigNumber(price[0].price))
                    .toNumber()
                    .toFixed(3),
                  4,
                  'start'
                )
              : '--'
            : '--'}
          )
        </Span>
      </P>
    </Div>
  );
};

export default AdditionalInfoHeader;
