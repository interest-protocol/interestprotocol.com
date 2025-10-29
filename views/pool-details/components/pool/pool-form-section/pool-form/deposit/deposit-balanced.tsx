import { Div, P } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ToggleButton } from '@/components/toggle';
import { ZERO_BIG_NUMBER } from '@/utils';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const DepositBalanced: FC = () => {
  const { control, setValue } = useFormContext<PortfolioDetailsFormProps>();

  const balanced = useWatch({
    control,
    name: 'balanced',
  });

  useEffect(() => {
    if (!balanced) {
      setValue('lpCoin.value', '');
      setValue('lpCoin.valueBN', ZERO_BIG_NUMBER);
      setValue('tokenList.0.value', '');
      setValue('tokenList.0.valueBN', ZERO_BIG_NUMBER);
      setValue('tokenList.1.value', '');
      setValue('tokenList.1.valueBN', ZERO_BIG_NUMBER);
    }
  }, [balanced]);

  return (
    <Div display="flex" justifyContent="space-between" alignItems="center">
      <P fontWeight="400" fontSize="1rem" lineHeight="1.125rem" color="#fff">
        Balanced
      </P>
      <ToggleButton
        name="balanced"
        defaultValue={balanced ?? false}
        onClick={() => setValue('balanced', !balanced)}
      />
    </Div>
  );
};

export default DepositBalanced;
