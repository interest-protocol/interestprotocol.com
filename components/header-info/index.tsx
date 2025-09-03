import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { HeaderInfoProps } from './header-info.types';
import { formatValue, titleColors } from './utils';

const HeaderInfo: FC<HeaderInfoProps> = ({ title, value, symbol, date }) => {
  const formattedValue = formatValue(title, value);
  const titleColor = titleColors[title] || titleColors.default;

  return (
    <Div gap="0.25rem" display="flex" flexDirection="column">
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
        {formattedValue}
        {symbol && (
          <Span ml="0.25rem" color="#9CA3AF" fontSize="0.875rem">
            {symbol}
          </Span>
        )}
      </P>

      {date && (
        <P
          color="#9CA3AF"
          fontWeight="400"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.25rem"
        >
          {formattedValue} {date}
        </P>
      )}
    </Div>
  );
};

export default HeaderInfo;
