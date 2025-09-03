import { Div, P } from '@stylin.js/elements';
import { useEffect, useRef, useState } from 'react';

import { CaretDownSVG } from '@/components/svg';

import { options } from './select.data';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[0]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const handleSelect = (option: (typeof options)[0]) => {
    setValue(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setIsOpen(false);
    };

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <Div ref={ref} position="relative" width={['100%', '8.875rem']}>
      <Div
        px="1rem"
        display="flex"
        bg="#9CA3AF1A"
        height="2.75rem"
        cursor="pointer"
        color="#6B7280"
        fontSize="0.875rem"
        alignItems="center"
        borderRadius="0.75rem"
        transition="all 0.3s ease"
        nHover={{ bg: '#E5E7EB44' }}
        justifyContent="space-between"
        border="1px solid #9CA3AF1A"
        onClick={() => setIsOpen(!isOpen)}
      >
        <P>{value.label}</P>
        <Div
          transition="transform 0.3s ease"
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <CaretDownSVG
            width="100%"
            maxWidth="1rem"
            color="#9CA3AF"
            maxHeight="1.25rem"
          />
        </Div>
      </Div>

      {isOpen && (
        <Div
          left="0"
          zIndex="10"
          width="100%"
          bg="#1F2937"
          overflow="hidden"
          position="absolute"
          borderRadius="0.75rem"
          top="calc(100% + 0.25rem)"
          boxShadow="0 4px 12px #00000033"
        >
          {options.map((opt) => (
            <Div
              p="0.75rem"
              key={opt.value}
              cursor="pointer"
              fontSize="0.875rem"
              transition="all 0.2s ease"
              color={value.value === opt.value ? '#B4C5FF' : '#E5E7EB'}
              bg={value.value === opt.value ? '#374151' : 'transparent'}
              nHover={{
                bg: '#4B5563',
              }}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </Div>
          ))}
        </Div>
      )}
    </Div>
  );
};

export default Select;
