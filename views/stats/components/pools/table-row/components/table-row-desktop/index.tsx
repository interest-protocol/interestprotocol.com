import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import { PoolsProps } from '../../../pools.types';

const TableRowDesktop: FC<PoolsProps> = ({
  rank,
  token,
  transactions,
  tvl,
  volume24h,
  volume7d,
  apr1d,
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
      <Div display="flex" gap="3rem" alignItems="center">
        <CellText color="#FFFFFF80">{rank}</CellText>
        <Div display="flex" gap="0.5rem">
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
          <CellText color="#FFFFFF">{token}</CellText>
        </Div>
      </Div>
      <CellText color="#FFFFFF">{transactions}</CellText>
      <CellText color="#FFFFFF">{tvl}</CellText>
      <CellText color="#FFFFFF">{volume24h}</CellText>
      <CellText color="#FFFFFF">{volume7d}</CellText>
      <CellText color="#FFFFFF">{apr1d}</CellText>
    </Div>
  );
};

export default TableRowDesktop;
