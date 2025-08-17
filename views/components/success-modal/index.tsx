import { Div, P } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { LogoSVG } from '@/components/svg';

import { SuccessModalProps } from './success-modal.types';

const SuccessModal: FC<PropsWithChildren<SuccessModalProps>> = ({
  children,
}) => (
  <Div width="100%">
    <Div display="flex" flexDirection="column" gap="m" mb="2rem">
      {children}
    </Div>
    <Div display="flex" justifyContent="center" mb="0.5rem">
      <P
        alignItems="center"
        textAlign="center"
        color="onSurface"
        display="flex"
        fontSize="1rem"
        lineHeight="1.406rem"
      >
        BY:
      </P>
      <Div
        ml="0.75rem"
        display="flex"
        minWidth="8.5rem"
        minHeight="2.5rem"
        alignItems="center"
        justifyContent="center"
        color="onSurface"
      >
        <LogoSVG width="100%" maxWidth="8.5rem" maxHeight="2.5rem" />
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
        color="primary"
        mt="0.5rem"
      >
        www.interest.xyz
      </P>
    </a>
  </Div>
);

export default SuccessModal;
