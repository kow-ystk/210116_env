// gulpプラグインを読み込み
const { src, dest, watch, parallel } = require("gulp");
// Pugをコンパイルするプラグインを読み込み
const pug = require('gulp-pug');
// Sassをコンパイルするプラグインを読み込み
const sass = require("gulp-dart-sass");
// エラーが原因でタスクが強制停止することを防止
const plumber = require('gulp-plumber');
// エラー通知
const notify = require('gulp-notify');

/**
 * Sassをコンパイルするタスク
 */
const compileSass = () =>
  // style.scssを取得
  src("./scss/style.scss")
    .pipe(plumber({
      // エラーがある場合はメッセージをを表示
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダ以下に保存
    .pipe(dest("../dest/css/"));

/**
 * Pugをコンパイルするタスク
 */
const compilePug = (done)=>{
  src(['pug/**/*.pug', '!pug/**/_*.pug'])
    .pipe(
      pug({
        // コンパイル結果を可読性の高いHTMLファイルにするため空白でインデントを付与する
        pretty: true
      })
    )
    .pipe(
      dest("../dest/")
    );
  done();
}

/**
 * PugファイルとSassファイルを監視し、変更があったら変換
 */
const watcher = () => watch(
  "./**/*",
  parallel(
    compileSass,
    compilePug
  )
);

// npx.gulp(npm run dev)を実行した時、watcherが実行されるようにする
exports.default = watcher;