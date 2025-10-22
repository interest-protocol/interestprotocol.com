import { AccountAddress, Network } from '@aptos-labs/ts-sdk';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import invariant from 'tiny-invariant';

import Breadcrumb from '@/components/breadcrumb';
import Tabs from '@/components/tabs';
import { toasting } from '@/components/toast';
import { EXPLORER_URL } from '@/constants';
import { MOVE } from '@/constants/coins';
import { FARMS_BY_LP } from '@/constants/farms';
import { useCoinsPrice, useModal, useTabState } from '@/hooks';
import { useFarmAccount } from '@/hooks/use-farm-account';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';
import APR from '@/views/components/apr';
import RewardsModal from '@/views/components/rewards-modal';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import TokenInfo from '../../../components/token-info';
import TokenInfoAction from '../../../components/token-info-action';
import { usePoolDetailsContext } from '../../pool-details.context';
import { PoolDetailsProps } from '../../pool-details.types';

const TABS = ['Pool', 'Farm'];

const PoolDetailsHeaderSummary: FC<PoolDetailsProps> = ({ isV3 }) => {
  const client = useAptosClient();
  const { setContent } = useModal();
  const { tab, setTab } = useTabState();
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
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();

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
      console.warn({ e });

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

  const onHandle = (tab: number) => {
    setTab(tab);
    setValue('lpCoin.value', '');
    setValue('lpCoin.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.0.value', '');
    setValue('tokenList.0.valueBN', ZERO_BIG_NUMBER);
    setValue('tokenList.1.value', '');
    setValue('tokenList.1.valueBN', ZERO_BIG_NUMBER);
    setValue('selectedCoinIndex', [0, 1]);
    setValue('balanced', false);
  };
  return (
    <>
      <Div
        display="flex"
        flexDirection="column"
        gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
      >
        <Div display="flex" justifyContent="space-between">
          {loading ? (
            <Skeleton width={100} height={20} />
          ) : (
            <Breadcrumb
              basePage="Pools"
              currentPage={
                loading
                  ? 'loading...'
                  : (pool.tokensMetadata
                      ?.map((token) => token.symbol)
                      .join('-') ?? 'none')
              }
            />
          )}
        </Div>
        <Div
          display="flex"
          justifyContent="space-between"
          gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <TokenInfo isV3={isV3} />
          <Div
            display="flex"
            gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <TokenInfoAction
              label="Claim rewards:"
              onClaim={onClaim}
              amount={
                movePrice
                  ? String(movePrice * FixedPointMath.toNumber(balance))
                  : '0.00'
              }
            />
          </Div>
        </Div>
      </Div>
      {!isV3 && (
        <Div
          gap="1rem"
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Div display="flex" width={['100%', '100%', '100%', 'unset']}>
            <Tabs tabs={TABS} setTab={onHandle} tab={tab} color="#6067F9" />
          </Div>
          <Div display={['none', 'none', 'none', 'block']}>
            <APR />
          </Div>
        </Div>
      )}
    </>
  );
};

export default PoolDetailsHeaderSummary;
