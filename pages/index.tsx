import { NextPage } from 'next';

import { SEO } from '@/components';
import Swap from '@/views/swap';

const SwapPage: NextPage = () => (
  <>
    <SEO title="Swap" />
    <Swap />
  </>
);

export default SwapPage;
