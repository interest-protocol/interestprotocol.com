import { Button, Div } from '@stylin.js/elements';
import { AnimatePresence } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { v4 } from 'uuid';

import { Motion } from '../motion';
import { ModalContentProps, ModalContentWrapperProps } from './modal.types';
import { hasModalButton, isCustomContent } from './modal.utils';
import { ModalHeader } from './modal-header';

const renderMaybeChildrenArray = (children: ReactNode) => {
  if (Array.isArray(children))
    return children.map((child) => (
      <Div
        key={v4()}
        width="100%"
        display="flex"
        flexDirection="column"
        borderTop={`1px solid #3A3D4C`}
      >
        {child}
      </Div>
    ));

  return children;
};

const ModalContentWrapper: FC<PropsWithChildren<ModalContentWrapperProps>> = ({
  button,
  isOpen,
  children,
}) => (
  <AnimatePresence>
    {isOpen && (
      <Motion
        display="flex"
        flexDirection="column"
        exit={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Div
          mb="m"
          display="flex"
          minWidth="21rem"
          borderRadius="m"
          color="#E2E2E6"
          bg="#131316"
          flexDirection="column"
        >
          {children}
        </Div>
        {button}
      </Motion>
    )}
  </AnimatePresence>
);

const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  isOpen,
  children,
  ...props
}) => {
  if (isCustomContent(props)) return <>{children}</>;

  const { title, Icon } = props;

  if (hasModalButton(props)) {
    const { buttonText, buttonProps } = props;

    return (
      <ModalContentWrapper
        isOpen={isOpen}
        button={
          <Button bg="red" {...buttonProps}>
            {buttonText}
          </Button>
        }
      >
        <ModalHeader {...props} Icon={Icon} title={title} />
        {renderMaybeChildrenArray(children)}
      </ModalContentWrapper>
    );
  }

  return (
    <ModalContentWrapper isOpen={isOpen}>
      <ModalHeader {...props} Icon={Icon} title={title} />
      {renderMaybeChildrenArray(children)}
    </ModalContentWrapper>
  );
};

export default ModalContent;
