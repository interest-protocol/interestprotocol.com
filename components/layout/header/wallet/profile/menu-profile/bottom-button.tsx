import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import { ChevronRightSVG } from '@/components/svg';

import { BottomButtonProps } from './user-info.types';

const BottomButton: FC<BottomButtonProps> = ({
  Icon,
  title,
  onClick,
  hasChevron,
}) => (
  <Div
    p="0.813rem"
    bg="#222222"
    width="100%"
    display="flex"
    onClick={onClick}
    borderRadius="1rem"
    cursor="pointer"
    alignItems="center"
    justifyContent="space-between"
    nHover={{
      '.button-icon': {
        backgroundColor: '#B4C5FF29',
        color: '#B4C5FF',
      },
      '.text-info': {
        color: '#fff',
      },
      '.chevron-icon': {
        color: '#fff',
      },
    }}
  >
    <Div display="flex" gap="0.75rem" alignItems="center">
      <Button
        variant="text"
        bg="#949E9E29"
        borderRadius="999px"
        p="0.5rem"
        border="none"
        mr="unset"
        className="button-icon"
        boxShadow=" 0px 0px 0px 2px #FFFFFF0D"
      >
        <Icon maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Button>
      <P
        color="#949E9E"
        fontSize="1rem"
        fontWeight="500"
        lineHeight="1rem"
        fontFamily="Inter"
        className="text-info"
        transition="all 300ms ease-in-out"
      >
        {title}
      </P>
    </Div>
    {hasChevron && (
      <Div
        color="#949E9E"
        className="chevron-icon"
        transition="all 300ms ease-in-out"
      >
        <ChevronRightSVG
          maxWidth="1rem"
          maxHeight="1rem"
          width="100%"
          fill="inherit"
        />
      </Div>
    )}
  </Div>
);

export default BottomButton;
