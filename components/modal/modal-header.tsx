import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TimesSVG } from '../svg';
import { Standardized, StandardizedWithCloseButton } from './modal.types';
import { hasCloseButton } from './modal.utils';

export { setAppElement } from 'react-modal';

export const ModalHeader: FC<StandardizedWithCloseButton | Standardized> = ({
  Icon,
  title,
  ...props
}) => {
  const hasButton = hasCloseButton(props);

  return (
    <Div
      px="l"
      height="4rem"
      display="grid"
      alignItems="center"
      gridTemplateColumns="3rem auto 3rem"
    >
      {Icon && <Div gridColumn="1/2">{Icon}</Div>}
      {title && (
        <P
          //size="medium"
          //variant="display"
          gridColumn="2/3"
          fontWeight="400"
          textAlign="center"
          fontFamily="Roboto Mono"
        >
          {title}
        </P>
      )}
      {hasButton && (
        <Div ml="auto" gridColumn="3/4">
          <Button
            //isIcon
            //variant="filled"
            color="#E2E2E6"
            onClick={props.onClose}
          >
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Div>
      )}
    </Div>
  );
};

export default ModalHeader;
