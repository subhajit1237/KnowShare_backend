const postgres = require('pg');
require('dotenv').config();
module.exports = {
    HOST: process.PGHOST,
    USER: process.PGUSER,
    PASSWORD: process.PGPASSWORD,
    DB: process.PGDATABASE,
    ENDPOINT: process.ENDPOINT_ID,
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};