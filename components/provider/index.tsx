import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ModalProvider>{children}</ModalProvider>
);

export default Provider;
