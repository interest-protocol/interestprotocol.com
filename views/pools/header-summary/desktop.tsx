import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import HeaderInfo from '../../../components/header-info';
import Filter from '../components/filter';
import { HeaderSummaryProps } from './pool-header-summary.types';

const PoolHeaderSummaryDesktop: FC<HeaderSummaryProps> = ({ data }) => {
  const [interval, setInterval] = useState('1M');
  return (
    <Div
      gap="1rem"
      width="100%"
      justifyContent="space-between"
      display={['none', 'none', 'none', 'flex']}
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems={['flex-start', 'flex-start', 'flex-start', 'start']}
    >
      {data.map((info) => (
        <HeaderInfo key={v4()} {...info} />
      ))}
      <Filter
        interval={interval}
        setInterval={setInterval}
        options={['1W', '1M', '3M']}
      />
    </Div>
  );
};

export default PoolHeaderSummaryDesktop;
