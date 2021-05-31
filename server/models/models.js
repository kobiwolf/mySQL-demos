const { bookshelf } = require('../db/mysql');
const User = bookshelf.Model.extend({
  tableName: 'users',
  requireFetch: false,
});
module.exports = User;
