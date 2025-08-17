import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { SearchTokenForm, TokenOrigin } from './select-token-modal.types';
import { Div, P } from '@stylin.js/elements';

const ORIGIN_TITLE = {
  [TokenOrigin.Strict]: 'Strict',
  [TokenOrigin.Wallet]: 'Wallet',
};

const SelectTokenFilter: FC = () => {
  const { setValue, control } = useFormContext<SearchTokenForm>();

  const searchValue = useWatch({ control, name: 'search' });

  const filterSelected = useWatch({ control, name: 'filter' });

  if (searchValue) return;

  return (
    <Div gap="s" display="grid" flexWrap="wrap" gridTemplateColumns="1fr 1fr">
      {[TokenOrigin.Strict, TokenOrigin.Wallet].map((item) => (
        <Div
          key={unikey()}
          cursor="pointer"
          onClick={() => setValue('filter', item)}
          bg={filterSelected === item ? '#B4C5FF33' : 'transparent'}
          color="#FFFFFF"
          fontWeight="500"
          fontFamily="Inter"
          borderRadius="9999px"
          py="0.5rem"
        >
          <P
            fontSize="1rem"
            textAlign="center"
            fontFamily="Inter"
            lineHeight="1.5rem"
            fontWeight={filterSelected === item ? '500' : '400'}
            color={filterSelected === item ? '#FFFFFF' : '#9CA3AF'}
          >
            {ORIGIN_TITLE[item]}
          </P>
        </Div>
      ))}
    </Div>
  );
};

export default SelectTokenFilter;
