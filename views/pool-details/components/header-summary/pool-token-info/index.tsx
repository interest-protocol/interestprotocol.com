import { FC } from 'react';

import { PoolDetailsProps } from '@/views/pool-details/pool-details.types';

import PoolTokenInfoDesktop from './desktop';
import PoolTokenInfoMobile from './mobile';

const PoolTokenInfo: FC<PoolDetailsProps> = ({ isV3 }) => (
  <>
    <PoolTokenInfoDesktop />
    <PoolTokenInfoMobile isV3={isV3} />
  </>
);

export default PoolTokenInfo;
