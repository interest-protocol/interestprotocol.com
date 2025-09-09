export interface TableSummaryTitleProps {
  title: string;
  total: string;
}

export interface TableSummaryPositionProps {
  totalPosition: string;
}

export interface TotalEarningProps {
  gain: string;
  onClaim: () => void;
}

export type TableSummaryProps = TableSummaryTitleProps &
  TableSummaryPositionProps &
  TotalEarningProps;
