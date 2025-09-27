import { Div, Hr, P } from '@stylin.js/elements';
import { FC } from 'react';

import {
  CollapseCardInfoLineElementType,
  CollapseCardInfoLineProps,
} from './collapse-card-info.types';

const CollapseCardInfoLine: FC<CollapseCardInfoLineProps> = ({
  info,
  value,
}) => {
  const getColorType = (type?: CollapseCardInfoLineElementType) =>
    type
      ? { success: '#34D399', danger: '#EF4444', normal: '#fff' }[type]
      : '#FFFFFF';

  return (
    <Div
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="1rem"
    >
      <Div gap="0.5rem" display="flex" cursor="pointer" alignItems="center">
        <P
          fontWeight="400"
          color="#9CA3AF"
          fontFamily="Inter"
          lineHeight="1.5rem"
          fontSize="0.875rem"
        >
          {info.description}
        </P>
        {info.Suffix}
      </Div>
      <Hr height="1px" border="1px dashed #4B556380" flex="1" />
      <Div gap="0.5rem" display="flex" cursor="pointer" alignItems="center">
        <P
          fontWeight="400"
          fontFamily="Inter"
          lineHeight="1.5rem"
          fontSize="0.875rem"
          color={getColorType(value.type)}
        >
          {value.description}
        </P>
        {value.Suffix}
      </Div>
    </Div>
  );
};
export default CollapseCardInfoLine;
