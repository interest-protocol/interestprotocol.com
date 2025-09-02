import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Filter from './components/filter';
import HeaderInfo from './components/header-info';
import { headerData } from './components/header-info/headerInfo.data';

const PoolsContent: FC = () => {
  return (
    <Div
      display="flex"
      flexDirection="column"
      mt={['1rem', '1rem', '1rem', '2.5rem']}
    >
      <Div
        gap="1rem"
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['flex-start', 'flex-start', 'flex-start', 'end']}
      >
        {headerData.map((info) => (
          <HeaderInfo key={unikey()} {...info} />
        ))}
        <Filter />
      </Div>
      <Div
        mx="auto"
        gap="1.25rem"
        width="100%"
        display="flex"
        borderRadius="3rem"
        alignContent="center"
        justifyContent="center"
      >
        <Div display="flex" flexDirection="column">
          {/* <PoolsTabs />
          {[<Pools key={unikey()} />][tab]} */}
        </Div>
      </Div>
    </Div>
  );
};

export default PoolsContent;
