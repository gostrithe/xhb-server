// Initializes the `teacherEvaluteStudent` service on path `/teacher-evalute-student`
const { TeacherEvaluteStudent } = require('./teacher-evalute-student.class');
const createModel = require('../../models/teacher-evalute-student.model');
const hooks = require('./teacher-evalute-student.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/teacher-evalute-student', new TeacherEvaluteStudent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('teacher-evalute-student');

  service.hooks(hooks);
};
