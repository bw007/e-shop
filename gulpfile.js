const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");
const scss = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const postcss = require('gulp-postcss');

const tailwindcss = require('tailwindcss');

const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const path = {
  src: {
    pug: "src/pug/pages/**/*.pug",
    scss: "src/scss/*.scss",
    ts: "src/ts/**/*.ts",
    js: "src/js/**/*.js",
    img: "src/images/**/*.{jpg,png,svg,gif,ico}",
    font: "src/fonts/**/*"
  },
  watch: {
    pug: "src/pug/**/*.pug",
    scss: "src/scss/**/*.scss",
    ts: "src/ts/**/*.ts",
    js: "src/js/**/*.js",
    img: "src/images/**/*.{jpg,png,svg,gif,ico}",
    font: "src/fonts/**/*",
  },
  build: {
    html: "dist/",
    css: "dist/css/",
    js: "dist/js/",
    img: "dist/images/",
    font: "dist/fonts/",
  },
};

async function pugToHTML() {
  return src(path.src.pug)
    .pipe(pug({ pretty: true }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

async function scssToCss() {
  return src(path.src.scss, { base: "src/scss/" })
    .pipe(plumber())
    .pipe(scss())
    .pipe(postcss([
      tailwindcss('tailwind.config.js'),
      require('autoprefixer')
    ]))
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min", extname: ".css" }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

async function js() {
  return src(path.src.js, { allowEmpty: true })
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min', extname: '.js' }))
    .pipe(dest(path.build.js)) 
    .pipe(browserSync.stream());
}

async function tsCompile() {
  return src(path.src.ts, { allowEmpty: true })
    .pipe(plumber())
    .pipe(tsProject())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min', extname: '.js' }))
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

async function images() {
  return src(path.src.img)
    // .pipe(imagemin())
    .pipe(dest(path.build.img));
}

async function fonts() {
  return src(path.src.font)
    .pipe(dest(path.build.font));
}

async function watchFiles() {
  watch([path.watch.scss], series(scssToCss, pugToHTML));
  watch([path.watch.js], js);
  watch([path.watch.ts], tsCompile);
  watch([path.watch.pug], series(scssToCss, pugToHTML));
  watch([path.watch.img], images);
  watch([path.watch.font], fonts);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "dist/",
    },
    port: 3000,
  });
}

function cleanDist() {
  return src("dist", { allowEmpty: true })
    .pipe(clean());
}

const build = series(cleanDist, scssToCss, pugToHTML, js, tsCompile, images, fonts);
const watching = series(build, watchFiles, browsersync);

exports.scssToCss = scssToCss;
exports.js = js;
exports.tsCompile = tsCompile;
exports.pugToHTML = pugToHTML;
exports.images = images;
exports.fonts = fonts;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.default = watching;