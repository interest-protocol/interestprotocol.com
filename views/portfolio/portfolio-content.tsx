import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import CurvePools from './components/curve-pools';
import HeadInfo from './components/head-info';
import Transactions from './components/transactions';
import V3 from './components/v3';
import { Info } from './portfolio.data';

const PortfolioContent: FC = () => {
  return (
    <Div
      width="100%"
      display="flex"
      flexDirection="column"
      gap={['1rem', '2rem']}
      px={['1.5rem', '5.5rem']}
    >
      <Div
        gap="1rem"
        width="100%"
        display="grid"
        gridTemplateColumns={['1fr', 'repeat(4, 1fr)']}
      >
        {Info.map((info) => (
          <HeadInfo key={unikey()} title={info.title} value={info.value} />
        ))}
      </Div>

      <CurvePools />
      <V3 />
      <Transactions />
    </Div>
  );
};

export default PortfolioContent;
