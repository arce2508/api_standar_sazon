const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routers');

const app = express();
let server;

app
  .use(bodyParser.json())
  .use(routes);

const listen = () => new Promise((resolve, reject) => {
  const port = 8080;

  server = app.listen(port, () => {
    console.log(`Server started listening on http://localhost:${port}`);
    resolve();
  });

  server.on('error', (error) => {
    console.error(`Unable to start server: ${error.message}`);
    reject(error);
  });
});

const close = () => new Promise((resolve) => {
  server.close(() => {
    console.log('Stopped receiving connections to HTTP server');
    resolve();
  });
});

module.exports = {
  listen,
  close,
};
