import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars } from '@/utils';

import { HeaderInfoProps } from './header-info.types';
import { titleColors } from './utils';

const HeaderInfo: FC<HeaderInfoProps> = ({
  date,
  title,
  value,
  right,
  symbol,
  dateValue,
  isLoading = false,
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
        {isLoading ? <Skeleton width={80} height={14} /> : title}
      </P>

      <P
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="2rem"
        fontFamily="Inter"
        textAlign={right ? 'right' : 'left'}
        fontSize={['0.75rem', '0.75rem', '0.75rem', '1.375rem']}
      >
        {isLoading ? (
          <Skeleton width={100} height={20} />
        ) : (
          <>
            {formattedValue}
            {symbol && (
              <Span ml="0.25rem" color="#9CA3AF" fontSize="0.875rem">
                {symbol}
              </Span>
            )}
          </>
        )}
      </P>

      {date && (
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          textAlign={right ? 'right' : 'left'}
        >
          {isLoading ? (
            <Skeleton width={120} height={14} />
          ) : (
            <>
              {dateValue ? formattedDateValue : formattedValue} since {date}
            </>
          )}
        </P>
      )}
    </Div>
  );
};

export default HeaderInfo;
