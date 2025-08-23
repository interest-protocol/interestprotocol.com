import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TitleProps } from './title.types';

const Title: FC<TitleProps> = ({ title, count }) => (
  <Div gap="0.5rem" display="flex" alignItems="center">
    <P color="#FFFFFF" fontSize="1.75rem" fontWeight="500" fontFamily="Inter">
      {title}
    </P>
    <Div
      p="0.25rem"
      width="1rem"
      bg="#9CA3AF1A"
      display="flex"
      height="1.4375rem"
      alignItems="center"
      justifyContent="center"
      borderRadius="0.75rem"
      border="1px solid #9CA3AF1A"
    >
      <Span
        color="#9CA3AF"
        fontWeight="500"
        fontSize="0.75rem"
        fontFamily="Inter"
      >
        {count}
      </Span>
    </Div>
  </Div>
);

export default Title;
