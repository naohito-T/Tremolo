# 要件定義書

[これを参考にして書くかー](https://qiita.com/syantien/items/9a8a7cbaeca2be3ef0d7)

## 概要

Art Stockツール

- 背景
プロジェクトを作成する過程の中で、よく使う画像などを探すのがめんどくさかった。

- システム構成図
別場所に書く

- ユビキタス

---

## 業務要件

### 業務フロー

自身のためとくになし

### 規模

自身でしか使用しないため**無料範囲**での選定とする。

### 時期・時間

作成期間は1か月とする

### 指標

自身のためとくになし

### 範囲

自身のためとくになし

## 機能要件

### 機能

- ログイン機能
  - 必須とする
  - launchするが、自身でしか見られないようにする。

- 非ログイン機能
  - 非ログインに関してはTop Pageの表示のみ

- 画像一覧Pageが見られる
  - 画像が検索できる
    - 画像を検索した結果、**ページリロードが発生せず**アニメーションで表示される
  - 画像がモーダルで表示される
    - モーダル内では、対象の画像とダウンロードリンク・サイズ調整があればなお良い（別ページへ遷移しないこと）
    - ダウンロードがキャンセルできる

- 画像が保存できる
  
- 上記の機能に対して、スマホ版・タブレット版もあり

### 画面

画面に関しては時間があれば画面設計書を作成（figmaで）

### 情報・データ・ログ

データ項目・処理方法などを記載。

### 

上記のスマホ版もあり

---

## 非機能要件

- 商用利用にはしない