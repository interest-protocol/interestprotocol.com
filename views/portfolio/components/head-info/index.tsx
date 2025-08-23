import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { HeadInfoProps } from './head-info.types';

const formatDolar = (value: number) => `$${value.toFixed(2)}`;

const HeadInfo: FC<HeadInfoProps> = ({ title, value }) => {
  let formattedValue = value;

  if (typeof value === 'number') {
    if (title === 'Net worth' || title === 'Portfolio value') {
      formattedValue = formatDolar(value);
    } else if (title === 'Average APR') {
      formattedValue = `${value}%`;
    }
  }

  return (
    <Div gap="0.25rem" display="flex" height="auto" flexDirection="column">
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        lineHeight="1.25rem"
      >
        {title}
      </P>
      <P
        color="#FFFFFF"
        fontFamily="Inter"
        fontSize="1.375rem"
        lineHeight="1.25rem"
      >
        {formattedValue}
      </P>
    </Div>
  );
};

export default HeadInfo;
