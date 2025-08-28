import { Div, P } from '@stylin.js/elements';
import { useEffect, useRef, useState } from 'react';
import {  ArrowDownSVG } from '@/components/svg';
import { options } from './select.data';

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(options[0]);
    const ref = useRef<any>(null);

    const handleSelect = (option: typeof options[0]) => {
        setValue(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <Div ref={ref} position="relative" width={['100%', '10.94rem']}>
            <Div
                px="1rem"
                bg="#9CA3AF1A"
                color="#FFFFFF"
                height="2.75rem"
                cursor="pointer"
                display="flex"
                fontSize="1rem"
                alignItems="center"
                borderRadius="9999rem"
                transition="all 0.3s ease"
                nHover={{ bg: '#E5E7EB44' }}
                justifyContent="space-between"
                border="1px solid #9CA3AF1A"
                onClick={() => setIsOpen(!isOpen)}
            >
                <P>{value.label}</P>
                <Div
                    transition="transform 0.3s ease"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                    <ArrowDownSVG maxWidth="1rem" maxHeight="1.25rem" color="#9CA3AF" width="100%" />
                </Div>
            </Div>

            {isOpen && (
                <Div
                    left="0"
                    width="100%"
                    bg="#1F2937"
                    position="absolute"
                    zIndex="10"
                    borderRadius="0.75rem"
                    top="calc(100% + 0.25rem)"
                    overflow="hidden"
                    boxShadow="0 4px 12px rgba(0,0,0,0.2)"
                >
                    {options.map((opt) => (
                        <Div
                            key={opt.value}
                            p="0.75rem"
                            cursor="pointer"
                            fontSize="0.875rem"
                            color={value.value === opt.value ? '#B4C5FF' : '#E5E7EB'}
                            bg={value.value === opt.value ? '#374151' : 'transparent'}
                            transition="all 0.2s ease"
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
