import { UseFormGetValues, UseFormRegister } from 'react-hook-form';

export interface ISettings {
  slippage: string;
  transactionDeadline: string;
}

export interface SettingsModalProps {
  register: UseFormRegister<ISettings>;
  getValues: UseFormGetValues<ISettings>;
}
