import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import { formatMoney } from '@/utils';
import { truncate } from '@/utils/truncate';
import { CreatePoolForm } from '@/views/pool-create/pool-create.types';

const PoolPrice: FC = () => {
  const { control } = useFormContext<CreatePoolForm>();
  const tokens = useWatch({ control, name: 'tokens' });

  const [isLoading, setIsLoading] = useState(true);
  const [poolTokenPrice, setPoolTokenPrice] = useState<number>(0);
  const [poolTokenPriceUSD, setPoolTokenPriceUSD] = useState<number>(0);

  const poolName = `${truncate(tokens?.[0]?.symbol || '')}/${truncate(
    tokens?.[1]?.symbol || ''
  )}`;

  useEffect(() => {
    const fetchPoolPrice = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPoolTokenPrice(0.0032);
      setPoolTokenPriceUSD(0.5);
      setIsLoading(false);
    };

    fetchPoolPrice();
  }, []);

  return (
    <Div
      p="1rem"
      height="5rem"
      display="flex"
      bg="#9CA3AF1A"
      position="relative"
      alignItems="center"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
      justifyContent="space-between"
    >
      <Div gap="0.25rem" display="flex" flexDirection="column">
        <P
          fontSize="1rem"
          color="#FFFFFF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
        >
          {isLoading ? (
            <Skeleton width={80} height={16} />
          ) : (
            formatMoney(poolTokenPrice, 2)
          )}
        </P>

        <P
          color="#9CA3AF"
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1rem"
          fontFamily="Inter"
        >
          {isLoading ? <Skeleton width={60} height={14} /> : poolName}
        </P>
      </Div>

      <Div
        top="50%"
        left="50%"
        bg="#FFFFFF"
        width="0.25rem"
        height="0.25rem"
        borderRadius="100px"
        position="absolute"
        transform="translate(-50%, -50%)"
      />

      <Div
        gap="0.25rem"
        display="flex"
        textAlign="right"
        flexDirection="column"
      >
        <P
          fontSize="1rem"
          color="#FFFFFF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
        >
          {isLoading ? (
            <Skeleton width={80} height={16} />
          ) : (
            formatMoney(poolTokenPriceUSD, 2)
          )}
        </P>

        <P
          color="#9CA3AF"
          fontWeight="400"
          lineHeight="1rem"
          fontFamily="Inter"
          fontSize="0.875rem"
        >
          {isLoading ? <Skeleton width={40} height={14} /> : 'USD'}
        </P>
      </Div>
    </Div>
  );
};

export default PoolPrice;
