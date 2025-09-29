import { FARMS } from '@interest-protocol/interest-aptos-curve';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import useSWR from 'swr';

import { MOVE } from '@/constants/coins';

import { useInterestCurveSdk } from '../use-interest-curve-sdk';

export const useGetAccountFarmsData = () => {
  const interestCurveSdk = useInterestCurveSdk();
  const { account: currentAccount } = useAptosWallet();

  return useSWR([useGetAccountFarmsData.name, currentAccount], async () => {
    if (!currentAccount) return;

    return interestCurveSdk.getAccountFarmsData({
      user: currentAccount.address,
      rewardFas: FARMS.map(() => MOVE.address.toString()),
      farms: FARMS.map((farm) => farm.address.toString()),
    });
  });
};
