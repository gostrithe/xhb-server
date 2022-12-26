const assert = require('assert');
const app = require('../../src/app');

describe('\'employeeInformation\' service', () => {
  it('registered the service', () => {
    const service = app.service('employee-information');

    assert.ok(service, 'Registered the service');
  });
});
