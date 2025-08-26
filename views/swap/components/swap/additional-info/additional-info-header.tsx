import { Button, Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Motion } from '@/components/motion';
import { ChevronDownSVG } from '@/components/svg';
import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars, formatMoney } from '@/utils';

import { SwapForm } from '../../swap.types';
import { AdditionalInfoHeaderProps } from './additional-info.types';

const AdditionalInfoHeader: FC<AdditionalInfoHeaderProps> = ({
  toggle,
  isOpen,
  amount,
}) => {
  const { control } = useFormContext<SwapForm>();
  const fromSymbol = useWatch({
    control,
    name: 'from.symbol',
  });
  const to = useWatch({
    control,
    name: 'to',
  });

  const { data: price } = useCoinsPrice(to.type);
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
        1 {fromSymbol} = {`${formatMoney(Number(amount))} ${to.symbol} `}
        <Span
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1.125rem"
          letterSpacing="-0.035rem"
          fontFamily="Inter"
          color="#949E9E"
        >
          (
          {amount != '--'
            ? price?.length && price[0].price
              ? formatDollars(
                  +BigNumber(amount)
                    .times(BigNumber(price[0].price))
                    .toNumber()
                    .toFixed(3)
                )
              : '--'
            : '--'}
          )
        </Span>
      </P>
      <Motion
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Button
          p="unset"
          bg="transparent"
          border="none"
          color="#949E9E"
          cursor="pointer"
        >
          <ChevronDownSVG maxHeight="0.361rem" maxWidth="0.6rem" width="100%" />
        </Button>
      </Motion>
    </Div>
  );
};

export default AdditionalInfoHeader;
