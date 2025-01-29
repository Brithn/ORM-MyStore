const { Pool } = require('pg');
const {config} = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${config.DBHOST}:${PASSWORD}/${config.DBHOST}/${config.DBNAME}`;

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'espe',
    password: 'espe',
    database: 'my-store'
  });

module.exports = pool;
