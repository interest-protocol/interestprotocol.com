import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { HeadProps } from './head-info.types';

const HeadInfo: FC<HeadProps> = ({ name, value, symbol, date }) => (
  <Div gap="4px" display="flex" fontFamily="Inter" flexDirection="column">
    <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
      {name}
    </P>
    <P color="#FFFFFF" fontWeight={400} fontSize="1.375rem">
      {value}
      {symbol && (
        <Span ml="4px" color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
          {symbol}
        </Span>
      )}
    </P>
    <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
      {date}
    </P>
  </Div>
);

export default HeadInfo;
