import { FC } from 'react';

import { TextField } from '@/components/text-field';

import { InputWrapperProps } from './input-wrapper.types';
import { P } from '@stylin.js/elements';

const InputWrapper: FC<InputWrapperProps> = ({
  title,
  register,
  name,
  Input,
  altInfo,
}) => {
  return (
    <>
      <P
        color="#9CA3AF"
        fontSize="1rem"
        fontWeight="400"
        fontFamily="Inter"
        lineHeight="1.5rem"
      >
        {title}
      </P>
      {Input || (
        <TextField
          Suffix={altInfo}
          type="text"
          placeholder="0.5"
          textAlign="right"
          nPlaceholder={{ opacity: 0.7 }}
          {...register(name)}
          fieldProps={{
            width: '6rem',
          }}
        />
      )}
    </>
  );
};

export default InputWrapper;
