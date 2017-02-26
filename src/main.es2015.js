import 'unfetch';

fetch('/whoami')
  .then(res => res.json())
  .then(({ip}) => fetch(`/whereami/ip?${ip}`))
  .then(res => res.json())
  .then(({countryName, countryEmoji}) => {
    document.querySelector('main').innerHTML = `${countryName} ${countryEmoji}`;
  });
