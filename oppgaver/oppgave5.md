# Oppgave 5

I forrige oppgave flyttet vi cli kommandoene som tidligere lå under `scripts` i package.json til node.js. Det funker, men er ikke særlig pent (eller vedlikeholbart).
I denne oppgaven skal vi bruke node.js api til less og browserify for å oppnå samme resultat.

For enkelhets skyld er koden allerede skrevet og ligger i `losningsforslag/oppgave5/scripts`

## Endre `build-css` til å bruke node.js api
* les igjennom kommentarene i `losningsforslag/oppgave5/scripts/build-css.js` for å bli kjent med node.js apiet
* kopier `losningsforslag/oppgave5/scripts/build-css.js` inn i `scripts`

## Endre `build-js` til å bruke node.js api
* les igjennom kommentarene i `losningsforslag/oppgave5/scripts/build-js.js` for å bli kjent med node.js apiet
* kopier `losningsforslag/oppgave5/scripts/build-js.js` inn i `scripts`

## Verifiser
* Kjør `npm run build-css` og `npm run build-js` sjekk at filene oppdateres (sjekk timestamp)
* Last http://localhost:8080, finnes alle resursene?
