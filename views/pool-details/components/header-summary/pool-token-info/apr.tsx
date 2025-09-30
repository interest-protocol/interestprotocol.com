import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Tag from '@/components/tag';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import usePoolsMetrics from '@/views/pools/pools.hooks/use-pools-metrics';

const APR: FC = () => {
  const { pool } = usePoolDetailsContext();

  const { data: poolsMetrics } = usePoolsMetrics();

  const poolMetrics = poolsMetrics?.data.find(
    (metric) => metric.poolId === pool.poolAddress
  );

  const apr =
    Number(poolMetrics?.metrics.apr ?? 0) +
    Number(poolMetrics?.metrics.farmApr ?? 0);

  return (
    <Div display="flex" gap="0.5rem" alignItems="center">
      <P
        color="#949E9E"
        fontWeight="500"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        APR
      </P>
      <Tag label={`${+apr.toFixed(2)}%`} type="success" />
    </Div>
  );
};

export default APR;
