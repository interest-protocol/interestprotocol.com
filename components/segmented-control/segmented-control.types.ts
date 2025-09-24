export interface SegmentedControlProps {
  interval: string;
  setInterval: (value: string) => void;
  options: ReadonlyArray<string>;
}
