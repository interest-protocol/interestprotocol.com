import { Button, Div, P } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Motion from '@/components/motion';
import { TimesSVG } from '@/components/svg';
import { useModal } from '@/hooks/use-modal';

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
      borderRadius="0.75rem"
      flexDirection="column"
      width={['90vw', '32rem']}
      boxShadow="0 0 5px #3334"
      border="1px solid #FFFFFF1A"
      transition={{ duration: 0.3 }}
    >
      <Div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="1rem"
      >
        <P
          color="#FFFFFF"
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.5rem"
          fontSize="1.125rem"
        >
          Settings
        </P>
        <Button
          border="none"
          width="1.5rem"
          height="1.5rem"
          cursor="pointer"
          bg="transparent"
          onClick={handleClose}
        >
          <TimesSVG
            maxWidth="0.875rem"
            maxHeight="0.875rem"
            width="100%"
            color="#9CA3AF"
          />
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
          bg="#B4C5FF"
          border="none"
          display="flex"
          height="3.5rem"
          fontSize="1rem"
          cursor="pointer"
          transition="0.5s"
          fontFamily="Inter"
          lineHeight="1.5rem"
          alignItems="center"
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
