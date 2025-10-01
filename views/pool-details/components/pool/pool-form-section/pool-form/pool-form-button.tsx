import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import invariant from 'tiny-invariant';

import ConnectWalletModal from '@/components/layout/header/wallet/connect-wallet';
import { toasting } from '@/components/toast';
import { EXPLORER_URL, Network } from '@/constants';
import { useModal } from '@/hooks';
import { useInterestCurveSdk } from '@/hooks/use-interest-curve-sdk';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { usePoolDetailsContext } from '@/views/pool-details/pool-details.context';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

import { PoolFormButtonProps } from './pool-form.types';

const PoolFormButton: FC<PoolFormButtonProps> = ({ isDeposit }) => {
  const client = useAptosClient();
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

  const handleDeposit = async (stopLoading: () => void) => {
    try {
      invariant(account, 'You must be connected to proceed');

      let txResult;

      const tokens = getValues('tokenList');

      const payload = interestCurveSdk.addLiquidity({
        pool: poolAddress,
        fasIn: tokens.map((token) => token.type),
        recipient: account.address,
        minAmountOut: BigInt(getValues('lpCoin.valueBN').toFixed(0) ?? 0),
        amounts: tokens.map((token) => BigInt(token.valueBN?.toFixed(0) ?? 0)),
      });

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
          action: 'Deposit',
          message: 'See on explorer',
          link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
        });
      }
    } catch (e) {
      console.warn({ e });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    } finally {
      stopLoading();
    }
  };

  const handleWithdraw = async (stopLoading: () => void) => {
    try {
      invariant(account, 'You must be connected to proceed');

      const lpCoin = getValues('lpCoin');

      let payload, txResult;
      const selectedCoinIndex = getValues('selectedCoinIndex');

      if (selectedCoinIndex[0] && selectedCoinIndex[1]) {
        payload = interestCurveSdk.removeLiquidity({
          pool: poolAddress,
          recipient: account.address,
          amount: BigInt(lpCoin.valueBN.toFixed(0)),
          minAmountsOut: getValues('tokenList').map(() => BigInt(0)),
        });
      } else {
        const tmpIndex = selectedCoinIndex[0];
        payload = interestCurveSdk.removeLiquidityOneFa({
          pool: lpCoin.type,
          minAmountOut: BigInt(0),
          recipient: account.address,
          amount: BigInt(lpCoin.valueBN.decimalPlaces(0, 1).toString()),
          faOut: getValues('tokenList')[tmpIndex!].type,
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
          action: 'Withdraw',
          message: 'See on explorer',
          link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
        });
      }
    } catch (e) {
      console.warn({ e });

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
      message: isDeposit ? 'Depositing...' : 'Withdrawing...',
    });

    try {
      setLoading(true);

      await (isDeposit ? handleDeposit : handleWithdraw)(dismiss);
    } catch (e) {
      toasting.error({
        action: isDeposit ? 'Deposit' : 'Withdraw',
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
      {isDeposit
        ? loading
          ? 'Depositing...'
          : 'Deposit'
        : loading
          ? 'Withdrawing...'
          : 'Withdraw'}
    </Button>
  );
};

export default PoolFormButton;
