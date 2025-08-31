import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Avatar from './avatar';

const UserInfo: FC = () => (
  <Div>
    <Div
      gap="1.25rem"
      display="flex"
      minWidth="14rem"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar accountAddress="0xb5mc...0da6" />
    </Div>
  </Div>
);

export default UserInfo;
