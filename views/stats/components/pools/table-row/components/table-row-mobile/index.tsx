import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { formatDollars } from '@/utils/string';

import { PoolsProps } from '../../../pools.types';
import StatusBtn from '../status-btn ';

const TableRowMobile: FC<PoolsProps> = ({
  rank,
  token,
  transactions,
  tvl,
  volume24h,
  volume7d,
  apr,
}) => {
  return (
    <Div p="1rem" display="flex" flexDirection="column" gap="0.5rem">
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF80">#:</CellText>
        <CellText color="#FFFFFF">{rank}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Token Name:</CellText>
        <Div display="flex" gap="3rem" alignItems="center">
          <TokenIcon
            withBg
            size="0.75rem"
            symbol="Move"
            network={Network.MovementMainnet}
          />
          <Div display="flex" gap="0.5rem" flexDirection="column">
            <CellText color="#FFFFFF">{token}</CellText>
            <Div display="flex" gap="0.5rem">
              <StatusBtn status="Earn" />
              <StatusBtn status="Curve" />
              <StatusBtn status="Stable" />
            </Div>
          </Div>
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Transactions:</CellText>
        <CellText color="#FFFFFF">
          {formatDollars(transactions, 6, 'start')}
        </CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">TVL:</CellText>
        <CellText color="#FFFFFF">{tvl}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">24h Volume:</CellText>
        <CellText color="#FFFFFF">{volume24h}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">7D Volume:</CellText>
        <CellText color="#FFFFFF">{volume7d}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">1D APR:</CellText>
        <CellText color="#FFFFFF">{formatDollars(apr, 6, 'start')}</CellText>
      </Div>
    </Div>
  );
};

export default TableRowMobile;
