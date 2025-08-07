import { Network } from '@interest-protocol/interest-aptos-v2';
import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useNetwork } from '@/lib/aptos-provider/network/network.hooks';

import TokenIcon from '../token-icon';
import LabelText from './components/label-text';
import { StrategyProps } from './strategy.types';

const Strategy: FC<StrategyProps> = ({
  name,
  fee,
  symbol,
  iconUrl1,
  iconUrl2,
  selected,
  isLoading,
  onSelect,
}) => {
  const network = useNetwork<Network>();

  return (
    <Button
      p="0"
      m="0"
      tabIndex={0}
      height="8rem"
      variant="outline"
      onClick={onSelect}
      borderRadius="0.5rem"
      width={['100%', '16.44rem']}
      nHover={{
        '& > div > div:first-child > div:first-child': {
          filter: 'grayscale(0%)',
          transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      }}
      nFocus={{
        boxShadow: 'none',
        borderColor: selected ? '#B4C5FF' : '1px solid transparent',
      }}
      border={selected ? '1px solid #B4C5FF' : '1px solid transparent'}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        pointerEvents="none"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          flex="1"
          p="0.5rem"
          bg={selected ? '#B4C5FF1A' : '#9CA31F1A'}
          width="100%"
          gap="0.5rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          borderTopLeftRadius="0.5rem"
          borderTopRightRadius="0.5rem"
        >
          <Box
            display="flex"
            height="1.875rem"
            alignItems="center"
            justifyContent="center"
            position="relative"
            transition="filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            filter={selected ? 'grayscale(0%)' : 'grayscale(100%)'}
          >
            <Box
              display="flex"
              position="relative"
              alignItems="center"
              justifyContent="center"
            >
              <Box mr="-0.3rem" zIndex="1">
                <TokenIcon
                  rounded
                  url={iconUrl1}
                  size="1.129rem"
                  symbol={symbol}
                  network={network}
                />
              </Box>
              <Box ml="-0.3rem" zIndex="2">
                <TokenIcon
                  rounded
                  url={iconUrl2}
                  size="1.129rem"
                  symbol={symbol}
                  network={network}
                />
              </Box>
            </Box>
          </Box>

          {fee && !isLoading && (
            <Box display="flex" fontFamily="Inter" alignItems="center">
              <LabelText>Fee</LabelText>
              <LabelText color={fee >= 1 ? '#FFFFFF' : '#9CA3AF'} ml="0.2rem">
                {fee}
              </LabelText>
              <LabelText color="#FFFFFF">%</LabelText>
            </Box>
          )}

          {fee && isLoading && <Skeleton width="6rem" height="0.5rem" />}
        </Box>

        <Box
          width="100%"
          height="3rem"
          flexShrink="0"
          display="flex"
          bg="#9CA3AF1A"
          padding="0.75rem"
          alignItems="center"
          justifyContent="center"
          borderBottomLeftRadius="0.75rem"
          borderBottomRightRadius="0.75rem"
        >
          {isLoading ? (
            <Skeleton width="6rem" height="1rem" />
          ) : (
            <Typography
              size="large"
              variant="label"
              fontSize="1rem"
              fontWeight="500"
              color="#FFFFFF"
              fontFamily="Inter"
              lineHeight="1.5rem"
            >
              {name}
            </Typography>
          )}
        </Box>
      </Box>
    </Button>
  );
};

export default Strategy;
