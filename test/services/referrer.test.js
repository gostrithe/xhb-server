const assert = require('assert');
const app = require('../../src/app');

describe('\'referrer\' service', () => {
  it('registered the service', () => {
    const service = app.service('referrer');

    assert.ok(service, 'Registered the service');
  });
});
