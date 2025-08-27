import { Header as HeaderHTML } from '@stylin.js/elements';
import { FC } from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';
import Wallet from './wallet';

const Header: FC = () => (
  <HeaderHTML
    py="1rem"
    alignItems="center"
    justifyContent="space-between"
    gridTemplateColumns="1fr 1fr 1fr"
    display={['flex', 'flex', 'flex', 'grid', 'grid']}
  >
    <Sidebar />
    <Navbar />
    <Wallet />
  </HeaderHTML>
);

export default Header;
