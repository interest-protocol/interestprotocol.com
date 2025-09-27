import { Div, P } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { formatDollars } from '@/utils';

import HeaderInfo from '../../../components/header-info';
import Filter from '../components/filter';
import { HeaderSummaryProps } from './pool-header-summary.types';

const PoolHeaderSummaryMobile: FC<HeaderSummaryProps> = ({ data }) => {
  const [interval, setInterval] = useState('1M');
  return (
    <Div
      gap="1rem"
      flexDirection="column"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <Div display="flex" justifyContent="space-between">
        <HeaderInfo key={v4()} {...data[0]} hideDate />
        <Div>
          <Filter
            interval={interval}
            setInterval={setInterval}
            options={['1W', '1M', '3M']}
          />
          <P
            color="#9CA3AF"
            fontWeight="400"
            textAlign="right"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="1.25rem"
          >
            {`${formatDollars(+data[0].value, 6, 'start')} ${data[0].date}`}
          </P>
        </Div>
      </Div>

      <Div display="flex" justifyContent="space-between">
        <HeaderInfo key={v4()} {...data[1]} />
        <HeaderInfo key={v4()} {...data[2]} right />
      </Div>
    </Div>
  );
};

export default PoolHeaderSummaryMobile;
