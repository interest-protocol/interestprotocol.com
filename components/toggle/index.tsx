import { Div, Label, P } from '@stylin.js/elements';
import stylin from '@stylin.js/react';
import { useMotionValue, useSpring } from 'framer-motion';
import { not } from 'ramda';
import {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { Motion } from '../motion';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './toggle.types';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

const TRANSLATE_X = ['0.25rem', '1.3rem'];

export const ToggleButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  labels,
  onChange,
  disabled,
  activeIcon,
  inactiveIcon,
  defaultValue,
  ...props
}) => {
  const [toggler, setToggler] = useState(defaultValue || false);
  const ative = useMotionValue(TRANSLATE_X[Number(toggler)]);
  const translateX = useSpring(ative, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    translateX.set(TRANSLATE_X[Number(toggler)]);
  }, [toggler]);

  const Icon = toggler ? activeIcon : inactiveIcon;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (disabled) return;
    onChange?.(event);
    setToggler(not);
  };

  return (
    <Div display="flex" flexWrap="wrap" alignItems="center" role="switch">
      <LabelElement
        ml="0.375rem"
        display="flex"
        borderRadius="9999rem"
        position="relative"
        nActive={
          !disabled && {
            boxShadow: `0 0 0 .25rem ${toggler ? '#B4C5FF' : '#E2E2E6'}29`,
          }
        }
      >
        <CheckedButtonElement
          display="none"
          type="checkbox"
          checked={toggler}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <Div
          display="flex"
          width="2.75rem"
          height="1.7rem"
          cursor="pointer"
          borderRadius="9999rem"
          alignItems="center"
          opacity={disabled ? 0.32 : 1}
          bg={disabled ? `#E2E2E63D` : !toggler ? `#E2E2E63D` : '#B4C5FF'}
          nHover={{
            backgroundImage: toggler
              ? 'linear-gradient(to bottom, #00000029, #00000029)'
              : 'linear-gradient(to bottom, #00000052, #00000052)',
          }}
          transition="background 300ms ease-in-out"
        >
          <Motion
            display="flex"
            width="1.25rem"
            height="1.25rem"
            borderRadius="100%"
            alignItems="center"
            justifyContent="center"
            style={{ translateX }}
            opacity={disabled ? 0.7 : 1}
            bg={disabled ? '#131316' : '#002A78'}
            color={toggler ? '#B4C5FF' : '#E2E2E6'}
          >
            {Icon ?? null}
          </Motion>
        </Div>
      </LabelElement>
      <Div display="flex" ml="xs" flexDirection="column">
        <Label>{labels?.label}</Label>
        <P color={`#E2E2E6B8`}>{labels?.supportingLabel}</P>
      </Div>
    </Div>
  );
};
