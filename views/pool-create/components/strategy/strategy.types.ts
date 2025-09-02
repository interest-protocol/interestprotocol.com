export interface StrategyProps {
  fee?: number;
  pairId: string;
  selected?: boolean;
  description: string;
  isLoading?: boolean;
  onSelect: () => void;
  pair: [string, string];
}
