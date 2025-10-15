import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import invariant from 'tiny-invariant';

import { Button } from '@/components/button';
import { toasting } from '@/components/toast';
import WalletGuardButton from '@/components/wallet-guard-button';
import { EXPLORER_URL, Network } from '@/constants';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';

const SwapButton = () => {
  const client = useAptosClient();
  const [loading, setLoading] = useState(false);
  const { control, getValues, reset } = useFormContext();
  const { account, signAndSubmitTransaction } = useAptosWallet();

  const error = useWatch({ control, name: 'error' });
  const valueOut = useWatch({ control, name: 'to.value' });
  const valueIn = useWatch({ control, name: 'from.value' });

  const handleSwap = async (stopLoading: () => void) => {
    try {
      if (!account) return;

      const { payload } = getValues();

      const tx = await signAndSubmitTransaction({ payload });

      invariant(tx.status === 'Approved', 'Rejected by User');

      const txResult = tx.args;

      await client.waitForTransaction({
        transactionHash: txResult.hash,
        options: {
          checkSuccess: true,
        },
      });

      toasting.success({
        action: 'Swap',
        message: 'See on explorer',
        link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
      });
      reset();
    } catch (e) {
      console.warn(e);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    } finally {
      stopLoading();
    }
  };

  const onSwap = async () => {
    const dismiss = toasting.loading({ message: 'Swapping...' });
    try {
      setLoading(true);
      await handleSwap(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Swap',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  const disabled =
    !Number(valueIn) || !Number(valueOut) || valueIn < 0 || valueOut < 0;

  return (
    <Div display="flex" flexDirection="column" mt="0.75rem">
      <WalletGuardButton>
        <Button
          p="1rem"
          onClick={onSwap}
          variant="filled"
          fontSize="1rem"
          lineHeight="1.5rem"
          disabled={disabled || loading}
          cursor={disabled || loading ? 'not-allowed' : 'pointer'}
          nDisabled={{
            bg: error ? '#f6465d' : '#111721',
            color: error ? '#FFF' : '#9CA3AF',
            ':hover': {
              background: error ? '#f6465d' : '#111721',
              color: error ? '#FFF' : '#9CA3AF',
            },
          }}
        >
          {loading
            ? 'Swapping...'
            : error
              ? error
              : valueIn
                ? 'Swap'
                : 'Enter an amount'}
        </Button>
      </WalletGuardButton>
    </Div>
  );
};

export default SwapButton;
