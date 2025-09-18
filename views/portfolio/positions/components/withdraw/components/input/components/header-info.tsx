import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

const HeaderInfo: FC = () => {
  return (
    <Div display="flex" alignItems="flex-end" justifyContent="space-between">
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.868rem"
        lineHeight="1.25rem"
      >
        You Get
      </P>
    </Div>
  );
};

export default HeaderInfo;
