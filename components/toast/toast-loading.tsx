import { P } from '@stylin.js/elements';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ToastLoadingProps } from './toast.types';
import ToastTimer from './toast-timer';

const ToastLoading: FC<ToastLoadingProps> = ({ message }) => (
  <>
    <P color="#FFFFFF" py="0.5rem">
      {message ? message : <Skeleton width={120} height={16} />}
    </P>
    <ToastTimer loading color="#DDDDDD" />
  </>
);

export default ToastLoading;
