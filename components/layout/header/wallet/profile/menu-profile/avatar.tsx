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
      display="flex"
      cursor="pointer"
      transition="0.3s"
      alignItems="center"
      boxShadow="0px 1px 2px 0px #0000000D"
      flexDirection="column"
      gap="1rem"
    >
      <Div display="flex" alignItems="flex-end" gap="0.5rem">
        <Div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Div
            border="0.65rem solid #1e1f1f"
            borderRadius="999px"
            bg="red"
            display={'flex'}
            width="max-content"
          >
            <Div
              bg="#B4C5FF"
              width="4rem"
              height="4rem"
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
                fontSize="1.25rem"
                lineHeight="1.5rem"
              >
                {formatAddress(address)}
              </P>
            </Link>
          </Div>
        </Div>
        <Button
          p="0"
          pb="0.25rem"
          mr="unset"
          border="none"
          cursor="pointer"
          variant="text"
          nHover={{
            color: '#B4C5FF',
          }}
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(account || '', clipBoardSuccessMessage);
          }}
          color="#E2E2E6"
        >
          <CopySVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
      </Div>
      <BalanceCard />
    </Div>
  );
};

export default Avatar;
