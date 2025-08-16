import { Header as HeaderHTML } from '@stylin.js/elements';
import { FC } from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';
import Wallet from './wallet';

const Header: FC = () => (
  <HeaderHTML
    px="2rem"
    py="1rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns="1fr 1fr 1fr"
  >
    <Sidebar />
    <Navbar />
    <Wallet />
  </HeaderHTML>
);

export default Header;
