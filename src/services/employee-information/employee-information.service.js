// Initializes the `employeeInformation` service on path `/employee-information`
const { EmployeeInformation } = require('./employee-information.class');
const createModel = require('../../models/employee-information.model');
const hooks = require('./employee-information.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/employee-information', new EmployeeInformation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employee-information');

  service.hooks(hooks);
};
