import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Dropdown from '@/components/dropdown';
import Table from '@/components/table';
import { TRANSACTION_FILTER_DATA } from '@/views/portfolio/portfolio.data';

import {
  TRANSACTION_POOL_DATA,
  TRANSACTION_POOL_HEADER_DATA,
} from './pool.data';

const TransactionList: FC = () => (
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
        Transactions
      </Span>
      <Dropdown
        isRounded
        placeholder="transaction"
        options={TRANSACTION_FILTER_DATA}
      />
    </Div>
    <Table
      rows={TRANSACTION_POOL_DATA}
      title={TRANSACTION_POOL_HEADER_DATA}
      gridTemplateColumns="6rem 2fr 1fr 1fr 1fr 3rem"
    />
  </Div>
);

export default TransactionList;
