# 210116 環境構築の練習

## 使用パッケージ
- gulp
Gulp本体
- gulp-pug
Pugをhtmlにコンパイル
オプション
pretty: true→コンパイル結果を可読性の高いHTMLファイルにするため空白でインデントを付与する
- gulp-dart-sass
sassをcssにコンパイル
オプション
outputStyle: "expanded"→一般的なCSSのフォーマットで出力
outputStyle: "compressed"→圧縮して出力
- gulp-notify
エラーを通知する
- gulp-plumber
エラーが原因でタスクが強制停止することを防止