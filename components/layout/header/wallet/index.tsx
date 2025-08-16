import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

const Wallet: FC = () => (
  <Div display="flex" justifyContent="flex-end">
    <Button
      all="unset"
      px="2rem"
      py="1rem"
      bg="#B4C5FF"
      fontWeight="500"
      cursor="pointer"
      borderRadius="1rem"
    >
      Connect Button
    </Button>
  </Div>
);

export default Wallet;
