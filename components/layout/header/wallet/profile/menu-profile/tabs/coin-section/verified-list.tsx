import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { ProgressIndicator } from '@/components/progress-indicator';
import { TOKENS } from '@/constants/coins';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { parseToMetadata } from '@/utils';
import { CoinMetadata, FAMetadata } from '@/utils/coin/coin.types';

import CoinCard from './coin-card';

const VerifiedCoinList: FC = () => {
  const { mutate } = useCoins();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          mutate();
          return 100;
        }
        return prev - 100 / 15;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const verifiedTokens = TOKENS.flatMap((metadata) =>
    metadata.address && metadata.type
      ? [
          parseToMetadata({
            name: metadata.name,
            symbol: metadata.symbol,
            iconUri: metadata.iconUri,
            address: metadata.address,
            decimals: metadata.decimals,
            projectUri: metadata.projectUri ?? '',
          } as FAMetadata),
          parseToMetadata({
            name: metadata.name,
            type: metadata.type,
            symbol: metadata.symbol,
            iconUri: metadata.iconUri,
            decimals: metadata.decimals,
          } as CoinMetadata),
        ]
      : parseToMetadata(metadata as unknown as CoinMetadata | FAMetadata)
  );

  return (
    <Div display="flex" flexDirection="column" gap="0.5rem">
      <Div display="flex" alignItems="center" justifyContent="space-between">
        <P
          color="#fff"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.85rem"
          lineHeight="1.5rem"
          textTransform="uppercase"
        >
          COINS
        </P>
        <Div
          onClick={() => {
            mutate();
            setTimer(100);
          }}
          cursor="pointer"
          transition="all 300ms ease-in-out"
          nHover={{
            transform: 'scale(1.2)',
          }}
        >
          <ProgressIndicator size={16} value={timer} />
        </Div>
      </Div>
      {verifiedTokens.map((token) => (
        <CoinCard key={v4()} token={token} />
      ))}
    </Div>
  );
};

export default VerifiedCoinList;
