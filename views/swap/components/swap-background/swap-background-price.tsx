import { Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useCoinsPrice } from '@/hooks/use-coins-price';
import { formatDollars } from '@/utils';

const SwapBackgroundPrice: FC<{ coin: string }> = ({ coin }) => {
  const { data: price } = useCoinsPrice(coin);

  return (
    <Typography
      size="small"
      variant="label"
      color="onSurface"
      width="max-content"
    >
      {formatDollars(price?.length ? price[0].price : 0, 4)}
    </Typography>
  );
};

export default SwapBackgroundPrice;
