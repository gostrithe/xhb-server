const assert = require('assert');
const app = require('../../src/app');

describe('\'commentsAfterClass\' service', () => {
  it('registered the service', () => {
    const service = app.service('comments-after-class');

    assert.ok(service, 'Registered the service');
  });
});
