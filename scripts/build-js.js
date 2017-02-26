// https://github.com/substack/node-browserify#api-example

const { writeFileSync } = require('fs');
const { join } = require('path');
const browserify = require('browserify');

const source = join(__dirname, '../src/main.es2015.js');
const target = join(__dirname, '../dist/main.js');

browserify(source, {
  transform: [ 'babelify' ]
}).bundle(function (err, code) {
  writeFileSync(target, code);
});
