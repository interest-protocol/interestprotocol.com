import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useTabState } from '../use-tab-manager';

export function useResetTabs() {
  const pathname = usePathname();
  const { resetTabs } = useTabState();

  useEffect(() => {
    resetTabs();
  }, [pathname]);
}
