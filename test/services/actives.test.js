const assert = require('assert');
const app = require('../../src/app');

describe('\'actives\' service', () => {
  it('registered the service', () => {
    const service = app.service('actives');

    assert.ok(service, 'Registered the service');
  });
});
