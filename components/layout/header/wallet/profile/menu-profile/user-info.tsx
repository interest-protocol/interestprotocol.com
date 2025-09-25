import { useAptosWallet } from '@razorlabs/wallet-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Avatar from './avatar';

const UserInfo: FC = () => {
  const { account } = useAptosWallet();

  return (
    <Div
      gap="1.25rem"
      display="flex"
      minWidth="14rem"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar accountAddress={account?.address ?? ''} />
    </Div>
  );
};

export default UserInfo;
