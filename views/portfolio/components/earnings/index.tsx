import { Button, Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import ArrowRight from '@/components/svg/arrow-right';
import { useModal } from '@/hooks/use-modal';

import RewardsModal from './components/rewards-modal';
import { EarningsProps } from './earnings.types';

const Earnings: FC<EarningsProps> = ({ value, symbol }) => {
  const { setContent } = useModal();

  const openModal = () =>
    setContent(<RewardsModal />, {
      title: 'Rewards',
    });
  return (
    <Div
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #9CA3AF1A"
    >
      <P color="#9CA3AF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        Earnings:
      </P>
      <Span
        color="#FFFFFF"
        fontSize="1rem"
        fontWeight="500"
        fontFamily="Inter"
        lineHeight="1.5rem"
      >
        {value} {symbol ? symbol : ''}
      </Span>
      <Button
        gap="0.2rem"
        border="none"
        display="flex"
        color="#B4C5FF"
        fontWeight="500"
        bg="transparent"
        cursor="pointer"
        fontFamily="1rem"
        alignItems="center"
        onClick={openModal}
      >
        Claim
        <ArrowRight
          width="100%"
          color="#B4C5FF"
          maxWidth="0.75rem"
          maxHeight="0.75rem"
        />
      </Button>
    </Div>
  );
};

export default Earnings;
