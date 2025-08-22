import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import { TokenProps } from '../../../tokens.types';

const TableRowDesktop: FC<TokenProps> = ({
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
    <Div
      gap="1rem"
      px="1rem"
      height="4rem"
      display="grid"
      alignItems="center"
      gridTemplateColumns="2fr 2fr 2fr 2fr 2fr 2fr 2fr"
    >
      <CellText color="#FFFFFF80">{rank}</CellText>
      <Div display="flex" gap="0.5rem">
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        <TokenIcon withBg size="0.75rem" symbol="Move" network={network} />
        <CellText color="#FFFFFF">{token}</CellText>
      </Div>
      <CellText color="#FFFFFF">{price}</CellText>
      <CellText color={hour.startsWith('+') ? '#157F3D' : '#EF4444'}>
        {hour}
      </CellText>
      <CellText color={day.startsWith('-') ? '#EF4444' : '#157F3D'}>
        {day}
      </CellText>
      <CellText color="#FFFFFF">{fdv}</CellText>
      <CellText color="#FFFFFF">{volume}</CellText>
    </Div>
  );
};

export default TableRowDesktop;
