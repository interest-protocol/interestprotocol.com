import { Div } from '@stylin.js/elements';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Motion } from '@/components/motion';

import AdditionalInfoHeader from './additional-info-header';
import AdditionalInfoLine from './additional-info-line';
import SwapManagerEquivalence from './swap-manager-equivalence';

const AdditionalInfo: FC = () => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('--');

  const valueIn = useWatch({ control, name: 'from.value' });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (!valueIn) return;

  return (
    <Div mt="0.813rem">
      <AdditionalInfoHeader
        isOpen={isOpen}
        amount={amount}
        toggle={toggleAccordion}
      />
      <AnimatePresence>
        {isOpen && (
          <Motion
            key="additional-info-content"
            style={{ overflow: 'hidden' }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
          >
            <Div mt="0.5rem" gap="0.5rem" display="flex" flexDirection="column">
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
