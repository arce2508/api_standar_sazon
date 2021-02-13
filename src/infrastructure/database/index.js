const mongoose = require('mongoose');

const models = require('./models');

const connect = async () => {
  const uri = process.env.DB_URI;
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  await mongoose.connect(uri, options);
  console.log('Connected to MongoDB');
};

const disconnect = async () => {
  await mongoose.connection.close();
  console.log('Disconnected from MongoDB');
};

const getModels = () => models;

module.exports = {
  connect,
  disconnect,
  getModels,
};
