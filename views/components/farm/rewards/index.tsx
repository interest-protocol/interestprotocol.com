import { AccountAddress, Network } from '@aptos-labs/ts-sdk';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button, Div, P, Span } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC, useState } from 'react';
import invariant from 'tiny-invariant';

import { toasting } from '@/components/toast';
import { EXPLORER_URL } from '@/constants';
import { MOVE } from '@/constants/coins';
import { FARMS_BY_LP } from '@/constants/farms';
import { useCoinsPrice } from '@/hooks';
import { useFarmAccount } from '@/hooks/use-farm-account';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';
import { formatDollars } from '@/utils/string';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

import TokenPair from './components/token-pair';

const Rewards: FC = () => {
  const client = useAptosClient();
  const { pool } = usePoolDetailsContext();
  const [loading, setLoading] = useState(false);
  const interestCurveSdk = useInterestCurveSdk();
  const { data } = useFarmAccount(pool?.poolAddress);
  const { account, signAndSubmitTransaction } = useAptosWallet();

  const { data: coinsPrice } = useCoinsPrice([MOVE.address.toString()]);

  const balance =
    data?.rewards.reduce(
      (acc, curr) =>
        MOVE.address.equals(AccountAddress.from(curr.fa))
          ? acc.plus(BigNumber(String(curr.amount)))
          : acc,
      ZERO_BIG_NUMBER
    ) ?? ZERO_BIG_NUMBER;

  const movePrice = coinsPrice?.[0]?.price;

  const handleClaimReward = async () => {
    if (loading) return;

    setLoading(true);
    try {
      invariant(account, 'You must be connected to proceed');

      const payload = interestCurveSdk.harvest({
        recipient: account.address,
        rewardFa: MOVE.address.toString(),
        farm: FARMS_BY_LP[pool.poolAddress].address.toString(),
      });

      const tx = await signAndSubmitTransaction({ payload });

      invariant(tx.status === 'Approved', 'Rejected by User');

      const txResult = tx.args;

      let waitingTx = true;

      do {
        await client
          .waitForTransaction({
            transactionHash: txResult.hash,
            options: { checkSuccess: true },
          })
          .then(() => {
            waitingTx = false;
          })
          .catch();
      } while (waitingTx);

      toasting.success({
        action: 'Claim reward',
        message: 'See on explorer',
        link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
      });
    } catch (e) {
      console.warn({ e });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Div display="flex" flexDirection="column" gap="0.75rem">
      <P
        color="#FFFFFF"
        fontWeight="400"
        fontSize="1.5rem"
        fontFamily="Inter"
        lineHeight="2.25rem"
      >
        Rewards
      </P>
      <Div
        p="1rem"
        gap="1rem"
        display="flex"
        bg="#9CA3AF1A"
        borderRadius="0.75rem"
        flexDirection="column"
      >
        <Div display="flex" flexDirection="column" gap="0.5rem">
          <P
            fontSize="1rem"
            fontWeight="500"
            color="#9CA3AF"
            fontFamily="Inter"
            lineHeight="1.5rem"
          >
            Pending Yield
          </P>
          <Span
            fontWeight="500"
            color="#FFFFFF"
            fontFamily="Inter"
            lineHeight="2.25rem"
            fontSize={['1.25rem', '1.5rem']}
          >
            {formatDollars(
              movePrice ? movePrice * FixedPointMath.toNumber(balance) : 0,
              6,
              'start'
            )}
          </Span>
        </Div>
        <Div display="flex" flexDirection="column" gap="0.5rem">
          <P
            fontSize="1rem"
            fontWeight="500"
            color="#9CA3AF"
            fontFamily="Inter"
            lineHeight="1.5rem"
          >
            Rewards per asset
          </P>
          <TokenPair rewards={data?.rewards || []} />
        </Div>
      </Div>

      <Div display="flex" justifyContent="space-between">
        <P
          color="#949E9E"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.1375rem"
        >
          Claiming Fee:
        </P>
        <P
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.1375rem"
        >
          0%
        </P>
      </Div>
      <Button
        display="flex"
        border="none"
        p="0.5rem 1rem"
        height="3.5rem"
        fontSize="1rem"
        fontWeight="500"
        cursor="pointer"
        color="#002A78"
        disabled={loading}
        fontFamily="Inter"
        alignItems="center"
        background="#B4C5FF"
        borderRadius="0.75rem"
        justifyContent="center"
        onClick={handleClaimReward}
      >
        {loading ? 'Claiming...' : 'Claim'}
      </Button>
    </Div>
  );
};

export default Rewards;
