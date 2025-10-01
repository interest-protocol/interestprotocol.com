import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ToggleButton } from '@/components/toggle';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const DepositBalanced: FC = () => {
  const { control, setValue } = useFormContext<PortfolioDetailsFormProps>();

  const balanced = useWatch({
    control,
    name: 'balanced',
  });

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
