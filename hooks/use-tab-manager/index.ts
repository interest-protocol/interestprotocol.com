import { create } from 'zustand';
interface TabState {
  tab: number;
  setTab: (tab: number) => void;
  innerTabs: Record<string, number>;
  setInnerTab: (key: string, tab: number) => void;
  resetTabs: () => void;
}

export const useTabState = create<TabState>((set) => ({
  tab: 0,
  setTab: (tab) => set({ tab }),
  innerTabs: {},
  setInnerTab: (key, tab) =>
    set((state) => ({
      innerTabs: { ...state.innerTabs, [key]: tab },
    })),
  resetTabs: () => set({ tab: 0, innerTabs: {} }),
}));
