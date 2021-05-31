const config = require('../../config');

const knex = require('knex')({
  client: 'mysql',
  connection: config,
});
const bookshelf = require('bookshelf')(knex);

module.exports = { bookshelf };
