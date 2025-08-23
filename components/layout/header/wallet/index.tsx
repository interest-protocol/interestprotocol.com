import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/Button';

const Wallet: FC = () => {
  return (
    <Div display="flex" justifyContent="flex-end">
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
      >
        Connect Wallet
      </Button>
    </Div>
  );
};

export default Wallet;
