import { OverviewModalProps } from '../overview-modal.types';

export interface ChartSectionProps {
  title: string;
  data: OverviewModalProps['poolVolume'] | OverviewModalProps['poolLiquidity'];
}
