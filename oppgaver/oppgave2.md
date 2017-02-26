# Oppgave 2 - enkelt byggemiljø

NPM har støtte for script, bla bla bla


Få start server til å starte med `npm start`
  - legg til `start` script
    ```
    "start": "node server.js"
    ```
  - verifiser at server starter med `npm start`

Lag script for å bygge css
  - legg inn `build-css` script
    ```
    "build-css": "cp src/main.css dist/main.css"
    ```
  - verifiser at `npm run build-css` kopierer main.css til dist mappen

Lag script for å bygge javascript
  - installer browserify, dev dependencies
  - legg inn `build-js` script
    ```
    "build-js": "browserify --entry src/main.js --outfile dist/main.js"
    ```
  - verifiser at `npm run build-js` pakker sammen og legger main.js til dist mappen

Åpne `http://localhost:8080`, verifiser at alle resurser laster
