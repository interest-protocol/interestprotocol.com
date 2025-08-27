import { Div, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import MenuMobile from '..';
import { BottomNavListItemProps } from './bottom-menu.types';

const BottomNavListItem: FC<BottomNavListItemProps> = ({
  name,
  path,
  Icon,
  onClick,
  isHidden,
}) => {
  const { asPath, push } = useRouter();
  const [isOpenMenuMore, setIsOpenMenuMore] = useState(false);

  const goToPath = (path: unknown) => {
    if ((path as string).startsWith('https://'))
      return window.open(path as string, '_blank')?.focus();

    push(path as string);
  };

  if (isHidden) return null;

  const toggleOpenMenuMore = () => setIsOpenMenuMore(not);

  return (
    <>
      <MenuMobile closeMenu={toggleOpenMenuMore} isOpen={isOpenMenuMore} />
      <Div flex="1" height="100%">
        <Div
          py="1rem"
          px="0.5rem"
          gap="0.5rem"
          key={v4()}
          height="100%"
          display="flex"
          cursor="pointer"
          borderRadius="0.5rem"
          alignItems="center"
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          transition="all 350ms ease-in-out"
          color={asPath === path ? '#B4C5FF' : '#ffffff9d'}
          nHover={{ color: asPath !== path ? '#909094' : '' }}
          {...(onClick
            ? { onClick }
            : {
                onClick: () =>
                  name == 'more' ? toggleOpenMenuMore() : goToPath(path),
              })}
        >
          <Div height="2rem" display="flex" alignItems="center">
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
          </Div>
          <Span
            fontSize="0.875rem"
            width="max-content"
            nHover={{
              opacity: 0.7,
            }}
          >
            {name}
          </Span>
        </Div>
      </Div>
    </>
  );
};

export default BottomNavListItem;
