import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDate } from '@/utils/date';
import { formatDollars } from '@/utils/string';

import { HeadProps } from './head-info.types';

const HeadInfo: FC<HeadProps> = ({
  name,
  value,
  symbol,
  date,
  isLoading = false,
}) => (
  <Div gap="4px" display="flex" fontFamily="Inter" flexDirection="column">
    <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
      {isLoading ? <Skeleton width={60} height={12} /> : name}
    </P>

    <P color="#FFFFFF" fontWeight={400} fontSize="1.375rem">
      {isLoading ? (
        <Skeleton width={100} height={20} />
      ) : (
        <>
          {formatDollars(value, 6, 'start')}
          {symbol && (
            <Span ml="4px" color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
              {symbol}
            </Span>
          )}
        </>
      )}
    </P>

    <P color="#9CA3AF" fontWeight={400} fontSize="0.75rem">
      {isLoading ? <Skeleton width={80} height={12} /> : formatDate(date)}
    </P>
  </Div>
);

export default HeadInfo;
