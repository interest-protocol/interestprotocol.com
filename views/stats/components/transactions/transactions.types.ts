export interface TransactionProps {
  time: string;
  type: string;
  usdAmount: number;
  pairTokenAmount: ReadonlyArray<string>;
  wallet: string;
}
