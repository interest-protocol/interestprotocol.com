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
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    background: transparent;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #fff1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }
`;
