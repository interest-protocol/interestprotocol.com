export interface TabsProps {
  tab: number;
  color?: string | ReadonlyArray<string>;
  total?: ReadonlyArray<number>;
  tabs: ReadonlyArray<string>;
  setTab: (tab: number) => void;
}
