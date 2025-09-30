import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const TokenInfoActionsWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Div
    gap="0.5rem"
    display="flex"
    fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem']}
    fontWeight="500"
    bg="#9CA3AF1A"
    p="0.75rem 1rem"
    fontFamily="Inter"
    alignItems="center"
    lineHeight="1.5rem"
    width={['100%', '100%', '100%', 'max-content']}
    borderRadius="0.75rem"
    border="1px solid #9CA3AF1A"
    justifyContent="space-between"
  >
    {children}
  </Div>
);

export default TokenInfoActionsWrapper;
