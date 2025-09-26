import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Inter';
    src: url('https://interest-protocol.github.io/fonts/inter/Inter-Regular.ttf')
      format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('https://interest-protocol.github.io/fonts/inter/Inter-Medium.ttf')
      format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('https://interest-protocol.github.io/fonts/inter/Inter-Medium.ttf')
      format('truetype');
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('https://interest-protocol.github.io/fonts/inter/Inter-Bold.ttf')
      format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .recharts-responsive-container svg {
    outline: none;
  }

  .remove-spinner {
    appearance: textfield;
  }

  .remove-spinner::-webkit-outer-spin-button,
  .remove-spinner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .remove-spinner {
    -moz-appearance: textfield;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #0007;
    padding-left: 2px;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #0003;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb:hover {
    background: #b4c5ffcc;
  }

  /* React hot toast */
  #_rht_toaster [role='status'] {
    justify-content: unset;
  }
`;
