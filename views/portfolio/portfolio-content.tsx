import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import CurvePools from './components/curve-pools';
import HeadInfo from './components/head-info';
import { Info } from './portfolio.data';

const PortfolioContent: FC = () => {
  return (
    <Div
      gap="2rem"
      width="100%"
      display="flex"
      flexDirection="column"
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
    </Div>
  );
};

export default PortfolioContent;
