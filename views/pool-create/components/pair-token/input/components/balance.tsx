import { Div, P } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { MaxBadge } from '@/components/max-badge';
import { ProgressIndicator } from '@/components/progress-indicator';
import SubtractBox from '@/components/svg/subtract-box';
import { ZERO_BIG_NUMBER } from '@/utils';
import {
  CreatePoolForm,
  InputProps,
} from '@/views/pool-create/pool-create.types';

const Balance: FC<InputProps> = ({ index }) => {
  const { setValue } = useFormContext<CreatePoolForm>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleMax = () => {
    setValue(`tokens.${index}.valueBN`, ZERO_BIG_NUMBER);
    setValue(`tokens.${index}.value`, '0');
  };

  return (
    <Div display="flex" alignItems="center" gap="0.5rem" onClick={handleMax}>
      <Div display={['none', 'block']} width="1.38875rem" height="1.25rem">
        <SubtractBox
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
          height="100%"
        />
      </Div>
      <P
        color="#D1D5DB"
        fontWeight="400"
        fontSize="0.75rem"
        fontFamily="Inter"
        lineHeight="1rem"
        whiteSpace="nowrap"
      >
        0.0000
      </P>
      <MaxBadge handleMax={handleMax} />
      {loading && (
        <Div
          mx="0.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div position="absolute" justifySelf="flex-end">
            <ProgressIndicator variant="loading" size={16} />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default Balance;
