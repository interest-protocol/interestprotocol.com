import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TokenIcon } from '@/components';
import SegmentedControl from '@/components/segmented-control';
import { Network } from '@/constants';

import { OPTIONS } from '../overview-modal.data';
import { OverviewHeaderProps } from './overview-header.types';

const OverviewHeader: FC<OverviewHeaderProps> = ({ lp, token, value }) => (
  <Div display="flex" alignItems="center" justifyContent="space-between">
    <Div gap="1rem" display="flex" alignItems="center">
      <TokenIcon
        withBg
        rounded
        size="1rem"
        url={lp}
        symbol={token}
        network={Network.MovementMainnet}
      />
      <Div
        gap="0.25rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <P
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          fontSize="0.875rem"
        >
          {token}
        </P>
        <P
          fontWeight="400"
          color="#9CA3AF"
          fontFamily="Inter"
          fontSize="0.86125rem"
          lineHeight="2.8125rem"
        >
          {value ?? 0}%
        </P>
      </Div>
    </Div>
    <SegmentedControl
      options={OPTIONS}
      defaultOption={OPTIONS[0]}
      onSelect={() => {}}
    />
  </Div>
);

export default OverviewHeader;
