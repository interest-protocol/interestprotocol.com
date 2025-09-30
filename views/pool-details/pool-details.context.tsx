import { createContext, FC, PropsWithChildren, useContext } from 'react';

import { POOLS } from '@/constants/pools';
import useCurvePool from '@/hooks/use-curve-pool';
import { PoolPageProps } from '@/interface';

import NotFound from '../not-found';
import { PoolDetailsContextProps } from './pool-details.types';

const poolDetailsContext = createContext<PoolDetailsContextProps>(
  {} as PoolDetailsContextProps
);

export const PoolDetailsProvider: FC<PropsWithChildren<PoolPageProps>> = ({
  address,
  children,
}) => {
  const { Provider } = poolDetailsContext;
  const { pool, loading } = useCurvePool(address);

  const poolData = POOLS.find(({ poolAddress }) => poolAddress === address);

  if (!poolData) return <NotFound />;

  return (
    <Provider value={{ pool: pool ?? poolData, loading }}>{children}</Provider>
  );
};

export const usePoolDetailsContext = () => useContext(poolDetailsContext);
