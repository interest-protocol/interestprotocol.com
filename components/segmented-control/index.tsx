import { Button, Div, DivProps } from '@stylin.js/elements';
import { FC, useState } from 'react';
import unikey from 'unikey';

import {
  SegmentedControlOptionItemProps,
  SegmentedControlProps,
} from './segmented-control.types';

const SegmentedControl: FC<SegmentedControlProps & DivProps> = ({
  options,
  onSelect,
  defaultOption,
  ...rest
}) => {
  const [selected, setSelected] = useState(defaultOption);

  const handleClick = (option: SegmentedControlOptionItemProps) => {
    setSelected(option);
    onSelect?.(option.value);
  };

  return (
    <Div
      p="0.25rem"
      display="flex"
      bg="#9CA3AF1A"
      width="fit-content"
      borderRadius="9999px"
      border="1px solid #9CA3AF1A"
      {...rest}
    >
      {options.map((option) => (
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
          onClick={() => handleClick(option)}
          bg={selected?.value === option.value ? '#9CA3AF33' : 'transparent'}
          color={selected?.value === option.value ? '#FFFFFF' : '#9CA3AF'}
        >
          {option.label}
        </Button>
      ))}
    </Div>
  );
};

export default SegmentedControl;
