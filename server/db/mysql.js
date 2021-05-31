const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'kobi123456',
  database: 'kobi',
});
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'admin',
    password: 'kobi123456',
    database: 'kobi',
    charset: 'utf8',
  },
});
const bookshelf = require('bookshelf')(knex);

module.exports = { bookshelf };
