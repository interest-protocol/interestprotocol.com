export interface TabsProps {
  tab: number;
  color?: string;
  tabs: ReadonlyArray<string>;
  setTab: (tab: number) => void;
}
