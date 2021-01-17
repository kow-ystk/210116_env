// gulpプラグインを読み込み
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込み
const sass = require("gulp-sass");
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
 * Sassファイルを監視し、変更があったらSassを変換
 */
const watchSassFiles = () => watch("./scss/style.scss", compileSass);

// npx.gulpを実行した時、watchSassFilesが実行されるようにする
exports.default = watchSassFiles;