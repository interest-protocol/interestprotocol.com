import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { ProgressIndicator } from '@/components/progress-indicator';
import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';

import ModalTokenSearch from './modal-token-search';
import NotFound from './not-found';
import {
  ModalTokenBodyProps,
  SearchTokenForm,
} from './select-token-modal.types';
import TokenModalItem from './token-modal-item';

const ModalTokenBody: FC<ModalTokenBodyProps> = ({
  tokens,
  loading,
  handleSelectToken,
}) => {
  const { control } = useFormContext<SearchTokenForm>();

  const search = useWatch({ control, name: 'search' });

  const isSearchAddress = search.startsWith('0x');

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(search?.toLowerCase() || '') ||
      token.name.toLowerCase().includes(search?.toLowerCase() || '')
  );

  if (!isSearchAddress)
    return (
      <Div>
        {loading && (
          <Div display="flex" gap="0.25rem" alignItems="center" pl="0.7rem">
            <ProgressIndicator variant="loading" size={15} />
          </Div>
        )}
        <Div gap="0.75rem" width="100%" mt="1rem">
          {filteredTokens.length ? (
            filteredTokens.map((token) => (
              <TokenModalItem
                key={unikey()}
                selected={false}
                token={token}
                onClick={() => handleSelectToken(token)}
                isFA={token.standard === TokenStandard.FA}
              />
            ))
          ) : (
            <NotFound />
          )}
        </Div>
      </Div>
    );

  return (
    <ModalTokenSearch search={search} handleSelectToken={handleSelectToken} />
  );
};

export default ModalTokenBody;
