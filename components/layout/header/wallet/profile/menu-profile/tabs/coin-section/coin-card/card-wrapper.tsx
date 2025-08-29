import { Div, P } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { CardWrapperProps } from '../../../user-info.types';

const CardWrapper: FC<PropsWithChildren<CardWrapperProps>> = ({
  TokenIcon,
  symbol,
  supportingText,
  children,
}) => {
  return (
    <Div
      p="0.5rem"
      display="flex"
      bg="#222222"
      borderRadius="1rem"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Div gap="0.75rem" display="flex" alignItems="center">
        {TokenIcon}
        <Div
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <P
            lineHeight="1rem"
            fontFamily="Inter"
            fontSize="0.875rem"
            color="#fff"
          >
            {symbol}
          </P>
          <P
            mt="0.15rem"
            color="#fff"
            fontWeight="400"
            lineHeight="1rem"
            fontSize="0.75rem"
            fontFamily="Inter"
          >
            {supportingText}
          </P>
        </Div>
      </Div>
      {children}
    </Div>
  );
};

export default CardWrapper;
