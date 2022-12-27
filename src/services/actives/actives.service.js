// Initializes the `actives` service on path `/actives`
const { Actives } = require('./actives.class');
const createModel = require('../../models/actives.model');
const hooks = require('./actives.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/actives', new Actives(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('actives');

  service.hooks(hooks);
};
