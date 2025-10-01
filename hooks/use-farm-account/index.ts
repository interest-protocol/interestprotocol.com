import { useAptosWallet } from '@razorlabs/wallet-kit';
import useSWR from 'swr';

import { FARMS_BY_LP } from '@/constants/farms';

import { useInterestCurveSdk } from '../use-interest-curve-sdk';

export const useFarmAccount = (lpAddress: string) => {
  const interestCurveSdk = useInterestCurveSdk();
  const { account: currentAccount } = useAptosWallet();

  return useSWR(
    [useFarmAccount.name, interestCurveSdk, currentAccount, lpAddress],
    async () => {
      const farm = FARMS_BY_LP[lpAddress];

      if (!currentAccount || !farm) return;

      const { address, rewards } = farm;

      return interestCurveSdk.getFarmAccount({
        rewardFas: rewards,
        farm: address.toString(),
        user: currentAccount.address,
      });
    }
  );
};
