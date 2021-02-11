import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.color.lightGrey};
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  h1 {
    font-size: ${theme.fontSize.large}
  }

  h2 {
    font-size: ${theme.fontSize.medium}
  }

  h3 {
    font-size: ${theme.fontSize.regular}
  }

  p {
    font-size: ${theme.fontSize.small}
  }
`;

export default GlobalStyle;
