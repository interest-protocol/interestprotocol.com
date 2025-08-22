import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';
import { formatDollars } from '@/utils/string';

import { PoolsProps } from '../../../pools.types';
import StatusBtn from '../status-btn ';

const TableRowDesktop: FC<PoolsProps> = ({
  rank,
  token,
  transactions,
  tvl,
  volume24h,
  volume7d,
  apr,
}) => {
  const network = useNetwork<Network>();

  return (
    <Div
      gap="1rem"
      px="1rem"
      height="4rem"
      display="grid"
      alignItems="center"
      gridTemplateColumns="1fr 2fr 1fr 1fr 1fr 1fr 1fr"
    >
      <CellText color="#FFFFFF80">{rank}</CellText>

      <Div display="flex" gap="3rem" alignItems="center">
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        <Div display="flex" gap="0.5rem" flexDirection="column">
          <CellText color="#FFFFFF">{token}</CellText>
          <Div display="flex" gap="0.5rem">
            <StatusBtn status="Earn" />
            <StatusBtn status="Curve" />
            <StatusBtn status="Stable" />
          </Div>
        </Div>
      </Div>

      <CellText color="#FFFFFF">
        {formatDollars(transactions, 6, 'start')}
      </CellText>
      <CellText color="#FFFFFF">{tvl}</CellText>
      <CellText color="#FFFFFF">{volume24h}</CellText>
      <CellText color="#FFFFFF">{volume7d}</CellText>
      <CellText color="#FFFFFF">{formatDollars(apr, 6, 'start')}</CellText>
    </Div>
  );
};

export default TableRowDesktop;
