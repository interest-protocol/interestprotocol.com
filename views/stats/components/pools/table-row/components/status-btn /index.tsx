import { Button } from '@stylin.js/elements';
import { FC } from 'react';

import { StatusBtnProps } from './status-btn.types';
import { styles } from './styles';

const StatusBtn: FC<StatusBtnProps> = ({ status }) => {
  const style = styles[status];

  return (
    <Button
      py="0.125rem"
      px="0.375rem"
      bg={style.bg}
      display="flex"
      fontWeight="500"
      cursor="pointer"
      fontFamily="Inter"
      alignItems="center"
      width="auto"
      height="1.1875rem"
      color={style.color}
      fontSize="0.75rem"
      borderRadius="0.75rem"
      justifyContent="center"
      border={`1px solid ${style.bg}`}
    >
      {status}
    </Button>
  );
};

export default StatusBtn;
