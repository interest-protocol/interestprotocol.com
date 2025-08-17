import { P } from '@stylin.js/elements';
import { FC } from 'react';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

const SwapBackgroundPrice: FC<{ coin: string }> = ({ coin }) => {
  const { data: price } = useCoinsPrice(coin);

  return (
    <P color="onSurface" width="max-content">
      {formatDollars(price?.length ? price[0].price : 0, 4)}
    </P>
  );
};

export default SwapBackgroundPrice;
