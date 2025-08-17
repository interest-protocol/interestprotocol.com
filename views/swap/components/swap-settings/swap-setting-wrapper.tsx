import { FC, PropsWithChildren } from 'react';
import { Button, Div, P } from '@stylin.js/elements';

import { TimesSVG } from '@/components/svg';
import { useModal } from '@/hooks/use-modal';
import Motion from '@/components/motion';

const SwapSettingsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { handleClose } = useModal();

  const onConfirm = () => {
    handleClose();
  };

  return (
    <Motion
      layout
      gap="1rem"
      p="1.5rem"
      bg="#121313"
      display="flex"
      maxHeight="33rem"
      overflow="hidden"
      onClick={(e) => e.stopPropagation()}
      color="onSurface"
      borderRadius="s"
      flexDirection="column"
      width={['90vw', '32rem']}
      boxShadow="0 0 5px #3334"
      border="1px solid #FFFFFF1A"
      transition={{ duration: 0.3 }}
    >
      <Div display="flex" alignItems="center" justifyContent="space-between">
        <P
          fontSize="18px"
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.5rem"
        >
          Settings
        </P>
        <Button
          width="1.5rem"
          height="1.5rem"
          onClick={handleClose}
        >
          <TimesSVG maxWidth="0.875rem" maxHeight="0.875rem" width="100%" />
        </Button>
      </Div>
      {children}
      <Div
        flex="1"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
      >
        <Button
          py="0.5rem"
          width="100%"
          display="flex"
          fontSize="1rem"
          fontFamily="Inter"
          lineHeight="1.5rem"
          borderRadius="0.75rem"
          justifyContent="center"
          onClick={onConfirm}
          nHover={{
            bg: '#8BA5FF',
          }}
        >
          Confirm
        </Button>
      </Div>
    </Motion>
  );
};

export default SwapSettingsWrapper;
