// const {client} = require('./postgres');

// async function getConnection(){
//   const client = new Client({
//     host: 'localhost',
//     port: 543,
//     user: 'espe',
//     password: 'espe',
//     database: 'my-store'
//   });
//   await client .connect();
//   return client;
// }

// module.exports = getConnection;

const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'espe',
    password: 'espe',
    database: 'my-store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
