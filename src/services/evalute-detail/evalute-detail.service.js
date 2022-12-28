// Initializes the `evalute-detail` service on path `/evalute-detail`
const { EvaluteDetail } = require('./evalute-detail.class');
const createModel = require('../../models/evalute-detail.model');
const hooks = require('./evalute-detail.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/evalute-detail', new EvaluteDetail(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('evalute-detail');

  service.hooks(hooks);
};
