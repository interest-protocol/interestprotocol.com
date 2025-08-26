import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import ExternalLink from '@/components/svg/external-link';
import CellText from '@/components/table/components/cell-text';
import StatusBtn from '@/views/portfolio/components/status-btn ';

import { TransactionsProps } from '../../../transation.types';

const TableRowDesktop: FC<TransactionsProps> = ({
  time,
  action,
  pool,
  details,
}) => (
  <Div
    gap="1rem"
    px="1rem"
    height="4rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns="repeat(4,1.5fr)"
  >
    <CellText color="#FFFFFF">{time}</CellText>
    <Div width="3.875rem">
      {action ? <StatusBtn status="Claimed" /> : <StatusBtn status="Stake" />}
    </Div>
    <CellText color="#FFFFFF">{pool}</CellText>
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
);

export default TableRowDesktop;
