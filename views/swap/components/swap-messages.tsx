import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { DotErrorSVG } from '@/components/svg';

import { SwapMessagesEnum } from './swap.data';

const SwapMessages: FC = () => {
  const { control } = useWatch();

  const error = useWatch({ control, name: 'error' });

  if (!error) return null;

  const isCustomErrorBoxMessage = [SwapMessagesEnum.leastOneMove].includes(
    error
  );

  return (
    <Div
      p="s"
      gap="s"
      mb="m"
      display="flex"
      borderRadius="xs"
      border="1px solid"
      color={isCustomErrorBoxMessage ? 'outline' : 'onErrorContainer'}
      bg={isCustomErrorBoxMessage ? 'lowContainer' : 'errorContainer'}
      borderColor={isCustomErrorBoxMessage ? 'outline' : 'onErrorContainer'}
    >
      <DotErrorSVG width="100%" maxWidth="1rem" maxHeight="1rem" />
      <P>{error}</P>
    </Div>
  );
};

export default SwapMessages;
