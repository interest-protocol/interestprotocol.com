export interface StrategyProps {
  description: string;
  fee?: number;
  selected?: boolean;
  isLoading?: boolean;
  onSelect: () => void;
  pair: [string, string];
  pairId: string;
}
