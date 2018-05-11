const assert = require('assert');

const hello = require('../../app/handlers/hello');

describe('handler hello', () => {
  it('should return hello when called', () => {
    assert.equal(hello.get(), 'hello world');
  });
});
