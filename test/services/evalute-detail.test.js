const assert = require('assert');
const app = require('../../src/app');

describe('\'evalute-detail\' service', () => {
  it('registered the service', () => {
    const service = app.service('evalute-detail');

    assert.ok(service, 'Registered the service');
  });
});
