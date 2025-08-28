import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import useSWR from 'swr';

import { ProgressIndicator } from '../progress-indicator';
import { DefaultTokenSVG, ETHChainSVG } from '../svg';
import { SVGProps } from '../svg/svg.types';
import { TOKEN_ICONS } from './token-icon.data';
import { TokenIconProps } from './token-icon.types';
import { isTokenIconUrl } from './token-icon.utils';

const PADDING_BORDER_SYMBOLS = ['nETH'];

const CHAIN_ICON: Record<string, FC<SVGProps>> = {
  e: ETHChainSVG,
};

const TokenIcon: FC<TokenIconProps> = ({
  url,
  symbol,
  withBg,
  network,
  rounded,
  withBorder,
  size = '1.5rem',
  loaderSize = 16,
}) => {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const stopLoad = () => setLoading(false);
  const errorOnLoad = () => setLoadError(true);

  const icon = TOKEN_ICONS[network]?.[symbol] ?? null;

  const { data: iconSrc, isLoading } = useSWR(
    `${network}-${symbol}`,
    async () => {
      if (icon) return null;

      if (url) return url;

      return null;
    }
  );

  const chain = symbol?.split('.')[1];
  const ChainIcon = CHAIN_ICON[chain];

  if (loadError)
    return (
      <Div
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Div
          bg="black"
          color="white"
          display="flex"
          overflow="hidden"
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={`calc(${size} * 1.66)`}
          height={`calc(${size} * 1.66)`}
          borderRadius={rounded || !withBg ? '999rem' : '0.5rem'}
          border={withBorder ? '1px solid #FFFFFF' : undefined}
          {...(withBg && { bg: '#E2E2E6', color: '#131316' })}
        >
          <DefaultTokenSVG
            width="100%"
            maxWidth={size ?? '1.5rem'}
            maxHeight={size ?? '1.5rem'}
          />
        </Div>
      </Div>
    );

  if (icon && isTokenIconUrl(icon))
    return (
      <Div
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        mr={!ChainIcon ? 'unset' : '0.5rem'}
      >
        <Div
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={`calc(${size} * 1.66)`}
          height={`calc(${size} * 1.66)`}
          borderRadius={rounded ? '999rem' : '0.5rem'}
          border={withBorder ? '1px solid #FFFFFF' : undefined}
          {...(withBg && { bg: 'transparent', color: '#131316' })}
        >
          <Div
            overflow="hidden"
            width={`calc(${size} * 1.66)`}
            height={`calc(${size} * 1.66)`}
            borderRadius={rounded ? '999rem' : '0.5rem'}
            border={withBorder ? '1px solid #FFFFFF' : undefined}
          >
            {loading && (
              <Div position="absolute" top="-0.5rem" left="0.9rem">
                <ProgressIndicator size={loaderSize} variant="loading" />
              </Div>
            )}
            <img
              width="100%"
              alt={symbol}
              src={icon.url}
              onLoad={stopLoad}
              onError={errorOnLoad}
            />
          </Div>
        </Div>
        {ChainIcon && (
          <Div
            right="-0.5rem"
            bottom="-0.3rem"
            overflow="hidden"
            position="absolute"
            borderRadius="999rem"
            border={withBorder ? '1px solid #FFFFFF' : undefined}
          >
            <ChainIcon maxHeight={size} maxWidth={size} width="100%" />
          </Div>
        )}
      </Div>
    );

  if (icon && !isTokenIconUrl(icon))
    return (
      <Div
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        mr={!ChainIcon ? 'unset' : '0.5rem'}
      >
        <Div
          display="flex"
          overflow="hidden"
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={`calc(${size} * 1.66)`}
          height={`calc(${size} * 1.66)`}
          borderRadius={rounded ? '999rem' : '0.5rem'}
          {...(withBg && {
            bg: icon.bg || '#E2E2E6',
            color: icon.color || '#131316',
          })}
          border={withBorder ? '1px solid #FFFFFF' : undefined}
        >
          <icon.Icon
            width="100%"
            maxWidth={
              PADDING_BORDER_SYMBOLS.includes(symbol)
                ? `calc(${size} * 1.66)`
                : size ?? '1.5rem'
            }
            maxHeight={
              PADDING_BORDER_SYMBOLS.includes(symbol)
                ? `calc(${size} * 1.66)`
                : size ?? '1.5rem'
            }
          />
        </Div>
        {ChainIcon && (
          <Div
            right="-0.5rem"
            bottom="-0.3rem"
            overflow="hidden"
            position="absolute"
            borderRadius="999rem"
          >
            <ChainIcon maxHeight={size} maxWidth={size} width="100%" />
          </Div>
        )}
      </Div>
    );

  if (url)
    return (
      <Div
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        mr={!ChainIcon ? 'unset' : '0.5rem'}
      >
        <Div
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={`calc(${size} * 1.66)`}
          height={`calc(${size} * 1.66)`}
          borderRadius={rounded ? '999rem' : '0.5rem'}
          border={withBorder ? '1px solid #FFFFFF' : undefined}
        >
          <Div
            overflow="hidden"
            width={`calc(${size} * 1.66)`}
            height={`calc(${size} * 1.66)`}
            borderRadius={rounded ? '999rem' : '0.5rem'}
          >
            {loading && (
              <Div position="absolute" top="-0.5rem" left="0.9rem">
                <ProgressIndicator size={loaderSize} variant="loading" />
              </Div>
            )}
            <img
              src={url}
              width="100%"
              alt={symbol}
              onLoad={stopLoad}
              onError={errorOnLoad}
              style={{
                objectFit: 'cover',
                width: `calc(${size} * 1.66)`,
                height: `calc(${size} * 1.66)`,
                position: 'absolute',
              }}
            />
          </Div>
        </Div>
        {ChainIcon && (
          <Div
            right="-0.5rem"
            bottom="-0.3rem"
            overflow="hidden"
            position="absolute"
            borderRadius="999rem"
          >
            <ChainIcon maxHeight={size} maxWidth={size} width="100%" />
          </Div>
        )}
      </Div>
    );

  if (isLoading || iconSrc)
    return (
      <Div
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        mr={!ChainIcon ? 'unset' : '0.5rem'}
      >
        <Div
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
          width={`calc(${size} * 1.66)`}
          height={`calc(${size} * 1.66)`}
          borderRadius={rounded ? '999rem' : '0.5rem'}
          border={withBorder ? '1px solid #FFFFFF' : undefined}
        >
          <Div
            overflow="hidden"
            width={`calc(${size} * 1.66)`}
            height={`calc(${size} * 1.66)`}
            borderRadius={rounded ? '999rem' : '0.5rem'}
            border={withBorder ? '1px solid #FFFFFF' : undefined}
          >
            {isLoading && (
              <Div position="absolute" top="-0.5rem" left="0.9rem">
                <ProgressIndicator size={loaderSize} variant="loading" />
              </Div>
            )}
            {iconSrc && (
              <img
                width="100%"
                alt={symbol}
                src={iconSrc}
                onLoad={stopLoad}
                onError={errorOnLoad}
                style={{
                  objectFit: 'cover',
                  width: `calc(${size} * 1.66)`,
                  height: `calc(${size} * 1.66)`,
                  position: 'absolute',
                  border: `${withBorder ? '1px solid #FFFFFFF' : 'none'}`,
                }}
              />
            )}
          </Div>
        </Div>
        {ChainIcon && (
          <Div
            right="-0.5rem"
            bottom="-0.3rem"
            overflow="hidden"
            position="absolute"
            borderRadius="999rem"
          >
            <ChainIcon maxHeight={size} maxWidth={size} width="100%" />
          </Div>
        )}
      </Div>
    );

  return (
    <Div
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
      mr={!ChainIcon ? 'unset' : '0.5rem'}
    >
      <Div
        bg="black"
        color="white"
        display="flex"
        overflow="hidden"
        position="relative"
        alignItems="center"
        justifyContent="center"
        width={`calc(${size} * 1.66)`}
        height={`calc(${size} * 1.66)`}
        borderRadius={rounded || !withBg ? '999rem' : '0.5rem'}
        border={withBorder ? '1px solid #FFFFFF' : undefined}
        {...(withBg && { bg: '#E2E2E6', color: '#131316' })}
      >
        <DefaultTokenSVG
          width="100%"
          maxWidth={size ?? '1.5rem'}
          maxHeight={size ?? '1.5rem'}
        />
      </Div>
      {ChainIcon && (
        <Div
          right="-0.5rem"
          bottom="-0.3rem"
          overflow="hidden"
          position="absolute"
          borderRadius="999rem"
        >
          <ChainIcon maxHeight={size} maxWidth={size} width="100%" />
        </Div>
      )}
    </Div>
  );
};

export default TokenIcon;
