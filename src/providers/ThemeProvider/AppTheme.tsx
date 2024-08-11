import { FC, PropsWithChildren } from 'react';
import { GlobalStyles } from './config/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './config/theme.config';

export const AppTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
