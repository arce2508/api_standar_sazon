require('dotenv').config();

const app = require('./src');

// IIFE.
(async () => {
  try {
    await app.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
