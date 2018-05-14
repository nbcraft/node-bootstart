const Hapi = require('hapi');
const hapiOpenapi = require('hapi-openapi'); // To set up routes from swagger docs
const HapiSwagger = require('hapi-swagger'); // Only for visual docs endpoint
const Inert = require('inert');
const Vision = require('vision');

const path = require('path');
const Pack = require('../package');

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
    await server.register([
      {
        plugin: hapiOpenapi,
        options: {
          api: path.join(__dirname, './config/api.json'),
          handlers: path.join(__dirname, './handlers'),
        },
      },
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: {
          jsonPath: path.join(__dirname, './config/api.json'),
          documentationPath: '/docs',
          info: {
            title: Pack.name,
            version: Pack.version,
          },
        },
      },
    ]);
    await server.start();
  } catch (err) {
    logger.error('error %j', err);
    process.exit(1);
  }

  logger.info('Server running at: %j', server.info.uri);
}

start();
