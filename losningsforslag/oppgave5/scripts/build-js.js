// https://github.com/substack/node-browserify#api-example

const { writeFileSync } = require('fs');
const { join } = require('path');
const browserify = require('browserify');

const source = join(__dirname, '../src/main.es2015.js');
const target = join(__dirname, '../dist/main.js');

browserify(source, {              // tidligere definert i --entry
  transform: [ 'babelify' ]       // tidligere definert i --transform
}).bundle(function(err, code) {   // Bundle kjører asynkront, så vi sender inn
                                  // en funksjon som blir kjørt når den er ferdig
  writeFileSync(target, code);    // skriv fil til disk, tidligere definert i --outfile
});
