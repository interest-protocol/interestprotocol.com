import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import Dropdown from '@/components/dropdown';
import Filter from '@/components/filter';
import { VOLUME_FILTER_DATA } from '@/views/stats/components/volume-filter/volume-filter.data';

const ChartFilters: FC = () => {
  const [interval, setInterval] = useState('1D');

  return (
    <Div
      gap="0.5rem"
      display={['none', 'none', 'none', 'flex']}
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div width="max-content" mx={['auto', 'auto', 'auto', 'unset']}>
        <Filter
          interval={interval}
          setInterval={setInterval}
          options={['1H', '1D', '1W', '1M', '1Y']}
        />
      </Div>
      <Dropdown isRounded placeholder="Volume" options={VOLUME_FILTER_DATA} />
    </Div>
  );
};

export default ChartFilters;
