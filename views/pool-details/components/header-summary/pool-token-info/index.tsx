import { FC } from 'react';

import PoolTokenInfoDesktop from './desktop';
import PoolTokenInfoMobile from './mobile';

const PoolTokenInfo: FC = () => (
  <>
    <PoolTokenInfoDesktop />
    <PoolTokenInfoMobile />
  </>
);

export default PoolTokenInfo;
