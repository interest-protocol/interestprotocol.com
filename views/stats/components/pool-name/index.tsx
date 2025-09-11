import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TokenIcon } from '@/components';
import { Button } from '@/components/Button';
import { Network } from '@/constants';

import { TAG_COLOR } from './pool-name.data';
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
          <Button
            key={v4()}
            px="0.5rem"
            py="0.25rem"
            variant="filled"
            fontWeight="500"
            lineHeight="1rem"
            fontSize="0.75rem"
            border="1px solid"
            bg={TAG_COLOR[item].bg}
            textTransform="capitalize"
            color={TAG_COLOR[item].color}
            borderColor={TAG_COLOR[item].color}
            nHover={{
              borderColor: TAG_COLOR[item].bg,
              fontWeight: 'bold',
            }}
          >
            {item}
          </Button>
        ))}
      </Div>
    </Div>
  </Div>
);

export default PoolName;
