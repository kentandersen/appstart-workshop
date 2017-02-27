# Oppgave 2 - enkelt byggemiljø

NPM har innebygget støtte for skript. De kan defineres i objektet `scripts` i `package.json`. Det kan være statements, eller kjøring av andre filer

```json
{
  "scripts": {
    "test": "echo 'Vi blir ikke betalt for å skrive tester!!'",
    "del": "node removeEverything.js"
  }
}
```
For å kjøre et skript bruker du kommandoen `npm run <navn på skript>`. Npm har noen definerte skript (`start`, `stop`, `restart`, `test`) som også kan kjøres med `npm <navn på skript>`.

Les mer hos NPM: https://docs.npmjs.com/misc/scripts


## Få start server til å starte med `npm start`
- legg til `node server.js` som `start`-skript i scripts
```json
"start": "node server.js"
```
- verifiser at server starter med `npm start`

## Lag skript for å bygge css
- legg inn `build-css`-skript som kopierer main.css fra `src` til `dist`
### mac / linux
```json
"build-css": "cp src/main.css dist/main.css"
```
### windows:
```json
"build-css": "copy src\\main.css dist\\main.css"
```
- verifiser at `npm run build-css` kopierer main.css til dist mappen

### Lag skript for å bygge javascript
- installer browserify som dev dependencies
```shell
npi install browserify --save-dev
```  
- legg inn `build-js`-skript
```json
"build-js": "browserify --entry src/main.js --outfile dist/main.js"
```
- verifiser at `npm run build-js` pakker sammen og legger main.js til dist mappen

Åpne `http://localhost:8080`, verifiser at alle resurser laster
