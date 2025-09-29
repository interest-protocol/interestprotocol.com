import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { AdditionalInfoProps } from './additional-info.types';

const AdditionalInfo: FC<AdditionalInfoProps> = ({ data }) => {
  return (
    <Div display="flex" flexDirection="column" gap="0.5rem">
      {data.map(({ amount, label }) => (
        <Div
          key={v4()}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Span
            color="#949E9E"
            fontWeight="500"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="1.1375rem"
          >
            {label}
          </Span>
          <Span
            color="#FFFFFF"
            fontWeight="400"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="1.1375rem"
          >
            {amount}
          </Span>
        </Div>
      ))}
    </Div>
  );
};

export default AdditionalInfo;
