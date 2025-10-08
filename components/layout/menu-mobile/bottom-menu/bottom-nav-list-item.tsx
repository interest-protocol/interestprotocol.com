import { Div, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useModal } from '@/hooks';

import MobileMenu from '..';
import { BottomNavListItemProps } from './bottom-menu.types';

const BottomNavListItem: FC<BottomNavListItemProps> = ({
  name,
  path,
  Icon,
  onClick,
  isHidden,
}) => {
  const { setContent } = useModal();
  const { asPath, push } = useRouter();

  const goToPath = (path: unknown) => {
    if ((path as string).startsWith('https://'))
      return window.open(path as string, '_blank')?.focus();

    push(path as string);
  };

  if (isHidden) return null;

  const openModal = () =>
    setContent(<MobileMenu />, {
      title: '',
      mobileOnly: true,
    });

  const isActive = () => {
    if (!path && name.toLowerCase() !== 'more') return false;

    if (name.toLowerCase() === 'more') {
      return asPath.startsWith('/create-token') || asPath.startsWith('/stats');
    }

    return asPath === path || asPath.startsWith(`${path}/`);
  };

  const active = isActive();

  return (
    <>
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
          color={active ? '#B4C5FF' : '#FFFFFF9D'}
          nHover={{ color: !active ? '#909094' : '' }}
          {...(onClick
            ? { onClick }
            : {
                onClick: () => (name === 'more' ? openModal() : goToPath(path)),
              })}
        >
          <Div height="2rem" display="flex" alignItems="center">
            <Icon
              width="1.5rem"
              maxHeight="1.5rem"
              maxWidth="1.5rem"
              isSelected={active}
            />
          </Div>
          <Span
            fontSize="0.875rem"
            width="max-content"
            nHover={{ opacity: 0.7 }}
            textTransform="capitalize"
          >
            {name}
          </Span>
        </Div>
      </Div>
    </>
  );
};

export default BottomNavListItem;
