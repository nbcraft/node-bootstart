const Hapi = require('hapi');

const config = require('./config.json');

// Create a server with a host and port
const server = Hapi.server({
  host: config.host,
  port: config.port,
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler(/* request, h */) {
    return 'hello world';
  },
});

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
