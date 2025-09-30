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

const PoolHeaderSummaryDesktop: FC<HeaderSummaryTerminalProps> = ({
  data,
  aggregation,
  setAggregation,
}) => (
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
      options={['D', 'W', 'M']}
      interval={AGGREGATION_REVERSE_MAP[aggregation]}
      setInterval={(value) =>
        setAggregation(AGGREGATION_MAP[value as Aggregation])
      }
    />
  </Div>
);

export default PoolHeaderSummaryDesktop;
