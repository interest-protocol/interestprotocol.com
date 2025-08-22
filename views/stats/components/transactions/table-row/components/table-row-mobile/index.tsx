import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';
import { formatDollars } from '@/utils/string';

import { TransactionProps } from '../../../transactions.types';

const TableRowMobile: FC<TransactionProps> = ({
  time,
  type,
  usdAmount,
  tokenAmount1,
  tokenAmount2,
  wallet,
}) => {
  const network = useNetwork<Network>();

  return (
    <Div p="1rem" display="flex" flexDirection="column" gap="0.25rem">
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Time:</CellText>
        <CellText color="#FFFFFF80">{time}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Type:</CellText>
        <Div display="flex" gap="0.5rem" alignItems="center">
          <CellText color="#FFFFFF80">Remove</CellText>
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
          <CellText color="#FFFFFF">{type}</CellText>
          <CellText color="#FFFFFF80">and</CellText>
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
          <CellText color="#FFFFFF">{type}</CellText>
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">USD Amount:</CellText>
        <CellText color="#FFFFFF">
          {formatDollars(usdAmount, 6, 'start')}
        </CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF80">Token Amount 1:</CellText>
        <Div display="flex" gap="0.5rem" alignItems="center">
          <CellText color="#FFFFFF">{tokenAmount1}</CellText>
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Token Amount 2:</CellText>
        <Div display="flex" gap="0.5rem" alignItems="center">
          <CellText color="#FFFFFF">{tokenAmount2}</CellText>
          <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        </Div>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Wallet:</CellText>
        <CellText color="#FFFFFF">{wallet}</CellText>
      </Div>
    </Div>
  );
};

export default TableRowMobile;
