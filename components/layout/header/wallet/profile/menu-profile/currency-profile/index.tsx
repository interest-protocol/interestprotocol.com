import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { ArrowLeftSVG, CheckedSVG } from '@/components/svg';

import { ALL_CURRENCIES_DATA, SUGGESTED_CURRENCY_DATA } from '../menu.data';
import { MenuCurrencyProps } from '../user-info.types';

const CurrencyProfile: FC<MenuCurrencyProps> = ({ handleBack }) => {
  const [isCurrencySelected, setIsCurrencySelected] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState('');

  const handleCurrency = (item: string) => {
    setSelectCurrency(item);
    setIsCurrencySelected(true);
    isCurrencySelected;
  };
  return (
    <Box width="100%" py="0.75rem" color="secondary">
      <Box
        width="60%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        ml="-0.65rem"
      >
        <Button isIcon variant="text" onClick={handleBack}>
          <ArrowLeftSVG
            width="1.5rem"
            height="1.5rem"
            maxHeight="100%"
            maxWidth="100%"
          />
        </Button>
        <Typography fontSize="1rem" variant="label" textTransform="uppercase">
          Currency
        </Typography>
      </Box>
      <Box py="0.75rem">
        <Typography size="small" variant="label" opacity="0.7" my="0.5rem">
          suggested currencies
        </Typography>
        <Box mt="xl">
          {SUGGESTED_CURRENCY_DATA.map(({ symbol, Icon }) => (
            <Box
              p="0.5rem"
              my="0.5rem"
              key={v4()}
              display="flex"
              bg="surface"
              height="4.5rem"
              borderRadius="0.5rem"
              alignItems="center"
              justifyContent="space-between"
              border={selectCurrency === symbol ? '1px solid' : ''}
              borderColor={selectCurrency === symbol ? 'outline' : ''}
              onClick={() => handleCurrency(symbol)}
            >
              <Box display="flex" alignItems="center">
                <Icon
                  width="2.5rem"
                  height="2.5rem"
                  maxHeight="100%"
                  maxWidth="100%"
                />
                <Typography size="small" variant="body" mx="0.5rem">
                  {symbol}
                </Typography>
              </Box>
              {selectCurrency === symbol && (
                <CheckedSVG
                  width="1.5rem"
                  height="1.5rem"
                  maxWidth="100%"
                  maxHeight="100%"
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box py="0.75rem">
        <Typography size="small" variant="label" opacity="0.7" my={0}>
          All currencies
        </Typography>
        <Box mt="0.75rem">
          {ALL_CURRENCIES_DATA.map(({ symbol, Icon }) => (
            <Box
              p="0.5rem"
              my="0.5rem"
              key={v4()}
              display="flex"
              bg="surface"
              height="4.5rem"
              borderRadius="0.5rem"
              alignItems="center"
              justifyContent="space-between"
              border={selectCurrency === symbol ? '1px solid' : ''}
              borderColor={selectCurrency === symbol ? 'outline' : ''}
              onClick={() => handleCurrency(symbol)}
            >
              <Box display="flex" alignItems="center">
                <Icon
                  width="2.5rem"
                  height="2.5rem"
                  maxHeight="100%"
                  maxWidth="100%"
                />
                <Typography fontSize="1rem" variant="label" mx="0.5rem">
                  {symbol}
                </Typography>
              </Box>
              {selectCurrency === symbol && (
                <CheckedSVG
                  width="1.5rem"
                  height="1.5rem"
                  maxWidth="100%"
                  maxHeight="100%"
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CurrencyProfile;
