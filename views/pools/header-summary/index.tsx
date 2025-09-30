import { FC } from 'react';

import { HeaderInfoProps } from '@/components/header-info/header-info.types';
import { DAY_IN_MS } from '@/constants';

import usePoolsMetrics from '../pools.hooks/use-pools-metrics';
import PoolHeaderSummaryDesktop from './desktop';
import PoolHeaderSummaryMobile from './mobile';
import { HeaderSummaryProps } from './pool-header-summary.types';

const PoolHeaderSummary: FC<HeaderSummaryProps> = (props) => {
  const { data } = usePoolsMetrics();

  const metrics: ReadonlyArray<HeaderInfoProps> = data?.summary
    ? [
        {
          title: 'TVL',
          hideDate: true,
          value: data.summary.tvl,
          date: new Date(
            Date.now() -
              DAY_IN_MS *
                (props.aggregation === 'daily'
                  ? 1
                  : props.aggregation === 'weekly'
                    ? 7
                    : 30)
          ).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          }),
        },
        {
          title: 'Total Volume',
          value: data.summary.volume,
          dateValue:
            props.aggregation === 'daily'
              ? data.summary.volume1D
              : props.aggregation === 'weekly'
                ? data.summary.volume7D
                : data.summary.volume30D,
          date: new Date(
            Date.now() -
              DAY_IN_MS *
                (props.aggregation === 'daily'
                  ? 1
                  : props.aggregation === 'weekly'
                    ? 7
                    : 30)
          ).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          }),
        },
        {
          title: 'Total Fees',
          value: data.summary.fees,
          dateValue:
            props.aggregation === 'daily'
              ? data.summary.fees1D
              : props.aggregation === 'weekly'
                ? data.summary.fees7D
                : data.summary.fees30D,
          date: new Date(
            Date.now() -
              DAY_IN_MS *
                (props.aggregation === 'daily'
                  ? 1
                  : props.aggregation === 'weekly'
                    ? 7
                    : 30)
          ).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          }),
        },
      ]
    : [];

  return (
    <>
      <PoolHeaderSummaryMobile {...props} data={metrics} />
      <PoolHeaderSummaryDesktop {...props} data={metrics} />
    </>
  );
};

export default PoolHeaderSummary;
