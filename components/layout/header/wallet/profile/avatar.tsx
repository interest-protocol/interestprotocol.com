import { Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { UserSVG } from '@/components/svg';
import { EXPLORER_URL, Network } from '@/constants';
import { formatAddress } from '@/utils';

import { AvatarProps } from './profile.types';

const Avatar: FC<AvatarProps> = ({
  isLarge,
  accountAddress,
  withNameOrAddress,
  nameOrAddressPosition = 'right',
}) => {
  const address = accountAddress ?? '';

  const SIZE = isLarge ? '2.2rem' : '1.5rem';

  return (
    <Div
      px="1.5rem"
      py="0.75rem"
      display="flex"
      cursor="pointer"
      transition="0.3s"
      alignItems="center"
      boxShadow="0px 1px 2px 0px #0000000D"
    >
      <Div
        bg="#B4C5FF"
        width={SIZE}
        height={SIZE}
        display="flex"
        overflow="hidden"
        color="#002A78"
        alignItems="center"
        borderRadius="999px"
        justifyContent="center"
      >
        <UserSVG width="80%" height="80%" maxWidth={SIZE} maxHeight={SIZE} />
      </Div>
      {withNameOrAddress && nameOrAddressPosition === 'right' && (
        <Link
          target="_blank"
          href={EXPLORER_URL[Network.MovementMainnet](`account/${address}`)}
        >
          <P
            mr="0.5rem"
            fontSize="1rem"
            color="#E2E2E6"
            width="max-content"
            fontFamily="Inter"
          >
            {formatAddress(address)}
          </P>
        </Link>
      )}
      {withNameOrAddress && nameOrAddressPosition === 'left' && (
        <P
          ml="0.5rem"
          fontSize="1rem"
          color="#E2E2E6"
          width="max-content"
          fontFamily="Inter"
          fontWeight="500"
          display={['none', 'none', 'none', 'block', 'block']}
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </P>
      )}
    </Div>
  );
};

export default Avatar;
