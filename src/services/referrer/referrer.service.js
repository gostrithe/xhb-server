// Initializes the `referrer` service on path `/referrer`
const { Referrer } = require('./referrer.class');
const createModel = require('../../models/referrer.model');
const hooks = require('./referrer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/referrer', new Referrer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('referrer');

  service.hooks(hooks);
};
