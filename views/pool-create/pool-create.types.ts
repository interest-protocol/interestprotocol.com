import { Token } from '@/interface';

export interface CreatePoolForm {
  tokens: ReadonlyArray<Token>;
  volatility_strategy_type: string;
}
