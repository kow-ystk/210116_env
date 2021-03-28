// gulpプラグインを読み込み
const { src, dest, watch, parallel } = require("gulp");
// Pugをコンパイルするプラグインを読み込み
const pug = require('gulp-pug');
// Sassをコンパイルするプラグインを読み込み
const sass = require("gulp-dart-sass");
// 画像を圧縮するプラグインを読み込み
const imagemin = require('gulp-imagemin');
// jpg画像を圧縮するプラグインを読み込み
const mozjpeg = require('imagemin-mozjpeg');
// png画像を圧縮するプラグインを読み込み
const pngquant = require('imagemin-pngquant');
// 監視対象と出力先のディレクトリの差分を検出し、変更があったファイルのみを処理の対象にするプラグインを読み込み
const changed = require('gulp-changed');
// エラーが原因でタスクが強制停止することを防止
const plumber = require('gulp-plumber');
// エラー通知
const notify = require('gulp-notify');

/**
 * 画像を圧縮するタスク
 */
const compressImg = () => {
  src('/assets/images/**')
  // .pipe(changed('dest/assets/images'))
  .pipe(
    imagemin([
      pngquant({
        quality: [.60, .70], // pngの画質 60~70%
        speed: 1 // 実行速度 1~10まで指定可能で大きいほど速いが品質に影響する
      }),
      mozjpeg({quality: 65}) // jpgの画質
    ])
  )
  .pipe(dest('/dest/assets/images/'));
}

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
 * PugファイルとSassファイルと画像フォルダを監視し、変更があったら変換
 */
const watcher = () => watch(
  "./**/*",
  parallel(
    compressImg,
    compileSass,
    compilePug
  )
);

// npx.gulp(npm run dev)を実行した時、watcherが実行されるようにする
exports.default = watcher;