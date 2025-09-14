export interface RangeHandleProps {
  price: number;
  type: 'min' | 'max';
  calcPosition: (price: number) => number;
  onMouseDown: (type: 'min' | 'max') => void;
}
