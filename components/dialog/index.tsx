import { Div, Span } from '@stylin.js/elements';
import React, { FC } from 'react';

import { Button } from '../Button';
import { ProgressIndicator } from '../progress-indicator';
import { COLOR_MAP, STATUS_ICON } from './dialog.data';
import { DialogProps, IDialogButton } from './dialog.types';

export const Dialog: FC<DialogProps> = ({
  title,
  status,
  message,
  fontFamily,
  primaryButton,
  secondaryButton,
}) => {
  const Icon = STATUS_ICON[status];

  return (
    <Div
      p="1.5rem"
      width="25rem"
      maxWidth="100%"
      borderRadius="0.5rem"
      alignItems="center"
      display="inline-flex"
      flexDirection="column"
      justifyContent="center"
      boxShadow="0rem 1.5rem 2.875rem -0.625rem rgba(13, 16, 23, 0.16)"
      backgroundColor="#1F1F23"
      role="dialog"
    >
      <Div
        display="flex"
        minWidth="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Span
          color={
            // eslint-disable-next-line no-constant-condition
            status === 'loading' || status === 'general'
              ? '#E2E2E6'
              : COLOR_MAP[status]
          }
          flex="1"
          textAlign="center"
          {...(fontFamily && { fontFamily })}
        >
          {title}
        </Span>
      </Div>
      <Div
        display="flex"
        maxWidth="22rem"
        minWidth="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        overflowWrap="anywhere"
        pt="1.5rem"
        gap="1rem"
      >
        {status !== 'general' ? (
          status === 'loading' ? (
            <ProgressIndicator
              maxWidth="1.5rem"
              maxHeight="1.5rem"
              variant="loading"
            />
          ) : (
            <Div
              width="3rem"
              height="3rem"
              display="flex"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              color={COLOR_MAP[status]}
              boxShadow="inset 0px 0px 0px 4px #FFFFFFB8"
              backgroundColor={
                status == 'success'
                  ? '#4ec076e6'
                  : COLOR_MAP[`${status}Container`]
              }
            >
              <Icon
                maxWidth="1.2rem"
                maxHeight="1.2rem"
                width="100%"
                height="100%"
              />
            </Div>
          )
        ) : null}
        {React.isValidElement(message) ? (
          message
        ) : (
          <Span
            color="#E2E2E6"
            textAlign="center"
            lineHeight="1rem"
            //size="medium"
            {...(fontFamily && { fontFamily })}
          >
            {message}
          </Span>
        )}
      </Div>
      {(secondaryButton || primaryButton) && (
        <Div
          pt="1.5rem"
          display="flex"
          minWidth="100%"
          justifyContent="space-between"
          flexDirection="row"
        >
          {!!secondaryButton &&
            (React.isValidElement(secondaryButton)
              ? secondaryButton
              : !!(secondaryButton as IDialogButton).label && (
                  <Button
                    variant="outline"
                    onClick={(secondaryButton as IDialogButton).onClick}
                  >
                    {(secondaryButton as IDialogButton).label}
                  </Button>
                ))}
          {!!primaryButton &&
            (React.isValidElement(primaryButton)
              ? primaryButton
              : !!(primaryButton as IDialogButton)?.label && (
                  <Button
                    variant="filled"
                    onClick={(primaryButton as IDialogButton).onClick}
                    background={status === 'error' ? '#FED7D7' : '#B4C5FF'}
                  >
                    {(primaryButton as IDialogButton).label}
                  </Button>
                ))}
        </Div>
      )}
    </Div>
  );
};

export * from './dialog.types';
