const database = require('./infrastructure/database');
const server = require('./interfaces/http/server');

const start = async () => {
  await database.connect();
  await server.listen();
};

const stop = async () => {
  await server.close();
  await database.disconnect();
};

module.exports = {
  start,
  stop,
};
