import type { NextFetchEvent, NextRequest } from 'next/server';

/**
 * @see https://zenn.dev/mz/articles/39924d515d4d34
 * @see https://nextjs.org/docs/advanced-features/middleware
 * ここではlogin確認するべき
 */
export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  // return new Response('Hello, world!');
  // throw new Error();
};
