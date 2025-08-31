import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Button } from '@/components/Button';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { ICreateTokenForm } from '@/views/create-token/create-token.types';

import { InputProps } from './input.types';

const SelectToken: FC<InputProps> = ({ label }) => {
  const { control } = useFormContext<ICreateTokenForm>();

  const tokenSymbol = useWatch({ control, name: `symbol` });
  const tokenImageUrl = useWatch({ control, name: `imageUrl` });

  return (
    <Button
      height="0.5rem"
      fontSize="0.875rem"
      variant="tonal"
      color="#E2E2E6"
      borderRadius="3rem"
      bg={'#030712'}
      pl={'0'}
      pr={'0.75rem'}
      border="none"
    >
      <Div>
        {label === 'token' ? (
          <TokenIcon
            withBg
            network={Network.MovementMainnet}
            url={tokenImageUrl}
            symbol={tokenSymbol}
          />
        ) : (
          <TokenIcon withBg symbol="MOVE" network={Network.MovementMainnet} />
        )}
      </Div>
      <P
        maxWidth="12ch"
        color="#9CA3AF"
        overflow="hidden"
        whiteSpace="nowrap"
        fontFamily="Inter"
        textOverflow="ellipsis"
        fontWeight="500"
      >
        {label === 'token' ? tokenSymbol : 'MOVE'}
      </P>
    </Button>
  );
};

export default SelectToken;
