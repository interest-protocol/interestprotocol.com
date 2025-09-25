export interface PriceInputProps {
  label?: string;
  step?: number;
  min?: number;
  max?: number;
  value: number;
  initialValue?: number;
  tokenPair: ReadonlyArray<string>;
  onChange: (newValue: number) => void;
}
