import {
  Network,
  normalizeSuiAddress,
} from '@interest-protocol/interest-aptos-v2';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Button, Div, P } from '@stylin.js/elements';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import invariant from 'tiny-invariant';

import { EXPLORER_URL } from '@/constants';
import { useDialog } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

import SuccessModal from '../../components/success-modal';
import SuccessModalTokenCard from '../../components/success-modal/success-modal-token-card';
import { AptosTxError } from './swap.types';
import { logSwap } from './swap.utils';

const SwapButton = () => {
  const client = useAptosClient();
  const network = useNetwork<Network>();
  const { coinsMap, mutate } = useCoins();
  const { dialog, handleClose } = useDialog();
  const [loading, setLoading] = useState(false);
  const { account, signAndSubmitTransaction } = useAptosWallet();
  const { getValues, setValue, control, reset } = useFormContext();

  const to = useWatch({ control, name: 'to' });
  const from = useWatch({ control, name: 'from' });
  const error = useWatch({ control, name: 'error' });
  const valueOut = useWatch({ control, name: 'to.value' });
  const valueIn = useWatch({ control, name: 'from.value' });

  const coin = coinsMap[normalizeSuiAddress(from?.type)];

  const balance = FixedPointMath.toNumber(
    coin?.balance ?? ZERO_BIG_NUMBER,
    coin?.decimals ?? coin?.decimals
  );

  const gotoExplorer = () => {
    window.open(getValues('explorerLink'), '_blank', 'noopener,noreferrer');
  };

  const onCloseModal = () => {
    reset();
    handleClose();
  };

  const handleSwap = async () => {
    try {
      setLoading(true);
      setValue('error', '');

      if (!account) return;

      const { from, to, payload } = getValues();

      const startTime = Date.now();

      const tx = await signAndSubmitTransaction({ payload });

      invariant(tx.status === 'Approved', 'Rejected by User');

      const txResult = tx.args;

      const endTime = Date.now() - startTime;

      setValue('executionTime', String(endTime));

      await client.waitForTransaction({
        transactionHash: txResult.hash,
        options: {
          checkSuccess: true,
        },
      });

      logSwap(account!.address, from, to, network, txResult.hash);

      setValue(
        'explorerLink',
        EXPLORER_URL[Network.MovementMainnet](`txn/${txResult.hash}`)
      );
    } catch (e: unknown) {
      const err = e as AptosTxError;

      if (err.data?.error_code === 'mempool_is_full') {
        throw new Error('The mempool is full, try again in a few seconds.');
      }

      throw e;
    } finally {
      mutate();
      setLoading(false);
    }
  };

  const onSwap = () =>
    dialog.promise(handleSwap(), {
      loading: () => ({
        title: 'Swapping...',
        message: 'We are swapping, and you will let you know when it is done',
      }),
      error: (error) => ({
        title: 'Swap Failure',
        message:
          (error as Error).message ||
          'Your swap failed, please try to increment your slippage and try again or contact the support team',
        primaryButton: { label: 'Try again', onClick: handleClose },
      }),
      success: () => ({
        title: 'Swap Successful',
        message: (
          <SuccessModal
            transactionTime={`${(
              Number(getValues('executionTime')) / 1000
            ).toFixed(2)}`}
          >
            <SuccessModalTokenCard from={from} to={to} />
          </SuccessModal>
        ),
        primaryButton: {
          label: 'See on Explorer',
          onClick: gotoExplorer,
        },
        secondaryButton: (
          <Button mr="s" color="onSurface" onClick={onCloseModal}>
            got it
          </Button>
        ),
      }),
    });

  const disabled =
    !Number(valueIn) ||
    !Number(valueOut) ||
    !Number(balance) ||
    valueIn < 0 ||
    valueOut < 0 ||
    !balance ||
    !!error;

  return (
    <Div display="flex" flexDirection="column" mt="0.75rem">
      {account?.address ? (
        <Button
          bg="#B4C5FF"
          border="none"
          height="3.5rem"
          onClick={onSwap}
          disabled={disabled}
          borderRadius="0.75rem"
          justifyContent="center"
          nDisabled={{
            bg: error ? '#f6465d' : '#9CA3AF1A',
            ':hover': {
              background: error ? '#f6465d' : '#343438',
              color: '#909094',
            },
          }}
          cursor="pointer"
        >
          <P
            p="1rem"
            fontSize="1rem"
            fontWeight="500"
            fontFamily="Inter"
            lineHeight="1.5rem"
            color={error ? '#FFFFFF' : !disabled ? '#002A78' : '#9CA3AF'}
          >
            {loading ? 'Swapping...' : error ? error : 'Confirm Swap'}
          </P>
        </Button>
      ) : (
        <Button
          border="none"
          p="0.5rem 1rem"
          height="3.5rem"
          display="flex"
          color="#002A78"
          fontWeight="500"
          fontSize="1rem"
          background="#B4C5FF"
          alignItems="center"
          fontFamily="Inter"
          cursor="pointer"
          borderRadius="0.75rem"
          justifyContent="center"
        >
          Connect Wallet
        </Button>
      )}
    </Div>
  );
};

export default SwapButton;
