require('unfetch');

fetch('/whoami').then(function (res) {
  return res.json();
}).then(function (data) {
  return fetch('/whereami/ip?' + data.ip);
}).then(function (res) {
  return res.json();
}).then(function (data) {
  document.querySelector('main').innerHTML = data.countryName + ' ' + data.countryEmoji;
});
