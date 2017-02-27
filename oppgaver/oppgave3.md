# Oppgave 3 - mer avansert byggemiljø

I denne delen skal vi utvide byggemiljøet, med henholdsvis less pre-processor og babel.

Less er et overbygg på CSS, som gir deg mer funksjonalitet, som for eksempel mer lettlest syntaks, variabler og funksjoner.

Babel er en transpiler oversetter nyeste JavaScript-syntaks til tradisjonell JavaScript, slik at det fungerer i nettlesere som ikke implementert støtte.

Browserify har et implementert et transform-konsept som i sin enkleste form går det ut på å oversette en hvilken som helst fil, til noe som kan behandles i JavaScript. For eksempel et bilde til en string i Base64. Babelify er en wrapper for Babel, som gjør at vi kan bruke babel som en transform.

## Endre `build-css` til å bruke less
- installer `less` som dev dependencies
```
npm install less --save-dev
```
- skift fra `src/main.css` til `src/main.less`, og send den gjennom en css pre-processor
```
"build-css": "lessc src/main.less dist/main.css"
```
- verifiser at `npm run build-css` kjører og overskriver main.css til dist mappen (sjekk timestamp)

## Legg til babelify-transform i 'build-js'
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
- skift fra `src/main.js` til `src/main.es2015.js`, og legg til babelify som en transform argument i browserify
```
"build-js": "browserify --entry src/main.es2015.js --outfile dist/main.js --transform babelify"
```
