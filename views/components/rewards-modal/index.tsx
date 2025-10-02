import { Div, P, Span } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Button } from '@/components/button';
import { toasting } from '@/components/toast';
import { useModal } from '@/hooks';
import { formatDollars } from '@/utils/string';

import { RewardsModalProps } from './rewards.types';
import RewardsModalItem from './rewards-modal-item';

const RewardsModal: FC<RewardsModalProps> = ({
  totalEarnings,
  rewardsList,
  rewardFee,
  onClaim,
  claimingFee,
}) => {
  const { handleClose } = useModal();
  const [loading, setLoading] = useState(false);

  const handleClaimRewards = async (stopLoading: () => void) => {
    try {
      await onClaim?.();
      handleClose();
    } finally {
      stopLoading();
    }
  };

  const onSubmit = async () => {
    const dismiss = toasting.loading({ message: 'Claim Rewarding...' });
    try {
      setLoading(true);
      await handleClaimRewards(dismiss);
    } catch (e) {
      toasting.error({
        action: 'Claim reward',
        message: (e as Error).message ?? 'Error executing transaction',
      });
    } finally {
      setLoading(false);
    }
    return;
  };

  return (
    <Div display="flex" flexDirection="column" gap="1rem">
      <Div
        p="1rem"
        gap="1rem"
        display="flex"
        bg="#9CA3AF1A"
        borderRadius="1rem"
        flexDirection="column"
      >
        <Div display="flex" flexDirection="column" gap="0.5rem">
          <P
            fontWeight="500"
            color="#9CA3AF"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="1.5rem"
          >
            Total Earning
          </P>

          <Span
            color="#FFFFFF"
            fontWeight="500"
            fontFamily="Inter"
            fontSize="1.25rem"
            lineHeight="2.25rem"
          >
            {formatDollars(+totalEarnings, 6, 'start')}
          </Span>
        </Div>

        <Div display="flex" flexDirection="column" gap="0.5rem">
          <P
            color="#949E9E"
            fontWeight="500"
            fontFamily="Inter"
            fontSize="0.875rem"
            lineHeight="2.25rem"
          >
            Rewards per asset
          </P>
          {rewardsList.map((reward) => (
            <RewardsModalItem key={v4()} {...reward} />
          ))}
        </Div>
        {rewardFee && (
          <Div display="flex" flexDirection="column" gap="0.5rem">
            <P
              fontWeight="500"
              color="#9CA3AF"
              fontFamily="Inter"
              fontSize="0.875rem"
              lineHeight="1.5rem"
            >
              Rewarded Fees
            </P>

            <Span
              color="#FFFFFF"
              fontWeight="500"
              fontFamily="Inter"
              fontSize="1.25rem"
              lineHeight="2.25rem"
            >
              {formatDollars(+rewardFee, 6, 'start')}
            </Span>
          </Div>
        )}
      </Div>

      {claimingFee && (
        <Div
          display="flex"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.875rem"
          lineHeight="1.1375rem"
          justifyContent="space-between"
        >
          <P color="#949E9E" letterSpacing="-0.56">
            Claiming Fee:
          </P>
          <P color="#FFFFFF">{claimingFee} %</P>
        </Div>
      )}
      <Button
        variant="filled"
        fontSize="1rem"
        onClick={onSubmit}
        disabled={loading}
        height={['1.5rem', '2rem']}
      >
        {loading ? 'Claiming' : 'Claim'}
      </Button>
    </Div>
  );
};

export default RewardsModal;
