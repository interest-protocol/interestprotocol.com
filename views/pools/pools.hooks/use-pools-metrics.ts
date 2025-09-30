import useSWR from 'swr';

const usePoolsMetrics = () =>
  useSWR([usePoolsMetrics.name], async () =>
    fetch(`https://api.interestlabs.io/v1/movement/mainnet/curve/metrics`).then(
      (res) => res.json?.()
    )
  );

export default usePoolsMetrics;
