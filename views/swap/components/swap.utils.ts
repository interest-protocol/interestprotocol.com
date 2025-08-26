import { Network } from '@interest-protocol/interest-aptos-v2';

type Quest = unknown;

import { SwapToken } from './swap.types';

export const logSwap = (
  address: string,
  from: SwapToken,
  to: SwapToken,
  network: Network,
  txDigest: string
) =>
  fetch(`https://api.interestlabs.io/v1/quests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type',
      'Access-Control-Request-Method': 'POST',
    },
    body: JSON.stringify({
      quest: {
        address,
        txDigest,
        kind: 'swap',
        data: {
          coinIn: {
            type: from.type,
            amount: from.value,
            symbol: from.symbol,
          },
          coinOut: {
            type: to.type,
            amount: to.value,
            symbol: to.symbol,
          },
        },
      },
      profileField: 'swap',
      network,
    } as Omit<Quest, 'timestamp'>),
  });
