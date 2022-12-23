// Initializes the `commentsAfterClass` service on path `/comments-after-class`
const { CommentsAfterClass } = require('./comments-after-class.class');
const hooks = require('./comments-after-class.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),

    // 设置允许传数组，新增多条数据
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/comments-after-class', new CommentsAfterClass(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comments-after-class');

  service.hooks(hooks);
};
