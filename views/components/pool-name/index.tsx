import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import Tag from '@/components/tag';
import { Network } from '@/constants';

import { PoolNameProps } from './pool-name.types';

const PoolName: FC<PoolNameProps> = ({ tags, iconURL, name }) => (
  <Div display="flex" gap="0.5rem">
    <TokenIcon
      withBg
      size="19.28px"
      symbol="MOVE"
      url={iconURL}
      rounded={true}
      network={Network.MovementMainnet}
    />
    <Div>
      <P
        color="#fff"
        fontWeight="500"
        fontFamily="Inter"
        fontSize="0.875rem"
        lineHeight="1.12rem"
      >
        {name}
      </P>
      <Div display="flex" gap="0.25rem" mt="0.25rem">
        {tags.map((item) => (
          <Tag {...item} key={v4()} />
        ))}
      </Div>
    </Div>
  </Div>
);

export default PoolName;
