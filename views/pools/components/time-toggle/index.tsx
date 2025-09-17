import { Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import unikey from 'unikey';

import { TimeToggleProps } from './time-toggle.types';

const TimeToggle: FC<TimeToggleProps> = ({
  options = ['24H', '7D'],
  defaultValue = '24H',
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleClick = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <Div
      p="0.25rem"
      display="flex"
      bg="#9CA3AF1A"
      width="fit-content"
      borderRadius="9999px"
      border="1px solid #9CA3AF1A"
    >
      {options.map((item) => (
        <Button
          key={unikey()}
          px="0.5rem"
          py="0.25rem"
          border="none"
          fontWeight="500"
          fontFamily="Inter"
          cursor="pointer"
          fontSize="0.875rem"
          borderRadius="9999px"
          transition="all 0.2s ease"
          onClick={() => handleClick(item)}
          bg={selected === item ? '#9CA3AF33' : 'transparent'}
          color={selected === item ? '#FFFFFF' : '#9CA3AF'}
        >
          {item}
        </Button>
      ))}
    </Div>
  );
};

export default TimeToggle;
