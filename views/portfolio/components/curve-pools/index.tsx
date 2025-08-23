import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Earnings from '../earnings';
import Position from '../position';
import Title from '../title';

const CurvePools: FC = () => {
  return (
    <Div width="100%" display="flex" flexDirection="column">
      <Div display="flex" justifyContent="space-between">
        <Title title="Curve pools" count={0} />
        <Div display="flex" gap="1rem">
          <Position type="pools" value={0} />
          <Earnings value={98} />
        </Div>
      </Div>
    </Div>
  );
};

export default CurvePools;
