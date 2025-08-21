import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { InputProps } from './input.types';
import SelectToken from './select-token';

const SelectorInput: FC<InputProps> = ({ label }) => {
  return (
    <Div
      py="0.75rem"
      px="1.5rem"
      display="flex"
      bg="#9CA3AF1A"
      alignItems="center"
      borderRadius="0.75rem"
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
