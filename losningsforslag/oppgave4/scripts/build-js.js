const { join } = require('path');
const { exec } = require('child_process');

const cmd = 'browserify --entry src/main.es2015.js --outfile dist/main.js --transform babelify';

exec(cmd, { cwd: join(__dirname, '..') }, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
