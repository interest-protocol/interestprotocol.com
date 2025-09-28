export interface FilterProps {
  interval: string;
  setInterval: (value: string) => void;
  options: ReadonlyArray<string>;
}
