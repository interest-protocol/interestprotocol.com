import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import AdditionalInfoHeader from './additional-info-header';

const AdditionalInfo: FC = () => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  const valueIn = useWatch({ control, name: 'from.value' });

  const toggleAccordion = () => setIsOpen(!isOpen);

  if (!Number(valueIn)) return;

  return (
    <Div mt="0.813rem">
      <AdditionalInfoHeader toggle={toggleAccordion} />
    </Div>
  );
};

export default AdditionalInfo;
