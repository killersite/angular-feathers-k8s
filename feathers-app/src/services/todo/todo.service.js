// Initializes the `todo` service on path `/todo`
const createService = require('feathers-memory');
const hooks = require('./todo.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'todo',
    // paginate
  };

  // Initialize our service with any options it requires
  app.use('/todo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todo');

  service.hooks(hooks);
};
