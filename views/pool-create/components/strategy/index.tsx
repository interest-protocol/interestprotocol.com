import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { CreatePoolForm } from '../../pool-create.types';
import { STRATEGIES } from './strategies.data';
import StrategyCard from './strategy-card';

const StrategySection: FC = () => {
  const { control, setValue } = useFormContext<CreatePoolForm>();

  const volatilityStrategyType = useWatch({
    control,
    name: 'volatilityStrategyType',
  });

  const handleSelectStrategy = (strategyType: string) => {
    const newStrategyType =
      strategyType == volatilityStrategyType ? '' : strategyType;
    setValue('volatilityStrategyType', newStrategyType);
  };

  return (
    <Div
      gap="1rem"
      display="flex"
      flexDirection="column"
      borderTop="1px solid #F3F4F61A"
      pt="1.5rem"
    >
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
        gap="0.75rem"
        display="grid"
        justifyContent="space-between"
        gridTemplateColumns={[
          '1fr',
          '1fr',
          '1fr',
          'repeat(3, minmax(0, 16rem))',
        ]}
      >
        {STRATEGIES.map((strategy) => (
          <StrategyCard
            key={unikey()}
            {...strategy}
            isLoading={false}
            selected={volatilityStrategyType === strategy.pairId}
            onSelect={() => handleSelectStrategy(strategy.pairId)}
          />
        ))}
      </Div>
    </Div>
  );
};

export default StrategySection;
