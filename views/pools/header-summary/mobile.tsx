import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Filter from '@/components/filter';
import { formatDollars } from '@/utils';

import HeaderInfo from '../../../components/header-info';
import {
  AGGREGATION_MAP,
  AGGREGATION_REVERSE_MAP,
} from './header-summary.data';
import {
  Aggregation,
  HeaderSummaryTerminalProps,
} from './pool-header-summary.types';

const PoolHeaderSummaryMobile: FC<HeaderSummaryTerminalProps> = ({
  data,
  aggregation,
  setAggregation,
}) => (
  <Div
    gap="1rem"
    flexDirection="column"
    display={['flex', 'flex', 'flex', 'none']}
  >
    <Div display="flex" justifyContent="space-between">
      <HeaderInfo key={v4()} {...data[0]} hideDate />
      <Div>
        <Filter
          options={['D', 'W', 'M']}
          interval={AGGREGATION_REVERSE_MAP[aggregation]}
          setInterval={(value) =>
            setAggregation(AGGREGATION_MAP[value as Aggregation])
          }
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

export default PoolHeaderSummaryMobile;
