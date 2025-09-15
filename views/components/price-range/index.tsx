import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import Tag from '@/components/tag';

import { PriceRangeProps } from './price-range.types';

const PriceRange: FC<PriceRangeProps> = ({ price }) => (
  <Div
    display="flex"
    alignItems="center"
    justifyContent="flex-end"
    flexWrap="wrap"
    gap="0.5rem"
    width="100%"
  >
    <Span color="#FFFFFF" textAlign="right">
      {price}
    </Span>
    <Tag type="success" label="In Range" />
  </Div>
);

export default PriceRange;
