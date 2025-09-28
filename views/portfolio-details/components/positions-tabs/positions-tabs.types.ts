export interface PortfolioTabsProps {
  tab: number;
  setTab: (index: number) => void;
  tabs: ReadonlyArray<string>;
  total?: ReadonlyArray<number | string | null>;
}
