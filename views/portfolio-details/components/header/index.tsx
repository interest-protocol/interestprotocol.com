import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import Tag from '@/components/tag';
import TokenIcon from '@/components/token-icon';
import { Network } from '@/constants';
import { useModal, useTabState } from '@/hooks';
import RewardsModal from '@/views/components/rewards-modal';
import TokenInfoAction from '@/views/components/token-info-action';

import { PortfolioDetailsFormProps } from '../../portfolio-details.types';

const PoolDetailsHeader: FC = () => {
  const { tab } = useTabState();
  const { setContent } = useModal();
  const { getValues } = useFormContext<PortfolioDetailsFormProps>();

  const pairPosition = `${getValues('tokenList')[0].symbol}-${getValues('tokenList')[1].symbol}`;

  const onClaim = () =>
    setContent(
      <RewardsModal
        claimingFee="0.123"
        totalEarnings="0.00"
        rewardFee="0.00"
        rewardsList={[
          {
            amount: '0.00',
            symbol: 'MOVE',
          },
          {
            amount: '0.00',
            symbol: 'USDC.e',
          },
          {
            amount: '0.00',
            symbol: 'USDT.e',
          },
          {
            amount: '0.00',
            symbol: 'WBTC.e',
          },
        ]}
      />,
      {
        title: 'Rewards',
      }
    );

  return (
    <Div
      gap="1rem"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent={['flex-start', 'space-between']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div
        gap="1rem"
        width={['100%', 'auto']}
        display="flex"
        alignItems="center"
        mb={['0', '1rem']}
      >
        <TokenIcon
          withBg
          size="1.52rem"
          url={getValues('lpCoin.iconUri')}
          network={Network.MovementMainnet}
          symbol={getValues('lpCoin.symbol')}
        />
        <P
          fontWeight="600"
          color="#E5E7EB"
          fontFamily="Inter"
          fontSize="1.75rem"
          lineHeight="2.8125rem"
        >
          {pairPosition}
        </P>
      </Div>
      {
        [
          <Div width={['100%', 'auto']} key="farm-tag">
            <Tag key="tag" type="success" label="In Range" />,
          </Div>,
          <Div
            display="flex"
            key="farm-actions"
            width={['100%', 'auto']}
            gap={['0.5rem', '0.5rem', '0.5rem', '1rem']}
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <TokenInfoAction label="Pending rewards:" amount={0.0} />
            <TokenInfoAction
              label="Claim rewards:"
              amount={0.0}
              onClaim={onClaim}
            />
          </Div>,
        ][tab]
      }
    </Div>
  );
};
export default PoolDetailsHeader;
