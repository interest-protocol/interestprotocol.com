import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils/string';

import { HeaderInfoProps } from './header-info.types';

const HeadInfo: FC<HeaderInfoProps> = ({ title, value, symbol, date }) => {
  const titleColor =
    title === 'TVL'
      ? '#9CA3AF'
      : title === 'Total Volume'
        ? '#8BA5FF'
        : title === 'Total Fees'
          ? '#34D399'
          : '#FFFFFF';

  return (
    <Div gap="0.25rem" display="flex" height="auto" flexDirection="column">
      <P
        color={titleColor}
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {title}
      </P>

      <P
        color="#FFFFFF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="1.375rem"
        lineHeight="1.25rem"
      >
        {formatDollars(value, 6, 'start')}
        <Span color="#9CA3AF" fontSize="0.875rem" marginLeft="0.25rem">
          {symbol}
        </Span>
      </P>

      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {formatDollars(value, 6, 'start')} {date}
      </P>
    </Div>
  );
};

export default HeadInfo;
