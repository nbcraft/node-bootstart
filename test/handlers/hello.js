const Promise = require('bluebird');
const assert = require('assert');

const hello = require('../../app/handlers/hello');

const req = {
  method: 'POST',
  url: {
    path: '/hello',
  },
  payload: {
    test: 'test',
  },
};

describe('handler hello', () => {
  it('should return hello when called', async () => {
    const helloMethod = Array.isArray(hello.get) ? hello.get[hello.get.length - 1] : hello.get;
    const res = await helloMethod(req);
    assert.equal(res, 'hello world');
  });
  it('should go through pre handler methods', async () => {
    if (!Array.isArray(hello.get)) {
      return Promise.reject(new Error('hello handler doesn\'t have pre handler method'));
    }
    const res = await hello.get.reduce((acc, method) => method(req), Promise.resolve);
    assert.equal(res, 'hello world');
    return Promise.resolve;
  });
});
