import { UseFormRegister } from 'react-hook-form';

export interface ISettings {
  slippage: string;
  slippageTolerance: string;
  transactionDeadline: string;
}

export interface SettingsModalProps {
  register: UseFormRegister<ISettings>;
}
