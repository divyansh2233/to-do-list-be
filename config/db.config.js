const mongoose = require('mongoose');
const { mongoUri } = require('./env.config');

const MONGOURI = mongoUri;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log('Connected to DB !!');
  } catch (e) {
    console.log('Error connecting DB: ', e);
  }
};

module.exports = InitiateMongoServer;