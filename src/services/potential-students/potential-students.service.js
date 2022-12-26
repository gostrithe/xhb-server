// Initializes the `Potential students` service on path `/potential-students`
const { PotentialStudents } = require('./potential-students.class');
const createModel = require('../../models/potential-students.model');
const hooks = require('./potential-students.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/potential-students', new PotentialStudents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('potential-students');

  service.hooks(hooks);
};
