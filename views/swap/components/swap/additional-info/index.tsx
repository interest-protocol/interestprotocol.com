import { FC, useState } from 'react';
import { Div } from '@stylin.js/elements';

import AdditionalInfoHeader from './additional-info-header';
import AdditionalInfoLine from './additional-info-line';
import SwapManagerEquivalence from './swap-manager-equivalence';
import { AnimatePresence } from 'motion/react';
import Motion from '@/components/motion';

const AdditionalInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('--');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Div mt="0.813rem">
      <AdditionalInfoHeader
        toggle={toggleAccordion}
        isOpen={isOpen}
        amount={amount}
      />
      <AnimatePresence>
        {isOpen && (
          <Motion
            style={{ overflow: 'hidden' }}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Div
              mt="0.5rem"
              gap="0.5rem"
              display="flex"
              flexDirection="column"
              className="accordion"
            >
              <AdditionalInfoLine title="Fee (0,25%)" value="0.00$" />
              <AdditionalInfoLine title="Price impact" value="0.00%" />
              <AdditionalInfoLine title="Network cost" value="0.00$" />
              <AdditionalInfoLine
                flag="auto"
                value="0,50%"
                title="Max slippage"
              />
            </Div>
          </Motion>
        )}
      </AnimatePresence>
      <SwapManagerEquivalence setAmount={(amount) => setAmount(amount)} />
    </Div>
  );
};

export default AdditionalInfo;
