import { Div, LabelElementProps, Span } from '@stylin.js/elements';
import stylin from '@stylin.js/react';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  startTransition,
  useId,
  useState,
} from 'react';

import { TextFieldElementProps, TextFieldProps } from './text-field.types';

const TextFieldElement = stylin<TextFieldElementProps & RefAttributes<unknown>>(
  'input'
)();
const LabelElement = stylin<LabelElementProps>('label')();

export const TextField: FC<PropsWithRef<TextFieldProps>> = forwardRef(
  (
    {
      Suffix,
      Prefix,
      label,
      onBlur,
      status,
      onFocus,
      disabled,
      fieldProps,
      supportingText,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState<string>();
    const id = useId();

    const statusColor = focus || status === 'none' ? '#E2E2E6' : status;

    const handleBorderStatus = () => {
      const isFocused = focus && !disabled;
      const isError = status === 'error';
      const isSuccess = status === 'success';
      const hasStatus = isError || isSuccess;
      if (disabled) return '1px solid ' + '#46464A';
      if (isFocused) return '3px solid #B4C5FF';
      if (hasStatus)
        return '1px solid ' + status == 'error' ? '#FED7D7' : '#BAF6CF';
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (!focus) startTransition(() => setFocus(true));

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (focus) startTransition(() => setFocus(false));

      onBlur?.(e);
    };

    const changeValue = (input: string) => setValue(input);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(e.target.value);

    return (
      <Div
        all="inherit"
        opacity={disabled ? 0.32 : 1}
        cursor={disabled ? 'not-allowed' : 'text'}
        aria-label="textfieldHolder"
      >
        {label && (
          <LabelElement htmlFor={id}>
            <Span mb="0.25rem" color="#E2E2E6">
              {label}
            </Span>
          </LabelElement>
        )}
        <Div
          display="flex"
          borderRadius="9999rem"
          height="2.5rem"
          alignItems="center"
          border={handleBorderStatus() || '1px solid ' + '#46464A'}
          nHover={{
            borderWidth: focus ? '3px' : disabled ? '1px' : '2px',
            borderStyle: 'solid',
            borderColor: !disabled ? '#B4C5FF' : '#46464A',
          }}
          transition="all 300ms ease-in-out"
          {...fieldProps}
        >
          {Prefix && (
            <Div
              p="m"
              display="flex"
              color="#E2E2E6"
              alignItems="center"
              justifyContent="center"
            >
              {Prefix}
            </Div>
          )}
          <Div
            p={Prefix ? '0.5rem' : '1rem'}
            flex="1"
            width="100%"
            height="2.5rem"
            display="flex"
            alignItems="stretch"
            flexDirection="column"
            justifyContent="center"
            mr={status ? '0.5rem' : 'unset'}
            aria-label="inputHolder"
          >
            <TextFieldElement
              ref={ref}
              id={id}
              all="unset"
              type="text"
              width="100%"
              fontSize="1rem"
              lineHeight="1.5rem"
              fontWeight="500"
              disabled={disabled}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              color={statusColor}
              defaultValue={value || props.defaultValue}
              nPlaceholder={{
                color: '#E2E2E6',
              }}
              {...props}
            />
          </Div>
          {Suffix && (
            <Div
              p="1rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {Suffix}
            </Div>
          )}
        </Div>
        {supportingText && (
          <Div
            pt="0.25rem"
            fontSize="0.75rem"
            color={disabled ? '#E2E2E6' : statusColor}
          >
            {supportingText}
          </Div>
        )}
      </Div>
    );
  }
);

TextField.displayName = 'TextField';
export * from './text-field.types';
