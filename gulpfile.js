'use strict';

/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var path = {
  build: {
    html: "assets/build/",
    js: "assets/build/js/",
    jsFrContent: "assets/build/js/",
    jsFrCode: "assets/build/js/",
    jsFrProperties: "assets/build/js/",
    libsJs: "assets/build/js/",
    css: "assets/build/css/",
    img: "assets/build/img/",
    svg: "assets/build/img/",
    fonts: "assets/build/fonts/"
  },
  src: {
    html: "assets/src/*.html",
    js: "assets/src/js/main/main.js",
    jsFrContent: "assets/src/js/iframes/content.js",
    jsFrCode: "assets/src/js/iframes/code.js",
    jsFrProperties: "assets/src/js/iframes/properties.js",
    libsJs: "assets/src/js/libs.js",
    style: "assets/src/style/main.scss",
    style2: "assets/src/style/content.scss",
    style3: "assets/src/style/code.scss",
    style4: "assets/src/style/properties.scss",
    libs: "assets/src/style/libs.scss",
    img: "assets/src/img/**/*.*",
    svg: "assets/src/img/icons/icon-*.svg",
    fonts: "assets/src/fonts/**/*.*"
  },
  watch: {
    html: "assets/src/**/*.html",
    js: "assets/src/js/main/**/*.js",
    jsFrContent: "assets/src/js/iframes/content.js",
    jsFrCode: "assets/src/js/iframes/code.js",
    jsFrProperties: "assets/src/js/iframes/properties.js",
    libsJs: "assets/src/js/libs.js",
    css: "assets/src/style/**/*.scss",
    img: "assets/src/img/**/*.*",
    svg: "assets/src/img/icons/icon-*.svg",
    fonts: "assets/srs/fonts/**/*.*"
  },
  clean: "./assets/build/*"
};

/* настройки сервера */
var config = {
    server: {
        baseDir: './assets/build'
    },
    notify: false
};

/* подключаем gulp и плагины */
var gulp = require('gulp'),  // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    rigger = require('gulp-rigger'), // модуль для импорта содержимого одного файла в другой
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg
    pngquant = require('imagemin-pngquant'), // плагин для сжатия png
    rimraf = require('gulp-rimraf'), // плагин для удаления файлов и каталогов
    svgstore = require("gulp-svgstore"),
    rename = require('gulp-rename');

/* задачи */

// запуск сервера
gulp.task('webserver', function () {
    webserver(config);
});

// сбор html
gulp.task('html:build', function () {
    return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) // импорт вложений
        .pipe(gulp.dest(path.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// сбор стилей
gulp.task('css:build', function () {
    return gulp.src(path.src.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

gulp.task("css2:build", function() {
  return gulp
    .src(path.src.style2) // получим content.scss
    .pipe(plumber()) // для отслеживания ошибок
    .pipe(sourcemaps.init()) // инициализируем sourcemap
    .pipe(sass()) // scss -> css
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS()) // минимизируем CSS
    .pipe(sourcemaps.write("./")) // записываем sourcemap
    .pipe(gulp.dest(path.build.css)) // выгружаем в build
    .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task("css3:build", function() {
  return gulp
    .src(path.src.style3) // получим code.scss
    .pipe(plumber()) // для отслеживания ошибок
    .pipe(sourcemaps.init()) // инициализируем sourcemap
    .pipe(sass()) // scss -> css
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS()) // минимизируем CSS
    .pipe(sourcemaps.write("./")) // записываем sourcemap
    .pipe(gulp.dest(path.build.css)) // выгружаем в build
    .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task("css4:build", function() {
  return gulp
    .src(path.src.style4) // получим properties.scss
    .pipe(plumber()) // для отслеживания ошибок
    .pipe(sourcemaps.init()) // инициализируем sourcemap
    .pipe(sass()) // scss -> css
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS()) // минимизируем CSS
    .pipe(sourcemaps.write("./")) // записываем sourcemap
    .pipe(gulp.dest(path.build.css)) // выгружаем в build
    .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task("libs:build", function() {
  return gulp
    .src(path.src.libs) // получим libs.scss
    .pipe(plumber()) // для отслеживания ошибок
    .pipe(sourcemaps.init()) // инициализируем sourcemap
    .pipe(sass()) // scss -> css
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS()) // минимизируем CSS
    .pipe(sourcemaps.write("./")) // записываем sourcemap
    .pipe(gulp.dest(path.build.css)) // выгружаем в build
    .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// сбор js
gulp.task('js:build', function () {
    return gulp.src(path.src.js) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(rigger()) // импортируем все указанные файлы в main.js
        .pipe(gulp.dest(path.build.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(uglify()) // минимизируем js
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
// сбор js libs
gulp.task('libsJs:build', function () {
    return gulp
      .src(path.src.libsJs) // получим файл main.js
      .pipe(plumber()) // для отслеживания ошибок
      .pipe(rigger()) // импортируем все указанные файлы в main.js
      .pipe(gulp.dest(path.build.libsJs))
      .pipe(rename({ suffix: ".min" }))
      .pipe(sourcemaps.init()) //инициализируем sourcemap
      .pipe(uglify()) // минимизируем js
      .pipe(sourcemaps.write("./")) //  записываем sourcemap
      .pipe(gulp.dest(path.build.libsJs)) // положим готовый файл
      .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task("jsFrCode:build", function() {
  return gulp
    .src(path.src.jsFrCode) // получим файл main.js
    .pipe(plumber()) // для отслеживания ошибок
    .pipe(rigger()) // импортируем все указанные файлы в main.js
    .pipe(gulp.dest(path.build.jsFrCode))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.init()) //инициализируем sourcemap
    .pipe(uglify()) // минимизируем js
    .pipe(sourcemaps.write("./")) //  записываем sourcemap
    .pipe(gulp.dest(path.build.jsFrCode)) // положим готовый файл
    .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task('jsFrContent:build', function () {
    return gulp
      .src(path.src.jsFrContent) // получим файл main.js
      .pipe(plumber()) // для отслеживания ошибок
      .pipe(rigger()) // импортируем все указанные файлы в main.js
      .pipe(gulp.dest(path.build.jsFrContent))
      .pipe(rename({ suffix: ".min" }))
      .pipe(sourcemaps.init()) //инициализируем sourcemap
      .pipe(uglify()) // минимизируем js
      .pipe(sourcemaps.write("./")) //  записываем sourcemap
      .pipe(gulp.dest(path.build.jsFrContent)) // положим готовый файл
      .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});
gulp.task('jsFrProperties:build', function () {
    return gulp
      .src(path.src.jsFrProperties) // получим файл main.js
      .pipe(plumber()) // для отслеживания ошибок
      .pipe(rigger()) // импортируем все указанные файлы в main.js
      .pipe(gulp.dest(path.build.jsFrProperties))
      .pipe(rename({ suffix: ".min" }))
      .pipe(sourcemaps.init()) //инициализируем sourcemap
      .pipe(uglify()) // минимизируем js
      .pipe(sourcemaps.write("./")) //  записываем sourcemap
      .pipe(gulp.dest(path.build.jsFrProperties)) // положим готовый файл
      .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// перенос шрифтов
gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

// обработка картинок
gulp.task('image:build', function () {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin([ // сжатие изображений
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img)); // выгрузка готовых файлов
});

// обработка sprite
gulp.task("sprite:build", function () {
  return gulp.src(path.src.svg)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest(path.build.svg));
});

// удаление каталога build
gulp.task('clean:build', function () {
    return gulp.src(path.clean, { read: false })
        .pipe(rimraf());
});

// очистка кэша
gulp.task('cache:clear', function () {
    cache.clearAll();
});

// сборка
gulp.task(
  "build",
  gulp.series(
    "clean:build",
    gulp.parallel(
      "html:build",
      "css:build",
      "css2:build",
      "css3:build",
      "css4:build",
      "libs:build",
      "js:build",
      "libsJs:build",
      "fonts:build",
      "image:build",
      "sprite:build"
    )
  )
);

// запуск задач при изменении файлов
gulp.task('watch', function () {
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.css, gulp.series('css2:build'));
    gulp.watch(path.watch.css, gulp.series('css3:build'));
    gulp.watch(path.watch.css, gulp.series('css4:build'));
    gulp.watch(path.watch.css, gulp.series('libs:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.img, gulp.series('sprite:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

// задача по умолчанию
gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver','watch')
));
