const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    origin: process.env.ORIGIN,
    mongoUri: process.env.MONGOURI
};