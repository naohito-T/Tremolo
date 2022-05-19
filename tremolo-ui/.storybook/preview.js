import { setConsoleOptions } from '@storybook/addon-console';
import '../src/assets/styles/globals.scss';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
setConsoleOptions({
  panelExclude: [],
});

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
