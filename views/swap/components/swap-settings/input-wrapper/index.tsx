import { P } from '@stylin.js/elements';
import { FC } from 'react';

import { TextField } from '@/components/text-field';

import { InputWrapperProps } from './input-wrapper.types';

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
          fontSize="0.875rem"
          nPlaceholder={{ opacity: 0.7 }}
          {...register(name)}
          fieldProps={{
            width: '6rem',
            background: '#202123',
            border: '1px solid #9CA3AF1A',
            color: '#FFFFFF',
            fontSize: '0.875rem',
          }}
        />
      )}
    </>
  );
};

export default InputWrapper;
