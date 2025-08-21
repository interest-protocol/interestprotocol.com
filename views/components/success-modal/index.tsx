import { Div, P } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { LogoLettersSVG, LogoSVG } from '@/components/svg';

import { SuccessModalProps } from './success-modal.types';

const SuccessModal: FC<PropsWithChildren<SuccessModalProps>> = ({
  children,
}) => (
  <Div width="100%">
    <Div display="flex" flexDirection="column" gap="m" mb="2rem">
      {children}
    </Div>
    <Div display="flex" alignItems="center" justifyContent="center" mb="0.5rem">
      <P
        alignItems="center"
        textAlign="center"
        color="#E2E2E6"
        display="flex"
        fontSize="1rem"
        fontFamily="Inter"
        lineHeight="1.406rem"
      >
        BY:
      </P>
      <Div
        ml="0.75rem"
        display="flex"
        gap="0.5rem"
        minWidth="8.5rem"
        minHeight="2.5rem"
        alignItems="center"
        justifyContent="center"
        color="#E2E2E6"
      >
        <LogoSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
        <LogoLettersSVG maxHeight="1.25rem" height="100%" />
      </Div>
    </Div>
    <a
      href="https://www.interest.xyz"
      target="_blank"
      rel="noopener, noreferrer"
    >
      <P
        alignItems="center"
        textAlign="center"
        display="flex"
        lineHeight="1.5rem"
        fontSize="0.75rem"
        width="fit-content"
        mx="auto"
        color="#B4C5FF"
        mt="0.5rem"
      >
        www.interest.xyz
      </P>
    </a>
  </Div>
);

export default SuccessModal;
