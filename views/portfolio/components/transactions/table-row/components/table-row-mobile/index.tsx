import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import ExternalLink from '@/components/svg/external-link';
import CellText from '@/components/table/components/cell-text';
import { formatTimeAgo } from '@/utils/date';
import StatusBtn from '@/views/portfolio/components/status-btn ';

import { TransactionsProps } from '../../../transation.types';

const TableRowMobile: FC<TransactionsProps> = ({
  time,
  action,
  pool,
  details,
}) => (
  <Div p="1rem" display="flex" flexDirection="column" gap="0.5rem">
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Time:</CellText>
      <CellText color="#FFFFFF">{formatTimeAgo(time)}</CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Action:</CellText>
      <Div width="3.875rem">
        {action ? <StatusBtn status="Claimed" /> : <StatusBtn status="Stake" />}
      </Div>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Pool:</CellText>
      <CellText color="#FFFFFF">{pool}</CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Details:</CellText>
      <Div gap="0.75rem" display="flex" alignItems="center">
        <CellText color="#FFFFFF">{details}</CellText>
        <ExternalLink
          maxWidth="1rem"
          maxHeight="1rem"
          width="100%"
          color="#FFF"
        />
      </Div>
    </Div>
  </Div>
);

export default TableRowMobile;
