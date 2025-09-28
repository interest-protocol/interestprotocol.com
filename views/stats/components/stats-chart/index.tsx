import { FC } from 'react';
import { v4 } from 'uuid';

import StatsChartTVLReport from '../../stats-chart-reports/tvl-chart-report';
import StatsChartVolumeReport from '../../stats-chart-reports/volume-chart-report';
import { StatsChartsProps } from './stats-chart.types';

const StatsCharts: FC<StatsChartsProps> = ({ tab }) => {
  const charts = [
    <StatsChartTVLReport key={v4()} />,
    <StatsChartVolumeReport key={v4()} />,
  ];

  if (tab !== undefined) return charts[tab];

  return <>{charts}</>;
};

export default StatsCharts;
