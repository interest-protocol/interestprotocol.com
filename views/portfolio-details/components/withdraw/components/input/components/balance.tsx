import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { MaxBadge } from '@/components/max-badge';

import { CreateWithdraw } from '../input.types';

const Balance: FC = () => {
  const { setValue } = useFormContext<CreateWithdraw>();

  const handleMax = () => {
    setValue('value', 100);
  };

  return <MaxBadge handleMax={handleMax} />;
};

export default Balance;
