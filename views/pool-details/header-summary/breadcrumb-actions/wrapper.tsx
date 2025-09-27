import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { WrapperProps } from './breadcrumb-actions.types';

const BreadcrumbActionWrapper: FC<PropsWithChildren<WrapperProps>> = ({
  onClick,
  children,
}) => (
  <Div
    p={['0.3rem', '0.3rem', '0.3rem', '0.5rem']}
    bg="#9CA3AF1A"
    color="#9CA3AF"
    width="max-content"
    borderRadius="0.75rem"
    border="1px solid #1F2937"
    transition="all 300ms ease-in-out"
    onClick={onClick}
    nHover={{
      color: '#B4C5FF',
      cursor: 'pointer',
      borderColor: '#B4C5FF',
    }}
  >
    <Div height="1.25rem" width="1.25rem">
      {children}
    </Div>
  </Div>
);

export default BreadcrumbActionWrapper;
