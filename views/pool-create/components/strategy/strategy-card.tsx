import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import unikey from 'unikey';

import { TokenIcon } from '@/components';
import { Network } from '@/constants';

import { StrategyProps } from './strategy.types';

const StrategyCard: FC<StrategyProps> = ({
  description,
  fee,
  pair,
  selected,
  isLoading,
  onSelect,
}) => {
  return (
    <Div
      cursor="pointer"
      transition="0.3s"
      onClick={onSelect}
      borderRadius="0.75rem"
      bg={selected ? '#212838' : '#1f2430'}
      nHover={{
        '& > div:first-child > div:first-child': {
          filter: 'grayscale(0%)',
          transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        border: '1px solid #B4C5FF',
      }}
      border={selected ? '1px solid #B4C5FF' : '1px solid transparent'}
    >
      <Div
        flex="1"
        py="0.75rem"
        width="100%"
        gap="0.5rem"
        display="flex"
        height="5rem"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Div
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
          transition="filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
          filter={selected ? 'grayscale(0%)' : 'grayscale(100%)'}
        >
          <Div
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="center"
          >
            {pair.map((symbol, index) => (
              <Div
                mr={index == 0 ? '-0.3rem' : 'unset'}
                ml={index == 1 ? '-0.3rem' : 'unset'}
                key={unikey()}
              >
                {isLoading ? (
                  <Skeleton
                    width="1.875rem"
                    height="1.875rem"
                    borderRadius="100%"
                  />
                ) : (
                  <TokenIcon
                    withBg
                    size="1.129rem"
                    symbol={symbol}
                    network={Network.MovementMainnet}
                  />
                )}
              </Div>
            ))}
          </Div>
        </Div>

        {isLoading
          ? fee != undefined && <Skeleton width="6rem" height="0.75rem" />
          : fee && (
              <Div display="flex" fontFamily="Inter" alignItems="center">
                <P
                  color="#9CA3AF"
                  fontWeight="400"
                  lineHeight="1rem"
                  fontFamily="Inter"
                  fontSize="0.875rem"
                >
                  Fee <Span color={fee >= 1 ? '#FFF' : 'inherit'}>{fee}</Span>
                  <Span color="#fff">%</Span>
                </P>
              </Div>
            )}
      </Div>

      <Div
        p="0.75rem"
        width="100%"
        borderBottomLeftRadius="0.75rem"
        borderBottomRightRadius="0.75rem"
        bg={selected ? '#2e3444' : '#2c313d'}
      >
        {isLoading ? (
          <Skeleton width="100%" height="1rem" />
        ) : (
          <P
            color="#FFFFFF"
            fontSize="1rem"
            fontWeight="500"
            fontFamily="Inter"
            lineHeight="1.5rem"
            textAlign="center"
          >
            {description}
          </P>
        )}
      </Div>
    </Div>
  );
};

export default StrategyCard;
