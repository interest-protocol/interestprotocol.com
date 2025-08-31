import { Div } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { Button } from '@/components/Button';

import Profile from './profile';

const Wallet: FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const toogleConnected = () => setIsWalletConnected(not);
  return (
    <Div display="flex" justifyContent="flex-end">
      {isWalletConnected ? (
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
          onClick={toogleConnected}
        >
          Connect Wallet
        </Button>
      ) : (
        <Profile disconnect={toogleConnected} />
      )}
    </Div>
  );
};

export default Wallet;
