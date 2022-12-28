const assert = require('assert');
const app = require('../../src/app');

describe('\'commentSentence\' service', () => {
  it('registered the service', () => {
    const service = app.service('comment-sentence');

    assert.ok(service, 'Registered the service');
  });
});
