export interface TimeToggleProps {
  options?: ReadonlyArray<string>;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
