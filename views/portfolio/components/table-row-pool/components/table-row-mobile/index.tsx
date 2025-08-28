import { Network } from '@interest-protocol/interest-aptos-v2';
import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';
import TokenIcon from '@/components/token-icon';
import { formatDollars } from '@/utils/string';

import StatusBtn from '../../../status-btn ';
import { PoolsProps } from '../../pools.types';

const TableRowMobile: FC<PoolsProps> = ({
  lp,
  pool,
  pairPool,
  inRange,
  liquidity,
  leverage,
  earnings,
}) => (
  <Div p="1rem" display="flex" flexDirection="column" gap="0.5rem">
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Pool:</CellText>
      <Div display="flex" gap="3rem" alignItems="center">
        <TokenIcon
          withBg
          url={lp}
          rounded
          symbol="MOVE"
          size="1.206rem"
          network={Network.MovementMainnet}
        />
        <Div display="flex" gap="0.5rem" flexDirection="column">
          <CellText color="#FFFFFF">{`${pool[0]} ${pool[1]}`}</CellText>
          <Div display="flex" gap="0.5rem">
            <StatusBtn status="Earn" />
            <StatusBtn status="Curve" />
            <StatusBtn status="Volatile" />
          </Div>
          <CellText color="#FFFFFF">{`${pairPool}`}</CellText>
        </Div>
      </Div>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Price in Range:</CellText>
      <Div width="3.875rem">{inRange && <StatusBtn status="Range" />}</Div>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Liquidity:</CellText>
      <CellText color="#FFFFFF">
        {formatDollars(liquidity, 6, 'start')}
      </CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Leverage:</CellText>
      <CellText color="#FFFFFF">{leverage}</CellText>
    </Div>
    <Div display="flex" gap="0.5rem">
      <CellText color="#FFFFFF">Earnings:</CellText>
      <CellText color="#FFFFFF">{formatDollars(earnings, 6, 'start')}</CellText>
    </Div>
    <Link href="#">
      <CellText color="#B4C5FF">Manage</CellText>
    </Link>
  </Div>
);

export default TableRowMobile;
