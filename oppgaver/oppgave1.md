# Oppgave 1 - servermiljø

Første oppgaven går ut på å få servermiljøet opp og stå. Servermiljøet er en http-server som eksponerer to mapper med statiske filer, et endepunkt, og en proxy.

## Kjør opp HTTP server
- start serveren
```shell
node server.js
```
- kontroller at meldingen `Server started on port 8080` skrives ut
- verifiser at noe svarer på port http://localhost:8080, `Cannot GET /`

## Sett opp eksponering av statiske filer
- installer `serve-static` som dev dependencies
```shell
npm install serve-static --save-dev
```
- `require` inn modulen
```javascript
const serveStatic = require('serve-static');
```

- legg til middleware til public og dist folder (under `var app = connect()`)
```javascript
app.use(serveStatic(dist));
app.use(serveStatic(public));
```
- verifiser at det dukker opp en nettside http://localhost:8080, `Hvor er jeg?`


## sett opp proxy til ip2country
- installer `proxy-middleware` som dev dependencies
```shell
npm install proxy-middleware --save-dev
```
- `require` inn modulen
```javascript
const proxy = require('proxy-middleware');
```
- sett opp proxy target til https://api.ip2country.info
```javascript
app.use('/whereami', proxy(parse('https://api.ip2country.info')));
```
- verfiser at du får data på http://localhost:8080/whereami/ip?5.6.7.8

## Lag endepunkt for å hente public ip
- installer `public-ip`, dev dependencies
- `require` inn `public-ip` modulen
```javascript
const publicIp = require('public-ip');
```
- kopier inn metoden for å håndtere endepunktet:
```javascript
function servePublicIp(req, res) {
  publicIp.v4().then(ip => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ ip }));
    res.end()
    });
  }
```
- sett opp endepunktet
```javascript
app.use('/whoami', servePublicIp);
```
- verfiser at du får data på `http://localhost:8080/whoami`

<br />
<br />
Nå har du en minimal http server som blant annet kan brukes til lokal utvikling
