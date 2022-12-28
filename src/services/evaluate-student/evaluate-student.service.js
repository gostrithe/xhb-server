// Initializes the `evaluateStudent` service on path `/evaluate-student`
const { EvaluateStudent } = require('./evaluate-student.class');
const createModel = require('../../models/evaluate-student.model');
const hooks = require('./evaluate-student.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/evaluate-student', new EvaluateStudent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('evaluate-student');

  service.hooks(hooks);
};
