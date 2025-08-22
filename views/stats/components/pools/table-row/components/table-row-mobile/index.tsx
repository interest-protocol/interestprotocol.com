import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import { PoolsProps } from '../../../pools.types';

const TableRowMobile: FC<PoolsProps> = ({
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
    <Div p="1rem" display="flex" flexDirection="column" gap="0.25rem">
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF80">#:</CellText>
        <CellText color="#FFFFFF">{rank}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Token Name:</CellText>
        <Div display="flex" gap="0.5rem" alignItems="center">
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
          <CellText color="#FFFFFF">{token}</CellText>
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Transactions:</CellText>
        <CellText color="#FFFFFF">{transactions}</CellText>
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
        <CellText color="#FFFFFF">{apr1d}</CellText>
      </Div>
    </Div>
  );
};

export default TableRowMobile;
