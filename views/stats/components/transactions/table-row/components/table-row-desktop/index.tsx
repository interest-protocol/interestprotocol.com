import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';

import { TransactionProps } from '../../../transactions.types';

const TableRowDesktop: FC<TransactionProps> = ({
  time,
  type,
  usdAmount,
  tokenAmount1,
  tokenAmount2,
  wallet,
}) => (
  <Div
    gap="m"
    px="1rem"
    height="4rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns="1fr 3fr 2fr 2fr 2fr 2fr"
  >
    <CellText color="#FFFFFF80">{time}</CellText>
    <Div display="flex" gap="0.5rem" alignItems="center">
      <CellText color="#FFFFFF80">Remove</CellText>
      <img
        width={20}
        height={20}
        alt={`logo`}
        src="/android-icon-36x36.png"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <CellText color="#FFFFFF">{type}</CellText>
      <CellText color="#FFFFFF80">and</CellText>
      <img
        width={20}
        height={20}
        alt={`logo`}
        src="/android-icon-36x36.png"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <CellText color="#FFFFFF">{type}</CellText>
    </Div>
    <CellText color="#FFFFFF">{usdAmount}</CellText>
    <Div display="flex" gap="0.5rem" alignItems="center">
      <CellText color="#FFFFFF">{tokenAmount1}</CellText>
      <img
        width={20}
        height={20}
        alt={`logo`}
        src="/android-icon-36x36.png"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </Div>
    <Div display="flex" gap="0.5rem" alignItems="center">
      <CellText color="#FFFFFF">{tokenAmount2}</CellText>
      <img
        width={20}
        height={20}
        alt={`logo`}
        src="/android-icon-36x36.png"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </Div>
    <CellText color="#FFFFFF">{wallet}</CellText>
  </Div>
);

export default TableRowDesktop;
