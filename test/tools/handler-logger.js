const _ = require('lodash');

const handlerLogger = require('../../app/tools/handler-logger');

const req = {
  method: 'POST',
  url: {
    path: '/hello',
  },
  payload: {
    test: 'test',
  },
};

describe('tool handler logger', () => {
  it('should log content of a request on a handler', () => handlerLogger(req));
  it('should log content of a request without payload on a handler', () => handlerLogger(_.omit(req, 'payload')));
  it('should log a warning on empty req but not crash', () => handlerLogger());
});
