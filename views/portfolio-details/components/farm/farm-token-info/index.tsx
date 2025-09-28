import { FC } from 'react';

import FarmTokenInfoDesktop from './desktop';
import FarmTokenInfoMobile from './mobile';

const FarmTokenInfo: FC = () => (
  <>
    <FarmTokenInfoDesktop />
    <FarmTokenInfoMobile />
  </>
);

export default FarmTokenInfo;
