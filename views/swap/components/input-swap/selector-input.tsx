import { FC } from 'react';

import { InputProps } from './input.types';
import SelectToken from './select-token';
import { Div, P } from '@stylin.js/elements';

const SelectorInput: FC<InputProps> = ({ label }) => {
  return (
    <Div
      py="s"
      px="xl"
      display="flex"
      bg="#9CA3AF1A"
      borderRadius="s"
      alignItems="center"
      justifyContent="space-between"
    >
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontFamily="Inter"
        fontSize="0.96875rem"
        textTransform="capitalize"
      >
        {label}
      </P>
      <Div>
        <SelectToken label="from" />
      </Div>
    </Div>
  );
};

export default SelectorInput;
