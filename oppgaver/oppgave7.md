# Oppgave 7

Selv om vi har gjort om til å bruke asynkrone `readFile` og `writeFile` er vi ikke helt i mål. Løsningene baserer seg på funksjons-callbacks, som ofte blir vanskelig å lese. Les mer om [callback-hell](http://callbackhell.com/).

Vi skal bruke to teknikker for å rydde opp. Promises og streams.

## Promise
Promise er et object som blir returnert synkront. Det representerer en lovnad om at noe vil bli ferdig. Dette objektet har metoden `.then()` som du kan bruke til å hekte på callbacks. Promises er også veldig praktisk ved at det du kan ha mange `.then()` og det du returnerer fra funksjonen i `.then()` blir input til neste uavhengig av om det er staiske verdier eller nye asynkrone callbacks.

resultatet er at silk kode:

```javascript
noeAsync(function() {
  noeAnnetAsync(function() {
    noeTredjeAsync(function() {
      noeFjerdeAsync(function() {
        // Gjør noe gøy
      });
    });
  });
});
```

kan bli slik:

```javascript
noeAsync()
  .then(noeAnnetAsync)
  .then(noeTredjeAsync)
  .then(noeFjerdeAsync)
```

## Streams
Node.js har innebygget tre typer Streams; `Readable`, `Writable` og `Transform`. De har ansvar for å henholdsvis lese (feks fra disk), skrive (feks til disk) og konvertere (feks mellom to formater). Streams er designet slik at de jobber på mindre biter før det sendes fra seg, som gjør at minneforbruken er vesentlig mindre sammenlignet med å lese en hel fil inn i minne.

En `Readable`-stream kan pipes til en `Transform`-stream:

```javascript
createReadStream('file.txt')
  .pipe(compress())
  .pipe(createWriteStream('file.zip'));
```

eller direkte `Writable`-stream.

```javascript
createReadStream('file.txt')
  .pipe(createWriteStream('copy of file.txt'));
```

## Endre `build-css` til å bruke Promises
Det fleste asynkrone Node.js apiene har et funksjons-callback som siste parameter. For å konvertere disse til et promise som lett kan knyttes sammen med `.then()`, bruker vi dekoratøren `es6-promisify`
* installer `es6-promisify` som dev dependencies
* `require` inn `es6-promisify` modulen
* dekorer `readFile`, `writeFile` og `less.render`
```javascript
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const render = promisify(less.render.bind(less));
```
_Merk at vi har `require` inn hele fs-objektet og laget nye konstanter_
* Lag en lag en kjede som:
  * leser fil fra disk
  * konverterer fra less til css
  * skriver resultatet til disk


## Endre `build-js` til å bruke streams
Browserifys `.bundle()` metode returnerer en `Readable`-stream som kan behandles med `.pipe()`.
* `require` inn `createWriteStream` som ligger i `fs` modulen
* lag en writeStream som du piper resultatet fra `.bundle()` inn i

```javascript
browserify(source, {
  transform: [ 'babelify' ]
}).bundle()
  .pipe(createWriteStream(target));
```
