import { UseFormRegister } from 'react-hook-form';

export interface ISeetings {
  slippage: string;
  slippageTolerance: string;
  transactionDeadline: string;
}

export interface SettingsModalProps {
  register: UseFormRegister<ISeetings>;
}
