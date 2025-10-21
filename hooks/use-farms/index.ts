import { WhitelistedFaMetadata } from '@interest-protocol/interest-aptos-curve';
import useSWR from 'swr';

import { FARMS_BY_LP } from '@/constants/farms';

import { useInterestCurveSdk } from '../use-interest-curve-sdk';

interface WhitelistedFaMetadataAPI
  extends Omit<WhitelistedFaMetadata, 'address'> {
  address: string;
}

interface RewardAPI {
  balance: string;
  rewardsPerSecond: string;
  rewardFa: WhitelistedFaMetadataAPI;
}

interface FarmAPI {
  address: string;
  rewards: RewardAPI[];
  stakedBalance: string;
  startTimestamp: string;
  stakedFa: WhitelistedFaMetadataAPI;
}

export const useFarms = (lpAddresses: string[]) => {
  const interestCurveDex = useInterestCurveSdk();

  return useSWR<ReadonlyArray<FarmAPI>>(
    [useFarms.name, interestCurveDex, lpAddresses],
    async () => {
      const farms = lpAddresses
        .map((lpAddress) => FARMS_BY_LP[lpAddress]?.address.toString())
        .filter(Boolean);

      if (!farms || !Array.isArray(farms) || !farms.length) return;

      return fetch(`/api/v1/dex/curve/farm/${farms}`).then((res) => res.json());
    }
  );
};
