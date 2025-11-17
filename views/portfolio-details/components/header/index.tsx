import { AccountAddress } from '@aptos-labs/ts-sdk';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div, P } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import invariant from 'tiny-invariant';

import { toasting } from '@/components/toast';
import TokenIcon from '@/components/token-icon';
import { EXPLORER_URL, Network } from '@/constants';
import { MOVE } from '@/constants/coins';
import { FARMS_BY_LP } from '@/constants/farms';
import { useCoinsPrice, useModal } from '@/hooks';
import { useFarmAccount } from '@/hooks/use-farm-account';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';
import RewardsModal from '@/views/components/rewards-modal';
import TokenInfoAction from '@/views/components/token-info-action';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';

const PoolDetailsHeader: FC = () => {
  const client = useAptosClient();
  const { setContent } = useModal();
  const { account } = useAptosWallet();
  const interestCurveSdk = useInterestCurveSdk();
  const { pool, loading } = usePoolDetailsContext();
  const { signAndSubmitTransaction } = useAptosWallet();
  const { data: farmAccount, mutate: mutateFarmAccount } = useFarmAccount(
    pool.poolAddress
  );
  const { data: coinsPrice, mutate: mutateCoinPrice } = useCoinsPrice([
    MOVE.address.toString(),
  ]);

  const movePrice = coinsPrice?.[0]?.price;

  const balance =
    farmAccount?.rewards.reduce(
      (acc, curr) =>
        MOVE.address.equals(AccountAddress.from(curr.fa))
          ? acc.plus(BigNumber(String(curr.amount)))
          : acc,
      ZERO_BIG_NUMBER
    ) ?? ZERO_BIG_NUMBER;

  const handleClaimReward = async () => {
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

      await Promise.all([mutateFarmAccount(), mutateCoinPrice()]);

      toasting.success({
        action: 'Claim reward',
        message: 'See on explorer',
        link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
      });
    } catch (e) {
      //console.warn({ e });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    }
  };

  const onClaim = () =>
    setContent(
      <RewardsModal
        onClaim={handleClaimReward}
        totalEarnings={
          movePrice
            ? String(movePrice * FixedPointMath.toNumber(balance))
            : '0.00'
        }
        rewardsList={[
          {
            amount: formatMoney(FixedPointMath.toNumber(balance)),
            symbol: 'MOVE',
          },
        ]}
      />,
      {
        title: 'Rewards',
        titleAlign: 'center',
        showTitleOnMobile: true,
      }
    );

  return (
    <Div
      gap="1rem"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent={['flex-start', 'space-between']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div
        gap="1rem"
        display="flex"
        alignItems="center"
        mb={['0', '1rem']}
        width={['100%', '100%', '100%', 'auto']}
      >
        <TokenIcon
          withBg
          size="1.52rem"
          network={Network.MAINNET}
          url={loading ? undefined : pool.poolMetadata?.iconUri}
          symbol={
            loading
              ? 'loading...'
              : (pool.tokensMetadata?.map((token) => token.symbol).join('-') ??
                'none')
          }
        />
        <P
          fontWeight="600"
          color="#E5E7EB"
          fontFamily="Inter"
          fontSize="1.75rem"
          lineHeight="2.8125rem"
        >
          {loading
            ? 'loading...'
            : (pool.tokensMetadata?.map((token) => token.symbol).join('-') ??
              'none')}
        </P>
      </Div>
      <Div
        display="flex"
        key="farm-actions"
        width={['100%', '100%', '100%', 'auto']}
        gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <TokenInfoAction
          onClaim={onClaim}
          label="Claim rewards:"
          amount={
            movePrice
              ? formatMoney(
                  movePrice * FixedPointMath.toNumber(balance),
                  MOVE.decimals
                )
              : '0.00'
          }
        />
      </Div>
    </Div>
  );
};
export default PoolDetailsHeader;
