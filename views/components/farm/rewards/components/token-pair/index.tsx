import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';

import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { AssetMetadata } from '@/lib/coins-manager/coins-manager.types';
import { FixedPointMath } from '@/lib/entities/fixed-point-math';
import { getCoinMetadata, parseToMetadata } from '@/utils';

const TokenPair: FC<{
  rewards: ReadonlyArray<{
    fa: string;
    amount: bigint;
  }>;
}> = ({ rewards }) => {
  const [tokenMetadata, setTokenMetadata] = useState<AssetMetadata[]>([]);

  const { data: metadata } = useSWR(['token-metadata', rewards], async () => {
    if (!rewards?.length) return [];

    const metadataPromises = rewards.map(async (reward) => {
      const data = await getCoinMetadata(reward.fa);
      return parseToMetadata(data);
    });

    return Promise.all(metadataPromises);
  });

  useEffect(() => {
    if (metadata) {
      setTokenMetadata(metadata);
    }
  }, [metadata]);

  if (!rewards?.length || !tokenMetadata.length) {
    return null;
  }

  return (
    <Div gap="0.5rem" display="flex" flexWrap="wrap" alignItems="center">
      {rewards.map((reward, index) => {
        const token = tokenMetadata[index];
        if (!token) return null;

        const formattedAmount = FixedPointMath.toNumber(
          BigNumber(reward.amount.toString()),
          token.decimals
        );

        return (
          <Div key={reward.fa} display="flex" alignItems="center" gap="0.55rem">
            <P
              display="flex"
              color="#FFFFFF"
              fontFamily="Inter"
              alignItems="center"
              lineHeight="2.25rem"
              fontSize={['1rem', '1.5rem']}
            >
              {formattedAmount.toFixed(6)} {token.symbol}
            </P>
            <TokenIcon
              withBg
              url={token.iconUri}
              symbol={token.symbol}
              size="0.93rem"
              network={Network.MovementMainnet}
            />
            {index < rewards.length - 1 && (
              <Div
                width="4px"
                mx={['0.65rem', '0.65rem', '0.65rem', '2.25rem']}
                height="4px"
                bg="#FFFFFF"
                borderRadius="1000px"
              />
            )}
          </Div>
        );
      })}
    </Div>
  );
};
export default TokenPair;
