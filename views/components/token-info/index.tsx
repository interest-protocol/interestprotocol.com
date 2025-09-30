import { FC } from 'react';

import TokenInfoDesktop from './desktop';
import TokenInfoMobile from './mobile';
import { TokenInfoProps } from './token-info.types';

const TokenInfo: FC<TokenInfoProps> = ({ isV3 }) => (
  <>
    <TokenInfoDesktop />
    <TokenInfoMobile isV3={isV3} />
  </>
);

export default TokenInfo;
