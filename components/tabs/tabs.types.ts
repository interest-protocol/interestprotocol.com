export interface TabsProps {
  tab: number;
  color?: string;
  total?: ReadonlyArray<number>;
  tabs: ReadonlyArray<string>;
  setTab: (tab: number) => void;
}
