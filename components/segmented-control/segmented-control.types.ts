export interface SegmentedControlProps {
  options: ReadonlyArray<SegmentedControlOptionItemProps>;
  defaultOption: SegmentedControlOptionItemProps;
  onSelect?: (value: string) => void;
}

export interface SegmentedControlOptionItemProps {
  label: string;
  value: string;
}
