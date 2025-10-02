import { FarmFormProps } from '../../../farm-form.types';

export interface InputProps {
  field: string;
}

export interface FarmInputProps extends InputProps, FarmFormProps {}

export interface MaxBadgeProps {
  handleMax: () => void;
}
