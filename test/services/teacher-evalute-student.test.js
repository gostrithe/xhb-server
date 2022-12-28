const assert = require('assert');
const app = require('../../src/app');

describe('\'teacherEvaluteStudent\' service', () => {
  it('registered the service', () => {
    const service = app.service('teacher-evalute-student');

    assert.ok(service, 'Registered the service');
  });
});
