import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { VOLUME_DETAILS_DATA } from '../pool/pool.data';
import PoolBalance from '../pool-balance';

const SummaryHeader: FC = () => (
  <Div
    gap="1rem"
    display="grid"
    justifyItems="start end"
    justifyContent="space-between"
    gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
  >
    {VOLUME_DETAILS_DATA.map(({ label, amount }, index) => (
      <Div
        key={v4()}
        display="flex"
        gap="0.75rem"
        flexDirection="column"
        justifySelf={[
          index % 2 == 1 ? 'end' : 'unset',
          index % 2 == 1 ? 'end' : 'unset',
          index % 2 == 1 ? 'end' : 'unset',
          'unset',
        ]}
      >
        <Span
          fontWeight="400"
          color="#9CA3AF"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
          lineHeight={['1.25rem', '1.25rem', '1.25rem', '1.75rem']}
        >
          {label}
        </Span>
        <Span
          color="#fff"
          fontWeight="500"
          lineHeight={['2rem', '2rem', '2rem', '2.25rem']}
          fontSize={['1.125rem', '1.125rem', '1.125rem', '1.5rem']}
        >
          {amount}
        </Span>
      </Div>
    ))}
    <Div
      key={v4()}
      flexWrap="wrap"
      flexDirection="column"
      display={['none', 'none', 'none', 'flex']}
    >
      <PoolBalance />
    </Div>
  </Div>
);

export default SummaryHeader;
