const assert = require('assert');
const app = require('../../src/app');

describe('\'evaluateStudent\' service', () => {
  it('registered the service', () => {
    const service = app.service('evaluate-student');

    assert.ok(service, 'Registered the service');
  });
});
