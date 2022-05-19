import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';

console.log(`現状のenv${process.env.NODE_ENV}`);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
