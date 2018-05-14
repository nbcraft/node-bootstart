const _ = require('lodash');
const logger = require('./logger');

module.exports = (req) => {
  if (!req) {
    logger.warn('Empty req object on handler logger call');
  } else {
    logger.info('Call [%s] %s', _.get(req, 'method', '').toUpperCase(), _.get(req, 'url.path', ''));
    if (req.payload) {
      logger.debug('Payload %s : %s', _.get(req, 'payload'));
    }
  }
  return Promise.resolve;
};
