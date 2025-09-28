import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import CombinedChart from '@/components/combined-chart';
import { formatDate } from '@/utils/date';

import HeadInfo from '../components/head-info';
import { DATA } from './stats-chart-reports.data';

const StatsChartTVLReport: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = Math.floor(Math.random() * 5000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Div
      p="1rem"
      gap="0.625rem"
      display="flex"
      bg="#9CA3AF0D"
      borderRadius="0.5rem"
      flexDirection="column"
      border="1px solid #1F2937"
    >
      <Div display="flex" justifyContent="space-between" alignItems="center">
        <HeadInfo name="IPX TVL" value={312323.12} />
        <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
          {formatDate('2025-08-22T05:42:10.123Z')}
        </P>
      </Div>

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
  );
};

export default StatsChartTVLReport;
