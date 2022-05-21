import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '@/assets/styles/reset.scss';
import '@/assets/styles/globals.scss';
import * as Theme from '@/assets/styles/globalsTheme';
import { mediaPc } from '@/lib/mediaQuery';

console.log(`現状のenv${process.env.NODE_ENV}`);

/* libs, const, config */
const GlobalStyle = createGlobalStyle`
  .pc {
    display: none;
    ${mediaPc`
      display: block;
    `}
  }
  .sp {
    display: block;
    ${mediaPc`
      display: none;
    `}
  }
`;

/**
 * @desc entry point
 */
const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme.theme}>
      <GlobalStyle theme={Theme.theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
