import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { DividerSVG, TimesSVG } from '../svg';
import { ModalHeaderProps } from './modal-provider.types';

const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  titleAlign = 'left',
  showTitleOnMobile = false,
  handleClose,
}) => (
  <Div
    px="1.5rem"
    display="flex"
    justifyContent="space-between"
    flexDirection={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ]}
  >
    <P
      flex="1"
      fontWeight="700"
      fontFamily="Inter"
      fontSize={['1rem', '1.125rem']}
      textAlign={
        showTitleOnMobile
          ? [titleAlign, titleAlign, titleAlign, 'left']
          : 'left'
      }
      display={
        showTitleOnMobile
          ? ['block', 'block', 'block', 'block']
          : ['none', 'none', 'none', 'block']
      }
    >
      {title}
    </P>

    <Div
      onClick={handleClose}
      cursor="pointer"
      color="#9CA3AF"
      width="0.85rem"
      height="0.85rem"
      nHover={{ color: '#B4C5FF' }}
      display={['none', 'none', 'none', 'flex']}
    >
      <TimesSVG maxWidth="100%" maxHeight="100%" width="100%" />
    </Div>

    <Div
      mb="0.5rem"
      width="100%"
      cursor="pointer"
      justifyContent="center"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <DividerSVG width="100%" maxWidth="3rem" maxHeight="0.3125rem" />
    </Div>
  </Div>
);

export default ModalHeader;
