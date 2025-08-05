import { InterestDex } from '@interest-protocol/aptos-move-dex';
import { normalizeSuiAddress } from '@interest-protocol/interest-aptos-v2';
import { Box, Button, TooltipWrapper } from '@interest-protocol/ui-kit';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import { FC, useMemo } from 'react';
import toast from 'react-hot-toast';
import invariant from 'tiny-invariant';

import { WrapSVG } from '@/components/svg';
import { COIN_TYPE_TO_FA, TOKENS } from '@/constants/coins';
import { useCoins } from '@/lib/coins-manager/coins-manager.hooks';
import { parseToMetadata } from '@/utils';
import { CoinMetadata, FAMetadata } from '@/utils/coin/coin.types';

type CoinType = keyof typeof COIN_TYPE_TO_FA;

const FloatingButtons: FC = () => {
  //const network = useNetwork<Network>();
  const { coinsMap, mutate, loading: coinsLoading } = useCoins();
  const { account, signAndSubmitTransaction } = useAptosWallet();

  const verifiedTokens = TOKENS.flatMap((metadata) =>
    metadata.address && metadata.type
      ? [
          parseToMetadata({
            name: metadata.name,
            symbol: metadata.symbol,
            iconUri: metadata.iconUri,
            address: metadata.address,
            decimals: metadata.decimals,
            projectUri: metadata.projectUri ?? '',
          } as FAMetadata),
          parseToMetadata({
            name: metadata.name,
            type: metadata.type,
            symbol: metadata.symbol,
            iconUri: metadata.iconUri,
            decimals: metadata.decimals,
          } as CoinMetadata),
        ]
      : parseToMetadata(metadata as unknown as CoinMetadata | FAMetadata)
  );

  const dexV2 = new InterestDex();
  const coinTokens = verifiedTokens.filter(
    (token) => (token.type as CoinType) in COIN_TYPE_TO_FA
  );

  const hasCoinTokenWithBalance = useMemo(() => {
    if (coinsLoading && Object.keys(coinsMap).length === 0) {
      return false;
    }

    return coinTokens.some((token) => {
      const coin = coinsMap[normalizeSuiAddress(token.type)];
      return coin && !coin.balance.isZero();
    });
  }, [coinTokens, coinsMap, coinsLoading]);

  const handleWrapCoin = async () => {
    coinTokens.map(async (token) => {
      const coin = coinsMap[normalizeSuiAddress(token.type)];

      const symbol = token.symbol;

      const id = toast.loading(`Wrapping ${symbol}...`);
      try {
        invariant(account, 'You should have this coin in your wallet');
        invariant(coin, 'You should have this coin in your wallet');

        const payload = dexV2.wrapCoin({
          coinType: token.type,
          amount: BigInt(coin.balance.toString()),
          recipient: account.address,
        });

        const tx = await signAndSubmitTransaction({ payload });

        invariant(tx.status === 'Approved', 'Rejected by User');

        //TODO: update
        //const txResult = tx.args;

        //logWrapCoin(account.address, symbol, network, txResult.hash);

        toast.success(`${symbol} wrapped successfully!`);
      } catch (e) {
        if ((e as any).data.error_code === 'mempool_is_full')
          toast.error('The mempool is full, try again in a few seconds.');
        else toast.error((e as Error).message);
      } finally {
        mutate();
        toast.dismiss(id);
      }
    });
  };

  const disabled = !!account?.address && hasCoinTokenWithBalance;

  return (
    <Box
      right="2rem"
      bottom={['7rem', '7rem', '7rem', '2rem']}
      position="fixed"
      display="flex"
      flexDirection="column"
      gap="m"
    >
      <TooltipWrapper
        px="s"
        whiteSpace="nowrap"
        bg="lowestContainer"
        color="#Fff"
        tooltipPosition="left"
        boxShadow="0 0 1rem #0003"
        tooltipContent={
          disabled ? `Convert coins to FA` : 'Nothing to convert.'
        }
      >
        <Button
          isIcon
          width="3rem"
          height="3rem"
          variant="filled"
          borderRadius="full"
          disabled={!disabled}
          onClick={handleWrapCoin}
          border="1px solid #B4C5FF"
        >
          <WrapSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Button>
      </TooltipWrapper>
    </Box>
  );
};

export default FloatingButtons;
