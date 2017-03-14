# Oppgave 6

Nå har vi to fine metoder som bygger henholdsvis css og javascript. I denne oppgaven skal vi se på hvordan vi kan forbedre ytelsen ved å gjøre det mulig å kjøre operasjon i parallell.
Du la kanskje merke til at vi importerte `readFileSync` og `writeFileSync` i forrige oppgave.

JavaScript er et språk som er designet for å kjøre på en tråd. Node.js har også denne begrensningen.  Måten JavaScript oppnår asynkron oppførsel er ved å "plukke opp" og "slippe" tråden. Kjøremiljøet har en scheduler som styrer når instrukser skal kjøres. Instrukser kjører vanligvis etterhverandre synkront (blocking execution), men det finnes flere asynkrone metoder.

I praksis fungere deg sli. Når et set med instrukser er ferdig kjørt, sjekker kjøremiljøet om det har kommet inn ny noen nye instrukser i schedulen og kjører denne. Når schedulen er tom, og det ikke er noe mer å kjøre, vil runtimen kontinuerlig sjekke schedulen etter nye instrukser for kjøring.

Et vanlig eksempel er at du gjør en kall mot et endepunkt. Oppsettet av requesten vil bli kjørt som vanlig sekvensielle instrukser. Når requesten er sendt avgårde vil den slippe tråden (slik at kjøremiljøet kan kjøre andre instrukser). Når svaret på requesten kommer tilbake, vil den legge inn nye instrukser i schedulen, og kjøre den.

Hvis du vil ha en grundig gjennomgang om hvordan dette fungerer bør du se
[Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) fra JSConf EU 2014.

## Endre `build-css` til å bruke nodes.js asynkrone fil-api
* Erstatt importene av `readFileSync` og `writeFileSync` med `readFile` og `writeFile`, og bruken av dem.
* Istede for å lagre resultaten av `readFileSync` som en konstant, flytter vi resten av koden inn i funksjons-callbacken som er tredjeparamter. [api-doc](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback).

## Endre `build-js` til å bruke nodes.js asynkrone fil-api
* Erstatt importen av `writeFileSync` med og `writeFile`, og bruken av den.
* Build-js bruker allerede browserifys asynkrone funksjons-callback i `.bundle()` metoden, så her trenger vi ikke endre så mer
