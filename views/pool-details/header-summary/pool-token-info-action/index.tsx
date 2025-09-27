import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Button } from '@/components/button';
import { ArrowRightSVG } from '@/components/svg';
import { formatDollars } from '@/utils';

import { PoolTokenInfoActionProps } from './pool-token-info-actions.types';
import PoolTokenInfoActionsWrapper from './wrapper';

const PoolTokenInfoAction: FC<PoolTokenInfoActionProps> = ({
  label,
  amount,
  onClaim,
}) => (
  <PoolTokenInfoActionsWrapper>
    <Div
      display="flex"
      gap="0.5rem"
      width={onClaim ? 'unset' : '100%'}
      justifyContent="space-between"
    >
      <Span color="#9CA3AF">{label}</Span>
      <Span color="#FFFFFF">{formatDollars(amount, 2, 'start')}</Span>
    </Div>
    {onClaim && (
      <Button
        p="unset"
        ml="0.5rem"
        gap="0.2rem"
        border="none"
        variant="text"
        color="#B4C5FF"
        onClick={onClaim}
        nHover={{
          color: '#b4c6ffc1',
        }}
      >
        Claim
        <ArrowRightSVG width="100%" maxWidth="0.75rem" maxHeight="0.75rem" />
      </Button>
    )}
  </PoolTokenInfoActionsWrapper>
);

export default PoolTokenInfoAction;
