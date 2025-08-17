import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { not } from 'ramda';

import ManageSlippageForm from './manage-slippage-form';
import SlippageInfo from './slippage';

const ManageSlippage: FC = () => {
  const [openManage, setOpenManage] = useState(false);

  const handleManageView = () => setOpenManage(not);

  return (
    <Div
      display="flex"
      color="onSurface"
      borderRadius="xs"
      flexDirection="column"
    >
      <SlippageInfo isOpen={openManage} handleManageView={handleManageView} />
      {openManage && <ManageSlippageForm handleManageView={handleManageView} />}
    </Div>
  );
};

export default ManageSlippage;
