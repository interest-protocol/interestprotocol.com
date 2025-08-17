import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import { TokenStandard } from '@/lib/coins-manager/coins-manager.types';

import ModalTokenSearch from './modal-token-search';
import NotFound from './not-found';
import {
  ModalTokenBodyProps,
  SearchTokenForm,
} from './select-token-modal.types';
import TokenModalItem from './token-modal-item';
import { Div } from '@stylin.js/elements';
import ProgressIndicator from '@/components/progress-indicator';

const ModalTokenBody: FC<ModalTokenBodyProps> = ({
  tokens,
  loading,
  handleSelectToken,
}) => {
  const { control } = useFormContext<SearchTokenForm>();

  const search = useWatch({ control, name: 'search' });

  const isSearchAddres = search.startsWith('0x');

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(search?.toLowerCase() || '') ||
      token.name.toLowerCase().includes(search?.toLowerCase() || '')
  );

  if (!isSearchAddres)
    return (
      <Div>
        <Div display="flex" gap="2xs" alignItems="center">
          {loading && <ProgressIndicator size="12px" />}
        </Div>
        <Div gap="s" width="100%">
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
