import { FC } from 'react';
import { Button, Div, P, Span } from '@stylin.js/elements';
import { useFormContext, useWatch } from 'react-hook-form';

import { MinusSVG, PlusSVG } from '@/components/svg';

import { SlippageInfoProps } from './manage-slippage-form.types';

const SlippageInfo: FC<SlippageInfoProps> = ({ isOpen, handleManageView }) => {
  const { control } = useFormContext();

  const settings = useWatch({ control, name: 'settings' });

  const ManageIcon = isOpen ? MinusSVG : PlusSVG;

  return (
    <Div
      py="m"
      px="m"
      display="flex"
      borderRadius="xs"
      alignItems="center"
      justifyContent="space-between"
    >
      <P  fontSize="0.875rem">
        Slippage:
        <Span
          ml="xs"
          color="primary"
        >
          {settings.slippage}%
        </Span>
      </P>
      <Button onClick={handleManageView}>
        <ManageIcon maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
      </Button>
    </Div>
  );
};

export default SlippageInfo;
