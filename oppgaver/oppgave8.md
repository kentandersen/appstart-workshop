# Oppgave 8

Nå som koden bygger så fort så mulig, er det på tide å se på ytelsen på lasting i klienten. Programkode har som oftest beskrivende variabelnavn og mye lift for å øke lesbarheten. Nettleseren på sin side bryr seg lite om det.

I denne oppgaven skal vi legge til minifisering i byggestegene.

## Legg til cssnano i `build-css`
* installer `cssnano` som dev dependencies
* `require` inn `process`-metoden i `cssnano`
* legg til en `.then()` i kjeden, etter at less er transformert til css
  ```javascript
  .then(({css}) => process(css))
  ```
_process metoden returnerer allerede et Promise, så vi slipper å dekorere med `es6-promisify`_


## Legg til uglyfy-js i `build-css`

* installer `uglify-js` som dev dependencies

### En utfordring

* implementer en `Transform`-stream som minifiserer javascript

```javascript
const { Transform } = require('stream');
const UglifyJS = require('uglify-js');

class UglifyTransform extends Transform {
  constructor(options) {
    super(options);
    this.inputBuffer = [];
  }

  _transform(chunk, encoding, callback) {
    // legg til chunk i inputBuffer
    // kjør callback når den er ferdig
  }

  _flush(callback) {
    // slå sammen inputBuffer og konverter den til en string
    // kjør UglifyJS.minify med option fromString: true
    // konverter den minifiserte stringen tilbake til et buffer, og dytt den videre i pipen med this.push
    // kjør callback når alt er ferdig
  }
}

module.exports = () => new UglifyTransform();
```

### Eller ikke
* kopier `losningsforslag/oppgave8/scripts/uglify-helper.js` inn i `scripts`

--

* `require` inn `uglify-helper.js` som `uglifyJS`
* legg til en `.pipe()` i kjeden, etter `.bundle()`
