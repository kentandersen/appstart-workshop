# Oppgave 4

Flytte funksjonaliteten i `build-css` til node.js
  - opprett `scripts/build-css.js` og kopier inn dette innholdet
    ```
    const { join } = require('path');
    const { exec } = require('child_process');

    const cmd = 'lessc src/main.less dist/main.css';

    exec(cmd, { cwd: join(__dirname, '..') }, function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });
    ```
  - endre `build-css` scriptet i package.json til å kjøre `scripts/build-css.js`
    ```
    "build-css": "node scripts/build-css.js"
    ```

Flytte funksjonaliteten i `build-js` til node.js
  - opprett `scripts/build-js.js` og kopier inn dette innholdet
    ```
    const { join } = require('path');
    const { exec } = require('child_process');

    const cmd = 'browserify --entry src/main.es2015.js --outfile dist/main.js --transform babelify';

    exec(cmd, { cwd: join(__dirname, '..') }, function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });
    ```
  - endre `build-js` scriptet i package.json til å kjøre `scripts/build-js.js`
    ```
    "build-js": "node scripts/build-js.js"
    ```

Verifiser at `npm run build-css` og `npm run build-js` oppfører som som før
