/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
// const server = app.listen(port);

// make a sub-app
// FIXME this doesnt make socket.io url into - /api/v1/socket.io/. it's still /socket.io/
const express = require('@feathersjs/express');
const mainApp = express()
  // GCE needs a root route for heathcheck
  .get('/', function(req, res) {
    res.send('hello world');
  })
  .use('/api/v1', app);
const mainServer = mainApp.listen(port);
app.setup(mainServer);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

mainServer.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port
  )
);
