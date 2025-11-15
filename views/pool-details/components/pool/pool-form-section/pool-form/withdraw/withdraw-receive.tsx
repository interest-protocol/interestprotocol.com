import { Div, Hr } from '@stylin.js/elements';
import { FC } from 'react';

import Input from '../components/input';

const WithdrawReceive: FC = () => {
  return (
    <Div
      p="1rem"
      gap="1rem"
      display="flex"
      bg="#9CA3AF1A"
      flexDirection="column"
      borderRadius="0.75rem"
      boxShadow=" 0px 0px 0px 1px #F3F4F61A"
      pt={['1.5rem', '1.5rem', '1.5rem', '1rem']}
    >
      <Input readonly shortView onlyField field="tokenList.0" />
      <Hr border="1px solid #F3F4F61A" />
      <Input readonly shortView onlyField field="tokenList.1" />
    </Div>
  );
};

export default WithdrawReceive;
