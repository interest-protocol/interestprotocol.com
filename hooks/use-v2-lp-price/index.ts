import useSWR from 'swr';

import { V2LPPriceProps } from './use-v2-lp-price.types';

export const useCurveLPPrice = (poolAddress?: string) => {
  const { data, error, isLoading } = useSWR<V2LPPriceProps>(
    poolAddress ? [useCurveLPPrice.name, poolAddress] : null,
    () =>
      fetch(
        `https://api.interestlabs.io/v1/movement/mainnet/curve/lp-price/${poolAddress}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.lpPrice) throw data;
          return data;
        })
        .catch()
  );

  const loading = !poolAddress || isLoading;

  return {
    data,
    error,
    loading,
  };
};
