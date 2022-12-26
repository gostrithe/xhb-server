const assert = require('assert');
const app = require('../../src/app');

describe('\'Potential students\' service', () => {
  it('registered the service', () => {
    const service = app.service('potential-students');

    assert.ok(service, 'Registered the service');
  });
});
