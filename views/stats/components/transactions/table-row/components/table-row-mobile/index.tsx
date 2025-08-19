import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';

import { TransactionProps } from '../../../transactions.types';

const TableRowMobile: FC<TransactionProps> = ({
  time,
  type,
  usdAmount,
  tokenAmount1,
  tokenAmount2,
  wallet,
}) => (
  <Div p="m" display="flex" flexDirection="column" gap="0.25rem">
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Time:</CellText>
      <CellText color="#FFFFFF80">{time}</CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Type:</CellText>
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
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">USD Amount:</CellText>
      <CellText color="#FFFFFF">{usdAmount}</CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF80">Token Amount 1:</CellText>
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
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Token Amount 2:</CellText>
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
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Wallet:</CellText>
      <CellText color="#FFFFFF">{wallet}</CellText>
    </Div>
  </Div>
);

export default TableRowMobile;
