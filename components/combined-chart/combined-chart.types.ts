import { TooltipProps } from 'recharts';

export type TooltipChartProps = TooltipProps<number, string> & {
  title?: string;
  label?: string | number;
  showPayloadWithName?: boolean;
  payload?: ReadonlyArray<TooltipPayloadProps>;
};

interface TooltipPayloadProps {
  value: number;
  name: string;
  color: string;
}

export interface CombinedChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  xDataKey: string;
  charts: {
    area: ReadonlyArray<ChartValuesProps>;
    bar: ReadonlyArray<ChartValuesProps>;
  };
}

export interface ChartValuesProps {
  color: string;
  dataKey: string;
  label?: string;
}
