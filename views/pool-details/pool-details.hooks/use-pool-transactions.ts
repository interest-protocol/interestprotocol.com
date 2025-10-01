import useSWR from 'swr';

interface PoolTransaction {
  eventType: string;
  usd: string;
  pool: string;
  coins: [
    {
      token: string;
      amount: string;
    },
    {
      token: string;
      amount: string;
    },
  ];
  timestamp: string;
}

interface PoolTransactions {
  data: ReadonlyArray<PoolTransaction>;
  total: number;
  totalPages: number;
}

const usePoolTransactions = (poolAddress: string) =>
  useSWR<PoolTransactions>([usePoolTransactions.name, poolAddress], () =>
    fetch(
      `https://api.interestlabs.io/v1/movement/mainnet/curve/transactions?pool=${poolAddress}&limit=100&page=1`
    ).then((res) => res.json())
  );
export default usePoolTransactions;
