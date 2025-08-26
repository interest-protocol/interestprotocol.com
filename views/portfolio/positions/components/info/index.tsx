import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

const Info: FC = () => (
  <Div display="flex" flexDirection="column">
    <Div
      mb="1.5rem"
      gap="0.5rem"
      display="flex"
      bg="#9CA3AF1A"
      p="0.75rem 1rem"
      alignItems="center"
      borderRadius="0.75rem"
      justifyContent="space-between"
      border="1px solid #9CA3AF1A"
    >
      <P color="#9CA3AF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        Your posirtion:
      </P>
      <Span color="#FFFFFF" fontSize="1rem" fontWeight="500" fontFamily="Inter">
        $19,720.00
      </Span>
    </Div>
  </Div>
);

export default Info;
