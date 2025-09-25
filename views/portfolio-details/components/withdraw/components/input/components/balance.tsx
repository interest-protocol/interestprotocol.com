import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { MaxBadge } from '@/components/max-badge';
import { PortfolioDetailsFormProps } from '@/views/portfolio-details/portfolio-details.types';

const Balance: FC = () => {
  const { setValue } = useFormContext<PortfolioDetailsFormProps>();

  const handleMax = () => {
    setValue('lpCoin.value', '100');
  };

  return <MaxBadge handleMax={handleMax} />;
};

export default Balance;
