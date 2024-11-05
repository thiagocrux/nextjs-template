'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Source Sans 3';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/source-sans-3-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Source Sans 3';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/source-sans-3-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Source Sans 3';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/source-sans-3-v15-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Source Sans 3';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/source-sans-3-v15-latin-700.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export default GlobalStyles;
