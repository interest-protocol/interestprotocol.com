export interface TabsProps {
  tab: number;
  width?: string;
  height?: string;
  activeBg?: string;
  tabs: ReadonlyArray<string>;
  setTab: (tab: number) => void;
  justifyContent?: string | ReadonlyArray<string>;
}
