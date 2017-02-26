# Oppgave 3 - mer avansert byggemiljø

I denne delen skal vi utvide byggemiljøet, med henholdsvis less pre-processor og babel.

Browserify har et implementert et transform-konsept. I sin enkleste form går det ut på å oversette en hvilken som helst fil, til noe som kan behandles i JavaScript. Feks oversette et bilde til en string i Base64. Babelify er en transform som oversetter nyeste JavaScript syntax til tradisjonell JavaScript for nettlesere som ikke støtter det nyeste.

Endre `build-css` til å bruke less
  - installer `less` som dev dependencies
    ```
    npm install less --save-dev
    ```
  - skift fra `src/main.css` til `src/main.less`, og send den gjennom en css pre-processor
    ```
    "build-css": "lessc src/main.less dist/main.css"
    ```
  - verifiser at `npm run build-css` kjører og overskriver main.css til dist mappen (sjekk timestamp)

Legg til babel transform i 'build-js'
  - installer `babel-preset-es2015` og `babelify` som dev dependencies
    ```
    npm install babel-preset-es2015 og babelify --save-dev
    ```
  - lag en babel config fil på roten med navnet `.babelrc` med innholdet
    ```
    {
      "presets": ["es2015"]
    }
    ```
  - koble babelify til browserify
    ```
    "build-js": "browserify --entry src/main.es2015.js --outfile dist/main.js --transform babelify"
    ```
  
