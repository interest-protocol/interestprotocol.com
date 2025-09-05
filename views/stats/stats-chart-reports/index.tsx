import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';

import HeadInfo from '../components/head-info';
import { DATA } from './stats-chart-reports.data';

const StatsChartReports: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 5000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Div
        mb="1rem"
        gap="1rem"
        width="100%"
        display="grid"
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      >
        <Div display="flex" flexDirection="column" gap="1rem">
          <HeadInfo
            name="IPX TVL"
            value={312323.12}
            date="2025-08-22T05:42:10.123Z"
          />
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
        </Div>

        <Div display="flex" flexDirection="column" gap="1rem">
          <Div display="flex" justifyContent="space-between">
            <HeadInfo
              symbol="USD"
              name="IPX Volume"
              value={312323.12}
              date="2025-08-22T05:42:10.123Z"
            />
          </Div>
          <Div width="100%" height="18.75rem">
            {!loading ? (
              <CombinedChart
                data={DATA}
                xDataKey="name"
                charts={{
                  area: [
                    {
                      dataKey: 'total',
                      color: '#9ba2ad',
                    },
                  ],
                  bar: [
                    {
                      dataKey: 'tokenOut',
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
        </Div>
      </Div>
    </>
  );
};

export default StatsChartReports;
