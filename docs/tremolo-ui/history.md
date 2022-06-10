# history

プロジェクトを作成した際のメモ

```sh
$ npx create-next-app@latest tremolo-ui --ts

```

## envについて

デフォルトでnextがよしなに、NODE_ENVを設定してくれる

>より大きなReactエコシステムはNODE_ENV慣例として扱い、3つの値のみを許可します。
>production：アプリケーションがで構築されている場合next build
>development：アプリケーションがで実行される場合next dev
>test：アプリケーションがテストされているとき（例jest）

## eslintとprettierについて

eslintはcreate-next-appをした際にnextがよしなに設定をしてくれている。

[thank you](https://zenn.dev/hungry_goat/articles/b7ea123eeaaa44)


## storybook

[参考URL](https://zenn.dev/minguu42/articles/20211226-nextjs-storybook)

`$ npx sb init --builder webpack5`

## firebase

`$ yarn add firebase`
