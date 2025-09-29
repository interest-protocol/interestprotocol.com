import { Button, Div, Input, P } from '@stylin.js/elements';
import { ChangeEvent, FC } from 'react';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (onChange) {
      if (!isNaN(newValue)) {
        onChange(Math.min(max, Math.max(min, newValue)));
      }
    }
  };

  return (
    <Div
      p="0.75rem"
      gap="0.5rem"
      display="flex"
      height="6.5rem"
      bg="#9CA3AF1A"
      width="100%"
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
        gap="1rem"
        width="100%"
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

        <Input
          p="0"
          m="0"
          type="number"
          width="30%"
          border="none"
          nFocus="none"
          outline="none"
          bg="transparent"
          color="#FFFFFF"
          fontWeight="400"
          fontSize="1.25rem"
          textAlign="center"
          value={value ?? ''}
          onChange={handleChange}
          MozAppearance="textfield"
        />

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
        textAlign="center"
        fontSize="0.875rem"
        lineHeight="1.25rem"
      >
        {tokenPair[0]} per {tokenPair[1]}
      </P>
    </Div>
  );
};

export default PriceInput;
