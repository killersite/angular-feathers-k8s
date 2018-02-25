const todo = require('./todo/todo.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(todo);
};
