import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';
import { formatTimeAgo } from '@/utils/date';
import { formatDollars } from '@/utils/string';

import { TransactionProps } from '../../../transactions.types';

const TableRowDesktop: FC<TransactionProps> = ({
  time,
  type,
  usdAmount,
  pairTokenAmount,
  wallet,
}) => {
  const network = useNetwork<Network>();

  return (
    <Div
      gap="1rem"
      px="1rem"
      height="4rem"
      display="grid"
      alignItems="center"
      gridTemplateColumns="1fr 3fr 2fr 2fr 2fr 2fr"
    >
      <CellText color="#FFFFFF80">{formatTimeAgo(time)}</CellText>
      <Div display="flex" gap="0.5rem" alignItems="center">
        <CellText color="#FFFFFF80">Remove</CellText>
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        <CellText color="#FFFFFF">{type}</CellText>
        <CellText color="#FFFFFF80">and</CellText>
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        <CellText color="#FFFFFF">{type}</CellText>
      </Div>
      <CellText color="#FFFFFF">
        {formatDollars(usdAmount, 6, 'start')}
      </CellText>
      <Div display="flex" gap="0.5rem" alignItems="center">
        <CellText color="#FFFFFF">{pairTokenAmount[0]}</CellText>
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
      </Div>
      <Div display="flex" gap="0.5rem" alignItems="center">
        <CellText color="#FFFFFF">{pairTokenAmount[1]}</CellText>
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
      </Div>
      <CellText color="#FFFFFF">{wallet}</CellText>
    </Div>
  );
};

export default TableRowDesktop;
