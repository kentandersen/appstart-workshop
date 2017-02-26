const { join } = require('path');
const { createServer } = require('http');
const { parse } = require('url');
const connect = require('connect');

const port = 8080;
const public = join(__dirname, 'public');
const dist = join(__dirname, 'dist');

var app = connect();

// create http server and listen on port
createServer(app).listen(port);
console.log(`Server started on port ${port}`);
