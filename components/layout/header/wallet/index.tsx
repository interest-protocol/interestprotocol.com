import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';

import Profile from './profile';

const Wallet: FC = () => {
  const { connected, select, disconnect } = useAptosWallet();

  return (
    <Div display="flex" justifyContent="flex-end">
      {!connected ? (
        <Button
          all="unset"
          px="2rem"
          py="1rem"
          bg="#B4C5FF"
          fontWeight="500"
          cursor="pointer"
          variant="filled"
          width="fit-content"
          borderRadius="1rem"
          onClick={() => select('Nightly')}
        >
          Connect Wallet
        </Button>
      ) : (
        <Profile disconnect={disconnect} />
      )}
    </Div>
  );
};

export default Wallet;
