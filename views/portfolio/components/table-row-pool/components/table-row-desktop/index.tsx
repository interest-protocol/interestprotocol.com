import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import CellText from '@/components/table/components/cell-text';

import StatusBtn from '../../../status-btn ';
import { PoolsProps } from '../../pools.types';

const TableRowDesktop: FC<PoolsProps> = ({
  lp,
  pool,
  pairPool,
  inRange,
  liquidity,
  leverage,
  earnings,
}) => (
  <Div
    gap="1rem"
    px="1rem"
    height="4rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns="2.5fr 1fr 1fr 1fr 1fr 1fr"
  >
    <Div display="flex" gap="3rem" alignItems="center">
      <img src={lp} alt={lp} />
      <Div display="flex" gap="0.5rem" flexDirection="column" mr="3.44rem">
        <CellText color="#FFFFFF">{`${pool[0]} ${pool[1]}`}</CellText>
        <Div display="flex" gap="0.5rem">
          <StatusBtn status="Earn" />
          <StatusBtn status="Curve" />
          <StatusBtn status="Volatile" />
        </Div>
      </Div>
      <CellText color="#FFFFFF">{`${pairPool}`}</CellText>
    </Div>
    <Div width="3.875rem">{inRange && <StatusBtn status="Range" />}</Div>
    <CellText color="#FFFFFF">{liquidity}</CellText>
    <CellText color="#34D399">{leverage}</CellText>
    <CellText color="#FFFFFF">{earnings}</CellText>
    <Link href="#">
      <CellText color="#B4C5FF">Manage</CellText>
    </Link>
  </Div>
);

export default TableRowDesktop;
