import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import MetricInfo from './components/metric-info';
import { METRIC_INFO_DATA } from './portfolio.data';

const PortfolioSummary: FC = () => {
  return (
    <Div
      width="100%"
      display="grid"
      gap={['0.5rem', '1rem']}
      gridTemplateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
    >
      {METRIC_INFO_DATA.map((info) => (
        <MetricInfo key={unikey()} title={info.title} value={info.value} />
      ))}
    </Div>
  );
};

export default PortfolioSummary;
