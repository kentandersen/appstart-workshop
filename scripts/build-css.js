// http://lesscss.org/#using-less-usage-in-code

const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const less = require('less');

const source = join(__dirname, '../src/main.less');
const target = join(__dirname, '../dist/main.css');

const file = readFileSync(source).toString();   // leser kildefilen fra disk
less.render(file, function(error, processed) {  // render kjører asynkront, så vi sender inn
                                                // funksjon som blir kjørt når den er ferdig
  writeFileSync(target, processed.css);         // skriver resultatet til disk
});
