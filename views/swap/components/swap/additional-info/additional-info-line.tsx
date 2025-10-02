import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import Tag from '@/components/tag';

import { AdditionalInfoLineProps } from './additional-info.types';

const AdditionalInfoLine: FC<AdditionalInfoLineProps> = ({
  title,
  flag,
  value,
}) => (
  <Div display="flex" justifyContent="space-between">
    <P
      fontWeight="500"
      fontSize="0.875rem"
      lineHeight="1.125rem"
      fontFamily="Inter"
      letterSpacing="-0.035rem"
      color="#949E9E"
    >
      {title}
    </P>
    <Div gap="0.5rem" display="flex" cursor="pointer" alignItems="center">
      {flag && <Tag type="staked" label={flag} />}
      <P
        fontWeight="400"
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.125rem"
        letterSpacing="-0.035rem"
      >
        {value}
      </P>
    </Div>
  </Div>
);

export default AdditionalInfoLine;
