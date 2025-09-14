import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { LessSVG, PlusSVG } from '@/components/svg';

import { PriceInputProps } from './price-input.types';

const PriceInput: FC<PriceInputProps> = ({
  label = 'Min price',
  tokenPair,
  value,
  onChange,
  step = 1,
  min = 0,
  max = Infinity,
}) => {
  const handleDecrement = () => {
    if (onChange) onChange(Math.max(min, value - step));
  };

  const handleIncrement = () => {
    if (onChange) onChange(Math.min(max, value + step));
  };

  return (
    <Div
      p="0.75rem"
      gap="0.5rem"
      display="flex"
      height="6.5rem"
      width="12.41rem"
      bg="#9CA3AF1A"
      alignItems="center"
      flexDirection="column"
      borderRadius="0.75rem"
      justifyContent="center"
      border="1px solid #9CA3AF1A"
    >
      <P
        color="#9CA3AF"
        fontWeight="400"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {label}
      </P>

      <Div
        width="100%"
        gap="1rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          width="1.5rem"
          height="1.5rem"
          bg="#9CA3AF1A"
          color="#9CA3AF"
          cursor="pointer"
          borderRadius="0.5rem"
          onClick={handleDecrement}
          border="1px solid #9CA3AF1A"
        >
          <LessSVG
            width="100%"
            maxWidth="0.75rem"
            maxHeight="0.75rem"
            color="#9CA3AF"
          />
        </Button>

        <P
          color="#FFFFFF"
          fontWeight="400"
          fontSize="1.25rem"
          textAlign="center"
        >
          {value}
        </P>

        <Button
          width="1.5rem"
          height="1.5rem"
          bg="#9CA3AF1A"
          color="#9CA3AF"
          cursor="pointer"
          borderRadius="0.5rem"
          onClick={handleIncrement}
          border="1px solid #9CA3AF1A"
        >
          <PlusSVG
            width="100%"
            maxWidth="0.75rem"
            maxHeight="0.75rem"
            color="#9CA3AF"
          />
        </Button>
      </Div>

      <P
        color="#9CA3AF"
        fontWeight="400"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {tokenPair[0]} per {tokenPair[1]}
      </P>
    </Div>
  );
};

export default PriceInput;
