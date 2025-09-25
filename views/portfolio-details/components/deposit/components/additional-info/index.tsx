import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { AdditionalInfoProps } from './additional-info.types';

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  depositRatio,
  estimatedApr,
}) => (
  <Div display="flex" flexDirection="column" gap="0.5rem">
    <Div display="flex" justifyContent="space-between" flexWrap="wrap">
      <Span
        color="#949E9E"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        Deposit Ratio:
      </Span>
      <Span
        color="#FFFFFF"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        {depositRatio}
      </Span>
    </Div>
    <Div display="flex" justifyContent="space-between">
      <P
        color="#949E9E"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        Estimated APR:
      </P>
      <P
        color="#FFFFFF"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.1375rem"
      >
        {estimatedApr}
      </P>
    </Div>
  </Div>
);

export default AdditionalInfo;
