import { Div, P } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { AccordionItemProps } from './menu.types';

const AccordionItem: FC<AccordionItemProps> = ({ name, path, disabled }) => {
  const { push, asPath } = useRouter();

  const goToPath = () => {
    if (path.startsWith('https://'))
      return window.open(path, '_blank')?.focus();

    push(path);
  };

  return (
    <Div
      mx="auto"
      width="100%"
      display="flex"
      onClick={goToPath}
      borderRadius="1.5rem"
      opacity={disabled ? 0.3 : 1}
      transition="all 350ms ease-in-out"
      nHover={!disabled && { color: '#B4C5FF' }}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      color={asPath === path ? '#B4C5FF' : '#E2E2E6'}
    >
      <P
        ml="1.25rem"
        py="0.5rem"
        pl="1.5rem"
        fontSize="1rem"
        fontFamily="Inter"
        borderLeft="1px solid"
        textTransform="capitalize"
        borderColor="#46464A"
      >
        {name}
      </P>
    </Div>
  );
};

export default AccordionItem;
