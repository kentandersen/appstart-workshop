// http://lesscss.org/#using-less-usage-in-code

const { readFile, writeFile } = require('fs');
const { join } = require('path');
const less = require('less');

const source = join(__dirname, '../src/main.less');
const target = join(__dirname, '../dist/main.css');

readFile(source, function(error, data) {
  if (error) throw error;
  const file = data.toString();
  less.render(file, function(error, processed) {
    writeFile(target, processed.css);
  });
});
