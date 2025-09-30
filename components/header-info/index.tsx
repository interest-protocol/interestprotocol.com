import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { formatDollars } from '@/utils';

import { HeaderInfoProps } from './header-info.types';
import { titleColors } from './utils';

const HeaderInfo: FC<HeaderInfoProps> = ({
  date,
  title,
  value,
  right,
  symbol,
  hideDate,
  dateValue,
}) => {
  const formattedValue = formatDollars(+value, 6, 'start');
  const formattedDateValue = formatDollars(+(dateValue ?? 0), 6, 'start');
  const titleColor = titleColors[title] || titleColors.default;

  return (
    <Div gap="0.25rem" display="flex" flexDirection="column">
      <P
        color={titleColor}
        fontWeight="400"
        fontFamily="Inter"
        lineHeight="1.25rem"
        textAlign={right ? 'right' : 'left'}
        fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
      >
        {title}
      </P>
      <P
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="2rem"
        fontFamily="Inter"
        textAlign={right ? 'right' : 'left'}
        fontSize={['0.75rem', '0.75rem', '0.75rem', '1.375rem']}
      >
        {formattedValue}
        {symbol && (
          <Span ml="0.25rem" color="#9CA3AF" fontSize="0.875rem">
            {symbol}
          </Span>
        )}
      </P>
      {!hideDate && date && (
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          textAlign={right ? 'right' : 'left'}
        >
          {dateValue ? formattedDateValue : formattedValue} since {date}
        </P>
      )}
    </Div>
  );
};

export default HeaderInfo;
