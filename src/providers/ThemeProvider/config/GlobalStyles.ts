import { createGlobalStyle, css } from 'styled-components';
import { devices } from './BreakPoints';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

*::before,
*::after {
  box-sizing: border-box;
}

body , html {
  height: 100vh;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media only screen and (${devices.xl}) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.medium};
    `}
  }

  @media only screen and (${devices.sm}) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.small};
    `}
  }

}

html {
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

li {
    list-style-type: none;
}

input,  button ,textarea,select {
  font: inherit;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
`;
