// https://davidwalsh.name/promises
// https://www.npmjs.com/package/es6-promisify
// http://lesscss.org/#using-less-usage-in-code

const fs = require('fs');
const { join } = require('path');
const promisify = require('es6-promisify');
const less = require('less');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const render = promisify(less.render.bind(less));

const source = join(__dirname, '../src/main.less');
const target = join(__dirname, '../dist/main.css');

readFile(source)
  .then(file => render(file.toString()))
  .then(({css}) => writeFile(target, css))
  .catch(error => console.log(error));
