const handlerLogger = require('../tools/handler-logger');

module.exports = {
  get: [
    function p1(req) { return handlerLogger(req); },
    function handler() { return Promise.resolve('hello world'); },
  ],
};
