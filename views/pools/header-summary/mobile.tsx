import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import Filter from '@/components/filter';

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
      </Div>
    </Div>
    <Div display="flex" justifyContent="space-between">
      <HeaderInfo key={v4()} {...data[1]} />
      <HeaderInfo key={v4()} {...data[2]} right />
    </Div>
  </Div>
);

export default PoolHeaderSummaryMobile;
