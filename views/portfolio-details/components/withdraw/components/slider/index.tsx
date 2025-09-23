import { Input } from '@stylin.js/elements';
import { FC } from 'react';

const Slider: FC = () => {
  return (
    <Input
      min={0}
      max={100}
      mb="0.75rem"
      type="range"
      width="100%"
      height="6px"
      outline="none"
      appearance="none"
      defaultValue={0}
      borderRadius="0.5rem"
      background="linear-gradient(to right, #B4C5FF 0%, #282B35 0%)"
      onInput={(e) => {
        const value = (e.target as HTMLInputElement).value;
        const percentage = Number(value);
        (e.target as HTMLInputElement).style.background =
          `linear-gradient(to right,
          #B4C5FF ${percentage}%, #282B35 ${percentage}%)`;
      }}
    />
  );
};

export default Slider;
