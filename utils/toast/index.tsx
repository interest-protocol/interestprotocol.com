import { TransactionResponse } from '@aptos-labs/ts-sdk';
import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div, P } from '@stylin.js/elements';
import toast from 'react-hot-toast';

import { EXPLORER_URL } from '@/constants';

export const showTXSuccessToast = async (
  tx: TransactionResponse,
  network: Network
): Promise<void> => {
  const explorerLink = EXPLORER_URL[network](`txblock/${tx.hash}`);

  toast(
    <a target="__blank" rel="noreferrer nofollow" href={explorerLink}>
      <Div display="flex" alignItems="center">
        <P
          color="accent"
          cursor="pointer"
          textDecoration="underline"
        >
          Explorer
        </P>
      </Div>
    </a>
  );
};
