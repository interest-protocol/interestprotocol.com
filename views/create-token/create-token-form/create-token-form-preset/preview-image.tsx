import { Div } from '@stylin.js/elements';
import { FC, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { ICreateTokenForm } from '../../create-token.types';

const InputImagePreview: FC = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<ICreateTokenForm>();
  const imageURL = useWatch({ control, name: 'imageUrl' });

  useEffect(() => {
    if (!errors.imageUrl?.message) return setValue('dropImageUrl', '');
  }, [errors.imageUrl]);

  if (errors.imageUrl?.message) return null;

  return (
    <Div
      width="2.75rem"
      height="2.75rem"
      mixBlendMode="screen"
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundImage={`url(${imageURL})`}
    />
  );
};

export default InputImagePreview;
