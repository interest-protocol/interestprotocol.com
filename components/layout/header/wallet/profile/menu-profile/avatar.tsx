import { Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/button';
import { CopySVG, UserSVG } from '@/components/svg';
import { EXPLORER_URL, Network } from '@/constants';
import { copyToClipboard, formatAddress } from '@/utils';

import BalanceCard from '../balance-card';
import { AvatarProps } from './user-info.types';

const Avatar: FC<AvatarProps> = ({ accountAddress }) => {
  const address = accountAddress ?? '';

  const SIZE = '4rem';

  const account = address || '';

  const clipBoardSuccessMessage = 'Address copied to the clipboard';

  return (
    <Div
      gap="1rem"
      display="flex"
      cursor="pointer"
      transition="0.3s"
      alignItems="center"
      flexDirection="column"
      boxShadow="0px 1px 2px 0px #0000000D"
    >
      <Div display="flex" alignItems="flex-end" gap="0.5rem">
        <Div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Div
            mb="0.5rem"
            display="flex"
            borderRadius="999px"
            width="max-content"
            alignItems="center"
            justifyContent="center"
            border="0.65rem solid #1e1f1f"
            ml="1.7rem"
          >
            <Div
              width="4rem"
              height="4rem"
              bg="#B4C5FF"
              display="flex"
              overflow="hidden"
              color="#002A78"
              alignItems="center"
              borderRadius="999px"
              justifyContent="center"
            >
              <UserSVG
                width="80%"
                height="80%"
                maxWidth={SIZE}
                maxHeight={SIZE}
              />
            </Div>
          </Div>
          <Div display="flex" gap="0.75rem">
            <Link
              target="_blank"
              href={EXPLORER_URL[Network.MovementMainnet](`account/${address}`)}
            >
              <P
                color="#E4E7E7"
                width="max-content"
                fontFamily="Inter"
                fontWeight="600"
                lineHeight="1.5rem"
                fontSize={['1rem', '1.25rem']}
              >
                {formatAddress(address)}
              </P>
            </Link>
          </Div>
        </Div>
        <Button
          p="0"
          mr="unset"
          pb="0.25rem"
          border="none"
          cursor="pointer"
          variant="text"
          color="#E2E2E6"
          nHover={{
            color: '#B4C5FF',
          }}
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(account || '', clipBoardSuccessMessage);
          }}
        >
          <CopySVG
            maxHeight="1rem"
            maxWidth="1rem"
            width="100%"
            color="#949E9E"
          />
        </Button>
      </Div>
      <BalanceCard />
    </Div>
  );
};

export default Avatar;
