import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import invariant from 'tiny-invariant';

import { Button } from '@/components/button';
import { InfoSVG } from '@/components/svg';
import { toasting } from '@/components/toast';
import { EXPLORER_URL, Network } from '@/constants';
import { useInterestV2Sdk } from '@/hooks/use-interest-v2-sdk';
import { FixedPointMath } from '@/lib';
import { useAptosClient } from '@/lib/aptos-provider/aptos-client/aptos-client.hooks';

import { ICreateTokenForm } from '../../create-token.types';

const CreateTokenFormButton: FC = () => {
  const client = useAptosClient();
  const v2Sdk = useInterestV2Sdk();
  const [loading, setLoading] = useState(false);
  const { control, reset } = useFormContext<ICreateTokenForm>();
  const { account, signAndSubmitTransaction } = useAptosWallet();

  const values = useWatch({ control });

  const handleCreateToken = async (stopLoading: () => void) => {
    try {
      const {
        name,
        symbol,
        supply,
        decimals,
        imageUrl: iconURI,
        projectUrl: projectURI,
      } = values;

      invariant(decimals && supply, 'You must fill the required fields');

      const createFaArgs = {
        name: name || '',
        symbol: symbol || '',
        iconURI,
        decimals,
        projectURI,
        recipient: account!.address,
        totalSupply: BigInt(
          FixedPointMath.toBigNumber(supply!, decimals).toString()
        ),
      };

      const payload = v2Sdk.createFa(createFaArgs);

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
          .catch(console.warn);
      } while (waitingTx);

      toasting.success({
        action: 'Create Token',
        message: 'See on explorer',
        link: EXPLORER_URL[Network.MAINNET](`txn/${txResult.hash}`),
      });
      reset();
    } catch (e) {
      //console.warn({ e });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((e as any)?.data?.error_code === 'mempool_is_full')
        throw new Error('The mempool is full, try again in a few seconds.');

      throw e;
    } finally {
      stopLoading();
    }
  };

  const onSubmit = async () => {
    const dismiss = toasting.loading({ message: 'Create token...' });
    try {
      setLoading(true);
      await handleCreateToken(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Create token',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  const isRequiredFieldsFilled = !!(values.name && values.symbol);

  const buttonText = loading
    ? 'Creating token...'
    : isRequiredFieldsFilled
      ? ' Pay 1 MOVE and Create'
      : 'Create Token';

  const buttonStyles = isRequiredFieldsFilled
    ? {
        backgroundColor: '#B4C5FF',
        color: '#002A78',
      }
    : {
        backgroundColor: '#9CA3AF1A',
        color: '#9CA3AF',
      };

  return (
    <Div
      gap="1.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        p="1rem"
        width="100%"
        variant="filled"
        fontSize="1rem"
        lineHeight="1.5rem"
        style={buttonStyles}
        onClick={onSubmit}
        disabled={!isRequiredFieldsFilled || loading}
      >
        {isRequiredFieldsFilled && (
          <Div
            ml="0.5rem"
            width="1rem"
            height="1rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <InfoSVG maxWidth="100%" maxHeight="100%" width="100%" />
          </Div>
        )}
        {buttonText}
      </Button>
    </Div>
  );
};

export default CreateTokenFormButton;
