import { TooltipProps } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TooltipChartProps = TooltipProps<any, any> & {
  title?: string;
  label?: string | number;
  showPayloadWithName?: boolean;
  payload?: ReadonlyArray<TooltipPayloadProps>;
  labelMap?: Record<string, string>;
};
interface TooltipPayloadProps {
  value: number;
  name: string | number;
  color: string;
}
export interface CombinedChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  xDataKey: string;
  charts: {
    area?: ReadonlyArray<ChartValuesProps>;
    bar?: ReadonlyArray<ChartValuesProps>;
  };
}

export interface ChartValuesProps {
  color: string;
  dataKey: string;
  label?: string;
}
