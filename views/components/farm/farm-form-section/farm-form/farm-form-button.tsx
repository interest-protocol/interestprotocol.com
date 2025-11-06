import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import invariant from 'tiny-invariant';

import ConnectWalletModal from '@/components/layout/header/wallet/connect-wallet';
import { toasting } from '@/components/toast';
import { EXPLORER_URL, Network } from '@/constants';
import { FARMS_BY_LP } from '@/constants/farms';
import { useModal } from '@/hooks';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import { FarmFormProps } from '../farm-form.types';

const FarmFormButton: FC<FarmFormProps> = ({ isStake }) => {
  const client = useAptosClient();
  const { mutate } = useCoins();
  const { setContent } = useModal();
  const [loading, setLoading] = useState(false);
  const interestCurveSdk = useInterestCurveSdk();
  const { account, signAndSubmitTransaction } = useAptosWallet();
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();
  const {
    pool: { poolAddress },
  } = usePoolDetailsContext();

  const connectModal = () =>
    setContent(<ConnectWalletModal />, {
      title: 'Login or Connect wallet',
    });

  if (!account)
    return (
      <Button
        border="none"
        display="flex"
        p="0.5rem 1rem"
        height="3.5rem"
        fontSize="1rem"
        fontWeight="500"
        cursor="pointer"
        color="#002A78"
        fontFamily="Inter"
        alignItems="center"
        background="#B4C5FF"
        borderRadius="0.75rem"
        justifyContent="center"
        onClick={connectModal}
      >
        Connect Wallet
      </Button>
    );

  const handleFarm = async (stopLoading: () => void) => {
    try {
      invariant(account, 'You must be connected to proceed');

      const lpCoin = getValues('lpCoin');

      let payload, txResult;

      if (isStake) {
        payload = interestCurveSdk.stake({
          faIn: poolAddress,
          amount: BigInt(lpCoin.valueBN.toFixed(0)),
          farm: FARMS_BY_LP[poolAddress].address.toString(),
        });
      } else {
        payload = interestCurveSdk.unstake({
          recipient: account.address,
          amount: BigInt(lpCoin.valueBN.toFixed(0)),
          farm: FARMS_BY_LP[poolAddress].address.toString(),
        });
      }

      if (payload) {
        const tx = await signAndSubmitTransaction({ payload });

        invariant(tx.status === 'Approved', 'Rejected by User');

        txResult = tx.args;
      }

      if (txResult) {
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
          action: isStake ? 'Stake' : 'Unstake',
          message: 'See on explorer',
          link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
        });
        mutate();
      }
    } catch (e) {
      //console.warn(e);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    } finally {
      stopLoading();
    }
  };

  const onSubmit = async () => {
    const dismiss = toasting.loading({
      message: isStake ? 'Staking...' : 'Unstaking...',
    });

    try {
      setLoading(true);

      await handleFarm(dismiss);
    } catch (e) {
      toasting.error({
        action: isStake ? 'Stake' : 'Unstake',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  return (
    <Button
      border="none"
      display="flex"
      p="0.5rem 1rem"
      height="3.5rem"
      fontSize="1rem"
      fontWeight="500"
      cursor="pointer"
      color="#002A78"
      fontFamily="Inter"
      alignItems="center"
      background="#B4C5FF"
      onClick={onSubmit}
      borderRadius="0.75rem"
      justifyContent="center"
    >
      {isStake
        ? loading
          ? 'Staking...'
          : 'Stake'
        : loading
          ? 'Unstaking...'
          : 'Unstake'}
    </Button>
  );
};

export default FarmFormButton;
