export interface DataPoint {
  price: number;
  liquidity: number;
}

export interface LiquidityChartProps {
  data: ReadonlyArray<DataPoint>;
  initialMin: number;
  initialMax: number;
}
