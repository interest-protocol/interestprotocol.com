import { Div, P } from '@stylin.js/elements';
import { AnimatePresence, easeInOut } from 'framer-motion';
import { useRouter } from 'next/router';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Motion } from '@/components/motion';
import { CaretUpSVG } from '@/components/svg';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { useModal } from '@/hooks/use-modal';
import { noop } from '@/utils';

import AccordionItem from './accordion-item';
import { MenuMobileItemProps } from './menu.types';

const BOX_ID = 'Mobile-Menu-List-Item-';

const MobileMenuListItem: FC<MenuMobileItemProps> = ({
  name,
  path,
  Icon,
  index,
  disabled,
  accordionList,
}) => {
  const { asPath, push } = useRouter();
  const { handleClose } = useModal();

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const closeAccordion = (event: Event) => {
    const path = event.composedPath();
    if (
      path.some(
        (node: EventTarget) => (node as HTMLElement)?.id === `${BOX_ID}${index}`
      )
    ) {
      return;
    }
    setIsAccordionOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeAccordion);

  const getSuffixIcon = () =>
    accordionList && (
      <Div display="flex" justifyContent="flex-end" pr="0.5rem">
        <Motion
          transform={isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          display="flex"
          width="1.25rem"
          height="1.25rem"
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          transition={{ duration: 0.5 }}
        >
          <CaretUpSVG
            width="0.469rem"
            height="0.469rem"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </Motion>
      </Div>
    );
  return (
    <Div
      id={`${BOX_ID}${index}`}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={connectedBoxRef}
      onClick={() => {
        accordionList && setIsAccordionOpen(not);
      }}
    >
      <Div>
        <Div
          p="1.25rem"
          key={v4()}
          display="flex"
          color="#E2E2E6"
          height="3.375rem"
          borderRadius="1rem"
          opacity={disabled ? 0.7 : 1}
          cursor={disabled ? 'not-allowed' : 'pointer'}
          border="1px solid #FFFFFF1A"
          bg={asPath === path ? '#343438' : undefined}
          onClick={
            disabled || !!accordionList || !path
              ? noop
              : () => {
                  push(path);
                  handleClose();
                }
          }
          nHover={{
            bg: !disabled && '#343438',
          }}
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
        >
          <Div display="flex" alignItems="center" justifyContent="center">
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
            <P
              ml="0.5rem"
              fontSize="0.875rem"
              fontFamily="Inter"
              width="max-content"
              textTransform="capitalize"
            >
              {name}
            </P>
          </Div>
          {getSuffixIcon()}
        </Div>
      </Div>
      {accordionList && (
        <AnimatePresence>
          {isAccordionOpen && (
            <Motion
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {accordionList.map((item) => (
                <AccordionItem key={v4()} {...item} />
              ))}
            </Motion>
          )}
        </AnimatePresence>
      )}
    </Div>
  );
};

export default MobileMenuListItem;
