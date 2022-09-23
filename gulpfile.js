const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
    src("FestivalMusica_inicio/src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"))

    done();
}

function dev(done) {
    watch("FestivalMusica_inicio/src/scss/app.scss", css)
    done();
}

exports.css = css;
exports.dev = dev;