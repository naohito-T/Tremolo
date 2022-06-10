import 'styled-components';
import media from 'styled-media-query';

/**
 * 気になる
 * SCSSの変数を組み込めるのか
 * media queryを組み込めるのか
 */
export const theme = {
  // FIXME: 仮
  black: '#000',
  black01: '#2d2d2d',
  white: '#fff',
  gray: '#858585',
  navyBlue: '#2d4b70',
  rainbowBar: `#066292 19.99%, #4EC1F0 20%, #4EC1F0 39.99%, #009B4D 40%,
     #009B4D 59.99%, #EE7A00 60%, #EE7A00 79.99%, #DB062C 80%`,
} as const;

type Theme = typeof theme;

/**
 * @see https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
 * @desc props.theme.nnn 以降に型が効くようになる。
 * 型定義の注入テクニックです。DefaultTheme として用意された空っぽの interface * に対し、宣言結合拡張することで、プロジェクト固有の型定義を注入することが出来る
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
