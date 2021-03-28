# 210116 環境構築の練習

## 実行方法
cd _dev
npm i
npm run dev(gulp起動)
- pugの編集→htmlへコンパイル
- scssの編集→cssへコンパイル

## 実装したい機能
- コンパイル 実装済
  - Pug, Scss
- 圧縮 実装済だがだがうまくいっていない
  - HTML, CSS, JS, 画像
  - (可読性を優先したいので、一旦今回は画像だけでいいかも)
  - (今回はpngとjpgを対象)
  - imagemin
  - imagemin-gifsicle→gifを圧縮
  - imagemin-mozjpeg→jpegを圧縮
  - imagemin-pngquant→pngを圧縮
  - imagemin-svgo→svgを圧縮
  - gulp-uglify jsを圧縮
- linter(ソースコードの問題チェック) 未実装
  - HTML, CSS, JS
  - htmlhint
  - stylelint
  - eslint
- ベンダープレフィックス(ブラウザによって適用されないCSSを適用できるようにする記述) 未実装
  - CSS
  - autoprefixerで自動付与
- 変更されたファイルのみを処理する 実装済
  - gulp-changed
- CSSのプロパティ記述順を整える 未実装
  - recess-order
  - order

## 使用パッケージ
npm i -Dでインストール
導入済みパッケージはpackaga.jsonのdevDependenciesを参照
- gulp
  - Gulp本体
- gulp-pug
  - Pugをhtmlにコンパイル
  - オプション
  - pretty: true→コンパイル結果を可読性の高いHTMLファイルにするため空白でインデントを付与する
- gulp-dart-sass
  - sassをcssにコンパイル
  - オプション
  - outputStyle: "expanded"→一般的なCSSのフォーマットで出力
  - outputStyle: "compressed"→圧縮して出力
- gulp-notify
  - エラーを通知する
- gulp-plumber
  - エラーが原因でタスクが強制停止することを防止
- gulp-imagemin
  - 画像圧縮
  - 参考: https://dezanari.com/gulp-imagemin/
- imagemin-pngquant
  - pngを圧縮
- imagemin-mozjpeg
  - jpgを圧縮
- gulp-changed
  - 監視対象と出力先のディレクトリの差分を検出し、変更があったファイルのみを処理の対象にする
  - 新しい画像を入れたらその画像だけ圧縮処理をする

## 使用意義を追って調べる(現時点で理解できていないもの)
- gulp-concat
  - 結合
- gulp-replace
  - 置換
- npm-run-all
  - 複数のNPM スクリプトを逐次／並列実行するスクリプトを、OS に依存しない形で記述できる
  - 参考
  https://maku77.github.io/nodejs/npm/npm-run-all.html
- postcss-reporter
  - stylelintログを見やすくして表示
- postcss-scss
  - SassのSCSS記法のパーサー
- gulp-webserverないのになぜローカルサーバ立ち上がる？
- 画像の圧縮がうまくいってない