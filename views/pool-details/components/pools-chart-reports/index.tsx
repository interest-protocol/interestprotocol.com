import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';

import { DATA } from './pools-chart-reports.data';

const PoolsChartReports: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 5000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Div width="100%" height="18.75rem">
      {!loading ? (
        <CombinedChart
          data={DATA}
          xDataKey="name"
          charts={{
            area: [
              {
                dataKey: 'tokenOut',
                color: '#9ba2ad',
              },
            ],
            bar: [
              {
                dataKey: 'total',
                color: '#00c779',
              },
              {
                dataKey: 'tokenIn',
                color: '#383cb2',
              },
            ],
          }}
        />
      ) : (
        <Skeleton width="100%" height="18.75rem" baseColor="#9CA3AF1A" />
      )}
    </Div>
  );
};

export default PoolsChartReports;
