import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import { TokenProps } from '../../../tokens.types';

const TableRowMobile: FC<TokenProps> = ({
  rank,
  token,
  price,
  hour,
  day,
  fdv,
  volume,
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
        <CellText color="#FFFFFF">Price:</CellText>
        <CellText color="#FFFFFF">{price}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">1h:</CellText>
        <CellText color={hour.startsWith('+') ? '#157F3D' : '#EF4444'}>
          {hour}
        </CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">1d:</CellText>
        <CellText color={day.startsWith('-') ? '#EF4444' : '#157F3D'}>
          {day}
        </CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">FDV:</CellText>
        <CellText color="#FFFFFF">{fdv}</CellText>
      </Div>
      <Div display="flex" gap="0.5rem">
        <CellText color="#FFFFFF">Volume:</CellText>
        <CellText color="#FFFFFF">{volume}</CellText>
      </Div>
    </Div>
  );
};

export default TableRowMobile;
