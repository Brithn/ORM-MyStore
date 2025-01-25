const { Pool } = require('pg');


  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'espe',
    password: 'espe',
    database: 'my-store'
  });

module.exports = pool;
