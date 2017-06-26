const users = require('./users/users.service.js');
const batches = require('./batches/batches.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(batches);
};
