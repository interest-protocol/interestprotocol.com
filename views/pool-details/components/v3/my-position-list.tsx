import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Table from '@/components/table';

import { MY_POSITION_DATA, MY_POSITION_HEADER_DATA } from './v3.data';

const MyPositionList: FC = () => (
  <Div display="flex" flexDirection="column" gap="1rem">
    <Div
      display="flex"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Span
        color="#fff"
        my="0.5rem"
        fontWeight="400"
        lineHeight="2.25rem"
        fontSize={['1.125rem', '1.125rem', '1.125rem', '1.75rem']}
      >
        My positions
      </Span>
    </Div>
    <Table
      rows={MY_POSITION_DATA}
      title={MY_POSITION_HEADER_DATA}
      gridTemplateColumns="2fr 1fr 1fr 1fr"
    />
  </Div>
);

export default MyPositionList;
