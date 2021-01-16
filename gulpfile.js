// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssのタスクを作成する
gulp.task("default", function () {
  return(
    gulp
      .src("css/style.scss")
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: "expanded"
      }))
      // cssフォルダー以下に保存
      .pipe(gulp.dest("css"))
  );
});