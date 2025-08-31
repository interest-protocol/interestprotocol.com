import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import unikey from 'unikey';

import Layout from '@/components/layout';
import PoolPrice from '@/views/pool-create/components/pool-price';

import CardError from './components/card-error';
import Input from './components/Input';
import { PoolErrorManager } from './components/Input/components/pool-error-manager';
import PoolCreateFormButton from './components/pool-create-form-button';
import Strategy from './components/strategy';
import { CreatePoolForm } from './pool-create.types';
import { STRATEGIES } from './strategies.data';

const PoolCreate: FC = () => {
  const [tokensSelected, setTokensSelected] = useState(false);
  const [isTokensEmpty, setIsTokensEmpty] = useState(false);
  const { watch } = useFormContext<CreatePoolForm>();

  useEffect(() => {
    const sub = watch((values) => {
      const tokens = values.tokens ?? [];

      const empty =
        tokens.length >= 2 &&
        [0, 1].some(
          (i) =>
            tokens[i]?.type &&
            (!tokens[i]?.value ||
              isNaN(+tokens[i].value) ||
              +tokens[i].value <= 0)
        );

      const selected =
        tokens.length >= 2 &&
        [0, 1].every((i) => tokens[i]?.type && Number(tokens[i]?.value) > 0);

      setIsTokensEmpty(empty);
      setTokensSelected(selected);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(
    null
  );

  const handleSelectStrategy = (id: string) => {
    setSelectedStrategyId(selectedStrategyId === id ? null : id);
  };

  return (
    <Layout>
      <Div
        mx="auto"
        width="100%"
        height="auto"
        display="flex"
        maxWidth="54rem"
        p={['1.5rem', '0']}
        flexDirection="column"
      >
        <P
          color="#FFFFFF"
          fontWeight="600"
          fontFamily="Inter"
          lineHeight="1.75rem"
          mb={['1rem', '1.5rem']}
          fontSize={['1.5rem', '1.75rem']}
        >
          Create Pool
        </P>
        <Div
          p="1.5rem"
          gap="1rem"
          width="100%"
          height="100%"
          display="flex"
          bg="#9CA3AF1A"
          flexDirection="column"
          borderRadius="0.75rem"
          borderTop="0.375rem solid #9CA3AF1A"
        >
          <Div gap="1rem" display="flex" flexDirection="column">
            <P
              fontSize="1rem"
              color="#E5E7EB"
              fontWeight="600"
              fontFamily="Inter"
              lineHeight="1.75rem"
            >
              Select token pair and enter the initial amount
            </P>

            <Div
              width="100%"
              display="grid"
              alignItems="center"
              gap={['1rem', '0.75rem']}
              justifyContent="space-between"
              pb={!isTokensEmpty ? '1.5rem' : undefined}
              gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
              borderBottom={!isTokensEmpty ? '1px solid #F3F4F61A' : undefined}
            >
              <Input index={0} />
              <Input index={1} />
            </Div>

            <CardError />
          </Div>

          {tokensSelected && (
            <Div
              mt="0.5rem"
              pb="1.5rem"
              width="100%"
              display="grid"
              alignItems="center"
              gap={['1rem', '0.75rem']}
              justifyContent="space-between"
              borderBottom="1px solid #F3F4F61A"
              gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 27.6875rem']}
            >
              <Div gap="0.5rem" display="flex" flexDirection="column">
                <P
                  fontSize="1rem"
                  color="#E5E7EB"
                  fontWeight="600"
                  fontFamily="Inter"
                  lineHeight="1.75rem"
                >
                  Pool price
                </P>
                <P
                  color="#9CA3AF"
                  fontWeight="400"
                  fontSize="0.75rem"
                  fontFamily="Inter"
                  lineHeight="1.75rem"
                  width={['100%', '100%', '70%']}
                >
                  Pool price depends on initial price of both tokens added.
                </P>
              </Div>
              <PoolPrice />
            </Div>
          )}

          <Div gap="1rem" display="flex" flexDirection="column">
            <Div gap="0.5rem" display="flex" flexDirection="column">
              <P
                fontSize="1rem"
                color="#E5E7EB"
                fontWeight="600"
                fontFamily="Inter"
                lineHeight="1.75rem"
              >
                Select volatility strategy
              </P>
              <P
                color="#9CA3AF"
                fontWeight="400"
                fontSize="0.75rem"
                fontFamily="Inter"
                lineHeight="1.1rem"
              >
                Select strategy to see description
              </P>
            </Div>

            <Div
              width="100%"
              display="grid"
              justifyContent="space-between"
              gap={['0.25rem', '0.25rem', '0.75rem']}
              gridTemplateColumns={[
                '1fr',
                '1fr',
                '1fr',
                'repeat(3, minmax(0, 16rem))',
              ]}
            >
              {STRATEGIES.map((strategy) => (
                <Strategy
                  key={unikey()}
                  {...strategy}
                  isLoading={false}
                  selected={selectedStrategyId === strategy.pairId}
                  onSelect={() => handleSelectStrategy(strategy.pairId)}
                />
              ))}
            </Div>
          </Div>
          <PoolCreateFormButton />
          <PoolErrorManager />
        </Div>
      </Div>
    </Layout>
  );
};

export default PoolCreate;
