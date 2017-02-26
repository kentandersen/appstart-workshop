# Oppgave 1 - kjøremiljø


kjør node server.js
  - se server starter
  - verifiser at noe svarer på port 8080

last statiske sider
  - installer serve-static, dev dependencies
  - `require` inn modulen
    ```
    const serveStatic = require('serve-static');
    ```
  - legg til middleware til public og dist folder
    ```
    app.use(serveStatic(dist));
    app.use(serveStatic(public));
    ```
  - verifiser at siden dukker opp

sett opp ip2country proxy
  - installer proxy-middleware, dev dependencies
  - `require` inn modulen
    ```
    const proxy = require('proxy-middleware');
    ```
  - sett opp proxy target til https://api.ip2country.info
    ```
    app.use('/whereami', proxy(parse('https://api.ip2country.info')));
    ```
  - verfiser at du får data på `http://localhost:8080/whereami/ip?5.6.7.8`

lag endepunkt for serve public ip
  - installer public-ip, dev dependencies
  - `require` inn public-ip modulen
  ```
  const publicIp = require('public-ip');
  ```
  - kopier inn metode for å serve endepunktet:
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
    ```
    app.use('/whoami', servePublicIp);
    ```
  - verfiser at du får data på `http://localhost:8080/whoami`
