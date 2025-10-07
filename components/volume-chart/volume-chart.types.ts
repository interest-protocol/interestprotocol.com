import { ChartValuesProps } from '../combined-chart/combined-chart.types';

export interface VolumeDataPoint {
  name: string;
  value: number;
}

export interface VolumeChartProps {
  data: VolumeDataPoint[];
  chartInfo: ChartValuesProps;
}
