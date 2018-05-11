const Hapi = require('hapi');
const hapiOpenapi = require('hapi-openapi');
const path = require('path');

const config = require('./config/config.json');
const logger = require('./tools/logger');

// Create a server with a host and port
const server = Hapi.server({
  host: config.host,
  port: config.port,
});

// Start the server
async function start() {
  try {
    await server.register({
      plugin: hapiOpenapi,
      options: {
        api: path.join(__dirname, './config/api.json'),
        handlers: path.join(__dirname, './handlers'),
      },
    });
    await server.start();
  } catch (err) {
    logger.error('error %j', err);
    process.exit(1);
  }

  logger.info('Server running at: %j', server.info.uri);
}

start();
