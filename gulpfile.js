// gulpプラグインを読み込み
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込み
const sass = require("gulp-sass");

/**
 * Sassをコンパイルするタスク
 */
const compileSass = () =>
  // style.scssを取得
  src("css/style.scss")
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダ以下に保存
    .pipe(dest("css"));

/**
 * Sassファイルを監視し、変更があったらSassを変換
 */
const watchSassFiles = () => watch("css/style.scss", compileSass);

// npx.gulpを実行した時、watchSassFilesが実行されるようにする
exports.default = watchSassFiles;