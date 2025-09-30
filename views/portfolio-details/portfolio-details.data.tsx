import { Button } from '@/components/button';
import { CopySVG } from '@/components/svg';

import { CollapseCardInfoLineProps } from '../components/collapse-card-info/collapse-card-info.types';

export const FARM_INFORMATION_DATA: ReadonlyArray<CollapseCardInfoLineProps> = [
  {
    info: { description: 'Staked Balance' },
    value: { description: '8713,280.02' },
  },
  {
    info: { description: 'Address' },
    value: {
      description: '0x54c8...b2790',
      Suffix: (
        <Button
          p="unset"
          border="none"
          color="#FFFFFF"
          variant="text"
          nHover={{
            color: '#B4C5FF',
          }}
        >
          <CopySVG maxWidth="1rem" maxHeight="1rem" width="1rem" />
        </Button>
      ),
    },
  },
];
