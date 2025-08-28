import { Div, P } from '@stylin.js/elements';
import { ReactNode, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ArrowDownSVG, ArrowUpSVG } from '@/components/svg';

import { CardInfoProps, ImageValue, ValueType } from './card.types';

const isImageValue = (value: unknown): value is ImageValue => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'url' in value &&
    typeof (value as ImageValue).url === 'string'
  );
};

const renderValue = (value: ValueType): ReactNode => {
  if (isImageValue(value)) {
    return (
      <Div gap="0.5rem" display="flex" alignItems="center">
        <img
          width={20}
          height={20}
          src={value.url}
          alt={value.alt || 'Imagem'}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
        {value.alt && (
          <P
            color="#FFFFFF"
            fontWeight="400"
            fontFamily="Inter"
            fontSize="0.875rem"
          >
            {value.alt}
          </P>
        )}
      </Div>
    );
  }

  if (value === null || value === undefined) return '';

  return value as ReactNode;
};

const Card = <T extends Record<string, unknown>>({
  width = '25.125rem',
  title,
  headers,
  keys,
  values,
  isLoading = false,
}: CardInfoProps<T>) => {
  const [isOpen, setIsOpen] = useState(true);

  const items = keys.reduce<{ label: ReactNode; value: ReactNode }[]>(
    (acc, key, index) => {
      if (index >= headers.length || !(key in values)) return acc;

      const rawValue = values[key];
      const resolvedValue =
        typeof rawValue === 'function'
          ? (rawValue as (raw: unknown) => ReactNode)(values)
          : renderValue(rawValue as ValueType);

      if (
        resolvedValue === '' ||
        resolvedValue === null ||
        resolvedValue === undefined
      )
        return acc;

      acc.push({
        label: headers[index] as ReactNode,
        value: resolvedValue,
      });

      return acc;
    },
    []
  );

  return (
    <Div
      p="1rem"
      gap="1rem"
      height="auto"
      display="flex"
      flexDirection="column"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
      width={['100%', `${width}`]}
    >
      <Div
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <P color="#FFFFFF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
          {title}
        </P>

        {isOpen ? (
          <ArrowDownSVG
            maxWidth="0.75rem"
            maxHeight="1rem"
            width="100%"
            color="#FFFFFF"
          />
        ) : (
          <ArrowUpSVG
            maxWidth="0.75rem"
            maxHeight="1rem"
            width="100%"
            color="#FFFFFF"
          />
        )}
      </Div>

      {isOpen && (
        <>
          {isLoading ? (
            <Skeleton width="100%" height="0.75rem" count={keys.length} />
          ) : items.length ? (
            <Div gap="1rem" width="100%" display="flex" flexDirection="column">
              {items.map((item, index) => (
                <Div
                  key={index}
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Div display="flex" alignItems="center" gap="0.5rem">
                    {typeof item.label === 'string' ? (
                      <P
                        color="#9CA3AF"
                        fontWeight="400"
                        fontFamily="Inter"
                        fontSize="0.875rem"
                      >
                        {item.label}
                      </P>
                    ) : (
                      item.label
                    )}
                  </Div>
                  <Div
                    flex="1"
                    mx="0.5rem"
                    height="1px"
                    borderBottom="1px solid #4B556380"
                  />
                  <Div
                    maxWidth="50%"
                    color="#FFFFFF"
                    fontWeight="400"
                    fontFamily="Inter"
                    fontSize="0.875rem"
                    wordBreak="break-word"
                  >
                    {item.value}
                  </Div>
                </Div>
              ))}
            </Div>
          ) : (
            <Skeleton width="10rem" height="2rem" />
          )}
        </>
      )}
    </Div>
  );
};

export default Card;
