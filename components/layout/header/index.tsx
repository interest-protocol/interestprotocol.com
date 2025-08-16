import { Header as HeaderHTML } from '@stylin.js/elements';
import { FC } from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';

const Header: FC = () => (
  <HeaderHTML
    px="2rem"
    py="1rem"
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr"
  >
    <Sidebar />
    <Navbar />
  </HeaderHTML>
);

export default Header;
