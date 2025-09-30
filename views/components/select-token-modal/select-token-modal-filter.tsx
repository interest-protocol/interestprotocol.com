import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { SearchTokenForm, TokenOrigin } from './select-token-modal.types';

const ORIGIN_TITLE = {
  [TokenOrigin.Strict]: 'Strict',
  [TokenOrigin.Wallet]: 'Wallet',
};

const SelectTokenFilter: FC = () => {
  const { setValue, control } = useFormContext<SearchTokenForm>();

  const filterSelected = useWatch({ control, name: 'filter' });

  return (
    <Div
      gap="0.5rem"
      display="grid"
      flexWrap="wrap"
      gridTemplateColumns="1fr 1fr"
    >
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
          transition="all 500ms ease-in-out"
          border={'1px solid transparent'}
          nHover={{
            border:
              filterSelected === item
                ? '1px solid #B4C5FF33'
                : '1px solid #FFFFFF1A',
          }}
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
