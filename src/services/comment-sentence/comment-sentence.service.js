// Initializes the `commentSentence` service on path `/comment-sentence`
const { CommentSentence } = require('./comment-sentence.class');
const createModel = require('../../models/comment-sentence.model');
const hooks = require('./comment-sentence.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/comment-sentence', new CommentSentence(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comment-sentence');

  service.hooks(hooks);
};
