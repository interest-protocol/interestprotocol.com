import { StrategyProps } from './components/strategy/strategy.types';

export const STRATEGIES: ReadonlyArray<Omit<StrategyProps, 'onSelect'>> = [
  {
    fee: 1,
    pairId: '1',
    pair: ['MOVE', 'USDC.e'],
    description: 'Memecoins',
  },
  {
    fee: 0.05,
    pairId: '2',
    pair: ['MOVE', 'USDT.e'],
    description: 'Volatile Pair',
  },
  {
    fee: 1,
    pairId: '3',
    pair: ['USDC.e', 'USDT.e'],
    description: 'Low Risk Stable Pair',
  },
];
