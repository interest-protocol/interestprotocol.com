export interface AdditionalInfoLineProps {
  title: string;
  value: string;
  flag?: string;
}

export interface AdditionalInfoHeaderProps {
  toggle: () => void;
}

export interface SwapManagerEquivalenceProps {
  setAmount: (amount: string) => void;
}
