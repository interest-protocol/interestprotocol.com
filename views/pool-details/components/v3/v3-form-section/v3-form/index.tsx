import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { PlusSVG } from '@/components/svg';

import AdditionalInfo from './components/additional-info';
import Input from './components/input';

const V3Form: FC = () => {
  return (
    <Div display="flex" flexDirection="column" gap="0.75rem">
      <P
        color="#fff"
        fontWeight="400"
        fontSize="1.5rem"
        lineHeight="2.25rem"
        letterSpacing="-0.75px"
      >
        Deposit
      </P>
      <Div display="flex" flexDirection="column" gap="0.75rem">
        <Div display="flex" flexDirection="column" gap="0.35rem">
          <Input field="tokenList.0" />
          <Div
            my="-1.3rem"
            zIndex="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Div
              p="0.75rem"
              display="flex"
              bg="#030712"
              width="2.25rem"
              height="2.25rem"
              cursor="pointer"
              alignItems="center"
              borderRadius="0.75rem"
              justifyContent="center"
            >
              <PlusSVG
                width="0.65rem"
                color="#9CA3AF"
                maxWidth="0.65rem"
                maxHeight="0.65rem"
              />
            </Div>
          </Div>
          <Input field="tokenList.1" />
        </Div>
        <AdditionalInfo
          data={[
            {
              label: 'Deposit Ratio:',
              amount: '53.73% USDT / 46.27% USDC',
            },
            {
              label: 'Estimated APR:',
              amount: '68.18%',
            },
          ]}
        />
        <Button
          border="none"
          display="flex"
          p="0.5rem 1rem"
          height="3.5rem"
          fontSize="1rem"
          fontWeight="500"
          cursor="pointer"
          color="#002A78"
          fontFamily="Inter"
          alignItems="center"
          background="#B4C5FF"
          borderRadius="0.75rem"
          justifyContent="center"
        >
          Connect Wallet
        </Button>
      </Div>
    </Div>
  );
};

export default V3Form;
